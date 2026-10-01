/**
 * Speed Skating adapter – second reference implementation.
 * Exists to PROVE the multi-sport abstraction (§59): a lower-is-better,
 * time-based sport flowing through the same engines without core changes.
 *
 * Orientation convention: primaryValue/rankingValue return an oriented value
 * (higher = better). For times we use the negated milliseconds; UI formatting
 * converts back through the metric spec.
 */
import type { MetricValue, Performance } from '../../core/types';
import { round2 } from '../../core/benchmark';
import type { GapResult, MetricSpec, SportPerformanceAdapter } from '../types';

const m = (p: Performance, key: string): number | null =>
  p.metrics.find(x => x.key === key)?.value ?? null;

export function fmtTime(ms: number): string {
  const s = ms / 1000;
  if (s < 60) return s.toFixed(3) + ' s';
  const min = Math.floor(s / 60);
  return `${min}:${(s - min * 60).toFixed(3).padStart(6, '0')}`;
}

export const speedMetrics: MetricSpec[] = [
  { key: 'timeMs', nameKey: 'metric.timeMs', unitKey: 'metric.unit.seconds', higherIsBetter: false, decimals: 3, isPrimary: true, format: v => fmtTime(v) },
  { key: 'points', nameKey: 'metric.points', unitKey: 'metric.unit.points', higherIsBetter: true, decimals: 0 },
];

export const speedAdapter: SportPerformanceAdapter = {
  sport: { id: 'speed', nameKey: 'sport.speed', enabled: true },
  disciplines: [
    { id: 'speed.track', sportId: 'speed', nameKey: 'dis.speed.track' },
  ],
  categories: [
    { id: 'speed.track.sw', disciplineId: 'speed.track', nameKey: 'cat.senior.w', ageGroupId: 'senior', genderId: 'w', order: 1 },
    { id: 'speed.track.sm', disciplineId: 'speed.track', nameKey: 'cat.senior.m', ageGroupId: 'senior', genderId: 'm', order: 2 },
    { id: 'speed.track.jw', disciplineId: 'speed.track', nameKey: 'cat.junior.w', ageGroupId: 'junior', genderId: 'w', order: 3 },
    { id: 'speed.track.jm', disciplineId: 'speed.track', nameKey: 'cat.junior.m', ageGroupId: 'junior', genderId: 'm', order: 4 },
  ],
  metrics: speedMetrics,

  rankingValue: p => { const t = m(p, 'timeMs'); return p.status === 'ok' && t != null ? -t : null; },
  primaryValue: p => { const t = m(p, 'timeMs'); return p.status === 'ok' && t != null ? -t : null; },

  /** Speed: "time required to reach Top N" – gap is seconds to shave. */
  gapToTarget(_current, currentBest, target): GapResult | null {
    if (currentBest == null) return null;
    // oriented values are negative ms; gap > 0 means we are slower than target
    const gapMs = round2((target - currentBest) / 1); // both oriented
    return {
      metricKey: 'timeMs',
      current: currentBest, target, gap: gapMs,
      breakdown: [{ metricKey: 'timeMs', gap: gapMs }],
      largestOpportunityKey: 'timeMs',
    };
  },

  spiWeights: {
    internationalCompetitiveness: 0.35,
    performanceLevel: 0.25,
    consistency: 0.10,
    recentForm: 0.10,
    developmentRate: 0.15,
    competitionStrength: 0.05,
  },

  deriveProfileMetrics(perfs): MetricValue[] {
    const times = perfs.map(p => m(p, 'timeMs')).filter((x): x is number => x != null);
    if (!times.length) return [];
    return [{ key: 'bestLap', value: Math.min(...times) }];
  },

  compareMetricKeys: ['timeMs', 'points'],

  normalizeRaw(raw): MetricValue[] | null {
    const t = Number(raw['timeMs']);
    if (!Number.isFinite(t) || t <= 0) return null;
    const out: MetricValue[] = [{ key: 'timeMs', value: t }];
    const pts = Number(raw['points']);
    if (Number.isFinite(pts)) out.push({ key: 'points', value: pts });
    return out;
  },
};
