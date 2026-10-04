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
import { diagnose } from '../data/diagnosis';
import { DiagnosisPanel } from '../ui/DiagnosisPanel';
import { analyzeElements } from '../core/elements';
import { ElementsPanel } from '../ui/ElementsPanel';
import { top10ElementBench } from '../data/elementBench';
import { intlPlacements } from '../data/intlPlacement';
import athleteHeroImg from '../assets/athlete-hero.jpg';

const TARGETS: { key: string; group: BenchmarkGroup }[] = [
  { key: 'bench.group.top50', group: { kind: 'topN', n: 50 } },
  { key: 'bench.group.top25', group: { kind: 'topN', n: 25 } },
  { key: 'bench.group.top10', group: { kind: 'topN', n: 10 } },
  { key: 'bench.group.podium', group: { kind: 'podium' } },
];

const RANGES: { key: string; months: number | null }[] = [
  { key: 'athlete.range.3m', months: 3 }, { key: 'athlete.range.6m', months: 6 },
  { key: 'athlete.range.12m', months: 12 }, { key: 'athlete.range.24m', months: 24 },
  { key: 'athlete.range.career', months: null },
];

export default function Athlete() {
  const { id } = useParams();
  const { store } = useApp();
  const a = id ? store.athlete(id) : undefined;
  const cats = a ? store.categoriesOfAthlete(a.id) : [];
  const [catSel, setCatSel] = useState<string | null>(null);
  const [target, setTarget] = useState(2);           // default Top 10
  const [range, setRange] = useState(4);             // default Karriere
  // Standard: Kategorie des JÜNGSTEN Starts (Athleten wachsen in neue Klassen – Minis → Espoir …)
  const latestCat = a ? store.athletePerfs(a.id).at(-1)?.ev.categoryId : undefined;
  const catId = catSel ?? latestCat ?? cats[0];
  const season = store.currentSeason();
  const [intlSeason, setIntlSeason] = useState(season);   // Saisonwahl für „Internationale Einordnung" (2026 → 2027 …)

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
    const diag = diagnose(store, a.id, catId, season);
    // Element-Analyse: Saison-Starts (Fallback: Karriere), chronologisch
    const elRowsAll = store.athletePerfs(a.id).filter(x => x.ev.categoryId === catId && x.p.det?.length);
    const elRowsSeason = elRowsAll.filter(x => x.cmp.seasonId === season);
    const elems = analyzeElements((elRowsSeason.length >= 2 ? elRowsSeason : elRowsAll)
      .map(x => ({ date: x.cmp.startDate, comp: x.cmp.name, p: x.p })));
    const elBench = elems ? top10ElementBench(store, catId, season) : undefined;
    return { sportId, world, contPos, natPos, pct, spi, series, pb, sb, trend, corridorT10, tgt, gap, gapT10, results, consistency, insights, info, diag, elems, elBench };
  }, [a, catId, season, store, target]);

  if (!a || !data) return <Card>{t('common.notFound')}</Card>;
  const c = store.country(a.countryCode);
  const parts = catParts(store, catId);
  const f = (v: number | null | undefined): string => fmtOriented(v, data.sportId);

  const TABS: [string, string][] = [
    ['sec-overview', 'athlete.tab.overview'], ['sec-development', 'athlete.tab.development'],
    ['sec-benchmarks', 'athlete.tab.benchmarks'], ['sec-results', 'athlete.tab.results'],
  ];
  return (
    <div className="space-y-5">
      {/* Hero-Header (Designvorlage: großer Name, Meta-Zeile, Tabs) */}
      <div className="hero-band p-5 sm:p-7" id="sec-overview">
        <div className="hero-photo hidden sm:block" style={{ backgroundImage: `url(${athleteHeroImg})`, width: 'min(44%, 400px)', backgroundPosition: 'center 25%' }} aria-hidden="true" />
        <div className="flex flex-wrap items-start gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-none"
            style={{ background: 'color-mix(in srgb, var(--surface-2) 70%, transparent)', border: '1px solid var(--border)' }}>{c?.flag}</div>
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{a.displayName}</h1>
            <div className="text-sm ink-2 mt-1">
              {c && t(c.nameKey)} · {parts.sport} · {parts.discipline} · <b className="ink-2">{parts.category}</b>
              {a.clubId && <> · {store.club(a.clubId)?.name}</>}
            </div>
            {cats.length > 1 && (
              <div className="flex gap-1.5 mt-2.5 flex-wrap">
                {cats.map(cid => (
                  <button key={cid} className={`chip ${cid === catId ? 'font-bold' : ''}`}
                    style={cid === catId ? { borderColor: 'var(--accent)', color: 'var(--seq-600)' } : undefined}
                    onClick={() => setCatSel(cid)}>{catLabel(store, cid)}</button>
                ))}
              </div>
            )}
          </div>
          <button className="btn btn-primary text-sm" onClick={() => downloadShareCard(store, a, catId)}>{t('athlete.share')} ⬇</button>
        </div>
        <div className="tabbar mt-5 -mb-1">
          {TABS.map(([sec, key], i) => (
            <a key={sec} href={`#/athlete/${a.id}`} className={`tab ${i === 0 ? 'on' : ''}`}
              onClick={e => { e.preventDefault(); document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              {t(key)}
            </a>
          ))}
        </div>
      </div>
      <Card>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
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

      {/* Stärken & Defizite (Marcel 03.10.: pro Athlet erkennbar, was gut/schlecht ist und woran gearbeitet werden muss) */}
      {data.diag && (
        <Card>
          <SectionTitle sub={t('diag.sub')}>{t('diag.title')}</SectionTitle>
          <Gate feature="athlete.whatItTakes">
            <DiagnosisPanel diag={data.diag} />
          </Gate>
        </Card>
      )}

      {/* Elemente im Detail (Marcel 03.10.: Entwicklung je Element, konkrete Arbeitsfelder) */}
      {data.elems && (
        <Card>
          <SectionTitle sub={t('el.sub')}>{t('el.title')}</SectionTitle>
          <Gate feature="athlete.whatItTakes">
            <ElementsPanel a={data.elems} names={store.b.elementNames} kinds={store.b.elementKinds} bench={data.elBench} />
          </Gate>
        </Card>
      )}

      {/* Internationale Einordnung (Marcel 03.10.: virtuelle Platzierung bei EM/WM/Weltcup/CoE/Interland je Saison) */}
      {(() => {
        const champs = intlPlacements(store, a.id, catId, intlSeason);
        const seasons = [...store.b.seasons].sort((s1, s2) => s2.id.localeCompare(s1.id));
        if (!champs.length && intlSeason === season) return null;
        return (
          <Card>
            <div className="flex flex-wrap items-end justify-between gap-2">
              <SectionTitle sub={t('intl.sub')}>{t('intl.title')}</SectionTitle>
              <div className="tabbar">
                {seasons.map(s2 => (
                  <button key={s2.id} className={`tab !px-2.5 !py-1 !text-xs ${s2.id === intlSeason ? 'on' : ''}`}
                    onClick={() => setIntlSeason(s2.id)}>{s2.label}</button>
                ))}
              </div>
            </div>
            <Gate feature="athlete.benchmarks">
              {champs.length === 0 ? (
                <p className="text-sm ink-3 py-4">{t('intl.none')}</p>
              ) : (
                <div className="overflow-x-auto mt-2">
                  <table className="tbl w-full">
                    <thead>
                      <tr>
                        <th>{t('common.competition')}</th><th>{t('common.date')}</th><th>{t('comp.participants')}</th>
                        <th>{t('intl.winner')}</th><th>{t('intl.third')}</th><th>{t('intl.myValue')}</th>
                        <th>{t('intl.virtualPos')}</th><th>{t('intl.actual')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {champs.map(ch => (
                        <tr key={ch.evId}>
                          <td className="font-semibold whitespace-nowrap">
                            <a href={`#/competition/${ch.cmp.id}`} className="hover:underline">{ch.cmp.name}</a>
                            {(ch.cmp.level === 'world' || ch.cmp.level === 'continental') &&
                              <span className="chip ml-1.5 text-[10px]">{ch.cmp.level === 'world' ? 'WM' : 'EM'}</span>}
                          </td>
                          <td className="ink-3 whitespace-nowrap">{fmtDate(ch.cmp.startDate)}</td>
                          <td className="tnum">{ch.n}</td>
                          <td className="tnum">{fmtNum(ch.winner, 2)}</td>
                          <td className="tnum">{ch.third != null ? fmtNum(ch.third, 2) : t('common.na')}</td>
                          <td className="tnum font-semibold whitespace-nowrap">
                            {ch.my != null ? fmtNum(ch.my, 2) : t('common.na')}
                            {ch.mySeason != null && ch.mySeason !== intlSeason &&
                              <span className="chip ml-1.5 text-[10px]">{store.b.seasons.find(s2 => s2.id === ch.mySeason)?.label}</span>}
                          </td>
                          <td className="tnum font-black whitespace-nowrap"
                            style={{ color: ch.pos != null && ch.pos <= 3 ? 'var(--good)' : ch.pos != null && ch.pos <= 10 ? 'var(--accent-2)' : undefined }}>
                            {ch.pos != null ? <>#{ch.pos} <span className="ink-3 font-normal">/ {ch.n}</span>{ch.pos <= 3 ? ' 🏅' : ''}</> : t('common.na')}
                          </td>
                          <td className="tnum">{ch.actual != null ? `#${ch.actual}` : <span className="ink-3">{t('intl.notEntered')}</span>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[11px] ink-3 mt-2">{t('intl.note')}</p>
                </div>
              )}
            </Gate>
          </Card>
        );
      })()}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" id="sec-development">
        {/* Development chart with corridor + major-competition emphasis + range pills */}
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h2 className="text-base font-bold tracking-tight">{t('athlete.development')}</h2>
              {data.corridorT10 && <p className="text-xs ink-3 mt-0.5">{t('athlete.corridor', { group: t('bench.group.top10'), n: data.corridorT10.n })}</p>}
            </div>
            <div className="tabbar">
              {RANGES.map((r, i) => (
                <button key={r.key} className={`tab !px-2.5 !py-1 !text-xs ${i === range ? 'on' : ''}`} onClick={() => setRange(i)}>
                  {t(r.key)}
                </button>
              ))}
            </div>
          </div>
          <Gate feature="athlete.history">
            {(() => {
              const months = RANGES[range].months;
              const cutoff = months == null ? null
                : new Date(new Date(store.today).getTime() - months * 30.44 * 86400e3).toISOString().slice(0, 10);
              const pts = data.series.filter(s => cutoff == null || s.date >= cutoff);
              return pts.length >= 2 ? (
                <LineChart
                  series={[{
                    name: t(data.info.adapter.metrics.find(m => m.isPrimary)!.nameKey),
                    color: 'var(--series-1)',
                    pts: pts.map(s => ({
                      x: new Date(s.date).getTime(), y: s.value,
                      label: s.competition, emphasis: s.level === 'world' || s.level === 'continental',
                    })),
                  }]}
                  corridor={data.corridorT10 ? { ...data.corridorT10, label: t('bench.group.top10') } : null}
                  fmtY={v => f(v)} fmtX={v => fmtDate(new Date(v).toISOString())}
                />
              ) : <p className="ink-3 text-sm py-8 text-center">{t('athlete.rangeEmpty')}</p>;
            })()}
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

      {/* What does it take? (Designvorlage: Category Benchmark mit Meter-Balken) */}
      <Card className="scroll-mt-20" >
        <div id="sec-benchmarks" />
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
                  <div className="seclabel mb-3">{t('athlete.breakdown')}</div>
                  {/* Gesamt-Gap als Gradient-Meter (Score vs. Benchmark) */}
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="ink-2">{t('athlete.current')} <b className="tnum ink-1">{f(data.gap.current)}</b></span>
                    <span className="ink-2">{t('athlete.benchmark')} <b className="tnum ink-1">{f(data.gap.target)}</b></span>
                  </div>
                  <div className="meter mb-4"><i style={{ width: `${Math.max(4, Math.min(100, (data.gap.current / data.gap.target) * 100))}%` }} /></div>
                  {data.gap.breakdown.map(b2 => {
                    const share = Math.max(0, Math.min(100, 100 - (b2.gap / Math.max(data.gap!.gap, 1e-9)) * 100));
                    return (
                      <div key={b2.metricKey} className="py-1.5">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="ink-2">{t(`metric.${b2.metricKey === 'timeMs' ? 'timeMs' : b2.metricKey}`)}</span>
                          <span className="tnum font-semibold">{b2.gap > 0 ? fmtMag(b2.gap, data.sportId) : '✓'}</span>
                        </div>
                        <div className="meter"><i style={{ width: `${b2.gap > 0 ? share : 100}%` }} /></div>
                      </div>
                    );
                  })}
                  {data.gap.largestOpportunityKey && (
                    <div className="text-sm mt-2.5 font-semibold" style={{ color: 'var(--seq-600)' }}>
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
        <div id="sec-results" />
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
