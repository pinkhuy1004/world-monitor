const buildVariant = (() => {
  try {
    return import.meta.env?.VITE_VARIANT || 'malaysia';
  } catch {
    return 'malaysia';
  }
})();

export const SITE_VARIANT: string = (() => {
  if (typeof window === 'undefined') return buildVariant;

  const isTauri = '__TAURI_INTERNALS__' in window || '__TAURI__' in window;
  if (isTauri) {
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'commodity' || stored === 'malaysia') return stored;
    return buildVariant;
  }

  const h = location.hostname;
  if (h.startsWith('world.')) return 'full';
  if (h.startsWith('tech.')) return 'tech';
  if (h.startsWith('finance.')) return 'finance';
  if (h.startsWith('happy.')) return 'happy';
  if (h.startsWith('commodity.')) return 'commodity';
  if (h.startsWith('malaysia.')) return 'malaysia';

  // Check localStorage fallback on any domain (e.g. preview/staging deployments) when no subdomain is matched
  const stored = localStorage.getItem('worldmonitor-variant');
  if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'commodity' || stored === 'malaysia') {
    return stored;
  }

  return 'malaysia';
})();
