import React, { useState, useRef } from 'react';
import { METHODOLOGY_STEPS } from '../../data/companyData';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { sound } from '../../utils/sound';

export const TCMethodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = METHODOLOGY_STEPS[activeStep];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const lineWidth = useTransform(smoothProgress, [0.1, 0.6], ['0%', '100%']);

  return (
    <section 
      id="methodology" 
      ref={containerRef}
      className="relative py-24 sm:py-32 border-b border-tcDeep/10 bg-[#F8FAFC] overflow-hidden select-none"
    >
      
      {/* 12-Column Architectural Blueprint Lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="grid h-full grid-cols-6 sm:grid-cols-12 border-x border-tcDeep/[0.04]">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="border-r border-tcDeep/[0.04] h-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-tcDeep/10 pb-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-tcDeep/50 tracking-widest uppercase">
                04 / 08
              </span>
              <span className="w-8 h-[1px] bg-tcDeep/20" />
              <span className="font-mono text-xs font-bold text-tcDeep uppercase tracking-wider flex items-center gap-1.5">
                <span>Execution Methodology</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tcElectric" />
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-tcDeep tracking-tight">
              The TC Approach<span className="text-tcElectric">.</span>
            </h2>

            <p className="text-base sm:text-lg text-tcDeep/70 font-normal">
              A disciplined six-stage delivery lifecycle ensuring transparency, predictability, and compounding value.
            </p>
          </div>

          <span className="font-mono text-xs font-bold text-tcDeep/50 tracking-wider">
            DISCOVER â†’ IMPROVE
          </span>
        </motion.div>

        {/* Scroll Progress Connecting Wire */}
        <div className="relative w-full h-[3px] bg-tcDeep/10 rounded-full overflow-hidden">
          <motion.div 
            style={{ width: lineWidth }}
            className="h-full bg-gradient-to-r from-TCYellow via-tcCobalt to-TCYellow"
          />
        </div>

        {/* 6 Step Interactive Selector Grid with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={step.number}
                onClick={() => {
                  sound.playBlip(520 + idx * 40);
                  setActiveStep(idx);
                }}
                className={`p-4 rounded-[16px] border text-left transition-all duration-300 ease-editorial flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'border-tcDeep bg-tcDeep text-white shadow-md -translate-y-1 ring-2 ring-tcElectric/50'
                    : 'border-tcDeep/10 bg-white text-tcDeep hover:border-tcDeep/30 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${
                      isCurrent ? 'text-tcElectric' : 'text-tcDeep/40'
                    }`}>
                      {step.number} /
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      isCurrent ? 'bg-tcElectric animate-ping' : 'bg-tcDeep/10'
                    }`} />
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base leading-tight">
                    {step.title}
                  </h4>
                </div>

                <span className={`text-[11px] font-mono mt-4 block ${
                  isCurrent ? 'text-white/70' : 'text-tcDeep/50'
                }`}>
                  {step.phase}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Stage Detailed Breakdown Box with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={current.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-6 sm:p-10 rounded-[22px] border border-tcDeep/10 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Description & Timeline */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-tcDeep/5 border border-tcDeep/10 text-xs font-mono font-bold text-tcDeep">
                    {current.phase} // STEP {current.number}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-tcDeep/60">
                    <Clock className="w-3.5 h-3.5 text-tcElectric" />
                    <span>{current.estimatedTimeline}</span>
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-tcDeep tracking-tight">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-tcDeep/75 leading-relaxed font-normal">
                  {current.description}
                </p>

                <div className="p-3.5 rounded-[12px] bg-tcDeep/5 border border-tcDeep/10 text-xs font-mono text-tcDeep/80">
                  <span className="font-bold text-tcDeep block uppercase mb-0.5">CORE DISCIPLINE:</span>
                  <span>Structured alignment that eliminates 80% of project rework before code or asset finalization.</span>
                </div>
              </div>

              {/* Right: Key Activities & Concrete Outputs */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-[16px] border border-tcDeep/10 bg-[#F8FAFC] space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-tcDeep block">
                    Execution Activities:
                  </span>
                  <div className="space-y-2 text-xs text-tcDeep/80 font-medium">
                    {current.activities.map((act, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-tcElectric font-bold">â–º</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-[16px] border border-tcDeep/10 bg-[#F8FAFC] space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-tcDeep block">
                    Deliverables & Outputs:
                  </span>
                  <div className="space-y-2 text-xs text-tcDeep font-semibold">
                    {current.outputs.map((out, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-tcElectric shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};





