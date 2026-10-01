'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonogramSLX } from './MonogramLogo';

export const OpeningCurtain: React.FC = () => {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    // Check if user already saw opening this session
    const hasSeen = sessionStorage.getItem('shlavex_flagship_intro_seen');
    if (hasSeen) {
      setShowCurtain(false);
      return;
    }

    // Dismiss curtain after 1.5s
    const timer = setTimeout(() => {
      setShowCurtain(false);
      sessionStorage.setItem('shlavex_flagship_intro_seen', 'true');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showCurtain && (
        <div
          className="fixed inset-0 z-50 pointer-events-none select-none"
          role="status"
          aria-label="Initializing SHLAVEX Digital Flagship"
        >
          {/* Top Aperture Vault Leaf */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const },
            }}
            className="fixed top-0 left-0 right-0 h-1/2 bg-[#060606] border-b border-[#E8E2D5]/30 flex flex-col justify-end items-center pb-2 overflow-hidden"
          >
            {/* Top Shutter Horizon Hairline & Coordinate Stamp */}
            <div className="w-full flex justify-between px-6 text-[8px] font-mono tracking-widest text-shlavex-silver/40 uppercase">
              <span>VAULT APERTURE {'//'} NORTH-AXIS</span>
              <span>COORD: 47°22&apos;N</span>
            </div>
          </motion.div>

          {/* Bottom Aperture Vault Leaf */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const },
            }}
            className="fixed bottom-0 left-0 right-0 h-1/2 bg-[#060606] border-t border-[#E8E2D5]/30 flex flex-col justify-start items-center pt-2 overflow-hidden"
          >
            {/* Bottom Shutter Horizon Hairline & Coordinate Stamp */}
            <div className="w-full flex justify-between px-6 text-[8px] font-mono tracking-widest text-shlavex-silver/40 uppercase">
              <span>VAULT APERTURE {'//'} SOUTH-AXIS</span>
              <span>COORD: 8°32&apos;E</span>
            </div>
          </motion.div>

          {/* Center Brand Identity & Optical Telemetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 flex flex-col items-center justify-center p-8 z-50 text-center"
          >
            <div className="p-4 border border-white/15 bg-[#0B0B0B] mb-6 corner-ticks shadow-2xl">
              <MonogramSLX size={46} />
            </div>

            <div className="font-serif text-3xl sm:text-4xl text-white tracking-[0.4em] uppercase font-light pl-[0.4em]">
              SHLAVEX
            </div>

            <div className="mt-3 text-[10px] font-mono tracking-ultra text-[#E8E2D5] uppercase font-light">
              PRECISION BEYOND MARKETS
            </div>

            <div className="mt-6 flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[9px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-shlavex-silver">INSTITUTIONAL CORE INITIALIZED</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
