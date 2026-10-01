# ARCHITECTURE – SKATE IQ

**Product:** SKATE IQ — Performance Intelligence for World Skate Sports (independent product; no affiliation with or endorsement by World Skate; no federation branding without permission).

## 1. Architectural principle

SKATE IQ is the **intelligence layer above scoring and results systems**. It never replaces scoring, never issues official rankings, and labels every computed number as a *computed classification* ("rechnerische Einordnung"), never as prediction or recommendation. This principle is inherited from the audited DRIV project, where it survived a legal/psychology review.

## 2. Modular monolith, staged

```
┌────────────────────────────────────────────────────────────┐
│ UI (React + TypeScript + Tailwind, i18n keys, light/dark)  │
│   pages → components → hooks                               │
├────────────────────────────────────────────────────────────┤
│ Application core (pure TypeScript, framework-free)         │
│   canonical model · benchmark engine · SPI · what-it-takes │
│   insights · competition strength · entitlements · flags   │
│   identity resolution · i18n                               │
├────────────────────────────────────────────────────────────┤
│ Sport adapters (SportPerformanceAdapter)                   │
│   artistic (reference impl.) · speed (2nd reference)       │
├────────────────────────────────────────────────────────────┤
│ DataProvider interface                                     │
│   Phase 1: StaticProvider (prebuilt JSON bundles)          │
│   Phase 2: ApiProvider  (REST → Postgres/Prisma backend)   │
└────────────────────────────────────────────────────────────┘
```

**Phase-1 deployment reality:** the customer currently operates only static hosting (GitHub Pages) and has no server budget/ops. Therefore Phase 1 ships as a statically deployable SPA whose *entire* domain logic lives in the framework-free core. The Phase-2 backend (Next.js/Node + PostgreSQL + Prisma, schema in `prisma/schema.prisma`) replaces `StaticProvider` with `ApiProvider` without touching UI or engines. This is a deliberate application of the master prompt's own rules: *modular monolith first; simple, typed, testable over complex; do not rewrite working components unnecessarily.*

What Phase 1 therefore does **not** contain (and does not fake): real authentication, server-enforced authorization, billing execution, multi-tenant isolation. The UI contains the entitlement *framework* (plans → features) running in demo mode, clearly labelled. Anything security-relevant is designed server-side-first in SECURITY.md and must not launch commercially before Phase 2.

## 3. Repository layout

```
skate-iq/
  docs/            all *.md architecture & product docs
  prisma/          target DB schema (Phase 2 blueprint, reviewed now)
  scripts/         seed generation, artistic migration/import validation
  src/core/        canonical types, engines, i18n, entitlements, flags
  src/adapters/    sport adapters (artistic, speed, …)
  src/data/        DataProvider + static bundles
  src/ui/          design-system components
  src/pages/       screens
  tests/           vitest unit tests (engines, adapters, identity)
```

## 4. Key decisions (ADR summary)

| # | Decision | Rationale |
|---|---|---|
| 1 | Separate repo; existing DRIV tool untouched | Prompt §60; the federation tool stays in production |
| 2 | Framework-free core | engines testable, reusable in backend later, no UI coupling |
| 3 | Stable IDs everywhere (`ath_…`, `cmp_…`), names are display data | fixes the audited name-as-identity debt |
| 4 | Append-only snapshots for rankings/SPI/benchmarks | reproducibility ("how did X rank in June?") |
| 5 | Synthetic seed data in the public preview | minors' privacy; real Artistic data flows in via importer behind access control (PRIVACY.md) |
| 6 | i18n keys from day one, EN default, DE complete | §47 |
| 7 | Charts as in-house SVG components | no heavy chart dependency; full control over benchmark corridors; proven in DRIV tool |
| 8 | Feature flags + entitlements as data, not code branches scattered in UI | §50, §20 |
| 9 | Official vs. analytical rankings strictly separated in model *and* UI labels | §42, legal posture |
| 10 | Hash-based routing in Phase 1 | works on static hosting incl. project subpaths |

## 5. Phase-2 backend (blueprint, not yet built)

Next.js (or Fastify) + PostgreSQL + Prisma + Auth.js; Redis for hot aggregates; object storage for source documents & generated reports; queue (BullMQ) for ingestion, snapshot and recalculation jobs; materialized views for percentile tables. All engine code in `src/core` is imported by the backend unchanged (it is plain TS). API surface sketched in docs/DATA_INGESTION.md §API.

## 6. Non-goals

No scraping that circumvents access controls; no "official" labelling; no automatic talent verdicts without displayed underlying data; no athlete birthdates in the product; no payment execution before a legal entity, terms, and DPA (minors!) exist.
