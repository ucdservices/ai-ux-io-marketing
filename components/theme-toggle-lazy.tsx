'use client';

import dynamic from 'next/dynamic';

const ThemeToggleClient = dynamic(
  () => import('@/components/theme-toggle').then((mod) => ({ default: mod.ThemeToggle })),
  {
    ssr: false,
    loading: () => <span className="theme-toggle-placeholder" aria-label="Theme" />,
  },
);

export function ThemeToggleLazy() {
  return <ThemeToggleClient />;
}
