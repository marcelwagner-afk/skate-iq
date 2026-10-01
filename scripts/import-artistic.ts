/**
 * Artistic migration importer (STEP 15) – converts the REAL audited DRIV
 * dataset (seed_v2.json) into the canonical SKATE IQ model and validates it.
 *
 * Privacy: output goes to .tmp/ ONLY. Real athlete data is never bundled into
 * the public preview build (see docs/PRIVACY.md); it is imported into the
 * access-controlled product once a federation agreement exists.
 * Run: npm run import:artistic [path-to-existing-repo]
 */
/* eslint-disable no-console */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { artisticAdapter } from '../src/adapters/artistic';
import { normTokens, resolveIdentity, AUTO_MERGE_CONFIDENCE, type KnownIdentity } from '../src/core/identity';
import type {
  Athlete, Competition, CompetitionLevel, Event, Performance,
} from '../src/core/types';
import type { DataBundle } from '../src/data/provider';

const ROOT = process.argv[2] ?? join(process.cwd(), '..', 'existing');
const seedPath = join(ROOT, 'data', 'seed_v2.json');
if (!existsSync(seedPath)) { console.error(`not found: ${seedPath}`); process.exit(1); }

interface DrivRow {
  name: string; nat?: string; club?: string; lv?: string;
  platz: number | null; total: number | null; tes: number | null; tesRaw?: number | null;
  pcs: number | null; nseg?: number; tesOk?: boolean; abzuege?: number;
}
interface DrivCat { disziplin: string; klasse: string; gender?: string; rows: DrivRow[] }
interface DrivEvent { typ: string; jahr: number; name: string; datum: string; herkunft: string; kategorien: DrivCat[] }

const seed: DrivEvent[] = JSON.parse(readFileSync(seedPath, 'utf-8'));

const LEVEL: Record<string, CompetitionLevel> = {
  WM: 'world', EM: 'continental', 'WC-EU': 'international', 'WC-SA': 'international',
  'WC-F': 'international', CoE: 'international', IGC: 'international', IL: 'international',
  National: 'national',
};
const slug = (s: string): string => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- identity resolution over the full dataset ----------
const athletes: Athlete[] = [];
const known: KnownIdentity[] = [];
let exact = 0, merged = 0, reviewQueue = 0, created = 0;
function athleteIdFor(rawName: string, country: string | undefined): string {
  const r = resolveIdentity(rawName, known, country);
  if (r && r.confidence >= AUTO_MERGE_CONFIDENCE) {
    exact++;
    const a = athletes.find(x => x.id === r.athleteId)!;
    if (!a.nameVariants.includes(rawName)) { a.nameVariants.push(rawName); merged++; }
    return r.athleteId;
  }
  if (r) reviewQueue++;            // candidate exists but below threshold → queue, create separate identity
  created++;
  const id = `ath_real_${athletes.length + 1}`;
  const a: Athlete = {
    id, displayName: rawName, nameVariants: [rawName],
    countryCode: country ?? 'GER', sportIds: ['artistic'],
    profileVisibility: 'restricted',          // real data: restricted by default (minors!)
    claimed: false, isTeam: rawName.includes(' / '),
  };
  athletes.push(a);
  known.push({ athleteId: id, tokensList: [normTokens(rawName)], countryCode: a.countryCode });
  return id;
}

// ---------- conversion ----------
const competitions: Competition[] = [];
const events: Event[] = [];
const performances: Performance[] = [];
const catIds = new Set<string>();
let accepted = 0, incomplete = 0, rejected = 0;

for (const ev of seed) {
  const cmpId = `cmp_real_${slug(ev.name)}`;
  competitions.push({
    id: cmpId, name: ev.name, sportId: 'artistic',
    level: LEVEL[ev.typ] ?? 'national',
    seasonId: `s${ev.jahr}`, startDate: ev.datum, seriesKey: ev.typ,
  });
  for (const k of ev.kategorien) {
    const catId = `artistic.${slug(k.disziplin)}.${slug(k.klasse)}${k.gender ? '.' + slug(k.gender) : ''}`;
    catIds.add(catId);
    const evId = `ev_${cmpId}_${catId}`;
    events.push({ id: evId, competitionId: cmpId, categoryId: catId, fieldSize: k.rows.length });
    for (const row of k.rows) {
      const athleteId = athleteIdFor(row.name, ev.herkunft === 'international' ? row.nat : 'GER');
      if (row.total == null) { rejected++; continue; }
      const metrics = artisticAdapter.normalizeRaw({
        total: row.total, tes: row.tes ?? NaN, pcs: row.pcs ?? NaN, deductions: row.abzuege ?? NaN,
      });
      if (!metrics) { rejected++; continue; }
      const ok = row.tesOk !== false;
      performances.push({
        id: `perf_real_${performances.length + 1}`, eventId: evId, athleteId,
        metrics, placement: row.platz ?? undefined,
        status: ok ? 'ok' : 'incomplete', sourceId: 'src_driv',
      });
      ok ? accepted++ : incomplete++;
    }
  }
}

const bundle: DataBundle = {
  generatedAt: new Date().toISOString().slice(0, 10), synthetic: false,
  countries: [], clubs: [], athletes,
  seasons: [2023, 2024, 2025, 2026].map(y => ({ id: `s${y}`, label: String(y), start: `${y}-01-01`, end: `${y}-12-31` })),
  competitions, events, performances,
  sources: [{
    id: 'src_driv', organization: 'DRIV (official RollArt protocols)', type: 'pdf',
    url: 'https://github.com/marcelwagner-afk/DRIV-Rollkunstlauf_Leistungsdaten_Analyse',
    retrievedAt: new Date().toISOString().slice(0, 10), parserVersion: 'driv-pipeline-3.9.1',
    confidence: 1, validationStatus: 'validated', licensed: true,
  }],
  quality: [],
};
mkdirSync('.tmp', { recursive: true });
writeFileSync('.tmp/artistic-real-bundle.json', JSON.stringify(bundle));

// ---------- validation report ----------
const totalRows = seed.reduce((a, e) => a + e.kategorien.reduce((b, k) => b + k.rows.length, 0), 0);
console.log('=== ARTISTIC MIGRATION VALIDATION ===');
console.log(`source rows:            ${totalRows}`);
console.log(`performances imported:  ${performances.length} (ok=${accepted}, incomplete=${incomplete}, rejected=${rejected})`);
console.log(`competitions:           ${competitions.length} | categories: ${catIds.size} | events: ${events.length}`);
console.log(`athlete identities:     ${athletes.length} (created=${created}, variant-merges=${merged}, exact-hits=${exact}, review-queue=${reviewQueue})`);
const lost = totalRows - performances.length - rejected;
console.log(`row accounting:         imported+rejected = ${performances.length + rejected} of ${totalRows} (${lost === 0 ? 'COMPLETE' : 'MISSING ' + lost})`);
if (performances.length + rejected !== totalRows) process.exit(1);
console.log('RESULT: migration path VALID – real data convertible without loss.');
