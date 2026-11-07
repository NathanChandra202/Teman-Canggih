import React from 'react';
import { PAGES } from '../../data/companyData';
import { X, ArrowRight, BookOpen } from 'lucide-react';

interface PageNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
}

export const PageNavigatorModal: React.FC<PageNavigatorModalProps> = ({
  isOpen,
  onClose,
  currentPage,
  onSelectPage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-carbon-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] bg-ivory-100 border border-carbon-900/20 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-carbon-900/10 flex items-center justify-between bg-ivory-200/50">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cobalt-500" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-carbon-900">
                Corporate Profile Index — 22 Pages
              </h3>
              <p className="text-xs font-mono text-carbon-500">
                TEMAN CANGGIH // SELECT ANY SECTION TO JUMP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-carbon-500 hover:text-carbon-900 hover:bg-carbon-900/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 22 Pages Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-ivory-100">
          {PAGES.map((page) => {
            const isCurrent = page.pageNumber === currentPage;
            return (
              <button
                key={page.pageNumber}
                onClick={() => {
                  onSelectPage(page.pageNumber);
                  onClose();
                }}
                className={`text-left p-3 rounded-lg border transition-all text-xs flex flex-col justify-between group ${
                  isCurrent
                    ? 'border-cobalt-500 bg-cobalt-50/80 shadow-sm ring-1 ring-cobalt-500/50'
                    : 'border-carbon-900/10 bg-white/70 hover:bg-white hover:border-carbon-900/30 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-[11px] font-bold ${
                      isCurrent ? 'text-cobalt-600' : 'text-carbon-400 group-hover:text-cobalt-600'
                    }`}>
                      PAGE {page.pageCode}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider uppercase text-carbon-400 px-1 py-0.5 rounded bg-carbon-900/5">
                      {page.category}
                    </span>
                  </div>
                  <p className={`font-display font-semibold text-xs leading-snug ${
                    isCurrent ? 'text-cobalt-900' : 'text-carbon-800'
                  }`}>
                    {page.title}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-carbon-900/5 flex items-center justify-between text-[10px] font-mono text-carbon-400 group-hover:text-cobalt-600 transition-colors">
                  <span>Go to page</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-carbon-900/10 bg-ivory-200/60 flex items-center justify-between text-xs font-mono text-carbon-500">
          <span>Swiss Editorial Architecture Edition</span>
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};



