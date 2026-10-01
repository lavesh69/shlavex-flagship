import React from 'react';
import Link from 'next/link';
import { MonogramSLX } from './MonogramLogo';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-shlavex-silver/90 border-t border-white/10 pt-20 pb-14 transition-colors relative corner-ticks">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Top Tier: Brand, Monogram & Cryptographic Ledger Stamp */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3.5 mb-4 text-[#F4F4F4]">
              <div className="p-1.5 border border-white/15 bg-[#0B0B0B]">
                <MonogramSLX size={26} />
              </div>
              <span className="font-serif tracking-[0.35em] text-xl uppercase font-light text-white">
                SHLAVEX
              </span>
            </div>
            <p className="text-xs uppercase font-mono tracking-widest text-[#E8E2D5] font-light">
              PRECISION BEYOND MARKETS.
            </p>
          </div>

          {/* Cryptographic Ledger Colophon Card */}
          <div className="bg-[#0A0A09] border border-white/10 p-5 max-w-lg w-full font-mono text-[10px] tracking-widest corner-ticks">
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 text-shlavex-dim">
              <span className="flex items-center gap-1.5 text-white/90">
                <Terminal size={11} className="text-[#E8E2D5]" />
                <span>ARCHITECTURAL COLOPHON</span>
              </span>
              <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LEDGER // ACTIVE</span>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-shlavex-silver/80">
              <div>
                <span className="text-shlavex-dim block text-[9px]">ROOT NODE:</span>
                <span className="text-white">ZURICH [47°22&apos;N · 8°32&apos;E]</span>
              </div>
              <div>
                <span className="text-shlavex-dim block text-[9px]">COMPUTATIONAL CYCLE:</span>
                <span className="text-white">DETERMINISTIC 24/7</span>
              </div>
              <div>
                <span className="text-shlavex-dim block text-[9px]">ATOMIC CLOCK:</span>
                <span className="text-white">UTC TABULAR SYNC</span>
              </div>
              <div>
                <span className="text-shlavex-dim block text-[9px]">SECURITY STANDARD:</span>
                <span className="text-[#E8E2D5]">FIPS 140-3 LEVEL 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: Structured Navigation Columns with Swiss Grid Separators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/5 text-xs font-mono tracking-widest">
          {/* Column 1: Institution */}
          <div className="flex flex-col space-y-3.5 md:pr-6">
            <span className="text-white uppercase tracking-mega text-[11px] mb-1 font-semibold flex items-center gap-1.5">
              <span className="text-[#E8E2D5] font-serif text-sm">01</span>
              <span>INSTITUTION</span>
            </span>
            <Link href="/about" className="text-shlavex-silver/80 hover:text-white transition-colors">
              ABOUT
            </Link>
            <Link href="/philosophy" className="text-shlavex-silver/80 hover:text-white transition-colors">
              PHILOSOPHY
            </Link>
            <Link href="/leadership" className="text-shlavex-silver/80 hover:text-white transition-colors">
              LEADERSHIP
            </Link>
            <Link href="/contact" className="text-shlavex-silver/80 hover:text-white transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Column 2: Organization */}
          <div className="flex flex-col space-y-3.5 md:px-6 md:border-l md:border-white/5">
            <span className="text-white uppercase tracking-mega text-[11px] mb-1 font-semibold flex items-center gap-1.5">
              <span className="text-[#E8E2D5] font-serif text-sm">02</span>
              <span>STRUCTURE</span>
            </span>
            <Link href="/people" className="text-shlavex-silver/80 hover:text-white transition-colors">
              PEOPLE DIRECTORY
            </Link>
            <Link href="/departments" className="text-shlavex-silver/80 hover:text-white transition-colors">
              ALL DEPARTMENTS
            </Link>
            <Link
              href="/departments/trading-quantitative-research"
              className="text-shlavex-silver/80 hover:text-white transition-colors"
            >
              QUANT RESEARCH
            </Link>
            <Link
              href="/departments/technology-engineering"
              className="text-shlavex-silver/80 hover:text-white transition-colors"
            >
              ENGINEERING
            </Link>
          </div>

          {/* Column 3: Inquiries */}
          <div className="flex flex-col space-y-3.5 md:px-6 md:border-l md:border-white/5">
            <span className="text-white uppercase tracking-mega text-[11px] mb-1 font-semibold flex items-center gap-1.5">
              <span className="text-[#E8E2D5] font-serif text-sm">03</span>
              <span>ENGAGEMENT</span>
            </span>
            <Link href="/contact?category=CAREERS" className="text-shlavex-silver/80 hover:text-white transition-colors">
              TALENT &amp; APPOINTMENTS
            </Link>
            <Link href="/contact?category=PARTNERSHIPS" className="text-shlavex-silver/80 hover:text-white transition-colors">
              INSTITUTIONAL PARTNERS
            </Link>
            <Link href="/contact?category=MEDIA" className="text-shlavex-silver/80 hover:text-white transition-colors">
              MEDIA DIALOGUE
            </Link>
            <Link href="/contact?category=GENERAL" className="text-shlavex-silver/80 hover:text-white transition-colors">
              GENERAL INQUIRY
            </Link>
          </div>

          {/* Column 4: Governance Covenants & Micro-Status Badges */}
          <div className="flex flex-col space-y-3.5 md:pl-6 md:border-l md:border-white/5">
            <span className="text-white uppercase tracking-mega text-[11px] mb-1 font-semibold flex items-center gap-1.5">
              <span className="text-[#E8E2D5] font-serif text-sm">04</span>
              <span>COVENANTS</span>
            </span>
            <div className="flex items-center justify-between text-[10px] text-shlavex-silver/70 py-0.5">
              <span>DISCLOSURE</span>
              <span className="text-[8px] px-1.5 py-0.2 bg-white/5 border border-white/10 text-[#E8E2D5] font-mono">
                TIER-1
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-shlavex-silver/70 py-0.5">
              <span>RISK PROTOCOL</span>
              <span className="text-[8px] px-1.5 py-0.2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                VETO ACTIVE
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-shlavex-silver/70 py-0.5">
              <span>COMPLIANCE</span>
              <span className="text-[8px] px-1.5 py-0.2 bg-white/5 border border-white/10 text-white font-mono">
                ISO 27001
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-shlavex-silver/70 py-0.5">
              <span>SECURITY MESH</span>
              <span className="text-[8px] px-1.5 py-0.2 bg-white/5 border border-white/10 text-shlavex-silver font-mono">
                ZERO-TRUST
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Monogram & Calibration Stamps */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 text-[11px] font-mono tracking-widest text-shlavex-silver/60 gap-4">
          <div className="flex items-center gap-3">
            <MonogramSLX size={15} />
            <span>&copy; {currentYear} SHLAVEX GLOBAL HOLDINGS. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6 text-[10px]">
            <span>EDITION 2026</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/80">AUTHENTICATED DIGITAL ARCHIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
