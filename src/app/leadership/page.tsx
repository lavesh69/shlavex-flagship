import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getLeadershipMembers } from '@/data/team';
import { PersonCard } from '@/components/PersonCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { MonogramSLX } from '@/components/MonogramLogo';
import { MagneticPull } from '@/components/MagneticPull';

export const metadata: Metadata = {
  title: 'Executive Leadership',
  description:
    'Executive Leadership of SHLAVEX — Founded by Lavesh Dobriyal, Co-Founded by Shreya, and led by Chief Executive Officer Akki Raj.',
};

export default function LeadershipPage() {
  const leadershipMembers = getLeadershipMembers();

  // Highlight Founder, CEO, and Co-Founder
  const founder = leadershipMembers.find((m) => m.slug === 'lavesh-dobriyal');
  const ceo = leadershipMembers.find((m) => m.slug === 'akki-raj');
  const cofounder = leadershipMembers.find((m) => m.slug === 'shreya');
  const executiveOfficers = leadershipMembers.filter(
    (m) => m.slug !== 'lavesh-dobriyal' && m.slug !== 'akki-raj' && m.slug !== 'shreya'
  );

  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Header */}
        <div className="pb-16 border-b border-white/10 mb-20">
          <SectionHeader
            number="GOVERNANCE"
            category="STEWARDSHIP"
            title="EXECUTIVE LEADERSHIP."
            subtitle="Executive stewardship provides institutional continuity, long-term capital allocation, and unwavering adherence to mathematical discipline across all global operating divisions."
            className="mb-0"
          />
        </div>

        {/* Primary Leadership Profiles: Founder, CEO, Co-Founder */}
        <div className="space-y-28">
          {/* 01: LAVESH DOBRIYAL — FOUNDER */}
          {founder && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-24 border-b border-white/10">
              <div className="lg:col-span-5 relative">
                <div className="gallery-frame corner-ticks shadow-2xl card-perspective layer-depth-base">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0A09] border border-white/10">
                    <Image
                      src={founder.portrait}
                      alt={founder.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out studio-portrait-grade"
                    />
                    <div className="portrait-vignette" />
                    <div className="absolute top-3 left-3 bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#E8E2D5] border border-champagne-subtle shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                      FOUNDER
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/30">
                      <MonogramSLX size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="text-[10px] font-mono tracking-ultra text-[#E8E2D5] uppercase">
                  EXECUTIVE STEWARDSHIP {'//'} 01
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-white uppercase tracking-wider font-light">
                  {founder.name}
                </h2>

                <div className="font-mono text-xs sm:text-sm tracking-widest text-shlavex-silver uppercase">
                  {founder.position} — {founder.department}
                </div>

                <p className="text-sm sm:text-base text-[#C4BEB4] font-sans font-light leading-relaxed">
                  {founder.biography}
                </p>

                {/* Haute Horlogerie Philosophy Quote Block with Monogram Watermark */}
                <div className="p-8 sm:p-10 bg-[#0A0A09] border-l-2 border-shlavex-champagne relative corner-ticks overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 text-white/[0.025] pointer-events-none select-none">
                    <MonogramSLX size={120} />
                  </div>
                  <span className="text-[9px] font-mono tracking-ultra text-[#E8E2D5] uppercase block mb-2 relative z-10">
                    FOUNDER MANDATE
                  </span>
                  <blockquote className="font-editorial italic text-xl sm:text-2xl text-white font-light uppercase tracking-wide leading-relaxed relative z-10">
                    &ldquo;{founder.philosophy}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-2">
                  <MagneticPull>
                    <Link
                      href={`/people/${founder.slug}`}
                      className="luxury-btn group"
                    >
                      <span>VIEW EXECUTIVE DOSSIER</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                    </Link>
                  </MagneticPull>
                </div>
              </div>
            </div>
          )}

          {/* 02: AKKI RAJ — CEO */}
          {ceo && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-24 border-b border-white/10">
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                <div className="gallery-frame corner-ticks shadow-2xl card-perspective layer-depth-base">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0A09] border border-white/10">
                    <Image
                      src={ceo.portrait}
                      alt={ceo.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out studio-portrait-grade"
                    />
                    <div className="portrait-vignette" />
                    <div className="absolute top-3 left-3 bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#E8E2D5] border border-champagne-subtle shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                      CHIEF EXECUTIVE OFFICER
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/30">
                      <MonogramSLX size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                <div className="text-[10px] font-mono tracking-ultra text-[#E8E2D5] uppercase">
                  EXECUTIVE STEWARDSHIP {'//'} 02
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-white uppercase tracking-wider font-light">
                  {ceo.name}
                </h2>

                <div className="font-mono text-xs sm:text-sm tracking-widest text-shlavex-silver uppercase">
                  {ceo.position} — {ceo.department}
                </div>

                <p className="text-sm sm:text-base text-[#C4BEB4] font-sans font-light leading-relaxed">
                  {ceo.biography}
                </p>

                <div className="p-8 sm:p-10 bg-[#0A0A09] border-l-2 border-shlavex-champagne relative corner-ticks overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 text-white/[0.025] pointer-events-none select-none">
                    <MonogramSLX size={120} />
                  </div>
                  <span className="text-[9px] font-mono tracking-ultra text-[#E8E2D5] uppercase block mb-2 relative z-10">
                    CHIEF EXECUTIVE MANDATE
                  </span>
                  <blockquote className="font-editorial italic text-xl sm:text-2xl text-white font-light uppercase tracking-wide leading-relaxed relative z-10">
                    &ldquo;{ceo.philosophy}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-2">
                  <MagneticPull>
                    <Link
                      href={`/people/${ceo.slug}`}
                      className="luxury-btn group"
                    >
                      <span>VIEW EXECUTIVE DOSSIER</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                    </Link>
                  </MagneticPull>
                </div>
              </div>
            </div>
          )}

          {/* 03: SHREYA — CO-FOUNDER */}
          {cofounder && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-24 border-b border-white/10">
              <div className="lg:col-span-5 relative">
                <div className="gallery-frame corner-ticks shadow-2xl card-perspective layer-depth-base">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0A09] border border-white/10">
                    <Image
                      src={cofounder.portrait}
                      alt={cofounder.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out studio-portrait-grade"
                    />
                    <div className="portrait-vignette" />
                    <div className="absolute top-3 left-3 bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#E8E2D5] border border-champagne-subtle shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                      CO-FOUNDER
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/30">
                      <MonogramSLX size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="text-[10px] font-mono tracking-ultra text-[#E8E2D5] uppercase">
                  EXECUTIVE STEWARDSHIP {'//'} 03
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-white uppercase tracking-wider font-light">
                  {cofounder.name}
                </h2>

                <div className="font-mono text-xs sm:text-sm tracking-widest text-shlavex-silver uppercase">
                  {cofounder.position} — {cofounder.department}
                </div>

                <p className="text-sm sm:text-base text-[#C4BEB4] font-sans font-light leading-relaxed">
                  {cofounder.biography}
                </p>

                <div className="p-8 sm:p-10 bg-[#0A0A09] border-l-2 border-shlavex-champagne relative corner-ticks overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 text-white/[0.025] pointer-events-none select-none">
                    <MonogramSLX size={120} />
                  </div>
                  <span className="text-[9px] font-mono tracking-ultra text-[#E8E2D5] uppercase block mb-2 relative z-10">
                    CO-FOUNDER MANDATE
                  </span>
                  <blockquote className="font-editorial italic text-xl sm:text-2xl text-white font-light uppercase tracking-wide leading-relaxed relative z-10">
                    &ldquo;{cofounder.philosophy}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-2">
                  <MagneticPull>
                    <Link
                      href={`/people/${cofounder.slug}`}
                      className="luxury-btn group"
                    >
                      <span>VIEW EXECUTIVE DOSSIER</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                    </Link>
                  </MagneticPull>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Senior Executive Committee (Now Unified with PersonCard 2.5D Layered Depth) */}
        {executiveOfficers.length > 0 && (
          <div className="mt-28">
            <div className="pb-8 border-b border-white/10 mb-12">
              <span className="text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase">
                DIVISIONAL LEADERSHIP
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white uppercase tracking-wider mt-1">
                SENIOR EXECUTIVE COMMITTEE
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {executiveOfficers.map((member) => (
                <PersonCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Institutional Principles Banner */}
        <div className="mt-24 p-8 sm:p-12 bg-[#0A0A09] border border-white/10 corner-ticks flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-white">
            <div className="p-2 border border-white/15 bg-[#050505]">
              <MonogramSLX size={24} />
            </div>
            <div>
              <div className="font-serif text-base uppercase tracking-wider">
                INDEPENDENT RISK GOVERNANCE
              </div>
              <div className="text-xs font-mono text-[#C4BEB4] uppercase mt-0.5">
                All leadership decisions remain subject to independent risk veto power.
              </div>
            </div>
          </div>

          <Link
            href="/philosophy"
            className="text-xs font-mono tracking-widest text-[#E8E2D5] hover:text-white uppercase border-b border-[#E8E2D5]/40 hover:border-white pb-1 transition-colors shrink-0"
          >
            REVIEW RISK PHILOSOPHY →
          </Link>
        </div>
      </div>
    </div>
  );
}
