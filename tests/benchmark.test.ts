import { describe, expect, it } from 'vitest';
import {
  bestPerAthlete, corridor, groupStats, MIN_N_PERCENTILE, percentileOf, quantile, targetValue,
} from '../src/core/benchmark';

describe('benchmark engine', () => {
  it('quantile: median/quartiles on known series', () => {
    const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(quantile(s, 0.5)).toBeCloseTo(5.5, 9);
    expect(quantile(s, 0.25)).toBeCloseTo(3.25, 9);
    expect(quantile(s, 0.75)).toBeCloseTo(7.75, 9);
  });
  it('groupStats computes mean/median correctly', () => {
    const st = groupStats([10, 20, 30])!;
    expect(st.mean).toBe(20); expect(st.median).toBe(20); expect(st.n).toBe(3);
  });
  it('percentile uses mid-rank and respects MIN_N', () => {
    const small = Array.from({ length: MIN_N_PERCENTILE - 1 }, (_, i) => i);
    expect(percentileOf(5, small).percentile).toBeNull();
    expect(percentileOf(5, small).reasonKey).toBe('bench.tooFewAthletes');
    const g = Array.from({ length: 20 }, (_, i) => i + 1);      // 1..20
    const p = percentileOf(15, g);                               // 14 below + 0.5 equal
    expect(p.percentile).toBeCloseTo(((14 + 0.5) / 20) * 100, 1);
  });
  it('percentile of the best value approaches 100, worst near 0', () => {
    const g = Array.from({ length: 50 }, (_, i) => i);
    expect(percentileOf(49, g).percentile!).toBeGreaterThan(95);
    expect(percentileOf(0, g).percentile!).toBeLessThan(5);
  });
  it('targetValue: topN is the N-th best; podium = mean of top 3', () => {
    const v = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8];
    expect(targetValue(v, { kind: 'topN', n: 10 })).toBe(10);
    expect(targetValue(v, { kind: 'podium' })).toBeCloseTo(90, 5);
    expect(targetValue([1, 2], { kind: 'topN', n: 10 })).toBeNull();
  });
  it('corridor returns p25..p75 band', () => {
    const c = corridor([1, 2, 3, 4, 5, 6, 7, 8])!;
    expect(c.lo).toBeLessThan(c.mid); expect(c.mid).toBeLessThan(c.hi);
  });
  it('bestPerAthlete: one vote per athlete', () => {
    const m = new Map([['a', [10, 50, 20]], ['b', [30]]]);
    expect(bestPerAthlete(m).sort((x, y) => x - y)).toEqual([30, 50]);
  });
});
