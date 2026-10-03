/**
 * Element-Benchmark: Ø Panel-Punkte je Element-Code bei den aktuellen
 * Welt-Top-10 der Kategorie (Saison) – direkter internationaler Vergleich
 * auf Element-Ebene („Was holt die Weltspitze aus demselben Element?").
 */
import type { ID } from '../core/types';
import { round2 } from '../core/benchmark';
import type { Store } from './store';

export interface ElementBench { avg: number; n: number }

export function top10ElementBench(store: Store, catId: ID, seasonId: ID): Map<string, ElementBench> {
  const sums = new Map<string, { sum: number; n: number }>();
  for (const r of store.ranking(catId, seasonId).slice(0, 10)) {
    for (const x of store.athletePerfs(r.athlete.id)) {
      if (x.ev.categoryId !== catId || x.cmp.seasonId !== seasonId || x.p.status !== 'ok' || !x.p.det) continue;
      for (const sheet of x.p.det) {
        for (const [, code, , , , panel] of sheet.els) {
          if (code === 'NJ') continue;
          const s = sums.get(code) ?? { sum: 0, n: 0 };
          s.sum += panel; s.n++; sums.set(code, s);
        }
      }
    }
  }
  const out = new Map<string, ElementBench>();
  for (const [code, s] of sums) if (s.n >= 3) out.set(code, { avg: round2(s.sum / s.n), n: s.n });
  return out;
}
