import React from 'react';
import { ArrowDown, MessageSquare, ArrowRight, Sparkles, Terminal, Activity, Zap, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { RetroTerminalWidget } from '../retro/RetroTerminalWidget';
import { RetroMarquee } from '../retro/RetroMarquee';
import { sound } from '../../utils/sound';

interface RetroHeroProps {
  onOpenContact: () => void;
}

export const RetroHero: React.FC<RetroHeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 overflow-hidden bg-cream-100">
      {/* Background Dot Matrix Texture */}
      <div className="absolute inset-0 bg-dot-matrix bg-dot-sm opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Bold Retro Typography & Hook */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top pill badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md border-2 border-ink bg-retro-amber font-mono font-black text-xs text-ink shadow-retro-sm">
                <span className="w-2 h-2 rounded-full bg-ink animate-ping" />
                SYSTEMS & STRATEGY FIRM
              </span>
              <span className="px-2.5 py-1 rounded-md border-2 border-ink bg-cream-50 font-mono text-[11px] font-bold text-ink">
                DOC REF: TC-2026-CORP
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink uppercase leading-[0.95]">
                TEMAN <br />
                <span className="text-cobalt-500 underline decoration-retro-amber decoration-4 underline-offset-8">
                  CANGGIH
                </span>
              </h1>

              <div className="pt-2 flex items-center gap-3">
                <div className="px-3 py-1 rounded border-2 border-ink bg-ink text-retro-amber font-mono font-black text-sm sm:text-base shadow-retro-sm">
                  THINK BEYOND. BUILD BETTER.
                </div>
              </div>
            </div>

            {/* Narrative summary */}
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal max-w-2xl">
              An independent multidisciplinary collective engineering high-caliber solutions across <strong className="text-ink font-bold">Digital Systems</strong>, <strong className="text-ink font-bold">Brand Strategy</strong>, <strong className="text-ink font-bold">Cyber Defense</strong>, <strong className="text-ink font-bold">Industrial Operations</strong>, and <strong className="text-ink font-bold">Business Feasibility</strong>.
            </p>

            {/* Call to actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                onClick={() => sound.click()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-ink text-cream-100 font-mono font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-retro hover:-translate-y-0.5 hover:shadow-retro-lg active:translate-y-0 active:shadow-retro-sm transition-all"
              >
                <span>Jelajahi 5 Kapabilitas</span>
                <ArrowDown className="w-4 h-4 text-retro-amber" />
              </a>

              <button
                onClick={() => {
                  sound.click();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cream-50 text-ink font-mono font-bold text-xs uppercase tracking-wider border-2 border-ink shadow-retro hover:-translate-y-0.5 hover:shadow-retro-lg active:translate-y-0 active:shadow-retro-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-cobalt-600" />
                <span>Jadwalkan Pitching B2B</span>
              </button>
            </div>

            {/* Quick Metrics Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg border-2 border-ink bg-cream-50 shadow-retro-sm">
                <span className="text-[10px] text-ink-500 block">KAPABILITAS</span>
                <span className="font-black text-lg text-ink">5 BIDANG</span>
              </div>
              <div className="p-3 rounded-lg border-2 border-ink bg-cream-50 shadow-retro-sm">
                <span className="text-[10px] text-ink-500 block">CORE POOL</span>
                <span className="font-black text-lg text-cobalt-600">7–10 TALENTA</span>
              </div>
              <div className="p-3 rounded-lg border-2 border-ink bg-cream-50 shadow-retro-sm">
                <span className="text-[10px] text-ink-500 block">INTEGRASI</span>
                <span className="font-black text-lg text-ink">100% UTUH</span>
              </div>
              <div className="p-3 rounded-lg border-2 border-ink bg-cream-50 shadow-retro-sm">
                <span className="text-[10px] text-ink-500 block">MODEL KERJA</span>
                <span className="font-black text-lg text-retro-orange">B2B AGILE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Retro Diagnostic Console */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Retro sticker badge */}
              <div className="absolute -top-3.5 -right-2 z-20 px-3 py-1 rounded bg-retro-orange text-white font-mono font-black text-[10px] uppercase border-2 border-ink shadow-retro-sm rotate-2">
                INTERACTIVE CONSOLE
              </div>

              <RetroTerminalWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Retro Marquee Ticker */}
      <RetroMarquee />
    </section>
  );
};


