import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { t, fmtNum, localeTag } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { AthleteLink, Card, Kpi, SecLabel, SectionTitle, fmtMag, fmtOriented } from '../ui/components';
import { allCategories, fmtDate, sportOf } from '../ui/labels';
import spotlightImg from '../assets/spotlight.jpg';
import talentImg from '../assets/talent.jpg';

/** Akzentverläufe der Disziplin-Kacheln (Designvorlage: Sports Overview) */
const TILE_GRADS = [
  'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  'linear-gradient(135deg, #38cfff, #3b82f6)',
  'linear-gradient(135deg, #27b584, #38cfff)',
  'linear-gradient(135deg, #e06a3a, #d9a022)',
];

export default function Home() {
  const { store } = useApp();
  const season = store.currentSeason();

  const latest = useMemo(() => {
    const cmps = [...store.b.competitions]
      .filter(c => c.seasonId === season && c.startDate <= store.today)
      .sort((a, b) => b.startDate.localeCompare(a.startDate)).slice(0, 5);
    return cmps.map(c => ({ c, strength: store.competitionStrength(c.id).index }));
  }, [store, season]);

  const movers = useMemo(() => {
    const rows: { id: string; name: string; cat: string; delta: number }[] = [];
    for (const cat of allCategories()) {
      for (const r of store.ranking(cat.id, season).slice(0, 40)) {
        const tr = store.trend12(r.athlete.id, cat.id);
        if (tr != null) rows.push({ id: r.athlete.id, name: r.athlete.displayName, cat: cat.id, delta: tr });
      }
    }
    return rows.sort((a, b) => b.delta - a.delta).slice(0, 6);
  }, [store, season]);

  const pbs = useMemo(() => {
    const out: { id: string; name: string; cat: string; v: number; date: string }[] = [];
    for (const cat of allCategories()) {
      for (const r of store.ranking(cat.id, season).slice(0, 30)) {
        const s = store.devSeries(r.athlete.id, cat.id);
        if (s.length < 2) continue;
        const last = s.at(-1)!;
        if (last.value >= Math.max(...s.map(x => x.value)) - 1e-9 && last.date >= '2026-07-01') {
          out.push({ id: r.athlete.id, name: r.athlete.displayName, cat: cat.id, v: last.value, date: last.date });
        }
      }
    }
    return out.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
  }, [store, season]);

  /* Disziplin-Kacheln: Athleten je Disziplin (Artistic-first) */
  const disTiles = useMemo(() => {
    const byDis = new Map<string, Set<string>>();
    for (const cat of allCategories()) {
      const dis = cat.disciplineId;
      const set = byDis.get(dis) ?? new Set<string>();
      for (const r of store.ranking(cat.id, season)) set.add(r.athlete.id);
      byDis.set(dis, set);
    }
    return [...byDis.entries()].map(([dis, set]) => ({ dis, n: set.size })).filter(x => x.n > 0);
  }, [store, season]);

  /* Spotlight: stärkste 12-Monats-Verbesserung mit Weltranglisten-Kontext */
  const spot = movers[0] ? (() => {
    const m = movers[0];
    const pos = store.positionOf(m.id, m.cat, season);
    const sb = store.seasonBest(m.id, m.cat);
    return { ...m, pos, sb };
  })() : null;

  const hour = new Date().getHours();
  const greet = t(hour < 11 ? 'home.greet.morning' : hour < 18 ? 'home.greet.day' : 'home.greet.evening');
  const today = new Date().toLocaleDateString(localeTag(),
    { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const ger = store.federationStats('GER');
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-extrabold">{greet} 👋</h1>
          <p className="ink-3 text-sm">{t('home.sub')}</p>
        </div>
        <span className="ink-3 text-sm">{today}</span>
      </div>

      {/* KPI-Reihe (Vorlage: 4 Kacheln mit Delta-Badges) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <Kpi label={t('kpi.athletes')} value={store.b.athletes.length} />
        <Kpi label={t('home.pbs')} value={pbs.length} delta={pbs.length ? { text: `+${pbs.length}`, dir: 'up' } : undefined} sub={t('home.pbsSub')} />
        <Kpi label={`🇩🇪 ${t('kpi.top25')}`} value={ger.top25} />
        <Kpi label={`🇩🇪 ${t('kpi.avgSpi')}`} value={ger.avgSpi != null ? fmtNum(ger.avgSpi, 1) : t('common.na')} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Spotlight-Hero + Disziplin-Kacheln */}
        <div className="lg:col-span-2 space-y-5 min-w-0">
          {spot && (
            <div className="hero-band p-5 sm:p-6">
              <div className="hero-photo" style={{ backgroundImage: `url(${spotlightImg})`, width: 'min(34%, 240px)' }} aria-hidden="true" />
              <SecLabel>{t('home.spotlight')}</SecLabel>
              <h2 className="text-xl sm:text-2xl font-extrabold max-w-lg">{t('home.spotlightH', { name: spot.name })}</h2>
              <p className="text-sm ink-2 mt-1 max-w-md">
                {t('home.spotlightP', {
                  delta: fmtMag(spot.delta, sportOf(spot.cat)),
                  pos: spot.pos ? `#${spot.pos.position}` : '–',
                })}
              </p>
              <Link to={`/athlete/${spot.id}`} className="btn btn-primary inline-block mt-4 text-sm">{t('home.viewAthlete')} →</Link>
            </div>
          )}
          <div>
            <SecLabel>{t('home.sportsOverview')}</SecLabel>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {disTiles.map((d2, i) => (
                <Link key={d2.dis} to="/leaderboard" className="tile block"
                  style={{ ['--tile-grad' as never]: TILE_GRADS[i % TILE_GRADS.length] }}>
                  <div className="text-[11px] uppercase tracking-wider ink-3">{t(`dis.${d2.dis}`)}</div>
                  <div className="hero-num text-2xl font-extrabold mt-1">{d2.n}</div>
                  <div className="text-xs ink-3">{t('home.ranked')}</div>
                </Link>
              ))}
            </div>
          </div>
          {/* Talent-Radar-Banner (Vorlage) */}
          <div className="hero-band p-5 sm:p-6">
            <div className="hero-photo" style={{ backgroundImage: `url(${talentImg})`, width: 'min(42%, 300px)', backgroundPosition: 'center 35%' }} aria-hidden="true" />
            <div className="max-w-md">
              <SecLabel>{t('nav.talent')}</SecLabel>
              <h2 className="text-lg sm:text-xl font-extrabold">{t('home.talentH')}</h2>
              <p className="text-sm ink-2 mt-0.5">{t('home.talentP')}</p>
              <Link to="/talent" className="btn btn-primary inline-block text-sm mt-3">{t('home.viewTalent')} →</Link>
            </div>
          </div>
        </div>

        {/* Rechte Spalte: Latest Results + Movers + PBs */}
        <div className="space-y-5 min-w-0">
          <Card>
            <SecLabel>{t('home.latest')}</SecLabel>
            <div className="space-y-2.5 text-sm">
              {latest.map(({ c, strength }) => (
                <div key={c.id} className="flex justify-between items-center gap-2">
                  <a href={`#/competition/${c.id}`} className="font-semibold hover:underline truncate min-w-0">{c.name}</a>
                  <span className="chip whitespace-nowrap">{t('comp.strength')} {fmtNum(strength, 0)}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <SectionTitle>{t('home.movers')}</SectionTitle>
            <div className="space-y-2 text-sm">
              {movers.map(m => (
                <div key={m.id + m.cat} className="flex justify-between items-center gap-2">
                  <AthleteLink id={m.id} name={m.name} flag={store.country(store.athlete(m.id)!.countryCode)?.flag} />
                  <span className="delta up">+{fmtMag(m.delta, sportOf(m.cat))}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <SectionTitle>{t('home.pbs')}</SectionTitle>
            <div className="space-y-2 text-sm">
              {pbs.map(p => (
                <div key={p.id + p.cat} className="flex justify-between items-center gap-2">
                  <AthleteLink id={p.id} name={p.name} flag={store.country(store.athlete(p.id)!.countryCode)?.flag} />
                  <span className="ink-3">{fmtDate(p.date)}</span>
                  <span className="tnum font-semibold">{fmtOriented(p.v, sportOf(p.cat))}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
