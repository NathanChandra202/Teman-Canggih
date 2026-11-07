import React, { useState, useEffect } from 'react';
import { MessageSquare, Volume2, VolumeX, Tv, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { sound } from '../../utils/sound';

interface HeaderProps {
  onOpenContact: () => void;
  scrollProgress: number;
  isCrtActive: boolean;
  onToggleCrt: () => void;
  isSoundActive: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  scrollProgress,
  isCrtActive,
  onToggleCrt,
  isSoundActive,
  onToggleSound,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#about' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: '5 Disciplines', href: '#services' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Engage', href: '#collaboration' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-2 border-ink ${
        isScrolled 
          ? 'bg-cream-100/95 backdrop-blur-md py-2.5 shadow-retro-sm' 
          : 'bg-cream-100 py-3.5'
      }`}
    >
      {/* Top progress indicator bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-cobalt-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a 
          href="#" 
          onClick={() => sound.click()}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-ink text-cream-100 flex items-center justify-center font-mono font-black text-sm tracking-tighter border-2 border-ink shadow-retro-sm group-hover:-translate-y-0.5 group-hover:bg-cobalt-600 transition-all">
            <span className="text-retro-amber">T</span>C
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-base sm:text-lg tracking-tight text-ink uppercase">
                {COMPANY_INFO.name}
              </span>
              <span className="px-1.5 py-0.2 rounded bg-retro-amber/20 border border-retro-amber/60 text-[9px] font-mono font-bold text-ink">
                v2.6
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-ink-600 uppercase font-semibold">
              Think Beyond. Build Better.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-mono font-bold uppercase tracking-wider text-ink-700">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => sound.click()}
              className="py-1 hover:text-cobalt-600 hover:-translate-y-0.5 transition-transform"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right retro switches & contact button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Retro SFX Audio Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              sound.click();
            }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md border-2 border-ink text-[11px] font-mono font-bold transition-all shadow-retro-sm ${
              isSoundActive 
                ? 'bg-retro-green/20 text-ink border-ink hover:bg-retro-green/30' 
                : 'bg-cream-200 text-ink-500 border-ink/40'
            }`}
            title="Toggle Retro 8-bit Audio Effects"
          >
            {isSoundActive ? <Volume2 className="w-3.5 h-3.5 text-ink" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isSoundActive ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* Retro CRT Scanlines Toggle */}
          <button
            onClick={() => {
              sound.click();
              onToggleCrt();
            }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md border-2 border-ink text-[11px] font-mono font-bold transition-all shadow-retro-sm ${
              isCrtActive 
                ? 'bg-retro-amber/30 text-ink border-ink' 
                : 'bg-cream-200 text-ink-500 border-ink/40'
            }`}
            title="Toggle Vintage CRT Monitor Scanlines"
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isCrtActive ? 'CRT: ON' : 'CRT: OFF'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              sound.click();
              onOpenContact();
            }}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-retro transition-all hover:-translate-y-0.5 hover:shadow-retro-lg active:translate-y-0 active:shadow-retro-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mulai Diskusi</span>
            <span className="sm:hidden">Diskusi</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              sound.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2 rounded-lg border-2 border-ink bg-white shadow-retro-sm text-ink"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-cream-50 border-t-2 border-ink px-6 py-5 shadow-retro-lg">
          <nav className="flex flex-col space-y-3 font-mono font-bold text-xs uppercase tracking-wider text-ink">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  sound.click();
                  setMobileMenuOpen(false);
                }}
                className="py-1 hover:text-cobalt-600 flex items-center justify-between border-b border-ink/10 pb-2"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cobalt-600" />
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  sound.click();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-ink text-cream-100 font-mono font-bold text-xs border-2 border-ink shadow-retro"
              >
                <MessageSquare className="w-4 h-4 text-retro-amber" />
                <span>Hubungi via WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

