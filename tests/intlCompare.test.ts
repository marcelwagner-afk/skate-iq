import { describe, expect, it } from 'vitest';
import type { Competition } from '../src/core/types';
import { INTL_GROUPS, intlGroupOf, pctBeaten } from '../src/data/intlCompare';

const cmp = (seriesKey?: string): Competition => ({
  id: 'c', name: 'x', sportId: 'artistic', level: 'international',
  seasonId: 's2026', startDate: '2026-10-01', seriesKey,
} as Competition);

describe('intlGroupOf', () => {
  it('ordnet reale DRIV-Serien den Gruppen zu', () => {
    expect(intlGroupOf(cmp('WM'))).toBe('WM');
    expect(intlGroupOf(cmp('EM'))).toBe('EM');
    expect(intlGroupOf(cmp('CoE'))).toBe('CoE');
    expect(intlGroupOf(cmp('WC-EU'))).toBe('WC_SEMI');
    expect(intlGroupOf(cmp('WC-SA'))).toBe('WC_SEMI');
    expect(intlGroupOf(cmp('WC-F'))).toBe('WC_F');
  });
  it('ordnet synthetische Demo-Serien zu', () => {
    expect(intlGroupOf(cmp('worlds'))).toBe('WM');
    expect(intlGroupOf(cmp('europeans'))).toBe('EM');
    expect(intlGroupOf(cmp('worldcup1'))).toBe('WC_SEMI');
  });
  it('lässt nationale/unbekannte Serien aus', () => {
    expect(intlGroupOf(cmp('nat_GER'))).toBeNull();
    expect(intlGroupOf(cmp('IL'))).toBeNull();
    expect(intlGroupOf(cmp(undefined))).toBeNull();
  });
  it('kennt genau fünf Gruppen', () => {
    expect(INTL_GROUPS).toEqual(['WM', 'EM', 'CoE', 'WC_SEMI', 'WC_F']);
  });
});

describe('pctBeaten', () => {
  it('Sieg = 100 %, letzter Platz = 0 %', () => {
    expect(pctBeaten(1, 25)).toBe(100);
    expect(pctBeaten(25, 25)).toBe(0);
  });
  it('Mittelfeld anteilig', () => {
    expect(pctBeaten(3, 5)).toBe(50);
    expect(pctBeaten(6, 21)).toBe(75);
  });
  it('Feld von 1 ⇒ kein Anteil berechenbar', () => {
    expect(pctBeaten(1, 1)).toBeNull();
  });
  it('Platz größer als Feld (Sonderfall) wird auf 0 begrenzt', () => {
    expect(pctBeaten(12, 10)).toBe(0);
  });
});
