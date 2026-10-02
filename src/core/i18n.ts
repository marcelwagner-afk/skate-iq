/** Tiny key-based i18n. English default (§47); DE complete; IT/ES/PT/FR complete (Okt 2026). */
import { de } from './locales/de';
import { en } from './locales/en';
import { it } from './locales/it';
import { es } from './locales/es';
import { pt } from './locales/pt';
import { fr } from './locales/fr';

export type Locale = 'en' | 'de' | 'it' | 'es' | 'pt' | 'fr';
export const LOCALES: Locale[] = ['de', 'en', 'it', 'es', 'pt', 'fr'];
const DICTS: Record<Locale, Record<string, string>> = { en, de, it, es, pt, fr };
const NUM_LOCALE: Record<Locale, string> = {
  de: 'de-DE', en: 'en-US', it: 'it-IT', es: 'es-ES', pt: 'pt-PT', fr: 'fr-FR',
};
const STORE_KEY = 'skateiq.locale';

/** Startwert: gespeicherte Wahl → Browsersprache → DE (Produktentscheidung: Artistic-first für den deutschen Verband). */
function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && (LOCALES as string[]).includes(saved)) return saved as Locale;
  } catch { /* Storage blockiert (file://, Private Mode) → Fallback */ }
  try {
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if ((LOCALES as string[]).includes(nav)) return nav as Locale;
  } catch { /* kein navigator (Tests) */ }
  return 'de';
}
let current: Locale = initialLocale();
const listeners = new Set<() => void>();

export function setLocale(l: Locale): void {
  current = l;
  try { localStorage.setItem(STORE_KEY, l); } catch { /* Wahl gilt dann nur für diese Sitzung */ }
  listeners.forEach(f => f());
}
export function getLocale(): Locale { return current; }
export function onLocaleChange(f: () => void): () => void { listeners.add(f); return () => listeners.delete(f); }

export function t(key: string, params?: Record<string, string | number>): string {
  let s = DICTS[current][key] ?? DICTS.en[key] ?? key;
  if (params) for (const [k, v] of Object.entries(params)) {
    // numeric params render locale-aware (de: comma decimals), never grouped (years, counts)
    const str = typeof v === 'number'
      ? v.toLocaleString(NUM_LOCALE[current], { useGrouping: false, maximumFractionDigits: 3 })
      : v;
    s = s.replaceAll(`{${k}}`, str);
  }
  return s;
}
/** BCP-47-Tag der aktiven Sprache für Datums-/Zahlformatierung außerhalb von t(). */
export function localeTag(): string { return NUM_LOCALE[current]; }
export function fmtNum(v: number, decimals = 2): string {
  return v.toLocaleString(NUM_LOCALE[current], {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  });
}
