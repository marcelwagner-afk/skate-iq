import { Link } from 'react-router-dom';
import { t } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { Card, DemoBadge } from '../ui/components';

export default function Landing() {
  const { store } = useApp();
  const feats: [string, string][] = [
    ['landing.feat.bench', '📊'], ['landing.feat.athlete', '🏅'], ['landing.feat.fed', '🏛️'],
    ['landing.feat.talent', '🚀'], ['landing.feat.comp', '🏟️'], ['landing.feat.multi', '🛼'],
  ];
  const nAth = store.b.athletes.length, nPerf = store.b.performances.length, nCmp = store.b.competitions.length;
  return (
    <div className="space-y-10">
      <section className="text-center pt-10 pb-4">
        <div className="mb-4"><DemoBadge /></div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          {t('landing.h1a')}<br />
          <span style={{ color: 'var(--accent)' }}>{t('landing.h1b')}</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-5 text-base sm:text-lg ink-2">{t('landing.sub')}</p>
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          <Link to="/leaderboard" className="btn btn-primary">{t('landing.ctaExplore')}</Link>
          <Link to="/home" className="btn">{t('landing.ctaFree')}</Link>
          <Link to="/federation/GER" className="btn">{t('landing.ctaFed')}</Link>
        </div>
        <div className="flex justify-center gap-8 mt-8 text-sm ink-3">
          <span><b className="ink-2 tnum">{nAth}</b> {t('kpi.athletes')}</span>
          <span><b className="ink-2 tnum">{nPerf}</b> Results</span>
          <span><b className="ink-2 tnum">{nCmp}</b> {t('nav.competitions')}</span>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {feats.map(([k, icon]) => (
          <Card key={k}>
            <div className="text-2xl mb-2">{icon}</div>
            <h3 className="font-bold">{t(`${k}.h`)}</h3>
            <p className="text-sm ink-2 mt-1">{t(`${k}.p`)}</p>
          </Card>
        ))}
      </section>
      <section className="text-center">
        <div className="inline-flex flex-wrap justify-center gap-6 text-xl font-extrabold ink-2">
          <span>{t('landing.q1')}</span><span style={{ color: 'var(--accent)' }}>→</span><span>{t('landing.q2')}</span>
        </div>
        <p className="text-xs ink-3 mt-6 max-w-xl mx-auto">{t('landing.demoNote')} {t('brand.independent')}</p>
      </section>
    </div>
  );
}
