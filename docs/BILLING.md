# BILLING

**No payment is processed in Phase 1** (stated in-product). This document is the architecture so billing can be added without rework.

- **Provider abstraction:** `BillingProvider` interface (createCheckout, portalLink, webhook→events) with adapters for Stripe or Paddle/Merchant-of-Record later; no provider types leak into domain code.
- **Entitlement-based access** (already implemented, `src/core/entitlements.ts`): plan → `FeatureKey` set; UI and (Phase 2) API ask `can(plan, feature)`. Webhooks mutate `Subscription.status`; entitlements derive from subscription, never from UI state.
- Model (in `src/core/types.ts` / prisma): Subscription, Plan, Price (per currency), Organization, Customer(ext ref), Payment, Invoice, Entitlement, Trial, Coupon, FoundingMember/FoundingFederation (flag + configurable terms — **terms are data, not code**, per §54).
- Plans & target prices (data in `PLAN_PRICING`, i18n-formatted): Free · Athlete Pro €9.99/m | €99/y · Coach Pro €299/y · Club Pro €990/y · Federation Starter €2,900/y · Pro €5,900/y · Enterprise from €9,900/y (API, white label, custom KPIs, SSO, export, onboarding, priority support).
- Commercial principle (§67) encoded as the plans' sell lines (i18n keys `pricing.sell.*`): sell outcomes, never "access to charts".
- Legal gate before go-live: legal entity, ToS/AGB, DPA (minors!), VAT handling (MoR solves this — weigh Paddle first for a solo operator).

# DEPLOYMENT

## Phase 1 (static preview)
- `npm ci && npm run seed && npm run build` → `dist/` (relative base, hash routing → works on any static host incl. GitHub Pages project paths and even file://).
- GitHub Pages: new public repo (e.g. `skate-iq-preview`), push, Settings→Pages→deploy from branch `/docs` (set `build.outDir: 'docs'` or copy `dist`→`docs`), or a GitHub Action running the build. Keep the existing DRIV repo untouched.
- PWA (manifest + SW) intentionally deferred until the product identity is final — the pattern is proven in the DRIV project and can be copied in under an hour.

## Phase 2 (backend)
Modular monolith: Next.js (or Fastify) importing `src/core` + `src/adapters` unchanged · PostgreSQL via Prisma (`prisma/schema.prisma`) · Redis cache for hot aggregates · object storage for source documents/reports · BullMQ jobs: ingestion, nightly snapshot computation (rankings, SPI, benchmarks, competition strength), consent revocation purge · materialized views for percentile tables (indexes per athlete/competition/sport/discipline/category/country/season/date — see schema) · never compute global percentiles per request (§45): read snapshots.

## Environments
dev (synthetic seed) → staging (imported real data, restricted) → prod. `DataBundle.synthetic=true` is CI-asserted for the public preview build.
