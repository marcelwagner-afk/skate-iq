/**
 * Athleten-Diagnose (Marcel, 03.10.2026): pro Athlet aus den Daten ableiten,
 * was gut ist, was Defizit ist und woran gearbeitet werden muss.
 *
 * Methodik – alles erklärbar, nichts Blackbox:
 *  - Referenz ist die aktuelle Welt-Top-10 der Kategorie (beste Saisonleistung
 *    je Athlet): Ø TES-/PCS-Anteil, Ø Abzüge je Start, Ø Feldstärke der Starts.
 *  - Technik/Komponenten werden über ANTEILE verglichen (TES/Gesamt vs.
 *    Top-10-Anteil), damit auch für Athleten weit unter der Spitze sichtbar
 *    ist, WELCHE Seite relativ zurückliegt (gleiches Prinzip wie gapToTarget).
 *  - Dazu absolute Punkt-Differenzen als Evidenz.
 *  - Jede Dimension bekommt Status stark/neutral/Defizit + die Zahlen, die
 *    dazu geführt haben; Defizite werden nach Schweregrad sortiert und als
 *    Arbeitsfelder ausgegeben. Reine rechnerische Einordnung, keine Empfehlung
 *    zu Nominierungen.
 */
import type { ID, Performance } from '../core/types';
import { round1, round2 } from '../core/benchmark';
import type { Store } from './store';

export type DiagStatus = 'strong' | 'ok' | 'weak';
export interface DiagDim {
  key: 'tes' | 'pcs' | 'deductions' | 'consistency' | 'form' | 'trend' | 'strength';
  status: DiagStatus;
  severity: number;                       // nur für Defizit-Ranking (0..∞)
  params: Record<string, string | number>; // Evidenz für i18n-Templates
}
export interface Diagnosis {
  dims: DiagDim[];
  strengths: DiagDim[];
  deficits: DiagDim[];       // nach Schweregrad sortiert
  work: DiagDim[];           // Top-Arbeitsfelder (= schwerste Defizite, max 3)
}

const metric = (p: Performance, key: string): number | null =>
  p.metrics.find(x => x.key === key)?.value ?? null;

