import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { sound } from '../../utils/sound';

interface TCHeaderProps {
  onOpenContact: () => void;
  scrollProgress?: number;
  isSoundActive?: boolean;
  onToggleSound?: () => void;
}

// TC Logo SVG â€” matches uploaded brand identity exactly
const TCLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="tc-logo-grad" x1="0" y1="0" x2="60" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0F172A" />
        <stop offset="55%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    {/* T bar */}
    <rect x="0" y="0" width="34" height="7" rx="2" fill="url(#tc-logo-grad)" />
    {/* T stem */}
    <rect x="11" y="7" width="12" height="33" rx="2" fill="url(#tc-logo-grad)" />
    {/* C arc â€” right half open bracket shape */}
    <path
      d="M38 2 C52 2 60 10 60 20 C60 30 52 38 38 38"
      stroke="url(#tc-logo-grad)"
      strokeWidth="7"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const TCHeader: React.FC<TCHeaderProps> = ({
  onOpenContact,
  scrollProgress: externalProgress,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setInternalProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = externalProgress !== undefined ? externalProgress : internalProgress;

  const navLinks = [
    { label: 'Home',     href: '#hero' },
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Approach', href: '#methodology', hasBadge: true },
    { label: 'Work',     href: '#portfolio' },
    { label: 'About',    href: '#about' },
    { label: 'Why Us',   href: '#why-us' },
    { label: 'Contact',  href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-editorial ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 border-b border-tcDeep/10 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Reading Progress Line â€” Electric Blue */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-tcElectric to-tcCyan transition-all duration-150 ease-out z-50"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Lockup â€” TC Logo + Wordmark */}
        <a
          href="#hero"
          onClick={() => sound.playClick()}
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <TCLogo className="w-9 h-6 shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-base tracking-tight text-tcDeep flex items-center gap-1">
              Teman <span className="tc-gradient-text">Canggih</span>
            </span>
            <span className="font-mono text-[9px] font-semibold text-tcDeep/40 uppercase tracking-widest mt-0.5">
              Think Beyond. Build Better.
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 relative">
          {/* Ideas â†’ Real Solutions badge */}
          <div className="absolute -top-5 left-[58%] -translate-x-1/2 pointer-events-none">
            <span className="inline-flex items-center gap-1 font-display text-[10px] font-bold text-tcDeep/60 tracking-wider">
              <span>Ideas</span>
              <span className="text-tcElectric">â†’</span>
              <span>Real Solutions</span>
            </span>
          </div>

          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => sound.playBlip(550 + idx * 30)}
              className="group relative flex items-center gap-1 whitespace-nowrap py-2 font-display text-[13px] font-semibold tracking-tight text-tcDeep/75 hover:text-tcDeep transition-colors"
            >
              {item.hasBadge && (
                <span className="h-1.5 w-1.5 rounded-full bg-tcElectric mr-0.5" />
              )}

              <span className="relative block overflow-clip">
                <span className="block transition-transform duration-300 ease-editorial group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-editorial group-hover:translate-y-0 text-tcElectric">
                  {item.label}
                </span>
              </span>

              {item.hasDropdown && (
                <ChevronDown className="w-3 h-3 text-tcDeep/40 transition-transform group-hover:rotate-180" />
              )}

              {/* Animated underline â€” Electric Blue */}
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 transition-transform duration-300 ease-editorial group-hover:scale-x-100 bg-gradient-to-r from-tcElectric to-tcCyan" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playClick();
              onOpenContact();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-tcElectric to-tcCyan hover:opacity-90 text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 ease-editorial shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Let's Talk</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg text-tcDeep hover:bg-tcDeep/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-tcDeep/10 px-6 py-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="font-display font-semibold text-sm text-tcDeep hover:text-tcElectric py-2.5 border-b border-tcDeep/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] text-tcDeep/30">0{idx + 1}</span>
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-tcElectric to-tcCyan text-white font-display font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Let's Talk via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};





