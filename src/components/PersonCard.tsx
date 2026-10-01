'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { TeamMember } from '@/types';
import { MonogramSLX } from './MonogramLogo';

interface PersonCardProps {
  member: TeamMember;
  priority?: boolean;
}

export const PersonCard: React.FC<PersonCardProps> = ({ member, priority = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/people/${member.slug}`}
      className="group block relative shimmer-card corner-ticks overflow-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-white card-perspective layer-depth-base"
    >
      {/* Passe-Partout Art Gallery Frame (Layer 1: Spatial Lift) */}
      <div className="p-3 pb-0 layer-depth-1">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#121212] border border-white/10 group-hover:border-white/25 transition-colors">
          {!imageError && member.portrait ? (
            <Image
              src={member.portrait}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
              className="object-cover object-top studio-portrait-grade"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Neutral Refined Architectural Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#151515] to-[#0A0A0A] text-shlavex-silver">
              <MonogramSLX size={48} className="opacity-30 mb-4" />
              <span className="font-mono text-[10px] tracking-mega text-shlavex-silver uppercase">
                PORTRAIT ARCHIVE
              </span>
            </div>
          )}

          {/* Studio Void Vignette */}
          <div className="portrait-vignette" />

          {/* Optional Leadership Marker (Layer 3: Top Elevation) */}
          {member.isLeadership && (
            <div className="layer-depth-3 absolute top-3 left-3 bg-[#050505]/90 backdrop-blur-md border border-champagne-subtle px-2 py-0.5 text-[8px] font-mono tracking-widest text-shlavex-champagne uppercase shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              LEADERSHIP
            </div>
          )}
        </div>
      </div>

      {/* Editorial Metadata Block (Layer 2: Mid-Elevation Text Plane) */}
      <div className="p-6 sm:p-7 flex flex-col justify-between layer-depth-2">
        <div>
          {/* Small Department Label */}
          <div className="text-[10px] font-mono tracking-widest text-shlavex-silver/80 uppercase mb-2 group-hover:text-shlavex-champagne transition-colors">
            {member.department}
          </div>

          {/* Large Name */}
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-white uppercase tracking-wider group-hover:translate-x-1 group-hover:text-shlavex-silver transition-all duration-300">
            {member.name}
          </h3>

          {/* Small Position */}
          <div className="mt-1 text-xs font-mono tracking-wider text-[#C4BEB4] font-light uppercase">
            {member.position}
          </div>
        </div>

        {/* Minimal hover CTA: VIEW PROFILE → */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-widest text-shlavex-silver group-hover:text-white transition-colors">
          <span className="opacity-80 group-hover:opacity-100 uppercase text-[10px] tracking-widest">
            VIEW PROFILE
          </span>
          <ArrowRight
            size={14}
            className="transform group-hover:translate-x-1 text-shlavex-champagne transition-transform duration-300"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </Link>
  );
};
