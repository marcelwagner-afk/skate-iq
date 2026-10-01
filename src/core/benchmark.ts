/**
 * Benchmark Engine – percentiles and reference statistics over benchmark groups.
 *
 * Methodology (carried over from the audited DRIV tool and generalized):
 *  - Reference stats use each athlete's BEST primary value inside the window
 *    (one vote per athlete, not per start), so busy competitors don't dominate.
 *  - Context comparability: only performances from comparable judging/venue
 *    contexts enter a group (caller filters by CompetitionLevel; the artistic
 *    "international before national" rule is implemented at selection time).
 *  - Percentiles are only reported when n >= MIN_N (statistical honesty);
 *    below that the engine returns stats with `percentile: null` + reasonKey.
 *  - Everything returns the inputs it used → explainable UI.
 */
import type { BenchmarkGroup } from './types';

export const MIN_N_PERCENTILE = 12;
export const MODEL_VERSION = 'bm-1.0.0';

export interface GroupStats {
  n: number; mean: number; median: number; p25: number; p75: number; min: number; max: number;
}
export interface PercentileResult {
  percentile: number | null;          // 0..100, null if not meaningful
  n: number;
  reasonKey?: string;                 // e.g. 'bench.tooFewAthletes'
  stats: GroupStats | null;
}

export function quantile(sortedAsc: number[], q: number): number {
  const n = sortedAsc.length;
  if (n === 0) return NaN;
  if (n === 1) return sortedAsc[0];
  const pos = (n - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  if (lo === hi) return sortedAsc[lo];
  return sortedAsc[lo] + (sortedAsc[hi] - sortedAsc[lo]) * (pos - lo);
}

export function groupStats(values: number[]): GroupStats | null {
  if (!values.length) return null;
  const s = [...values].sort((a, b) => a - b);
  const mean = s.reduce((a, b) => a + b, 0) / s.length;
  return {
    n: s.length,
    mean: round2(mean),
    median: round2(quantile(s, 0.5)),
    p25: round2(quantile(s, 0.25)),
    p75: round2(quantile(s, 0.75)),
    min: s[0], max: s[s.length - 1],
  };
}

/**
 * Percentile of `value` within `groupValues` (higher value ⇒ higher percentile).
 * Uses mid-rank ("mean rank of ties") definition: P = (below + 0.5·equal) / n · 100.
 */
export function percentileOf(value: number, groupValues: number[]): PercentileResult {
  const n = groupValues.length;
  const stats = groupStats(groupValues);
  if (n < MIN_N_PERCENTILE) {
    return { percentile: null, n, reasonKey: 'bench.tooFewAthletes', stats };
  }
  let below = 0, equal = 0;
  for (const v of groupValues) { if (v < value - 1e-9) below++; else if (Math.abs(v - value) <= 1e-9) equal++; }
  return { percentile: round1(((below + 0.5 * equal) / n) * 100), n, stats };
}

/** Target value for a named group: topN ⇒ the N-th best value; podium ⇒ mean of top 3. */
export function targetValue(groupValuesDesc: number[], group: BenchmarkGroup): number | null {
  const v = [...groupValuesDesc].sort((a, b) => b - a);
  if (!v.length) return null;
  switch (group.kind) {
    case 'topN': return v.length >= group.n ? v[group.n - 1] : null;
    case 'podium': return v.length >= 3 ? round2((v[0] + v[1] + v[2]) / 3) : null;
    default: {
      const s = groupStats(v); return s ? s.median : null;
    }
  }
}

/** Benchmark corridor for development charts: p25..p75 band + median of the group. */
export interface Corridor { lo: number; mid: number; hi: number; n: number }
export function corridor(groupValues: number[]): Corridor | null {
  const s = groupStats(groupValues);
  if (!s || s.n < 4) return null;
  return { lo: s.p25, mid: s.median, hi: s.p75, n: s.n };
}

/** Best-per-athlete reduction: Map<athleteId, values[]> → one best value per athlete. */
export function bestPerAthlete(valuesByAthlete: Map<string, number[]>): number[] {
  const out: number[] = [];
  for (const vals of valuesByAthlete.values()) {
    if (vals.length) out.push(Math.max(...vals));
  }
  return out;
}

export function describeGroup(g: BenchmarkGroup): string {
  switch (g.kind) {
    case 'world': return 'bench.group.world';
    case 'continent': return 'bench.group.continent';
    case 'country': return 'bench.group.country';
    case 'topN': return `bench.group.top${g.n}`;
    case 'podium': return 'bench.group.podium';
    case 'athletes': return 'bench.group.athletes';
    case 'countries': return 'bench.group.countries';
  }
}

export const round1 = (x: number): number => Math.round(x * 10) / 10;
export const round2 = (x: number): number => Math.round(x * 100) / 100;
