import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Department } from '@/types';

interface DepartmentCardProps {
  department: Department;
  index?: number;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  return (
    <Link
      href={`/departments/${department.slug}`}
      className="group block relative shimmer-card corner-ticks p-8 sm:p-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-white card-perspective layer-depth-base"
    >
      {/* Top Header: Department Number & Accent (Layer 1) */}
      <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6 layer-depth-1">
        <span className="font-mono text-xs tracking-widest text-shlavex-silver/90 group-hover:text-shlavex-champagne transition-colors">
          DIVISION {'//'} {department.number}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-shlavex-champagne group-hover:shadow-[0_0_12px_rgba(232,226,213,0.9)] transition-all" />
      </div>

      {/* Department Name (Layer 3: Top Elevation) */}
      <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase tracking-wider mb-4 group-hover:translate-x-1 group-hover:text-shlavex-silver transition-all duration-300 layer-depth-3">
        {department.name}
      </h3>

      {/* One-Line Philosophy (Layer 2) */}
      <div className="text-[11px] font-mono tracking-widest text-[#E8E2D5]/90 uppercase mb-6 leading-relaxed layer-depth-2">
        &ldquo;{department.philosophy}&rdquo;
      </div>

      {/* Description Snippet (Layer 1) */}
      <p className="text-xs sm:text-sm text-[#C4BEB4] font-sans font-light leading-relaxed mb-8 line-clamp-3 layer-depth-1">
        {department.description}
      </p>

      {/* Key Responsibilities list preview (Layer 1) */}
      <div className="mb-8 space-y-2 layer-depth-1">
        <div className="text-[10px] font-mono tracking-mega text-shlavex-silver/70 uppercase mb-2">
          CORE FOCUS
        </div>
        {department.responsibilities.slice(0, 2).map((resp, i) => (
          <div key={i} className="text-xs text-[#C4BEB4] flex items-center gap-2">
            <span className="w-1 h-1 bg-white/40" />
            <span className="truncate">{resp}</span>
          </div>
        ))}
      </div>

      {/* Footer Link (Layer 2) */}
      <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-widest text-shlavex-silver group-hover:text-white transition-colors layer-depth-2">
        <span className="uppercase text-[10px] tracking-widest">EXPLORE DIVISION</span>
        <ArrowRight
          size={14}
          className="transform group-hover:translate-x-1 text-shlavex-champagne transition-transform duration-300"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
};
