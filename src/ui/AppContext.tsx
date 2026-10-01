import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { loadBundle } from '../data/bundleLoader';
import { Store } from '../data/store';
import type { DataBundle } from '../data/provider';
import { getLocale, onLocaleChange, setLocale, t, type Locale } from '../core/i18n';
import type { PlanKey } from '../core/types';

interface AppCtx {
  store: Store;
  locale: Locale; switchLocale: (l: Locale) => void;
  plan: PlanKey; setPlan: (p: PlanKey) => void;
  addonCalc: boolean; setAddonCalc: (v: boolean) => void;   // Demo: RollArt-Rechner-Add-on
  theme: 'light' | 'dark' | 'auto'; setTheme: (t: 'light' | 'dark' | 'auto') => void;
}
const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [bundle, setBundle] = useState<DataBundle | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [locale, setLoc] = useState<Locale>(getLocale());
  const [plan, setPlan] = useState<PlanKey>('FED_PRO');          // demo default: show the product
  const [addonCalc, setAddonCalc] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark');   // Produktentscheidung 10/2026: Dark-first (Designvorlage)
  useEffect(() => { loadBundle().then(setBundle, (e: unknown) => setLoadError(String(e))); }, []);
  useEffect(() => onLocaleChange(() => setLoc(getLocale())), []);
  useEffect(() => {
    const el = document.documentElement;
    if (theme === 'auto') el.removeAttribute('data-theme');
    else el.setAttribute('data-theme', theme);
  }, [theme]);
  // "today" for analytics: real bundles use their generation date, the demo seed is pinned
  const store = useMemo(
    () => (bundle ? new Store(bundle, bundle.synthetic ? '2026-10-01' : bundle.generatedAt) : null),
    [bundle],
  );
  const value = useMemo<AppCtx | null>(() => (store ? {
    store, locale,
    switchLocale: (l) => setLocale(l),
    plan, setPlan, addonCalc, setAddonCalc, theme, setTheme,
  } : null), [store, locale, plan, addonCalc, theme]);
  if (loadError) {
    return <div className="p-8 text-sm" style={{ color: 'var(--critical)' }}>{loadError}</div>;
  }
  if (!value) {
    return <div className="p-8 text-sm ink-3">{t('common.loading')}</div>;
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useApp(): AppCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('AppProvider missing');
  return c;
}
