/**
 * SKATE IQ – Canonical, sport-independent data model.
 *
 * Rules:
 *  - Every entity has a stable opaque ID. Display names are data, never identity.
 *  - Nothing in this file may reference a concrete sport. Sport-specific
 *    metrics live behind `MetricValue.key`, declared by a SportPerformanceAdapter.
 *  - Computed artefacts (rankings, SPI, benchmarks) are snapshots: append-only,
 *    carrying modelVersion + computedAt, so history is reproducible.
 *  - Analytical outputs are "computed classifications", never official rankings.
 */

// ---------- Scalars ----------
export type ID = string;                      // e.g. "ath_8f3a…", "cmp_2026_stade"
export type IsoDate = string;                 // "2026-10-01"
export type CountryCode = string;             // ISO 3166-1 alpha-3 ("GER")
export type Continent = 'EU' | 'NA' | 'SA' | 'AS' | 'AF' | 'OC';

// ---------- Sport taxonomy ----------
export interface Sport {
  id: ID;                                     // "artistic", "speed", …
  nameKey: string;                            // i18n key
  enabled: boolean;                           // feature flag reference
}
export interface Discipline { id: ID; sportId: ID; nameKey: string; }
export interface Category {                   // competitive class within a discipline
  id: ID; disciplineId: ID; nameKey: string;
  ageGroupId?: ID; genderId?: ID;
  order: number;                              // display/progression order
}
export interface AgeGroup { id: ID; nameKey: string; minAge?: number; maxAge?: number; }
export interface GenderCategory { id: ID; nameKey: string; }   // sport-defined, not assumed binary
export interface Season { id: ID; label: string; start: IsoDate; end: IsoDate; }

// ---------- Organizations & people ----------
export interface Country { code: CountryCode; nameKey: string; continent: Continent; flag: string; }
export interface Federation { id: ID; name: string; countryCode?: CountryCode; scope: 'national' | 'continental' | 'world'; }
export interface Club { id: ID; name: string; countryCode: CountryCode; federationId?: ID; }
export interface Venue { id: ID; name: string; city?: string; countryCode: CountryCode; }

export interface Athlete {
  id: ID;
  displayName: string;                        // current canonical display name
  nameVariants: string[];                     // resolved spellings (identity resolution)
  countryCode: CountryCode;
  clubId?: ID;
  sportIds: ID[];
  /** Privacy: no birthdate. Age is expressed only through ageGroup/category. */
  profileVisibility: 'public' | 'restricted' | 'private';
  claimed: boolean;                           // profile claim workflow completed
  isTeam?: boolean;                           // pairs/teams modelled as Athlete with memberIds
  memberIds?: ID[];
}
export interface Coach { id: ID; name: string; clubId?: ID; federationId?: ID; }

// ---------- Competition structure ----------
export type CompetitionLevel = 'world' | 'continental' | 'international' | 'national' | 'regional';
export interface Competition {
  id: ID;
  name: string;
  sportId: ID;
  level: CompetitionLevel;
  seriesKey?: string;                         // "worlds", "europeans", "worldcup", …
  seasonId: ID;
  startDate: IsoDate; endDate?: IsoDate;
  venueId?: ID;
  countryCode?: CountryCode;
  organizerId?: ID;
  /** adapter-defined eligibility, e.g. which categories may enter */
  eligibleCategoryIds?: ID[];
}
export interface Event {                      // one category contested at one competition
  id: ID; competitionId: ID; categoryId: ID;
  fieldSize: number;
}

// ---------- Performance & results ----------
export interface MetricValue { key: string; value: number; }   // keys declared by adapter
export interface Performance {               // one athlete's outing at one Event
  id: ID;
  eventId: ID;
  athleteId: ID;
  metrics: MetricValue[];                    // e.g. artistic: total/tes/pcs/deductions; speed: timeMs
  placement?: number;                        // official placement (null = not classified)
  segments?: { key: string; metrics: MetricValue[] }[];
  status: 'ok' | 'incomplete' | 'dns' | 'dnf' | 'dsq' | 'withdrawn';
  sourceId: ID;                              // provenance (DataSource)
}
export interface Result {                    // official outcome view of a Performance
  performanceId: ID;
  official: true;                            // Results are ALWAYS official data
  correctedAt?: IsoDate;                     // official corrections tracked, never silently overwritten
}

// ---------- Provenance & quality ----------
export interface DataSource {
  id: ID;
  organization: string;                      // "DRIV", "World Skate", …
  type: 'pdf' | 'csv' | 'excel' | 'json' | 'api' | 'html' | 'manual';
  url?: string;
  documentId?: string;
  retrievedAt: IsoDate;
  parserVersion: string;
  confidence: number;                        // 0..1
  validationStatus: 'validated' | 'pending' | 'failed';
  licensed: boolean;                         // only licensed/officially published sources
}
export interface ImportJob {
  id: ID; sourceId: ID; startedAt: IsoDate; finishedAt?: IsoDate;
  status: 'queued' | 'running' | 'done' | 'failed';
  stats: { rows: number; accepted: number; rejected: number; healed: number };
}
export interface DataQualityRecord {
  id: ID; entity: 'athlete' | 'performance' | 'competition'; entityId: ID;
  check: string;                             // "duplicate-name", "identity-uncertain", "impossible-score", …
  severity: 'info' | 'warn' | 'error';
  detail: string;
  resolvedBy?: 'auto' | 'manual'; resolvedAt?: IsoDate;
}

