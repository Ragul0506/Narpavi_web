'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import type { ReactNode } from 'react';

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.35
      }}
    >
      {children}
    </ReactLenis>
  );
}
