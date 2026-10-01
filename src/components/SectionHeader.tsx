import React from 'react';

interface SectionHeaderProps {
  number?: string;
  category?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 md:mb-20 ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {/* Category and Number Pill */}
      {(number || category) && (
        <div
          className={`flex items-center gap-3 text-xs font-mono tracking-mega text-shlavex-silver/90 uppercase mb-4 sm:mb-6 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          {number && <span className="text-[#E8E2D5] font-medium">{number}</span>}
          {number && category && <span className="text-white/30">/</span>}
          {category && <span>{category}</span>}
        </div>
      )}

      {/* Main Statement Title */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.04em] text-white leading-[1.15] uppercase max-w-4xl">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#C4BEB4] font-sans font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      <div className={`mt-8 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 metallic-hairline-champagne" />
        <span className="text-[10px] font-mono text-shlavex-silver/60">+</span>
        <div className="h-[1px] w-6 bg-white/10" />
      </div>
    </div>
  );
};
