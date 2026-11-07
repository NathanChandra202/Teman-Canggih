import React from 'react';

interface PageContainerProps {
  id?: string;
  pageNumber: number;
  className?: string;
  dark?: boolean;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  id,
  pageNumber,
  className = '',
  dark = false,
  children,
}) => {
  const formattedPage = String(pageNumber).padStart(2, '0');

  return (
    <section
      id={id || `page-${formattedPage}`}
      data-page-number={pageNumber}
      className={`relative min-h-[90vh] lg:min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 flex flex-col justify-between border-b swiss-border page-break-after transition-colors ${
        dark 
          ? 'bg-carbon-900 text-ivory-100' 
          : 'bg-[#FAF8F4] text-carbon-900'
      } ${className}`}
    >
      {/* Background Grid Accent */}
      <div 
        className={`absolute inset-0 pointer-events-none opacity-40 ${
          dark ? 'bg-grid-pattern-dark bg-grid-md' : 'bg-grid-pattern bg-grid-md'
        }`} 
      />

      {/* Swiss Editorial Corner Crosshairs */}
      <div className={`absolute top-4 left-4 font-mono text-[10px] select-none ${dark ? 'text-carbon-600' : 'text-carbon-400'}`}>
        + TC-P{formattedPage}
      </div>
      <div className={`absolute top-4 right-4 font-mono text-[10px] select-none ${dark ? 'text-carbon-600' : 'text-carbon-400'}`}>
        TEMAN CANGGIH +
      </div>
      <div className={`absolute bottom-4 left-4 font-mono text-[10px] select-none ${dark ? 'text-carbon-600' : 'text-carbon-400'}`}>
        + CORP-PROFILE
      </div>
      <div className={`absolute bottom-4 right-4 font-mono text-[10px] select-none ${dark ? 'text-cobalt-400 font-semibold' : 'text-cobalt-600 font-semibold'}`}>
        PAGE {formattedPage} / 22 +
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {children}
      </div>

      {/* Editorial Footer Bar */}
      <div className="relative z-10 mt-12 pt-4 border-t swiss-border flex flex-wrap items-center justify-between text-[11px] font-mono text-carbon-400 gap-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-carbon-500">TEMAN CANGGIH</span>
          <span>•</span>
          <span>Think Beyond. Build Better.</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">SWISS EDITORIAL SYSTEM</span>
          <span className="px-2 py-0.5 rounded bg-carbon-900/5 text-carbon-600 font-semibold">
            {formattedPage} / 22
          </span>
        </div>
      </div>
    </section>
  );
};


