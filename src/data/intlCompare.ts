/**
 * Internationaler Vergleich (Marcel, 08.11.2026): „ganz genaue Auswertung, wie
 * die Sportler im internationalen Vergleich stehen – speziell EM, WM, Europa
 * Cup, World Cups Semifinale und Finale."
 *
 * Anders als intlPlacement.ts (virtuelle Einordnung des Saison-Bestwerts)
 * wertet dieses Modul die REALEN Starts aller Athleten eines Landes bei den
 * internationalen Meisterschaften aus: Platz im Feld, geschlagener Feldanteil,
 * Rückstand auf Sieg und Podium – je Wettbewerbstyp und über die Zeit.
 */
import { round1, round2 } from '../core/benchmark';
import type { Athlete, Competition, ID } from '../core/types';
import type { Store } from './store';

export type IntlGroup = 'WM' | 'EM' | 'CoE' | 'WC_SEMI' | 'WC_F';
export const INTL_GROUPS: IntlGroup[] = ['WM', 'EM', 'CoE', 'WC_SEMI', 'WC_F'];

/** seriesKey → Vergleichsgruppe. Reale DRIV-Codes und synthetische Demo-Keys. */
const SERIES_TO_GROUP: Record<string, IntlGroup> = {
  WM: 'WM', worlds: 'WM',
  EM: 'EM', europeans: 'EM',
  CoE: 'CoE',
  'WC-EU': 'WC_SEMI', 'WC-SA': 'WC_SEMI', worldcup1: 'WC_SEMI', worldcup2: 'WC_SEMI',
  'WC-F': 'WC_F',
};
export const intlGroupOf = (cmp: Competition): IntlGroup | null =>
  SERIES_TO_GROUP[cmp.seriesKey ?? ''] ?? null;

/** Geschlagener Feldanteil in Prozent (Platz 1 von n ⇒ 100, Letzter ⇒ 0). */
export const pctBeaten = (pos: number, n: number): number | null =>
  n > 1 ? round1((100 * Math.max(0, n - pos)) / (n - 1)) : null;

export interface IntlStart {
  athlete: Athlete;
  cmp: Competition;
  evId: ID;
  group: IntlGroup;
  catId: ID;
  pos: number;              // realer Platz (offiziell; sonst aus dem Wertefeld bestimmt)
  n: number;                // Feldgröße (gewertete Ergebnisse)
  pct: number | null;       // geschlagener Feldanteil in %
  total: number | null;
  gapWinner: number | null; // total − Siegwert (0 ⇒ Sieg)
  gapPodium: number | null; // total − Wert des 3. Platzes (≥ 0 ⇒ Podium)
}

/** Alle realen Starts der Athleten eines Landes bei EM/WM/CoE/World Cups, chronologisch. */
export function intlStarts(store: Store, country = 'GER'): IntlStart[] {
  const grp = new Map<ID, { cmp: Competition; group: IntlGroup }>();
  for (const cmp of store.b.competitions) {
    const g = intlGroupOf(cmp);
    if (g) grp.set(cmp.id, { cmp, group: g });
  }
  const evIndex = new Map<ID, { competitionId: ID; categoryId: ID }>();
  for (const ev of store.b.events) {
    if (grp.has(ev.competitionId)) evIndex.set(ev.id, ev);
  }
  // Felder je Event einmal aufbauen: gewertete Werte absteigend + Feldgröße
  const fields = new Map<ID, { values: number[]; n: number }>();
  for (const p of store.b.performances) {
    const ev = evIndex.get(p.eventId);
    if (!ev || p.status !== 'ok') continue;
    const v = store.categoryOf(ev.categoryId)?.adapter.primaryValue(p) ?? null;
    let f = fields.get(p.eventId);
    if (!f) { f = { values: [], n: 0 }; fields.set(p.eventId, f); }
    f.n++;
    if (v != null) f.values.push(v);
  }
  for (const f of fields.values()) f.values.sort((a, b) => b - a);

  const out: IntlStart[] = [];
  for (const p of store.b.performances) {
    const ev = evIndex.get(p.eventId);
    if (!ev || p.status !== 'ok') continue;
    const athlete = store.athlete(p.athleteId);
    if (!athlete || athlete.countryCode !== country) continue;
    const { cmp, group } = grp.get(ev.competitionId)!;
    const f = fields.get(p.eventId)!;
    const total = store.categoryOf(ev.categoryId)?.adapter.primaryValue(p) ?? null;
    const pos = p.placement ?? (total != null ? 1 + f.values.filter(v => v > total + 1e-9).length : null);
    if (pos == null) continue;
    const third = f.values.length >= 3 ? f.values[2] : null;
    out.push({
      athlete, cmp, evId: p.eventId, group, catId: ev.categoryId, pos, n: f.n,
      pct: pctBeaten(pos, f.n), total,
      gapWinner: total != null && f.values.length ? round2(total - f.values[0]) : null,
      gapPodium: total != null && third != null ? round2(total - third) : null,
    });
  }
  return out.sort((a, b) => a.cmp.startDate.localeCompare(b.cmp.startDate));
}

export interface IntlFilter {
  seasonId?: ID | 'all';
  catId?: ID | 'all';
  groups?: ReadonlySet<IntlGroup>;
}

export function filterStarts(starts: IntlStart[], f: IntlFilter): IntlStart[] {
  return starts.filter(s =>
    (!f.seasonId || f.seasonId === 'all' || s.cmp.seasonId === f.seasonId) &&
    (!f.catId || f.catId === 'all' || s.catId === f.catId) &&
    (!f.groups || f.groups.has(s.group)));
}

export interface IntlAthleteRow {
  athlete: Athlete;
  catIds: ID[];
  starts: IntlStart[];      // chronologisch
  podiums: number;          // Platz ≤ 3
  top10: number;            // Platz ≤ 10
  bestPos: number;
  avgPct: number | null;    // Ø geschlagener Feldanteil
  lastDate: string;
}

/** Gefilterte Starts je Athlet zusammenfassen, sortiert nach Ø geschlagenem Feld. */
export function intlAthleteRows(starts: IntlStart[]): IntlAthleteRow[] {
  const byAth = new Map<ID, IntlStart[]>();
  for (const s of starts) {
    const list = byAth.get(s.athlete.id);
    if (list) list.push(s); else byAth.set(s.athlete.id, [s]);
  }
  const out: IntlAthleteRow[] = [];
  for (const list of byAth.values()) {
    const pcts = list.map(s => s.pct).filter((v): v is number => v != null);
    out.push({
      athlete: list[0].athlete,
      catIds: [...new Set(list.map(s => s.catId))],
      starts: list,
      podiums: list.filter(s => s.pos <= 3).length,
      top10: list.filter(s => s.pos <= 10).length,
      bestPos: Math.min(...list.map(s => s.pos)),
      avgPct: pcts.length ? round1(pcts.reduce((a, b) => a + b, 0) / pcts.length) : null,
      lastDate: list[list.length - 1].cmp.startDate,
    });
  }
  return out.sort((a, b) => (b.avgPct ?? -1) - (a.avgPct ?? -1) || a.bestPos - b.bestPos);
}
