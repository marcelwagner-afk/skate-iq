import { useState } from 'react';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { HBars } from '../ui/charts';
import { Card, ComputedNote, Gate, SectionTitle } from '../ui/components';

export default function Countries() {
  const { store } = useApp();
  const [sport, setSport] = useState<string>('');
  const [a, setA] = useState('GER'); const [b, setB] = useState('ITA');
  const matrix = store.countryMatrix(sport || undefined);
  const sA = store.federationStats(a, sport || undefined);
  const sB = store.federationStats(b, sport || undefined);
  const sel = 'rounded-lg border px-2 py-1.5 text-sm';
  const st = { borderColor: 'var(--border)', background: 'var(--surface-1)' } as const;

  const gapRows: { label: string; va: number; vb: number }[] = [
    { label: t('countries.eliteDepth'), va: sA.top25, vb: sB.top25 },
    { label: t('kpi.top10'), va: sA.top10, vb: sB.top10 },
    { label: t('kpi.medals'), va: sA.podiums, vb: sB.podiums },
    { label: t('kpi.avgSpi'), va: sA.avgSpi ?? 0, vb: sB.avgSpi ?? 0 },
    { label: t('countries.col.dev'), va: sA.development ?? 0, vb: sB.development ?? 0 },
    { label: t('countries.representation'), va: sA.athletes, vb: sB.athletes },
    { label: t('fed.pipeline'), va: sA.emerging, vb: sB.emerging },
  ];

  return (
    <div className="space-y-5">
      <SectionTitle>{t('countries.title')}</SectionTitle>
      <div className="flex gap-2 flex-wrap">
        <select className={sel} style={st} value={sport} onChange={e => setSport(e.target.value)}>
          <option value="">{t('common.all')} {t('common.sport')}</option>
          <option value="artistic">{t('sport.artistic')}</option>
          <option value="speed">{t('sport.speed')}</option>
        </select>
      </div>
      <Gate feature="federation.countryCompare">
        <Card>
          <div className="overflow-x-auto">
            <table className="tbl w-full">
              <thead>
                <tr><th>{t('common.country')}</th><th>{t('countries.col.athletes')}</th><th>{t('kpi.top10')}</th><th>{t('kpi.top25')}</th><th>{t('kpi.medals')}</th><th>{t('kpi.avgSpi')}</th><th>{t('countries.col.dev')}</th></tr>
              </thead>
              <tbody>
                {matrix.map(r => (
                  <tr key={r.country.code}>
                    <td className="font-semibold whitespace-nowrap">
                      <a href={`#/federation/${r.country.code}`} className="hover:underline">{r.country.flag} {t(r.country.nameKey)}</a>
                    </td>
                    <td className="tnum">{r.s.athletes}</td>
                    <td className="tnum font-semibold">{r.s.top10}</td>
                    <td className="tnum">{r.s.top25}</td>
                    <td className="tnum">{r.s.podiums}</td>
                    <td className="tnum font-semibold">{r.s.avgSpi != null ? fmtNum(r.s.avgSpi, 1) : t('common.na')}</td>
                    <td className="tnum" style={{ color: (r.s.development ?? 50) >= 50 ? 'var(--good)' : 'var(--critical)' }}>
                      {r.s.development != null ? fmtNum(r.s.development, 0) : t('common.na')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ComputedNote />
        </Card>

        <Card>
          <SectionTitle>{t('countries.gap')}</SectionTitle>
          <div className="flex gap-2 items-center mb-4 flex-wrap">
            <select className={sel} style={st} value={a} onChange={e => setA(e.target.value)}>
              {store.b.countries.map(c => <option key={c.code} value={c.code}>{c.flag} {t(c.nameKey)}</option>)}
            </select>
            <span className="font-bold ink-3">{t('countries.vs')}</span>
            <select className={sel} style={st} value={b} onChange={e => setB(e.target.value)}>
              {store.b.countries.map(c => <option key={c.code} value={c.code}>{c.flag} {t(c.nameKey)}</option>)}
            </select>
          </div>
          <div className="space-y-4">
            {gapRows.map(r => (
              <div key={r.label}>
                <div className="text-xs uppercase tracking-wider ink-3 mb-1">{r.label}</div>
                <HBars
                  rows={[
                    { name: `${store.country(a)?.flag} ${a}`, value: r.va, color: 'var(--series-1)' },
                    { name: `${store.country(b)?.flag} ${b}`, value: r.vb, color: 'var(--series-2)' },
                  ]}
                  fmt={v => fmtNum(v, Number.isInteger(v) ? 0 : 1)}
                  max={Math.max(r.va, r.vb, 1e-9)}
                />
              </div>
            ))}
          </div>
        </Card>
      </Gate>
    </div>
  );
}
