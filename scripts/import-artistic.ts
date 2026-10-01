/**
 * Artistic importer v2 – converts the REAL audited DRIV dataset (seed_v2.json)
 * into the canonical SKATE IQ model using the real taxonomy (mapDrivCategory),
 * with countries (flag/continent), clubs and seasons derived from the data.
 *
 * Privacy: output goes to .tmp/ and src/data-real/*.local.json – the latter is
 * GITIGNORED (real athlete data, partly minors – docs/SECURITY.md → PRIVACY).
 * Real builds (`npm run build:real`) must never be published openly.
 * Run: npm run import:artistic [path-to-existing-repo]
 */
/* eslint-disable no-console */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { artisticAdapter, mapDrivCategory } from '../src/adapters/artistic';
import { normTokens, resolveIdentity, AUTO_MERGE_CONFIDENCE, type KnownIdentity } from '../src/core/identity';
import type {
  Athlete, Club, Competition, CompetitionLevel, Continent, Country, Event, Performance,
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

// ---------- countries: every code occurring in the dataset ----------
const CINFO: Record<string, [flag: string, continent: Continent]> = {
  AIN: ['🏳️', 'EU'], AND: ['🇦🇩', 'EU'], ARG: ['🇦🇷', 'SA'], AUS: ['🇦🇺', 'OC'],
  BEL: ['🇧🇪', 'EU'], BOL: ['🇧🇴', 'SA'], BRA: ['🇧🇷', 'SA'], CAN: ['🇨🇦', 'NA'],
  CHI: ['🇨🇱', 'SA'], CHN: ['🇨🇳', 'AS'], CIV: ['🇨🇮', 'AF'], COL: ['🇨🇴', 'SA'],
  CRO: ['🇭🇷', 'EU'], CZE: ['🇨🇿', 'EU'], DEN: ['🇩🇰', 'EU'], ECU: ['🇪🇨', 'SA'],
  EGY: ['🇪🇬', 'AF'], ESA: ['🇸🇻', 'NA'], ESP: ['🇪🇸', 'EU'], EST: ['🇪🇪', 'EU'],
  FRA: ['🇫🇷', 'EU'], GBR: ['🇬🇧', 'EU'], GER: ['🇩🇪', 'EU'], HAI: ['🇭🇹', 'NA'],
  ISR: ['🇮🇱', 'AS'], ITA: ['🇮🇹', 'EU'], JPN: ['🇯🇵', 'AS'], KOR: ['🇰🇷', 'AS'],
  MAR: ['🇲🇦', 'AF'], MEX: ['🇲🇽', 'NA'], NED: ['🇳🇱', 'EU'], NZL: ['🇳🇿', 'OC'],
  PAN: ['🇵🇦', 'NA'], PAR: ['🇵🇾', 'SA'], POR: ['🇵🇹', 'EU'], ROM: ['🇷🇴', 'EU'],
  ROU: ['🇷🇴', 'EU'], SLO: ['🇸🇮', 'EU'], SLV: ['🇸🇻', 'NA'], SMR: ['🇸🇲', 'EU'],
  SUI: ['🇨🇭', 'EU'], THA: ['🇹🇭', 'AS'], TPE: ['🇹🇼', 'AS'], UKR: ['🇺🇦', 'EU'],
  URU: ['🇺🇾', 'SA'], USA: ['🇺🇸', 'NA'], VEN: ['🇻🇪', 'SA'],
};
const usedCountries = new Set<string>(['GER']);
function countryOf(nat: string | undefined): string {
  const c = nat && CINFO[nat] ? nat : 'GER';
  usedCountries.add(c);
  if (nat && !CINFO[nat]) unknownNats.add(nat);
  return c;
}
const unknownNats = new Set<string>();

// ---------- clubs (German national data carries club names) ----------
const clubs: Club[] = [];
const clubIdByName = new Map<string, string>();
function clubIdFor(name: string | undefined, countryCode: string): string | undefined {
  if (!name) return undefined;
  const key = name.trim();
  if (!key) return undefined;
  let id = clubIdByName.get(key);
  if (!id) {
    id = `club_${slug(key) || clubIdByName.size + 1}`;
    clubIdByName.set(key, id);
    clubs.push({ id, name: key, countryCode });
  }
  return id;
}

// ---------- identity resolution over the full dataset ----------
const athletes: Athlete[] = [];
const known: KnownIdentity[] = [];
let exact = 0, merged = 0, reviewQueue = 0, created = 0;
function athleteIdFor(rawName: string, country: string, club: string | undefined): string {
  const r = resolveIdentity(rawName, known, country);
  if (r && r.confidence >= AUTO_MERGE_CONFIDENCE) {
    exact++;
    const a = athletes.find(x => x.id === r.athleteId)!;
    if (!a.nameVariants.includes(rawName)) { a.nameVariants.push(rawName); merged++; }
    if (!a.clubId && club) a.clubId = clubIdFor(club, a.countryCode);
    return r.athleteId;
  }
  if (r) reviewQueue++;            // candidate exists but below threshold → queue, create separate identity
  created++;
  const id = `ath_real_${athletes.length + 1}`;
  const a: Athlete = {
    id, displayName: rawName, nameVariants: [rawName],
    countryCode: country, clubId: clubIdFor(club, country), sportIds: ['artistic'],
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
const years = new Set<number>();
const unmappedCats = new Set<string>();
let accepted = 0, incomplete = 0, rejected = 0;

for (const ev of seed) {
  years.add(ev.jahr);
  const cmpId = `cmp_real_${slug(ev.name)}`;
  competitions.push({
    id: cmpId, name: ev.name, sportId: 'artistic',
    level: LEVEL[ev.typ] ?? 'national',
    seasonId: `s${ev.jahr}`, startDate: ev.datum, seriesKey: ev.typ,
  });
  for (const k of ev.kategorien) {
    const catId = mapDrivCategory(k.disziplin, k.klasse, k.gender || undefined);
    if (!catId) { unmappedCats.add(`${k.disziplin}|${k.klasse}|${k.gender ?? ''}`); continue; }
    catIds.add(catId);
    const evId = `ev_${cmpId}_${catId}`;
    events.push({ id: evId, competitionId: cmpId, categoryId: catId, fieldSize: k.rows.length });
    for (const row of k.rows) {
      const country = countryOf(ev.herkunft === 'international' ? row.nat : 'GER');
      const athleteId = athleteIdFor(row.name, country, row.club);
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

const countries: Country[] = [...usedCountries].sort().map(code => ({
  code, nameKey: `country.${code}`, continent: CINFO[code][1], flag: CINFO[code][0],
}));

const bundle: DataBundle = {
  generatedAt: new Date().toISOString().slice(0, 10), synthetic: false,
  countries, clubs, athletes,
  seasons: [...years].sort().map(y => ({ id: `s${y}`, label: String(y), start: `${y}-01-01`, end: `${y}-12-31` })),
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
mkdirSync('src/data-real', { recursive: true });
writeFileSync('src/data-real/bundle.artistic.local.json', JSON.stringify(bundle));

// ---------- validation report ----------
const totalRows = seed.reduce((a, e) => a + e.kategorien.reduce((b, k) => b + k.rows.length, 0), 0);
console.log('=== ARTISTIC MIGRATION VALIDATION (v2, real taxonomy) ===');
console.log(`source rows:            ${totalRows}`);
console.log(`performances imported:  ${performances.length} (ok=${accepted}, incomplete=${incomplete}, rejected=${rejected})`);
console.log(`competitions:           ${competitions.length} | categories: ${catIds.size} | events: ${events.length}`);
console.log(`athlete identities:     ${athletes.length} (created=${created}, variant-merges=${merged}, exact-hits=${exact}, review-queue=${reviewQueue})`);
console.log(`countries:              ${countries.length} | clubs: ${clubs.length} | seasons: ${[...years].sort().join(',')}`);
if (unknownNats.size) console.log(`WARN unknown nat codes → GER fallback: ${[...unknownNats].join(', ')}`);
if (unmappedCats.size) { console.log(`ERROR unmapped categories: ${[...unmappedCats].join(' · ')}`); process.exit(1); }
const lost = totalRows - performances.length - rejected;
console.log(`row accounting:         imported+rejected = ${performances.length + rejected} of ${totalRows} (${lost === 0 ? 'COMPLETE' : 'MISSING ' + lost})`);
if (performances.length + rejected !== totalRows) process.exit(1);
console.log('output: .tmp/artistic-real-bundle.json + src/data-real/bundle.artistic.local.json (gitignored)');
console.log('RESULT: real bundle written – build with `npm run build:real`.');
