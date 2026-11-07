import React from 'react';
import { PAGES } from '../../data/companyData';

interface EditorialSidebarProps {
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
}

export const EditorialSidebar: React.FC<EditorialSidebarProps> = ({
  currentPage,
  onSelectPage,
}) => {
  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-start gap-1 p-2 rounded-xl bg-ivory-100/80 backdrop-blur-md border border-carbon-900/10 shadow-sm no-print">
      <div className="px-2 py-1 text-[9px] font-mono text-carbon-400 uppercase tracking-wider mb-1">
        Index
      </div>
      <div className="max-h-[65vh] overflow-y-auto space-y-0.5 pr-1 scrollbar-none">
        {PAGES.map((page) => {
          const isActive = page.pageNumber === currentPage;
          return (
            <button
              key={page.pageNumber}
              onClick={() => onSelectPage(page.pageNumber)}
              className={`group flex items-center gap-2 px-2 py-1 rounded text-left transition-all ${
                isActive
                  ? 'bg-carbon-900 text-ivory-50'
                  : 'text-carbon-400 hover:text-carbon-900 hover:bg-carbon-900/5'
              }`}
              title={`${page.pageCode} — ${page.title}`}
            >
              <span className={`font-mono text-[10px] font-bold ${
                isActive ? 'text-cobalt-400' : 'text-carbon-400 group-hover:text-carbon-700'
              }`}>
                {page.pageCode}
              </span>
              <span className={`text-[11px] font-medium max-w-[100px] truncate ${
                isActive ? 'text-white' : 'hidden group-hover:inline-block text-carbon-700'
              }`}>
                {page.shortTitle}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};