export function diagnose(store: Store, athleteId: ID, catId: ID, seasonId: ID): Diagnosis | null {
  const all = store.athletePerfs(athleteId).filter(x => x.ev.categoryId === catId);
  const seasonRows = all.filter(x => x.cmp.seasonId === seasonId && x.p.status === 'ok');
  const rows = seasonRows.length >= 2 ? seasonRows : all.filter(x => x.p.status === 'ok');
  if (!rows.length) return null;

  const dims: DiagDim[] = [];
  const world = store.ranking(catId, seasonId);

  /* ---- Top-10-Referenz: beste Saisonleistung je Top-10-Athlet ---- */
  const refBest: { tes: number; pcs: number; total: number }[] = [];
  const refDedPerStart: number[] = [];
  const refStrengths: number[] = [];
  for (const r of world.slice(0, 10)) {
    const theirs = store.athletePerfs(r.athlete.id)
      .filter(x => x.ev.categoryId === catId && x.cmp.seasonId === seasonId && x.p.status === 'ok');
    if (!theirs.length) continue;
    const best = theirs.reduce((a, b) => (metric(b.p, 'total') ?? -1) > (metric(a.p, 'total') ?? -1) ? b : a);
    const tTes = metric(best.p, 'tes'), tPcs = metric(best.p, 'pcs'), tTot = metric(best.p, 'total');
    if (tTes != null && tPcs != null && tTot != null && tTot > 0) refBest.push({ tes: tTes, pcs: tPcs, total: tTot });
    const deds = theirs.map(x => metric(x.p, 'deductions')).filter((v): v is number => v != null);
    if (deds.length) refDedPerStart.push(deds.reduce((a, b) => a + b, 0) / deds.length);
    for (const x of theirs) refStrengths.push(store.competitionStrength(x.cmp.id).index);
  }
  const avg = (xs: number[]): number | null => xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;

  /* ---- Athlet: beste Leistung + Durchschnitte ---- */
  const best = rows.reduce((a, b) => (metric(b.p, 'total') ?? -1) > (metric(a.p, 'total') ?? -1) ? b : a);
  const aTes = metric(best.p, 'tes'), aPcs = metric(best.p, 'pcs'), aTot = metric(best.p, 'total');
  const refTes = avg(refBest.map(r => r.tes)), refPcs = avg(refBest.map(r => r.pcs)), refTot = avg(refBest.map(r => r.total));

  /* 1+2) Technik (TES) & Komponenten (PCS) relativ zur Top-10-Struktur */
  if (aTes != null && aPcs != null && aTot != null && aTot > 0
    && refTes != null && refPcs != null && refTot != null && refTot > 0) {
    const shareDeltaPP = (mine: number, ref: number): number =>
      round1((mine / aTot - ref / refTot) * 100);               // Prozentpunkte
    const mk = (key: 'tes' | 'pcs', mine: number, ref: number): DiagDim => {
      const rel = shareDeltaPP(mine, ref);                      // signiert, Prozentpunkte
      const status: DiagStatus = rel < -1.5 ? 'weak' : rel > 1.5 ? 'strong' : 'ok';
      return { key, status, severity: Math.abs(rel), params: { v: round2(mine), ref: round2(ref), rel } };
    };
    dims.push(mk('tes', aTes, refTes), mk('pcs', aPcs, refPcs));
  }

  /* 3) Abzüge je Start vs. Top 10 */
  const myDeds = rows.map(x => metric(x.p, 'deductions')).filter((v): v is number => v != null);
  const myDed = avg(myDeds); const refDed = avg(refDedPerStart);
  if (myDed != null && refDed != null) {
    const d = round2(myDed - refDed);
    const status: DiagStatus = d > 0.3 ? 'weak' : myDed <= 0.05 ? 'strong' : 'ok';
    dims.push({ key: 'deductions', status, severity: Math.max(0, d) * 4, params: { v: round2(myDed), ref: round2(refDed) } });
  }

  /* 4) Konstanz (Streuung der Werte, 0–100) */
  const info = store.categoryOf(catId);
  const cons = info?.adapter.deriveProfileMetrics(rows.map(x => x.p)).find(m => m.key === 'consistency')?.value ?? null;
  if (cons != null && rows.length >= 3) {
    const status: DiagStatus = cons >= 80 ? 'strong' : cons < 60 ? 'weak' : 'ok';
    dims.push({ key: 'consistency', status, severity: Math.max(0, (60 - cons) / 12), params: { v: round1(cons) } });
  }

  /* 5) Aktuelle Form: letzte 90 Tage vs. Saisonschnitt */
  const totals = rows.map(x => ({ d: x.cmp.startDate, v: metric(x.p, 'total') })).filter(x => x.v != null) as { d: string; v: number }[];
  if (totals.length >= 3) {
    const cutoff = new Date(new Date(store.today).getTime() - 90 * 864e5).toISOString().slice(0, 10);
    const recent = totals.filter(x => x.d >= cutoff).map(x => x.v);
    const seasonMean = avg(totals.map(x => x.v))!;
    const recentMean = avg(recent);
    if (recentMean != null && seasonMean > 0) {
      const pct = round1(((recentMean - seasonMean) / seasonMean) * 100);
      const status: DiagStatus = pct > 1 ? 'strong' : pct < -2 ? 'weak' : 'ok';
      dims.push({ key: 'form', status, severity: Math.abs(Math.min(0, pct)) / 2, params: { d: pct } });
    }
  }

  /* 6) 12-Monats-Entwicklung */
  const trend = store.trend12(athleteId, catId);
  if (trend != null) {
    const status: DiagStatus = trend > 1 ? 'strong' : trend < -1 ? 'weak' : 'ok';
    dims.push({ key: 'trend', status, severity: Math.abs(Math.min(0, trend)) / 2, params: { v: round2(trend) } });
  }

  /* 7) Feldstärke der eigenen Starts vs. Top 10 */
  const myStr = avg(rows.map(x => store.competitionStrength(x.cmp.id).index));
  const refStr = avg(refStrengths);
  if (myStr != null && refStr != null) {
    const d = refStr - myStr;
    const status: DiagStatus = d > 15 ? 'weak' : d <= 5 ? 'strong' : 'ok';
    dims.push({ key: 'strength', status, severity: Math.max(0, d) / 10, params: { v: round1(myStr), ref: round1(refStr) } });
  }

  if (!dims.length) return null;
  const deficits = dims.filter(x => x.status === 'weak').sort((a, b) => b.severity - a.severity);
  return {
    dims,
    strengths: dims.filter(x => x.status === 'strong'),
    deficits,
    work: deficits.slice(0, 3),
  };
}
