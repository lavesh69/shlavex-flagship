'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Terminal } from 'lucide-react';
import { MonogramSLX } from './MonogramLogo';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { label: 'ABOUT', href: '/about', number: '01' },
  { label: 'PEOPLE', href: '/people', number: '02' },
  { label: 'DEPARTMENTS', href: '/departments', number: '03' },
  { label: 'LEADERSHIP', href: '/leadership', number: '04' },
  { label: 'PHILOSOPHY', href: '/philosophy', number: '05' },
  { label: 'CONTACT', href: '/contact', number: '06' },
];

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed inset-0 z-50 bg-[#060606] text-[#F4F4F4] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto relative"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Ambient Radial Illumination & Architectural Grid Lines */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_center,rgba(232,226,213,0.04),transparent_65%)]" />
          <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />
          <div className="absolute inset-y-0 right-1/4 w-[1px] bg-white/[0.02] pointer-events-none hidden md:block" />

          {/* Header row in menu */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 w-full max-w-7xl mx-auto relative z-10">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3.5 group text-shlavex-silver hover:text-white transition-colors"
            >
              <div className="p-1 border border-white/15 bg-[#0B0B0B]">
                <MonogramSLX size={24} />
              </div>
              <span className="font-serif tracking-[0.35em] text-sm uppercase">SHLAVEX</span>
            </Link>

            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-shlavex-silver hover:text-white transition-colors py-2 px-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-white border border-white/10 hover:border-white/30 bg-[#0A0A09]"
              aria-label="Close navigation menu"
            >
              <span>CLOSE</span>
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>

          {/* Core Menu List */}
          <div className="my-auto py-12 w-full max-w-7xl mx-auto relative z-10">
            <nav className="flex flex-col space-y-4 sm:space-y-6">
              {MENU_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 * index,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group relative flex items-baseline justify-between py-3 sm:py-5 border-b border-white/5 hover:border-[#E8E2D5]/40 transition-all duration-500 overflow-hidden"
                    >
                      {/* Background Kinetic Watermark Number */}
                      <span className="absolute right-8 top-1/2 -translate-y-1/2 font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.02] group-hover:text-[#E8E2D5]/[0.08] transition-all duration-500 pointer-events-none select-none">
                        {item.number}
                      </span>

                      <div className="flex items-baseline gap-4 sm:gap-8 relative z-10">
                        <span className="text-xs font-mono tracking-widest text-[#E8E2D5] group-hover:text-white transition-colors">
                          {item.number}
                        </span>
                        <span
                          className={`font-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] transition-all duration-500 group-hover:translate-x-3 ${
                            isActive ? 'text-white font-normal' : 'text-shlavex-silver group-hover:text-white'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={24}
                        className="text-[#E8E2D5]/70 group-hover:text-[#E8E2D5] transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Footer row inside menu */}
          <div className="border-t border-white/10 pt-6 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs tracking-widest text-shlavex-silver/80 uppercase font-mono relative z-10">
            <div className="flex items-center gap-3">
              <MonogramSLX size={16} />
              <span>PRECISION BEYOND MARKETS</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-400">
              <Terminal size={12} className="text-[#E8E2D5]" />
              <span>ENCRYPTED DIRECTORY SESSION // ACTIVE</span>
            </div>
            <div className="text-[10px]">
              <span>&copy; {new Date().getFullYear()} SHLAVEX GLOBAL HOLDINGS</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
