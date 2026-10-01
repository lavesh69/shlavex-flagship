'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, UserCheck, Layers, GitCommit } from 'lucide-react';
import { DEPARTMENTS_DATA } from '@/data/departments';
import { TEAM_MEMBERS } from '@/data/team';
import { MonogramSLX } from './MonogramLogo';

export const OrganizationMap: React.FC = () => {
  const [selectedDeptSlug, setSelectedDeptSlug] = useState<string>('trading-quantitative-research');

  const selectedDepartment = DEPARTMENTS_DATA.find((d) => d.slug === selectedDeptSlug) || DEPARTMENTS_DATA[0];
  const departmentMembers = TEAM_MEMBERS.filter((m) => m.departmentSlug === selectedDeptSlug);

  return (
    <div className="w-full bg-[#080808] border border-white/10 p-6 sm:p-10 md:p-14 corner-ticks">
      {/* Top Diagram Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase">
            ARCHITECTURAL SCHEMATIC
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wider mt-1">
            ORGANIZATIONAL STRUCTURE
          </h3>
        </div>
        <div className="text-xs font-mono text-shlavex-silver/80 flex items-center gap-2">
          <GitCommit size={14} className="text-[#E8E2D5]" />
          <span>INTERACTIVE INSTITUTIONAL MATRIX</span>
        </div>
      </div>

      {/* Level 0: Apex Monogram & Global Holding */}
      <div className="flex flex-col items-center mt-10 mb-2">
        <div className="p-4 border border-white/20 bg-[#0E0E0E] flex items-center gap-3 shadow-2xl relative corner-ticks">
          <MonogramSLX size={26} />
          <div>
            <div className="font-serif text-sm tracking-widest text-white uppercase">
              SHLAVEX GLOBAL
            </div>
            <div className="text-[9px] font-mono tracking-widest text-shlavex-silver uppercase">
              INSTITUTIONAL APEX
            </div>
          </div>
          {/* Micro Status Chip */}
          <div className="absolute -top-2.5 -right-2.5 px-1.5 py-0.5 bg-[#141414] border border-white/20 text-[8px] font-mono text-emerald-400 flex items-center gap-1 shadow-md">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span>ROOT</span>
          </div>
        </div>
      </div>

      {/* Level 0 -> 1: Precision CAD Circuit Vector Bus */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop / Tablet Bus (3 Branches with Junction Nodes & Traveling Pulse) */}
        <div className="hidden sm:block w-full">
          <svg
            className="w-full h-14 text-white/20 overflow-visible"
            viewBox="0 0 900 56"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base CAD Grid Trace Lines */}
            <path
              d="M 450 0 L 450 28 M 150 28 L 750 28 M 150 28 L 150 56 M 450 28 L 450 56 M 750 28 L 750 56"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Active Champagne Traveling Signal Pulse */}
            <path
              d="M 450 0 L 450 28 M 150 28 L 750 28 M 150 28 L 150 56 M 450 28 L 450 56 M 750 28 L 750 56"
              stroke="#E8E2D5"
              strokeWidth="1.5"
              strokeDasharray="20 180"
              className="cad-pulse-trace"
            />
            {/* Apex Contact Node */}
            <circle cx="450" cy="2" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
            {/* Central Orthogonal Junction */}
            <circle cx="450" cy="28" r="3" fill="#E8E2D5" />
            {/* 90-degree Corner CAD Pins */}
            <circle cx="150" cy="28" r="2.5" fill="white" />
            <circle cx="750" cy="28" r="2.5" fill="white" />
            {/* Terminal Nodes directly above Executive Cards */}
            <circle cx="150" cy="54" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
            <circle cx="450" cy="54" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
            <circle cx="750" cy="54" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
          </svg>
          <div className="flex justify-between text-[8px] font-mono tracking-widest text-shlavex-silver/70 px-4 -mt-1 select-none">
            <span>{`// BUS 01.A [FOUNDER]`}</span>
            <span>{`// BUS 01.B [APEX ROOT]`}</span>
            <span>{`// BUS 01.C [CEO EXEC]`}</span>
          </div>
        </div>

        {/* Mobile Linear Vertical Trace */}
        <div className="sm:hidden flex flex-col items-center py-2">
          <svg className="w-6 h-12 text-white/20 overflow-visible" viewBox="0 0 24 48" fill="none">
            <line x1="12" y1="0" x2="12" y2="48" stroke="currentColor" strokeWidth="1" />
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="48"
              stroke="#E8E2D5"
              strokeWidth="1.5"
              strokeDasharray="12 40"
              className="cad-pulse-trace"
            />
            <circle cx="12" cy="2" r="3" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
            <circle cx="12" cy="24" r="2.5" fill="#E8E2D5" />
            <circle cx="12" cy="46" r="3" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Level 1: Executive Leadership Tier */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="text-center mb-3 text-[10px] font-mono tracking-widest text-shlavex-silver uppercase">
          01 {'//'} EXECUTIVE GOVERNANCE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/people/lavesh-dobriyal"
            className="group relative p-4 bg-[#0E0E0E] border border-white/15 hover:border-[#E8E2D5]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.9)] transition-all flex items-center justify-between corner-ticks"
          >
            <div>
              <div className="text-xs font-serif text-white uppercase tracking-wider group-hover:text-shlavex-silver transition-colors">
                LAVESH DOBRIYAL
              </div>
              <div className="text-[10px] font-mono tracking-widest text-shlavex-silver/90 uppercase mt-0.5">
                FOUNDER
              </div>
            </div>
            <ArrowRight size={12} className="text-shlavex-silver/60 group-hover:text-white transition-colors" />
          </Link>

          <Link
            href="/people/shreya"
            className="group relative p-4 bg-[#0E0E0E] border border-white/15 hover:border-[#E8E2D5]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.9)] transition-all flex items-center justify-between corner-ticks"
          >
            <div>
              <div className="text-xs font-serif text-white uppercase tracking-wider group-hover:text-shlavex-silver transition-colors">
                SHREYA
              </div>
              <div className="text-[10px] font-mono tracking-widest text-shlavex-silver/90 uppercase mt-0.5">
                CO-FOUNDER
              </div>
            </div>
            <ArrowRight size={12} className="text-shlavex-silver/60 group-hover:text-white transition-colors" />
          </Link>

          <Link
            href="/people/akki-raj"
            className="group relative p-4 bg-[#0E0E0E] border border-white/15 hover:border-[#E8E2D5]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.9)] transition-all flex items-center justify-between corner-ticks"
          >
            <div>
              <div className="text-xs font-serif text-white uppercase tracking-wider group-hover:text-shlavex-silver transition-colors">
                AKKI RAJ
              </div>
              <div className="text-[10px] font-mono tracking-widest text-shlavex-silver/90 uppercase mt-0.5">
                CHIEF EXECUTIVE OFFICER
              </div>
            </div>
            <ArrowRight size={12} className="text-shlavex-silver/60 group-hover:text-white transition-colors" />
          </Link>
        </div>

        {/* Level 1 -> 2: Converging Executive CAD Bus to Operational Divisions */}
        <div className="mt-4">
          {/* Desktop / Tablet Converging Bus */}
          <div className="hidden sm:block w-full">
            <svg
              className="w-full h-14 text-white/20 overflow-visible"
              viewBox="0 0 900 56"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Converging Traces */}
              <path
                d="M 150 0 L 150 28 M 750 0 L 750 28 M 150 28 L 750 28 M 450 0 L 450 56 M 80 56 L 820 56"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* Active Traveling Pulse */}
              <path
                d="M 150 0 L 150 28 M 750 0 L 750 28 M 150 28 L 750 28 M 450 0 L 450 56 M 80 56 L 820 56"
                stroke="#E8E2D5"
                strokeWidth="1.5"
                strokeDasharray="24 160"
                className="cad-pulse-trace"
              />
              {/* Top Contact Pins below Executive Cards */}
              <circle cx="150" cy="2" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
              <circle cx="450" cy="2" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
              <circle cx="750" cy="2" r="3.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
              {/* Convergence Junction */}
              <circle cx="450" cy="28" r="3.5" fill="#E8E2D5" />
              {/* Lower Master Distribution Pins */}
              <circle cx="450" cy="56" r="3" fill="#E8E2D5" />
              <circle cx="80" cy="56" r="2.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1" />
              <circle cx="820" cy="56" r="2.5" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1" />
            </svg>
            <div className="text-center text-[8px] font-mono tracking-widest text-shlavex-silver/70 uppercase -mt-1 select-none">
              {`// DISPATCH CONDUIT: 10 OPERATIONAL DIVISIONS //`}
            </div>
          </div>

          {/* Mobile Linear Vertical Trace */}
          <div className="sm:hidden flex flex-col items-center py-2">
            <svg className="w-6 h-12 text-white/20 overflow-visible" viewBox="0 0 24 48" fill="none">
              <line x1="12" y1="0" x2="12" y2="48" stroke="currentColor" strokeWidth="1" />
              <line
                x1="12"
                y1="0"
                x2="12"
                y2="48"
                stroke="#E8E2D5"
                strokeWidth="1.5"
                strokeDasharray="12 40"
                className="cad-pulse-trace"
              />
              <circle cx="12" cy="2" r="3" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
              <circle cx="12" cy="24" r="2.5" fill="#E8E2D5" />
              <circle cx="12" cy="46" r="3" fill="#0E0E0E" stroke="#E8E2D5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Level 2: Departments Selector (Horizontal interactive nodes with thin lines) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] font-mono tracking-widest text-shlavex-silver uppercase flex items-center gap-2">
            <Layers size={12} className="text-[#E8E2D5]" />
            <span>02 {'//'} OPERATIONAL DIVISIONS (SELECT TO INSPECT)</span>
          </div>
          <span className="text-[10px] font-mono text-shlavex-silver">
            10 DIVISIONS ACTIVE
          </span>
        </div>

        {/* Department Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {DEPARTMENTS_DATA.map((dept) => {
            const isSelected = dept.slug === selectedDeptSlug;
            return (
              <button
                key={dept.slug}
                onClick={() => setSelectedDeptSlug(dept.slug)}
                className={`p-3 text-left border transition-all duration-300 font-mono text-[11px] ${
                  isSelected
                    ? 'bg-[#181818] text-[#E8E2D5] border-[#E8E2D5]/60 shadow-[0_0_14px_rgba(232,226,213,0.15)] font-medium'
                    : 'bg-[#0B0B0B] text-shlavex-silver/80 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <div className="text-[9px] opacity-80 mb-1 flex items-center justify-between">
                  <span>DIV {'//'} {dept.number}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D5] shadow-[0_0_6px_rgba(232,226,213,0.8)]" />}
                </div>
                <div className="truncate font-sans font-light uppercase tracking-wide">
                  {dept.name.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Level 3: Department Details & People in Selected Node */}
      <div className="mt-8 pt-8 border-t border-white/10 bg-[#0B0B0B]/80 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono tracking-widest text-shlavex-silver">
                DIVISION {selectedDepartment.number}
              </span>
              <span className="text-xs font-mono text-shlavex-dim">/</span>
              <span className="text-xs font-mono tracking-widest text-[#E8E2D5]">
                ACCOUNTABILITY NODE
              </span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wider">
              {selectedDepartment.name}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[#C4BEB4] max-w-2xl font-light leading-relaxed">
              {selectedDepartment.headline}
            </p>
          </div>

          <Link
            href={`/departments/${selectedDepartment.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-shlavex-silver border border-white/20 hover:border-[#E8E2D5]/60 px-4 py-2 self-start transition-colors"
          >
            <span>DEPARTMENT PAGE</span>
            <ArrowRight size={14} className="text-[#E8E2D5]" />
          </Link>
        </div>

        {/* Division Key Personnel and Responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* People in this Node */}
          <div>
            <div className="text-[10px] font-mono tracking-widest text-shlavex-silver uppercase mb-3 flex items-center gap-2">
              <UserCheck size={12} className="text-[#E8E2D5]" />
              <span>01 {'//'} DIVISION KEY PERSONNEL</span>
            </div>

            {departmentMembers.length > 0 ? (
              <div className="space-y-3">
                {departmentMembers.map((member) => (
                  <Link
                    key={member.slug}
                    href={`/people/${member.slug}`}
                    className="group block p-3.5 bg-[#121212] border border-white/10 hover:border-[#E8E2D5]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif text-sm text-white group-hover:text-shlavex-silver transition-colors">
                          {member.name}
                        </div>
                        <div className="text-[10px] font-mono tracking-widest text-shlavex-silver/90 uppercase mt-0.5">
                          {member.position}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-shlavex-silver group-hover:text-white transition-colors">
                        PROFILE →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-[#121212] border border-white/5 text-xs font-mono text-shlavex-silver/70">
                TEAM INFORMATION COMING SOON
              </div>
            )}
          </div>

          {/* Operational Mandates */}
          <div>
            <div className="text-[10px] font-mono tracking-widest text-shlavex-silver uppercase mb-3">
              02 {'//'} MANDATES & RESPONSIBILITIES
            </div>
            <ul className="space-y-2.5">
              {selectedDepartment.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-[#C4BEB4] flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#E8E2D5] font-mono mt-0.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
