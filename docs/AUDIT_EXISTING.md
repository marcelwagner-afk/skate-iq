# AUDIT – Existing Project (DRIV Rollkunstlauf Leistungsdaten-Analyse)

Audited: 2026-10-01 · Source: `github.com/marcelwagner-afk/DRIV-Rollkunstlauf_Leistungsdaten_Analyse` (public), last commit 2026-07-24 · Live: GitHub Pages behind client-side AES login · Version v3.9.1 / Methodik 1.7 · 46/46 Playwright tests green at last build.

## 1. Current architecture

```
RollArt result PDFs (46 competitions, 2023–2026)
  └─ Python pipeline (offline, repo root)
     parse_intl.py → parse_all.py → postpass.py          ranking lists → seed_v2.json
     parse_details.py → validate_details.py               15,636 judges-detail sheets
     build_konstanz.py                                    element aggregates → konstanz.json (+ heals seed)
     build.py                                             template + JSON → single 4.9 MB HTML
     protect.py                                           AES-256-GCM login wrapper (index.html, 6.5 MB)
  └─ GitHub Pages (static) · CI = validation only (build + data checks, no artifacts)
```

Everything renders client-side from embedded JSON. No server, no DB, no accounts beyond a shared-password login (4 users, 1 admin role) encrypted client-side.

## 2. Data assets (high value, verified)

| Asset | Contents | Verification status |
|---|---|---|
| `data/seed_v2.json` | 46 events → categories → 8,392 result rows (TES, PCS, total, deductions, per-segment values, placement, club, federation-state) | TES+PCS=Total: 0 violations; register cross-check 142/142; 0 duplicates/double placements |
| `data/konstanz.json` | 504 athlete×discipline element profiles (per-element GOE, downgrade, σ), 40 component reference groups, 40 podium element inventories | base+GOE=panel exact for 135,160/135,160 elements; independent recomputation identical |
| `data/kader.json` | 79 official squad athletes incl. name variants | squad coverage 79/79 |
| `data/athleten_register.json` | national ranking register (identity anchor) | cross-checked |
| Raw PDFs | all 46 competitions incl. judges details | reproducible byte-identical pipeline |

**This data layer is the most valuable asset for SKATE IQ.** It is effectively a verified Artistic data mart for one federation.

## 3. Reusable business logic

- **Reference curves** (`curve()`): mean per placement, last 3 contested years, first 80 % of ranked field — the Benchmark Engine prototype.
- **`progBasis`**: international-before-national value selection (judging panels differ) — generalizes to "comparable-context metric selection".
- **Gap analysis** (`gapBox`, placement targets P1–P3) — the "What Does It Take?" prototype.
- **Element consistency classification** (`classifyEl`: ok/mid/bad/fail/few with documented thresholds) — sport-specific metric derivation inside an adapter.
- **Identity resolution** (postpass: token normalization, variant subsets, alias map, edit-distance ≤1 fallback, co-occurrence guard) — directly portable.
- **Terminology discipline**: "rechnerische Einordnung" (computed classification), never prediction/recommendation; every metric has a glossary entry; legal review done (July 2026).
- **RollArt parsers** (rankings + judges details) — battle-tested ingestion adapters for the Artistic source type.

## 4. Artistic-specific / hard-coded assumptions (must NOT leak into core)

1. Disciplines/classes as German string literals (`Kürlaufen`, `Senioren`…); gender as `Damen/Herren/''`.
2. Competition types and eligibility (WM/EM/WC-*/CoE/IGC/IL/National; "WM only Junioren/Senioren" etc.) hard-coded in `projText`.
3. **Identity = display name.** No athlete IDs; renames mutate rows in place. Works for 1 federation + manual curation; unacceptable for multi-tenant scale.
4. Single country (GER), single federation, no Season entity (calendar-year strings), no venue/organizer entities.
5. UI monolith: ~180 KB inline JS, global `state`, no modules/types/build step; German-only text woven into code.
6. History is mutable: imports and healing rewrite `seed_v2.json`; no snapshots (July consistency values are not reproducible after a re-import).
7. Authorization is client-side only (encrypted blob + role flag). Fine for its threat model (content secrecy), unusable as SaaS access control.

## 5. Security & privacy posture

- Positive: results-only data (publicly published), no birthdates stored, age handled via class/age-group, access behind login, `benutzer.txt` never committed, legal framing audited.
- Risks for a public SaaS: shared password; admin = same password; client-side entitlements; athlete minors ⇒ a public commercial product must not republish identified minor profiles without a federation agreement (see PRIVACY.md).

## 6. Known gaps as of audit date

- PWA files (manifest.json, sw.js, icons) were built and delivered 24.07. but **never pushed** — absent from repo and live site.
- Europa Cup Stade (Oct 2026) data not yet ingested; Drive intake folder still empty.
- Pending external validation by federation reviewers (Sven/Tim spot checks).

## 7. Verdict

Keep the existing product running untouched (it is the Artistic data source and the federation's working tool). Build SKATE IQ as a **separate codebase** that (a) imports the verified Artistic data through a migration adapter, (b) generalizes the proven methodology into sport-independent engines, and (c) replaces name-keyed identity, mutable history, German-literal domain values and client-side authorization with a canonical, typed, snapshot-aware model.
