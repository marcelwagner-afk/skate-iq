# DATA_INGESTION

Pipeline (architecture per §33): Source → Raw ingestion → Validation → Normalization → Identity resolution → Canonical data → Metrics → Benchmarks → UI.

## Implemented in Phase 1
- **Adapter normalization:** `adapter.normalizeRaw(raw)` with per-sport integrity rules (artistic: tes+pcs=total ±0.05 — the rule that held for 8,182 real rows).
- **Identity resolution:** `src/core/identity.ts` — normalization (diacritics, apostrophes, punctuation, token order), exact → subset → bounded-edit-distance; country as corroboration; `AUTO_MERGE_CONFIDENCE = 0.95`; below threshold → review queue, never auto-merge.
- **Reference importer:** `scripts/import-artistic.ts` converts the real audited DRIV dataset and prints a validation report. Latest run: **8,392/8,392 rows accounted** (8,182 ok, 31 incomplete, 179 rejected with reasons), 46 competitions, 43 categories, 2,631 identities, 5,761 cross-competition exact re-identifications, 305 review-queue candidates correctly withheld.
- **Provenance:** every Performance carries `sourceId`; sources store organization/type/url/parserVersion/confidence/validationStatus/licensed.
- **Quality records:** `DataQualityRecord` + admin Data-Quality screen (sources, checks, identity queue).

## Source adapters (Phase 2)
One adapter per source type (api/csv/excel/json/pdf/html/manual). The DRIV RollArt PDF parsers (rankings + judges details, battle-tested on 15,636 sheets) are the first production source adapter to port; they run as background `ImportJob`s with staged write → validate → promote.
**Policy:** no scraping that circumvents access controls or prohibited usage; only licensed/officially published feeds; `DataSource.licensed` is required-true for promotion.

## Automated checks (engine list)
duplicate athletes (identity), name variants, country changes (flag, review), duplicate competitions (name+date+level), category mismatch, impossible scores (adapter bounds + 3σ vs athlete history), missing values, changed/corrected official results (Result.correctedAt, never silent overwrite).

## Planned API surface (Phase 2, read-only first)
`/athletes /athletes/:id /results /competitions /rankings /benchmarks /countries /federations` — token auth, scopes per organization dataScope, rate limiting, audit log. Entitlement `federation.api`.
