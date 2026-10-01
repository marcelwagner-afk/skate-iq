import { t } from '../core/i18n';
import { PLAN_FEATURES, PLAN_PRICING } from '../core/entitlements';
import type { PlanKey } from '../core/types';
import { useApp } from '../ui/AppContext';
import { Card, SectionTitle } from '../ui/components';

const ORDER: Exclude<PlanKey, 'ADMIN'>[] = ['FREE', 'ATHLETE_PRO', 'COACH_PRO', 'CLUB_PRO', 'FED_STARTER', 'FED_PRO', 'FED_ENTERPRISE'];

export default function Pricing() {
  const { plan, setPlan } = useApp();
  return (
    <div className="space-y-4">
      <SectionTitle sub={t('pricing.note')}>{t('pricing.title')}</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ORDER.map(p => {
          const feats = [...PLAN_FEATURES[p]];
          const active = plan === p;
          return (
            <Card key={p} className={active ? '!border-2' : ''}
              >
              <div style={active ? { } : undefined}>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold">{p.replace('_', ' ')}</h3>
                  {p.startsWith('FED') && <span className="chip">🏛️</span>}
                </div>
                <div className="hero-num text-xl font-black mt-1" style={{ color: 'var(--accent)' }}>{t(PLAN_PRICING[p].priceKey)}</div>
                <p className="text-sm ink-2 mt-2 min-h-10">{t(`pricing.sell.${p}`)}</p>
                <ul className="text-xs ink-3 mt-3 space-y-1">
                  {feats.slice(0, 8).map(f => <li key={f}>✓ {f}</li>)}
                  {feats.length > 8 && <li>… +{feats.length - 8}</li>}
                </ul>
                <button className={`mt-4 w-full ${active ? 'btn' : 'btn btn-primary'}`} onClick={() => setPlan(p)}>
                  {active ? '✓ ' + t('pricing.currentPlan') + ' ' + p.replace('_', ' ') : t('pricing.currentPlan') + ' ' + p.replace('_', ' ')}
                </button>
              </div>
            </Card>
          );
        })}
      </div>
      <p className="text-xs ink-3">{t('brand.independent')}</p>
    </div>
  );
}
