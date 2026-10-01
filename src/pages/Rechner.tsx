import calcHtml from '../calculator/rollart-rechner.html?raw';
import { t } from '../core/i18n';
import { can } from '../core/entitlements';
import { useApp } from '../ui/AppContext';
import { SecLabel } from '../ui/components';

/**
 * RollArt-Rechner – integriert als kostenpflichtiges Add-on (Marcels Calculator,
 * Wertetabellen gegen World Skate 2026 verifiziert; DG-Regel und
 * Komponenten-Obergrenzen je Kategorie korrigiert). Läuft vollständig im
 * Browser (iframe srcdoc), funktioniert daher auch im Standalone-/Login-Build.
 */
export default function Rechner() {
  const { plan, addonCalc, setAddonCalc } = useApp();
  const allowed = can(plan, 'tools.calculator') || addonCalc;

  if (!allowed) {
    return (
      <div className="max-w-xl mx-auto mt-10">
        <div className="price-card featured text-center">
          <SecLabel>{t('calc.addon')}</SecLabel>
          <h1 className="text-2xl font-black">{t('calc.title')}</h1>
          <div className="price-num text-grad mt-2">{t('calc.price')}</div>
          <p className="text-sm ink-2 mt-3">{t('calc.pitch')}</p>
          <ul className="plist text-left mx-auto">
            <li>{t('calc.f1')}</li><li>{t('calc.f2')}</li><li>{t('calc.f3')}</li><li>{t('calc.f4')}</li>
          </ul>
          <button className="btn btn-primary w-full mt-5" onClick={() => setAddonCalc(true)}>
            {t('calc.activate')}
          </button>
          <p className="text-[11px] ink-3 mt-2">{t('calc.included')} · {t('pricing.demoDisclaimer')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 -mx-3 sm:mx-0">
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-0">
        <div>
          <h1 className="text-xl font-extrabold">{t('calc.title')}</h1>
          <p className="text-xs ink-3">{t('calc.verified')}</p>
        </div>
        <span className="chip">{t('calc.addon')}</span>
      </div>
      <iframe
        srcDoc={calcHtml}
        title={t('calc.title')}
        className="w-full rounded-xl border"
        style={{ borderColor: 'var(--border)', height: 'calc(100vh - 160px)', minHeight: 560, background: '#fff' }}
        sandbox="allow-scripts allow-same-origin allow-downloads allow-modals allow-popups"
      />
    </div>
  );
}
