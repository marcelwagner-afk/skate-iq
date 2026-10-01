# BENCHMARK_ENGINE

Implementation: `src/core/benchmark.ts` · consumed by `src/data/store.ts`.

## Method (inherited from the audited DRIV tool, generalized)
- **One vote per athlete:** group statistics use each athlete's best primary value in the window (`bestPerAthlete`), so frequent starters don't dominate the reference.
- **Comparable context:** group selection prefers international-level performances when any exist (`Store.comparable`) — the generalization of the validated "international before national" rule (different judging panels → national values never inflate international references).
- **Percentile definition:** mid-rank (`(below + 0.5·ties)/n·100`), reported **only when n ≥ 12** (`MIN_N_PERCENTILE`); below that the UI shows the reason with the group size instead of a number. Statistical honesty is a product feature.
- **Targets:** topN = value of the N-th best athlete; podium = mean of top 3; corridor = p25–p75 band + median for development charts.
- **Explainability:** every result returns `n` and the stats used; `modelVersion = bm-1.0.0` recorded in snapshots.

## What-does-it-take
`adapter.gapToTarget(currentPerf, currentBest, targetValue)` — the engine supplies the target from a `BenchmarkGroup`; the adapter decomposes the gap in sport terms (artistic: tes/pcs split with proportional-share heuristic + largest opportunity; speed: seconds to shave). Tests pin the master-prompt example (132.40 → 139.10 ⇒ gap 6.70).

## Competition Strength Index
`src/core/competitionStrength.ts`, model cs-1.0.0: 0.3·fieldDepth + 0.4·topDensity + 0.3·levelBase, each factor stored for display. Used in SPI dimension 6 and competition pages; later feeds benchmark weighting (ROADMAP).

## Known limits (documented, intentional)
- Phase 1 computes groups from the current season's bundle on the fly; Phase 2 materializes `BenchmarkSnapshot`s nightly (see prisma schema + DEPLOYMENT).
- Percentiles across sports are never combined; cross-sport aggregation uses relative scores (e.g., federation development = mean of SPI development dimension), never raw units.
