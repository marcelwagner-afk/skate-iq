# SPORT_ADAPTERS

Interface: `src/adapters/types.ts` (`SportPerformanceAdapter`). A sport defines **metrics, orientation, ranking value, gap decomposition, SPI weights, derived profile metrics, compare rows, ingestion normalization** — the core defines everything else. The registry validates SPI weights (must sum to 1) and uniqueness at registration.

## Proven with two structurally different sports
| | Artistic (`adapters/artistic`) | Speed (`adapters/speed`) |
|---|---|---|
| Primary metric | total points (higher better) | time ms (lower better → oriented as −ms) |
| Integrity rule | tes + pcs = total (±0.05) at ingestion | time > 0 |
| Gap semantics | points missing, split tes vs pcs, "largest opportunity" | seconds to shave |
| SPI weights | intl .30 level .20 consist .15 recent .10 devel .15 strength .10 | intl .35 level .25 consist .10 recent .10 devel .15 strength .05 |

**Orientation convention:** `primaryValue`/`rankingValue` return higher-is-better values; UI formats back via metric specs (`fmtOriented`, `fmtMag`). This is what lets percentile/benchmark/SPI code stay sport-free.

## Adding a sport (checklist)
1. Create `src/adapters/<sport>/index.ts` implementing the interface (≈100 lines).
2. Declare disciplines/categories (configurable — never hard-code into core).
3. Add i18n keys for sport/discipline/category/metric names (EN + DE minimum).
4. Add a feature flag `<SPORT>_ENABLED` and register in `src/data/store.ts`.
5. Extend the seed generator or ingestion adapter.
6. Add adapter tests (orientation, integrity, gap semantics) — see `tests/adapters.test.ts`.
No core file changes are required; that is the architecture's acceptance test (§59 validated: Speed was added without touching core/benchmark/spi/store logic).

## Future adapters (sketches)
- Skateboarding / Freestyle: run/trick scores, best-run primary, consistency = run-to-run spread.
- Hockey (team sports): Athlete.isTeam + memberIds exist; primary = table points or goal difference per competition; player analytics as derived metrics. Team-vs-team events need an `Event.fixture` extension (documented, not yet modelled).
- Downhill/Slalom, Scootering, Derby: time- or score-based → map onto the two reference patterns.
