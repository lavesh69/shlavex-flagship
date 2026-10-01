import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Journal & Perspectives',
  description: 'SHLAVEX Perspectives — Monographs on quantitative research, market microstructure, and high-performance computing.',
};

const ARTICLES = [
  {
    number: '01',
    date: 'OCTOBER 2026',
    title: 'DETERMINISTIC LATENCY IN DISPERSED EXCHANGE TOPOLOGIES',
    author: 'ELENA ROSTOVA & KAI CHEN',
    summary: 'An empirical examination of network jitter across transatlantic optical routes and its systemic consequences for automated price discovery.',
    category: 'SYSTEMS ENGINEERING',
  },
  {
    number: '02',
    date: 'SEPTEMBER 2026',
    title: 'STOCHASTIC RESILIENCE: RECONCILING REGIME SHIFTS WITHOUT OVERFITTING',
    author: 'DR. MARCUS VANCE',
    summary: 'Why traditional backtesting fails in non-stationary market regimes and how out-of-sample stress boundaries preserve statistical validity.',
    category: 'QUANTITATIVE RESEARCH',
  },
  {
    number: '03',
    date: 'AUGUST 2026',
    title: 'THE GEOMETRY OF CAPITAL PRESERVATION IN EXTREME MARKET SHOCKS',
    author: 'JULIAN KAUFMAN',
    summary: 'Mathematical foundations of independent risk veto power and continuous portfolio scenario simulation under tail events.',
    category: 'RISK GOVERNANCE',
  },
];

export default function JournalPage() {
  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="pb-16 border-b border-white/10 mb-16">
          <SectionHeader
            number="PUBLICATIONS"
            category="RESEARCH"
            title="THE JOURNAL."
            subtitle="Curated institutional monographs, technical dissertations, and philosophical inquiries authored by SHLAVEX researchers."
            className="mb-0"
          />
        </div>

        <div className="border border-white/10 divide-y divide-white/10 bg-[#080808] corner-ticks">
          {ARTICLES.map((article) => (
            <div
              key={article.number}
              className="p-8 sm:p-12 hover:bg-[#0E0E0E] transition-all duration-300 group flex flex-col md:flex-row md:items-start justify-between gap-8"
            >
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-shlavex-dim">
                  <span className="text-[#E8E2D5]">MONOGRAPH // {article.number}</span>
                  <span>•</span>
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wider group-hover:text-[#F4F4F4] transition-colors">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-shlavex-muted font-sans font-light leading-relaxed">
                  {article.summary}
                </p>

                <div className="text-[11px] font-mono tracking-widest text-shlavex-silver uppercase">
                  AUTHORED BY: {article.author}
                </div>
              </div>

              <div className="self-end md:self-center shrink-0">
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-shlavex-muted group-hover:text-[#E8E2D5] uppercase transition-colors">
                  <span>READ DISSERTATION</span>
                  <ArrowUpRight size={16} className="text-[#E8E2D5]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
