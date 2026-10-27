'use client';

import { useEffect } from 'react';

type ColorScheme = 'light' | 'dark' | 'auto';

function readScheme(): ColorScheme {
  const pref = document.querySelector('nve-preferences-input[name="theme"]') as
    | (HTMLElement & { value?: { 'color-scheme'?: ColorScheme } })
    | null;
  const scheme = pref?.value?.['color-scheme'];
  if (scheme === 'light' || scheme === 'dark' || scheme === 'auto') {
    return scheme;
  }
  return 'auto';
}

function applyTheme(scheme: ColorScheme) {
  const root = document.documentElement;
  if (scheme === 'dark') {
    root.dataset.theme = 'dark';
  } else if (scheme === 'light') {
    root.dataset.theme = 'light';
  } else {
    delete root.dataset.theme;
  }
}

export function ThemeSync() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem('vc-theme');
      if (stored === 'dark' || stored === 'light') {
        applyTheme(stored);
      }
    } catch {
      /* ignore */
    }

    const sync = () => applyTheme(readScheme());

    const timer = window.setTimeout(sync, 0);
    document.addEventListener('change', sync);
    document.addEventListener('input', sync);

    const pref = document.querySelector('nve-preferences-input[name="theme"]');
    const observer = pref ? new MutationObserver(sync) : null;
    if (pref && observer) {
      observer.observe(pref, { attributes: true, attributeFilter: ['value'] });
    }

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('change', sync);
      document.removeEventListener('input', sync);
      observer?.disconnect();
    };
  }, []);

  return null;
}
