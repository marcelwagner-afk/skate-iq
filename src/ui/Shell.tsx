import { useMemo, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { t } from '../core/i18n';
import type { PlanKey } from '../core/types';
import { useApp } from './AppContext';
import { DemoBadge } from './components';

const PLANS: PlanKey[] = ['FREE', 'ATHLETE_PRO', 'COACH_PRO', 'CLUB_PRO', 'FED_STARTER', 'FED_PRO', 'FED_ENTERPRISE', 'ADMIN'];

function GlobalSearch() {
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
    <div className="relative flex-1 max-w-md" ref={box}>
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

export function Shell({ children }: { children: React.ReactNode }) {
  const { locale, switchLocale, plan, setPlan, theme, setTheme } = useApp();
  const links: [string, string][] = [
    ['/home', t('nav.home')], ['/leaderboard', t('nav.leaderboard')], ['/compare', t('nav.compare')],
    ['/talent', t('nav.talent')], ['/federation/GER', t('nav.federation')], ['/countries', t('nav.countries')],
    ['/competitions', t('nav.competitions')], ['/pricing', t('nav.pricing')], ['/admin', t('nav.admin')],
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b" style={{ background: 'color-mix(in srgb, var(--surface-0) 88%, transparent)', backdropFilter: 'blur(10px)', borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-5">
          <div className="flex items-center gap-3 py-2.5">
            <Link to="/" className="flex items-center gap-2 font-black tracking-tight text-lg whitespace-nowrap">
              <span className="logo-mark" aria-hidden>S</span>
              <span>SKATE <span className="text-grad">IQ</span></span>
            </Link>
            <GlobalSearch />
            <select value={plan} onChange={e => setPlan(e.target.value as PlanKey)}
              className="text-xs rounded-lg border px-1.5 py-1 hidden sm:block" style={{ borderColor: 'var(--border)', background: 'var(--surface-1)' }}
              aria-label={t('pricing.currentPlan')} title={t('pricing.currentPlan')}>
              {PLANS.map(p => <option key={p} value={p}>{p.replace('_', ' ')}</option>)}
            </select>
            <button className="text-xs navlink" onClick={() => switchLocale(locale === 'en' ? 'de' : 'en')} aria-label={t('common.lang')}>
              {locale.toUpperCase()}
            </button>
            <button className="text-xs navlink" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          {/* single-row swipeable nav (mobile-first – lesson from the DRIV audit) */}
          <nav className="flex gap-1 overflow-x-auto scrollbar-none -mx-1 pb-1">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `navlink ${isActive ? 'on' : ''}`}>{label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-5 py-5">{children}</main>
      <footer className="border-t py-5 mt-8" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-5 flex flex-wrap items-center gap-3 text-xs ink-3">
          <DemoBadge />
          <span>{t('brand.independent')}</span>
          <span className="ml-auto">{t('brand.name')} · {t('brand.tagline')}</span>
        </div>
      </footer>
    </div>
  );
}
