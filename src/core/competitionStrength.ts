/**
 * Competition Strength Index (0–100), model cs-1.0.0 – explainable factor mix.
 * Factors (each 0..100, weighted):
 *   fieldDepth   .30  ranked athletes vs. reference field (25 ⇒ 100)
 *   topDensity   .40  share of entrants who are world top-10/25 members
 *   levelBase    .30  competition level base value
 */
import { round1 } from './benchmark';
import type { CompetitionLevel, CompetitionStrengthSnapshot, MetricValue } from './types';

export const CS_MODEL_VERSION = 'cs-1.0.0';
const LEVEL_BASE: Record<CompetitionLevel, number> = {
  world: 100, continental: 85, international: 70, national: 45, regional: 25,
};

export interface StrengthInputs {
  competitionId: string;
  level: CompetitionLevel;
  rankedAthletes: number;
  top10Entrants: number;
  top25Entrants: number;
  today: string;
}

export function computeCompetitionStrength(inp: StrengthInputs): CompetitionStrengthSnapshot {
  const fieldDepth = Math.min(100, (inp.rankedAthletes / 25) * 100);
  const n = Math.max(1, inp.rankedAthletes);
  const topDensity = Math.min(100, ((inp.top10Entrants * 2 + inp.top25Entrants) / n) * 100);
  const levelBase = LEVEL_BASE[inp.level];
  const index = round1(0.3 * fieldDepth + 0.4 * topDensity + 0.3 * levelBase);
  const factors: MetricValue[] = [
    { key: 'fieldDepth', value: round1(fieldDepth) },
    { key: 'topDensity', value: round1(topDensity) },
    { key: 'levelBase', value: levelBase },
    { key: 'rankedAthletes', value: inp.rankedAthletes },
    { key: 'top10Entrants', value: inp.top10Entrants },
    { key: 'top25Entrants', value: inp.top25Entrants },
  ];
  return {
    id: `cs_${inp.competitionId}`, competitionId: inp.competitionId,
    index, factors, computedAt: inp.today, modelVersion: CS_MODEL_VERSION,
  };
}
