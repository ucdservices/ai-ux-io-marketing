'use client';

import { useId } from 'react';

export function ThemeToggle() {
  const dropdownId = useId().replace(/:/g, '');

  return (
    <>
      <nve-icon-button
        container="flat"
        icon-name="sun"
        size="md"
        aria-label="Theme"
        popovertarget={dropdownId}
      />
      <nve-dropdown id={dropdownId} position="bottom" alignment="end">
        <nve-preferences-input
          name="theme"
          value='{ "color-scheme": "light" }'
        />
      </nve-dropdown>
    </>
  );
}
