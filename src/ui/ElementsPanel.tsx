import { useState } from 'react';
import { fmtNum, t } from '../core/i18n';
import type { ElementsAnalysis } from '../core/elements';
import { LineChart } from './charts';
import { fmtDate } from './labels';

const signed = (x: number, dec: number): string => (x > 0 ? '+' : x < 0 ? '−' : '±') + fmtNum(Math.abs(x), dec);
const qoeColor = (q: number): string => (q < -0.05 ? 'var(--critical)' : q > 0.05 ? 'var(--good)' : 'var(--ink-2)');

const COMP_KEYS = ['el.comp.skills', 'el.comp.transitions', 'el.comp.performance', 'el.comp.choreo'];

/** Element-Detailanalyse: Entwicklung je Element, Komponenten, Arbeitsliste. */
export function ElementsPanel({ a, names, kinds }: {
  a: ElementsAnalysis; names?: Record<string, string>; kinds?: string[];
}) {
  const [sel, setSel] = useState<string>(a.work[0]?.code ?? a.elements[0].code);
  const e = a.elements.find(x => x.code === sel) ?? a.elements[0];
  const nameOf = (code: string): string => names?.[code] ?? '';
  const trendMark = (d: number | null) =>
    d == null ? <span className="ink-3">–</span>
      : <span style={{ color: d > 0.1 ? 'var(--good)' : d < -0.1 ? 'var(--critical)' : 'var(--ink-3)' }}>
        {d > 0.1 ? '▲' : d < -0.1 ? '▼' : '→'} {signed(d, 2)}
      </span>;

  /* Komponenten-Schnitt (mit Vergleich zur ersten Saisonhälfte) */
  const compMin = a.comps ? Math.min(...a.comps.filter((v): v is number => v != null)) : null;

  return (
    <div className="space-y-5 mt-2">
      {a.comps && (
        <div>
          <div className="seclabel mb-2">{t('el.compsTitle')}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {a.comps.map((v, i) => (
              <div key={i} className="card px-3 py-2.5">
                <div className="text-[11px] uppercase tracking-wider ink-3">{t(COMP_KEYS[i])}</div>
                <div className="flex items-baseline gap-2">
                  <span className="tnum text-xl font-extrabold" style={v != null && v === compMin ? { color: 'var(--serious)' } : undefined}>
                    {v != null ? fmtNum(v, 2) : t('common.na')}
                  </span>
                  {v != null && a.compsPrev?.[i] != null && (
                    <span className="text-xs tnum" style={{ color: v - a.compsPrev[i]! >= 0 ? 'var(--good)' : 'var(--critical)' }}>
                      {signed(v - a.compsPrev[i]!, 2)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {a.compsPrev && <p className="text-[11px] ink-3 mt-1">{t('el.compsNote')}</p>}
        </div>
      )}

      {a.work.length > 0 && (
        <div>
          <div className="seclabel mb-2">🎯 {t('el.workTitle')}</div>
          <ol className="space-y-2">
            {a.work.map((w, i) => (
              <li key={w.code} className="flex items-start gap-2.5 text-sm">
                <span className="flex-none w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center"
                  style={{ background: 'color-mix(in srgb, var(--critical) 18%, transparent)', color: 'var(--critical)' }}>{i + 1}</span>
                <span>
                  <button className="font-bold hover:underline" onClick={() => setSel(w.code)}>{w.code}</button>
                  {nameOf(w.code) && <span className="ink-2"> ({nameOf(w.code)})</span>}
                  {': '}
                  {t('el.workLine', { q: signed(w.avgQoe, 2), n: w.attempts, neg: fmtNum(w.negShare, 0), lost: fmtNum(Math.abs(w.lostQoe), 2) })}
                  {w.ur + w.dg > 0 && <> · {t('el.workRot', { ur: w.ur, dg: w.dg })}</>}
                  {w.star > 0 && <> · {t('el.workStar', { n: w.star })}</>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="overflow-x-auto">
          <div className="seclabel mb-2">{t('el.tableTitle', { n: a.elements.length })}</div>
          <table className="tbl w-full text-sm">
            <thead>
              <tr>
                <th>{t('el.element')}</th><th>{t('el.attempts')}</th><th>Ø {t('el.base')}</th>
                <th>Ø QOE</th><th>Ø {t('metric.points')}</th><th>{t('el.best')}</th><th>&lt;/&lt;&lt;</th><th>{t('el.trend')}</th>
              </tr>
            </thead>
            <tbody>
              {a.elements.map(x => (
                <tr key={x.code} onClick={() => setSel(x.code)} className="cursor-pointer"
                  style={x.code === sel ? { background: 'color-mix(in srgb, var(--accent) 12%, transparent)' } : undefined}>
                  <td className="font-bold whitespace-nowrap">{x.code}
                    {nameOf(x.code) && <span className="ink-3 font-normal text-xs"> {nameOf(x.code).slice(0, 22)}</span>}
                  </td>
                  <td className="tnum">{x.attempts}</td>
                  <td className="tnum">{fmtNum(x.avgBase, 2)}</td>
                  <td className="tnum font-semibold" style={{ color: qoeColor(x.avgQoe) }}>{signed(x.avgQoe, 2)}</td>
                  <td className="tnum font-semibold">{fmtNum(x.avgPanel, 2)}</td>
                  <td className="tnum">{fmtNum(x.bestPanel, 2)}</td>
                  <td className="tnum" style={{ color: x.ur + x.dg > 0 ? 'var(--critical)' : 'var(--ink-3)' }}>
                    {x.ur + x.dg > 0 ? `${x.ur}/${x.dg}` : '–'}
                  </td>
                  <td className="tnum whitespace-nowrap">{trendMark(x.trendDelta)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div className="seclabel mb-2">
            {t('el.devTitle', { code: e.code })}{nameOf(e.code) && <span className="ink-3 normal-case font-normal"> · {nameOf(e.code)}</span>}
            {kinds?.[e.kindIdx] ? <span className="chip ml-2 text-[10px]">{kinds[e.kindIdx]}</span> : null}
          </div>
          {e.series.length >= 2 ? (
            <LineChart
              height={260}
              series={[
                {
                  name: t('el.panelPts'), color: 'var(--series-1)',
                  pts: e.series.map(s2 => ({ x: new Date(s2.date).getTime(), y: s2.panel, label: `${s2.comp} (${s2.seg})${s2.flags ? ' ' + s2.flags : ''}` })),
                },
                {
                  name: t('el.base'), color: 'var(--series-3)', dash: true,
                  pts: e.series.map(s2 => ({ x: new Date(s2.date).getTime(), y: s2.base })),
                },
              ]}
              fmtY={v => fmtNum(v, 2)} fmtX={v => fmtDate(new Date(v).toISOString())}
            />
          ) : <p className="ink-3 text-sm py-6">{t('el.oneAttempt', { v: fmtNum(e.lastPanel, 2) })}</p>}
          <p className="text-[11px] ink-3 mt-1">{t('el.chartNote')}</p>
        </div>
      </div>
      <p className="text-[11px] ink-3">{t('el.source', { n: a.nSheets })} · {t('common.computedNote')}</p>
    </div>
  );
}
