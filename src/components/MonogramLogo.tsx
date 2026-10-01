import React from 'react';
import Link from 'next/link';

interface MonogramLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  linkToHome?: boolean;
}

export const MonogramSLX: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="SLX Monogram"
    >
      {/* Precision architectural geometric SLX monogram */}
      <rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      {/* S glyph */}
      <path
        d="M 12 16 L 20 16 L 12 24 L 20 24 L 12 32 L 20 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* L glyph */}
      <path
        d="M 24 16 L 24 32 L 32 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* X glyph precision diagonal */}
      <path
        d="M 33 16 L 41 32 M 41 16 L 33 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Precision registration center marks */}
      <circle cx="24" cy="24" r="0.8" fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
};

export const MonogramLogo: React.FC<MonogramLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  linkToHome = true,
}) => {
  const sizeMap = {
    sm: { icon: 20, text: 'text-xs tracking-[0.25em]' },
    md: { icon: 24, text: 'text-sm tracking-[0.3em]' },
    lg: { icon: 32, text: 'text-lg tracking-[0.35em]' },
    xl: { icon: 44, text: 'text-2xl tracking-[0.4em]' },
  };

  const current = sizeMap[size];

  const content = (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      <div className="text-shlavex-text group-hover:text-white transition-colors duration-300">
        <MonogramSLX size={current.icon} />
      </div>
      {showWordmark && (
        <span
          className={`font-serif font-light uppercase text-shlavex-text group-hover:text-white transition-colors duration-300 ${current.text}`}
        >
          SHLAVEX
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-white">
        {content}
      </Link>
    );
  }

  return content;
};
