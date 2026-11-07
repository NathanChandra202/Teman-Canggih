import React, { useEffect } from 'react';
import { PAGES } from '../../data/companyData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  X, 
  Compass, 
  BookOpen,
  Keyboard
} from 'lucide-react';

interface PresentationDeckProps {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  onExitPresentation: () => void;
  onOpenNavigator: () => void;
  children: React.ReactNode;
}

export const PresentationDeck: React.FC<PresentationDeckProps> = ({
  currentPage,
  onPageChange,
  onExitPresentation,
  onOpenNavigator,
  children,
}) => {
  const totalPages = PAGES.length;
  const currentPageInfo = PAGES.find(p => p.pageNumber === currentPage) || PAGES[0];

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onExitPresentation();
      } else if (e.key === 'Home') {
        onPageChange(1);
      } else if (e.key === 'End') {
        onPageChange(totalPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  return (
    <div className="relative min-h-screen bg-ivory-100 flex flex-col justify-between overflow-x-hidden">
      {/* Presentation Top Control Bar */}
      <div className="sticky top-0 z-50 bg-ivory-100/90 backdrop-blur-md border-b border-carbon-900/10 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-cobalt-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-carbon-900">
            PITCH DECK MODE
          </span>
          <span className="text-carbon-400 font-mono text-xs hidden sm:inline">
            // {currentPageInfo.category}: {currentPageInfo.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Key shortcut helper */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-carbon-900/5 text-[10px] font-mono text-carbon-500">
            <Keyboard className="w-3 h-3 text-carbon-400" />
            <span>Use Arrow Keys [← / →] or Space</span>
          </div>

          {/* Navigator */}
          <button
            onClick={onOpenNavigator}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-carbon-900/15 bg-white text-xs font-mono text-carbon-700 hover:border-cobalt-500 transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-cobalt-600" />
            <span>{String(currentPage).padStart(2, '0')}/{totalPages}</span>
          </button>

          {/* Exit Mode */}
          <button
            onClick={onExitPresentation}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-carbon-900 text-ivory-50 text-xs font-medium hover:bg-carbon-800 transition-all"
            title="Exit Presentation Mode"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Scroll Mode</span>
          </button>
        </div>
      </div>

      {/* Slide Display Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full transition-opacity duration-200">
          {children}
        </div>
      </main>

      {/* Floating Bottom Navigation Deck */}
      <div className="sticky bottom-4 z-40 max-w-md mx-auto w-full px-4 no-print">
        <div className="p-2 rounded-2xl bg-carbon-950/90 text-ivory-50 border border-carbon-800 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage <= 1}
            className={`p-2 rounded-xl transition-all ${
              currentPage <= 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-carbon-800 active:scale-95 text-ivory-100'
            }`}
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicator Bar & Text */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-cobalt-400 font-bold">
                PAGE {String(currentPage).padStart(2, '0')}
              </span>
              <span className="text-carbon-500">/</span>
              <span className="text-carbon-400">{totalPages}</span>
            </div>
            {/* Progress line */}
            <div className="w-32 sm:w-48 h-1 bg-carbon-800 rounded-full mt-1.5 overflow-hidden">
              <div 
                className="h-full bg-cobalt-500 rounded-full transition-all duration-200"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages}
            className={`p-2 rounded-xl transition-all ${
              currentPage >= totalPages
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-carbon-800 active:scale-95 text-ivory-100'
            }`}
            title="Next Slide (Right Arrow or Space)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};


