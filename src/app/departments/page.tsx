import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DEPARTMENTS_DATA } from '@/data/departments';
import { DepartmentCard } from '@/components/DepartmentCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Departments',
  description:
    'Institutional Divisions of SHLAVEX — Explore our 10 departments spanning quantitative research, algorithmic trading, core technology, risk, and corporate stewardship.',
};

export default function DepartmentsPage() {
  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Header */}
        <div className="pb-12 border-b border-white/10 mb-16">
          <SectionHeader
            number="INSTITUTION"
            category="DIVISIONS"
            title="THE DEPARTMENTS."
            subtitle="Ten specialized divisions structured to operate with autonomous intellectual rigor and unified systemic governance."
            className="mb-0"
          />
        </div>

        {/* All 10 Departments Grid (Rule 17) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEPARTMENTS_DATA.map((department, index) => (
            <DepartmentCard key={department.id} department={department} index={index} />
          ))}
        </div>

        {/* System Overview Bottom Prompt */}
        <div className="mt-20 p-8 sm:p-12 bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-shlavex-silver uppercase mb-1">
              GOVERNANCE ARCHITECTURE
            </div>
            <h3 className="font-serif text-2xl text-white uppercase tracking-wider">
              VIEW ORGANIZATIONAL STRUCTURE
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-shlavex-muted font-sans font-light max-w-xl">
              Inspect how the institutional mandate flows between Executive Leadership, divisions, and individual key personnel.
            </p>
          </div>

          <Link
            href="/#system"
            className="luxury-btn py-3.5 px-6 text-xs font-mono tracking-widest text-[#E8E2D5] shrink-0 flex items-center gap-2"
          >
            <span>INTERACTIVE MAP</span>
            <ArrowRight size={14} className="text-[#E8E2D5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
