import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MonogramSLX } from '@/components/MonogramLogo';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { MagneticPull } from '@/components/MagneticPull';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About SHLAVEX — An elite global institution built around people, strategy, quantitative research, technology, and engineering.',
};

const ABOUT_EMBLEMS = [
  // 01: Who We Are (Hexagonal Apex Reticle)
  <svg key="1" className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <polygon points="16,3 28,10 28,22 16,29 4,22 4,10" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="16" cy="16" r="2" fill="#E8E2D5" />
  </svg>,
  // 02: What We Build (Deterministic Matrix Grid)
  <svg key="2" className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="4" x2="12" y2="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
    <line x1="20" y1="4" x2="20" y2="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
    <line x1="4" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
    <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
    <circle cx="16" cy="16" r="2.5" fill="#E8E2D5" />
  </svg>,
  // 03: How We Think (Empirical Vector Compass)
  <svg key="3" className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" />
    <polyline points="16,4 20,16 16,28 12,16 16,4" stroke="#E8E2D5" strokeWidth="1.2" fill="#E8E2D5" fillOpacity="0.15" />
    <circle cx="16" cy="16" r="2" fill="white" />
  </svg>,
  // 04: How We Work (Sovereign Team Rhombus)
  <svg key="4" className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <polygon points="16,2 30,16 16,30 2,16" stroke="currentColor" strokeWidth="1.2" />
    <polygon points="16,8 24,16 16,24 8,16" stroke="#E8E2D5" strokeWidth="1" fill="#E8E2D5" fillOpacity="0.1" />
    <circle cx="16" cy="16" r="2" fill="#E8E2D5" />
  </svg>,
  // 05: Where We Are Going (Multi-Decade Horizon Orbit)
  <svg key="5" className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="20" rx="14" ry="7" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="2" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="0.8" />
    <line x1="16" y1="6" x2="16" y2="20" stroke="#E8E2D5" strokeWidth="1.2" />
    <circle cx="16" cy="6" r="2.5" fill="#E8E2D5" />
  </svg>,
];

export default function AboutPage() {
  const sections = [
    {
      number: '01',
      title: 'WHO WE ARE',
      tagline: 'AN INSTITUTION OF INTELLECTUAL CAPITAL',
      content:
        'SHLAVEX is a private, global organization operating at the convergence of quantitative finance, distributed computing, and systematic strategy. We are not defined by temporary trends or retail sentiment; we are defined by the caliber of our people and the permanence of our mathematical convictions.',
      highlight: 'Built from first principles to survive every market cycle.',
    },
    {
      number: '02',
      title: 'WHAT WE BUILD',
      tagline: 'DETERMINISTIC SYSTEMS & EMPIRICAL MODELS',
      content:
        'We engineer sub-millisecond execution engines, distributed research computing grids, stochastic statistical models, and autonomous risk management frameworks. Every system we deploy is designed for absolute fault tolerance under extraordinary market volatility.',
      highlight: 'Hardware, software, and mathematics operating in seamless synchronization.',
    },
    {
      number: '03',
      title: 'HOW WE THINK',
      tagline: 'EMPIRICAL SKEPTICISM & MATHEMATICAL RIGOR',
      content:
        'We reject speculation and narrative bias. At SHLAVEX, a hypothesis has no standing until it survives adversarial backtesting, out-of-sample statistical verification, and extreme scenario stress testing. We prize falsifiability over optimism.',
      highlight: 'Truth in markets is revealed through data, not intuition.',
    },
    {
      number: '04',
      title: 'HOW WE WORK',
      tagline: 'DISCIPLINED AUTONOMY & RADICAL COLLABORATION',
      content:
        'Small, sovereign teams of researchers, engineers, and risk officers operate with autonomy within clearly bounded risk mandates. Peer review is relentless, constructive, and uncompromising. Hierarchy exists for governance, not to stifle intellectual merit.',
      highlight: 'High talent density governed by zero-tolerance risk.',
    },
    {
      number: '05',
      title: 'WHERE WE ARE GOING',
      tagline: 'A MULTI-GENERATIONAL HORIZON',
      content:
        'We build for the next quarter-century, not the next quarter. As financial markets become increasingly algorithmic and technological paradigms transform, SHLAVEX continues to compound its research methodologies, computational assets, and leadership culture.',
      highlight: 'Preserving capital and compounding intelligence across decades.',
    },
  ];

  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="pb-16 border-b border-white/10 mb-20">
          <SectionHeader
            number="CANON"
            category="INSTITUTIONAL PROFILE"
            title="ABOUT SHLAVEX."
            subtitle="Founded with a commitment to mathematical exactitude, systematic risk governance, and exceptional talent density."
            className="mb-0"
          />
        </div>

        {/* 5 Core Editorial Sections */}
        <div className="space-y-16 sm:space-y-24">
          {sections.map((sec, idx) => (
            <div
              key={sec.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pb-16 sm:pb-24 border-b border-white/10 items-start"
            >
              {/* Left Column: Number, Title, Tagline */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs font-mono tracking-mega text-shlavex-silver/70 mb-4">
                  <span>SECTION</span>
                  <span className="text-[#E8E2D5] font-medium">{'//'} {sec.number}</span>
                  <div className="ml-auto p-2 border border-white/15 bg-[#0C0C0C] corner-ticks shadow-sm">
                    {ABOUT_EMBLEMS[idx]}
                  </div>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-white uppercase tracking-wider">
                  {sec.title}
                </h2>

                <div className="mt-3 text-xs font-mono tracking-widest text-[#E8E2D5] uppercase">
                  {sec.tagline}
                </div>
              </div>

              {/* Right Column: Concise Content & Highlight Card */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-[#C4BEB4] font-sans font-light leading-relaxed">
                  {sec.content}
                </p>

                <div className="p-7 sm:p-8 bg-[#0A0A09] border-l-2 border-shlavex-champagne corner-ticks text-xs font-mono tracking-widest text-[#E8E2D5] uppercase shadow-md">
                  {sec.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Institutional Callout */}
        <div className="mt-20 p-8 sm:p-14 bg-[#0A0A09] border border-white/10 corner-ticks flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div>
            <div className="flex items-center gap-3 text-white mb-2">
              <MonogramSLX size={22} />
              <span className="font-serif text-xl sm:text-2xl uppercase tracking-wider font-light">
                EXPLORE THE ARCHITECTURE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#C4BEB4] font-sans max-w-xl font-light leading-relaxed">
              Review our specialized operational divisions and the exceptional individuals leading our research, trading, and engineering mandates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <MagneticPull>
              <Link
                href="/people"
                className="luxury-btn"
              >
                <span>THE PEOPLE</span>
                <ArrowRight size={14} className="text-[#E8E2D5]" />
              </Link>
            </MagneticPull>
            <Link
              href="/departments"
              className="py-3.5 px-6 border border-white/20 hover:border-[#E8E2D5]/60 text-xs font-mono tracking-widest uppercase transition-colors text-white hover:text-[#E8E2D5]"
            >
              <span>THE DEPARTMENTS</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
