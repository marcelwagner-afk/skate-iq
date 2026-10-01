import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { AthleteLink, Card, ComputedNote, Kpi, SectionTitle, fmtOriented } from '../ui/components';
import { catLabel, fmtDate, sportOf } from '../ui/labels';

export function CompetitionList() {
  const { store } = useApp();
  const rows = useMemo(() => [...store.b.competitions]
    .sort((a, b) => b.startDate.localeCompare(a.startDate))
    .map(c => ({ c, s: store.competitionStrength(c.id) })), [store]);
  return (
    <div className="space-y-4">
      <SectionTitle>{t('comp.title')}</SectionTitle>
      <Card>
        <div className="overflow-x-auto">
          <table className="tbl w-full">
            <thead><tr><th>{t('common.date')}</th><th>{t('common.competition')}</th><th>{t('common.level')}</th><th>{t('comp.strength')}</th></tr></thead>
            <tbody>
              {rows.map(({ c, s }) => (
                <tr key={c.id}>
                  <td className="whitespace-nowrap">{fmtDate(c.startDate)}</td>
                  <td><Link to={`/competition/${c.id}`} className="font-semibold hover:underline">{c.name}</Link></td>
                  <td><span className="chip">{c.level}</span></td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 rounded bg-[var(--surface-2)]"><div className="h-full rounded" style={{ width: `${s.index}%`, background: 'var(--seq-400)' }} /></div>
                      <span className="tnum text-sm font-semibold">{fmtNum(s.index, 0)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ComputedNote />
      </Card>
    </div>
  );
}

export function CompetitionDetail() {
  const { id } = useParams();
  const { store } = useApp();
  const cmp = id ? store.competition(id) : undefined;
  const data = useMemo(() => {
    if (!cmp) return null;
    const strength = store.competitionStrength(cmp.id);
    const past = cmp.startDate <= store.today;
    const evs = store.b.events.filter(e => e.competitionId === cmp.id);
    const sections = evs.map(ev => {
      const perfs = store.b.performances.filter(p => p.eventId === ev.id)
        .sort((a, b) => (a.placement ?? 999) - (b.placement ?? 999));
      const sportId = sportOf(ev.categoryId);
      const info = store.categoryOf(ev.categoryId)!;
      const world = store.ranking(ev.categoryId, cmp.seasonId);
      const rows = perfs.map(p => {
        const series = store.devSeries(p.athleteId, ev.categoryId);
        const v = info.adapter.primaryValue(p);
        const isPB = past && v != null && series.length > 0 && v >= Math.max(...series.map(s2 => s2.value)) - 1e-9;
        return { p, v, isPB, worldPos: world.find(w => w.athlete.id === p.athleteId)?.position ?? null };
      });
      return { ev, sportId, rows };
    });
    return { strength, past, sections };
  }, [cmp, store]);
  if (!cmp || !data) return <Card>{t('common.notFound')}</Card>;
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold">{cmp.name}</h1>
        <p className="ink-3 text-sm">{fmtDate(cmp.startDate)} · <span className="chip">{cmp.level}</span> · {data.past ? t('comp.after') : t('comp.before')}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <Kpi label={t('comp.strength')} value={fmtNum(data.strength.index, 0)} sub="/ 100" />
        {data.strength.factors.filter(f => ['rankedAthletes', 'top10Entrants', 'top25Entrants'].includes(f.key)).map(f => (
          <Kpi key={f.key} label={f.key === 'rankedAthletes' ? t('comp.participants') : f.key === 'top10Entrants' ? t('kpi.top10') : t('kpi.top25')} value={f.value} />
        ))}
      </div>
      {data.sections.map(({ ev, sportId, rows }) => (
        <Card key={ev.id}>
          <SectionTitle>{catLabel(store, ev.categoryId)} <span className="chip ml-2">{rows.length} {t('comp.participants')}</span></SectionTitle>
          <div className="overflow-x-auto">
            <table className="tbl w-full">
              <thead>
                <tr>
                  <th>{data.past ? t('common.placement') : ''}</th><th>{t('board.athlete')}</th>
                  <th>{t('common.country')}</th><th>{t('kpi.world')}</th><th>{data.past ? t('board.value') : t('kpi.sb')}</th><th></th>
                </tr>
              </thead>
              <tbody>
                {rows.slice(0, 20).map(({ p, v, isPB, worldPos }) => {
                  const a = store.athlete(p.athleteId)!;
                  return (
                    <tr key={p.id}>
                      <td className="tnum font-bold w-10">{data.past ? (p.placement && p.placement <= 3 ? ['🥇', '🥈', '🥉'][p.placement - 1] : p.placement) : ''}</td>
                      <td><AthleteLink id={a.id} name={a.displayName} /></td>
                      <td>{store.country(a.countryCode)?.flag} {a.countryCode}</td>
                      <td className="tnum ink-2">{worldPos ? `#${worldPos}` : t('common.na')}</td>
                      <td className="tnum font-semibold">{data.past ? fmtOriented(v, sportId) : fmtOriented(store.seasonBest(a.id, ev.categoryId), sportId)}</td>
                      <td>{isPB && <span className="chip" style={{ borderColor: 'var(--good)', color: 'var(--good)' }}>PB</span>}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      ))}
      <ComputedNote />
    </div>
  );
}
