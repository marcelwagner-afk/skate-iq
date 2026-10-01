import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { AthleteLink, Card, Gate, Kpi, SectionTitle, TierBadge, fmtMag } from '../ui/components';
import { allCategories, catLabel, sportOf } from '../ui/labels';

export default function Federation() {
  const { code = 'GER' } = useParams();
  const nav = useNavigate();
  const { store } = useApp();
  const season = store.currentSeason();
  const country = store.country(code);
  const s = store.federationStats(code);
  const radar = store.talentRadar(undefined, code);

  const cockpit = useMemo(() => {
    const attention: { id: string; name: string; cat: string; why: string }[] = [];
    const near10: typeof attention = []; const near25: typeof attention = [];
    const improvers: { id: string; name: string; cat: string; v: number; sport: string; rel: number }[] = [];
    const decline: typeof improvers = [];
    const top: { id: string; name: string; cat: string; pos: number }[] = [];
    for (const cat of allCategories()) {
      const world = store.ranking(cat.id, season);
      const sport = sportOf(cat.id);
      for (const r of world) {
        if (r.athlete.countryCode !== code) continue;
        const label = catLabel(store, cat.id);
        if (r.position <= 10) top.push({ id: r.athlete.id, name: r.athlete.displayName, cat: label, pos: r.position });
        else if (r.position <= 14) near10.push({ id: r.athlete.id, name: r.athlete.displayName, cat: label, why: `#${r.position}` });
        else if (r.position > 25 && r.position <= 30) near25.push({ id: r.athlete.id, name: r.athlete.displayName, cat: label, why: `#${r.position}` });
        const tr = store.trend12(r.athlete.id, cat.id);
        if (tr != null && tr !== 0) {
          const rel = Math.abs(tr) / Math.max(Math.abs(r.value), 1e-9);   // cross-sport comparable
          const entry = { id: r.athlete.id, name: r.athlete.displayName, cat: label, v: tr, sport, rel };
          if (tr > 0) improvers.push(entry);
          else {
            decline.push(entry);
            attention.push({ id: r.athlete.id, name: r.athlete.displayName, cat: label, why: `${t('kpi.trend12')}: −${fmtMag(tr, sport)}` });
          }
        }
      }
    }
    improvers.sort((a, b) => b.rel - a.rel); decline.sort((a, b) => b.rel - a.rel); top.sort((a, b) => a.pos - b.pos);
    return { attention: attention.slice(0, 6), near10, near25, improvers: improvers.slice(0, 6), decline: decline.slice(0, 6), top: top.slice(0, 8) };
  }, [store, season, code]);

  const catHealth = useMemo(() => allCategories().map(cat => {
    const world = store.ranking(cat.id, season);
    const mine = world.filter(r => r.athlete.countryCode === code);
    const best = mine[0];
    return {
      id: cat.id, label: cat.label(), n: mine.length,
      best: best ? best.position : null,
      top25: mine.filter(r => r.position <= 25).length,
    };
  }).filter(r => r.n > 0), [store, season, code]);

  if (!country) return <Card>{t('common.notFound')}</Card>;
  const Section = ({ title, items }: { title: string; items: { id: string; name: string; cat: string; why?: string; v?: number; pos?: number }[] }) => (
    <Card>
      <SectionTitle>{title}</SectionTitle>
      {items.length === 0 ? <p className="text-sm ink-3">{t('common.na')}</p> : (
        <div className="space-y-1.5 text-sm">
          {items.map((x, i) => (
            <div key={x.id + i} className="flex justify-between gap-2">
              <AthleteLink id={x.id} name={x.name} />
              <span className="ink-3 truncate text-xs pt-0.5">{x.cat}</span>
              <span className="tnum font-semibold whitespace-nowrap">{x.pos ? `#${x.pos}` : x.why ?? ''}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-4xl">{country.flag}</span>
        <h1 className="text-2xl font-extrabold">{t('fed.title', { country: t(country.nameKey) })}</h1>
        <select className="rounded-lg border px-2 py-1.5 text-sm ml-auto" style={{ borderColor: 'var(--border)', background: 'var(--surface-1)' }}
          value={code} onChange={e => nav(`/federation/${e.target.value}`)}>
          {store.b.countries.map(c => <option key={c.code} value={c.code}>{c.flag} {t(c.nameKey)}</option>)}
        </select>
      </div>
      <Gate feature="federation.intelligence">
        {/* §66: above the fold */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          <Kpi label={t('kpi.athletes')} value={s.athletes} />
          <Kpi label={t('kpi.top10')} value={s.top10} />
          <Kpi label={t('kpi.top25')} value={s.top25} />
          <Kpi label={t('kpi.top50')} value={s.top50} />
          <Kpi label={t('kpi.medals')} value={s.podiums} />
          <Kpi label={t('kpi.avgPercentile')} value={s.avgPercentile != null ? fmtNum(s.avgPercentile, 1) : t('common.na')} />
          <Kpi label={t('kpi.avgSpi')} value={s.avgSpi != null ? fmtNum(s.avgSpi, 1) : t('common.na')} />
          <Kpi label={t('kpi.emerging')} value={s.emerging} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Section title={`🏅 ${t('fed.topPerformers')}`} items={cockpit.top} />
          <Section title={`🚀 ${t('fed.improvers')}`} items={cockpit.improvers.map(x => ({ ...x, why: '+' + fmtMag(x.v, x.sport) }))} />
          <Section title={`🎯 ${t('fed.nearTop10')}`} items={cockpit.near10} />
          <Section title={`📈 ${t('fed.nearTop25')}`} items={cockpit.near25} />
          <Section title={`⚠️ ${t('fed.attention')}`} items={cockpit.attention} />
          <Section title={`📉 ${t('fed.decline')}`} items={cockpit.decline.map(x => ({ ...x, why: '−' + fmtMag(x.v, x.sport) }))} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <Card>
            <SectionTitle>{t('fed.categoryHealth')}</SectionTitle>
            <div className="overflow-x-auto">
              <table className="tbl w-full">
                <thead><tr><th>{t('common.category')}</th><th>{t('kpi.athletes')}</th><th>Best</th><th>{t('kpi.top25')}</th></tr></thead>
                <tbody>
                  {catHealth.map(r => (
                    <tr key={r.id}>
                      <td>{r.label}</td>
                      <td className="tnum">{r.n}</td>
                      <td className="tnum font-semibold">{r.best ? `#${r.best}` : t('common.na')}</td>
                      <td className="tnum">{r.top25}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <SectionTitle sub={t('talent.sub')}>{t('fed.pipeline')}</SectionTitle>
            <Gate feature="federation.talent">
              <div className="space-y-2 text-sm">
                {radar.slice(0, 10).map((e, i) => (
                  <div key={e.athlete.id + i} className="flex items-center justify-between gap-2">
                    <AthleteLink id={e.athlete.id} name={e.athlete.displayName} />
                    <span className="ink-3 text-xs truncate">{catLabel(store, e.categoryId)}</span>
                    <TierBadge tier={e.tier} />
                  </div>
                ))}
              </div>
            </Gate>
          </Card>
        </div>
      </Gate>
    </div>
  );
}
