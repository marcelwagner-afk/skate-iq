/**
 * Store – Phase-1 analytics service: pure, memoized computations over a
 * DataBundle, using the sport adapters and core engines. The Phase-2 backend
 * runs the same functions server-side on query results.
 */
import { registry } from '../adapters/types';
import { artisticAdapter } from '../adapters/artistic';
import { speedAdapter } from '../adapters/speed';
import {
  bestPerAthlete, corridor, percentileOf, round1, round2, targetValue,
  type Corridor, type PercentileResult,
} from '../core/benchmark';
import { computeCompetitionStrength } from '../core/competitionStrength';
import { computeSpi } from '../core/spi';
import type {
  Athlete, BenchmarkGroup, Competition, Event, ID, Performance, SpiSnapshot,
} from '../core/types';
import type { DataBundle } from './provider';

if (!registry.all().length) { registry.register(artisticAdapter); registry.register(speedAdapter); }

export interface RankedRow {
  athlete: Athlete; value: number; position: number; of: number;
  percentile: number | null;
}
export type TalentTier = 'ELITE' | 'INTERNATIONAL' | 'BREAKTHROUGH' | 'RISING' | 'HIGH_POTENTIAL';
export interface TalentEntry {
  athlete: Athlete; categoryId: ID; tier: TalentTier;
  evidence: { key: string; value: number }[];           // explainability (§11)
}

export class Store {
  private cache = new Map<string, unknown>();
  readonly today: string;
  constructor(public readonly b: DataBundle, today?: string) {
    this.today = today ?? b.generatedAt.slice(0, 10);
  }
  private memo<T>(key: string, f: () => T): T {
    if (!this.cache.has(key)) this.cache.set(key, f());
    return this.cache.get(key) as T;
  }

  // ---------- basic lookups ----------
  athlete(id: ID): Athlete | undefined { return this.memo('athMap', () => new Map(this.b.athletes.map(a => [a.id, a]))).get(id); }
  competition(id: ID): Competition | undefined { return this.memo('cmpMap', () => new Map(this.b.competitions.map(c => [c.id, c]))).get(id); }
  event(id: ID): Event | undefined { return this.memo('evMap', () => new Map(this.b.events.map(e => [e.id, e]))).get(id); }
  country(code: string) { return this.b.countries.find(c => c.code === code); }
  club(id?: ID) { return id ? this.b.clubs.find(c => c.id === id) : undefined; }
  seasonOf(date: string): string { return this.b.seasons.find(s => date >= s.start && date <= s.end)?.id ?? this.b.seasons[this.b.seasons.length - 1].id; }
  currentSeason(): string { return this.seasonOf(this.today); }
  categoryOf(catId: ID) {
    for (const a of registry.all()) { const c = a.categories.find(x => x.id === catId); if (c) return { cat: c, adapter: a }; }
    return null;
  }
  sportOfCategory(catId: ID): ID | null { return this.categoryOf(catId)?.adapter.sport.id ?? null; }

  /** all performances of a category in a season, joined with competition context */
  perfsIn(catId: ID, seasonId: ID): { p: Performance; ev: Event; cmp: Competition }[] {
    return this.memo(`perfs_${catId}_${seasonId}`, () => {
      const out: { p: Performance; ev: Event; cmp: Competition }[] = [];
      for (const p of this.b.performances) {
        const ev = this.event(p.eventId); if (!ev || ev.categoryId !== catId) continue;
        const cmp = this.competition(ev.competitionId); if (!cmp || cmp.seasonId !== seasonId) continue;
        out.push({ p, ev, cmp });
      }
      return out;
    });
  }
  athletePerfs(athleteId: ID): { p: Performance; ev: Event; cmp: Competition }[] {
    return this.memo(`athPerfs_${athleteId}`, () => this.b.performances
      .filter(p => p.athleteId === athleteId)
      .map(p => ({ p, ev: this.event(p.eventId)!, cmp: this.competition(this.event(p.eventId)!.competitionId)! }))
      .sort((a, b2) => a.cmp.startDate.localeCompare(b2.cmp.startDate)));
  }

  /**
   * Comparable-context selection (generalized DRIV rule): benchmark groups use
   * only performances from international-or-higher competitions when any exist.
   */
  private comparable(rows: { p: Performance; cmp: Competition }[]) {
    const intl = rows.filter(r => r.cmp.level !== 'national' && r.cmp.level !== 'regional');
    return intl.length ? intl : rows;
  }

