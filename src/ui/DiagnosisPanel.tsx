import { fmtNum, t } from '../core/i18n';
import type { DiagDim, Diagnosis } from '../data/diagnosis';

/** Signierte Zahl locale-korrekt formatieren: +2,1 / −3,4 */
const signed = (x: number, dec: number): string => (x > 0 ? '+' : x < 0 ? '−' : '±') + fmtNum(Math.abs(x), dec);

/** Evidenz-Parameter je Dimension formatieren (Vorzeichen explizit). */
export function diagParams(d: DiagDim): Record<string, string | number> {
  const p = { ...d.params } as Record<string, string | number>;
  if (d.key === 'tes' || d.key === 'pcs') p.rel = signed(Number(d.params.rel), 1);
  if (d.key === 'form') p.d = signed(Number(d.params.d), 1);
  if (d.key === 'trend') p.v = signed(Number(d.params.v), 2);
  return p;
}

const DOT: Record<DiagDim['status'], { ch: string; color: string }> = {
  strong: { ch: '▲', color: 'var(--good)' },
  ok: { ch: '◆', color: 'var(--ink-3)' },
  weak: { ch: '▼', color: 'var(--critical)' },
};

/** Leistungsprofil (alle Dimensionen) + priorisierte Arbeitsfelder. */
export function DiagnosisPanel({ diag }: { diag: Diagnosis }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
      <div>
        <div className="seclabel mb-2">{t('diag.profile')}</div>
        <div className="space-y-2">
          {diag.dims.map(d => (
            <div key={d.key} className="flex items-start gap-2.5 text-sm">
              <span className="flex-none pt-0.5" style={{ color: DOT[d.status].color }}>{DOT[d.status].ch}</span>
              <div className="min-w-0">
                <span className="font-semibold">{t(`diag.${d.key}.label`)}</span>
                <span className="ink-2"> · {t(`diag.${d.key}.ev`, diagParams(d))}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="seclabel mb-2">🎯 {t('diag.work')}</div>
        {diag.work.length === 0 ? (
          <p className="text-sm ink-2">{t('diag.workNone')}</p>
        ) : (
          <ol className="space-y-2.5">
            {diag.work.map((d, i) => (
              <li key={d.key} className="flex items-start gap-2.5 text-sm">
                <span className="flex-none w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center"
                  style={{ background: 'color-mix(in srgb, var(--critical) 18%, transparent)', color: 'var(--critical)' }}>
                  {i + 1}
                </span>
                <span>{t(`diag.${d.key}.work`, diagParams(d))}</span>
              </li>
            ))}
          </ol>
        )}
        <p className="text-[11px] ink-3 mt-3">{t('common.computedNote')}</p>
      </div>
    </div>
  );
}
