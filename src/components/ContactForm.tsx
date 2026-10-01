'use client';

import React, { useState } from 'react';
import { ContactCategory } from '@/types';
import { AlertCircle, Send, Terminal, ShieldCheck, Lock } from 'lucide-react';
import { MagneticPull } from './MagneticPull';

const CATEGORIES: ContactCategory[] = ['GENERAL', 'PARTNERSHIPS', 'CAREERS', 'MEDIA'];

export const ContactForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContactCategory>('GENERAL');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [voucherId, setVoucherId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please complete all mandatory fields (Name, Institutional Email, Dispatch Content).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setSubmitStatus('error');
      setErrorMessage('Please specify an authenticated institutional email domain.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate disciplined cryptographic transmission
    setTimeout(() => {
      const generatedId = `SLX-TX-${Math.floor(100000 + Math.random() * 900000)}`;
      setVoucherId(generatedId);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
    }, 750);
  };

  return (
    <div className="w-full bg-[#080808] border border-white/10 p-6 sm:p-10 md:p-14 corner-ticks relative">
      {/* Terminal Telemetry Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
        <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-shlavex-silver">
          <Terminal size={14} className="text-[#E8E2D5]" />
          <span>CRYPTOGRAPHIC DISPATCH TERMINAL</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-mono tracking-widest uppercase">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>TLS 1.3 // 256-BIT</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-shlavex-silver/70 hidden sm:inline">ROUTING: ZURICH APEX</span>
        </div>
      </div>

      {/* Category Selection Tabs */}
      <div className="mb-10">
        <label className="block text-[10px] font-mono tracking-ultra text-shlavex-silver uppercase mb-4">
          01 {'//'} SELECT INQUIRY CHANNEL
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-3 px-4 text-xs font-mono tracking-widest uppercase transition-all duration-300 border text-center flex items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-[#181818] text-[#E8E2D5] border-[#E8E2D5]/60 shadow-[0_0_15px_rgba(232,226,213,0.12)] font-medium'
                    : 'bg-[#0A0A0A] text-shlavex-silver/70 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D5] shadow-[0_0_8px_rgba(232,226,213,0.9)]" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Successful Transmission Cryptographic Voucher */}
      {submitStatus === 'success' ? (
        <div className="p-8 sm:p-10 bg-[#0A0A0A] border border-white/15 corner-ticks space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-sm font-serif text-white uppercase tracking-wider">
                  DISPATCH CONFIRMED &amp; ENQUEUED
                </div>
                <div className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
                  CRYPTOGRAPHIC HANDSHAKE NOMINAL
                </div>
              </div>
            </div>
            <span className="font-mono text-xs text-[#E8E2D5] tracking-widest font-semibold">
              {voucherId}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono tracking-widest py-2">
            <div className="p-3 bg-[#111111] border border-white/5">
              <span className="text-[9px] text-shlavex-dim block">CHANNEL:</span>
              <span className="text-white uppercase">{selectedCategory}</span>
            </div>
            <div className="p-3 bg-[#111111] border border-white/5">
              <span className="text-[9px] text-shlavex-dim block">DISPATCH STATUS:</span>
              <span className="text-emerald-400">EXECUTIVE REVIEW</span>
            </div>
            <div className="p-3 bg-[#111111] border border-white/5">
              <span className="text-[9px] text-shlavex-dim block">DISCLOSURE:</span>
              <span className="text-shlavex-silver">CONFIDENTIAL</span>
            </div>
          </div>

          <p className="text-xs text-[#C4BEB4] font-sans leading-relaxed">
            Your dispatch has been registered within the SHLAVEX secure institutional gateway. An executive steward or department officer will review the parameters and establish authorized contact promptly.
          </p>

          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-[10px] font-mono tracking-widest text-[#E8E2D5] hover:text-white uppercase underline underline-offset-4"
          >
            TRANSMIT ANOTHER DISPATCH →
          </button>
        </div>
      ) : (
        /* Active Form Fields */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono tracking-widest text-shlavex-silver uppercase mb-2"
              >
                INDIVIDUAL NAME *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Dr. Henrik Vance"
                className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm text-white placeholder-shlavex-dim/70 focus:outline-none focus:border-[#E8E2D5]/70 focus:ring-1 focus:ring-[#E8E2D5]/30 focus:bg-[#0E0E0E] transition-all duration-300 font-sans"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono tracking-widest text-shlavex-silver uppercase mb-2"
              >
                INSTITUTIONAL EMAIL *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. henrik.vance@fund.com"
                className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm text-white placeholder-shlavex-dim/70 focus:outline-none focus:border-[#E8E2D5]/70 focus:ring-1 focus:ring-[#E8E2D5]/30 focus:bg-[#0E0E0E] transition-all duration-300 font-sans"
              />
            </div>
          </div>

          {/* Organization Field (Optional) */}
          <div>
            <label
              htmlFor="organization"
              className="block text-xs font-mono tracking-widest text-shlavex-silver uppercase mb-2"
            >
              AFFILIATION / INSTITUTION (OPTIONAL)
            </label>
            <input
              type="text"
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Global Quantitative Fund or Academic Institute"
              className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm text-white placeholder-shlavex-dim/70 focus:outline-none focus:border-[#E8E2D5]/70 focus:ring-1 focus:ring-[#E8E2D5]/30 focus:bg-[#0E0E0E] transition-all duration-300 font-sans"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono tracking-widest text-shlavex-silver uppercase mb-2"
            >
              DISPATCH CONTENT *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={`Detail the specific parameters regarding ${selectedCategory.toLowerCase()}...`}
              className="w-full bg-[#0A0A0A] border border-white/15 p-4 text-sm text-white placeholder-shlavex-dim/70 focus:outline-none focus:border-[#E8E2D5]/70 focus:ring-1 focus:ring-[#E8E2D5]/30 focus:bg-[#0E0E0E] transition-all duration-300 font-sans resize-none"
            />
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-950/40 border border-red-800/60 text-red-200 text-xs font-mono tracking-wider flex items-center gap-3">
              <AlertCircle size={16} className="text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button & Security Mandate */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[11px] font-mono text-shlavex-silver/70">
              <Lock size={12} className="text-[#E8E2D5]" />
              <span>CONFIDENTIAL TRANSMISSION ROUTED UNDER FIPS 140-3 PROTOCOL.</span>
            </div>

            <MagneticPull>
              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-btn py-3.5 px-8 text-xs font-mono tracking-mega uppercase disabled:opacity-50 inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT DISPATCH'}</span>
                <Send size={13} className="text-[#E8E2D5]" />
              </button>
            </MagneticPull>
          </div>
        </form>
      )}
    </div>
  );
};
