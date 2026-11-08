import { useMemo, useState } from 'react';
import { fmtNum, t } from '../core/i18n';
import type { IntlGroup, IntlStart } from '../data/intlCompare';
import { INTL_GROUPS, filterStarts, intlAthleteRows, intlStarts } from '../data/intlCompare';
import { useApp } from '../ui/AppContext';
import { LineChart } from '../ui/charts';
import { AthleteLink, Badge, Card, ComputedNote, Gate, Kpi, SectionTitle } from '../ui/components';
import { allCategories, catLabel, fmtDate } from '../ui/labels';

const SERIES_COLORS = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)', 'var(--series-4)', 'var(--series-5)'];
const GROUP_COLORS: Record<IntlGroup, string> = {
  WM: 'var(--series-1)', EM: 'var(--series-2)', CoE: 'var(--series-3)', WC_SEMI: 'var(--series-4)', WC_F: 'var(--series-5)',
};

const fmtGap = (v: number | null): string => (v == null ? t('common.na') : (v >= 0 ? '+' : '−') + fmtNum(Math.abs(v), 2));

/**
 * Internationaler Vergleich (Marcel, 08.11.2026): reale Starts aller deutschen
 * Sportler bei EM, WM, Cup of Europe und World Cups (Semifinale/Finale) –
 * Platz im Feld, geschlagener Feldanteil, Rückstand auf Sieg/Podium, als Chart
 * über die Zeit und als Detailtabelle je Athlet.
 */
