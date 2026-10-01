import { t } from '../core/i18n';
import { Card, ComputedNote, SecLabel } from '../ui/components';

/** Methodik & Begriffe – jede Kennzahl der App in Klartext erklärt (§ Erklärbarkeit). */
const ENTRIES = [
  'principle', 'value', 'pb', 'position', 'percentile', 'spi', 'confidence',
  'consistency', 'trend', 'benchmark', 'corridor', 'strength', 'talent', 'fed',
  'minors', 'demo',
] as const;

export default function Methodik() {
  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{t('gloss.title')}</h1>
        <p className="text-sm ink-2 mt-1">{t('gloss.sub')}</p>
      </div>
      <div className="space-y-3">
        {ENTRIES.map((k, i) => (
          <Card key={k}>
            <SecLabel>{String(i + 1).padStart(2, '0')}</SecLabel>
            <h2 className="font-bold text-base">{t(`gloss.${k}.t`)}</h2>
            <p className="text-sm ink-2 mt-1.5 leading-relaxed">{t(`gloss.${k}.d`)}</p>
          </Card>
        ))}
      </div>
      <ComputedNote />
    </div>
  );
}
