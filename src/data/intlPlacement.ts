/**
 * Virtuelle internationale Platzierungen (Marcel, 03.10.2026):
 * „Welche Platzierung würde der Athlet bei den einzelnen internationalen
 * Meisterschaften erzielen?" – der Saison-Bestwert wird in das REALE
 * Ergebnisfeld jedes internationalen Wettbewerbs der Saison einsortiert.
 *
 * Methodik: Feld = alle gewerteten Ergebnisse des Events (eigenes Ergebnis
 * wird vorher herausgenommen); virtueller Platz = 1 + Anzahl besserer Werte.
 * Rein rechnerisch – ersetzt keine Qualifikation, keine Tagesform, keine
 * offiziellen Ranglisten. Ist der Athlet real gestartet, steht die echte
 * Platzierung daneben.
 */
import type { Competition, ID } from '../core/types';
import { round2 } from '../core/benchmark';
import type { Store } from './store';

export interface ChampRow {
  cmp: Competition;
  evId: ID;
  n: number;                       // Feldgröße inkl. des (virtuellen) Athleten
  winner: number;                  // Siegwert
  third: number | null;            // Podiumsmarke (3. Platz)
  my: number | null;               // Saison-Bestwert des Athleten
  mySeason: ID | null;             // Saison des verwendeten Werts (Fallback: letzter verfügbarer)
  pos: number | null;              // virtueller Platz
  actual: number | null;           // reale Platzierung, falls gestartet
  podiumGap: number | null;        // my − third (≥ 0 ⇒ Podium rechnerisch erreicht)
}

const INTL = new Set(['world', 'continental', 'international']);

/** Gewertete Totals eines Events, absteigend; plus reale Platzierung des Athleten. */
function fieldOf(store: Store, evId: ID, excludeAthlete?: ID): { values: number[]; actual: number | null } {
  const info = store.categoryOf(store.b.events.find(e => e.id === evId)!.categoryId);
  const values: number[] = []; let actual: number | null = null;
  for (const p of store.b.performances) {
    if (p.eventId !== evId || p.status !== 'ok') continue;
    const v = info?.adapter.primaryValue(p);
    if (v == null) continue;
    if (excludeAthlete && p.athleteId === excludeAthlete) { actual = p.placement ?? null; continue; }
    values.push(v);
  }
  values.sort((a, b) => b - a);
  return { values, actual };
}

/** Saison-Bestwert eines Athleten in einer bestimmten Saison (vergleichbarer Kontext via ranking). */
export function seasonValueOf(store: Store, athleteId: ID, catId: ID, seasonId: ID): number | null {
  return store.positionOf(athleteId, catId, seasonId)?.value ?? null;
}

/** Virtueller Platz eines Wertes in einem absteigend sortierten Feld. */
export const virtualPos = (values: number[], my: number): number => 1 + values.filter(v => v > my + 1e-9).length;

/** Alle internationalen Wettbewerbe einer Saison mit Event in dieser Kategorie. */
export function intlCompsFor(store: Store, catId: ID, seasonId: ID): { cmp: Competition; evId: ID }[] {
  const out: { cmp: Competition; evId: ID }[] = [];
  for (const cmp of store.b.competitions) {
    if (cmp.seasonId !== seasonId || !INTL.has(cmp.level)) continue;
    const ev = store.b.events.find(e => e.competitionId === cmp.id && e.categoryId === catId);
    if (ev) out.push({ cmp, evId: ev.id });
  }
  return out.sort((a, b) => a.cmp.startDate.localeCompare(b.cmp.startDate));
}

/** Athleten-Sicht: virtuelle Platzierung bei jeder internationalen Meisterschaft der Saison.
 *  Ohne Wert in der gewählten Saison wird der jüngste frühere Saisonwert verwendet (gekennzeichnet). */
export function intlPlacements(store: Store, athleteId: ID, catId: ID, seasonId: ID): ChampRow[] {
  let my = seasonValueOf(store, athleteId, catId, seasonId);
  let mySeason: ID | null = my != null ? seasonId : null;
  if (my == null) {
    for (const s of [...store.b.seasons].sort((a, b) => b.id.localeCompare(a.id))) {
      if (s.id >= seasonId) continue;
      const v = seasonValueOf(store, athleteId, catId, s.id);
      if (v != null) { my = v; mySeason = s.id; break; }
    }
  }
  return intlCompsFor(store, catId, seasonId).map(({ cmp, evId }) => {
    const { values, actual } = fieldOf(store, evId, athleteId);
    if (!values.length) return null;
    const third = values.length >= 3 ? values[2] : null;
    return {
      cmp, evId, winner: values[0], third,
      n: values.length + 1,
      my, mySeason, pos: my != null ? virtualPos(values, my) : null, actual,
      podiumGap: my != null && third != null ? round2(my - third) : null,
    };
  }).filter((x): x is ChampRow => x != null);
}

export interface SquadVirtualRow {
  athleteId: ID; name: string; catId: ID;
  my: number; pos: number; n: number; actual: number | null; podiumGap: number | null;
}

/** Cockpit-Sicht: virtuelle Platzierungen ALLER Athleten eines Landes bei einem Wettbewerb. */
export function squadVirtual(store: Store, cmpId: ID, country: string, seasonId: ID): SquadVirtualRow[] {
  const out: SquadVirtualRow[] = [];
  for (const ev of store.b.events) {
    if (ev.competitionId !== cmpId) continue;
    for (const r of store.ranking(ev.categoryId, seasonId)) {
      if (r.athlete.countryCode !== country) continue;
      const { values, actual } = fieldOf(store, ev.id, r.athlete.id);
      if (!values.length) continue;
      const third = values.length >= 3 ? values[2] : null;
      out.push({
        athleteId: r.athlete.id, name: r.athlete.displayName, catId: ev.categoryId,
        my: r.value, pos: virtualPos(values, r.value), n: values.length + 1, actual,
        podiumGap: third != null ? round2(r.value - third) : null,
      });
    }
  }
  return out.sort((a, b) => a.pos / a.n - b.pos / b.n);
}