// ---------- Computed snapshots (append-only) ----------
export interface RankingSnapshot {
  id: ID; athleteId: ID; categoryId: ID; seasonId: ID;
  scope: 'world' | 'continent' | 'country';
  scopeKey: string;                          // "EU", "GER", "world"
  kind: 'official' | 'analytical';           // NEVER conflated in UI
  position: number; of: number;
  percentile?: number;                       // only where statistically meaningful (see BENCHMARK_ENGINE.md)
  computedAt: IsoDate; modelVersion: string;
}
export interface SpiSnapshot {
  id: ID; athleteId: ID; sportId: ID; categoryId: ID;
  value: number;                             // 0–100
  confidence: 'low' | 'medium' | 'high';
  computedAt: IsoDate; modelVersion: string;
  contributions: SpiContribution[];          // full explainability – "Why is my SPI 84?"
}
export interface SpiContribution {
  dimension: string;                         // "internationalCompetitiveness", "consistency", …
  weight: number; score: number;             // score 0..100 before weighting
  explainKey: string;                        // i18n key of the plain-language explanation
  inputs: MetricValue[];                     // the actual numbers that produced the score
}
export interface BenchmarkSnapshot {
  id: ID; categoryId: ID; seasonId: ID;
  group: BenchmarkGroup;
  metricKey: string;
  stats: { n: number; mean: number; median: number; p25: number; p75: number; min: number; max: number };
  computedAt: IsoDate; modelVersion: string;
}
export type BenchmarkGroup =
  | { kind: 'world' } | { kind: 'continent'; continent: Continent }
  | { kind: 'country'; countryCode: CountryCode }
  | { kind: 'topN'; n: 10 | 25 | 50 } | { kind: 'podium' }
  | { kind: 'athletes'; athleteIds: ID[] } | { kind: 'countries'; codes: CountryCode[] };

export interface CompetitionStrengthSnapshot {
  id: ID; competitionId: ID;
  index: number;                             // 0..100
  factors: MetricValue[];                    // explainable: rankedAthletes, top10Count, medianSpi, level…
  computedAt: IsoDate; modelVersion: string;
}

// ---------- Accounts, tenancy, commerce (Phase-2 enforced server-side) ----------
export type OrganizationType = 'CLUB' | 'FEDERATION' | 'CONTINENTAL_FEDERATION' | 'WORLD_FEDERATION' | 'EVENT_ORGANIZER' | 'MEDIA';
export interface Organization {
  id: ID; type: OrganizationType; name: string; countryCode?: CountryCode;
  branding?: { logoUrl?: string; primaryColor?: string; dashboardTitle?: string; whiteLabel: boolean };
  dataScope: { sportIds: ID[]; countryCodes: CountryCode[] };
}
export type RoleKey =
  | 'public' | 'athlete' | 'guardian' | 'coach' | 'club_admin'
  | 'federation_coach' | 'federation_analyst' | 'performance_director'
  | 'federation_admin' | 'world_analyst' | 'platform_admin';
export interface User {
  id: ID; email: string; locale: string;
  organizationId?: ID; roles: RoleKey[];
  athleteId?: ID;                            // claimed profile
  guardianOfAthleteIds?: ID[];               // consent-backed guardian links
}
export type PlanKey = 'FREE' | 'ATHLETE_PRO' | 'COACH_PRO' | 'CLUB_PRO' | 'FED_STARTER' | 'FED_PRO' | 'FED_ENTERPRISE' | 'ADMIN';
export interface Subscription {
  id: ID; organizationId?: ID; userId?: ID; plan: PlanKey;
  status: 'trialing' | 'active' | 'past_due' | 'canceled';
  periodEnd: IsoDate; foundingMember?: boolean;
}
/** Feature access is decided by entitlements, never by plan string compares in UI code. */
export type FeatureKey =
  | 'athlete.basic' | 'athlete.history' | 'athlete.benchmarks' | 'athlete.spi'
  | 'athlete.whatItTakes' | 'athlete.compare' | 'athlete.reports' | 'athlete.cards'
  | 'coach.portfolio' | 'coach.alerts'
  | 'club.dashboard' | 'club.talentRadar' | 'club.exports'
  | 'federation.intelligence' | 'federation.countryCompare' | 'federation.talent'
  | 'federation.cockpit' | 'federation.reports' | 'federation.api' | 'federation.whiteLabel'
  | 'admin.dataQuality' | 'admin.console';

// ---------- Minor protection / consent ----------
export interface ConsentRecord {
  id: ID; athleteId: ID; grantedBy: 'self' | 'guardian' | 'federation_agreement';
  scope: 'public_profile' | 'analytics' | 'media';
  grantedAt: IsoDate; revokedAt?: IsoDate;
}
