import React from 'react';

interface SectionHeaderProps {
  pageNumber: string | number;
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  pageNumber,
  category,
  title,
  subtitle,
  description,
  align = 'left',
  dark = false,
}) => {
  const formattedPage = typeof pageNumber === 'number' 
    ? String(pageNumber).padStart(2, '0') 
    : pageNumber;

  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Swiss Editorial Top Metadata Bar */}
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className={`px-2 py-0.5 text-[11px] font-mono font-semibold tracking-wider uppercase rounded ${
          dark 
            ? 'bg-cobalt-500/20 text-cobalt-300 border border-cobalt-500/30' 
            : 'bg-cobalt-50 text-cobalt-700 border border-cobalt-200'
        }`}>
          PAGE {formattedPage} / 22
        </span>
        <span className={`text-[11px] font-mono tracking-widest uppercase ${
          dark ? 'text-carbon-400' : 'text-carbon-400'
        }`}>
          // {category}
        </span>
      </div>

      {/* Main Title */}
      <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${
        dark ? 'text-ivory-100' : 'text-carbon-900'
      }`}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-2 font-display text-lg sm:text-xl font-medium ${
          dark ? 'text-cobalt-400' : 'text-cobalt-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Optional Description */}
      {description && (
        <p className={`mt-3 max-w-3xl text-sm sm:text-base leading-relaxed ${
          align === 'center' ? 'mx-auto' : ''
        } ${dark ? 'text-carbon-300' : 'text-carbon-600'}`}>
          {description}
        </p>
      )}

      {/* Swiss Editorial Divider */}
      <div className={`mt-6 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className={`h-[1px] ${align === 'center' ? 'w-32' : 'w-24'} ${
          dark ? 'bg-carbon-700' : 'bg-carbon-900/20'
        }`} />
        <span className={`text-[10px] font-mono ${dark ? 'text-carbon-500' : 'text-carbon-400'}`}>
          +
        </span>
      </div>
    </div>
  );
};


