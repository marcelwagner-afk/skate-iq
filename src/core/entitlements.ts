/** Entitlements: plan → features. UI asks `can(feature)`; server re-checks in Phase 2. */
import type { FeatureKey, PlanKey } from './types';

const BASE: FeatureKey[] = ['athlete.basic'];
const ATHLETE_PRO: FeatureKey[] = [...BASE,
  'athlete.history', 'athlete.benchmarks', 'athlete.spi', 'athlete.whatItTakes',
  'athlete.compare', 'athlete.reports', 'athlete.cards'];
const COACH_PRO: FeatureKey[] = [...ATHLETE_PRO, 'coach.portfolio', 'coach.alerts'];
const CLUB_PRO: FeatureKey[] = [...COACH_PRO, 'club.dashboard', 'club.talentRadar', 'club.exports'];
const FED_STARTER: FeatureKey[] = [...CLUB_PRO, 'federation.intelligence', 'federation.countryCompare'];
const FED_PRO: FeatureKey[] = [...FED_STARTER, 'federation.talent', 'federation.cockpit', 'federation.reports', 'tools.calculator'];
const FED_ENTERPRISE: FeatureKey[] = [...FED_PRO, 'federation.api', 'federation.whiteLabel'];
const ADMIN: FeatureKey[] = [...FED_ENTERPRISE, 'admin.dataQuality', 'admin.console'];

export const PLAN_FEATURES: Record<PlanKey, ReadonlySet<FeatureKey>> = {
  FREE: new Set(BASE),
  ATHLETE_PRO: new Set(ATHLETE_PRO),
  COACH_PRO: new Set(COACH_PRO),
  CLUB_PRO: new Set(CLUB_PRO),
  FED_STARTER: new Set(FED_STARTER),
  FED_PRO: new Set(FED_PRO),
  FED_ENTERPRISE: new Set(FED_ENTERPRISE),
  ADMIN: new Set(ADMIN),
};

export const PLAN_PRICING: Record<Exclude<PlanKey, 'ADMIN'>, { priceKey: string }> = {
  FREE: { priceKey: 'pricing.free' },
  ATHLETE_PRO: { priceKey: 'pricing.athletePro' },
  COACH_PRO: { priceKey: 'pricing.coachPro' },
  CLUB_PRO: { priceKey: 'pricing.clubPro' },
  FED_STARTER: { priceKey: 'pricing.fedStarter' },
  FED_PRO: { priceKey: 'pricing.fedPro' },
  FED_ENTERPRISE: { priceKey: 'pricing.fedEnterprise' },
};

export function can(plan: PlanKey, feature: FeatureKey): boolean {
  return PLAN_FEATURES[plan].has(feature);
}
/** smallest plan that unlocks a feature – for upgrade hints */
export function requiredPlan(feature: FeatureKey): PlanKey {
  const order: PlanKey[] = ['FREE', 'ATHLETE_PRO', 'COACH_PRO', 'CLUB_PRO', 'FED_STARTER', 'FED_PRO', 'FED_ENTERPRISE', 'ADMIN'];
  for (const p of order) if (PLAN_FEATURES[p].has(feature)) return p;
  return 'ADMIN';
}
