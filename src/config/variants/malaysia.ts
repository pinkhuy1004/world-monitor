import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';
import { DEFAULT_PANELS as FULL_PANELS, DEFAULT_MAP_LAYERS, MOBILE_DEFAULT_MAP_LAYERS } from './full';

export * from './base';

export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: FULL_PANELS['map']!,
  'live-news': FULL_PANELS['live-news']!,
  insights: FULL_PANELS['insights']!,
  'strategic-posture': FULL_PANELS['strategic-posture']!,
  cii: FULL_PANELS['cii']!,
  'strategic-risk': FULL_PANELS['strategic-risk']!,
  markets: FULL_PANELS['markets']!,
  politics: FULL_PANELS['politics']!,
  tech: FULL_PANELS['tech']!,
  finance: FULL_PANELS['finance']!,
  intel: FULL_PANELS['intel']!,
  gov: FULL_PANELS['gov']!,
  security: { name: 'panels.security', enabled: true, priority: 1 },
  economic: FULL_PANELS['economic']!,
  'consumer-prices': { name: 'panels.consumerPrices', enabled: true, priority: 1 },
  'trade-policy': FULL_PANELS['trade-policy']!,
  'supply-chain': FULL_PANELS['supply-chain']!,
  'energy-complex': FULL_PANELS['energy-complex']!,
  'oil-inventories': FULL_PANELS['oil-inventories']!,
  stablecoins: FULL_PANELS['stablecoins']!,
  'etf-flows': FULL_PANELS['etf-flows']!,
  'yield-curve': { name: 'panels.yieldCurve', enabled: true, priority: 1 },
  commodities: FULL_PANELS['commodities']!,
  malaysia: { name: 'panels.malaysia', enabled: true, priority: 1 },
  gov_my: { name: 'panels.gov_my', enabled: true, priority: 2 },
  business_my: { name: 'panels.business_my', enabled: true, priority: 2 },
  igaming: { name: 'panels.igaming', enabled: true, priority: 3 },
  social_my: { name: 'panels.social_my', enabled: true, priority: 3 },
  sports: { name: 'panels.sports', enabled: true, priority: 4 },
  'live-webcams': FULL_PANELS['live-webcams']!,
};

export const MALAYSIA_MAP_LAYERS: MapLayers = {
  ...DEFAULT_MAP_LAYERS,
  military: true,
  natural: true,
  webcams: true,
  cyberThreats: true,
  outages: false,
  resilienceScore: false,
};

export const MALAYSIA_MOBILE_MAP_LAYERS: MapLayers = {
  ...MOBILE_DEFAULT_MAP_LAYERS,
  military: true,
  natural: true,
  webcams: true,
  cyberThreats: true,
};

export const malaysia: VariantConfig = {
  name: 'malaysia',
  description: 'Malaysia intelligence dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: MALAYSIA_MAP_LAYERS,
  mobileMapLayers: MALAYSIA_MOBILE_MAP_LAYERS,
  brandColor: '#CC0001',
  brandAccent: '#003C8F',
  mapCenter: { lat: 4.21, lon: 101.97 },
  mapZoom: 6,
};
