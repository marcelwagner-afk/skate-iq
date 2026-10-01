import { useMemo } from 'react';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { AthleteLink, Card, Kpi, SectionTitle, fmtMag, fmtOriented } from '../ui/components';
import { allCategories, fmtDate, sportOf } from '../ui/labels';

export default function Home() {
  const { store } = useApp();
  const season = store.currentSeason();

  const latest = useMemo(() => {
    const cmps = [...store.b.competitions]
      .filter(c => c.seasonId === season && c.startDate <= store.today)
      .sort((a, b) => b.startDate.localeCompare(a.startDate)).slice(0, 4);
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

  const ger = store.federationStats('GER');
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold">{t('home.greeting', { name: 'Marcel' })}</h1>
        <p className="ink-3 text-sm">{t('home.sub')}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <Kpi label={t('kpi.athletes')} value={store.b.athletes.length} />
        <Kpi label={t('home.week')} value={latest.length} />
        <Kpi label={`🇩🇪 ${t('kpi.top25')}`} value={ger.top25} />
        <Kpi label={`🇩🇪 ${t('kpi.avgSpi')}`} value={ger.avgSpi != null ? fmtNum(ger.avgSpi, 1) : t('common.na')} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card>
          <SectionTitle>{t('home.latest')}</SectionTitle>
          <div className="space-y-2 text-sm">
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
                <span className="tnum font-bold" style={{ color: 'var(--good)' }}>+{fmtMag(m.delta, sportOf(m.cat))}</span>
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
  );
}
