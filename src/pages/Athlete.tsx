import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { t, fmtNum } from '../core/i18n';
import { generateInsights } from '../core/insights';
import type { BenchmarkGroup } from '../core/types';
import { useApp } from '../ui/AppContext';
import { LineChart, SpiBars } from '../ui/charts';
import { AthleteLink, Card, ComputedNote, Gate, Kpi, SectionTitle, fmtMag, fmtOriented } from '../ui/components';
import { catLabel, catParts, fmtDate, sportOf } from '../ui/labels';
import { downloadShareCard } from '../ui/shareCard';

const TARGETS: { key: string; group: BenchmarkGroup }[] = [
  { key: 'bench.group.top50', group: { kind: 'topN', n: 50 } },
  { key: 'bench.group.top25', group: { kind: 'topN', n: 25 } },
  { key: 'bench.group.top10', group: { kind: 'topN', n: 10 } },
  { key: 'bench.group.podium', group: { kind: 'podium' } },
];

export default function Athlete() {
  const { id } = useParams();
  const { store } = useApp();
  const a = id ? store.athlete(id) : undefined;
  const cats = a ? store.categoriesOfAthlete(a.id) : [];
  const [catSel, setCatSel] = useState<string | null>(null);
  const [target, setTarget] = useState(2);           // default Top 10
  const catId = catSel ?? cats[0];
  const season = store.currentSeason();

  const data = useMemo(() => {
    if (!a || !catId) return null;
    const sportId = sportOf(catId);
    const world = store.positionOf(a.id, catId, season);
    const cont = store.country(a.countryCode)?.continent;
    const contPos = cont ? store.positionOf(a.id, catId, season, { kind: 'continent', key: cont }) : null;
    const natPos = store.positionOf(a.id, catId, season, { kind: 'country', key: a.countryCode });
    const pct = store.percentile(a.id, catId, season);
    const spi = store.spi(a.id, catId);
    const series = store.devSeries(a.id, catId);
    const pb = store.pb(a.id, catId);
    const sb = store.seasonBest(a.id, catId);
    const trend = store.trend12(a.id, catId);
    const corridorT10 = store.corridorFor(catId, season, { kind: 'topN', n: 10 });
    const tgt = store.benchmarkTarget(catId, season, TARGETS[target].group);
    const info = store.categoryOf(catId)!;
    const lastPerf = store.athletePerfs(a.id).filter(x => x.ev.categoryId === catId).at(-1)?.p ?? null;
    const gap = tgt != null ? info.adapter.gapToTarget(lastPerf, sb ?? pb, tgt) : null;
    const gapT10v = store.benchmarkTarget(catId, season, { kind: 'topN', n: 10 });
    const results = store.athletePerfs(a.id).filter(x => x.ev.categoryId === catId).reverse();
    const consistency = info.adapter.deriveProfileMetrics(results.map(r => r.p)).find(m => m.key === 'consistency')?.value ?? null;
    const prevSeason = store.b.seasons[store.b.seasons.findIndex(s => s.id === season) - 1]?.id;
    const pctPrev = prevSeason ? store.percentile(a.id, catId, prevSeason) : null;
    const insights = generateInsights({
      percentileNow: pct?.percentile ?? null, percentilePrev: pctPrev?.percentile ?? null,
      gapToTop10: gapT10v != null && sb != null ? Math.max(0, +(gapT10v - sb).toFixed(2)) : null,
      metricLabel: sportId === 'speed' ? t('metric.unit.seconds') : t('metric.unit.points'),
      lastValues: series.map(s => s.value), spi,
    });
    const gapT10 = gapT10v != null && (sb ?? pb) != null ? +(gapT10v - (sb ?? pb)!).toFixed(2) : null;
    return { sportId, world, contPos, natPos, pct, spi, series, pb, sb, trend, corridorT10, tgt, gap, gapT10, results, consistency, insights, info };
  }, [a, catId, season, store, target]);

  if (!a || !data) return <Card>{t('common.notFound')}</Card>;
  const c = store.country(a.countryCode);
  const parts = catParts(store, catId);
  const f = (v: number | null | undefined): string => fmtOriented(v, data.sportId);

  return (
    <div className="space-y-5">
      {/* Header – international position readable in 5 seconds (§65) */}
      <Card>
        <div className="flex flex-wrap items-start gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: 'var(--surface-2)' }}>{c?.flag}</div>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-extrabold tracking-tight">{a.displayName}</h1>
            <div className="text-sm ink-2 mt-0.5">
              {c && t(c.nameKey)} · {parts.sport} · {parts.discipline} · {parts.category}
              {a.clubId && <> · {store.club(a.clubId)?.name}</>}
            </div>
            {cats.length > 1 && (
              <div className="flex gap-1.5 mt-2 flex-wrap">
                {cats.map(cid => (
                  <button key={cid} className={`chip ${cid === catId ? 'font-bold' : ''}`}
                    style={cid === catId ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : undefined}
                    onClick={() => setCatSel(cid)}>{catLabel(store, cid)}</button>
                ))}
              </div>
            )}
          </div>
          <button className="btn text-sm" onClick={() => downloadShareCard(store, a, catId)}>{t('athlete.share')} ⬇</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-4">
          <Kpi label={t('kpi.world')} value={data.world ? `#${data.world.position}` : t('common.na')} sub={data.world ? `/ ${data.world.of}` : undefined} />
          <Kpi label={t('kpi.percentile')} value={data.pct?.percentile != null ? fmtNum(data.pct.percentile, 1) : t('common.na')}
            sub={data.pct?.percentile == null && data.pct ? t('bench.tooFewAthletes', { n: data.pct.n }) : `${t('common.n')}=${data.pct?.n ?? 0}`} />
          <Kpi label={t('kpi.spi')} value={data.spi ? fmtNum(data.spi.value, 1) : t('common.na')} sub={data.spi ? t(`athlete.confidence.${data.spi.confidence}`) : undefined} />
          <Kpi label={t('kpi.pb')} value={f(data.pb)} />
          <Kpi label={t('kpi.trend12')} value={data.trend != null ? (data.trend >= 0 ? '+' : '−') + fmtMag(data.trend, data.sportId) : t('common.na')}
            tone={data.trend != null ? (data.trend >= 0 ? 'good' : 'bad') : undefined} />
          <Kpi label={t('kpi.continent')} value={data.contPos ? `#${data.contPos.position}` : t('common.na')} />
          <Kpi label={t('kpi.national')} value={data.natPos ? `#${data.natPos.position}` : t('common.na')} />
          <Kpi label={t('kpi.sb')} value={f(data.sb)} />
          <Kpi label={t('kpi.consistency')} value={data.consistency != null ? fmtNum(data.consistency, 0) : t('common.na')} />
          <Kpi label={t('kpi.gapTop10')}
            value={data.gapT10 == null ? t('common.na') : data.gapT10 <= 0 ? '✓' : fmtMag(data.gapT10, data.sportId)}
            tone={data.gapT10 != null && data.gapT10 <= 0 ? 'good' : undefined} />
        </div>
        {a.profileVisibility !== 'public' && <p className="text-xs ink-3 mt-2">{t('athlete.privacyNote')}</p>}
      </Card>

      {/* Insights */}
      {data.insights.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {data.insights.map((ins, i) => (
            <Card key={i} className="!p-3 text-sm flex items-start gap-2">
              <span style={{ color: ins.tone === 'positive' ? 'var(--good)' : ins.tone === 'attention' ? 'var(--serious)' : 'var(--ink-3)' }}>
                {ins.tone === 'positive' ? '▲' : ins.tone === 'attention' ? '●' : '◆'}
              </span>
              <span>{t(ins.key, ins.params)}</span>
            </Card>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Development chart with corridor + major-competition emphasis */}
        <Card>
          <SectionTitle sub={data.corridorT10 ? t('athlete.corridor', { group: t('bench.group.top10'), n: data.corridorT10.n }) : undefined}>
            {t('athlete.development')}
          </SectionTitle>
          <Gate feature="athlete.history">
            <LineChart
              series={[{
                name: t(data.info.adapter.metrics.find(m => m.isPrimary)!.nameKey),
                color: 'var(--series-1)',
                pts: data.series.map(s => ({
                  x: new Date(s.date).getTime(), y: s.value,
                  label: s.competition, emphasis: s.level === 'world' || s.level === 'continental',
                })),
              }]}
              corridor={data.corridorT10 ? { ...data.corridorT10, label: t('bench.group.top10') } : null}
              fmtY={v => f(v)} fmtX={v => fmtDate(new Date(v).toISOString())}
            />
          </Gate>
        </Card>

        {/* SPI explainability */}
        <Card>
          <SectionTitle sub={t('athlete.spi.explain')}>{t('athlete.spi.why')}</SectionTitle>
          <Gate feature="athlete.spi">
            {data.spi ? (
              <>
                <div className="hero-num text-5xl font-black mb-3" style={{ color: 'var(--accent)' }}>
                  {fmtNum(data.spi.value, 1)}
                  <span className="text-sm font-semibold ink-3 ml-2">/ 100 · {t(`athlete.confidence.${data.spi.confidence}`)}</span>
                </div>
                <SpiBars rows={data.spi.contributions.map(ct => ({
                  label: t(`spi.dim.${ct.dimension}`), score: ct.score, weight: ct.weight,
                  explain: t(ct.explainKey, Object.fromEntries(ct.inputs.map(x => [x.key, fmtNum(x.value, 2)]))),
                }))} />
              </>
            ) : <p className="ink-3 text-sm">{t('common.na')}</p>}
          </Gate>
        </Card>
      </div>

      {/* What does it take? */}
      <Card>
        <SectionTitle>{t('athlete.whatittakes')}</SectionTitle>
        <Gate feature="athlete.whatItTakes">
          <div className="flex gap-1.5 flex-wrap mb-4">
            {TARGETS.map((tg, i) => (
              <button key={tg.key} className="chip" onClick={() => setTarget(i)}
                style={i === target ? { borderColor: 'var(--accent)', color: 'var(--accent)', fontWeight: 700 } : undefined}>
                {t(tg.key)}
              </button>
            ))}
          </div>
          {data.gap && data.tgt != null ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <Kpi label={t('athlete.current')} value={f(data.gap.current)} />
              <Kpi label={`${t('athlete.benchmark')} · ${t(TARGETS[target].key)}`} value={f(data.gap.target)} />
              <Kpi label={t('athlete.gap')} value={data.gap.gap <= 0 ? '✓' : fmtMag(data.gap.gap, data.sportId)} tone={data.gap.gap <= 0 ? 'good' : undefined} />
              {data.gap.breakdown && data.gap.gap > 0 && (
                <div className="sm:col-span-3 card p-4">
                  <div className="text-xs uppercase tracking-wider ink-3 mb-2">{t('athlete.breakdown')}</div>
                  {data.gap.breakdown.map(b2 => (
                    <div key={b2.metricKey} className="flex justify-between text-sm py-1">
                      <span className="ink-2">{t(`metric.${b2.metricKey === 'timeMs' ? 'timeMs' : b2.metricKey}`)}</span>
                      <span className="tnum font-semibold">{b2.gap > 0 ? fmtMag(b2.gap, data.sportId) : '✓'}</span>
                    </div>
                  ))}
                  {data.gap.largestOpportunityKey && (
                    <div className="text-sm mt-2 font-semibold" style={{ color: 'var(--accent)' }}>
                      {t('athlete.largestOpportunity')}: {t(`metric.${data.gap.largestOpportunityKey}`)}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : <p className="ink-3 text-sm">{t('common.na')}</p>}
        </Gate>
      </Card>

      {/* Results table */}
      <Card>
        <SectionTitle>{t('athlete.results')}</SectionTitle>
        <div className="overflow-x-auto">
          <table className="tbl w-full">
            <thead><tr><th>{t('common.date')}</th><th>{t('common.competition')}</th><th>{t('common.level')}</th><th>{t('common.placement')}</th><th>{t('board.value')}</th></tr></thead>
            <tbody>
              {data.results.map(({ p, ev, cmp }) => (
                <tr key={p.id}>
                  <td className="whitespace-nowrap">{fmtDate(cmp.startDate)}</td>
                  <td>{cmp.name}</td>
                  <td><span className="chip">{cmp.level}</span></td>
                  <td className="tnum">{p.placement ?? t('common.na')} / {ev.fieldSize}</td>
                  <td className="tnum font-semibold">{f(data.info.adapter.primaryValue(p))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ComputedNote />
      </Card>

      {/* related: country peers */}
      {data.natPos && (
        <Card>
          <SectionTitle>{c?.flag} {t('kpi.national')}</SectionTitle>
          <div className="flex flex-wrap gap-2 text-sm">
            {store.ranking(catId, season, { kind: 'country', key: a.countryCode }).slice(0, 8).map(r => (
              <span key={r.athlete.id} className="chip">
                #{r.position} <AthleteLink id={r.athlete.id} name={r.athlete.displayName} />
              </span>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
