/** Tiny key-based i18n. English default (§47); DE complete; architecture open for more. */
import { de } from './locales/de';
import { en } from './locales/en';

export type Locale = 'en' | 'de';
const DICTS: Record<Locale, Record<string, string>> = { en, de };
let current: Locale = 'de';   // product decision Oct 2026: Artistic-first for the German federation → DE default, EN complete
const listeners = new Set<() => void>();

export function setLocale(l: Locale): void { current = l; listeners.forEach(f => f()); }
export function getLocale(): Locale { return current; }
export function onLocaleChange(f: () => void): () => void { listeners.add(f); return () => listeners.delete(f); }

export function t(key: string, params?: Record<string, string | number>): string {
  let s = DICTS[current][key] ?? DICTS.en[key] ?? key;
  if (params) for (const [k, v] of Object.entries(params)) {
    // numeric params render locale-aware (de: comma decimals), never grouped (years, counts)
    const str = typeof v === 'number'
      ? v.toLocaleString(current === 'de' ? 'de-DE' : 'en-US', { useGrouping: false, maximumFractionDigits: 3 })
      : v;
    s = s.replaceAll(`{${k}}`, str);
  }
  return s;
}
export function fmtNum(v: number, decimals = 2): string {
  return v.toLocaleString(current === 'de' ? 'de-DE' : 'en-US', {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  });
}
