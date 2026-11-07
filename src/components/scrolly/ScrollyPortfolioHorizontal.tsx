import React, { useRef, useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/companyData';
import { Check, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ScrollyPortfolioHorizontal: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translatePixels, setTranslatePixels] = useState<number>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      const containerHeight = rect.height - window.innerHeight;
      if (containerHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));

      if (trackRef.current) {
        const maxScrollDistance = Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 64);
        setTranslatePixels(progress * maxScrollDistance);
      }

      const cardIndex = Math.min(
        PORTFOLIO_ITEMS.length - 1,
        Math.floor(progress * PORTFOLIO_ITEMS.length)
      );
      if (cardIndex !== activeCardIndex) {
        setActiveCardIndex(cardIndex);
        sound.blip();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeCardIndex]);

  return (
    <section 
      id="portfolio" 
      ref={targetRef} 
      className="relative h-[320vh] border-b-2 border-ink bg-cream-100"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-retro-green/20 text-ink font-mono font-black text-xs uppercase border-2 border-ink shadow-retro-sm">
                HORIZONTAL SCROLLYTELLING
              </span>
              <span className="font-mono text-xs font-bold text-ink-600">
                // CASE STUDY REEL
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-ink uppercase tracking-tight">
              Selected Proof of Capability
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-black">
            <span className="px-3 py-1 rounded border-2 border-ink bg-ink text-retro-amber shadow-retro-sm">
              PROYEK {activeCardIndex + 1} / {PORTFOLIO_ITEMS.length}
            </span>
            <span className="text-ink-600 hidden sm:inline">← SCROLL VERTIKAL UNTUK MENGGESER HORIZONTAL →</span>
          </div>
        </div>

        {/* Horizontal Track that slides as you scroll */}
        <div className="w-full overflow-hidden px-4 sm:px-8">
          <div 
            ref={trackRef}
            className="flex gap-6 sm:gap-8 transition-transform duration-75 ease-out will-change-transform"
            style={{ transform: `translateX(-${translatePixels}px)` }}
          >
            {PORTFOLIO_ITEMS.map((item, idx) => {
              const isActive = idx === activeCardIndex;
              return (
                <div
                  key={item.id}
                  className={`w-[85vw] sm:w-[580px] lg:w-[680px] shrink-0 p-6 sm:p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg transition-all duration-300 flex flex-col justify-between ${
                    isActive ? 'scale-100 ring-2 ring-cobalt-500' : 'scale-[0.98] opacity-90'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Card Titlebar */}
                    <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-retro-amber border border-ink font-mono font-black text-[10px] uppercase text-ink">
                          CASE 0{idx + 1}
                        </span>
                        <span className="font-mono text-xs font-bold text-ink-500">
                          {item.clientCategory}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded border border-retro-red text-retro-red font-mono font-black text-[9px] uppercase tracking-wider">
                        VERIFIED RESULT
                      </span>
                    </div>

                    {/* Headline */}
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-ink uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-cobalt-600 mt-1">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-ink/40 bg-cream-50 space-y-1">
                        <span className="font-mono text-[10px] font-black uppercase text-retro-red block">
                          TANTANGAN:
                        </span>
                        <p className="text-ink-700 leading-relaxed font-normal">{item.challenge}</p>
                      </div>

                      <div className="p-3 rounded-xl border border-ink/40 bg-retro-green/15 space-y-1">
                        <span className="font-mono text-[10px] font-black uppercase text-ink block">
                          SOLUSI TEMAN CANGGIH:
                        </span>
                        <p className="text-ink-800 leading-relaxed font-bold">{item.solution}</p>
                      </div>
                    </div>

                    {/* Quantified Metrics */}
                    <div className="space-y-1.5 pt-1">
                      <span className="font-mono text-[10px] font-black uppercase text-ink-600 block">
                        HASIL & DAMPAK TERUKUR:
                      </span>
                      {item.results.map((res, rIdx) => (
                        <div key={rIdx} className="p-2 rounded-lg border border-ink/40 bg-cream-50 flex items-center gap-2 text-xs text-ink font-bold">
                          <Check className="w-3.5 h-3.5 text-retro-green shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer with Tech Stack */}
                  <div className="mt-5 pt-3 border-t-2 border-ink flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.slice(0, 4).map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-ink text-cream-100 font-mono text-[10px] font-bold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-[10px] font-black text-cobalt-600 uppercase">
                      CASE ARCHIVE TC-2026
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

