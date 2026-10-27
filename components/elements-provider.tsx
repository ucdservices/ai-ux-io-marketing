'use client';

import { useEffect } from 'react';

export function ElementsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void import('@/lib/register-elements');
  }, []);

  return children;
}
