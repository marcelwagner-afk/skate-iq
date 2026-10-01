# MIGRATION_PLAN – from the DRIV tool to SKATE IQ

**Rule 0 (standing):** the existing DRIV tool stays live and untouched; it remains the federation's working product and the Artistic data source. SKATE IQ is a separate codebase; nothing is destroyed (§60). The DRIV repo was cloned read-only for audit and import validation.

## Already done (this build)
1. Full audit → `docs/AUDIT_EXISTING.md`.
2. Canonical model + engines generalizing the proven DRIV methodology (reference curves → benchmark engine; int-before-nat → comparable-context; gap box → what-it-takes; identity pipeline → `core/identity`).
3. **Importer validated on the real dataset** (`npm run import:artistic`): 8,392/8,392 rows accounted, 46 competitions, 2,631 identities, 305 review-queue items. Output stays in `.tmp/` (privacy).

## Staged migration to feature parity
| Stage | Content | Gate |
|---|---|---|
| M1 | Real Artistic bundle behind access control (restricted visibility), German classes as configured categories (43 found) | federation agreement + consent framework (PRIVACY.md) |
| M2 | Port RollArt parsers as ingestion adapter; judges-details depth (element-level consistency, podium content inventory — the DRIV v3.8/3.9 features) as artistic adapter profile metrics | parser parity tests vs. DRIV pipeline outputs (byte-level fixtures exist) |
| M3 | Review queue UI for the 305 identity candidates; kader/squad list as Organization data | federation review |
| M4 | Feature parity checklist vs. DRIV tool (reference curves, gap views, konstanz views, exports, print) signed off by the federation users | Sven/Tim sign-off |
| M5 | DRIV tool becomes a consumer: optional banner linking to SKATE IQ; sunset only after M4 sign-off, if ever | Marcel's decision |

## Explicit non-migrations
- The DRIV login (AES client-side) is not carried over — Phase-2 auth replaces it.
- The 4.9 MB single-file build pattern is not carried over (modular build); its offline virtue returns later as a PWA.

# ROADMAP

**Phase 1 – Artistic commercial MVP (this build = its foundation):** canonical architecture ✓, engines ✓, two adapters ✓, 13-of-13 first screens (12 built, Login intentionally deferred to Phase 2 where it is real), i18n EN/DE ✓, tests ✓, synthetic seed ✓, real-data importer ✓. Remaining: real-data staging deployment behind auth, PWA, report PDFs.
**Phase 2 – Federation intelligence:** backend (DEPLOYMENT.md), real auth/RBAC/tenants, subscriptions via billing abstraction, alert engine (email/in-app), automatic PDF/web reports, snapshot jobs, review-queue UI, claim workflow.
**Phase 3 – World Skate expansion:** Speed with real data (second *data* integration, adapter already proven), then Skateboarding/Freestyle (score-run pattern), Hockey (team extension), per-sport feature flags; architecture gate: a new sport must land without core changes.
**Phase 4:** Skate AI (question → intent → permission check → **structured query over validated snapshots** → explained answer with period/group/assumptions/confidence; the deterministic insight engine is already the grounding layer — AI explains, never invents), public API, white label, official data partnerships.
**Continuous:** SPI calibration with federation experts; competition-strength-weighted benchmarks; i18n IT/ES/PT/FR.
