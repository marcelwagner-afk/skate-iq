# SECURITY

## Threat-model honesty for Phase 1
The Phase-1 preview is a static SPA on synthetic data: there is nothing confidential in the bundle, no accounts, no payment. The entitlement switcher is a product demo, clearly labelled. **Nothing security-relevant may launch on this architecture** — commercial launch requires the Phase-2 backend below. This is stated in-product (pricing note) and here.

## Phase-2 requirements (blocking for commercial launch)
- **AuthN:** Auth.js (or equivalent) with email+OIDC, session cookies httpOnly/secure/SameSite, short-lived access tokens for API.
- **AuthZ:** RBAC (roles in `src/core/types.ts`) enforced **server-side on every query**; frontend hiding is UX only. Tenant isolation: every row-level query filtered by organization dataScope; isolation tests required (see TESTING in README).
- **Entitlements:** plan→feature sets (already data-driven in `src/core/entitlements.ts`) evaluated server-side; client value is advisory.
- Rate limiting (per token + per IP), input validation (zod at API boundary), audit logs (admin actions, data corrections, identity merges), secrets in env/secret manager (never in frontend), CSRF for cookie flows, CSP headers, SQLi impossible via Prisma parameterization but raw queries forbidden by lint rule, file-upload validation (type sniffing + size + AV scan) for manual imports.
- **Admin activity logging** and 4-eyes on identity merges below confidence 1.0.

## Carried over from the audited project
- Public repo discipline: credentials never in the repo (the DRIV benutzer.txt rule), validated here by having no secrets at all in Phase 1.
- Append-only snapshots double as tamper evidence for computed values.

# PRIVACY (minors first)

- **No birthdates in the model.** Age only as AgeGroup/Category. This is structural (no field exists), not a policy promise.
- **Synthetic-only public preview:** `DataBundle.synthetic` must be `true` for any public deployment; the real-data importer writes to `.tmp/` and marks athletes `profileVisibility: 'restricted'` by default. Real minor athletes never appear in a public commercial product without a federation agreement + consent framework.
- **ConsentRecord**: self / guardian / federation-agreement grants per scope (public_profile, analytics, media), revocable; revocation ⇒ visibility drop + cache purge (Phase-2 job).
- **Claim workflow (§57):** "this is me / I am the guardian / I am the coach" creates a verification case (document or federation confirmation), never automatic control.
- **Public pages (§19)** show restricted fields only (name, country, category, official results already public); premium analytics require login; `restricted` profiles are excluded from search engines (noindex) and public lists.
- Data deletion/correction workflows with audit history (DataQualityRecord + Result.correctedAt) — GDPR Art. 16/17 paths.
- Lesson applied from the DRIV project: its data is published competition results behind a login; SKATE IQ keeps the same bar as the *minimum* and adds consent records before any public athlete page of a real person.
