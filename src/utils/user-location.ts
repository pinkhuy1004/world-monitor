type MapView = 'global' | 'america' | 'mena' | 'eu' | 'asia' | 'latam' | 'africa' | 'oceania' | 'malaysia';

export function resolveUserCountryCode(): Promise<string | null> {
  return Promise.resolve('MY');
}

export interface PreciseCoordinates {
  lat: number;
  lon: number;
}

export function resolvePreciseUserCoordinates(_timeout = 5000): Promise<PreciseCoordinates | null> {
  return Promise.resolve({ lat: 3.1390, lon: 101.6869 });
}

export async function resolveUserRegion(): Promise<MapView> {
  return 'malaysia';
}
