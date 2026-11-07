import React, { useState } from 'react';
import { CAPABILITIES } from '../../data/companyData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { sound } from '../../utils/sound';

interface TCServicesProps {
  onOpenContact?: () => void;
}

export const TCServices: React.FC<TCServicesProps> = ({ onOpenContact }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Technical schematic blueprints for each of the 5 disciplines
  const renderCardBlueprint = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <svg viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full text-tcDeep">
            <path d="M12 110H228" opacity="0.4" />
            <path d="M20 110V95H55V110" />
            <path d="M65 110V80H100V110" />
            <path d="M110 110V60H145V110" />
            <path d="M155 110V42H190V110" />
            <path d="M20 85L75 70L120 52L165 35L215 15" stroke="#2563EB" strokeWidth="2.4" />
            <path d="M202 15H215V28" stroke="#2563EB" strokeWidth="2.4" />
          </svg>
        );
      case 1:
        return (
          <svg viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full text-tcDeep">
            <path d="M20 30V18H36M204 18H220V30M220 98V110H204M36 110H20V98" opacity="0.6" />
            <rect x="42" y="32" width="156" height="66" rx="4" />
            <circle cx="94" cy="65" r="22" stroke="#2563EB" strokeWidth="2" />
            <path d="M135 88L175 42" stroke="#2563EB" strokeWidth="1.6" />
            <path d="M135 55H165M135 66H154" opacity="0.5" />
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full text-tcDeep">
            <rect x="25" y="20" width="190" height="90" rx="6" />
            <path d="M25 40H215" opacity="0.5" />
            <circle cx="38" cy="30" r="3" fill="#2563EB" />
            <circle cx="48" cy="30" r="3" fill="#2563EB" />
            <circle cx="58" cy="30" r="3" fill="#slateNavy" opacity="0.4" />
            <path d="M120 48L150 60V82C150 96 120 104 120 104C120 104 90 96 90 82V60L120 48Z" stroke="#2563EB" strokeWidth="2" />
            <path d="M110 75L118 82L132 68" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 3:
        return (
          <svg viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full text-tcDeep">
            <rect x="104" y="14" width="32" height="20" rx="3" stroke="#2563EB" strokeWidth="1.8" />
            <path d="M120 34V54M52 54H188M52 54V72M120 54V72M188 54V72" />
            <rect x="32" y="72" width="40" height="24" rx="2" />
            <rect x="100" y="72" width="40" height="24" rx="2" stroke="#2563EB" strokeWidth="1.8" />
            <rect x="168" y="72" width="40" height="24" rx="2" />
            <path d="M52 96V114M120 96V114M188 96V114" opacity="0.5" />
            <path d="M20 114H220" opacity="0.4" />
          </svg>
        );
      case 4:
        return (
          <svg viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full text-tcDeep">
            <rect x="25" y="15" width="190" height="100" rx="6" />
            <path d="M25 42H215" opacity="0.4" />
            <rect x="38" y="52" width="48" height="22" rx="3" />
            <rect x="96" y="52" width="48" height="22" rx="3" stroke="#2563EB" strokeWidth="1.8" />
            <rect x="154" y="52" width="48" height="22" rx="3" />
            <path d="M40 98L85 88L130 92L175 80L200 74" stroke="#2563EB" strokeWidth="2" />
            <circle cx="200" cy="74" r="3" fill="#2563EB" />
          </svg>
        );
      default:
        return null;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="services" className="relative bg-[#F8FAFC] py-24 sm:py-36 overflow-hidden border-b border-tcDeep/10 select-none">
      
      {/* 12-Column Blueprint Graph Grid Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="grid h-full grid-cols-6 sm:grid-cols-12 border-x border-tcDeep/[0.06]">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="border-r border-tcDeep/[0.06] h-full" />
            ))}
          </div>
        </div>

        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(251, 186, 0, 0.16) 0, rgba(251, 186, 0, 0.16) 1px, transparent 1px, transparent 48px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Container with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex flex-col items-center justify-center text-center max-w-4xl mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-tcElectric shadow-[0_0_0_3px_rgba(251,186,0,0.25)]" />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-tcDeep/70">
              Technology Ã— Business Execution Partner
            </span>
          </div>

          <h2 className="font-display font-extrabold text-tcDeep tracking-tight leading-[0.92] text-[length:clamp(44px,7vw,110px)]">
            What We Build<span className="text-tcElectric">.</span>
          </h2>

          <p className="mt-5 max-w-md font-sans text-sm sm:text-base text-tcDeep/75 font-medium">
            We turn complexity into certainty across five integrated capabilities.
          </p>
        </motion.div>

        {/* Central Circuit Connector & 5 Floating Blueprint Cards */}
        <div className="relative">
          
          {/* Central Connecting Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-center mb-10 relative z-20"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-tcDeep/20 bg-white px-5 py-2.5 shadow-[0_12px_28px_-14px_rgba(15,23,42,0.35)]">
              <span className="w-2 h-2 rounded-full bg-tcElectric animate-ping" />
              <span className="font-display font-black text-xs text-tcDeep tracking-wider">
                TEMAN CANGGIH
              </span>
              <span className="font-mono text-xs font-bold text-tcDeep/50">
                â€” / 05 CAPABILITIES
              </span>
            </div>
          </motion.div>

          {/* Cards Grid Layout with Staggered Scroll Entrance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {CAPABILITIES.map((cap, idx) => {
              const isSelected = activeCardIndex === idx;
              return (
                <motion.div
                  key={cap.id}
                  variants={itemVariants}
                  onClick={() => {
                    sound.playBlip(540 + idx * 40);
                    setActiveCardIndex(idx);
                  }}
                  className={`group relative rounded-[22px] border p-6 flex flex-col justify-between transition-all duration-300 ease-editorial cursor-pointer ${
                    isSelected
                      ? 'border-tcDeep/60 bg-white shadow-[0_28px_56px_-24px_rgba(15,23,42,0.45)] -translate-y-1'
                      : 'border-tcDeep/12 bg-white/80 hover:bg-white hover:border-tcDeep/30 hover:shadow-lg'
                  }`}
                >
                  
                  {/* Top Bar: Number + Horizontal Rule + Category */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold tabular-nums text-tcDeep">
                        {cap.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-tcElectric" />
                      <span className="h-px flex-1 bg-tcDeep/15" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-tcDeep/60">
                        {cap.subtitle}
                      </span>
                    </div>

                    {/* Blueprint Schematic Graph Paper Window */}
                    <div className="relative h-[130px] rounded-[12px] border border-tcDeep/10 bg-tcDeep/[0.03] p-3 overflow-hidden mb-5">
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-40"
                        style={{
                          backgroundImage: 'linear-gradient(90deg, rgba(15,23,42,0.12) 1px, transparent 0), linear-gradient(rgba(15,23,42,0.12) 1px, transparent 0)',
                          backgroundSize: '12px 12px'
                        }}
                      />

                      <span className="absolute top-1.5 left-1.5 w-2 h-2 border-l border-t border-tcDeep/60" />
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 border-r border-t border-tcDeep/60" />
                      <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-tcDeep/60" />
                      <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-tcDeep/60" />

                      <div className="relative w-full h-full">
                        {renderCardBlueprint(idx)}
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="font-display font-extrabold text-xl text-tcDeep tracking-tight mb-2 group-hover:text-tcElectric transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-tcDeep/75 font-sans leading-relaxed mb-4">
                      {cap.overview}
                    </p>
                  </div>

                  {/* Card Bottom: Explore Link & Micro Mark */}
                  <div className="pt-4 border-t border-tcDeep/10 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-wider text-tcElectric group-hover:text-tcDeep transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>

                    <span className="font-mono text-[10px] text-tcDeep/40 font-bold">
                      TC // 0{idx + 1}
                    </span>
                  </div>

                  <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-[22px] bg-tcElectric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};






