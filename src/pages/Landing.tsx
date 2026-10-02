import { Link } from 'react-router-dom';
import { t } from '../core/i18n';
import { useApp } from '../ui/AppContext';
import { Card, DemoBadge, SecLabel } from '../ui/components';
import heroImg from '../assets/hero.jpg';
import progressImg from '../assets/progress.jpg';
import phonesImg from '../assets/phones.jpg';

/** World-Skate-Sportarten-Leiste (Vorlage): Artistic aktiv, Rest Roadmap */
const SPORTS: [string, string, boolean][] = [
  ['⛸️', 'sport.artistic', true], ['⚡', 'sport.speed', false], ['🛹', 'landing.sport.skateboarding', false],
  ['🏒', 'landing.sport.inlineHockey', false], ['🥅', 'landing.sport.rinkHockey', false],
  ['🎿', 'landing.sport.freestyle', false], ['💥', 'landing.sport.derby', false], ['🛴', 'landing.sport.scootering', false],
];

export default function Landing() {
  const { store } = useApp();
  const feats: [string, string][] = [
    ['landing.feat.bench', '📊'], ['landing.feat.athlete', '🏅'], ['landing.feat.fed', '🏛️'],
    ['landing.feat.talent', '🚀'], ['landing.feat.comp', '🏟️'], ['landing.feat.multi', '🛼'],
  ];
  const nAth = store.b.athletes.length, nPerf = store.b.performances.length, nCmp = store.b.competitions.length;
  return (
    <div className="space-y-10">
      <section className="hero-band p-6 sm:p-10 lg:p-12">
        <div className="hero-photo" style={{ backgroundImage: `url(${heroImg})` }} aria-hidden="true" />
        <div className="max-w-xl sm:pr-40 lg:pr-0">
          <div className="mb-4"><DemoBadge /></div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase">
            {t('landing.h1a')}<br />
            <span className="text-grad">{t('landing.h1b')}</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg ink-2">{t('landing.sub')}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/leaderboard" className="btn btn-primary">{t('landing.ctaExplore')} →</Link>
            <Link to="/home" className="btn">{t('landing.ctaFree')}</Link>
            <Link to="/federation/GER" className="btn">{t('landing.ctaFed')}</Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 max-w-xl mt-10">
          {[[nAth, t('kpi.athletes')], [nPerf, t('landing.results')], [nCmp, t('nav.competitions')]].map(([v, l]) => (
            <div key={String(l)} className="card px-3 py-4">
              <div className="hero-num text-2xl sm:text-3xl font-extrabold text-grad">{v}</div>
              <div className="text-[11px] uppercase tracking-wider ink-3 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sportarten-Leiste (Vorlage): gebaut für alle World-Skate-Sportarten */}
      <section className="flex gap-2 overflow-x-auto scrollbar-none justify-start sm:justify-center pb-1 -mx-3 px-3">
        {SPORTS.map(([icon, key, on]) => (
          <div key={key} className="card flex-none px-4 py-2.5 text-center" style={on ? { borderColor: 'color-mix(in srgb, var(--accent) 55%, var(--border))', boxShadow: 'var(--glow)' } : { opacity: 0.55 }}>
            <div className="text-xl">{icon}</div>
            <div className="text-[11px] font-bold mt-0.5 whitespace-nowrap">{t(key)}</div>
            <div className="text-[10px] ink-3">{on ? t('landing.sport.live') : t('landing.sport.soon')}</div>
          </div>
        ))}
      </section>

      {/* "More than results" (Vorlage) */}
      <section className="hero-band p-6 sm:p-10">
        <div className="hero-photo left hidden sm:block" style={{ backgroundImage: `url(${progressImg})`, width: 'min(38%, 340px)' }} aria-hidden="true" />
        <div className="sm:ml-[40%]">
          <SecLabel>{t('landing.moreLabel')}</SecLabel>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight max-w-lg">{t('landing.moreH')}</h2>
          <p className="text-sm sm:text-base ink-2 mt-2 max-w-xl">{t('landing.moreP')}</p>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{t('landing.featH')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {feats.map(([k, icon]) => (
            <Card key={k}>
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-bold">{t(`${k}.h`)}</h3>
              <p className="text-sm ink-2 mt-1">{t(`${k}.p`)}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Mobile-Mockup (Vorlage: "Your journey. Backed by data.") */}
      <section className="hero-band p-6 sm:p-10 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <SecLabel>{t('landing.mobileLabel')}</SecLabel>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{t('landing.mobileH')}</h2>
          <p className="text-sm sm:text-base ink-2 mt-2 max-w-md">{t('landing.mobileP')}</p>
          <Link to="/home" className="btn btn-primary inline-block mt-5 text-sm">{t('landing.ctaFree')} →</Link>
        </div>
        <img src={phonesImg} alt="" className="w-full max-w-md mx-auto rounded-xl" loading="lazy" />
      </section>

      <section className="text-center">
        <div className="inline-flex flex-wrap justify-center gap-6 text-xl font-extrabold ink-2">
          <span>{t('landing.q1')}</span><span className="text-grad">→</span><span>{t('landing.q2')}</span>
        </div>
        <p className="text-xs ink-3 mt-6 max-w-xl mx-auto">{t('landing.demoNote')} {t('brand.independent')}</p>
      </section>
    </div>
  );
}
