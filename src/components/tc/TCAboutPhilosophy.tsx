import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { sound } from '../../utils/sound';

interface TCAboutPhilosophyProps {
  onOpenContact?: () => void;
}

export const TCAboutPhilosophy: React.FC<TCAboutPhilosophyProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const orbitRotate = useTransform(smoothProgress, [0, 1], [-45, 65]);
  const counterRotate = useTransform(smoothProgress, [0, 1], [45, -65]);
  const avatarY1 = useTransform(smoothProgress, [0, 1], [25, -25]);
  const avatarY2 = useTransform(smoothProgress, [0, 1], [-20, 20]);
  const badgeScale = useTransform(smoothProgress, [0.2, 0.5], [0.92, 1]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-24 sm:py-36 bg-[#F8FAFC] border-b border-tcDeep/10 overflow-hidden relative select-none"
    >
      
      {/* Background Subtle Graph Lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="grid h-full grid-cols-6 sm:grid-cols-12 border-x border-tcDeep/[0.04]">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="border-r border-tcDeep/[0.04] h-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Tracker Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-tcDeep text-white flex items-center justify-center font-display font-black text-[10px]">
              TC
            </div>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-tcDeep">
              Teman Canggih Collective
            </span>
          </div>

          <span className="relative block h-px flex-1">
            <span className="bg-tcDeep/15 absolute inset-0" />
            <span className="absolute -right-px -top-[2.5px] h-1.5 w-1.5 rounded-full bg-tcElectric" />
          </span>

          <span className="font-mono text-xs font-semibold tracking-widest text-tcDeep/60">
            04 / 08
          </span>
        </motion.div>

        {/* Main Grid: Orbital Concentric Circles (Left) vs Content (Right) (Matching TC Image 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Orbital Circles with Leadership Portraits & 7-10+ Stat Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative mx-auto aspect-[650/540] w-full max-w-[560px]">
              
              {/* Concentric Orbit Circles with Scroll Rotation */}
              <motion.svg 
                style={{ rotate: orbitRotate }}
                aria-hidden="true" 
                viewBox="0 0 100 100" 
                className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
              >
                <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(15,23,42,0.14)" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(15,23,42,0.24)" strokeWidth="0.9" />
                <circle cx="50" cy="50" r="23" fill="none" stroke="rgba(15,23,42,0.12)" strokeWidth="0.8" />
                
                {/* Yellow & Blue Orbiting Beads */}
                <circle cx="50" cy="1" r="2.2" fill="#2563EB" className="drop-shadow-[0_0_6px_rgba(251,186,0,0.8)]" />
                <circle cx="86" cy="50" r="1.6" fill="#2563EB" />
                <circle cx="14" cy="50" r="1.6" fill="#2563EB" />
              </motion.svg>

              {/* Leader 01: Muhammad Syafiq (CEO & Founder) - Top Right Circle */}
              <motion.div 
                style={{ y: avatarY1 }}
                className="absolute left-[40%] top-0 w-[56%]"
              >
                <div className="relative group">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-white bg-tcDeep shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)] transition-transform duration-500 ease-editorial group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-[#0A2540] to-[#02131F] flex flex-col items-center justify-center text-center p-4">
                      <span className="font-display font-black text-white text-lg sm:text-xl tracking-tight block">
                        Muhammad Syafiq
                      </span>
                      <span className="font-mono text-[11px] text-tcElectric font-bold mt-1">
                        CEO & Founder
                      </span>
                      <span className="font-sans text-[10px] text-white/50 mt-1 max-w-[140px] hidden sm:block">
                        Strategic Vision & Tech Systems
                      </span>
                    </div>
                  </div>

                  <span className="absolute right-[4%] bottom-[4%] z-10 hidden sm:inline-flex items-center gap-2 rounded-full bg-white py-1 pl-2.5 pr-3 shadow-[0_8px_20px_-8px_rgba(15,23,42,0.35)] border border-tcDeep/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-tcElectric" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-tcDeep font-bold">
                      TC LEAD Â· 01
                    </span>
                  </span>
                </div>
              </motion.div>

              {/* Leader 02: Nathan Chandra (COO & PM) - Mid Left Circle */}
              <motion.div 
                style={{ y: avatarY2 }}
                className="absolute left-0 top-[28%] w-[40%]"
              >
                <div className="relative group">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[5px] border-white bg-tcDeep shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)] transition-transform duration-500 ease-editorial group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0B1522] flex flex-col items-center justify-center text-center p-3">
                      <span className="font-display font-black text-white text-sm sm:text-base tracking-tight block">
                        Nathan Chandra
                      </span>
                      <span className="font-mono text-[10px] text-tcElectric font-bold mt-0.5">
                        COO & PM
                      </span>
                      <span className="font-sans text-[9px] text-white/50 mt-0.5 hidden sm:block">
                        Execution & Agile Delivery
                      </span>
                    </div>
                  </div>

                  <span className="absolute left-[2%] -top-[4%] z-10 hidden sm:inline-flex items-center gap-2 rounded-full bg-white py-1 pl-2.5 pr-3 shadow-[0_8px_20px_-8px_rgba(15,23,42,0.35)] border border-tcDeep/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-tcElectric" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-tcDeep font-bold">
                      TC LEAD Â· 02
                    </span>
                  </span>
                </div>
              </motion.div>

              {/* Leader 03: Daffa Taufiq (CTO) - Bottom Center Circle */}
              <div className="absolute left-[36%] top-[68%] w-[25%]">
                <div className="relative group">
                  <div className="relative aspect-square overflow-hidden rounded-full border-[4px] border-white bg-tcDeep shadow-[0_16px_36px_-16px_rgba(15,23,42,0.45)] transition-transform duration-500 ease-editorial group-hover:scale-105">
                    <div className="w-full h-full bg-gradient-to-br from-[#0F2942] to-[#031525] flex flex-col items-center justify-center text-center p-2">
                      <span className="font-display font-bold text-white text-xs sm:text-sm tracking-tight block">
                        Daffa Taufiq
                      </span>
                      <span className="font-mono text-[9px] text-tcElectric font-bold">
                        CTO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Dark Navy Circular Stat Badge (Matching 50+ Badge in TC Image 5) */}
              <motion.div 
                style={{ scale: badgeScale }}
                className="absolute left-[24%] top-[34%] z-20 w-[140px] sm:w-[160px] aspect-square rounded-full bg-tcDeep text-white p-5 flex flex-col items-center justify-center text-center shadow-[0_20px_45px_-15px_rgba(15,23,42,0.6)] border-4 border-tcElectric"
              >
                <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none">
                  7â€“10<span className="text-tcElectric">+</span>
                </span>
                <span className="font-display font-semibold text-[11px] sm:text-xs text-white/80 mt-1 block">
                  Core Specialists
                </span>
                <span className="font-mono text-[9px] font-bold text-tcElectric tracking-widest mt-0.5">
                  TEMAN CANGGIH
                </span>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Narrative & Institutional Metadata (Matching TC Image 5) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Label */}
            <span className="font-mono text-xs uppercase font-bold tracking-[0.2em] text-tcDeep/60 mb-4 block">
              â€” WHO WE ARE
            </span>

            {/* Headline with Yellow Marker Highlight Box (Matching TC Image 5) */}
            <h2 className="font-display font-extrabold text-tcDeep tracking-tight leading-[1.02] text-[length:clamp(36px,5vw,60px)] mb-6">
              <span>Trusted </span>
              <span className="relative isolate inline-block">
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true" 
                  className="absolute -inset-x-[0.06em] bottom-[0.1em] -z-10 h-[0.36em] rounded-[4px] bg-tcElectric origin-left" 
                />
                100%
              </span>
              <span> by</span>
              <br />
              <span>forward thinkers,</span>
              <br />
              <span>gradually.</span>
            </h2>

            {/* Body Copy */}
            <p className="font-sans text-sm sm:text-base text-tcDeep/80 leading-relaxed font-medium mb-6 max-w-xl">
              We are a collaborative team of individuals with diverse capabilities across technology, creativity, cybersecurity, factory operations, and business strategy. We believe effective solutions are not created through technical execution alone, but through deep problem discovery, disciplined architecture, and continuous iteration.
            </p>

            <p className="font-sans text-sm text-tcDeep/70 leading-relaxed font-normal mb-10 max-w-xl">
              <strong className="text-tcDeep font-semibold">Think Beyond:</strong> Looking beyond immediate symptoms to uncover high-leverage growth vectors.<br />
              <strong className="text-tcDeep font-semibold">Build Better:</strong> Translating strategies into resilient, high-standard digital and operational systems.
            </p>

            {/* 3 Institutional Pillars (Matching TC Image 5 footer metadata) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-tcDeep/12 w-full mb-10">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-tcDeep/50 block mb-1">
                  FOUNDED â€” EST. 2024
                </span>
                <span className="font-display font-bold text-sm text-tcDeep block">
                  Teman Canggih Collective
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-tcDeep/50 block mb-1">
                  POSITIONING
                </span>
                <span className="font-display font-bold text-sm text-tcDeep block">
                  Technology Ã— Business Solutions
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-tcDeep/50 block mb-1">
                  ESSENCE
                </span>
                <span className="font-display font-bold text-sm text-tcDeep block">
                  Certainty Through Execution
                </span>
              </div>
            </div>

            {/* "Let's Work" Action Button (Matching TC Image 5 CTA) */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onOpenContact) onOpenContact();
                }}
                className="group inline-flex items-center gap-3 rounded-xl bg-tcDeep pl-5 pr-2 py-2 font-display font-bold text-sm text-white shadow-[0_14px_30px_-12px_rgba(15,23,42,0.5)] transition-all hover:bg-tcDeep/95 active:scale-98 cursor-pointer"
              >
                <span>Let's Work</span>
                <span className="w-8 h-8 rounded-lg bg-tcElectric text-tcDeep flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>

              <span className="font-mono text-xs font-bold text-tcDeep/40">
                TEMAN CANGGIH
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};





