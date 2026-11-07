import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { METHODOLOGY_STEPS } from '../../data/companyData';
import { ArrowRight, CheckCircle2, Clock, FileText, Sparkles } from 'lucide-react';

export const Page14Methodology: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <PageContainer pageNumber={14}>
      <SectionHeader
        pageNumber={14}
        category="OUR METHODOLOGY"
        title="The TC Approach"
        subtitle="A Disciplined Six-Stage Delivery Lifecycle"
        description="From initial immersion to post-deployment improvement, our methodology ensures complete predictability, zero surprise scope creep, and compounding institutional value."
      />

      <div className="space-y-8">
        {/* Interactive 6-Stage Timeline Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-carbon-900/10 pb-4">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                  isActive
                    ? 'border-cobalt-500 bg-white shadow-md ring-2 ring-cobalt-500/20'
                    : 'border-carbon-900/10 bg-white/60 hover:bg-white hover:border-carbon-900/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-cobalt-600' : 'text-carbon-400 group-hover:text-cobalt-600'
                    }`}>
                      {step.number}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-carbon-400">
                      STAGE
                    </span>
                  </div>
                  <p className="font-display font-bold text-sm text-carbon-900">
                    {step.title}
                  </p>
                </div>

                <div className={`mt-3 h-1 w-full rounded-full transition-all ${
                  isActive ? 'bg-cobalt-500' : 'bg-carbon-900/10 group-hover:bg-carbon-900/20'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-carbon-900/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Title & Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                  {currentStep.phase} // STEP {currentStep.number} OF 06
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-carbon-500">
                  <Clock className="w-3.5 h-3.5 text-cobalt-500" />
                  <span>{currentStep.estimatedTimeline}</span>
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl text-carbon-900">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-carbon-700 leading-relaxed font-normal">
                {currentStep.description}
              </p>

              <div className="pt-2">
                <div className="p-3.5 rounded-lg bg-ivory-200/60 border border-carbon-900/10 text-xs font-mono text-carbon-600 flex items-center justify-between">
                  <span>STAGE STATUS</span>
                  <span className="text-cobalt-600 font-bold uppercase">READY FOR EXECUTION</span>
                </div>
              </div>
            </div>

            {/* Right: Key Activities & Concrete Outputs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Activities */}
              <div className="p-5 rounded-xl border border-carbon-900/10 bg-ivory-100/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-carbon-700">
                  <Sparkles className="w-4 h-4 text-cobalt-600" />
                  <span>Primary Activities</span>
                </div>
                <div className="space-y-2">
                  {currentStep.activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-cobalt-500 mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div className="p-5 rounded-xl border border-carbon-900/10 bg-ivory-100/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-carbon-700">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Deliverables & Outputs</span>
                </div>
                <div className="space-y-2">
                  {currentStep.outputs.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


