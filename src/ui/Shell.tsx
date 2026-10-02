import { useMemo, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LOCALES, t, type Locale } from '../core/i18n';
import type { PlanKey } from '../core/types';
import { useApp } from './AppContext';
import { DemoBadge } from './components';

const PLANS: PlanKey[] = ['FREE', 'ATHLETE_PRO', 'COACH_PRO', 'CLUB_PRO', 'FED_STARTER', 'FED_PRO', 'FED_ENTERPRISE', 'ADMIN'];

/* minimalistische Line-Icons (Designvorlage: Sidebar mit Icon+Label) */
const IC: Record<string, ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />,
  board: <path d="M4 20V10m5.5 10V4m5.5 16v-7M20.5 20V7" />,
  compare: <path d="M8 3v18M16 3v18M3 8h5m8 0h5M3 16h5m8 0h5" />,
  talent: <path d="M12 3l2.5 6 6.5.5-5 4.3 1.6 6.2-5.6-3.6-5.6 3.6L8 13.8 3 9.5l6.5-.5z" />,
  fed: <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14 0 18-3-4-3-14.5 0-18z" /></>,
  comp: <path d="M8 21h8m-4-4v4M6 3h12v5a6 6 0 0 1-12 0zM6 5H3v2a4 4 0 0 0 3 3.9M18 5h3v2a4 4 0 0 1-3 3.9" />,
  price: <path d="M12 2v20M17 6.5C17 4.6 14.8 4 12 4s-5 .9-5 2.8 1.8 2.6 5 3.2 5 1.3 5 3.2-2.2 2.8-5 2.8-5-.6-5-2.5" />,
  calc: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 12h2m3 0h2M8 16h2m3 0h2" /></>,
  book: <path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5A2.5 2.5 0 0 0 4 21.5v-2zm0 0A2.5 2.5 0 0 1 6.5 17H20" />,
  data: <><ellipse cx="12" cy="5" rx="8" ry="2.6" /><path d="M4 5v14c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6V5M4 12c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6" /></>,
};
function Icon({ k }: { k: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{IC[k]}</svg>
  );
}

function GlobalSearch({ compact = false }: { compact?: boolean }) {
  const { store } = useApp();
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const res = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 2) return null;
    const match = (x: string): boolean => x.toLowerCase().includes(s);
    return {
      athletes: store.b.athletes.filter(a => match(a.displayName)).slice(0, 6),
      clubs: store.b.clubs.filter(c => match(c.name)).slice(0, 3),
      countries: store.b.countries.filter(c => match(c.code) || match(t(c.nameKey))).slice(0, 3),
      competitions: store.b.competitions.filter(c => match(c.name)).slice(0, 4),
    };
  }, [q, store]);
  const go = (path: string): void => { setOpen(false); setQ(''); nav(path); };
  return (
    <div className={`relative ${compact ? 'flex-1' : 'flex-1 max-w-md'}`} ref={box}>
      <input
        value={q}
        onChange={e => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder={t('nav.search.placeholder')}
        className="w-full rounded-xl border px-3 py-1.5 text-sm"
        style={{ borderColor: 'var(--border)', background: 'var(--surface-1)' }}
        aria-label={t('nav.search.placeholder')}
      />
      {open && res && (
        <div className="absolute z-50 mt-1 w-full card p-2 max-h-96 overflow-auto shadow-lg">
          {res.athletes.length > 0 && <div className="px-2 pt-1 text-[10px] uppercase tracking-wider ink-3">{t('nav.athletes')}</div>}
          {res.athletes.map(a => (
            <button key={a.id} className="block w-full text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] text-sm"
              onMouseDown={() => go(`/athlete/${a.id}`)}>
              {store.country(a.countryCode)?.flag} {a.displayName} <span className="ink-3 text-xs">{a.countryCode}</span>
            </button>
          ))}
          {res.countries.length > 0 && <div className="px-2 pt-1 text-[10px] uppercase tracking-wider ink-3">{t('nav.countries')}</div>}
          {res.countries.map(c => (
            <button key={c.code} className="block w-full text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] text-sm"
              onMouseDown={() => go(`/federation/${c.code}`)}>{c.flag} {t(c.nameKey)}</button>
          ))}
          {res.competitions.length > 0 && <div className="px-2 pt-1 text-[10px] uppercase tracking-wider ink-3">{t('nav.competitions')}</div>}
          {res.competitions.map(c => (
            <button key={c.id} className="block w-full text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-2)] text-sm"
              onMouseDown={() => go(`/competition/${c.id}`)}>{c.name}</button>
          ))}
          {res.clubs.length > 0 && <div className="px-2 pt-1 text-[10px] uppercase tracking-wider ink-3">{t('common.club')}</div>}
          {res.clubs.map(c => <div key={c.id} className="px-2 py-1.5 text-sm ink-2">{c.name} · {c.countryCode}</div>)}
        </div>
      )}
    </div>
  );
}

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 font-black tracking-tight text-lg whitespace-nowrap">
      <span className="logo-mark" aria-hidden>S</span>
      <span>SKATE <span className="text-grad">IQ</span></span>
    </Link>
  );
}

