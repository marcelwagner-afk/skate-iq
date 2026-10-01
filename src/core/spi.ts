/**
 * SPI – Skate Performance Index (0–100), model spi-1.0.0.
 *
 * Design goals (see docs/SPI_MODEL.md):
 *  - NOT arbitrary: every dimension is a documented, deterministic formula
 *    over verifiable inputs; weights come from the sport adapter.
 *  - Explainable: the result carries every dimension's score, weight and the
 *    raw inputs that produced it ("Why is my SPI 84?").
 *  - Honest: a confidence level derives from data volume/recency; low-data
 *    athletes get low confidence, never a hidden penalty.
 *
 * Dimensions (0–100 each):
 *  internationalCompetitiveness – percentile of best value vs. world group
 *  performanceLevel             – best value relative to the world top value
 *  consistency                  – 100 · (1 − cv) over the season's values (cv capped)
 *  recentForm                   – last-90-days mean vs. season mean, scaled around 50
 *  developmentRate              – season-over-season best-value change, scaled around 50
 *  competitionStrength          – mean strength index of competitions entered
 */
import { percentileOf, round1, round2 } from './benchmark';
import type { MetricValue, SpiContribution, SpiSnapshot } from './types';

export const SPI_MODEL_VERSION = 'spi-1.0.0';

export interface SpiInputs {
  athleteId: string; sportId: string; categoryId: string;
  /** athlete's primary-metric values this season, chronological, higher=better */
  seasonValues: { date: string; value: number }[];
  /** previous season best (null if none) */
  prevSeasonBest: number | null;
  /** world benchmark group: best value per athlete (comparable context) */
  worldGroupValues: number[];
  /** strength indexes (0..100) of competitions entered this season */
  competitionStrengths: number[];
  today: string;                       // ISO date, injected for determinism/tests
}

const clamp = (x: number, lo = 0, hi = 100): number => Math.min(hi, Math.max(lo, x));

export function computeSpi(inp: SpiInputs, weights: Record<string, number>): SpiSnapshot {
  const vals = inp.seasonValues.map(v => v.value);
  const best = vals.length ? Math.max(...vals) : null;
  const mean = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
  const contributions: SpiContribution[] = [];
  const add = (dimension: string, score: number | null, inputs: MetricValue[], explainKey: string): void => {
    contributions.push({
      dimension,
      weight: weights[dimension] ?? 0,
      score: score == null ? 50 : round1(clamp(score)),   // neutral 50 when not computable
      explainKey: score == null ? 'spi.explain.neutralNoData' : explainKey,
      inputs,
    });
  };

  // 1) International competitiveness: world percentile of the best value
  const pct = best != null ? percentileOf(best, inp.worldGroupValues) : null;
  add('internationalCompetitiveness', pct?.percentile ?? null,
    [{ key: 'best', value: best ?? 0 }, { key: 'groupN', value: inp.worldGroupValues.length }],
    'spi.explain.intl');

  // 2) Performance level: best / world-best (linear)
  const worldBest = inp.worldGroupValues.length ? Math.max(...inp.worldGroupValues) : null;
  const level = best != null && worldBest ? (best / worldBest) * 100 : null;
  add('performanceLevel', level,
    [{ key: 'best', value: best ?? 0 }, { key: 'worldBest', value: worldBest ?? 0 }],
    'spi.explain.level');

  // 3) Consistency: 100·(1 − cv/CV_CAP), cv = σ/μ over season values (n ≥ 3)
  const CV_CAP = 0.25;
  let consistency: number | null = null; let cv = 0;
  if (vals.length >= 3 && mean && mean > 0) {
    const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length);
    cv = sd / mean;
    consistency = (1 - Math.min(cv, CV_CAP) / CV_CAP) * 100;
  }
  add('consistency', consistency,
    [{ key: 'n', value: vals.length }, { key: 'cv', value: round2(cv) }],
    'spi.explain.consistency');

  // 4) Recent form: mean(last 90 days) vs. season mean → 50 ± 250·relΔ (capped)
  let recent: number | null = null; let recentMean = 0;
  if (mean && vals.length >= 3) {
    const cutoff = new Date(inp.today).getTime() - 90 * 86400e3;
    const recentVals = inp.seasonValues.filter(v => new Date(v.date).getTime() >= cutoff).map(v => v.value);
    if (recentVals.length) {
      recentMean = recentVals.reduce((a, b) => a + b, 0) / recentVals.length;
      recent = 50 + clamp(((recentMean - mean) / mean) * 250, -50, 50);
    }
  }
  add('recentForm', recent,
    [{ key: 'recentMean', value: round2(recentMean) }, { key: 'seasonMean', value: round2(mean ?? 0) }],
    'spi.explain.recent');

  // 5) Development rate: (best − prevBest)/prevBest → 50 ± 250·relΔ (capped)
  let dev: number | null = null;
  if (best != null && inp.prevSeasonBest && inp.prevSeasonBest > 0) {
    dev = 50 + clamp(((best - inp.prevSeasonBest) / inp.prevSeasonBest) * 250, -50, 50);
  }
  add('developmentRate', dev,
    [{ key: 'best', value: best ?? 0 }, { key: 'prevBest', value: inp.prevSeasonBest ?? 0 }],
    'spi.explain.development');

  // 6) Competition strength entered
  const cs = inp.competitionStrengths.length
    ? inp.competitionStrengths.reduce((a, b) => a + b, 0) / inp.competitionStrengths.length
    : null;
  add('competitionStrength', cs,
    [{ key: 'meanStrength', value: round1(cs ?? 0) }, { key: 'competitions', value: inp.competitionStrengths.length }],
    'spi.explain.strength');

  const value = round1(contributions.reduce((a, c) => a + c.weight * c.score, 0));

  // Confidence: volume + whether percentile group was meaningful
  const confidence =
    vals.length >= 6 && inp.worldGroupValues.length >= 12 ? 'high'
      : vals.length >= 3 && inp.worldGroupValues.length >= 8 ? 'medium' : 'low';

  return {
    id: `spi_${inp.athleteId}_${inp.today}`,
    athleteId: inp.athleteId, sportId: inp.sportId, categoryId: inp.categoryId,
    value, confidence, computedAt: inp.today, modelVersion: SPI_MODEL_VERSION,
    contributions,
  };
}
