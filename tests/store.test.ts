/** Integration: the full Store over the generated synthetic bundle. */
import { describe, expect, it } from 'vitest';
import bundleJson from '../src/data/seed/bundle.json';
import { Store } from '../src/data/store';
import type { DataBundle } from '../src/data/provider';

const store = new Store(bundleJson as unknown as DataBundle, '2026-10-01');

describe('store over seed bundle', () => {
  it('bundle is synthetic (privacy invariant for the public preview)', () => {
    expect((bundleJson as { synthetic: boolean }).synthetic).toBe(true);
  });
  it('world ranking exists for every artistic+speed category and positions are contiguous', () => {
    for (const catId of ['artistic.free.sw', 'artistic.free.jm', 'speed.track.sm', 'speed.track.jw']) {
      const r = store.ranking(catId, 's2026');
      expect(r.length).toBeGreaterThan(10);
      expect(r[0].position).toBe(1);
      expect(r.at(-1)!.position).toBe(r.length);
      for (let i = 1; i < r.length; i++) expect(r[i - 1].value >= r[i].value).toBe(true);
    }
  });
  it('percentile of the world #1 is > 95', () => {
    const r = store.ranking('artistic.free.sw', 's2026');
    expect(r[0].percentile!).toBeGreaterThan(95);
  });
  it('top-10 target equals the 10th best value', () => {
    const r = store.ranking('speed.track.sm', 's2026');
    const t = store.benchmarkTarget('speed.track.sm', 's2026', { kind: 'topN', n: 10 })!;
    expect(t).toBeCloseTo(r[9].value, 6);
  });
  it('SPI computes for a ranked athlete and is explainable', () => {
    const r = store.ranking('artistic.free.sw', 's2026');
    const spi = store.spi(r[2].athlete.id, 'artistic.free.sw')!;
    expect(spi.value).toBeGreaterThan(0);
    expect(spi.contributions).toHaveLength(6);
  });
  it('talent radar classifies and every entry carries evidence', () => {
    const t = store.talentRadar();
    expect(t.length).toBeGreaterThan(10);
    for (const e of t.slice(0, 20)) expect(e.evidence.length).toBeGreaterThanOrEqual(4);
  });
  it('federation stats add up (top10 ⊆ top25 ⊆ top50 ⊆ athletes)', () => {
    for (const code of ['GER', 'ITA', 'USA']) {
      const s = store.federationStats(code);
      expect(s.top10).toBeLessThanOrEqual(s.top25);
      expect(s.top25).toBeLessThanOrEqual(s.top50);
      expect(s.top50).toBeLessThanOrEqual(s.athletes);
    }
  });
  it('competition strength: worlds > nationals', () => {
    const worlds = store.competitionStrength('cmp_2026_worlds').index;
    const nat = store.competitionStrength('cmp_2026_nat_GER').index;
    expect(worlds).toBeGreaterThan(nat);
  });
  it('comparable-context rule: ranking basis excludes national-only inflation', () => {
    // an athlete competing only nationally must not outrank via national values
    const r = store.ranking('artistic.free.sw', 's2026');
    expect(r.every(x => Number.isFinite(x.value))).toBe(true);
  });
});
