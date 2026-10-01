import React from 'react';
import Link from 'next/link';
import { PHILOSOPHY_PRINCIPLES } from '@/data/philosophy';
import { ArrowRight } from 'lucide-react';
import { MagneticPull } from './MagneticPull';

export const PhilosophySection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    // 01: Precision
    '01': (
      <svg className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="2.5" fill="#E8E2D5" />
        <line x1="16" y1="0" x2="16" y2="7" stroke="currentColor" strokeWidth="1" />
        <line x1="16" y1="25" x2="16" y2="32" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    // 02: Discipline
    '02': (
      <svg className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
        <polygon points="16,2 30,8 30,22 16,30 2,22 2,8" stroke="currentColor" strokeWidth="1.2" />
        <polygon points="16,8 24,12 24,20 16,24 8,20 8,12" stroke="#E8E2D5" strokeWidth="1" fill="#E8E2D5" fillOpacity="0.1" />
        <circle cx="16" cy="16" r="2" fill="#E8E2D5" />
      </svg>
    ),
    // 03: Research
    '03': (
      <svg className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" transform="rotate(-30 16 16)" />
        <line x1="5" y1="5" x2="27" y2="27" stroke="#E8E2D5" strokeWidth="1.2" />
        <circle cx="27" cy="27" r="2" fill="#E8E2D5" />
        <circle cx="16" cy="16" r="2.5" fill="white" />
      </svg>
    ),
    // 04: Adaptation
    '04': (
      <svg className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
        <path d="M 2 16 Q 9 4, 16 16 T 30 16" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 2 16 Q 9 28, 16 16 T 30 16" stroke="#E8E2D5" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
        <circle cx="16" cy="16" r="2" fill="#E8E2D5" />
      </svg>
    ),
    // 05: Execution
    '05': (
      <svg className="w-5 h-5 text-[#E8E2D5]" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" />
        <polyline points="16,6 16,16 23,16" stroke="#E8E2D5" strokeWidth="1.5" strokeLinecap="square" />
        <polygon points="27,16 31,16 29,12" fill="#E8E2D5" />
        <circle cx="16" cy="16" r="2.5" fill="white" />
      </svg>
    ),
  };

  return (
    <div className="w-full">
      {/* 5 Architectural Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
          return (
            <div
              key={principle.id}
              className="bg-[#050505] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#090909] transition-all duration-500 group relative overflow-hidden card-perspective"
            >
              {/* Millimeter graduated caliper scale on top edge */}
              <div className="absolute top-0 left-0 right-0 h-1.5 flex justify-between px-3 opacity-30 group-hover:opacity-75 transition-opacity">
                {[...Array(12)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-px bg-[#E8E2D5] ${i % 3 === 0 ? 'h-1.5' : 'h-1'}`}
                  />
                ))}
              </div>

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xs text-[#E8E2D5] font-light">
                      {['I', 'II', 'III', 'IV', 'V'][index]}
                    </span>
                    <span className="text-white/20 text-xs font-mono">•</span>
                    <span className="font-mono text-xs tracking-mega text-shlavex-silver/70 group-hover:text-[#E8E2D5] transition-colors">
                      PILLAR {'//'} {principle.number}
                    </span>
                  </div>
                  <div className="p-2.5 border border-white/10 bg-[#0D0D0D] group-hover:border-[#E8E2D5]/40 transition-colors shadow-sm">
                    {iconMap[principle.number]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal uppercase tracking-wider mb-2 group-hover:text-[#F5F2EB] transition-colors">
                  {principle.title}
                </h3>

                {/* Subtitle */}
                <div className="text-[10px] font-mono tracking-mega text-shlavex-silver uppercase mb-6">
                  {principle.subtitle}
                </div>

                {/* Statement */}
                <p className="font-editorial italic text-base sm:text-lg text-[#F4F4F4] font-light leading-relaxed mb-8">
                  &ldquo;{principle.statement}&rdquo;
                </p>
              </div>

              {/* Metrics / Rigor Parameters */}
              <div className="pt-6 border-t border-white/5 space-y-2.5">
                {principle.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-[11px] font-mono tracking-widest"
                  >
                    <span className="text-shlavex-silver/70 text-[10px] uppercase">{m.label}</span>
                    <span className="text-shlavex-silver uppercase group-hover:text-[#E8E2D5] transition-colors">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* 6th Card: Institutional Synthesis Callout */}
        <div className="bg-[#0B0B0B] p-8 sm:p-10 flex flex-col justify-between border border-white/5 relative corner-ticks">
          <div>
            <div className="text-[10px] font-mono tracking-mega text-[#E8E2D5] uppercase mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D5] animate-pulse" />
              SYNTHESIS {'//'} GOVERNANCE
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase tracking-wider mb-4">
              THE UNIFIED MANDATE
            </h3>
            <p className="text-xs sm:text-sm text-[#C4BEB4] font-sans font-light leading-relaxed mb-6">
              When precision, discipline, research, adaptation, and execution converge, an institution transcends cyclical volatility to establish permanent intellectual advantage.
            </p>
          </div>

          <MagneticPull className="w-full">
            <Link
              href="/philosophy"
              className="luxury-btn w-full py-3.5 px-5 text-xs font-mono tracking-widest text-[#E8E2D5] flex items-center justify-between"
            >
              <span>FULL PHILOSOPHICAL TREATISE</span>
              <ArrowRight size={14} className="text-[#E8E2D5]" />
            </Link>
          </MagneticPull>
        </div>
      </div>
    </div>
  );
};
