import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { Eye, Hammer, Sparkles, Compass } from 'lucide-react';

export const Page05Philosophy: React.FC = () => {
  return (
    <PageContainer pageNumber={5}>
      <SectionHeader
        pageNumber={5}
        category="OUR PHILOSOPHY"
        title="Think Beyond. Build Better."
        subtitle="The Dual Guiding Principle of Teman Canggih"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Two Halves Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Think Beyond Card */}
            <div className="p-6 rounded-xl border border-carbon-900/10 bg-white shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-cobalt-500/40 transition-all">
              <div className="w-1.5 h-full absolute top-0 left-0 bg-carbon-900 group-hover:bg-cobalt-500 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-carbon-900/5 text-carbon-900">
                    <Eye className="w-5 h-5 text-cobalt-600" />
                  </div>
                  <span className="font-mono text-xs text-carbon-400 font-bold">PILLAR 01</span>
                </div>
                <h3 className="font-display font-bold text-xl text-carbon-900 mb-2">
                  Think Beyond.
                </h3>
                <p className="text-sm text-carbon-700 leading-relaxed">
                  Represents our commitment to looking beyond immediate problems, understanding broader perspectives, and identifying hidden opportunities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-carbon-900/10 text-[11px] font-mono text-carbon-500">
                // Broad vision • Root cause • Horizon scanning
              </div>
            </div>

            {/* Build Better Card */}
            <div className="p-6 rounded-xl border border-carbon-900/10 bg-white shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-cobalt-500/40 transition-all">
              <div className="w-1.5 h-full absolute top-0 left-0 bg-cobalt-500" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-cobalt-50 text-cobalt-600">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-cobalt-600 font-bold">PILLAR 02</span>
                </div>
                <h3 className="font-display font-bold text-xl text-carbon-900 mb-2">
                  Build Better.
                </h3>
                <p className="text-sm text-carbon-700 leading-relaxed">
                  Represents our dedication to translating ideas and strategies into practical solutions that create measurable and lasting value.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-carbon-900/10 text-[11px] font-mono text-cobalt-600">
                // Rigorous craft • Practical value • Scalability
              </div>
            </div>
          </div>

          {/* Technology as a Means Manifesto Banner */}
          <div className="p-6 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800 relative overflow-hidden">
            <div className="relative z-10 flex items-start gap-4">
              <div className="p-2 rounded bg-cobalt-500/20 text-cobalt-400 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-cobalt-400">
                  CORE CONVICTION
                </span>
                <p className="font-display font-bold text-base sm:text-lg text-white">
                  "We believe technology is not the destination. It is a means to create meaningful progress."
                </p>
                <p className="text-xs text-carbon-400 leading-relaxed pt-1">
                  Technology divorced from human purpose or operational context is mere complexity. True sophistication lies in solving the right problem cleanly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Photography Placeholder */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ArchitecturalPlaceholder
            label="MINIMALIST CONCRETE MONUMENT // PRECISION IN GEOMETRY & LIGHT"
            category="ARCHITECTURAL BRUTALISM & MINIMALISM"
            aspectRatio="4/3"
            badge="PHASE 2 ASSET 04"
          />
          <div className="p-3 rounded-lg border border-carbon-900/10 bg-white flex items-center justify-between text-xs font-mono text-carbon-600">
            <span>PHILOSOPHY LOCKUP</span>
            <span className="text-cobalt-600 font-semibold">PAGE 05 / 22</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


