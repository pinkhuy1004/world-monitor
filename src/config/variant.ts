const buildVariant = (() => {
  try {
    return import.meta.env?.VITE_VARIANT || 'full';
  } catch {
    return 'full';
  }
})();

export const SITE_VARIANT: string = (() => {
  if (typeof window === 'undefined') return buildVariant;

  const queryVariant = new URLSearchParams(window.location.search).get('variant');
  if (queryVariant === 'tech' || queryVariant === 'full' || queryVariant === 'finance' || queryVariant === 'happy' || queryVariant === 'commodity' || queryVariant === 'malaysia') {
    localStorage.setItem('worldmonitor-variant', queryVariant);
    return queryVariant;
  }

  const isTauri = '__TAURI_INTERNALS__' in window || '__TAURI__' in window;
  if (isTauri) {
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'commodity' || stored === 'malaysia') return stored;
    return buildVariant;
  }

  const h = location.hostname;
  if (h.startsWith('tech.')) return 'tech';
  if (h.startsWith('finance.')) return 'finance';
  if (h.startsWith('happy.')) return 'happy';
  if (h.startsWith('commodity.')) return 'commodity';
  if (h === 'malaysiamonitor.com' || h === 'www.malaysiamonitor.com' || h.endsWith('.malaysiamonitor.com') ||
      h === 'malaysiamonitor.xyz' || h === 'www.malaysiamonitor.xyz' || h.endsWith('.malaysiamonitor.xyz')) return 'malaysia';

  const isPreview = h.endsWith('.vercel.app') || h.endsWith('.railway.app') || h.endsWith('.vercel.dev');
  if (h === 'localhost' || h === '127.0.0.1' || isPreview) {
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'commodity' || stored === 'malaysia') return stored;
    return buildVariant;
  }

  return 'full';
})();
