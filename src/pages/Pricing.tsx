import { useState } from 'react';
import { t } from '../core/i18n';
import { PLAN_FEATURES, PLAN_PRICING } from '../core/entitlements';
import type { PlanKey } from '../core/types';
import { useApp } from '../ui/AppContext';

const ORDER: Exclude<PlanKey, 'ADMIN'>[] = ['FREE', 'ATHLETE_PRO', 'COACH_PRO', 'CLUB_PRO', 'FED_STARTER', 'FED_PRO', 'FED_ENTERPRISE'];

export default function Pricing() {
  const { plan, setPlan } = useApp();
  const [yearly, setYearly] = useState(true);
  return (
    <div className="space-y-6">
      {/* Kopf nach Designvorlage: "SIMPLE PLANS. REAL IMPACT." + Monat/Jahr-Umschalter */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            {t('pricing.h1a')}<br /><span className="text-grad">{t('pricing.h1b')}</span>
          </h1>
          <p className="text-sm ink-3 mt-1 max-w-xl">{t('pricing.note')}</p>
        </div>
        <div className="tabbar card !rounded-full p-1">
          <button className={`tab !py-1 ${!yearly ? 'on' : ''}`} onClick={() => setYearly(false)}>{t('pricing.monthly')}</button>
          <button className={`tab !py-1 ${yearly ? 'on' : ''}`} onClick={() => setYearly(true)}>{t('pricing.yearly')}</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ORDER.map(p => {
          const feats = [...PLAN_FEATURES[p]];
          const active = plan === p;
          const featured = p === 'FED_PRO';
          return (
            <div key={p} className={`price-card ${featured ? 'featured' : ''}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm">{p.startsWith('FED') ? '🏛️ ' : ''}{p.replace('_', ' ')}</h3>
                {featured && <span className="chip" style={{ borderColor: 'var(--accent)', color: 'var(--seq-600)' }}>{t('pricing.popular')}</span>}
              </div>
              <div className="price-num text-grad mt-2">{t(PLAN_PRICING[p].priceKey)}</div>
              {yearly && p !== 'FREE' && <div className="text-[11px] ink-3">{t('pricing.yearlyNote')}</div>}
              <p className="text-sm ink-2 mt-2">{t(`pricing.sell.${p}`)}</p>
              <ul className="plist">
                {feats.slice(0, 7).map(f => <li key={f}>{t(`feat.${f}`)}</li>)}
                {feats.length > 7 && <li>… +{feats.length - 7}</li>}
              </ul>
              <button className={`mt-auto pt-4 w-full ${active ? 'btn' : 'btn btn-primary'}`}
                onClick={() => setPlan(p)}>
                {active ? '✓ ' + t('pricing.currentPlan') : t('pricing.tryPlan')}
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-xs ink-3">{t('pricing.demoDisclaimer')} {t('brand.independent')}</p>
    </div>
  );
}
