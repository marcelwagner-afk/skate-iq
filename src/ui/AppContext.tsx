import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import bundleJson from '../data/seed/bundle.json';
import { Store } from '../data/store';
import type { DataBundle } from '../data/provider';
import { getLocale, onLocaleChange, setLocale, type Locale } from '../core/i18n';
import type { PlanKey } from '../core/types';

interface AppCtx {
  store: Store;
  locale: Locale; switchLocale: (l: Locale) => void;
  plan: PlanKey; setPlan: (p: PlanKey) => void;
  theme: 'light' | 'dark' | 'auto'; setTheme: (t: 'light' | 'dark' | 'auto') => void;
}
const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const store = useMemo(() => new Store(bundleJson as unknown as DataBundle, '2026-10-01'), []);
  const [locale, setLoc] = useState<Locale>(getLocale());
  const [plan, setPlan] = useState<PlanKey>('FED_PRO');          // demo default: show the product
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  useEffect(() => onLocaleChange(() => setLoc(getLocale())), []);
  useEffect(() => {
    const el = document.documentElement;
    if (theme === 'auto') el.removeAttribute('data-theme');
    else el.setAttribute('data-theme', theme);
  }, [theme]);
  const value = useMemo<AppCtx>(() => ({
    store, locale,
    switchLocale: (l) => setLocale(l),
    plan, setPlan, theme, setTheme,
  }), [store, locale, plan, theme]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useApp(): AppCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('AppProvider missing');
  return c;
}
