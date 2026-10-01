import { useState } from 'react';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { AthleteLink, Card, Gate, SectionTitle, TIER_COLOR } from '../ui/components';
import { catLabel } from '../ui/labels';
import type { TalentTier } from '../data/store';

const TIERS: TalentTier[] = ['ELITE', 'INTERNATIONAL', 'BREAKTHROUGH', 'RISING', 'HIGH_POTENTIAL'];

export default function Talent() {
  const { store } = useApp();
  const [sport, setSport] = useState('');
  const [country, setCountry] = useState('');
  const [openWhy, setOpenWhy] = useState<string | null>(null);
  const radar = store.talentRadar(sport || undefined, country || undefined);
  const sel = 'rounded-lg border px-2 py-1.5 text-sm';
  const st = { borderColor: 'var(--border)', background: 'var(--surface-1)' } as const;
  return (
    <div className="space-y-4">
      <SectionTitle sub={t('talent.sub')}>{t('talent.title')}</SectionTitle>
      <div className="flex gap-2 flex-wrap">
        <select className={sel} style={st} value={sport} onChange={e => setSport(e.target.value)}>
          <option value="">{t('common.all')} {t('common.sport')}</option>
          <option value="artistic">{t('sport.artistic')}</option>
          <option value="speed">{t('sport.speed')}</option>
        </select>
        <select className={sel} style={st} value={country} onChange={e => setCountry(e.target.value)}>
          <option value="">{t('common.all')} {t('common.country')}</option>
          {store.b.countries.map(c => <option key={c.code} value={c.code}>{c.flag} {t(c.nameKey)}</option>)}
        </select>
      </div>
      <Gate feature="club.talentRadar">
        <div className="grid lg:grid-cols-2 gap-4">
          {TIERS.map(tier => {
            const entries = radar.filter(r => r.tier === tier);
            if (!entries.length) return null;
            return (
              <Card key={tier}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: TIER_COLOR[tier] }} />
                  <h2 className="font-bold">{t(`talent.${tier}`)}</h2>
                  <span className="chip ml-auto">{entries.length}</span>
                </div>
                <div className="space-y-2">
                  {entries.slice(0, 10).map((e, i) => {
                    const key = e.athlete.id + e.categoryId;
                    return (
                      <div key={key + i} className="text-sm">
                        <div className="flex items-center justify-between gap-2">
                          <AthleteLink id={e.athlete.id} name={e.athlete.displayName} flag={store.country(e.athlete.countryCode)?.flag} />
                          <span className="ink-3 text-xs truncate">{catLabel(store, e.categoryId)}</span>
                          <button className="chip" onClick={() => setOpenWhy(openWhy === key ? null : key)}>{t('talent.why')}</button>
                        </div>
                        {openWhy === key && (
                          <div className="flex gap-2 flex-wrap mt-1.5 pl-1">
                            {e.evidence.map(ev => (
                              <span key={ev.key} className="chip tnum">
                                {t(`kpi.${ev.key === 'worldPosition' ? 'world' : ev.key === 'percentile' ? 'percentile' : ev.key === 'spi' ? 'spi' : 'development'}`)}: <b>{ev.key === 'worldPosition' ? '#' : ''}{fmtNum(ev.value, ev.key === 'worldPosition' ? 0 : 1)}</b>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </Gate>
    </div>
  );
}