const LINKS: [string, string, string][] = [
  ['/home', 'nav.home', 'home'], ['/leaderboard', 'nav.leaderboard', 'board'],
  ['/compare', 'nav.compare', 'compare'], ['/talent', 'nav.talent', 'talent'],
  ['/federation/GER', 'nav.federation', 'fed'], ['/countries', 'nav.countries', 'globe'],
  ['/competitions', 'nav.competitions', 'comp'], ['/rechner', 'nav.calc', 'calc'], ['/methodik', 'nav.method', 'book'], ['/pricing', 'nav.pricing', 'price'],
  ['/admin', 'nav.admin', 'data'],
];

export function Shell({ children }: { children: React.ReactNode }) {
  const { locale, switchLocale, plan, setPlan, theme, setTheme } = useApp();
  const controls = (
    <>
      <select value={plan} onChange={e => setPlan(e.target.value as PlanKey)}
        className="text-xs rounded-lg border px-1.5 py-1 hidden sm:block" style={{ borderColor: 'var(--border)', background: 'var(--surface-1)' }}
        aria-label={t('pricing.currentPlan')} title={t('pricing.currentPlan')}>
        {PLANS.map(p => <option key={p} value={p}>{p.replace('_', ' ')}</option>)}
      </select>
      <select value={locale} onChange={e => switchLocale(e.target.value as Locale)}
        className="text-xs rounded-lg border px-1.5 py-1" style={{ borderColor: 'var(--border)', background: 'var(--surface-1)' }}
        aria-label={t('common.lang')} title={t('common.lang')}>
        {LOCALES.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
      </select>
      <button className="text-xs navlink" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </>
  );
  return (
    <div className="min-h-screen lg:flex">
      {/* Sidebar – Desktop (Designvorlage: App-Navigation links) */}
      <aside className="hidden lg:flex flex-col w-56 flex-none sticky top-0 h-screen border-r px-3 py-4 gap-1"
        style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--surface-1) 72%, transparent)' }}>
        <div className="px-2 pb-4"><Brand /></div>
        {LINKS.map(([to, key, icon]) => (
          <NavLink key={to} to={to} className={({ isActive }) => `sidelink ${isActive ? 'on' : ''}`}>
            <Icon k={icon} />{t(key)}
          </NavLink>
        ))}
        <div className="mt-auto px-2 pt-4 text-[11px] ink-3">
          <div className="mb-2"><DemoBadge /></div>
          {t('brand.name')} · {t('brand.tagline')}
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 border-b" style={{ background: 'color-mix(in srgb, var(--surface-0) 88%, transparent)', backdropFilter: 'blur(10px)', borderColor: 'var(--border)' }}>
          <div className="max-w-7xl mx-auto px-3 sm:px-5">
            <div className="flex items-center gap-3 py-2.5">
              <span className="lg:hidden"><Brand /></span>
              <GlobalSearch compact />
              {controls}
            </div>
            {/* mobile: einzeilige wischbare Navigation */}
            <nav className="lg:hidden flex gap-1 overflow-x-auto scrollbar-none -mx-1 pb-1">
              {LINKS.map(([to, key]) => (
                <NavLink key={to} to={to} className={({ isActive }) => `navlink ${isActive ? 'on' : ''}`}>{t(key)}</NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-5 py-5">{children}</main>
        <footer className="border-t py-5 mt-8" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-7xl mx-auto px-3 sm:px-5 flex flex-wrap items-center gap-3 text-xs ink-3">
            <span className="lg:hidden"><DemoBadge /></span>
            <span>{t('brand.independent')}</span>
            <span className="ml-auto">{t('brand.name')} · {t('brand.tagline')}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