  /** oriented best value per athlete for a category+season (world group basis) */
  valuesByAthlete(catId: ID, seasonId: ID): Map<ID, number[]> {
    return this.memo(`vba_${catId}_${seasonId}`, () => {
      const info = this.categoryOf(catId); const map = new Map<ID, number[]>();
      if (!info) return map;
      for (const { p, cmp } of this.comparable(this.perfsIn(catId, seasonId))) {
        const v = info.adapter.primaryValue(p);
        if (v == null) continue;
        void cmp;
        if (!map.has(p.athleteId)) map.set(p.athleteId, []);
        map.get(p.athleteId)!.push(v);
      }
      return map;
    });
  }

  /** Bestwerte je Athlet OHNE Kontextfilter – Basis der nationalen Rangliste
   *  (innerhalb eines Landes ist das Wettkampfformat konsistent; die
   *  International-vor-national-Regel würde hier Athleten mit internationalen
   *  Starts benachteiligen, weil z. B. Espoir international nur EIN Segment
   *  läuft, national aber zwei – Fall Mandaus, 03.10.2026). */
  private allValuesByAthlete(catId: ID, seasonId: ID): Map<ID, number[]> {
    return this.memo(`vbaAll_${catId}_${seasonId}`, () => {
      const info = this.categoryOf(catId); const map = new Map<ID, number[]>();
      if (!info) return map;
      for (const { p } of this.perfsIn(catId, seasonId)) {
        const v = info.adapter.primaryValue(p);
        if (v == null) continue;
        if (!map.has(p.athleteId)) map.set(p.athleteId, []);
        map.get(p.athleteId)!.push(v);
      }
      return map;
    });
  }

  // ---------- analytical ranking / leaderboard ----------
  ranking(catId: ID, seasonId: ID, scope?: { kind: 'country' | 'continent'; key: string }): RankedRow[] {
    return this.memo(`rank_${catId}_${seasonId}_${scope?.kind ?? 'w'}_${scope?.key ?? ''}`, () => {
      // Landes-Rangliste: ALLE Ergebnisse des Landes zählen (konsistentes Format);
      // Welt/Kontinent: vergleichbarer Kontext (international bevorzugt) wie gehabt.
      const vba = scope?.kind === 'country'
        ? this.allValuesByAthlete(catId, seasonId)
        : this.valuesByAthlete(catId, seasonId);
      const world = bestPerAthlete(this.valuesByAthlete(catId, seasonId));
      const rows: { athlete: Athlete; value: number }[] = [];
      for (const [athId, vals] of vba) {
        const a = this.athlete(athId); if (!a) continue;
        if (scope?.kind === 'country' && a.countryCode !== scope.key) continue;
        if (scope?.kind === 'continent' && this.country(a.countryCode)?.continent !== scope.key) continue;
        rows.push({ athlete: a, value: Math.max(...vals) });
      }
      rows.sort((a, b) => b.value - a.value);
      return rows.map((r, i) => ({
        ...r, position: i + 1, of: rows.length,
        percentile: percentileOf(r.value, world).percentile,
      }));
    });
  }

  positionOf(athleteId: ID, catId: ID, seasonId: ID, scope?: { kind: 'country' | 'continent'; key: string }): RankedRow | null {
    return this.ranking(catId, seasonId, scope).find(r => r.athlete.id === athleteId) ?? null;
  }

  percentile(athleteId: ID, catId: ID, seasonId: ID): PercentileResult | null {
    const vba = this.valuesByAthlete(catId, seasonId);
    const mine = vba.get(athleteId); if (!mine?.length) return null;
    return percentileOf(Math.max(...mine), bestPerAthlete(vba));
  }

  benchmarkTarget(catId: ID, seasonId: ID, group: BenchmarkGroup): number | null {
    let values: number[];
    if (group.kind === 'country') {
      values = this.ranking(catId, seasonId, { kind: 'country', key: group.countryCode }).map(r => r.value);
    } else if (group.kind === 'continent') {
      values = this.ranking(catId, seasonId, { kind: 'continent', key: group.continent }).map(r => r.value);
    } else if (group.kind === 'athletes') {
      values = this.ranking(catId, seasonId).filter(r => group.athleteIds.includes(r.athlete.id)).map(r => r.value);
    } else {
      values = bestPerAthlete(this.valuesByAthlete(catId, seasonId));
    }
    return targetValue(values, group);
  }

  corridorFor(catId: ID, seasonId: ID, group: BenchmarkGroup): Corridor | null {
    const vals = group.kind === 'topN'
      ? bestPerAthlete(this.valuesByAthlete(catId, seasonId)).sort((a, b) => b - a).slice(0, group.n)
      : bestPerAthlete(this.valuesByAthlete(catId, seasonId));
    return corridor(vals);
  }

