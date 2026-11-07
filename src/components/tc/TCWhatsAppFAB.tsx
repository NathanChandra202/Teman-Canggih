import React from 'react';
import { MessageCircle } from 'lucide-react';
import { sound } from '../../utils/sound';

export const TCWhatsAppFAB: React.FC = () => {
  const handleClick = () => {
    sound.playClick();
  };

  return (
    <aside aria-label="Contact actions" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/6289508437967?text=Halo%20Tim%20Teman%20Canggih%2C%20saya%20tertarik%20untuk%20diskusi%20kebutuhan%20solusi%20teknologi%20dan%20bisnis."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-tcDeep text-white shadow-[0_20px_45px_-12px_rgba(15,23,42,0.55)] border border-white/20 transition-all duration-300 ease-editorial hover:scale-105 active:scale-95"
        aria-label="Contact Teman Canggih on WhatsApp"
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-60 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-tcDeep/20 pointer-events-none" />

        {/* WhatsApp Green Circle Icon */}
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:rotate-6">
          <MessageCircle className="w-5 h-5 fill-white text-white" />
        </span>

        {/* Text Label */}
        <span className="font-display font-bold text-xs sm:text-sm text-white tracking-wide">
          Contact Us
        </span>

        {/* Online Amber Dot Indicator (Matching TC Image 1) */}
        <span className="w-2.5 h-2.5 rounded-full bg-tcElectric shadow-[0_0_0_3px_rgba(251,186,0,0.25)] ml-0.5" />
      </a>
    </aside>
  );
};






