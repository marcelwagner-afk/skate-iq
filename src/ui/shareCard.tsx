/** Shareable performance card (§18) – canvas-rendered PNG, SKATE IQ branding. */
import { t, fmtNum } from '../core/i18n';
import type { Athlete } from '../core/types';
import type { Store } from '../data/store';
import { catParts, sportOf } from './labels';

export type CardFormat = '1:1' | '4:5' | '9:16' | '16:9';
const SIZES: Record<CardFormat, [number, number]> = {
  '1:1': [1080, 1080], '4:5': [1080, 1350], '9:16': [1080, 1920], '16:9': [1600, 900],
};

export function downloadShareCard(store: Store, a: Athlete, catId: string, format: CardFormat = '1:1'): void {
  const [W, H] = SIZES[format];
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const x = cv.getContext('2d')!;
  const season = store.currentSeason();
  const pos = store.positionOf(a.id, catId, season);
  const pct = store.percentile(a.id, catId, season);
  const spi = store.spi(a.id, catId);
  const pb = store.pb(a.id, catId);
  const parts = catParts(store, catId);
  const country = store.country(a.countryCode);
  const sportId = sportOf(catId);
  const fmtVal = (v: number | null): string => {
    if (v == null) return '–';
    if (sportId === 'speed') { const s = -v / 1000; return s.toFixed(3) + ' s'; }
    return fmtNum(v, 2);
  };

  // background
  const g = x.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#101418'); g.addColorStop(1, '#1c2b3a');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = '#2a78d6'; x.fillRect(0, 0, W, 14);

  const cx = W / 2; let y = H * 0.14;
  x.textAlign = 'center';
  x.fillStyle = '#9fb3c8'; x.font = `600 ${W * 0.026}px system-ui`;
  x.fillText(`${parts.sport.toUpperCase()} · ${parts.category.toUpperCase()}`, cx, y); y += W * 0.065;
  x.fillStyle = '#ffffff'; x.font = `900 ${W * 0.062}px system-ui`;
  x.fillText(a.displayName, cx, y); y += W * 0.05;
  x.fillStyle = '#c9d6e2'; x.font = `600 ${W * 0.034}px system-ui`;
  x.fillText(`${country?.flag ?? ''}  ${country ? t(country.nameKey) : a.countryCode}`, cx, y);

  y = H * 0.42;
  const stat = (label: string, value: string, big = false): void => {
    x.fillStyle = '#8ca2b8'; x.font = `600 ${W * 0.024}px system-ui`;
    x.fillText(label.toUpperCase(), cx, y); y += big ? W * 0.085 : W * 0.06;
    x.fillStyle = big ? '#4ea1ff' : '#ffffff';
    x.font = `900 ${big ? W * 0.085 : W * 0.052}px system-ui`;
    x.fillText(value, cx, y); y += W * 0.075;
  };
  if (pos) stat(t('kpi.world'), `#${pos.position}`, true);
  if (pct?.percentile != null) stat(t('kpi.percentile'), fmtNum(pct.percentile, 1));
  if (spi) stat('SPI', fmtNum(spi.value, 1));
  if (pb != null) stat(t('kpi.pb'), fmtVal(pb));

  x.fillStyle = '#6b7f93'; x.font = `600 ${W * 0.022}px system-ui`;
  x.fillText(t('common.demoBadge'), cx, H - W * 0.09);
  x.fillStyle = '#ffffff'; x.font = `900 ${W * 0.03}px system-ui`;
  x.fillText('SKATE IQ', cx, H - W * 0.045);

  const link = document.createElement('a');
  link.download = `skateiq_${a.displayName.replace(/\s+/g, '_')}_${format.replace(':', 'x')}.png`;
  link.href = cv.toDataURL('image/png');
  link.click();
}
