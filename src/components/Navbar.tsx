'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MonogramSLX } from './MonogramLogo';
import { FullscreenMenu } from './FullscreenMenu';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'PEOPLE', href: '/people' },
    { label: 'DEPARTMENTS', href: '/departments' },
    { label: 'LEADERSHIP', href: '/leadership' },
    { label: 'PHILOSOPHY', href: '/philosophy' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-[#060606]/92 backdrop-blur-xl py-3.5 border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark & Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="SHLAVEX Homepage"
          >
            <div className="text-shlavex-text group-hover:text-white transition-colors duration-300">
              <MonogramSLX size={24} />
            </div>
            <span className="font-serif tracking-[0.35em] text-sm uppercase text-shlavex-text group-hover:text-white transition-colors duration-300">
              SHLAVEX
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-xs tracking-widest font-mono">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-shlavex-muted hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-shlavex-champagne to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Menu Trigger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-[#E8E2D5] hover:text-white transition-all border border-[#E8E2D5]/35 hover:border-[#E8E2D5] px-4 py-1.5 font-mono bg-[#0B0B0B] hover:shadow-[0_0_15px_rgba(232,226,213,0.15)]"
            >
              CONTACT
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-shlavex-text hover:text-white transition-colors font-mono py-1 px-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              aria-label="Open menu"
            >
              <span className="hidden sm:inline">MENU</span>
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
