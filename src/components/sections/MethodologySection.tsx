import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../../data/companyData';
import { Clock, FileText, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section id="methodology" className="py-20 sm:py-28 border-b border-carbon-900/10 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <span className="font-mono text-xs font-semibold text-cobalt-600 uppercase tracking-wider block mb-2">
            // TAHAPAN KERJA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-carbon-900">
            The TC Approach
          </h2>
          <p className="mt-3 text-base sm:text-lg text-carbon-600 max-w-2xl font-light">
            Metodologi kerja enam tahap yang terstruktur dari penemuan akar masalah hingga pengembangan berkelanjutan.
          </p>
        </div>

        {/* 6 Steps Progress Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-carbon-900/10 pb-4">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                  isActive
                    ? 'border-carbon-900 bg-carbon-900 text-ivory-50 shadow-sm'
                    : 'border-carbon-900/10 bg-white hover:border-carbon-900/30 text-carbon-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-cobalt-400' : 'text-cobalt-600'
                    }`}>
                      {step.number} /
                    </span>
                    <span className="text-[9px] font-mono uppercase text-carbon-400">
                      STEP
                    </span>
                  </div>
                  <p className="font-display font-bold text-xs sm:text-sm">
                    {step.title}
                  </p>
                </div>

                <div className={`mt-3 h-1 w-full rounded-full transition-all ${
                  isActive ? 'bg-cobalt-500' : 'bg-carbon-900/10'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-carbon-900/10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Title & Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                  {currentStep.phase}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-carbon-500">
                  <Clock className="w-3.5 h-3.5 text-cobalt-500" />
                  <span>{currentStep.estimatedTimeline}</span>
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon-900">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-carbon-700 leading-relaxed font-light">
                {currentStep.description}
              </p>

              <div className="pt-2">
                <div className="p-3 rounded-lg bg-ivory-100 border border-carbon-900/5 text-xs font-mono text-carbon-600 flex items-center justify-between">
                  <span>DISIPLIN KERJA</span>
                  <span className="text-cobalt-600 font-semibold uppercase">TEMAN CANGGIH STANDARDS</span>
                </div>
              </div>
            </div>

            {/* Right: Key Activities & Concrete Outputs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Activities */}
              <div className="p-4 sm:p-5 rounded-xl border border-carbon-900/10 bg-ivory-100/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-carbon-700">
                  <Sparkles className="w-3.5 h-3.5 text-cobalt-600" />
                  <span>Aktivitas Utama:</span>
                </div>
                <div className="space-y-2">
                  {currentStep.activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-800 leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-cobalt-500 mt-1 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div className="p-4 sm:p-5 rounded-xl border border-carbon-900/10 bg-ivory-100/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-carbon-700">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hasil & Output:</span>
                </div>
                <div className="space-y-2">
                  {currentStep.outputs.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-800 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


