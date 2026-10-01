import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { PersonCard } from '@/components/PersonCard';
import { DepartmentCard } from '@/components/DepartmentCard';
import { PhilosophySection } from '@/components/PhilosophySection';
import { OrganizationMap } from '@/components/OrganizationMap';
import { ContactForm } from '@/components/ContactForm';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticPull } from '@/components/MagneticPull';
import { getFeaturedMembers } from '@/data/team';
import { DEPARTMENTS_DATA } from '@/data/departments';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MonogramSLX } from '@/components/MonogramLogo';

export default function HomePage() {
  const featuredPeople = getFeaturedMembers().slice(0, 4);
  const featuredDepartments = DEPARTMENTS_DATA.filter((d) => d.featured).slice(0, 6);

  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4]">
      {/* 01 // HERO */}
      <Hero />

      {/* 02 // THE HOUSE */}
      <section className="relative py-36 sm:py-44 md:py-52 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollReveal>
            <SectionHeader
              number="01"
              category="THE HOUSE"
              title="SHLAVEX IS BUILT AROUND PEOPLE WHO THINK AHEAD."
              subtitle="An enduring institution operating at the intersection of human intellect, quantitative formulation, and computational certainty."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mt-12 sm:mt-16">
              {/* Left Narrative Pillar */}
              <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-shlavex-muted font-sans font-light leading-relaxed">
                <p className="font-editorial italic font-light text-2xl sm:text-3xl text-white/95 leading-[1.35]">
                  &ldquo;SHLAVEX is not an experiment in market speculation. It is a disciplined organization constructed to convert empirical observations into enduring systematic advantage.&rdquo;
                </p>
                <p>
                  Our foundation rests upon a singular principle: that enduring excellence cannot be achieved through reactive intuition. It requires the relentless calibration of mathematical models, deterministic software architectures, and uncompromising risk containment.
                </p>
                <p>
                  By bringing together mathematicians, systems architects, market microstructure researchers, and financial stewards, we foster an environment where intellectual curiosity is anchored to rigorous verification.
                </p>

                <div className="pt-6">
                  <MagneticPull>
                    <Link
                      href="/about"
                      className="luxury-btn group"
                    >
                      <span>READ INSTITUTIONAL PROFILE</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                    </Link>
                  </MagneticPull>
                </div>
              </div>

              {/* Right Architectural Monolith Card */}
              <div className="lg:col-span-5 shimmer-card corner-ticks p-8 sm:p-10 relative">
                <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                  <div className="flex items-center gap-3">
                    <MonogramSLX size={20} />
                    <span className="text-[11px] font-mono tracking-mega text-white uppercase">
                      INSTITUTIONAL METRICS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-shlavex-dim">EST. GLOBAL</span>
                </div>

                <div className="space-y-6 text-xs font-mono tracking-widest">
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-shlavex-muted uppercase">ORGANIZATIONAL CORE</span>
                    <span className="text-white uppercase">PEOPLE & DISCIPLINE</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-shlavex-muted uppercase">RESEARCH APPROACH</span>
                    <span className="text-white uppercase">FIRST-PRINCIPLES</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-shlavex-muted uppercase">ENGINEERING FOCUS</span>
                    <span className="text-white uppercase">ZERO-TOLERANCE LATENCY</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-shlavex-muted uppercase">RISK MANDATE</span>
                    <span className="text-white uppercase">INDEPENDENT VETO</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-shlavex-muted uppercase">GOVERNANCE</span>
                    <span className="text-white uppercase">MULTI-DECADE</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 03 // THE PHILOSOPHY */}
      <section className="py-36 sm:py-44 md:py-52 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollReveal>
            <SectionHeader
              number="02"
              category="THE PHILOSOPHY"
              title="PRECISION. DISCIPLINE. RESEARCH. ADAPTATION. EXECUTION."
              subtitle="Five non-negotiable tenets that govern every computational model, capital commitment, and institutional decision at SHLAVEX."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <PhilosophySection />
          </ScrollReveal>
        </div>
      </section>

      {/* 04 // THE PEOPLE (Featured leadership & selected team) */}
      <section className="py-36 sm:py-44 md:py-52 border-t border-white/10 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeader
                number="03"
                category="THE PEOPLE"
                title="THE MINDS BEHIND SHLAVEX."
                subtitle="An exceptional assembly of thinkers, researchers, engineers, and strategists driven by precision and continuous intellectual rigor."
                className="mb-0"
              />

              <MagneticPull>
                <Link
                  href="/people"
                  className="luxury-btn group self-start md:self-auto shrink-0"
                >
                  <span>VIEW ALL PEOPLE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                </Link>
              </MagneticPull>
            </div>
          </ScrollReveal>

          {/* Featured Members Editorial Grid (Rule 39) */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {featuredPeople.map((member) => (
                <PersonCard key={member.id} member={member} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/people"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-mega text-shlavex-muted hover:text-white uppercase transition-colors"
              >
                <span>EXPLORE FULL DIRECTORY ACROSS ALL 10 DEPARTMENTS</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 05 // THE DEPARTMENTS (Featured 6 selected departments) */}
      <section className="py-36 sm:py-44 md:py-52 border-t border-white/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeader
                number="04"
                category="THE DEPARTMENTS"
                title="INSTITUTIONAL ARCHITECTURE."
                subtitle="Specialized divisions engineered to operate with autonomy in inquiry and unison in systemic execution."
                className="mb-0"
              />

              <MagneticPull>
                <Link
                  href="/departments"
                  className="luxury-btn group self-start md:self-auto shrink-0"
                >
                  <span>EXPLORE ALL DEPARTMENTS</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 text-shlavex-champagne transition-transform" />
                </Link>
              </MagneticPull>
            </div>
          </ScrollReveal>

          {/* 6 Selected Departments (Rule 40) */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredDepartments.map((department, idx) => (
                <DepartmentCard key={department.id} department={department} index={idx} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 06 // THE SYSTEM (Organization Map) */}
      <section className="py-36 sm:py-44 md:py-52 border-t border-white/10 bg-[#060606]" id="system">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollReveal>
            <SectionHeader
              number="05"
              category="THE SYSTEM"
              title="GOVERNANCE & ACCOUNTABILITY."
              subtitle="A transparent schematic delineating how mandate flows from executive leadership through operational divisions to individual accountability."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <OrganizationMap />
          </ScrollReveal>
        </div>
      </section>

      {/* 07 // THE FUTURE (Vision Statement) */}
      <section className="py-36 sm:py-44 md:py-52 border-t border-white/10 bg-[#060606] text-center relative overflow-hidden">
        {/* Subtle background monogram watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <MonogramSLX size={600} />
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-mono tracking-ultra text-shlavex-muted uppercase">
              06 // THE FUTURE
            </span>

            <h2 className="mt-6 font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light tracking-[0.05em] uppercase leading-tight">
              INTELLIGENCE COMPOUNDS WHEN ROOTED IN DISCIPLINE.
            </h2>

            <p className="mt-8 text-sm sm:text-base text-shlavex-muted font-sans font-light leading-relaxed max-w-2xl mx-auto">
              While technological paradigms evolve and market dynamics shift, our core commitment remains unchanged: to steward human intellectual capital with uncompromising precision, ensuring SHLAVEX remains a beacon of institutional endurance.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticPull>
                <Link
                  href="/leadership"
                  className="luxury-btn py-3.5 px-8 text-xs font-mono tracking-widest text-[#E8E2D5] uppercase inline-flex items-center gap-2"
                >
                  <span>EXECUTIVE STEWARDSHIP</span>
                  <ArrowRight size={14} className="text-[#E8E2D5]" />
                </Link>
              </MagneticPull>
              <Link
                href="/about"
                className="text-xs font-mono tracking-widest text-shlavex-muted hover:text-white transition-colors uppercase"
              >
                ABOUT THE INSTITUTION
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 08 // ENTER THE CONVERSATION (Contact) */}
      <section className="py-36 sm:py-44 md:py-52 border-t border-white/10 bg-[#070707]" id="contact">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <ScrollReveal>
            <SectionHeader
              number="07"
              category="ENGAGEMENT"
              title="ENTER THE CONVERSATION."
              subtitle="Direct channels for institutional dialogue, strategic collaborations, talent candidacy, and accredited press inquiries."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
