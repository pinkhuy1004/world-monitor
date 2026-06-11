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

import type { PanelConfig, MapLayers } from '@/types';
import { DEFAULT_MAP_LAYERS as FULL_MAP, MOBILE_DEFAULT_MAP_LAYERS as FULL_MOBILE } from './full';

export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Malaysia Map', enabled: true, priority: 1 },
  'live-news': { name: 'Live Malaysia News', enabled: true, priority: 1 },
  intel: { name: 'Malaysia Intel Feed', enabled: true, priority: 1 },
  'gdelt-intel': { name: 'Regional Intelligence', enabled: true, priority: 1 },
  cii: { name: 'Malaysia Instability', enabled: true, priority: 1 },
  cascade: { name: 'Infrastructure Cascade', enabled: true, priority: 1 },
  'strategic-risk': { name: 'Strategic Risk Overview', enabled: true, priority: 1 },
  politics: { name: 'Malaysia Politics', enabled: true, priority: 1 },
  malaysia: { name: 'Malaysia News', enabled: true, priority: 1 },
  tech: { name: 'Malaysia Technology', enabled: true, priority: 2 },
  ai: { name: 'Malaysia AI/ML', enabled: true, priority: 2 },
  finance: { name: 'Malaysia Finance', enabled: true, priority: 1 },
  energy: { name: 'Malaysia Energy', enabled: true, priority: 1 },
  gov: { name: 'Government', enabled: true, priority: 1 },
  thinktanks: { name: 'Think Tanks', enabled: true, priority: 1 },
  polymarket: { name: 'Predictions', enabled: true, priority: 1 },
  commodities: { name: 'Metals & Materials', enabled: true, priority: 1 },
  markets: { name: 'Bursa Malaysia', enabled: true, priority: 1 },
  'stock-analysis': { name: 'Stock Analysis', enabled: false, priority: 1 },
  'stock-backtest': { name: 'Backtesting', enabled: false, priority: 1 },
  'daily-market-brief': { name: 'Daily Market Brief', enabled: false, priority: 1 },
  economic: { name: 'Macro Stress', enabled: true, priority: 1 },
  crypto: { name: 'Crypto', enabled: true, priority: 2 },
  heatmap: { name: 'Sector Heatmap', enabled: true, priority: 2 },
  layoffs: { name: 'Layoffs Tracker', enabled: true, priority: 2 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 2 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: true, priority: 2 },
  stablecoins: { name: 'Stablecoins', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'climate-news': { name: 'Crisis & Climate', enabled: true, priority: 2 },
};

export const DEFAULT_MAP_LAYERS: MapLayers = {
  ...FULL_MAP,
};

export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  ...FULL_MOBILE,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'malaysia',
  description: 'Malaysia focused geopolitical intelligence dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
