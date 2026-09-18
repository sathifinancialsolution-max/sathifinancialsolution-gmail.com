import React from 'react';

interface SfsLogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light';
  showBengali?: boolean;
}

export const SfsLogo: React.FC<SfsLogoProps> = ({
  className = 'h-11',
  variant = 'horizontal',
  theme = 'light',
  showBengali = true,
}) => {
  const isDark = theme === 'dark';
  const navyColor = isDark ? '#ffffff' : '#0E2C58';
  const subtextColor = isDark ? '#CBD5E1' : '#0E2C58';
  const bengaliColor = isDark ? '#94A3B8' : '#334155';

  // Mark SVG: 4 ascending bars (Ochre & Navy) with 3D golden checkmark arrow
  const Mark = (
    <svg
      viewBox="0 0 150 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto overflow-visible"
      aria-label="SFS Logo Emblem"
    >
      <defs>
        {/* Golden gradient for the dynamic rising arrow */}
        <linearGradient id="sfsGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C49132" />
          <stop offset="35%" stopColor="#DEB14C" />
          <stop offset="70%" stopColor="#F4CF6F" />
          <stop offset="100%" stopColor="#DEB14C" />
        </linearGradient>
        {/* Dark gold facet for 3D arrow head bevel */}
        <linearGradient id="sfsGoldFacet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B07D24" />
          <stop offset="100%" stopColor="#8A5B12" />
        </linearGradient>
        <filter id="sfsShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* 4 Ascending Vertical Chart Bars */}
      <g id="sfs-chart-bars">
        {/* Bar 1: Leftmost Ochre / Warm Gold */}
        <rect x="2" y="60" width="22" height="48" rx="2" fill="#C6933A" />

        {/* Bar 2: Deep Navy Bar */}
        <rect x="29" y="36" width="24" height="72" rx="2" fill={isDark ? '#3B82F6' : '#0E2C58'} />

        {/* Bar 3: Center Ochre / Warm Gold Bar */}
        <rect x="58" y="18" width="24" height="90" rx="2" fill="#C6933A" />

        {/* Bar 4: Right Deep Navy Bar with angled top following the rising motion */}
        <polygon
          points="87,42 111,30 111,108 87,108"
          fill={isDark ? '#3B82F6' : '#0E2C58'}
        />
      </g>

      {/* Outer White Cutout Mask / Border to distinctly separate the arrow from the bars behind */}
      <path
        d="M2 68 L44 98 L104 38 L98 28 L136 6 L128 46 L118 36 L48 108 M2 68"
        stroke={isDark ? '#0F172A' : '#FFFFFF'}
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Overlaid 3D Golden Checkmark & Rising Arrow */}
      <g filter="url(#sfsShadow)">
        {/* Left check stem dipping down */}
        <polygon
          points="3,68 44,98 52,87 11,57"
          fill="url(#sfsGoldGrad)"
        />
        {/* Main rising diagonal shaft shooting upwards */}
        <polygon
          points="36,92 112,18 126,30 50,104"
          fill="url(#sfsGoldGrad)"
        />
        {/* Sharp Arrow Head */}
        <polygon
          points="96,28 138,4 122,48 114,36"
          fill="url(#sfsGoldGrad)"
        />
        {/* 3D Shaded Bevel Facet on Arrow Tip */}
        <polygon
          points="138,4 122,48 114,36"
          fill="url(#sfsGoldFacet)"
          opacity="0.4"
        />
      </g>
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{Mark}</div>;
  }

  // Full stacked version matching the user's uploaded logo exactly
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="h-20 w-auto mb-2">{Mark}</div>
        <span
          className="text-4xl sm:text-5xl font-black tracking-tight font-display"
          style={{ color: navyColor }}
        >
          SFS
        </span>
        <span
          className="text-xs sm:text-sm font-extrabold tracking-widest uppercase mt-1"
          style={{ color: subtextColor }}
        >
          SATHI FINANCIAL SOLUTION
        </span>
        <div
          className="w-full max-w-[280px] h-0.5 my-2"
          style={{ backgroundColor: navyColor }}
        />
        <span
          className="text-sm sm:text-base font-bold tracking-wide"
          style={{ color: bengaliColor, fontFamily: "'Noto Sans Bengali', sans-serif" }}
        >
          সাথি ফাইন্যান্সিয়াল সলিউশনস
        </span>
      </div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <div className="h-full py-0.5 shrink-0">{Mark}</div>
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-xl font-black font-display" style={{ color: navyColor }}>
            SFS
          </span>
          <span className="text-[9px] font-extrabold tracking-wider uppercase" style={{ color: subtextColor }}>
            Sathi Financial Solution
          </span>
        </div>
      </div>
    );
  }

  // Default "horizontal" variant tailored for the website header navbar
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="h-full py-0.5 shrink-0 flex items-center">{Mark}</div>
      <div className="flex flex-col justify-center text-left select-none">
        {/* Line 1: SFS + Badge */}
        <div className="flex items-center gap-2">
          <span
            className="text-2xl sm:text-3xl font-black tracking-tight font-display leading-none"
            style={{ color: navyColor }}
          >
            SFS
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/80 shadow-2xs">
            Ajoynagar, Kolkata
          </span>
        </div>

        {/* Line 2: English SATHI FINANCIAL SOLUTION */}
        <span
          className="text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase leading-snug mt-0.5"
          style={{ color: subtextColor }}
        >
          SATHI FINANCIAL SOLUTION
        </span>

        {/* Line 3: Bengali Regional Name (সাথি ফাইন্যান্সিয়াল সলিউশনস) */}
        {showBengali && (
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-wide leading-none mt-0.5"
            style={{ color: bengaliColor, fontFamily: "'Noto Sans Bengali', sans-serif" }}
          >
            সাথি ফাইন্যান্সিয়াল সলিউশনস
          </span>
        )}
      </div>
    </div>
  );
};
