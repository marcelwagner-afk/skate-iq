import planHtml from '@planner-html?raw';
import { t } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { Card, SecLabel } from '../ui/components';

/**
 * Saisonplanung RKL – Eingabemaske (Marcels Prototyp v1.1, 13.10.2026).
 * Ausdrücklich NUR für den DRIV: erscheint ausschließlich im Echtdaten-Build
 * (öffentliche Demo: synthetic=true → Hinweis statt Maske). Die echte Maske
 * (saisonplanung.local.html, enthält die Kaderliste → gitignored) wird über
 * den Vite-Alias @planner-html nur bei VITE_REAL=1 eingebunden; öffentliche
 * Builds erhalten den leeren Stub. Vollständig
 * eigenständige Datei ohne externe Abhängigkeiten, eingebettet als iframe
 * srcdoc → funktioniert auch im Standalone-/Login-Build; Zwischenstände
 * speichert die Maske lokal im Browser (localStorage).
 */
export default function Saisonplanung() {
  const { store } = useApp();
  if (store.b.synthetic) {
    return (
      <div className="max-w-xl mx-auto mt-10">
        <Card className="text-center">
          <SecLabel>DRIV</SecLabel>
          <h1 className="text-2xl font-black">{t('plan.title')}</h1>
          <p className="text-sm ink-2 mt-3">{t('plan.drivOnly')}</p>
        </Card>
      </div>
    );
  }
  return (
    <div className="space-y-3 -mx-3 sm:mx-0">
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-0">
        <div>
          <h1 className="text-xl font-extrabold">{t('plan.title')}</h1>
        </div>
        <span className="chip" style={{ borderColor: 'color-mix(in srgb, var(--accent) 55%, var(--border))' }}>🇩🇪 DRIV</span>
      </div>
      <iframe
        srcDoc={planHtml}
        title={t('plan.title')}
        className="w-full rounded-xl border"
        style={{ borderColor: 'var(--border)', height: 'calc(100vh - 160px)', minHeight: 560, background: 'var(--surface-0, #fff)' }}
        sandbox="allow-scripts allow-same-origin allow-downloads allow-modals allow-popups"
      />
    </div>
  );
}
