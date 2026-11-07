import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { Search, Compass, Workflow, Gauge, CheckCircle2, ArrowRight } from 'lucide-react';

export const Page07Approach: React.FC = () => {
  return (
    <PageContainer pageNumber={7}>
      <SectionHeader
        pageNumber={7}
        category="OUR APPROACH"
        title="How We Think & Solve Problems"
        subtitle="Analytical Investigation Prior to Technical Execution"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: 4-Step Cognitive Framework */}
        <div className="lg:col-span-7 space-y-4">
          {[
            {
              num: '01',
              title: 'Problem-Oriented Inquiry',
              badge: 'ROOT-CAUSE DISCOVERY',
              description: 'We do not begin with tools or pre-packaged packages. We ask fundamental questions: What is the underlying bottleneck? Is it an infrastructure deficit, a workflow misalignment, or an ambiguous brand positioning?',
              icon: Search,
            },
            {
              num: '02',
              title: 'Multidisciplinary Cross-Pollination',
              badge: 'HOLISTIC INTEGRATION',
              description: 'Real-world challenges rarely respect domain silos. Our developers consult with security analysts; our brand strategists coordinate with industrial operation leads. This guarantees that software is secure, usable, and commercially viable.',
              icon: Compass,
            },
            {
              num: '03',
              title: 'Pragmatic Engineering & Scalability',
              badge: 'RESOURCE CALIBRATION',
              description: 'We resist unnecessary technological bloat. We calibrate system complexity directly to the client’s actual stage, financial bandwidth, and operational scale, ensuring immediate value with runway for future expansion.',
              icon: Workflow,
            },
            {
              num: '04',
              title: 'Continuous Feedback Loops',
              badge: 'TELEMETRY & ITERATION',
              description: 'Delivery is not the finish line. We build measurement loops, telemetry data, and user feedback mechanisms so systems continue to adapt, improve, and compound organizational efficiency over time.',
              icon: Gauge,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-carbon-900/10 bg-white hover:border-cobalt-500/40 hover:shadow-sm transition-all flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-carbon-900 text-ivory-50 group-hover:bg-cobalt-500 transition-colors shrink-0">
                  <Icon className="w-5 h-5 text-cobalt-300 group-hover:text-white" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cobalt-600">
                      STEP {item.num}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-carbon-400 px-1.5 py-0.5 rounded bg-carbon-900/5">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-carbon-900">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-carbon-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Architectural Photography & Conceptual Diagram */}
        <div className="lg:col-span-5 space-y-4">
          <ArchitecturalPlaceholder
            label="SCHEMATIC INDUSTRIAL LAB // SYSTEMS THINKING & DIAGNOSTIC BLUEPRINT"
            category="ARCHITECTURAL ENGINEERING SCHEMATIC"
            aspectRatio="4/3"
            badge="PHASE 2 ASSET 05"
          />

          <div className="p-5 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800">
            <div className="text-[10px] font-mono text-cobalt-400 uppercase tracking-wider mb-2">
              THE TC APPROACH MANTRA
            </div>
            <p className="font-display font-bold text-sm text-white leading-snug">
              "Understanding the problem accurately saves 80% of unnecessary engineering rework."
            </p>
            <p className="text-xs text-carbon-400 mt-2">
              We design solutions that fit like tailored suits, not generic off-the-shelf templates.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


