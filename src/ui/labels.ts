import { registry } from '../adapters/types';
import { t, getLocale } from '../core/i18n';
import type { ID } from '../core/types';
import type { Store } from '../data/store';

export function catParts(store: Store, catId: ID): { sport: string; discipline: string; category: string } {
  const info = store.categoryOf(catId);
  if (!info) return { sport: '', discipline: '', category: catId };
  const dis = info.adapter.disciplines.find(d => d.id === info.cat.disciplineId);
  return {
    sport: t(info.adapter.sport.nameKey),
    discipline: dis ? t(dis.nameKey) : '',
    category: t(info.cat.nameKey),
  };
}
export function catLabel(store: Store, catId: ID): string {
  const p = catParts(store, catId);
  return [p.discipline, p.category].filter(Boolean).join(' · ');
}
export function sportOf(catId: ID): string {
  for (const a of registry.all()) if (a.categories.some(c => c.id === catId)) return a.sport.id;
  return 'artistic';
}
export function levelKey(level: string): string {
  return ({ world: 'bench.group.world', continental: 'bench.group.continent' } as Record<string, string>)[level] ?? 'common.level';
}
export function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString(getLocale() === 'de' ? 'de-DE' : 'en-US', { month: 'short', year: 'numeric' });
}
export function allCategories(): { id: ID; label: () => string }[] {
  const out: { id: ID; label: () => string }[] = [];
  for (const a of registry.enabled()) {
    for (const c of a.categories) {
      out.push({ id: c.id, label: () => `${t(a.sport.nameKey)} · ${t(c.nameKey)}` });
    }
  }
  return out;
}
