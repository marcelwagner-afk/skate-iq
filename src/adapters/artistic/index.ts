/**
 * Artistic Skating adapter – the reference implementation.
 * Metrics and methodology ported from the audited DRIV tool:
 *  - total = tes + pcs (identity-checked at ingestion)
 *  - gap decomposition into technical vs. components (the proven coaching view)
 *  - consistency derived from score spread (element-level depth arrives with
 *    the judges-details importer in a later increment, see MIGRATION_PLAN.md)
 */
import type { MetricValue, Performance } from '../../core/types';
import { round2 } from '../../core/benchmark';
import type { GapResult, MetricSpec, SportPerformanceAdapter } from '../types';

const m = (p: Performance, key: string): number | null =>
  p.metrics.find(x => x.key === key)?.value ?? null;

export const METRICS: MetricSpec[] = [
  { key: 'total', nameKey: 'metric.total', unitKey: 'metric.unit.points', higherIsBetter: true, decimals: 2, isPrimary: true },
  { key: 'tes', nameKey: 'metric.tes', unitKey: 'metric.unit.points', higherIsBetter: true, decimals: 2 },
  { key: 'pcs', nameKey: 'metric.pcs', unitKey: 'metric.unit.points', higherIsBetter: true, decimals: 2 },
  { key: 'deductions', nameKey: 'metric.deductions', unitKey: 'metric.unit.points', higherIsBetter: false, decimals: 2 },
];

export const artisticAdapter: SportPerformanceAdapter = {
  sport: { id: 'artistic', nameKey: 'sport.artistic', enabled: true },
  disciplines: [
    { id: 'artistic.free', sportId: 'artistic', nameKey: 'dis.artistic.free' },
    { id: 'artistic.solodance', sportId: 'artistic', nameKey: 'dis.artistic.solodance' },
  ],
  categories: [
    { id: 'artistic.free.sw', disciplineId: 'artistic.free', nameKey: 'cat.senior.w', ageGroupId: 'senior', genderId: 'w', order: 1 },
    { id: 'artistic.free.sm', disciplineId: 'artistic.free', nameKey: 'cat.senior.m', ageGroupId: 'senior', genderId: 'm', order: 2 },
    { id: 'artistic.free.jw', disciplineId: 'artistic.free', nameKey: 'cat.junior.w', ageGroupId: 'junior', genderId: 'w', order: 3 },
    { id: 'artistic.free.jm', disciplineId: 'artistic.free', nameKey: 'cat.junior.m', ageGroupId: 'junior', genderId: 'm', order: 4 },
    { id: 'artistic.solodance.sw', disciplineId: 'artistic.solodance', nameKey: 'cat.senior.w', ageGroupId: 'senior', genderId: 'w', order: 5 },
    { id: 'artistic.solodance.jw', disciplineId: 'artistic.solodance', nameKey: 'cat.junior.w', ageGroupId: 'junior', genderId: 'w', order: 6 },
  ],
  metrics: METRICS,

  rankingValue: p => (p.status === 'ok' ? m(p, 'total') : null),
  primaryValue: p => (p.status === 'ok' ? m(p, 'total') : null),

  gapToTarget(current, currentBest, target): GapResult | null {
    if (currentBest == null) return null;
    const gap = round2(target - currentBest);
    const res: GapResult = { metricKey: 'total', current: currentBest, target: round2(target), gap };
    if (current) {
      const tes = m(current, 'tes'), pcs = m(current, 'pcs');
      if (tes != null && pcs != null && currentBest > 0 && gap > 0) {
        // split the gap proportionally to each component's distance from its
        // share of the target (coaching heuristic validated in the DRIV tool)
        const tesShare = tes / currentBest, pcsShare = pcs / currentBest;
        const tesGap = round2(target * tesShare - tes);
        const pcsGap = round2(target * pcsShare - pcs);
        res.breakdown = [
          { metricKey: 'tes', gap: tesGap },
          { metricKey: 'pcs', gap: pcsGap },
        ];
        res.largestOpportunityKey = pcsGap >= tesGap ? 'pcs' : 'tes';
      }
    }
    return res;
  },

  spiWeights: {
    internationalCompetitiveness: 0.30,
    performanceLevel: 0.20,
    consistency: 0.15,
    recentForm: 0.10,
    developmentRate: 0.15,
    competitionStrength: 0.10,
  },

  deriveProfileMetrics(perfs): MetricValue[] {
    const totals = perfs.map(p => m(p, 'total')).filter((x): x is number => x != null);
    if (!totals.length) return [];
    const mean = totals.reduce((a, b) => a + b, 0) / totals.length;
    const sd = Math.sqrt(totals.reduce((a, b) => a + (b - mean) ** 2, 0) / totals.length);
    return [
      { key: 'pb', value: round2(Math.max(...totals)) },
      { key: 'consistency', value: round2(mean > 0 ? Math.max(0, 100 * (1 - (sd / mean) / 0.25)) : 0) },
    ];
  },

  compareMetricKeys: ['total', 'tes', 'pcs', 'deductions'],

  normalizeRaw(raw): MetricValue[] | null {
    const total = Number(raw['total']); const tes = Number(raw['tes']); const pcs = Number(raw['pcs']);
    if (!Number.isFinite(total)) return null;
    const out: MetricValue[] = [{ key: 'total', value: total }];
    if (Number.isFinite(tes)) out.push({ key: 'tes', value: tes });
    if (Number.isFinite(pcs)) out.push({ key: 'pcs', value: pcs });
    const ded = Number(raw['deductions']);
    if (Number.isFinite(ded)) out.push({ key: 'deductions', value: ded });
    // integrity: total must equal tes+pcs within tolerance (DRIV identity check)
    if (Number.isFinite(tes) && Number.isFinite(pcs) && Math.abs(tes + pcs - total) > 0.05) return null;
    return out;
  },
};
