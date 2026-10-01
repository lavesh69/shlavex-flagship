import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { TEAM_MEMBERS, getTeamMemberBySlug } from '@/data/team';
import { getDepartmentBySlug } from '@/data/departments';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MonogramSLX } from '@/components/MonogramLogo';

interface ProfilePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) {
    return {
      title: 'Profile Not Found',
    };
  }

  return {
    title: `${member.name} — ${member.position}`,
    description: `${member.name}, ${member.position} in ${member.department} at SHLAVEX.`,
    openGraph: {
      title: `${member.name} | SHLAVEX`,
      description: `${member.position} — ${member.department}`,
      images: [
        {
          url: member.portrait,
          width: 1200,
          height: 1600,
          alt: member.name,
        },
      ],
    },
  };
}

export default function PersonProfilePage({ params }: ProfilePageProps) {
  const member = getTeamMemberBySlug(params.slug);

  if (!member) {
    notFound();
  }

  const department = getDepartmentBySlug(member.departmentSlug);

  return (
    <article className="min-h-screen bg-[#060606] text-[#F4F4F4] pt-28 pb-24">
      {/* Top Breadcrumb & Clear Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-8">
        <Link
          href="/people"
          className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-shlavex-silver hover:text-white transition-colors group uppercase"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#E8E2D5]" />
          <span>BACK TO PEOPLE DIRECTORY</span>
        </Link>
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Portrait Hero Presentation (Haute Editorial Passe-Partout) */}
          <div className="lg:col-span-5 relative">
            <div className="gallery-frame corner-ticks shadow-2xl">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0A09] border border-white/10">
                <Image
                  src={member.portrait}
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="portrait-vignette" />

                {/* Technical Calibration Sensor Mark */}
                <div className="absolute top-3 left-3 bg-[#050505]/85 backdrop-blur-md px-2.5 py-0.5 border border-white/15 text-[8px] font-mono tracking-widest text-[#E8E2D5] uppercase shadow-md">
                  ARCHIVAL SENSOR // 50MM
                </div>

                {/* Monogram stamp watermark */}
                <div className="absolute bottom-4 right-4 text-white/30">
                  <MonogramSLX size={24} />
                </div>
              </div>
            </div>

            {/* Department Quick Link Badge */}
            {department && (
              <div className="mt-4 p-4 bg-[#0A0A09] border border-white/10 flex items-center justify-between corner-ticks">
                <div>
                  <div className="text-[9px] font-mono text-shlavex-silver/70 uppercase tracking-widest">
                    MANDATE DIVISION
                  </div>
                  <div className="text-xs font-mono text-white uppercase mt-0.5 tracking-wider">
                    {department.name}
                  </div>
                </div>
                <Link
                  href={`/departments/${department.slug}`}
                  className="text-xs font-mono text-[#E8E2D5] hover:text-white flex items-center gap-1.5 transition-colors uppercase"
                >
                  <span>DIVISION</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Name, Position, Department, Profile, Mandates */}
          <div className="lg:col-span-7 space-y-10">
            {/* Identity Header */}
            <div className="border-b border-white/10 pb-8">
              <div className="text-xs font-mono tracking-ultra text-shlavex-silver uppercase mb-3">
                {member.department}
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider font-light leading-none">
                {member.name}
              </h1>

              <div className="mt-3 font-mono text-sm sm:text-base tracking-mega text-[#E8E2D5] uppercase">
                {member.position}
              </div>
            </div>

            {/* Profile Narrative (Zero Raw Placeholder Leak) */}
            <div>
              <div className="text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase mb-3">
                01 {'//'} EXECUTIVE PROFILE
              </div>
              <p className="text-sm sm:text-base text-[#C4BEB4] font-sans font-light leading-relaxed">
                {member.biography ||
                  `${member.name} serves as ${member.position} within ${member.department} at SHLAVEX, responsible for core operational mandates, risk stewardship, and strategic execution.`}
              </p>
            </div>

            {/* Philosophy Statement (Haute Typography with Monogram Watermark) */}
            <div className="p-8 sm:p-10 bg-[#0A0A09] border-l-2 border-shlavex-champagne relative corner-ticks overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-white/[0.025] pointer-events-none select-none">
                <MonogramSLX size={130} />
              </div>
              <div className="text-[10px] font-mono tracking-ultra text-[#E8E2D5] uppercase mb-3">
                02 {'//'} GUIDING MANDATE &amp; PHILOSOPHY
              </div>
              <blockquote className="font-editorial italic text-xl sm:text-2xl text-white font-light uppercase tracking-wide leading-relaxed relative z-10">
                &ldquo;{member.philosophy}&rdquo;
              </blockquote>
            </div>

            {/* Core Responsibilities */}
            <div>
              <div className="text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase mb-4">
                03 {'//'} CORE RESPONSIBILITIES
              </div>
              <div className="grid grid-cols-1 gap-3">
                {member.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#0E0E0E] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-[#C4BEB4] font-sans font-light"
                  >
                    <CheckCircle2 size={16} className="text-[#E8E2D5] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <div className="text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase mb-4">
                04 {'//'} DOMAINS OF EXPERTISE
              </div>
              <div className="flex flex-wrap gap-2.5">
                {member.expertise.map((item, idx) => (
                  <span
                    key={idx}
                    className="py-1.5 px-3.5 bg-[#0C0C0C] border border-white/15 text-xs font-mono tracking-widest text-[#E8E2D5] uppercase flex items-center gap-1.5 hover:border-champagne-subtle hover:bg-[#121212] transition-colors"
                  >
                    <span className="text-white/30 text-[9px]">+</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link href="/people" className="luxury-btn group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 text-shlavex-champagne transition-transform" />
                <span>BACK TO ALL PEOPLE</span>
              </Link>

              <Link
                href="/contact?category=CAREERS"
                className="text-xs font-mono tracking-widest text-shlavex-silver hover:text-white uppercase transition-colors"
              >
                INQUIRE REGARDING TALENT &amp; APPOINTMENTS →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
