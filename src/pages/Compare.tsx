import { useMemo, useState } from 'react';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { LineChart } from '../ui/charts';
import { AthleteLink, Card, ComputedNote, Gate, SectionTitle, fmtMag, fmtOriented } from '../ui/components';
import { allCategories, fmtDate, sportOf } from '../ui/labels';

const SERIES_COLORS = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)', 'var(--series-4)', 'var(--series-5)'];

export default function Compare() {
  const { store } = useApp();
  const cats = allCategories();
  const [catId, setCatId] = useState(cats[0].id);
  const season = store.currentSeason();
  const world = store.ranking(catId, season);
  const [ids, setIds] = useState<string[]>(() => world.slice(0, 2).map(r => r.athlete.id));
  const sportId = sportOf(catId);

  const rows = useMemo(() => ids.map(id => {
    const a = store.athlete(id)!;
    return {
      a,
      world: store.positionOf(id, catId, season),
      nat: store.positionOf(id, catId, season, { kind: 'country', key: a.countryCode }),
      spi: store.spi(id, catId),
      pb: store.pb(id, catId),
      sb: store.seasonBest(id, catId),
      trend: store.trend12(id, catId),
      series: store.devSeries(id, catId),
    };
  }), [ids, catId, season, store]);

  const h2h = useMemo(() => {
    if (ids.length !== 2) return null;
    const [x, y] = ids; let xw = 0, yw = 0;
    const byEvent = new Map<string, Map<string, number>>();
    for (const p of store.b.performances) {
      if (!ids.includes(p.athleteId) || p.placement == null) continue;
      const ev = store.event(p.eventId)!;
      if (ev.categoryId !== catId) continue;
      if (!byEvent.has(p.eventId)) byEvent.set(p.eventId, new Map());
      byEvent.get(p.eventId)!.set(p.athleteId, p.placement);
    }
    for (const m of byEvent.values()) {
      if (m.size === 2) { (m.get(x)! < m.get(y)! ? xw++ : yw++); }
    }
    return { xw, yw, meetings: xw + yw };
  }, [ids, catId, store]);

  const sel = 'rounded-lg border px-2 py-1.5 text-sm';
  const st = { borderColor: 'var(--border)', background: 'var(--surface-1)' } as const;
  const metricRows: [string, (r: typeof rows[number]) => string][] = [
    [t('kpi.world'), r => (r.world ? `#${r.world.position} / ${r.world.of}` : t('common.na'))],
    [t('kpi.national'), r => (r.nat ? `#${r.nat.position}` : t('common.na'))],
    ['SPI', r => (r.spi ? fmtNum(r.spi.value, 1) : t('common.na'))],
    [t('kpi.pb'), r => fmtOriented(r.pb, sportId)],
    [t('kpi.sb'), r => fmtOriented(r.sb, sportId)],
    [t('kpi.trend12'), r => (r.trend != null ? (r.trend >= 0 ? '+' : '−') + fmtMag(r.trend, sportId) : t('common.na'))],
    [t('kpi.percentile'), r => (r.world?.percentile != null ? fmtNum(r.world.percentile, 1) : t('common.na'))],
  ];

  return (
    <div className="space-y-4">
      <SectionTitle>{t('compare.title')}</SectionTitle>
      <div className="flex flex-wrap gap-2">
        <select className={sel} style={st} value={catId}
          onChange={e => { setCatId(e.target.value); setIds(store.ranking(e.target.value, season).slice(0, 2).map(r => r.athlete.id)); }}>
          {cats.map(c => <option key={c.id} value={c.id}>{c.label()}</option>)}
        </select>
        {ids.map((id, i) => (
          <select key={i} className={sel} style={{ ...st, borderColor: SERIES_COLORS[i] }} value={id}
            onChange={e => setIds(ids.map((x, j) => (j === i ? e.target.value : x)))}>
            {world.map(r => <option key={r.athlete.id} value={r.athlete.id}>{r.athlete.displayName}</option>)}
          </select>
        ))}
        {ids.length < 5 && (
          <button className="btn text-sm" onClick={() => {
            const next = world.find(r => !ids.includes(r.athlete.id));
            if (next) setIds([...ids, next.athlete.id]);
          }}>+ {t('compare.add')}</button>
        )}
        {ids.length > 2 && <button className="btn text-sm" onClick={() => setIds(ids.slice(0, -1))}>−</button>}
      </div>
      <Gate feature="athlete.compare">
        <div className="grid lg:grid-cols-2 gap-5">
          <Card>
            <div className="overflow-x-auto">
              <table className="tbl w-full">
                <thead>
                  <tr>
                    <th>{t('compare.metric')}</th>
                    {rows.map((r, i) => (
                      <th key={r.a.id}>
                        <span className="inline-block w-2.5 h-2.5 rounded-full mr-1.5" style={{ background: SERIES_COLORS[i] }} />
                        <AthleteLink id={r.a.id} name={r.a.displayName} flag={store.country(r.a.countryCode)?.flag} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {metricRows.map(([label, get]) => (
                    <tr key={label}>
                      <td className="ink-2">{label}</td>
                      {rows.map(r => <td key={r.a.id} className="tnum font-semibold">{get(r)}</td>)}
                    </tr>
                  ))}
                  {h2h && (
                    <tr>
                      <td className="ink-2">{t('compare.h2h')}</td>
                      <td className="tnum font-bold">{h2h.xw}</td>
                      <td className="tnum font-bold">{h2h.yw}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <ComputedNote />
          </Card>
          <Card>
            <SectionTitle>{t('athlete.development')}</SectionTitle>
            <LineChart
              series={rows.map((r, i) => ({
                name: r.a.displayName, color: SERIES_COLORS[i],
                pts: r.series.map(s => ({ x: new Date(s.date).getTime(), y: s.value, label: s.competition, emphasis: s.level === 'world' })),
              }))}
              fmtY={v => fmtOriented(v, sportId)} fmtX={v => fmtDate(new Date(v).toISOString())}
            />
          </Card>
        </div>
      </Gate>
    </div>
  );
}
