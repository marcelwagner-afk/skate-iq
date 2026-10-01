import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { t } from '../core/i18n';
import { can, requiredPlan } from '../core/entitlements';
import type { FeatureKey, PlanKey } from '../core/types';
import type { TalentTier } from '../data/store';
import { useApp } from './AppContext';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card p-4 sm:p-5 ${className}`}>{children}</div>;
}
export function SectionTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-3">
      <h2 className="text-base font-bold tracking-tight">{children}</h2>
      {sub && <p className="text-xs ink-3 mt-0.5">{sub}</p>}
    </div>
  );
}
export function Kpi({ label, value, sub, tone }: { label: string; value: ReactNode; sub?: ReactNode; tone?: 'good' | 'bad' }) {
  return (
    <div className="card p-3 sm:p-4 min-w-0">
      <div className="text-[11px] uppercase tracking-wider ink-3 truncate">{label}</div>
      <div className="hero-num text-2xl sm:text-3xl font-extrabold mt-1"
        style={tone ? { color: tone === 'good' ? 'var(--good)' : 'var(--critical)' } : undefined}>
        {value}
      </div>
      {sub && <div className="text-xs ink-3 mt-0.5 truncate">{sub}</div>}
    </div>
  );
}
export function Badge({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span className="chip" style={color ? { borderColor: color, color } : undefined}>{children}</span>
  );
}
export function DemoBadge() {
  return (
    <span className="chip" style={{ borderColor: 'var(--warning)', color: 'var(--ink-2)', background: 'color-mix(in srgb, var(--warning) 12%, var(--surface-1))' }}>
      ⚠ {t('common.demoBadge')}
    </span>
  );
}
export const TIER_COLOR: Record<TalentTier, string> = {
  ELITE: 'var(--series-7)', INTERNATIONAL: 'var(--series-1)', BREAKTHROUGH: 'var(--series-3)',
  RISING: 'var(--series-2)', HIGH_POTENTIAL: 'var(--series-5)',
};
export function TierBadge({ tier }: { tier: TalentTier }) {
  return <Badge color={TIER_COLOR[tier]}>{t(`talent.${tier}`)}</Badge>;
}

/** Entitlement gate: renders children when the demo plan allows the feature,
 *  otherwise a clearly-labelled upgrade hint (never silent hiding). */
export function Gate({ feature, children }: { feature: FeatureKey; children: ReactNode }) {
  const { plan } = useApp();
  if (can(plan, feature)) return <>{children}</>;
  const needed: PlanKey = requiredPlan(feature);
  return (
    <div className="card p-5 text-center" style={{ borderStyle: 'dashed' }}>
      <div className="text-sm font-semibold">{t('pricing.upgrade', { plan: needed.replace('_', ' ') })}</div>
      <div className="text-xs ink-3 mt-1">{t(`pricing.sell.${needed}`)}</div>
      <Link to="/pricing" className="btn btn-primary inline-block mt-3 text-sm">{t('nav.pricing')}</Link>
    </div>
  );
}
export function AthleteLink({ id, name, flag }: { id: string; name: string; flag?: string }) {
  return (
    <Link to={`/athlete/${id}`} className="font-semibold hover:underline whitespace-nowrap">
      {flag && <span className="mr-1">{flag}</span>}{name}
    </Link>
  );
}
export function ComputedNote() {
  return <p className="text-[11px] ink-3 mt-3">{t('common.computedNote')} · {t('bench.officialNote')}</p>;
}
/** positive magnitude (deltas, gaps) in sport units: speed → seconds, else points */
export function fmtMag(v: number | null | undefined, sportId: string): string {
  if (v == null) return t('common.na');
  const m = Math.abs(v);
  if (sportId === 'speed') return (m / 1000).toFixed(3) + ' s';
  return m.toFixed(2);
}
export function fmtOriented(v: number | null | undefined, sportId: string, decimals = 2): string {
  if (v == null) return t('common.na');
  if (sportId === 'speed') {
    const ms = -v; const s = ms / 1000;
    if (s < 60) return s.toFixed(3) + ' s';
    const min = Math.floor(s / 60);
    return `${min}:${(s - min * 60).toFixed(3).padStart(6, '0')}`;
  }
  return v.toFixed(decimals);
}
