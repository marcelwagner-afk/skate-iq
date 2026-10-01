import { describe, expect, it } from 'vitest';
import { artisticAdapter } from '../src/adapters/artistic';
import { speedAdapter } from '../src/adapters/speed';
import { AdapterRegistry } from '../src/adapters/types';
import { can, requiredPlan } from '../src/core/entitlements';
import { computeCompetitionStrength } from '../src/core/competitionStrength';
import type { Performance } from '../src/core/types';

const perf = (metrics: { key: string; value: number }[]): Performance => ({
  id: 'p', eventId: 'e', athleteId: 'a', metrics, status: 'ok', sourceId: 's',
});

describe('sport adapters', () => {
  it('registry rejects duplicate sports and invalid SPI weights', () => {
    const r = new AdapterRegistry();
    r.register(artisticAdapter);
    expect(() => r.register(artisticAdapter)).toThrow(/already registered/);
    expect(() => r.register({ ...speedAdapter, spiWeights: { a: 0.5 } })).toThrow(/sum to 1/);
  });
  it('artistic: total integrity enforced at normalization (tes+pcs=total)', () => {
    expect(artisticAdapter.normalizeRaw({ total: 100, tes: 58, pcs: 42 })).not.toBeNull();
    expect(artisticAdapter.normalizeRaw({ total: 100, tes: 58, pcs: 45 })).toBeNull();
  });
  it('artistic: gap breakdown splits into tes/pcs and names the opportunity', () => {
    const p = perf([{ key: 'total', value: 132.4 }, { key: 'tes', value: 76.0 }, { key: 'pcs', value: 56.4 }]);
    const g = artisticAdapter.gapToTarget(p, 132.4, 139.1)!;
    expect(g.gap).toBeCloseTo(6.7, 2);
    expect(g.breakdown).toHaveLength(2);
    const sum = g.breakdown!.reduce((a, b) => a + b.gap, 0);
    expect(sum).toBeCloseTo(g.gap, 1);
    expect(['tes', 'pcs']).toContain(g.largestOpportunityKey);
  });
  it('speed: lower time ranks higher (orientation)', () => {
    const fast = speedAdapter.primaryValue(perf([{ key: 'timeMs', value: 84000 }]))!;
    const slow = speedAdapter.primaryValue(perf([{ key: 'timeMs', value: 90000 }]))!;
    expect(fast).toBeGreaterThan(slow);
  });
  it('speed: gap expresses time to shave toward the target', () => {
    const g = speedAdapter.gapToTarget(null, -90000, -84000)!;    // oriented
    expect(g.gap).toBe(6000);                                     // 6 s zu schnell werden
  });
  it('non-ok performances never rank', () => {
    const dnf: Performance = { ...perf([{ key: 'total', value: 120 }]), status: 'dnf' };
    expect(artisticAdapter.rankingValue(dnf)).toBeNull();
  });
});

describe('entitlements', () => {
  it('FREE sees basics only; federation features need federation plans', () => {
    expect(can('FREE', 'athlete.basic')).toBe(true);
    expect(can('FREE', 'athlete.spi')).toBe(false);
    expect(can('ATHLETE_PRO', 'athlete.spi')).toBe(true);
    expect(can('ATHLETE_PRO', 'federation.intelligence')).toBe(false);
    expect(can('FED_STARTER', 'federation.intelligence')).toBe(true);
    expect(requiredPlan('athlete.spi')).toBe('ATHLETE_PRO');
    expect(requiredPlan('federation.api')).toBe('FED_ENTERPRISE');
  });
});

describe('competition strength', () => {
  it('worlds with deep top field beats a thin regional', () => {
    const worlds = computeCompetitionStrength({ competitionId: 'w', level: 'world', rankedAthletes: 30, top10Entrants: 8, top25Entrants: 12, today: '2026-10-01' });
    const regional = computeCompetitionStrength({ competitionId: 'r', level: 'regional', rankedAthletes: 8, top10Entrants: 0, top25Entrants: 1, today: '2026-10-01' });
    expect(worlds.index).toBeGreaterThan(regional.index);
    expect(worlds.factors.find(f => f.key === 'levelBase')!.value).toBe(100);
  });
});
