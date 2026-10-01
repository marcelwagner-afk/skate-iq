/**
 * Athlete identity resolution – ported from the audited DRIV pipeline
 * (token normalization → exact → subset → bounded edit distance), hardened
 * with confidence levels. NEVER auto-merges below AUTO_MERGE_CONFIDENCE.
 */
export interface IdentityCandidate {
  athleteId: string;
  confidence: number;            // 0..1
  method: 'exact' | 'subset' | 'fuzzy';
}
export const AUTO_MERGE_CONFIDENCE = 0.95;

const ALIAS_TOKENS: Record<string, string> = {};   // curated, grows via admin review

export function normTokens(name: string): string[] {
  const s = name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/['’´`]/g, '')
    .replace(/[-/~.,;:()]/g, ' ');
  return s.split(/\s+/).filter(Boolean).map(t => ALIAS_TOKENS[t] ?? t).sort();
}

export function editDistance(a: string, b: string, cap = 2): number {
  if (Math.abs(a.length - b.length) > cap) return cap;
  if (a.length > b.length) [a, b] = [b, a];
  let prev = Array.from({ length: a.length + 1 }, (_, i) => i);
  for (let i = 1; i <= b.length; i++) {
    const cur = [i];
    for (let j = 1; j <= a.length; j++) {
      cur.push(Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1)));
    }
    prev = cur;
  }
  return Math.min(prev[a.length], cap);
}

export interface KnownIdentity { athleteId: string; tokensList: string[][]; countryCode?: string }

export function resolveIdentity(
  rawName: string,
  known: KnownIdentity[],
  rawCountry?: string,
): IdentityCandidate | null {
  const t = normTokens(rawName);
  const key = t.join(' ');
  let best: IdentityCandidate | null = null;
  const consider = (c: IdentityCandidate): void => { if (!best || c.confidence > best.confidence) best = c; };

  for (const k of known) {
    const countryOk = !rawCountry || !k.countryCode || rawCountry === k.countryCode;
    for (const kt of k.tokensList) {
      const kk = kt.join(' ');
      if (kk === key) { consider({ athleteId: k.athleteId, confidence: countryOk ? 1 : 0.7, method: 'exact' }); continue; }
      const a = new Set(kt), b = new Set(t);
      const inter = [...a].filter(x => b.has(x)).length;
      const subset = (inter === a.size || inter === b.size) && inter >= 2;
      if (subset) { consider({ athleteId: k.athleteId, confidence: countryOk ? 0.9 : 0.6, method: 'subset' }); continue; }
      if (kt.length === t.length && t.length >= 2) {
        const total = kt.reduce((s, tok, i) => s + editDistance(tok, t[i]), 0);
        const perTokOk = kt.every((tok, i) => editDistance(tok, t[i]) <= 1);
        if (total <= 2 && perTokOk) consider({ athleteId: k.athleteId, confidence: countryOk ? 0.8 : 0.5, method: 'fuzzy' });
      }
    }
  }
  return best;
}
