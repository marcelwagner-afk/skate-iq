# IMPLEMENTATION_STATUS

Updated: 2026-10-01 · build: typecheck ✓ · vite build ✓ (dist 165 KB gzip) · tests 36/36 ✓ · browser smoke: 10 routes, mobile 0 px overflow, dark mode, 0 console errors ✓

## DONE
- Audit of existing project incl. live-repo clone (docs/AUDIT_EXISTING.md)
- Canonical data model (src/core/types.ts) + Prisma blueprint (prisma/schema.prisma)
- SportPerformanceAdapter interface + registry (weight validation)
- Artistic adapter (reference) + Speed adapter (2nd sport, lower-is-better proven through same engines)
- Benchmark engine: mid-rank percentiles (n≥12 honesty rule), best-per-athlete, comparable-context, topN/podium targets, p25–p75 corridors
- SPI spi-1.0.0: 6 dimensions, sport weights, neutral-50 + confidence, full explainability (test-pinned)
- Competition Strength Index cs-1.0.0 (explainable factors)
- Deterministic insight engine (§36)
- Identity resolution (exact/subset/fuzzy, 0.95 auto-merge threshold, review queue)
- Entitlements (8 plans → feature sets) + feature flags
- i18n DE (default – Artistic-first product decision) + EN complete, key-based
- Design system (validated dataviz palette, light/dark, mobile-first) + SVG chart components (corridor, crosshair tooltip, legend rules)
- Screens: Landing · Home · Athlete Intelligence (KPI row §65, dev chart+corridor, SPI-why, what-does-it-take with tes/pcs breakdown, results, insights, share card PNG) · Compare ≤5 + head-to-head · Leaderboards (analytical labelling §42) · Federation Intelligence + cockpit (§15/§66) · Country matrix + A/B gap analysis · Talent Radar (5 explainable tiers) · Competitions list/detail (strength, PB flags, preview/review) · Pricing (§67 sell lines, demo switcher, no payment) · Admin data quality · global grouped search · demo route
- Synthetic seed: 9 countries, 2 sports, real Artistic category IDs, 3 seasons, 389 fictional athletes, 2,448 performances, deterministic PRNG, gender-correct name pools
- **Artistic full build (Oct 2026):** real DRIV/WSE taxonomy in `src/adapters/artistic/taxonomy.ts` (Kür/Solotanz/Rolltanz/Paarlauf × Senioren…Tots × Damen/Herren incl. Solotanz mixed classes, ELIGIBILITY metadata, `mapDrivCategory`); composed category labels; Speed adapter kept as architecture proof behind `SPEED_ENABLED=false`
- **Real-data build:** importer v2 writes `src/data-real/bundle.artistic.local.json` (GITIGNORED – privacy) with 47 countries (flags/continents), 60 clubs, seasons from data; 8,392/8,392 rows accounted, 43 real categories mapped, 2,631 identities, 305 review-queue (not auto-merged); `npm run dev:real` / `build:real` (VITE_REAL=1), async bundle loading, dynamic DEMO/ECHTDATEN badge; anchor verified in-app (Noah Hirsch, DM Stade 2026: 165,36 / TES 102,08 / PCS 63,28)
- Standalone single-file builds via `scripts/make-standalone.mjs` (file://-safe, demo + real variants)
- 36 unit/integration tests + scripted browser smoke with screenshots (both variants: 0 console errors, 0 px mobile overflow)

## IN PROGRESS
- (nothing – clean checkpoint)

## NEXT (recommended order)
1. Preview deployment to a new GitHub repo (static) – see docs/BILLING.md→DEPLOYMENT
2. Review of SPI weights + talent tier thresholds with federation experts (Sven/Tim)
3. Phase-2 backend bootstrap (auth, Postgres via prisma schema, snapshot jobs)
4. Real Artistic data on access-controlled staging (gate: federation agreement, PRIVACY.md)
5. Report generation (athlete/federation PDF) + alert engine
6. PWA wrapper (pattern proven in DRIV project)

## BLOCKED
- Commercial launch: legal entity, ToS, DPA/consent framework for minors (PRIVACY.md) — organizational, not technical
- Official data feeds: licensing agreements (DATA_INGESTION.md policy)

## TECHNICAL DEBT (known, accepted for Phase 1)
- Seed JSON bundled into the JS chunk (fine at 165 KB gzip; move behind fetch when bundles grow)
- Competition entity models multi-sport events via sportId 'multi' in seed; per-sport competitions supported but seed uses shared events
- Hockey/team fixtures not yet modelled (documented in SPORT_ADAPTERS.md)
- Login screen intentionally absent (no fake auth); appears with Phase-2 backend
- Share-card renders text-only branding (no logo asset yet)