export default function International() {
  const { store } = useApp();
  const all = useMemo(() => intlStarts(store, 'GER'), [store]);

  const seasons = useMemo(() => [...store.b.seasons].sort((a, b) => b.id.localeCompare(a.id)), [store]);
  const cats = useMemo(() => {
    const used = new Set(all.map(s => s.catId));
    return allCategories().filter(c => used.has(c.id));
  }, [all]);

  const [seasonId, setSeasonId] = useState<string>('all');
  const [catId, setCatId] = useState<string>('all');
  const [groups, setGroups] = useState<Set<IntlGroup>>(new Set(INTL_GROUPS));
  const [detailId, setDetailId] = useState<string | null>(null);

  const starts = useMemo(() => filterStarts(all, { seasonId, catId, groups }), [all, seasonId, catId, groups]);
  const rows = useMemo(() => intlAthleteRows(starts), [starts]);
  const chartRows = rows.filter(r => r.starts.filter(s => s.pct != null).length >= 2).slice(0, 5);
  const detail = detailId ? rows.find(r => r.athlete.id === detailId) ?? null : null;

  const sel = 'rounded-lg border px-2 py-1.5 text-sm';
  const st = { borderColor: 'var(--border)', background: 'var(--surface-1)' } as const;
  const toggleGroup = (g: IntlGroup): void => {
    const next = new Set(groups);
    if (next.has(g)) { if (next.size > 1) next.delete(g); } else next.add(g);
    setGroups(next);
  };

  return (
    <div className="space-y-4">
      <SectionTitle sub={t('ic.sub')}>{t('ic.title')}</SectionTitle>
      <div className="flex flex-wrap items-center gap-2">
        <select className={sel} style={st} value={seasonId} onChange={e => setSeasonId(e.target.value)} aria-label={t('common.season')}>
          <option value="all">{t('common.all')} ({t('common.season')})</option>
          {seasons.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
        <select className={sel} style={st} value={catId} onChange={e => setCatId(e.target.value)} aria-label={t('ic.category')}>
          <option value="all">{t('common.all')} ({t('ic.category')})</option>
          {cats.map(c => <option key={c.id} value={c.id}>{c.label()}</option>)}
        </select>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label={t('ic.types')}>
          {INTL_GROUPS.map(g => (
            <button key={g} className="chip text-xs" aria-pressed={groups.has(g)}
              style={groups.has(g)
                ? { borderColor: GROUP_COLORS[g], boxShadow: `inset 0 0 0 1px ${GROUP_COLORS[g]}` }
                : { opacity: 0.45 }}
              onClick={() => toggleGroup(g)}>
              {t(`ic.g.${g}`)}
            </button>
          ))}
        </div>
      </div>
      <Gate feature="federation.intelligence">
        {!starts.length ? (
          <Card><p className="text-sm ink-2">{t('ic.none')}</p></Card>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Kpi label={t('ic.kpiStarts')} value={String(starts.length)} sub={`${new Set(starts.map(s => s.cmp.id)).size} ${t('nav.competitions')}`} />
              <Kpi label={t('ic.kpiAthletes')} value={String(rows.length)} />
              <Kpi label={t('ic.kpiPodiums')} value={String(starts.filter(s => s.pos <= 3).length)} tone="good" />
              <Kpi label={t('ic.kpiTop10')} value={String(starts.filter(s => s.pos <= 10).length)} />
            </div>
            {chartRows.length > 0 && (
              <Card>
                <SectionTitle sub={t('ic.chartSub')}>{t('ic.chartTitle')}</SectionTitle>
                <LineChart
                  series={chartRows.map((r, i) => ({
                    name: r.athlete.displayName, color: SERIES_COLORS[i],
                    pts: r.starts.filter(s => s.pct != null).map(s => ({
                      x: new Date(s.cmp.startDate).getTime(), y: s.pct!,
                      label: `${s.cmp.name} · ${t('ic.pos')} ${s.pos}/${s.n}`,
                      emphasis: s.group === 'WM' || s.group === 'WC_F',
                    })),
                  }))}
                  fmtY={v => fmtNum(v, 0) + '%'} fmtX={v => fmtDate(new Date(v).toISOString())}
                />
                <ComputedNote />
              </Card>
            )}
            <Card>
              <div className="overflow-x-auto">
                <table className="tbl w-full">
                  <thead>
                    <tr>
                      <th>{t('ic.athleteCol')}</th><th>{t('ic.category')}</th>
                      <th className="tnum">{t('ic.starts')}</th><th className="tnum">{t('ic.podiums')}</th>
                      <th className="tnum">{t('ic.top10')}</th><th className="tnum">{t('ic.bestPos')}</th>
                      <th className="tnum">{t('ic.avgPct')}</th><th>{t('ic.lastStart')}</th><th />
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(r => (
                      <tr key={r.athlete.id} style={detailId === r.athlete.id ? { background: 'var(--surface-1)' } : undefined}>
                        <td><AthleteLink id={r.athlete.id} name={r.athlete.displayName} flag={store.country(r.athlete.countryCode)?.flag} /></td>
                        <td className="ink-2 text-xs">{r.catIds.map(c => catLabel(store, c)).join('  |  ')}</td>
                        <td className="tnum">{r.starts.length}</td>
                        <td className="tnum font-semibold">{r.podiums || ''}</td>
                        <td className="tnum">{r.top10 || ''}</td>
                        <td className="tnum font-semibold">{r.bestPos}.</td>
                        <td className="tnum">{r.avgPct != null ? fmtNum(r.avgPct, 1) + '%' : t('common.na')}</td>
                        <td className="ink-2 text-xs">{fmtDate(r.lastDate)}</td>
                        <td>
                          <button className="btn text-xs" aria-expanded={detailId === r.athlete.id}
                            onClick={() => setDetailId(detailId === r.athlete.id ? null : r.athlete.id)}>
                            {detailId === r.athlete.id ? '−' : t('ic.details')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            {detail && (
              <Card>
                <SectionTitle sub={t('ic.detailSub')}>{t('ic.detailTitle', { name: detail.athlete.displayName })}</SectionTitle>
                <div className="overflow-x-auto">
                  <table className="tbl w-full">
                    <thead>
                      <tr>
                        <th>{t('common.date')}</th><th>{t('ic.compCol')}</th><th>{t('ic.category')}</th>
                        <th className="tnum">{t('ic.pos')}</th><th className="tnum">{t('ic.beaten')}</th>
                        <th className="tnum">{t('ic.total')}</th><th className="tnum">{t('ic.gapWinner')}</th>
                        <th className="tnum">{t('ic.gapPodium')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...detail.starts].reverse().map((s: IntlStart) => (
                        <tr key={s.evId + s.cmp.id}>
                          <td className="ink-2 text-xs">{fmtDate(s.cmp.startDate)}</td>
                          <td>
                            <Badge color={GROUP_COLORS[s.group]}>{t(`ic.g.${s.group}`)}</Badge>
                            <span className="ml-1.5">{s.cmp.name}</span>
                          </td>
                          <td className="ink-2 text-xs">{catLabel(store, s.catId)}</td>
                          <td className={'tnum font-semibold' + (s.pos <= 3 ? '' : '')}>{s.pos}. / {s.n}</td>
                          <td className="tnum">{s.pct != null ? fmtNum(s.pct, 1) + '%' : t('common.na')}</td>
                          <td className="tnum">{s.total != null ? fmtNum(s.total, 2) : t('common.na')}</td>
                          <td className="tnum">{s.pos === 1 ? t('ic.win') : fmtGap(s.gapWinner)}</td>
                          <td className="tnum">{s.pos <= 3 ? t('ic.onPodium') : fmtGap(s.gapPodium)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ComputedNote />
              </Card>
            )}
            <p className="text-xs ink-3">{t('ic.note')}</p>
          </>
        )}
      </Gate>
    </div>
  );
}
