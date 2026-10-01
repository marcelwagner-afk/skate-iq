# DATA_MODEL

Canonical, sport-independent model. **Source of truth: `src/core/types.ts`** (TypeScript, used by app and future backend) and `prisma/schema.prisma` (Phase-2 relational mapping). This file explains intent, not syntax.

## Principles
1. **Stable IDs, never names.** Athlete identity is resolved (see `src/core/identity.ts`), display names and variants are data. Fixes the central debt found in the audit.
2. **Sport-agnostic performance.** A `Performance` carries `MetricValue[]` with adapter-declared keys. The core never knows what "tes" or "timeMs" mean.
3. **Official vs. analytical, structurally separated.** `Result` is official data; `RankingSnapshot.kind` is `'official' | 'analytical'` and the UI must label analytical values as computed classifications (enforced by shared components).
4. **Append-only snapshots** for rankings/SPI/benchmarks/competition strength, each with `computedAt` + `modelVersion` → any historical question ("How did Germany rank in June 2025?") is answerable; models can evolve without rewriting history.
5. **Provenance on every imported row** (`DataSource`, `ImportJob`, `DataQualityRecord`) with parser version and confidence.
6. **Privacy by design.** No birthdates anywhere; age via AgeGroup/Category. `profileVisibility`, `ConsentRecord` (self/guardian/federation agreement), real imported athletes default to `restricted`.
7. **Multi-tenancy** via `Organization` (type, branding, dataScope) + `User`(roles) + entitlement-checked features (`FeatureKey`), enforced server-side in Phase 2.

## Entity map (summary)
Sport → Discipline → Category (AgeGroup, GenderCategory) · Season
Country ← Federation ← Club ← Athlete (nameVariants, visibility, claimed, team/members) · Coach · Venue
Competition (level, series, season) → Event (category, field) → Performance (metrics, segments, status, source) → Result
DataSource → ImportJob → DataQualityRecord
Snapshots: RankingSnapshot · SpiSnapshot(contributions!) · BenchmarkSnapshot(group, stats) · CompetitionStrengthSnapshot(factors)
Commerce: Organization · User · Role · Subscription(plan, status) · entitlements (plan→FeatureKey set)
Consent: ConsentRecord (scope, grantedBy, revocable)

## Benchmark groups
`BenchmarkGroup` is a tagged union: world | continent | country | topN(10/25/50) | podium | selected athletes | selected countries — the one vocabulary used by benchmark engine, what-it-takes, UI and (later) API.
