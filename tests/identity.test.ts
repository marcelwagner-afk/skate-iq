import { describe, expect, it } from 'vitest';
import { AUTO_MERGE_CONFIDENCE, editDistance, normTokens, resolveIdentity } from '../src/core/identity';

const known = [
  { athleteId: 'a1', tokensList: [normTokens('Maria Rossi')], countryCode: 'ITA' },
  { athleteId: 'a2', tokensList: [normTokens('Marta Rossi')], countryCode: 'ITA' },
];

describe('identity resolution', () => {
  it('normalizes diacritics, apostrophes, order', () => {
    expect(normTokens("ROSSI Marìa")).toEqual(normTokens("Maria Rossi"));
    expect(normTokens("D'Angelo Nicolò")).toEqual(normTokens('dangelo nicolo'.split(' ').join(' ')));
  });
  it('exact token match ⇒ confidence 1 (auto-mergeable)', () => {
    const r = resolveIdentity('ROSSI, Maria', known, 'ITA')!;
    expect(r.athleteId).toBe('a1'); expect(r.method).toBe('exact');
    expect(r.confidence).toBeGreaterThanOrEqual(AUTO_MERGE_CONFIDENCE);
  });
  it('subset match (middle name added) ⇒ below auto-merge threshold', () => {
    const r = resolveIdentity('Maria A. Rossi', known, 'ITA')!;
    expect(r.athleteId).toBe('a1'); expect(r.method).toBe('subset');
    expect(r.confidence).toBeLessThan(AUTO_MERGE_CONFIDENCE);
  });
  it('fuzzy typo match found but NEVER auto-merged', () => {
    const r = resolveIdentity('Maria Rosse', [known[0]], 'ITA')!;
    expect(r.method).toBe('fuzzy');
    expect(r.confidence).toBeLessThan(AUTO_MERGE_CONFIDENCE);
  });
  it('country mismatch lowers confidence', () => {
    const r = resolveIdentity('Maria Rossi', known, 'GER')!;
    expect(r.confidence).toBeLessThan(1);
  });
  it('ambiguity (Maria vs Marta) resolves to the closer candidate, not blindly', () => {
    const r = resolveIdentity('Maria Rossi', known, 'ITA')!;
    expect(r.athleteId).toBe('a1');
  });
  it('editDistance is capped and correct', () => {
    expect(editDistance('rossi', 'rosse')).toBe(1);
    expect(editDistance('abcdef', 'xyzuvw')).toBe(2); // capped
  });
});
