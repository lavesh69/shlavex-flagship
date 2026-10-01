import React from 'react';
import Link from 'next/link';
import { MonogramSLX } from '@/components/MonogramLogo';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#F4F4F4] flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
      <div className="p-4 border border-white/10 bg-[#0B0B0B] mb-8">
        <MonogramSLX size={44} />
      </div>

      <div className="text-[11px] font-mono tracking-ultra text-shlavex-muted uppercase mb-3">
        ERROR // 404
      </div>

      <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white font-light max-w-xl">
        RESOURCE NOT LOCATED.
      </h1>

      <p className="mt-4 text-xs sm:text-sm text-shlavex-muted font-sans font-light max-w-md leading-relaxed">
        The requested pathway does not exist within the SHLAVEX flagship index, or is restricted under executive security protocols.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="luxury-btn py-3.5 px-7 text-xs font-mono tracking-widest text-[#E8E2D5] inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} className="text-[#E8E2D5]" />
          <span>RETURN TO FLAGSHIP</span>
        </Link>
      </div>
    </div>
  );
}
