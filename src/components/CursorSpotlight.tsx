'use client';

import React, { useEffect, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;

    const render = () => {
      if (spotlight) {
        spotlight.style.setProperty('--cursor-x', `${targetX}px`);
        spotlight.style.setProperty('--cursor-y', `${targetY}px`);
        spotlight.style.opacity = '1';
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    const handleMouseLeave = () => {
      if (spotlight) {
        spotlight.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-700 ease-out will-change-[background]"
      style={{
        background: `radial-gradient(700px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(232, 226, 213, 0.038), transparent 75%)`,
      }}
      aria-hidden="true"
    />
  );
};
