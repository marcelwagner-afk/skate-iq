/**
 * SportPerformanceAdapter – everything a sport defines; the core knows no sport.
 * Reference implementations: artistic/ (full) and speed/ (second sport, validates the abstraction).
 */
import type {
  Category, Discipline, ID, MetricValue, Performance, Sport,
} from '../core/types';

export interface MetricSpec {
  key: string;                       // "total" | "tes" | "timeMs" | …
  nameKey: string;                   // i18n
  unitKey?: string;                  // i18n ("points", "seconds")
  higherIsBetter: boolean;           // speed times: false
  decimals: number;
  /** primary metric drives rankings, SPI performance dimension, leaderboards */
  isPrimary?: boolean;
  format?: (v: number, locale: string) => string;
}

export interface GapBreakdownPart { metricKey: string; gap: number; }
export interface GapResult {
  metricKey: string;
  current: number; target: number; gap: number;   // gap > 0 ⇒ target not yet reached
  breakdown?: GapBreakdownPart[];                  // e.g. artistic: technical vs components
  largestOpportunityKey?: string;
}

export interface SportPerformanceAdapter {
  sport: Sport;
  disciplines: Discipline[];
  categories: Category[];
  metrics: MetricSpec[];

  /** value used to rank two performances (already oriented: higher = better) */
  rankingValue(p: Performance): number | null;

  /** primary comparable metric of a performance, oriented higher=better for percentile math */
  primaryValue(p: Performance): number | null;

  /** sport-specific "What does it take?" decomposition toward a target benchmark value */
  gapToTarget(current: Performance | null, currentBest: number | null, target: number): GapResult | null;

  /** per-sport SPI dimension weights (must sum to 1; validated in tests) */
  spiWeights: Record<string, number>;

  /** derived, sport-specific profile metrics (e.g. consistency of elements, lap speed) */
  deriveProfileMetrics(perfs: Performance[]): MetricValue[];

  /** which comparison rows the Compare screen shows, in order */
  compareMetricKeys: string[];

  /** ingestion: convert one raw source record into canonical Performance metrics */
  normalizeRaw(raw: Record<string, unknown>): MetricValue[] | null;
}

export class AdapterRegistry {
  private map = new Map<ID, SportPerformanceAdapter>();
  register(a: SportPerformanceAdapter): void {
    if (this.map.has(a.sport.id)) throw new Error(`adapter already registered: ${a.sport.id}`);
    const sum = Object.values(a.spiWeights).reduce((x, y) => x + y, 0);
    if (Math.abs(sum - 1) > 1e-9) throw new Error(`SPI weights of ${a.sport.id} must sum to 1 (got ${sum})`);
    this.map.set(a.sport.id, a);
  }
  get(sportId: ID): SportPerformanceAdapter {
    const a = this.map.get(sportId);
    if (!a) throw new Error(`no adapter for sport: ${sportId}`);
    return a;
  }
  all(): SportPerformanceAdapter[] { return [...this.map.values()]; }
  enabled(): SportPerformanceAdapter[] { return this.all().filter(a => a.sport.enabled); }
}
export const registry = new AdapterRegistry();
