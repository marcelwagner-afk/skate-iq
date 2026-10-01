# SKATE IQ

**Performance Intelligence for World Skate Sports** — the intelligence layer above competition and scoring systems. Independent product; no affiliation with or endorsement by World Skate or any federation; no official rankings.

Two questions, answered in five seconds on every athlete page:
**Where do I stand?** · **What do I need to reach the next level?**

## Quick start
```bash
npm ci
npm run seed            # deterministic synthetic demo data (fictional athletes)
npm run dev             # http://localhost:5173
npm test                # 36 engine/adapter/identity/store tests
npm run build           # typecheck + static production build → dist/
npm run import:artistic # validate the real-data migration path (needs ../existing clone)
```

## What's inside (Phase 1)
- **Canonical sport-independent model** – `src/core/types.ts`, relational blueprint `prisma/schema.prisma`
- **Engines** (framework-free TS): benchmark/percentiles (`core/benchmark`), SPI 0–100 fully explainable (`core/spi`), competition strength (`core/competitionStrength`), deterministic insights (`core/insights`), identity resolution (`core/identity`), entitlements + feature flags
- **Sport adapters** proving multi-sport: Artistic (reference) + Speed (time-based, lower-is-better) – `src/adapters/`
- **Screens**: Landing, Home, Athlete Intelligence Profile, Compare (≤5), Leaderboards (analytical, labelled), Federation Intelligence + National-Team cockpit, Country matrix + gap analysis, Talent Radar (explainable tiers), Competitions (strength index, preview/review), Pricing (entitlement demo), Admin data quality; global search; share cards; EN/DE; light/dark; mobile-first
- **Data**: synthetic seed (privacy: public preview is always fictional) + validated importer for the real audited Artistic dataset (8,392/8,392 rows)

## Documentation
`docs/` — AUDIT_EXISTING · ARCHITECTURE · DATA_MODEL · SPORT_ADAPTERS · BENCHMARK_ENGINE · SPI_MODEL · DATA_INGESTION · SECURITY (+PRIVACY) · BILLING (+DEPLOYMENT) · MIGRATION_PLAN (+ROADMAP) · IMPLEMENTATION_STATUS

## Testing
Unit+integration via vitest (`tests/`): benchmark math pinned to hand-computed values, SPI explainability invariant (displayed contributions reproduce the displayed value), identity never auto-merges below 0.95, adapter orientation/integrity, store over the full bundle (ranking contiguity, target=10th value, federation set containment), entitlement matrix. Browser smoke: all routes, deep links, mobile overflow 0 px, dark mode, zero console errors.

## Principles that are product features
Statistical honesty (no percentile under n=12 — the reason is shown instead) · every computed number explainable from displayed inputs · official vs. analytical never conflated · minors-first privacy (no birthdates in the model) · provenance on every imported value.