  // ---------- competition strength ----------
  competitionStrength(cmpId: ID) {
    return this.memo(`cs_${cmpId}`, () => {
      const cmp = this.competition(cmpId)!;
      const evs = this.b.events.filter(e => e.competitionId === cmpId);
      let ranked = 0, t10 = 0, t25 = 0;
      for (const ev of evs) {
        const season = cmp.seasonId;
        const world = this.ranking(ev.categoryId, season);
        const entrants = new Set(this.b.performances.filter(p => p.eventId === ev.id).map(p => p.athleteId));
        ranked += entrants.size;
        for (const r of world) {
          if (!entrants.has(r.athlete.id)) continue;
          if (r.position <= 10) t10++; else if (r.position <= 25) t25++;
        }
      }
      return computeCompetitionStrength({
        competitionId: cmpId, level: cmp.level,
        rankedAthletes: ranked, top10Entrants: t10, top25Entrants: t25, today: this.today,
      });
    });
  }

  // ---------- SPI ----------
  spi(athleteId: ID, catId: ID): SpiSnapshot | null {
    return this.memo(`spi_${athleteId}_${catId}`, () => {
      const info = this.categoryOf(catId); if (!info) return null;
      const season = this.currentSeason();
      const prevSeason = this.b.seasons[this.b.seasons.findIndex(s => s.id === season) - 1]?.id ?? null;
      const mine = this.athletePerfs(athleteId).filter(x => x.ev.categoryId === catId);
      const seasonRows = this.comparable(mine.filter(x => x.cmp.seasonId === season));
      const seasonValues = seasonRows
        .map(x => ({ date: x.cmp.startDate, value: info.adapter.primaryValue(x.p) }))
        .filter((v): v is { date: string; value: number } => v.value != null);
      if (!seasonValues.length) return null;
      const prevVals = prevSeason
        ? this.comparable(mine.filter(x => x.cmp.seasonId === prevSeason))
          .map(x => info.adapter.primaryValue(x.p)).filter((v): v is number => v != null)
        : [];
      return computeSpi({
        athleteId, sportId: info.adapter.sport.id, categoryId: catId,
        seasonValues,
        prevSeasonBest: prevVals.length ? Math.max(...prevVals) : null,
        worldGroupValues: bestPerAthlete(this.valuesByAthlete(catId, season)),
        competitionStrengths: [...new Set(seasonRows.map(x => x.cmp.id))].map(id => this.competitionStrength(id).index),
        today: this.today,
      }, info.adapter.spiWeights);
    });
  }

  // ---------- talent radar ----------
  talentRadar(sportId?: ID, countryCode?: string): TalentEntry[] {
    return this.memo(`talent_${sportId ?? 'all'}_${countryCode ?? 'all'}`, () => {
      const season = this.currentSeason();
      const out: TalentEntry[] = [];
      for (const adapter of registry.enabled()) {
        if (sportId && adapter.sport.id !== sportId) continue;
        for (const cat of adapter.categories) {
          const world = this.ranking(cat.id, season);
          for (const row of world) {
            if (countryCode && row.athlete.countryCode !== countryCode) continue;
            const spi = this.spi(row.athlete.id, cat.id);
            const dev = spi?.contributions.find(c => c.dimension === 'developmentRate')?.score ?? 50;
            const pct = row.percentile ?? 0;
            const ev = [
              { key: 'worldPosition', value: row.position },
              { key: 'percentile', value: pct },
              { key: 'developmentScore', value: dev },
              { key: 'spi', value: spi?.value ?? 0 },
            ];
            let tier: TalentTier | null = null;
            if (row.position <= 3 || (spi && spi.value >= 85)) tier = 'ELITE';
            else if (row.position <= 25 || pct >= 90) tier = 'INTERNATIONAL';
            else if (dev >= 65 && row.position <= 50) tier = 'BREAKTHROUGH';
            else if (dev >= 60) tier = 'RISING';
            else if (cat.ageGroupId === 'junior' && pct >= 75) tier = 'HIGH_POTENTIAL';
            if (tier) out.push({ athlete: row.athlete, categoryId: cat.id, tier, evidence: ev });
          }
        }
      }
      const order: TalentTier[] = ['ELITE', 'INTERNATIONAL', 'BREAKTHROUGH', 'RISING', 'HIGH_POTENTIAL'];
      return out.sort((a, b) => order.indexOf(a.tier) - order.indexOf(b.tier));
    });
  }

