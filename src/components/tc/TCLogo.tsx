import React from 'react';

interface TCLogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  subtitleClassName?: string;
  variant?: 'full' | 'icon';
}

/**
 * Official Teman Canggih Slanted Geometric Monogram (T + C)
 * Recreated accurately from the official brand identity:
 * - Slanted dynamic 18-degree italic posture
 * - Left 'T': Deep Blue (#0F172A) with facet shading
 * - Right 'C': Electric Blue (#2563EB) to Cyan (#06B6D4) gradient
 * - Typography: Poppins Bold "Teman Canggih"
 */
export const TCLogo: React.FC<TCLogoProps> = ({
  className = 'w-10 h-7',
  showText = false,
  textClassName = 'text-base font-bold text-tcDeep',
  subtitleClassName = 'text-[9px] text-tcDeep/50 font-mono tracking-widest uppercase',
}) => {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Teman Canggih Logo"
      >
        <defs>
          {/* T Gradient: Dark Deep Navy #0B1120 -> Deep Blue #0F172A */}
          <linearGradient id="tc-t-grad" x1="10" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* T Top Facet Highlight */}
          <linearGradient id="tc-t-top" x1="15" y1="12" x2="75" y2="35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="60%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* C Gradient: Electric Blue #2563EB -> Cyan #06B6D4 */}
          <linearGradient id="tc-c-grad" x1="55" y1="12" x2="155" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Inner Glow / Drop shadow filter */}
          <filter id="tc-shadow" x="-10%" y="-10%" width="125%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#tc-shadow)">
          {/* --- T SHAPE (Slanted Left Glyph) --- */}
          {/* T Top Horizontal Bar (Slanted Rhombus) */}
          <path
            d="M 18 16 L 82 16 L 70 34 L 6 34 Z"
            fill="url(#tc-t-top)"
          />
          {/* T Vertical Stem (Slanted Parallelogram) */}
          <path
            d="M 52 28 L 32 88 L 12 88 L 32 28 Z"
            fill="url(#tc-t-grad)"
          />

          {/* --- C SHAPE (Slanted Dynamic Right Glyph) --- */}
          {/* The C loops dynamically from top-right down and under */}
          <path
            d="M 112 16 L 68 16 L 46 84 L 118 84 L 128 66 L 72 66 L 82 34 L 122 34 Z"
            fill="url(#tc-c-grad)"
          />
          {/* Beveled C corner fold accent */}
          <path
            d="M 68 16 L 82 34 L 56 34 Z"
            fill="#1D4ED8"
            opacity="0.6"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display tracking-tight flex items-center gap-1 ${textClassName}`}>
            Teman <span className="text-tcElectric font-extrabold">Canggih</span>
          </span>
          <span className={`mt-0.5 ${subtitleClassName}`}>
            Think Beyond. Build Better.
          </span>
        </div>
      )}
    </div>
  );
};

export default TCLogo;

