import { useMemo, useState } from 'react';
import { t, fmtNum } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { AthleteLink, Card, ComputedNote, SectionTitle, fmtOriented } from '../ui/components';
import { allCategories, sportOf } from '../ui/labels';

type Scope = 'world' | 'EU' | 'country';

export default function Leaderboard() {
  const { store } = useApp();
  const cats = allCategories();
  const [catId, setCatId] = useState(cats[0].id);
  const [seasonId, setSeasonId] = useState(store.currentSeason());
  const [scope, setScope] = useState<Scope>('world');
  const [countryCode, setCountryCode] = useState('GER');
  const [mode, setMode] = useState<'value' | 'spi'>('value');

  const rows = useMemo(() => {
    const sc = scope === 'world' ? undefined
      : scope === 'EU' ? { kind: 'continent' as const, key: 'EU' }
        : { kind: 'country' as const, key: countryCode };
    const base = store.ranking(catId, seasonId, sc);
    if (mode === 'value') return base.map(r => ({ ...r, metric: r.value }));
    return base
      .map(r => ({ ...r, metric: store.spi(r.athlete.id, catId)?.value ?? -1 }))
      .filter(r => r.metric >= 0)
      .sort((a, b) => b.metric - a.metric)
      .map((r, i) => ({ ...r, position: i + 1 }));
  }, [store, catId, seasonId, scope, countryCode, mode]);

  const sportId = sportOf(catId);
  const sel = 'rounded-lg border px-2 py-1.5 text-sm';
  const st = { borderColor: 'var(--border)', background: 'var(--surface-1)' } as const;
  return (
    <div className="space-y-4">
      <SectionTitle sub={t('board.analyticalNote', { metric: mode === 'spi' ? 'SPI' : t('metric.' + (sportId === 'speed' ? 'timeMs' : 'total')) })}>
        {t('board.title')} <span className="chip ml-2">{t('board.analytical')}</span>
      </SectionTitle>
      <div className="flex flex-wrap gap-2">
        <select className={sel} style={st} value={catId} onChange={e => setCatId(e.target.value)}>
          {cats.map(c => <option key={c.id} value={c.id}>{c.label()}</option>)}
        </select>
        <select className={sel} style={st} value={seasonId} onChange={e => setSeasonId(e.target.value)}>
          {store.b.seasons.map(s => <option key={s.id} value={s.id}>{t('common.season')} {s.label}</option>)}
        </select>
        <select className={sel} style={st} value={scope} onChange={e => setScope(e.target.value as Scope)}>
          <option value="world">{t('bench.group.world')}</option>
          <option value="EU">{t('bench.group.continent')} (EU)</option>
          <option value="country">{t('bench.group.country')}</option>
        </select>
        {scope === 'country' && (
          <select className={sel} style={st} value={countryCode} onChange={e => setCountryCode(e.target.value)}>
            {store.b.countries.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
          </select>
        )}
        <select className={sel} style={st} value={mode} onChange={e => setMode(e.target.value as 'value' | 'spi')}>
          <option value="value">{t('metric.' + (sportId === 'speed' ? 'timeMs' : 'total'))}</option>
          <option value="spi">SPI</option>
        </select>
      </div>
      <Card>
        <div className="overflow-x-auto">
          <table className="tbl w-full">
            <thead><tr><th>{t('board.rank')}</th><th>{t('board.athlete')}</th><th>{t('common.country')}</th><th>{t('board.value')}</th><th>{t('kpi.percentile')}</th></tr></thead>
            <tbody>
              {rows.slice(0, 50).map(r => (
                <tr key={r.athlete.id}>
                  <td className="tnum font-bold w-12">
                    {r.position <= 3 ? ['🥇', '🥈', '🥉'][r.position - 1] : r.position}
                  </td>
                  <td><AthleteLink id={r.athlete.id} name={r.athlete.displayName} /></td>
                  <td>{store.country(r.athlete.countryCode)?.flag} {r.athlete.countryCode}</td>
                  <td className="tnum font-semibold">{mode === 'spi' ? fmtNum(r.metric, 1) : fmtOriented(r.metric, sportId)}</td>
                  <td className="tnum ink-2">{r.percentile != null ? fmtNum(r.percentile, 1) : t('common.na')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ComputedNote />
      </Card>
    </div>
  );
}
