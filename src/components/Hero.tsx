'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MonogramSLX } from './MonogramLogo';
import { GlobalChronometer } from './GlobalChronometer';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Multi-plane continuous kinematic parallax (Rule: Velocity Scrubbing)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const containerVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-6 pt-32 pb-12 overflow-hidden bg-[#060606]"
    >
      {/* Background Architectural Atmosphere with Plane 1 Parallax */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Monolithic dark abstract background image */}
        <motion.div
          className="absolute -inset-10 bg-cover bg-center opacity-25 mix-blend-luminosity filter contrast-125 brightness-70 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop')`,
            y: bgY,
          }}
        />

        {/* Subtle architectural vertical hairlines with precision coordinate ticks */}
        <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/[0.03]" />
        <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white/[0.04]" />
        <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/[0.03]" />
        
        {/* Horizontal millimeter alignment lines */}
        <div className="absolute inset-x-0 top-1/3 h-[1px] bg-white/[0.02]" />
        <div className="absolute inset-x-0 top-2/3 h-[1px] bg-white/[0.02]" />

        {/* Pure obsidian vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606] opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-transparent to-[#060606] opacity-85" />
      </div>

      {/* Top subtle metadata mark with coordinate stamp */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 flex items-center gap-4 text-[10px] font-mono tracking-ultra text-shlavex-silver/90 uppercase"
      >
        <span>OFFICIAL DIGITAL FLAGSHIP</span>
        <span className="text-white/20">{'//'}</span>
        <span className="text-[#E8E2D5]">LAT. 47°22&apos;N · LONG. 8°32&apos;E</span>
      </motion.div>

      {/* Main Core Identity: SLX -> SHLAVEX -> PRECISION BEYOND MARKETS with Plane 2 Parallax */}
      <motion.div
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center my-auto"
      >
        {/* Step 1: SLX Monogram */}
        <motion.div variants={itemVariants} className="mb-8 text-shlavex-text">
          <div className="p-3.5 border border-white/10 bg-[#0B0B0B]/90 backdrop-blur-md shadow-2xl corner-ticks">
            <MonogramSLX size={44} />
          </div>
        </motion.div>

        {/* Step 2: SHLAVEX Wordmark with MASKED Reveal (Rule 11) */}
        <div className="overflow-hidden mb-6 py-2">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase tracking-[0.18em] sm:tracking-[0.24em] text-white leading-none select-none pl-[0.18em] sm:pl-[0.24em]"
          >
            SHLAVEX
          </motion.h1>
        </div>

        {/* Step 3: PRECISION BEYOND MARKETS */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-shlavex-champagne/60 to-transparent mb-6" />
          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-mega text-shlavex-silver font-light max-w-2xl px-4">
            PRECISION BEYOND MARKETS.
          </p>
          <p className="mt-3 text-xs tracking-widest text-[#C8C2B8] font-sans font-light max-w-md">
            People. Strategy. Quantitative Research. High-Performance Engineering.
          </p>
        </motion.div>
      </motion.div>

      {/* Step 4: SCROLL TO EXPLORE & Bespoke Haute Horlogerie Needle */}
      <motion.div style={{ opacity: bottomOpacity }} className="relative z-10 w-full flex flex-col items-center gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col items-center gap-3 text-shlavex-silver hover:text-white transition-colors cursor-pointer group select-none"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.95,
              behavior: 'smooth',
            });
          }}
        >
          <span className="text-[9px] font-mono tracking-ultra uppercase text-shlavex-silver/80 group-hover:text-[#E8E2D5] transition-colors">
            SCROLL TO EXPLORE
          </span>
          {/* Haute Horlogerie Linear Needle Pulse (Replacing cartoon bounce) */}
          <div className="relative w-[1px] h-10 bg-white/10 overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-shlavex-champagne to-transparent"
            />
          </div>
        </motion.div>

        {/* Precision Live Chronometer Bar */}
        <div className="w-full max-w-7xl pt-4">
          <GlobalChronometer />
        </div>
      </motion.div>
    </section>
  );
};
