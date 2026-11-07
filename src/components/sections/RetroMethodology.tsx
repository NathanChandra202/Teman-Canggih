import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../../data/companyData';
import { Clock, FileText, CheckCircle2, Sparkles, ArrowRight, Zap, Check } from 'lucide-react';
import { sound } from '../../utils/sound';

export const RetroMethodology: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section id="methodology" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded bg-retro-amber font-mono font-black text-xs text-ink uppercase border-2 border-ink shadow-retro-sm">
                DELIVERY PROTOCOL
              </span>
              <span className="font-mono text-xs font-bold text-ink-600">
                // 6-STAGE LIFECYCLE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
              The TC Approach
            </h2>
            <p className="mt-2 text-base text-ink-700 max-w-xl font-normal leading-relaxed">
              Metodologi eksekusi disiplin enam tahap yang menjamin transparansi, prediktabilitas milestone, dan hasil yang dapat diukur.
            </p>
          </div>

          <div className="p-3 rounded-xl border-2 border-ink bg-cream-50 font-mono text-xs text-ink shadow-retro-sm">
            <span className="text-cobalt-600 font-black block">LIFECYCLE STATUS:</span>
            <span>STANDARDIZED REPEATABLE RIGOR</span>
          </div>
        </div>

        {/* Interactive 6-Stage Circuit Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => {
                  sound.click();
                  setActiveStepIndex(idx);
                }}
                className={`p-4 rounded-xl border-2 border-ink text-left transition-all flex flex-col justify-between group ${
                  isActive
                    ? 'bg-ink text-cream-100 shadow-retro-lg -translate-y-1'
                    : 'bg-white text-ink hover:bg-cream-200 shadow-retro-sm hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-black ${
                      isActive ? 'text-retro-amber' : 'text-cobalt-600'
                    }`}>
                      0{idx + 1} //
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full border border-ink ${
                      isActive ? 'bg-retro-green animate-ping' : 'bg-cream-300'
                    }`} />
                  </div>
                  <p className="font-display font-black text-base uppercase tracking-tight">
                    {step.title}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-ink/20 flex items-center justify-between text-[10px] font-mono">
                  <span className={isActive ? 'text-cream-300' : 'text-ink-500'}>
                    STAGE {step.number}
                  </span>
                  <Zap className={`w-3 h-3 ${isActive ? 'text-retro-amber' : 'text-ink-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Dossier Card */}
        <div className="p-6 sm:p-10 rounded-2xl border-2 border-ink bg-white shadow-retro-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Title & Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-cobalt-500 text-white font-mono font-black text-xs uppercase border-2 border-ink shadow-retro-sm">
                  {currentStep.phase}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-ink-600">
                  <Clock className="w-3.5 h-3.5 text-cobalt-600" />
                  <span>{currentStep.estimatedTimeline}</span>
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-ink uppercase tracking-tight">
                {currentStep.title}
              </h3>

              <p className="text-base text-ink-700 leading-relaxed font-normal">
                {currentStep.description}
              </p>

              <div className="p-3.5 rounded-xl border-2 border-ink bg-retro-amber/20 font-mono text-xs text-ink space-y-1">
                <span className="font-black text-ink block uppercase">CORE FOCUS:</span>
                <span>Mengeliminasi 80% risiko kegagalan proyek sebelum penulisan baris kode atau perancangan aset final.</span>
              </div>
            </div>

            {/* Right: Key Activities & Concrete Outputs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Activities Box */}
              <div className="p-5 rounded-xl border-2 border-ink bg-cream-50 shadow-retro-sm space-y-3">
                <div className="flex items-center gap-2 font-mono font-black text-xs uppercase text-ink">
                  <Sparkles className="w-4 h-4 text-cobalt-600" />
                  <span>Aktivitas Eksekusi:</span>
                </div>
                <div className="space-y-2">
                  {currentStep.activities.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink font-medium leading-relaxed">
                      <span className="text-cobalt-600 font-bold shrink-0">►</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs Box */}
              <div className="p-5 rounded-xl border-2 border-ink bg-cream-50 shadow-retro-sm space-y-3">
                <div className="flex items-center gap-2 font-mono font-black text-xs uppercase text-ink">
                  <FileText className="w-4 h-4 text-retro-green" />
                  <span>Deliverables Nyata:</span>
                </div>
                <div className="space-y-2">
                  {currentStep.outputs.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink font-bold leading-relaxed">
                      <Check className="w-4 h-4 text-retro-green shrink-0 mt-0.5" />
                      <span>{out}</span>
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


