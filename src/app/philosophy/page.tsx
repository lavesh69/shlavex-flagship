import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PHILOSOPHY_PRINCIPLES } from '@/data/philosophy';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { MonogramSLX } from '@/components/MonogramLogo';
import { MagneticPull } from '@/components/MagneticPull';

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'Institutional Philosophy of SHLAVEX — Precision, Discipline, Research, Adaptation, and Execution.',
};

const PILLAR_EMBLEMS = [
  // 01: Precision (Vernier Caliper & Reticle)
  <svg key="1" className="w-7 h-7 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16" cy="16" r="2.5" fill="#E8E2D5" />
    <line x1="16" y1="0" x2="16" y2="7" stroke="currentColor" strokeWidth="1" />
    <line x1="16" y1="25" x2="16" y2="32" stroke="currentColor" strokeWidth="1" />
    <line x1="0" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1" />
    <line x1="25" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" />
  </svg>,
  // 02: Discipline (Bastion Shield & Risk Boundary Mesh)
  <svg key="2" className="w-7 h-7 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <polygon points="16,2 30,8 30,22 16,30 2,22 2,8" stroke="currentColor" strokeWidth="1.2" />
    <polygon points="16,8 24,12 24,20 16,24 8,20 8,12" stroke="#E8E2D5" strokeWidth="1" fill="#E8E2D5" fillOpacity="0.1" />
    <circle cx="16" cy="16" r="2" fill="#E8E2D5" />
  </svg>,
  // 03: Research (Empirical Astrolabe & Polar Vector)
  <svg key="3" className="w-7 h-7 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" transform="rotate(-30 16 16)" />
    <line x1="5" y1="5" x2="27" y2="27" stroke="#E8E2D5" strokeWidth="1.2" />
    <circle cx="27" cy="27" r="2" fill="#E8E2D5" />
    <circle cx="16" cy="16" r="2.5" fill="white" />
  </svg>,
  // 04: Adaptation (Fourier Wave & Feedback Gimbal)
  <svg key="4" className="w-7 h-7 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <path d="M 2 16 Q 9 4, 16 16 T 30 16" stroke="currentColor" strokeWidth="1.2" />
    <path d="M 2 16 Q 9 28, 16 16 T 30 16" stroke="#E8E2D5" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
    <circle cx="16" cy="16" r="2" fill="#E8E2D5" />
  </svg>,
  // 05: Execution (Impulse Vector & Escapement)
  <svg key="5" className="w-7 h-7 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" />
    <polyline points="16,6 16,16 23,16" stroke="#E8E2D5" strokeWidth="1.5" strokeLinecap="square" />
    <polygon points="27,16 31,16 29,12" fill="#E8E2D5" />
    <circle cx="16" cy="16" r="2.5" fill="white" />
  </svg>,
];

export default function PhilosophyPage() {
  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Header */}
        <div className="pb-16 border-b border-white/10 mb-20">
          <SectionHeader
            number="CANON"
            category="FOUNDATIONS"
            title="THE PHILOSOPHY."
            subtitle="Five non-negotiable principles guiding every mathematical model, algorithmic infrastructure, and capital commitment."
            className="mb-0"
          />
        </div>

        {/* 5 Pillars In-Depth Presentation */}
        <div className="space-y-24">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-20 border-b border-white/10 items-start"
            >
              {/* Left Column: Number, Title & Visual Treatment */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs font-mono tracking-mega text-shlavex-silver mb-4">
                  <span>CANONICAL PILLAR</span>
                  <span className="text-[#E8E2D5] font-medium">{'//'} {principle.number}</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 bg-[#0C0C0C] border border-white/15 corner-ticks shadow-lg">
                    {PILLAR_EMBLEMS[index]}
                  </div>
                  <h2 className="font-serif text-4xl sm:text-5xl text-white uppercase tracking-wider font-light">
                    {principle.title}
                  </h2>
                </div>

                <div className="font-mono text-xs tracking-mega text-[#E8E2D5] uppercase mt-2">
                  {principle.subtitle}
                </div>

                {/* Architectural Verification Protocol Box */}
                <div className="mt-8 p-6 bg-[#0A0A09] border border-white/15 corner-ticks text-xs font-mono">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 text-[10px] tracking-mega text-shlavex-silver uppercase">
                    <span>VERIFICATION PROTOCOL</span>
                    <span className="text-emerald-400 text-[8px] flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>NOMINAL</span>
                    </span>
                  </div>
                  <div className="space-y-2.5 text-[#C4BEB4]">
                    {principle.metrics.map((m, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px]">
                        <span className="text-shlavex-silver/70">{m.label}:</span>
                        <span className="text-white font-medium">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Statement & Deep Analytical Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <blockquote className="font-editorial italic text-xl sm:text-2xl text-white font-light uppercase tracking-wide leading-snug p-7 sm:p-9 bg-[#090909] border-l-2 border-shlavex-champagne corner-ticks relative">
                  &ldquo;{principle.statement}&rdquo;
                </blockquote>

                <div className="space-y-4 text-sm sm:text-base text-[#C4BEB4] font-sans font-light leading-relaxed">
                  {principle.narrative.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Footer */}
        <div className="mt-20 p-8 sm:p-14 bg-[#0A0A09] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 corner-ticks">
          <div>
            <div className="flex items-center gap-3 text-white mb-2">
              <MonogramSLX size={24} />
              <span className="font-serif text-xl sm:text-2xl uppercase tracking-wider font-light">
                THE UNIFIED MANDATE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#C4BEB4] font-sans font-light max-w-xl leading-relaxed">
              When precision, discipline, research, adaptation, and execution converge, an institution transcends cyclical volatility to establish permanent intellectual advantage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <MagneticPull>
              <Link href="/about" className="luxury-btn group">
                <span>READ ABOUT SHLAVEX</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
              </Link>
            </MagneticPull>
          </div>
        </div>
      </div>
    </div>
  );
}
