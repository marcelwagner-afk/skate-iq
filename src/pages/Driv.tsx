import { useMemo, useState } from 'react';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { HBars } from '../ui/charts';
import { AthleteLink, Card, ComputedNote, Gate, Kpi, SectionTitle, fmtMag } from '../ui/components';
import { allCategories, catLabel, sportOf } from '../ui/labels';

const DRIV = 'GER';

/**
 * DRIV-Cockpit (Marcel, 02.10.2026): der deutsche Kader im internationalen
 * Vergleich – Welt-/Europa-Position, Perzentil, Top-10-Rückstand je Athlet,
 * plus Ländervergleich. Reine rechnerische Einordnung aus offiziellen Ergebnissen.
 */
export default function Driv() {
  const { store } = useApp();
  const season = store.currentSeason();
  const [catSel, setCatSel] = useState('');
  const [rival, setRival] = useState('ITA');
  const s = store.federationStats(DRIV);
  const sR = store.federationStats(rival);

  /* Kader international: alle deutschen Athleten je Kategorie im Weltkontext */
  const rows = useMemo(() => {
    const out: {
      id: string; name: string; catId: string; cat: string; sport: string;
      world: number; of: number; eu: number | null; euOf: number | null;
      pct: number | null; sb: number; gap10: number | null; trend: number | null;
    }[] = [];
    for (const cat of allCategories()) {
      if (catSel && cat.id !== catSel) continue;
      const world = store.ranking(cat.id, season);
      if (!world.length) continue;
      const bench10 = world.find(r => r.position === 10)?.value ?? null;
      const sport = sportOf(cat.id);
      const label = catLabel(store, cat.id);
      for (const r of world) {
        if (r.athlete.countryCode !== DRIV) continue;
        const eu = store.positionOf(r.athlete.id, cat.id, season, { kind: 'continent', key: 'EU' });
        out.push({
          id: r.athlete.id, name: r.athlete.displayName, catId: cat.id, cat: label, sport,
          world: r.position, of: r.of, eu: eu?.position ?? null, euOf: eu?.of ?? null,
          pct: r.percentile, sb: r.value,
          gap10: bench10 != null ? r.value - bench10 : null,
          trend: store.trend12(r.athlete.id, cat.id),
        });
      }
    }
    return out.sort((a, b) => a.world / a.of - b.world / b.of);
  }, [store, season, catSel]);

  const cats = useMemo(() => allCategories()
    .filter(c => store.ranking(c.id, season).some(r => r.athlete.countryCode === DRIV)), [store, season]);

  const gapRows: { label: string; va: number; vb: number }[] = [
    { label: t('countries.eliteDepth'), va: s.top25, vb: sR.top25 },
    { label: t('kpi.top10'), va: s.top10, vb: sR.top10 },
    { label: t('kpi.medals'), va: s.podiums, vb: sR.podiums },
    { label: t('kpi.avgSpi'), va: s.avgSpi ?? 0, vb: sR.avgSpi ?? 0 },
    { label: t('countries.representation'), va: s.athletes, vb: sR.athletes },
    { label: t('fed.pipeline'), va: s.emerging, vb: sR.emerging },
  ];
  const sel = 'rounded-lg border px-2 py-1.5 text-sm';
  const st = { borderColor: 'var(--border)', background: 'var(--surface-1)' } as const;

  return (
    <div className="space-y-5">
      <div className="hero-band p-5 sm:p-6">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-4xl">🇩🇪</span>
          <div>
            <h1 className="text-2xl font-extrabold">{t('driv.title')}</h1>
            <p className="text-sm ink-2">{t('driv.sub')}</p>
          </div>
        </div>
      </div>
      <Gate feature="federation.intelligence">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <Kpi label={t('kpi.athletes')} value={s.athletes} />
          <Kpi label={t('kpi.top10')} value={s.top10} />
          <Kpi label={t('kpi.top25')} value={s.top25} />
          <Kpi label={t('kpi.medals')} value={s.podiums} />
          <Kpi label={t('kpi.avgPercentile')} value={s.avgPercentile != null ? fmtNum(s.avgPercentile, 1) : t('common.na')} />
          <Kpi label={t('kpi.avgSpi')} value={s.avgSpi != null ? fmtNum(s.avgSpi, 1) : t('common.na')} />
        </div>

        <Card>
          <div className="flex items-end justify-between gap-2 flex-wrap">
            <SectionTitle sub={t('driv.squadSub')}>{t('driv.squad')}</SectionTitle>
            <select className={sel} style={st} value={catSel} onChange={e => setCatSel(e.target.value)}>
              <option value="">{t('common.all')} – {t('common.category')}</option>
              {cats.map(c => <option key={c.id} value={c.id}>{catLabel(store, c.id)}</option>)}
            </select>
          </div>
          <div className="overflow-x-auto mt-2">
            <table className="tbl w-full">
              <thead>
                <tr>
                  <th>{t('board.athlete')}</th><th>{t('common.category')}</th>
                  <th>{t('kpi.world')}</th><th>{t('driv.europe')}</th>
                  <th>{t('kpi.percentile')}</th><th>{t('kpi.sb')}</th>
                  <th>{t('kpi.gapTop10')}</th><th>{t('athlete.range.12m')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.id + r.catId}>
                    <td className="font-semibold whitespace-nowrap"><AthleteLink id={r.id} name={r.name} /></td>
                    <td className="text-xs ink-2 whitespace-nowrap">{r.cat}</td>
                    <td className="tnum font-semibold whitespace-nowrap">#{r.world} <span className="ink-3 font-normal">/ {r.of}</span></td>
                    <td className="tnum whitespace-nowrap">{r.eu != null ? <>#{r.eu} <span className="ink-3">/ {r.euOf}</span></> : t('common.na')}</td>
                    <td className="tnum">{r.pct != null ? fmtNum(r.pct, 1) : t('common.na')}</td>
                    <td className="tnum font-semibold">{fmtNum(r.sb, 2)}</td>
                    <td className="tnum whitespace-nowrap" style={{ color: r.gap10 != null && r.gap10 >= 0 ? 'var(--good)' : 'var(--critical)' }}>
                      {r.gap10 == null ? t('common.na') : r.gap10 >= 0 ? '✓' : '−' + fmtMag(r.gap10, r.sport)}
                    </td>
                    <td className="tnum whitespace-nowrap" style={{ color: (r.trend ?? 0) >= 0 ? 'var(--good)' : 'var(--critical)' }}>
                      {r.trend == null ? t('common.na') : (r.trend >= 0 ? '+' : '−') + fmtMag(r.trend, r.sport)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ComputedNote />
        </Card>

        <Card>
          <SectionTitle>{t('driv.compare')}</SectionTitle>
          <div className="flex gap-2 items-center mb-4 flex-wrap">
            <span className="font-bold">🇩🇪 {t('country.GER')}</span>
            <span className="font-bold ink-3">{t('countries.vs')}</span>
            <select className={sel} style={st} value={rival} onChange={e => setRival(e.target.value)}>
              {store.b.countries.filter(c => c.code !== DRIV).map(c =>
                <option key={c.code} value={c.code}>{c.flag} {t(c.nameKey)}</option>)}
            </select>
          </div>
          <div className="space-y-4">
            {gapRows.map(r => (
              <div key={r.label}>
                <div className="text-xs uppercase tracking-wider ink-3 mb-1">{r.label}</div>
                <HBars
                  rows={[
                    { name: `🇩🇪 ${DRIV}`, value: r.va, color: 'var(--series-1)' },
                    { name: `${store.country(rival)?.flag} ${rival}`, value: r.vb, color: 'var(--series-2)' },
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
