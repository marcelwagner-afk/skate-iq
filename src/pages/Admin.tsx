import { t } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { Card, Gate, Kpi, SectionTitle } from '../ui/components';

export default function Admin() {
  const { store } = useApp();
  const q = store.b.quality;
  const sevColor = (s: string): string => (s === 'error' ? 'var(--critical)' : s === 'warn' ? 'var(--serious)' : 'var(--good)');
  return (
    <div className="space-y-4">
      <SectionTitle>{t('admin.title')}</SectionTitle>
      <Gate feature="admin.dataQuality">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <Kpi label={t('admin.sources')} value={store.b.sources.length} />
          <Kpi label="Performances" value={store.b.performances.length} />
          <Kpi label={t('admin.checks')} value={q.length} />
          <Kpi label={t('admin.identity')} value={q.filter(x => !x.resolvedAt).length} />
        </div>
        <Card>
          <SectionTitle>{t('admin.sources')}</SectionTitle>
          <div className="overflow-x-auto">
            <table className="tbl w-full">
              <thead><tr><th>Organization</th><th>Type</th><th>Parser</th><th>Confidence</th><th>Status</th><th>Licensed</th></tr></thead>
              <tbody>
                {store.b.sources.map(s => (
                  <tr key={s.id}>
                    <td className="font-semibold">{s.organization}</td>
                    <td><span className="chip">{s.type}</span></td>
                    <td className="tnum">{s.parserVersion}</td>
                    <td className="tnum">{(s.confidence * 100).toFixed(0)} %</td>
                    <td><span className="chip" style={{ color: 'var(--good)', borderColor: 'var(--good)' }}>{s.validationStatus}</span></td>
                    <td>{s.licensed ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <SectionTitle>{t('admin.checks')}</SectionTitle>
          <div className="space-y-2">
            {q.map(r => (
              <div key={r.id} className="flex items-start gap-2 text-sm">
                <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: sevColor(r.severity) }} />
                <div>
                  <b>{r.check}</b> <span className="chip ml-1">{r.entity}</span>
                  {!r.resolvedAt && <span className="chip ml-1" style={{ borderColor: 'var(--serious)', color: 'var(--serious)' }}>review</span>}
                  <div className="ink-2 text-xs mt-0.5">{r.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Gate>
    </div>
  );
}
