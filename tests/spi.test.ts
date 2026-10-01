import { describe, expect, it } from 'vitest';
import { computeSpi, type SpiInputs } from '../src/core/spi';
import { artisticAdapter } from '../src/adapters/artistic';
import { speedAdapter } from '../src/adapters/speed';

const WEIGHTS = artisticAdapter.spiWeights;
const base: SpiInputs = {
  athleteId: 'a1', sportId: 'artistic', categoryId: 'artistic.free.sw',
  seasonValues: [
    { date: '2026-03-14', value: 120 }, { date: '2026-05-20', value: 125 },
    { date: '2026-07-10', value: 128 }, { date: '2026-09-18', value: 132 },
  ],
  prevSeasonBest: 118,
  worldGroupValues: Array.from({ length: 30 }, (_, i) => 90 + i * 2),  // 90..148
  competitionStrengths: [70, 85, 70, 100],
  today: '2026-10-01',
};

describe('SPI engine', () => {
  it('is deterministic and in [0,100]', () => {
    const a = computeSpi(base, WEIGHTS); const b = computeSpi(base, WEIGHTS);
    expect(a.value).toBe(b.value);
    expect(a.value).toBeGreaterThanOrEqual(0); expect(a.value).toBeLessThanOrEqual(100);
  });
  it('is fully explainable: every contribution carries weight, score, inputs', () => {
    const s = computeSpi(base, WEIGHTS);
    expect(s.contributions).toHaveLength(6);
    const wsum = s.contributions.reduce((a, c) => a + c.weight, 0);
    expect(wsum).toBeCloseTo(1, 9);
    for (const c of s.contributions) {
      expect(c.inputs.length).toBeGreaterThan(0);
      expect(c.explainKey).toMatch(/^spi\.explain\./);
    }
    // weighted sum of displayed numbers reproduces the displayed SPI (explainability!)
    const recomputed = s.contributions.reduce((a, c) => a + c.weight * c.score, 0);
    expect(s.value).toBeCloseTo(recomputed, 1);
  });
  it('better season ⇒ higher SPI (monotonicity sanity)', () => {
    const worse = computeSpi({ ...base, seasonValues: base.seasonValues.map(v => ({ ...v, value: v.value - 25 })) }, WEIGHTS);
    const better = computeSpi(base, WEIGHTS);
    expect(better.value).toBeGreaterThan(worse.value);
  });
  it('low data ⇒ low confidence, neutral dimensions flagged', () => {
    const s = computeSpi({ ...base, seasonValues: [{ date: '2026-09-18', value: 120 }], worldGroupValues: [100, 110] }, WEIGHTS);
    expect(s.confidence).toBe('low');
    expect(s.contributions.some(c => c.explainKey === 'spi.explain.neutralNoData')).toBe(true);
  });
  it('adapter weights sum to 1 for every registered sport', () => {
    for (const a of [artisticAdapter, speedAdapter]) {
      const sum = Object.values(a.spiWeights).reduce((x, y) => x + y, 0);
      expect(sum).toBeCloseTo(1, 9);
    }
  });
});
