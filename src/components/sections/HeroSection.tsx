import React from 'react';
import { ArrowDown, MessageSquare, ArrowRight, Sparkles, Shield, Cpu, Code2, Palette, BarChart3, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-carbon-900/10">
      {/* Background Subtle Swiss Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-35 pointer-events-none" />

      {/* Decorative Technical Crosshairs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col space-y-6 sm:space-y-8">
          {/* Metadata pill badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-carbon-900 text-ivory-100">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400 animate-pulse" />
              Technology & Business Solutions Firm
            </span>
            <span className="text-xs font-mono text-carbon-400 hidden sm:inline">
              // JAKARTA • BANDUNG
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-carbon-950 leading-[0.98]">
              TEMAN CANGGIH
            </h1>

            <div className="flex items-center gap-3 text-cobalt-600">
              <div className="h-[2px] w-8 sm:w-12 bg-cobalt-500" />
              <p className="font-display font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight text-carbon-900">
                Think Beyond. Build Better.
              </p>
            </div>
          </div>

          {/* Value narrative */}
          <p className="text-base sm:text-xl text-carbon-700 max-w-3xl font-light leading-relaxed">
            Kami adalah tim independen multidisiplin yang membantu bisnis dan organisasi menjawab tantangan melalui integrasi <strong className="text-carbon-950 font-medium">Digital Systems</strong>, <strong className="text-carbon-950 font-medium">Brand Development</strong>, <strong className="text-carbon-950 font-medium">Cyber Analysis</strong>, <strong className="text-carbon-950 font-medium">Factory Operations</strong>, dan <strong className="text-carbon-950 font-medium">Business Strategy</strong>.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-carbon-900 hover:bg-carbon-800 text-ivory-50 text-sm font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Jelajahi Kapabilitas</span>
              <ArrowDown className="w-4 h-4 text-cobalt-400" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-carbon-900/15 bg-white/80 hover:bg-white text-carbon-900 text-sm font-medium transition-all hover:border-carbon-900/30"
            >
              <MessageSquare className="w-4 h-4 text-cobalt-600" />
              <span>Jadwalkan Pitch / Diskusi</span>
            </button>
          </div>

          {/* 5 disciplines summary ticker */}
          <div className="pt-8 border-t border-carbon-900/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
            {[
              { num: '01', title: 'System Development', desc: 'Software & Cloud' },
              { num: '02', title: 'Branding Development', desc: 'Identity & Strategy' },
              { num: '03', title: 'Cyber Analysis', desc: 'VAPT & Security' },
              { num: '04', title: 'Factory Consulting', desc: 'Lean & Industry IoT' },
              { num: '05', title: 'Business Analysis', desc: 'Feasibility & Strategy' },
            ].map((d) => (
              <a
                key={d.num}
                href="#services"
                className="p-3 rounded-lg border border-carbon-900/10 bg-white/60 hover:bg-white hover:border-cobalt-500/40 transition-all block group"
              >
                <span className="font-mono text-[10px] text-cobalt-600 font-bold block mb-0.5">
                  {d.num} /
                </span>
                <span className="font-display font-bold text-carbon-900 block leading-tight group-hover:text-cobalt-600 transition-colors">
                  {d.title}
                </span>
                <span className="text-[11px] text-carbon-500 block mt-0.5">
                  {d.desc}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


