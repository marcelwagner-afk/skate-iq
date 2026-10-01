# SPI_MODEL – Skate Performance Index (spi-1.0.0)

Implementation: `src/core/spi.ts` · weights per sport in each adapter · tests in `tests/spi.test.ts`.

## Contract
- Range 0–100; **deterministic**; recomputable from stored inputs.
- **Explainable by construction:** an `SpiSnapshot` carries every dimension's weight, score, raw inputs and an i18n explanation key. The UI's "Why this SPI?" panel is a rendering of the snapshot, not a separate text. Test asserts: weighted sum of displayed numbers == displayed SPI.
- **Honest about data volume:** missing dimensions score a *neutral 50* and are flagged (`spi.explain.neutralNoData`); confidence = low/medium/high from season-value count and world-group size. Low data is a confidence problem, never a hidden penalty.
- Versioned (`modelVersion`), snapshot-stored — model evolution never rewrites history.

## Dimensions (all formulas in code, summarized)
| Dimension | Formula (0–100) |
|---|---|
| internationalCompetitiveness | world percentile of season best (mid-rank, n≥12 rule) |
| performanceLevel | season best / world best × 100 |
| consistency | 100·(1 − min(cv, .25)/.25), cv = σ/μ of season values (n≥3) |
| recentForm | 50 + clamp(250·(last-90-days mean − season mean)/season mean, ±50) |
| developmentRate | 50 + clamp(250·(best − prevSeasonBest)/prevSeasonBest, ±50) |
| competitionStrength | mean Competition Strength Index of entered events |

Weights are **sport policy**, not core policy (adapter-owned, registry-validated to sum 1).

## Why not arbitrary
Each dimension maps to one of the master prompt's required dimensions; each is monotone in an interpretable input; caps (±50, cv .25) bound outlier influence; all constants live in one file and are test-pinned. Changing a constant bumps `SPI_MODEL_VERSION`.

## Open calibration work (Phase 2, with federation reviewers)
- Validate weight sets against expert ranking of known athletes (rank correlation target documented in ROADMAP).
- Speed: consider distance-specific sub-indices before adding more time-based sports.
