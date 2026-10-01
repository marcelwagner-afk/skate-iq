/** Feature flags – gradual sport/feature rollout (data, not scattered ifs). */
export type FlagKey =
  | 'ARTISTIC_ENABLED' | 'SPEED_ENABLED' | 'SKATEBOARDING_ENABLED' | 'HOCKEY_ENABLED'
  | 'SKATE_AI_ENABLED' | 'TALENT_RADAR_ENABLED' | 'FEDERATION_INTELLIGENCE_ENABLED'
  | 'SHARE_CARDS_ENABLED' | 'ALERTS_ENABLED';

const DEFAULTS: Record<FlagKey, boolean> = {
  ARTISTIC_ENABLED: true,
  SPEED_ENABLED: true,                 // second reference adapter (synthetic data)
  SKATEBOARDING_ENABLED: false,
  HOCKEY_ENABLED: false,
  SKATE_AI_ENABLED: false,             // architecture only in Phase 1 (see ROADMAP)
  TALENT_RADAR_ENABLED: true,
  FEDERATION_INTELLIGENCE_ENABLED: true,
  SHARE_CARDS_ENABLED: true,
  ALERTS_ENABLED: false,               // needs backend (Phase 2)
};

const overrides = new Map<FlagKey, boolean>();
export function flag(k: FlagKey): boolean { return overrides.get(k) ?? DEFAULTS[k]; }
export function setFlag(k: FlagKey, v: boolean): void { overrides.set(k, v); }
export function allFlags(): Record<FlagKey, boolean> {
  return Object.fromEntries((Object.keys(DEFAULTS) as FlagKey[]).map(k => [k, flag(k)])) as Record<FlagKey, boolean>;
}
