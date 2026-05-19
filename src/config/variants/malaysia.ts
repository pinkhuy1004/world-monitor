import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Geopolitical-specific exports
export * from '../feeds';
export * from '../geo';
export * from '../irradiators';
export * from '../pipelines';
export * from '../ports';
export * from '../military';
export * from '../airports';
export * from '../entities';

import { DEFAULT_PANELS as FULL_DEFAULTS, DEFAULT_MAP_LAYERS as FULL_MAP, MOBILE_DEFAULT_MAP_LAYERS as FULL_MOBILE } from './full';

export const DEFAULT_PANELS = {
  ...FULL_DEFAULTS,
};

export const DEFAULT_MAP_LAYERS = {
  ...FULL_MAP,
};

export const MOBILE_DEFAULT_MAP_LAYERS = {
  ...FULL_MOBILE,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'malaysia',
  description: 'Malaysia focused geopolitical intelligence dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
