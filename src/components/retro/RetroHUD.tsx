import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Tv, Compass, ArrowUp, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { sound } from '../../utils/sound';

interface RetroHUDProps {
  scrollProgress: number;
  currentSection: string;
  isCrtActive: boolean;
  onToggleCrt: () => void;
  isSoundActive: boolean;
  onToggleSound: () => void;
  onOpenContact: () => void;
}

export const RetroHUD: React.FC<RetroHUDProps> = ({
  scrollProgress,
  currentSection,
  isCrtActive,
  onToggleCrt,
  isSoundActive,
  onToggleSound,
  onOpenContact,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Top Floating Retro HUD Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-3 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Brand & Section Indicator */}
          <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-ink bg-cream-50/95 shadow-retro-sm backdrop-blur-md">
            <a 
              href="#" 
              onClick={() => sound.click()}
              className="flex items-center gap-2 group"
            >
              <div className="w-6 h-6 rounded bg-ink text-retro-amber flex items-center justify-center font-mono font-black text-xs border border-ink">
                TC
              </div>
              <span className="font-display font-black text-sm uppercase text-ink tracking-tight">
                TEMAN CANGGIH
              </span>
            </a>
            <span className="text-ink-400 font-mono text-xs hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] font-bold text-cobalt-600 uppercase">
              <span className="w-2 h-2 rounded-full bg-retro-green animate-pulse" />
              <span>{currentSection}</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Mouse Coordinates HUD */}
            <div className="hidden lg:flex items-center px-2.5 py-1.5 rounded-lg border-2 border-ink bg-cream-50/95 font-mono text-[10px] font-bold text-ink-600 shadow-retro-sm">
              [X:{coords.x} Y:{coords.y}]
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                sound.click();
                onToggleSound();
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border-2 border-ink font-mono text-xs font-bold transition-all shadow-retro-sm ${
                isSoundActive ? 'bg-retro-green/20 text-ink' : 'bg-cream-200 text-ink-400'
              }`}
              title="Toggle Retro 8-bit Audio SFX"
            >
              {isSoundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isSoundActive ? 'SFX: ON' : 'SFX: OFF'}</span>
            </button>

            {/* CRT Toggle */}
            <button
              onClick={() => {
                sound.click();
                onToggleCrt();
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border-2 border-ink font-mono text-xs font-bold transition-all shadow-retro-sm ${
                isCrtActive ? 'bg-retro-amber/30 text-ink' : 'bg-cream-200 text-ink-400'
              }`}
              title="Toggle Retro CRT Scanlines"
            >
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isCrtActive ? 'CRT: ON' : 'CRT: OFF'}</span>
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => {
                sound.click();
                onOpenContact();
              }}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-retro transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Pitch</span>
            </button>
          </div>
        </div>
      </header>

      {/* Right Edge Scrollytelling Progress Bar */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 pointer-events-none">
        <div className="p-1 rounded-full border-2 border-ink bg-cream-50 shadow-retro-sm flex flex-col items-center gap-1.5 pointer-events-auto">
          {['hero', 'manifesto', 'philosophy', 'capabilities', 'methodology', 'portfolio', 'team', 'configurator', 'contact'].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => sound.click()}
              className={`w-2.5 h-2.5 rounded-full transition-all border border-ink ${
                currentSection.toLowerCase().includes(sec)
                  ? 'bg-cobalt-500 scale-125'
                  : 'bg-cream-300 hover:bg-retro-amber'
              }`}
              title={sec.toUpperCase()}
            />
          ))}
        </div>
        <div className="px-1.5 py-0.5 rounded border border-ink bg-ink text-retro-amber font-mono text-[9px] font-black">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </>
  );
};


