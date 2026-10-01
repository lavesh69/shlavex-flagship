'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/data/team';
import { PersonCard } from './PersonCard';
import { Search, LayoutGrid, ListFilter } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  'ALL',
  'LEADERSHIP',
  'TRADING',
  'QUANTITATIVE RESEARCH',
  'TECHNOLOGY',
  'RISK',
  'FINANCE',
  'OPERATIONS',
  'MARKETING',
  'CREATIVE',
] as const;

type FilterCategory = (typeof CATEGORIES)[number];

export const PeopleDirectory: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      // Category filter matching
      let matchesCategory = true;
      if (activeCategory === 'LEADERSHIP') {
        matchesCategory = Boolean(member.isLeadership);
      } else if (activeCategory === 'TRADING') {
        matchesCategory = member.department.includes('TRADING');
      } else if (activeCategory === 'QUANTITATIVE RESEARCH') {
        matchesCategory = member.department.includes('QUANTITATIVE');
      } else if (activeCategory === 'TECHNOLOGY') {
        matchesCategory = member.department.includes('TECHNOLOGY') || member.department.includes('ENGINEERING');
      } else if (activeCategory === 'RISK') {
        matchesCategory = member.department.includes('RISK');
      } else if (activeCategory === 'FINANCE') {
        matchesCategory = member.department.includes('FINANCE') || member.department.includes('TREASURY');
      } else if (activeCategory === 'OPERATIONS') {
        matchesCategory = member.department.includes('OPERATIONS');
      } else if (activeCategory === 'MARKETING') {
        matchesCategory = member.department.includes('MARKETING') || member.department.includes('COMMUNICATIONS');
      } else if (activeCategory === 'CREATIVE') {
        matchesCategory = member.department.includes('CREATIVE') || member.department.includes('DESIGN');
      }

      // Search query matching
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        matchesSearch =
          member.name.toLowerCase().includes(query) ||
          member.position.toLowerCase().includes(query) ||
          member.department.toLowerCase().includes(query) ||
          member.expertise.some((e) => e.toLowerCase().includes(query));
      }

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search and View Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-shlavex-silver/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, role, or discipline..."
            className="w-full bg-[#0A0A0A] border border-white/15 pl-10 pr-4 py-2.5 text-xs text-white placeholder-shlavex-dim/70 font-sans focus:outline-none focus:border-[#E8E2D5]/70 focus:ring-1 focus:ring-[#E8E2D5]/30 focus:bg-[#0E0E0E] transition-all duration-300"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 self-end md:self-auto text-xs font-mono">
          <span className="text-shlavex-silver/70 text-[11px] uppercase mr-2 tracking-widest hidden sm:inline">
            LAYOUT
          </span>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2.5 border transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-[#181818] text-[#E8E2D5] border-[#E8E2D5]/60 shadow-[0_0_12px_rgba(232,226,213,0.15)]'
                : 'bg-[#0A0A0A] text-white/50 border-white/10 hover:text-[#E8E2D5] hover:border-white/25'
            }`}
            aria-label="Editorial Grid View"
          >
            <LayoutGrid size={15} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2.5 border transition-all duration-300 ${
              viewMode === 'list'
                ? 'bg-[#181818] text-[#E8E2D5] border-[#E8E2D5]/60 shadow-[0_0_12px_rgba(232,226,213,0.15)]'
                : 'bg-[#0A0A0A] text-white/50 border-white/10 hover:text-[#E8E2D5] hover:border-white/25'
            }`}
            aria-label="Editorial Ledger View"
          >
            <ListFilter size={15} />
          </button>
        </div>
      </div>

      {/* Filter Category Tabs with Edge Fades */}
      <div className="relative mb-12">
        <div className="overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center gap-2 min-w-max">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative py-2 px-3.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#181818] text-[#E8E2D5] border-[#E8E2D5]/60 shadow-[0_0_15px_-4px_rgba(232,226,213,0.25)] font-medium'
                      : 'bg-[#080808] text-shlavex-silver/80 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D5] shadow-[0_0_6px_rgba(232,226,213,0.9)]" />
                    )}
                    <span>{category}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Member Count & Category Status */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-shlavex-silver/70 uppercase mb-8">
        <div>
          ACTIVE MANDATE: <span className="text-[#E8E2D5] font-medium">{activeCategory}</span>
        </div>
        <div>
          ARCHIVE COUNT: <span className="text-white font-medium">{filteredMembers.length} {filteredMembers.length === 1 ? 'MEMBER' : 'MEMBERS'}</span>
        </div>
      </div>

      {/* Grid or List Display */}
      {filteredMembers.length > 0 ? (
        viewMode === 'grid' ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PersonCard member={member} priority={index < 4} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Editorial Ledger View with Passe-Partout Thumbnails */
          <div className="border border-white/10 divide-y divide-white/10 bg-[#080808] corner-ticks">
            {filteredMembers.map((member) => (
              <Link
                key={member.id}
                href={`/people/${member.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-[#111111] transition-all duration-300 gap-4"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-12 h-16 bg-[#121212] relative overflow-hidden shrink-0 border border-white/15 corner-ticks shadow-md">
                    <Image
                      src={member.thumbnail}
                      alt={member.name}
                      fill
                      sizes="48px"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 studio-portrait-grade"
                    />
                    <div className="portrait-vignette" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-white uppercase tracking-wider group-hover:text-shlavex-silver transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-mono text-[#C4BEB4] uppercase mt-0.5">
                      {member.position}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 text-xs font-mono tracking-widest">
                  <span className="text-shlavex-silver/70 text-[11px] uppercase">
                    {member.department}
                  </span>
                  <span className="text-[#E8E2D5] group-hover:text-white uppercase flex items-center gap-1.5 transition-colors">
                    VIEW PROFILE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )
      ) : (
        /* Empty State */
        <div className="p-16 border border-white/10 bg-[#0B0B0B] text-center my-12 corner-ticks">
          <div className="font-serif text-2xl text-white uppercase tracking-wider mb-2">
            TEAM INFORMATION COMING SOON
          </div>
          <p className="text-xs font-mono text-[#C4BEB4] tracking-widest uppercase max-w-md mx-auto">
            Appointments for this operational mandate are currently in confidential onboarding or executive review.
          </p>
          <button
            onClick={() => {
              setActiveCategory('ALL');
              setSearchQuery('');
            }}
            className="mt-6 luxury-btn py-2.5 px-6 text-xs cursor-pointer"
          >
            RESET FILTERS
          </button>
        </div>
      )}
    </div>
  );
};