  // ---------- federation / country aggregates ----------
  federationStats(countryCode: string, sportId?: ID) {
    return this.memo(`fed_${countryCode}_${sportId ?? 'all'}`, () => {
      const season = this.currentSeason();
      let athletes = 0, top10 = 0, top25 = 0, top50 = 0, podiums = 0;
      const pcts: number[] = []; const spis: number[] = []; const devs: number[] = [];
      for (const adapter of registry.enabled()) {
        if (sportId && adapter.sport.id !== sportId) continue;
        for (const cat of adapter.categories) {
          for (const row of this.ranking(cat.id, season)) {
            if (row.athlete.countryCode !== countryCode) continue;
            athletes++;
            if (row.position <= 10) top10++;
            if (row.position <= 25) top25++;
            if (row.position <= 50) top50++;
            if (row.percentile != null) pcts.push(row.percentile);
            const spi = this.spi(row.athlete.id, cat.id);
            if (spi) {
              spis.push(spi.value);
              const d = spi.contributions.find(c => c.dimension === 'developmentRate');
              if (d) devs.push(d.score);
            }
          }
        }
      }
      for (const { p, ev } of this.b.performances.map(p => ({ p, ev: this.event(p.eventId)! }))) {
        const cmp = this.competition(ev.competitionId)!;
        if (cmp.seasonId !== season) continue;
        if (cmp.level === 'national' || cmp.level === 'regional') continue;
        const a = this.athlete(p.athleteId);
        if (a?.countryCode === countryCode && p.placement != null && p.placement <= 3) podiums++;
      }
      const avg = (xs: number[]): number | null => (xs.length ? round1(xs.reduce((a, b) => a + b, 0) / xs.length) : null);
      const emerging = this.talentRadar(sportId, countryCode).filter(t => t.tier === 'BREAKTHROUGH' || t.tier === 'RISING' || t.tier === 'HIGH_POTENTIAL').length;
      return {
        athletes, top10, top25, top50, podiums,
        avgPercentile: avg(pcts), avgSpi: avg(spis),
        development: avg(devs), emerging,
      };
    });
  }

  countryMatrix(sportId?: ID) {
    return this.b.countries
      .map(c => ({ country: c, s: this.federationStats(c.code, sportId) }))
      .filter(r => r.s.athletes > 0)
      .sort((a, b) => (b.s.avgSpi ?? 0) - (a.s.avgSpi ?? 0));
  }

  // ---------- development series for charts ----------
  devSeries(athleteId: ID, catId: ID): { date: string; value: number; competition: string; level: string }[] {
    const info = this.categoryOf(catId); if (!info) return [];
    const out: { date: string; value: number; competition: string; level: string }[] = [];
    for (const x of this.athletePerfs(athleteId)) {
      if (x.ev.categoryId !== catId) continue;
      const v = info.adapter.primaryValue(x.p);
      if (v != null) out.push({ date: x.cmp.startDate, value: v, competition: x.cmp.name, level: x.cmp.level });
    }
    return out;
  }

  pb(athleteId: ID, catId: ID): number | null {
    const s = this.devSeries(athleteId, catId);
    return s.length ? round2(Math.max(...s.map(x => x.value))) : null;
  }
  seasonBest(athleteId: ID, catId: ID): number | null {
    const season = this.currentSeason();
    const info = this.categoryOf(catId); if (!info) return null;
    const vals = this.athletePerfs(athleteId)
      .filter(x => x.ev.categoryId === catId && x.cmp.seasonId === season)
      .map(x => info.adapter.primaryValue(x.p)).filter((v): v is number => v != null);
    return vals.length ? round2(Math.max(...vals)) : null;
  }
  /** 12-month development of best value, in metric units (oriented) */
  trend12(athleteId: ID, catId: ID): number | null {
    const s = this.devSeries(athleteId, catId);
    if (s.length < 2) return null;
    const cutoff = new Date(new Date(this.today).getTime() - 365 * 86400e3).toISOString().slice(0, 10);
    const recent = s.filter(x => x.date >= cutoff).map(x => x.value);
    const before = s.filter(x => x.date < cutoff).map(x => x.value);
    if (!recent.length || !before.length) return null;
    return round2(Math.max(...recent) - Math.max(...before));
  }
  categoriesOfAthlete(athleteId: ID): ID[] {
    return [...new Set(this.athletePerfs(athleteId).map(x => x.ev.categoryId))];
  }
}
