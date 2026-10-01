import React from 'react';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Archive',
  description: 'SHLAVEX Historical Archive — Chronology of institutional milestones and technological architectures.',
};

const ARCHIVE_RECORDS = [
  {
    year: '2026',
    title: 'OFFICIAL DIGITAL FLAGSHIP COMMISSION',
    detail: 'Release of the unified SHLAVEX institutional presence and architectural people directory.',
  },
  {
    year: '2025',
    title: 'EXPANSION OF LOW-LATENCY INFRASTRUCTURE',
    detail: 'Deployment of sub-microsecond optical networking nodes across key global liquidity venues.',
  },
  {
    year: '2024',
    title: 'INDEPENDENT RISK MANDATE CODIFICATION',
    detail: 'Enactment of autonomous risk veto power across all quantitative capital allocation strategies.',
  },
  {
    year: '2023',
    title: 'ESTABLISHMENT OF CORE QUANTITATIVE LABS',
    detail: 'Inauguration of empirical stochastic modeling division under Founder Lavesh Dobriyal and Co-Founder Shreya, led by Chief Executive Officer Akki Raj.',
  },
];

export default function ArchivePage() {
  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="pb-16 border-b border-white/10 mb-16">
          <SectionHeader
            number="CHRONOLOGY"
            category="RECORDS"
            title="THE ARCHIVE."
            subtitle="An immutable ledger documenting institutional milestones, computational evolutions, and foundational mandates."
            className="mb-0"
          />
        </div>

        <div className="space-y-8">
          {ARCHIVE_RECORDS.map((record) => (
            <div
              key={record.year}
              className="p-8 bg-[#080808] border border-white/10 hover:border-champagne-subtle transition-all duration-300 corner-ticks flex flex-col md:flex-row md:items-baseline justify-between gap-6 group"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xl sm:text-2xl text-white font-medium group-hover:text-[#E8E2D5] transition-colors">
                  {record.year}
                </span>
                <span className="text-white/20 font-mono">/</span>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-white uppercase tracking-wider group-hover:text-[#F4F4F4] transition-colors">
                    {record.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-shlavex-muted font-sans font-light leading-relaxed max-w-2xl">
                    {record.detail}
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-mono tracking-widest text-shlavex-dim uppercase self-end md:self-auto group-hover:text-[#E8E2D5]/70 transition-colors">
                CLASSIFIED ARCHIVAL ENTRY
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
