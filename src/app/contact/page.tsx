import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import { MonogramSLX } from '@/components/MonogramLogo';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Inquiries',
  description:
    'Institutional Inquiries for SHLAVEX — General, Partnerships, Careers, and Media relations.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#060606] text-[#F4F4F4] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Header */}
        <div className="pb-16 border-b border-white/10 mb-16">
          <SectionHeader
            number="ENGAGEMENT"
            category="DIALOGUE"
            title="ENTER THE CONVERSATION."
            subtitle="Curated institutional communications for strategic partnerships, talent appointments, and media communications."
            className="mb-0"
          />
        </div>

        {/* Contact Layout: Form and Institutional Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Inquiry Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Institutional Channels & Direct Lines */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0B0B0B] border border-white/10 p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5 text-white">
                <MonogramSLX size={20} />
                <span className="font-mono text-xs tracking-widest uppercase">
                  DIRECT INSTITUTIONAL CHANNELS
                </span>
              </div>

              {/* General Inquiries */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-shlavex-dim uppercase">
                  EXECUTIVE SUITE
                </div>
                <div className="font-mono text-xs text-white uppercase mt-1">
                  office@shlavex.com
                </div>
              </div>

              {/* Strategic Partnerships */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-shlavex-dim uppercase">
                  PARTNERSHIPS & INSTITUTIONAL
                </div>
                <div className="font-mono text-xs text-white uppercase mt-1">
                  institutions@shlavex.com
                </div>
              </div>

              {/* Talent & Research Fellowship */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-shlavex-dim uppercase">
                  TALENT & QUANTITATIVE FELLOWSHIP
                </div>
                <div className="font-mono text-xs text-white uppercase mt-1">
                  careers@shlavex.com
                </div>
              </div>

              {/* Media Relations */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-shlavex-dim uppercase">
                  MEDIA & PRESS COMMUNICATIONS
                </div>
                <div className="font-mono text-xs text-white uppercase mt-1">
                  press@shlavex.com
                </div>
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="bg-[#0B0B0B] border border-white/10 p-6 flex items-start gap-3">
              <Shield size={18} className="text-white/60 shrink-0 mt-0.5" />
              <div className="text-[11px] font-mono text-shlavex-muted leading-relaxed uppercase">
                All communications sent to SHLAVEX are processed under strict institutional non-disclosure and security perimeters.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
