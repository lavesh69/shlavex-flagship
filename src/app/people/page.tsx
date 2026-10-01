import React from 'react';
import type { Metadata } from 'next';
import { PeopleDirectory } from '@/components/PeopleDirectory';

export const metadata: Metadata = {
  title: 'The People',
  description:
    'The Minds Behind SHLAVEX — Explore the leaders, quantitative researchers, systems architects, and strategists steering our global institution.',
};

export default function PeoplePage() {
  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Page Header */}
        <div className="pb-12 border-b border-white/10 mb-12">
          <div className="flex items-center gap-3 text-xs font-mono tracking-mega text-shlavex-muted uppercase mb-4">
            <span className="text-white font-medium">DIRECTORY</span>
            <span className="text-shlavex-dim">{'//'}</span>
            <span>INTELLECTUAL CAPITAL</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-wider text-white">
            THE PEOPLE.
          </h1>

          <p className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-mega text-shlavex-silver">
            THE MINDS BEHIND SHLAVEX
          </p>

          <p className="mt-4 text-sm sm:text-base text-shlavex-muted font-sans font-light max-w-2xl leading-relaxed">
            SHLAVEX is fundamentally a concentration of talent: mathematicians, low-latency engineers, capital stewards, and operational experts pursuing relentless precision.
          </p>
        </div>

        {/* Core Editorial People Directory with Filters & Search */}
        <PeopleDirectory />
      </div>
    </div>
  );
}
