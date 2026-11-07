import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { Compass, Lightbulb, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export const Page02Opening: React.FC = () => {
  return (
    <PageContainer pageNumber={2}>
      <SectionHeader
        pageNumber={2}
        category="OPENING STATEMENT"
        title="Ideas Are Everywhere. Meaningful Solutions Make the Difference."
        subtitle="Moving Beyond Ordinary Answers"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Big Editorial Statement */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-carbon-900/10 shadow-sm space-y-5 relative">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cobalt-500 rounded-l" />

            <p className="text-base sm:text-lg text-carbon-800 leading-relaxed font-light">
              Every business, organization, and industry faces challenges that require more than ordinary solutions.
            </p>

            <p className="text-base sm:text-lg text-carbon-900 leading-relaxed font-normal">
              At <strong className="text-carbon-950 font-bold">Teman Canggih</strong>, we believe that meaningful progress begins with understanding the problem, exploring possibilities, and building solutions with purpose.
            </p>

            <p className="text-sm sm:text-base text-carbon-700 leading-relaxed">
              By combining technology, creativity, analytical thinking, and strategic perspectives, we work to help businesses and organizations navigate challenges and move forward.
            </p>

            {/* Core Manifesto Highlight */}
            <div className="pt-4 border-t border-carbon-900/10">
              <div className="p-4 rounded-lg bg-carbon-900 text-ivory-50 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cobalt-400 shrink-0" />
                <p className="font-display font-bold text-sm sm:text-base tracking-wide text-ivory-100">
                  "We think beyond limitations. We build for better possibilities."
                </p>
              </div>
            </div>
          </div>

          {/* 3 Quick Foundational Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-lg border border-carbon-900/10 bg-ivory-200/50">
              <span className="font-mono text-[10px] text-cobalt-600 font-bold block mb-1">01 / PERSPECTIVE</span>
              <p className="text-xs font-semibold text-carbon-900">Understanding First</p>
              <p className="text-[11px] text-carbon-600 mt-1">Deep empathy for operational realities.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-carbon-900/10 bg-ivory-200/50">
              <span className="font-mono text-[10px] text-cobalt-600 font-bold block mb-1">02 / POSSIBILITIES</span>
              <p className="text-xs font-semibold text-carbon-900">Exploring Options</p>
              <p className="text-[11px] text-carbon-600 mt-1">Cross-pollinating tech and design.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-carbon-900/10 bg-ivory-200/50">
              <span className="font-mono text-[10px] text-cobalt-600 font-bold block mb-1">03 / PURPOSE</span>
              <p className="text-xs font-semibold text-carbon-900">Building for Impact</p>
              <p className="text-[11px] text-carbon-600 mt-1">Measurable progress and longevity.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Photography Placeholder */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ArchitecturalPlaceholder
            label="MONUMENTAL MODERN ARCHITECTURE // PERSPECTIVE & HORIZON"
            category="ARCHITECTURAL MONOLITH"
            aspectRatio="4/3"
            badge="PHASE 2 VISUAL 01"
          />
          <div className="p-3 rounded-lg border border-carbon-900/10 bg-white/60 text-[11px] font-mono text-carbon-500 flex items-center justify-between">
            <span>EDITORIAL NOTE: WARM IVORY MINIMALISM</span>
            <span className="text-cobalt-600 font-semibold">PAGE 02 / 22</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


