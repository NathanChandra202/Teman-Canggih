import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { Users2, Lightbulb, Workflow, Cpu, Layers } from 'lucide-react';

export const Page04WhoWeAre: React.FC = () => {
  return (
    <PageContainer pageNumber={4}>
      <SectionHeader
        pageNumber={4}
        category="WHO WE ARE"
        title="Diverse Capabilities, Singular Dedication"
        subtitle="A Collaborative Collective of Practitioners"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Team Narrative & Structure */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-carbon-900/10 shadow-sm space-y-4">
            <p className="text-base sm:text-lg text-carbon-900 leading-relaxed font-light">
              We are a collaborative team of individuals with diverse interests and capabilities across <strong className="text-carbon-950 font-semibold">technology, creativity, security, and business analysis</strong>.
            </p>

            <p className="text-sm sm:text-base text-carbon-700 leading-relaxed">
              We believe that effective solutions are not created through technical capabilities alone, but through a disciplined combination of <strong className="text-carbon-900 font-medium">understanding, planning, execution, and continuous improvement</strong>.
            </p>

            <div className="p-4 rounded-lg bg-ivory-200/70 border border-carbon-900/10 flex items-start gap-3">
              <Users2 className="w-5 h-5 text-cobalt-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-display font-bold text-sm text-carbon-900">
                  Agile Core Pool: 7–10 Active Members
                </p>
                <p className="text-xs text-carbon-600 mt-0.5">
                  Working together across different project requirements and domain expertise, providing the right focus for each client engagement without excessive agency overhead.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Execution Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { num: '01', title: 'Understanding', desc: 'Contextual investigation' },
              { num: '02', title: 'Planning', desc: 'Architectural clarity' },
              { num: '03', title: 'Execution', desc: 'Craft & precision' },
              { num: '04', title: 'Improvement', desc: 'Iterative telemetry' },
            ].map((pillar) => (
              <div key={pillar.num} className="p-3 rounded-lg border border-carbon-900/10 bg-white">
                <span className="font-mono text-xs font-bold text-cobalt-600">{pillar.num}</span>
                <p className="font-display font-semibold text-xs text-carbon-900 mt-1">{pillar.title}</p>
                <p className="text-[10px] text-carbon-500 mt-0.5">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Architectural Photography Placeholder */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ArchitecturalPlaceholder
            label="TEAM IN WORKSHOP // INDUSTRIAL DESIGN LAB & DUAL-SCREEN DEVELOPMENT"
            category="ARCHITECTURAL WORKSPACE"
            aspectRatio="4/3"
            badge="PHASE 2 ASSET 03"
          />
          <div className="p-3.5 rounded-lg border border-carbon-900/10 bg-ivory-100 flex items-center justify-between text-xs font-mono text-carbon-600">
            <span>STRUCTURE: 7–10 TALENT POOL</span>
            <span className="text-cobalt-600 font-semibold">PAGE 04 / 22</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


