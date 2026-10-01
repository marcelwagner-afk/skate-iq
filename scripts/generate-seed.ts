/**
 * Synthetic seed generator – deterministic (seeded PRNG), fictional athletes.
 * Privacy rule: the public preview bundle is ALWAYS synthetic (§63, PRIVACY.md).
 * Run: npm run seed
 */
/* eslint-disable no-console */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  Athlete, Club, Competition, Country, DataQualityRecord, DataSource, Event, Performance, Season,
} from '../src/core/types';
import type { DataBundle } from '../src/data/provider';

const __dir = dirname(fileURLToPath(import.meta.url));
const TODAY = '2026-10-01';

// ---------- deterministic PRNG ----------
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(20261001);
const pick = <T,>(arr: T[]): T => arr[Math.floor(rnd() * arr.length)];
const gauss = (mu = 0, sigma = 1): number => {
  const u = Math.max(rnd(), 1e-9), v = rnd();
  return mu + sigma * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};
const r2 = (x: number): number => Math.round(x * 100) / 100;

// ---------- countries (fictional athlete pools; country strength per sport) ----------
interface CDef { code: string; nameKey: string; continent: Country['continent']; flag: string; artistic: number; speed: number; firstW: string[]; firstM: string[]; last: string[] }
const C: CDef[] = [
  { code: 'GER', nameKey: 'country.GER', continent: 'EU', flag: '🇩🇪', artistic: 0.80, speed: 0.74, firstW: ['Lena', 'Mia', 'Marie', 'Emma', 'Nele', 'Johanna', 'Clara', 'Frieda'], firstM: ['Jonas', 'Finn', 'Paul', 'Luca', 'Tom', 'Elias', 'Henri', 'Moritz'], last: ['Brandt', 'Keller', 'Vogt', 'Lorenz', 'Seidel', 'Franke', 'Busch', 'Winter'] },
  { code: 'ITA', nameKey: 'country.ITA', continent: 'EU', flag: '🇮🇹', artistic: 0.95, speed: 0.90, firstW: ['Giulia', 'Sofia', 'Elena', 'Chiara', 'Alessia', 'Martina', 'Aurora', 'Vittoria'], firstM: ['Marco', 'Luca', 'Matteo', 'Dario', 'Lorenzo', 'Andrea', 'Pietro', 'Simone'], last: ['Moretti', 'Greco', 'Barone', 'Rizzi', 'Fontana', 'Serra', 'Pagano', 'Villa'] },
  { code: 'ESP', nameKey: 'country.ESP', continent: 'EU', flag: '🇪🇸', artistic: 0.90, speed: 0.80, firstW: ['Lucia', 'Carmen', 'Nerea', 'Irene', 'Alba', 'Paula', 'Marta', 'Claudia'], firstM: ['Diego', 'Pablo', 'Alvaro', 'Hugo', 'Iker', 'Sergio', 'Adrian', 'Mario'], last: ['Navarro', 'Iglesias', 'Crespo', 'Vidal', 'Pardo', 'Rojas', 'Camacho', 'Lozano'] },
  { code: 'POR', nameKey: 'country.POR', continent: 'EU', flag: '🇵🇹', artistic: 0.92, speed: 0.72, firstW: ['Ines', 'Beatriz', 'Mariana', 'Sara', 'Matilde', 'Carolina', 'Leonor', 'Francisca'], firstM: ['Tiago', 'Rui', 'Nuno', 'Joao', 'Afonso', 'Duarte', 'Goncalo', 'Vasco'], last: ['Tavares', 'Pires', 'Batista', 'Coelho', 'Neves', 'Matos', 'Faria', 'Ramos'] },
  { code: 'FRA', nameKey: 'country.FRA', continent: 'EU', flag: '🇫🇷', artistic: 0.78, speed: 0.88, firstW: ['Camille', 'Chloe', 'Manon', 'Lea', 'Jade', 'Louise', 'Ambre', 'Margaux'], firstM: ['Louis', 'Hugo', 'Theo', 'Jules', 'Gabriel', 'Arthur', 'Nathan', 'Mael'], last: ['Garnier', 'Chevalier', 'Perrot', 'Lemoine', 'Baron', 'Renard', 'Collet', 'Marchand'] },
  { code: 'USA', nameKey: 'country.USA', continent: 'NA', flag: '🇺🇸', artistic: 0.76, speed: 0.86, firstW: ['Ava', 'Madison', 'Harper', 'Riley', 'Peyton', 'Sierra', 'Quinn', 'Brooke'], firstM: ['Tyler', 'Jacob', 'Mason', 'Ethan', 'Carter', 'Logan', 'Wyatt', 'Dylan'], last: ['Calloway', 'Brooks', 'Hudson', 'Parker', 'Dalton', 'Mercer', 'Sloan', 'Whitney'] },
  { code: 'BRA', nameKey: 'country.BRA', continent: 'SA', flag: '🇧🇷', artistic: 0.84, speed: 0.78, firstW: ['Larissa', 'Camila', 'Bianca', 'Juliana', 'Leticia', 'Rafaela', 'Isadora', 'Nathalia'], firstM: ['Pedro', 'Gabriel', 'Rafael', 'Thiago', 'Caio', 'Vinicius', 'Henrique', 'Felipe'], last: ['Moraes', 'Teixeira', 'Barros', 'Cardoso', 'Freitas', 'Pinto', 'Rocha', 'Nunes'] },
  { code: 'ARG', nameKey: 'country.ARG', continent: 'SA', flag: '🇦🇷', artistic: 0.88, speed: 0.76, firstW: ['Valentina', 'Martina', 'Catalina', 'Abril', 'Delfina', 'Milagros', 'Josefina', 'Renata'], firstM: ['Mateo', 'Santiago', 'Joaquin', 'Tomas', 'Facundo', 'Bautista', 'Lautaro', 'Franco'], last: ['Quiroga', 'Ledesma', 'Villalba', 'Paredes', 'Acosta', 'Juarez', 'Molina', 'Herrera'] },
  { code: 'AUS', nameKey: 'country.AUS', continent: 'OC', flag: '🇦🇺', artistic: 0.68, speed: 0.70, firstW: ['Isla', 'Ruby', 'Zoe', 'Matilda', 'Evie', 'Georgia', 'Harriet', 'Imogen'], firstM: ['Lachlan', 'Oliver', 'Cooper', 'Noah', 'Harrison', 'Flynn', 'Angus', 'Jasper'], last: ['Thornton', 'Kessler', 'Macrae', 'Donovan', 'Ainsley', 'Burton', 'Fletcher', 'Hale'] },
];
const countries: Country[] = C.map(c => ({ code: c.code, nameKey: c.nameKey, continent: c.continent, flag: c.flag }));

