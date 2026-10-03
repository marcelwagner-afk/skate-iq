/**
 * Element-Analyse (Marcel, 03.10.2026): „ganz genau sehen, wie welches Element
 * sich entwickelt und an was genau gearbeitet werden muss."
 *
 * Datengrundlage: die "Judges details per skater"-Blätter der offiziellen
 * RollArt-Protokolle (Performance.det) – je Element Basiswert, QOE-Summe des
 * Panels und Panel-Punkte, inkl. Unterrotations-/Downgrade-Flags (<, <<, <<<)
 * und Stern (*, ungültig). Alles deskriptiv und nachrechenbar.
 */
import type { Performance } from './types';
import { round1, round2 } from './benchmark';

export interface ElementAttempt { date: string; comp: string; seg: string; base: number; qoe: number; panel: number; flags: string }
export interface ElementAgg {
  code: string;
  kindIdx: number;
  attempts: number;
  avgBase: number; avgQoe: number; avgPanel: number;
  bestPanel: number; lastPanel: number;
  negShare: number;                  // Anteil Versuche mit QOE < 0
  lostQoe: number;                   // Σ negative QOE über alle Versuche (≤ 0)
  ur: number; dg: number; star: number;   // <, <</<<<, *
  trendDelta: number | null;         // Ø Panel zweite Hälfte − erste Hälfte (ab 4 Versuchen)
  series: ElementAttempt[];          // chronologisch
}
export interface ElementsAnalysis {
  elements: ElementAgg[];            // nach Ø Panel absteigend
  work: ElementAgg[];                // Problem-Elemente nach verlorenen QOE-Punkten
  comps: (number | null)[] | null;   // Ø der 4 Komponenten (Saison)
  compsPrev: (number | null)[] | null; // Vergleich: Ø davor (für Trend)
  nSheets: number;
}

/** rows: chronologisch sortierte Starts (Datum aufsteigend) mit Wettbewerbsname. */
export function analyzeElements(rows: { date: string; comp: string; p: Performance }[]): ElementsAnalysis | null {
  const byCode = new Map<string, ElementAttempt[]>();
  const kindOf = new Map<string, number>();
  const compSums: { sum: number; n: number }[][] = [];   // [periode][komponente]
  let nSheets = 0;
  const withDet = rows.filter(r => r.p.det?.length);
  if (!withDet.length) return null;
  const midDate = withDet[Math.floor(withDet.length / 2)].date;

  for (const r of withDet) {
    for (const sheet of r.p.det!) {
      nSheets++;
      if (sheet.c) {
        const period = r.date >= midDate && withDet.length >= 4 ? 1 : 0;
        compSums[period] ??= [];
        sheet.c.forEach((v, i) => {
          if (v == null) return;
          compSums[period][i] ??= { sum: 0, n: 0 };
          compSums[period][i].sum += v; compSums[period][i].n++;
        });
      }
      for (const [kindIdx, code, flags, base, qoe, panel] of sheet.els) {
        if (code === 'NJ') continue;                     // "No Jump"-Platzhalter
        const arr = byCode.get(code) ?? [];
        arr.push({ date: r.date, comp: r.comp, seg: sheet.s, base, qoe, panel, flags });
        byCode.set(code, arr);
        if (!kindOf.has(code)) kindOf.set(code, kindIdx);
      }
    }
  }
  if (!byCode.size) return null;

  const elements: ElementAgg[] = [];
  for (const [code, atts] of byCode) {
    atts.sort((a, b) => a.date.localeCompare(b.date));
    const n = atts.length;
    const avg = (f: (a: ElementAttempt) => number): number => atts.reduce((s, a) => s + f(a), 0) / n;
    const neg = atts.filter(a => a.qoe < 0);
    const half = Math.floor(n / 2);
    const mean = (xs: ElementAttempt[]): number => xs.reduce((s, a) => s + a.panel, 0) / xs.length;
    elements.push({
      code, kindIdx: kindOf.get(code) ?? 0, attempts: n,
      avgBase: round2(avg(a => a.base)), avgQoe: round2(avg(a => a.qoe)), avgPanel: round2(avg(a => a.panel)),
      bestPanel: round2(Math.max(...atts.map(a => a.panel))), lastPanel: round2(atts[n - 1].panel),
      negShare: round1((neg.length / n) * 100),
      lostQoe: round2(neg.reduce((s, a) => s + a.qoe, 0)),
      ur: atts.filter(a => a.flags.includes('<') && !a.flags.includes('<<')).length,
      dg: atts.filter(a => a.flags.includes('<<')).length,
      star: atts.filter(a => a.flags.includes('*')).length,
      trendDelta: n >= 4 ? round2(mean(atts.slice(half)) - mean(atts.slice(0, half))) : null,
      series: atts,
    });
  }
  elements.sort((a, b) => b.avgPanel - a.avgPanel);

  /* Problem-Elemente: negative QOE-Bilanz oder Abwertungen, nach verlorenen Punkten */
  const work = elements
    .filter(e => e.attempts >= 2 && (e.avgQoe < 0 || e.dg > 0 || e.ur > 0 || e.star > 0))
    .sort((a, b) => (a.lostQoe - (a.dg + a.star) * 0.5) - (b.lostQoe - (b.dg + b.star) * 0.5))
    .slice(0, 5);

  const toAvg = (p?: { sum: number; n: number }[]): (number | null)[] | null =>
    p ? [0, 1, 2, 3].map(i => (p[i]?.n ? round2(p[i].sum / p[i].n) : null)) : null;
  const c0 = toAvg(compSums[0]); const c1 = toAvg(compSums[1]);
  return {
    elements, work, nSheets,
    comps: c1 ?? c0,                   // aktuellste Periode
    compsPrev: c1 ? c0 : null,
  };
}
