import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { COMPANY_INFO } from '../../data/companyData';
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

interface Page01CoverProps {
  onStartExplore: () => void;
  onOpenPitch: () => void;
}

export const Page01Cover: React.FC<Page01CoverProps> = ({
  onStartExplore,
  onOpenPitch,
}) => {
  return (
    <PageContainer pageNumber={1} dark className="bg-carbon-950 text-ivory-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-6">
        {/* Left Column: Typography & Corporate Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          {/* Top Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cobalt-500/20 text-cobalt-300 border border-cobalt-500/40">
              <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse" />
              OFFICIAL CORPORATE PROFILE 2026
            </span>
            <span className="text-xs font-mono text-carbon-400">
              DOC // {COMPANY_INFO.documentCode}
            </span>
          </div>

          {/* Main Giant Swiss Title */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white">
              TEMAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory-100 to-cobalt-400">
                CANGGIH
              </span>
            </h1>

            <div className="pt-2 flex items-center gap-3 text-cobalt-400">
              <div className="h-[2px] w-12 bg-cobalt-500" />
              <p className="font-display font-semibold text-lg sm:text-2xl tracking-tight text-cobalt-300">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Subtitle / Firm Description */}
          <div className="space-y-4 max-w-xl">
            <p className="text-base sm:text-lg text-carbon-300 font-light leading-relaxed">
              An independent multidisciplinary firm delivering high-caliber solutions across <strong className="text-white font-medium">Digital Systems</strong>, <strong className="text-white font-medium">Brand Strategy</strong>, <strong className="text-white font-medium">Cybersecurity</strong>, <strong className="text-white font-medium">Industrial Operations</strong>, and <strong className="text-white font-medium">Business Analysis</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-carbon-400">
              <span className="px-2.5 py-1 rounded bg-carbon-900 border border-carbon-800">B2B Solutions</span>
              <span className="px-2.5 py-1 rounded bg-carbon-900 border border-carbon-800">Enterprise Systems</span>
              <span className="px-2.5 py-1 rounded bg-carbon-900 border border-carbon-800">Industrial Consulting</span>
              <span className="px-2.5 py-1 rounded bg-carbon-900 border border-carbon-800">Brand Engineering</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartExplore}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-medium text-sm transition-all shadow-lg hover:shadow-cobalt-500/25 hover:-translate-y-0.5"
            >
              <span>Explore Corporate Profile</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenPitch}
              className="flex items-center gap-2 px-5 py-3.5 rounded-lg border border-carbon-700 bg-carbon-900 hover:bg-carbon-850 text-carbon-200 hover:text-white font-medium text-sm transition-all"
            >
              <span>Launch Pitch Deck Mode</span>
              <ArrowRight className="w-4 h-4 text-cobalt-400" />
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Geometry Wireframe & Metadata Blueprint */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-carbon-900/90 border border-carbon-800/80 shadow-2xl backdrop-blur-sm overflow-hidden">
            {/* Blueprint Grid Accent */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-25" />

            {/* Corner Markers */}
            <div className="flex justify-between items-center text-[10px] font-mono text-carbon-500 mb-6">
              <span>[LOC: 106.8456° E, 6.2088° S]</span>
              <span className="text-cobalt-400 font-semibold">SWISS SPEC 2.4</span>
            </div>

            {/* Architectural Abstract Wireframe Structure */}
            <div className="relative aspect-square max-w-[340px] mx-auto border border-dashed border-carbon-700 rounded-xl p-4 flex flex-col justify-between">
              {/* Top Layer */}
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded border border-carbon-700 bg-carbon-950 flex items-center justify-center font-mono text-xs text-cobalt-400">
                  01
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-carbon-400">STRUCTURE</div>
                  <div className="text-xs font-mono text-white font-bold">22 SECTIONS</div>
                </div>
              </div>

              {/* Center Graphic */}
              <div className="py-6 text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full border border-cobalt-500/40 bg-cobalt-500/10 flex items-center justify-center text-cobalt-400">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="font-display font-bold text-sm tracking-wide text-white">
                  5 CORE PRACTICE AREAS
                </div>
                <p className="text-[11px] font-mono text-carbon-400">
                  Tech • Branding • Cyber • Factory • Business
                </p>
              </div>

              {/* Bottom Specs */}
              <div className="pt-3 border-t border-carbon-800 grid grid-cols-2 gap-2 text-[10px] font-mono text-carbon-400">
                <div>
                  <span className="text-carbon-500 block">ORGANIZATION</span>
                  <span className="text-carbon-200">Independent Firm</span>
                </div>
                <div className="text-right">
                  <span className="text-carbon-500 block">CORE POOL</span>
                  <span className="text-cobalt-300 font-medium">7–10 Specialists</span>
                </div>
              </div>
            </div>

            {/* Phase 2 Asset Notice */}
            <div className="mt-6 pt-4 border-t border-carbon-800 text-center">
              <span className="inline-block px-3 py-1 rounded bg-carbon-950/60 border border-carbon-800 text-[10px] font-mono text-carbon-400">
                [PHASE 2 ASSET // COVER ARCHITECTURAL INDUSTRIAL COMPOSITION]
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


