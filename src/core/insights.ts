/**
 * Deterministic insight generation (§36): insights come from calculations,
 * never from an LLM. (Skate AI may later *explain* these, not invent them.)
 */
import { round1 } from './benchmark';
import type { SpiSnapshot } from './types';

export interface Insight {
  key: string;                              // i18n key with {params}
  params: Record<string, string | number>;
  tone: 'positive' | 'neutral' | 'attention';
  evidence: Record<string, number>;         // raw numbers backing the statement
}

export interface InsightInputs {
  percentileNow: number | null; percentilePrev: number | null;
  gapToTop10: number | null; metricLabel: string;
  lastValues: number[];                     // chronological primary values
  spi: SpiSnapshot | null;
  countryTop25Count?: number; countryLabel?: string; categoryLabel?: string;
}

export function generateInsights(i: InsightInputs): Insight[] {
  const out: Insight[] = [];
  if (i.percentileNow != null && i.percentilePrev != null && Math.abs(i.percentileNow - i.percentilePrev) >= 3) {
    const up = i.percentileNow > i.percentilePrev;
    out.push({
      key: up ? 'insight.percentileUp' : 'insight.percentileDown',
      params: { from: i.percentilePrev, to: i.percentileNow },
      tone: up ? 'positive' : 'attention',
      evidence: { from: i.percentilePrev, to: i.percentileNow },
    });
  }
  if (i.gapToTop10 != null) {
    out.push(i.gapToTop10 > 0
      ? { key: 'insight.gapTop10', params: { gap: round1(i.gapToTop10), metric: i.metricLabel }, tone: 'neutral', evidence: { gap: i.gapToTop10 } }
      : { key: 'insight.top10Reached', params: {}, tone: 'positive', evidence: { gap: i.gapToTop10 } });
  }
  if (i.lastValues.length >= 4) {
    const last4 = i.lastValues.slice(-4);
    const mean = last4.reduce((a, b) => a + b, 0) / 4;
    const cv = Math.sqrt(last4.reduce((a, b) => a + (b - mean) ** 2, 0) / 4) / (mean || 1);
    if (cv <= 0.05) out.push({ key: 'insight.stable4', params: {}, tone: 'positive', evidence: { cv: round1(cv * 100) } });
  }
  if (i.spi && i.spi.confidence !== 'low') {
    const dev = i.spi.contributions.find(c => c.dimension === 'developmentRate');
    if (dev && dev.score >= 60) out.push({ key: 'insight.developing', params: { score: dev.score }, tone: 'positive', evidence: { score: dev.score } });
  }
  if (i.countryTop25Count != null && i.countryLabel && i.categoryLabel) {
    out.push({
      key: 'insight.countryTop25',
      params: { n: i.countryTop25Count, country: i.countryLabel, category: i.categoryLabel },
      tone: 'neutral', evidence: { n: i.countryTop25Count },
    });
  }
  return out;
}
