import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DEPARTMENTS_DATA, getDepartmentBySlug } from '@/data/departments';
import { getTeamMembersByDepartment } from '@/data/team';
import { PersonCard } from '@/components/PersonCard';
import { ArrowLeft, ArrowRight, ShieldCheck, GitCommit } from 'lucide-react';
import { MonogramSLX } from '@/components/MonogramLogo';

interface DepartmentPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return DEPARTMENTS_DATA.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const department = getDepartmentBySlug(params.slug);
  if (!department) {
    return {
      title: 'Department Not Found',
    };
  }

  return {
    title: `${department.name} (Division ${department.number})`,
    description: department.headline,
    openGraph: {
      title: `${department.name} | SHLAVEX`,
      description: department.philosophy,
      images: [
        {
          url: department.image,
          width: 1200,
          height: 800,
          alt: department.name,
        },
      ],
    },
  };
}

export default function DepartmentDetailPage({ params }: DepartmentPageProps) {
  const department = getDepartmentBySlug(params.slug);

  if (!department) {
    notFound();
  }

  const members = getTeamMembersByDepartment(department.slug);

  return (
    <article className="min-h-screen bg-[#050505] text-[#F4F4F4] pt-28 pb-24 relative overflow-hidden">
      {/* Background Ghost Watermark Numeral */}
      <div className="absolute right-4 sm:right-12 top-20 text-white/[0.025] font-serif text-[160px] sm:text-[240px] md:text-[320px] leading-none pointer-events-none select-none font-light">
        {department.number}
      </div>

      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-8 relative z-10">
        <Link
          href="/departments"
          className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-shlavex-silver hover:text-white transition-colors group uppercase"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#E8E2D5]" />
          <span>BACK TO ALL DEPARTMENTS</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Department Hero Tier */}
        <div className="border-b border-white/10 pb-16 mb-16 relative">
          <div className="flex items-center gap-3 text-xs font-mono tracking-mega text-shlavex-silver uppercase mb-4">
            <span className="text-[#E8E2D5] font-medium">DIVISION {department.number}</span>
            <span className="text-white/30">{'//'}</span>
            <span>MANDATE DOSSIER</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-wider text-white max-w-4xl">
            {department.name}
          </h1>

          {/* One-Line Philosophy Quote with Monogram Watermark */}
          <div className="mt-8 p-7 sm:p-9 bg-[#0A0A09] border-l-2 border-shlavex-champagne max-w-3xl corner-ticks relative overflow-hidden">
            <span className="text-[10px] font-mono tracking-ultra text-[#E8E2D5] uppercase block mb-1">
              DIVISIONAL CREED
            </span>
            <blockquote className="font-mono text-sm sm:text-base text-white uppercase tracking-wider leading-relaxed">
              &ldquo;{department.philosophy}&rdquo;
            </blockquote>
          </div>

          <p className="mt-8 text-base sm:text-lg text-[#C4BEB4] font-sans font-light max-w-3xl leading-relaxed">
            {department.description}
          </p>
        </div>

        {/* Division Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pb-20 border-b border-white/10">
          {/* Left Column: Responsibilities & Operational Mandates */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-mono tracking-ultra text-shlavex-silver uppercase mb-4">
                01 {'//'} DIVISIONAL RESPONSIBILITIES
              </div>
              <div className="space-y-3">
                {department.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#0A0A0A] border border-white/10 flex items-start gap-3.5 text-xs sm:text-sm text-[#C4BEB4] font-sans font-light leading-relaxed"
                  >
                    <ShieldCheck size={16} className="text-[#E8E2D5] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Institutional Interfacing Areas */}
            <div>
              <div className="text-xs font-mono tracking-ultra text-shlavex-silver uppercase mb-4 flex items-center gap-2">
                <GitCommit size={14} className="text-[#E8E2D5]" />
                <span>02 {'//'} INTERFACING MESH &amp; PROTOCOLS</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {department.relatedAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="py-2 px-4 bg-[#0C0C0C] border border-white/15 text-xs font-mono tracking-widest text-[#E8E2D5] uppercase flex items-center gap-2 hover:border-champagne-subtle transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D5]/60" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Division Leadership Meta Card */}
          <div className="lg:col-span-5 bg-[#0A0A09] border border-white/10 p-8 sm:p-10 self-start corner-ticks card-perspective layer-depth-base">
            <div className="flex items-center gap-3 pb-6 border-b border-white/5 mb-6 text-white">
              <MonogramSLX size={20} />
              <span className="text-xs font-mono tracking-widest uppercase">
                GOVERNANCE APPOINTMENTS
              </span>
            </div>

            <div className="space-y-6">
              {department.leadership.map((lead, idx) => (
                <div key={idx} className="pb-4 border-b border-white/5 last:border-none last:pb-0">
                  <div className="text-[10px] font-mono tracking-widest text-shlavex-silver/70 uppercase">
                    {lead.position}
                  </div>
                  <Link
                    href={`/people/${lead.slug}`}
                    className="mt-1 font-serif text-lg text-white hover:text-[#E8E2D5] transition-colors flex items-center justify-between group uppercase tracking-wider"
                  >
                    <span>{lead.name}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-[11px] font-mono text-shlavex-silver/70 leading-relaxed">
              Division leadership operates with direct accountability to the Executive Leadership and Chief Risk Officer.
            </div>
          </div>
        </div>

        {/* Division Team Members */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase">
                03 {'//'} PERSONNEL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white uppercase tracking-wider mt-1">
                DIVISION KEY MEMBERS
              </h2>
            </div>
            <Link
              href="/people"
              className="text-xs font-mono tracking-widest text-[#E8E2D5] hover:text-white uppercase transition-colors"
            >
              ALL MEMBERS →
            </Link>
          </div>

          {members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {members.map((member) => (
                <PersonCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="p-16 border border-white/10 bg-[#0A0A0A] text-center my-8 corner-ticks">
              <div className="font-serif text-2xl text-white uppercase tracking-wider mb-2">
                TEAM INFORMATION COMING SOON
              </div>
              <p className="text-xs font-mono text-[#C4BEB4] tracking-widest uppercase max-w-md mx-auto">
                Appointments for this operational mandate are currently in confidential onboarding or executive review.
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
