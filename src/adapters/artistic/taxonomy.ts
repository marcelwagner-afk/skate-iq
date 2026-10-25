/**
 * Artistic taxonomy – the REAL DRIV/WSE structure, derived from the audited
 * dataset (4 disciplines × 7 classes × gender where applicable).
 * Category IDs are systematic: artistic.<discipline>.<class>[.<gender>]
 * Labels compose at runtime from class + gender i18n keys (labels.ts).
 */
import type { Category, Discipline } from '../../core/types';

export const DISCIPLINES: Discipline[] = [
  { id: 'artistic.kuer', sportId: 'artistic', nameKey: 'dis.artistic.kuer' },
  { id: 'artistic.solotanz', sportId: 'artistic', nameKey: 'dis.artistic.solotanz' },
  { id: 'artistic.rolltanz', sportId: 'artistic', nameKey: 'dis.artistic.rolltanz' },
  { id: 'artistic.paarlauf', sportId: 'artistic', nameKey: 'dis.artistic.paarlauf' },
];

/** competitive classes in progression order (Senioren first) */
export const KLASSEN = ['senioren', 'junioren', 'youth', 'cadets', 'espoir', 'minis', 'tots'] as const;
export type Klasse = typeof KLASSEN[number];

/** which disciplines split by gender (singles) vs. couples (no split) */
const GENDERED: Record<string, boolean> = {
  'artistic.kuer': true, 'artistic.solotanz': true,
  'artistic.rolltanz': false, 'artistic.paarlauf': false,
};

export function categoryId(disId: string, klasse: string, gender?: string): string {
  return gender ? `${disId}.${klasse}.${gender}` : `${disId}.${klasse}`;
}

function buildCategories(): Category[] {
  const out: Category[] = [];
  let order = 0;
  for (const d of DISCIPLINES) {
    for (const k of KLASSEN) {
      if (GENDERED[d.id]) {
        for (const g of ['damen', 'herren'] as const) {
          out.push({
            id: categoryId(d.id, k, g), disciplineId: d.id,
            nameKey: `klasse.${k}`, ageGroupId: k, genderId: g, order: order++,
          });
        }
        // national mixed classes exist for Solotanz Espoir/Minis (no gender split)
        if (d.id === 'artistic.solotanz' && (k === 'espoir' || k === 'minis')) {
          out.push({ id: categoryId(d.id, k), disciplineId: d.id, nameKey: `klasse.${k}`, ageGroupId: k, order: order++ });
        }
      } else {
        out.push({ id: categoryId(d.id, k), disciplineId: d.id, nameKey: `klasse.${k}`, ageGroupId: k, order: order++ });
      }
    }
  }
  return out;
}
export const CATEGORIES: Category[] = buildCategories();

/**
 * Entry eligibility per competition series (Festlegung Sportkommission, carried
 * over from the audited tool): metadata for target pickers & future rules.
 * WM: Junioren/Senioren · EM: ab Cadets · World Cups: ab Cadets · EC/IL: alle.
 */
export const ELIGIBILITY: Record<string, readonly Klasse[]> = {
  worlds: ['senioren', 'junioren'],
  europeans: ['senioren', 'junioren', 'youth', 'cadets'],
  worldcup: ['senioren', 'junioren', 'youth', 'cadets'],
  eurocup: KLASSEN,
  interland: KLASSEN,
};

/** map the DRIV dataset's German category strings onto systematic IDs */
const DIS_MAP: Record<string, string> = {
  'Kürlaufen': 'artistic.kuer', 'Solotanz': 'artistic.solotanz',
  'Rolltanz': 'artistic.rolltanz', 'Paarlauf': 'artistic.paarlauf',
};
const KLASSE_MAP: Record<string, Klasse> = {
  Senioren: 'senioren', Junioren: 'junioren', Youth: 'youth', Jugend: 'youth',
  Cadets: 'cadets', Espoir: 'espoir', Minis: 'minis', Tots: 'tots',
};
const GENDER_MAP: Record<string, string> = { Damen: 'damen', Herren: 'herren' };

export function mapDrivCategory(disziplin: string, klasse: string, gender?: string): string | null {
  const d = DIS_MAP[disziplin]; const k = KLASSE_MAP[klasse];
  if (!d || !k) return null;
  const g = gender ? GENDER_MAP[gender] : undefined;
  if (gender && !g) return null;
  const id = categoryId(d, k, g);
  return CATEGORIES.some(c => c.id === id) ? id : null;
}