// ---------- taxonomy ----------
const seasons: Season[] = [
  { id: 's2024', label: '2024', start: '2024-01-01', end: '2024-12-31' },
  { id: 's2025', label: '2025', start: '2025-01-01', end: '2025-12-31' },
  { id: 's2026', label: '2026', start: '2026-01-01', end: '2026-12-31' },
];
interface CatDef { id: string; sport: 'artistic' | 'speed'; junior: boolean; base: number }
const CATS: CatDef[] = [
  { id: 'artistic.free.sw', sport: 'artistic', junior: false, base: 150 },
  { id: 'artistic.free.sm', sport: 'artistic', junior: false, base: 165 },
  { id: 'artistic.free.jw', sport: 'artistic', junior: true, base: 120 },
  { id: 'artistic.free.jm', sport: 'artistic', junior: true, base: 130 },
  { id: 'artistic.solodance.sw', sport: 'artistic', junior: false, base: 110 },
  { id: 'artistic.solodance.jw', sport: 'artistic', junior: true, base: 90 },
  { id: 'speed.track.sw', sport: 'speed', junior: false, base: 92_000 },   // 1000 m time in ms
  { id: 'speed.track.sm', sport: 'speed', junior: false, base: 84_000 },
  { id: 'speed.track.jw', sport: 'speed', junior: true, base: 97_000 },
  { id: 'speed.track.jm', sport: 'speed', junior: true, base: 89_000 },
];

// ---------- competitions ----------
const competitions: Competition[] = [];
const events: Event[] = [];
for (const s of seasons) {
  const y = s.label;
  const mk = (key: string, name: string, level: Competition['level'], date: string, country?: string): void => {
    competitions.push({
      id: `cmp_${y}_${key}`, name, sportId: 'multi', level, seriesKey: key,
      seasonId: s.id, startDate: date, countryCode: country,
    });
  };
  mk('worldcup1', `World Cup Series I ${y}`, 'international', `${y}-03-14`);
  mk('europeans', `European Championships ${y}`, 'continental', `${y}-05-20`);
  mk('worldcup2', `World Cup Series II ${y}`, 'international', `${y}-07-10`);
  mk('worlds', `World Championships ${y}`, 'world', `${y}-09-18`);
  mk('nat_GER', `German Nationals ${y}`, 'national', `${y}-06-07`, 'GER');
  mk('nat_ITA', `Italian Nationals ${y}`, 'national', `${y}-06-14`, 'ITA');
}

// ---------- athletes ----------
const clubs: Club[] = C.map((c, i) => ({ id: `club_${i}`, name: `RC ${c.last[0]} City`, countryCode: c.code }));
interface Sim { a: Athlete; cat: CatDef; skill: number; growth: number; cc: CDef; dip?: string }
const sims: Sim[] = [];
const athletes: Athlete[] = [];
const usedNames = new Set<string>();
let athN = 0;
for (const cat of CATS) {
  for (const cc of C) {
    const strength = cat.sport === 'artistic' ? cc.artistic : cc.speed;
    const n = 2 + Math.floor(strength * 2.6 + rnd() * 1.4);      // 2..5 per country
    for (let i = 0; i < n; i++) {
      athN++;
      const pool = cat.id.endsWith('w') ? cc.firstW : cc.firstM;
      let name = `${pick(pool)} ${pick(cc.last)}`;
      let guard = 0;
      while (usedNames.has(name) && guard++ < 40) name = `${pick(pool)} ${pick(cc.last)}`;
      if (usedNames.has(name)) name = `${name.split(' ')[0]} ${String.fromCharCode(65 + (athN % 26))}. ${name.split(' ')[1]}`;
      usedNames.add(name);
      const a: Athlete = {
        id: `ath_${athN}`, displayName: name, nameVariants: [name],
        countryCode: cc.code, clubId: clubs[C.indexOf(cc)].id,
        sportIds: [cat.sport], profileVisibility: 'public', claimed: false,
      };
      athletes.push(a);
      const skill = Math.max(0.55, Math.min(1.15, gauss(0.72 + strength * 0.22, 0.09)));
      const growth = cat.junior ? gauss(0.035, 0.02) : gauss(0.012, 0.012);
      const sim: Sim = { a, cat, skill, growth, cc };
      if (rnd() < 0.06) sim.dip = pick(['s2025', 's2026']);       // injury season
      sims.push(sim);
    }
  }
}

// ---------- performances ----------
const performances: Performance[] = [];
let perfN = 0;
const seasonIdx = (id: string): number => seasons.findIndex(s => s.id === id);
for (const cmp of competitions) {
  const sIdx = seasonIdx(cmp.seasonId);
  for (const cat of CATS) {
    // eligibility: continental = EU only; nationals = that country only
    let field = sims.filter(x => x.cat.id === cat.id);
    if (cmp.seriesKey === 'europeans') field = field.filter(x => x.cc.continent === 'EU');
    if (cmp.level === 'national') field = field.filter(x => x.cc.code === cmp.countryCode);
    if (cmp.level !== 'national') {
      // internationals: best 2–3 per country travel
      const byC = new Map<string, Sim[]>();
      field.forEach(x => { (byC.get(x.cc.code) ?? byC.set(x.cc.code, []).get(x.cc.code)!).push(x); });
      field = [...byC.values()].flatMap(xs => xs.sort((a, b) => b.skill - a.skill).slice(0, cmp.level === 'world' ? 3 : 2));
    }
    if (field.length < 3) continue;
    const ev: Event = { id: `ev_${cmp.id}_${cat.id}`, competitionId: cmp.id, categoryId: cat.id, fieldSize: field.length };
    events.push(ev);
    const rows: { sim: Sim; value: number; metrics: Performance['metrics'] }[] = [];
    for (const sim of field) {
      const dip = sim.dip === cmp.seasonId ? 0.93 : 1;
      const eff = sim.skill * (1 + sim.growth * sIdx) * dip * (1 + gauss(0, 0.022));
      if (cat.sport === 'artistic') {
        const total = r2(cat.base * eff);
        const tesShare = 0.56 + gauss(0, 0.03);
        const tes = r2(total * tesShare), pcs = r2(total - total * tesShare);
        const ded = rnd() < 0.3 ? r2(Math.ceil(rnd() * 2)) : 0;
        rows.push({ sim, value: total, metrics: [
          { key: 'total', value: total }, { key: 'tes', value: tes }, { key: 'pcs', value: pcs }, { key: 'deductions', value: ded },
        ] });
      } else {
        const t = Math.round(cat.base / eff);
        rows.push({ sim, value: -t, metrics: [{ key: 'timeMs', value: t }] });
      }
    }
    rows.sort((a, b) => b.value - a.value);
    rows.forEach((r, i) => {
      perfN++;
      performances.push({
        id: `perf_${perfN}`, eventId: ev.id, athleteId: r.sim.a.id,
        metrics: r.metrics, placement: i + 1, status: 'ok', sourceId: 'src_synth',
      });
    });
  }
}

// ---------- provenance & demo quality records ----------
const sources: DataSource[] = [{
  id: 'src_synth', organization: 'SKATE IQ Seed Generator', type: 'json',
  retrievedAt: TODAY, parserVersion: 'seed-1.0.0', confidence: 1,
  validationStatus: 'validated', licensed: true,
}];
const quality: DataQualityRecord[] = [
  { id: 'dq_1', entity: 'athlete', entityId: athletes[8].id, check: 'name-variant-detected', severity: 'info', detail: `"${athletes[8].displayName.toUpperCase()}" merged via exact token match (confidence 1.00).`, resolvedBy: 'auto', resolvedAt: TODAY },
  { id: 'dq_2', entity: 'athlete', entityId: athletes[21].id, check: 'identity-uncertain', severity: 'warn', detail: 'Fuzzy match confidence 0.80 < auto-merge threshold 0.95 – manual review required.' },
  { id: 'dq_3', entity: 'performance', entityId: 'perf_77', check: 'score-outlier', severity: 'info', detail: 'Value within 3σ of athlete history – accepted.', resolvedBy: 'auto', resolvedAt: TODAY },
];

const bundle: DataBundle = {
  generatedAt: TODAY, synthetic: true,
  countries, clubs, athletes, seasons, competitions, events, performances, sources, quality,
};
const out = join(__dir, '..', 'src', 'data', 'seed', 'bundle.json');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(bundle));
console.log(`seed written: ${out}`);
console.log(`athletes=${athletes.length} events=${events.length} performances=${performances.length}`);
