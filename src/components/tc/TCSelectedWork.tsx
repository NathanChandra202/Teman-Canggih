import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Layers, 
  Terminal, 
  Sparkles,
  BarChart3,
  Cpu,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../../utils/sound';

interface TCSelectedWorkProps {
  onOpenContact?: () => void;
}

interface CaseStudy {
  id: string;
  category: string;
  categoryCode: string;
  title: string;
  tagline: string;
  background: string;
  objectivesAndScope: string;
  implementation: string;
  metrics: { value: string; label: string }[];
  technologies: string[];
  gradient: string;
  accentColor: string;
  icon: 'system' | 'branding' | 'cyber' | 'factory' | 'business';
}

export const TCSelectedWork: React.FC<TCSelectedWorkProps> = ({ onOpenContact }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // The 5 Canonical Portfolio Projects directly aligned with Teman Canggih's 5 Disciplines
  const caseStudies: CaseStudy[] = [
    {
      id: 'case-01',
      category: 'Digital Systems & Applications',
      categoryCode: 'PRACTICE 01 // SYSTEM DEVELOPMENT',
      title: 'Enterprise Internal Logistics & Inventory ERP',
      tagline: 'Modernizing Multi-Warehouse Inventory Tracking with Real-Time Sync.',
      background: 'A growing multi-branch distribution company faced severe stock discrepancies, manual paper order logs, and fulfillment delays.',
      objectivesAndScope: 'Architect an end-to-end cloud ERP with role-based warehouse access, automated low-stock re-order triggers, and barcode scanner integration.',
      implementation: 'Deployed a high-concurrency Node.js & TypeScript microservice backend with React dashboard, optimized PostgreSQL query caching, and mobile POS clients.',
      metrics: [
        { value: '-94%', label: 'Stock Error Rate' },
        { value: '11 Mins', label: 'Avg Packing Speed' },
        { value: '3 Hubs', label: 'Real-Time Sync' }
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      gradient: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]',
      accentColor: '#2563EB',
      icon: 'system'
    },
    {
      id: 'case-02',
      category: 'Brand Identity & Creative Development',
      categoryCode: 'PRACTICE 02 // BRANDING DEVELOPMENT',
      title: 'Comprehensive B2B Identity & Pitch Architecture',
      tagline: 'Transforming an Engineering Supplier into a High-Trust Institutional Partner.',
      background: 'An established industrial engineering supplier sought to graduate from sub-contracting to winning direct Tier-1 corporate procurement bids.',
      objectivesAndScope: 'Rebrand corporate identity, create a Swiss-inspired visual design system, develop bilingual pitch decks, and standardize capability collaterals.',
      implementation: 'Formulated strategic brand positioning, crafted master vector logos, design tokens, multi-platform corporate guidelines, and modular sales decks.',
      metrics: [
        { value: '4 Bids', label: 'Tier-1 Vendors Won' },
        { value: '-40%', label: 'Pitch Cycle Duration' },
        { value: '100%', label: 'Unified Brand Voice' }
      ],
      technologies: ['Figma', 'Adobe Creative Cloud', 'Typography Design', 'Brand Tokens'],
      gradient: 'from-[#0F1E3D] via-[#0A1628] to-[#060E1A]',
      accentColor: '#2563EB',
      icon: 'branding'
    },
    {
      id: 'case-03',
      category: 'Cybersecurity & Network Projects',
      categoryCode: 'PRACTICE 03 // CYBER ANALYSIS',
      title: 'Infrastructure Vulnerability Assessment & Hardening',
      tagline: 'Proactive Vulnerability Discovery & Offensive Defense Posture Remediation.',
      background: 'A digital financial platform processing daily transactions needed to satisfy rigorous third-party banking compliance audits before live API integration.',
      objectivesAndScope: 'Conduct comprehensive grey-box and black-box penetration testing, OWASP Top 10 audit, and cloud infrastructure defensive hardening.',
      implementation: 'Identified API authentication bypasses, remediated SQL/IDOR risks, configured Cloudflare Zero Trust WAF rules, and drafted an incident response playbook.',
      metrics: [
        { value: '10 Patched', label: 'Critical Risks Fixed' },
        { value: 'Grade A', label: 'OWASP Security Rating' },
        { value: '100% Pass', label: 'External Banking Audit' }
      ],
      technologies: ['Kali Linux', 'Burp Suite Pro', 'Nmap', 'Cloudflare WAF', 'OWASP'],
      gradient: 'from-[#061020] via-[#030A14] to-[#01050C]',
      accentColor: '#10B981',
      icon: 'cyber'
    },
    {
      id: 'case-04',
      category: 'Industrial & Operational Analysis',
      categoryCode: 'PRACTICE 04 // FACTORY CONSULTING',
      title: 'Assembly Line Bottleneck & OEE Telemetry Diagnostic',
      tagline: 'Unlocking Hidden Production Capacity through Lean 5S & Industrial Telemetry.',
      background: 'A regional plastic component manufacturer faced surging overtime payroll expenses while continuously missing delivery schedules.',
      objectivesAndScope: 'Evaluate shop-floor workflows, identify mechanical micro-stops, eliminate operator transit waste, and digitize Overall Equipment Effectiveness (OEE).',
      implementation: 'Performed on-site Value Stream Mapping (VSM), installed wireless telemetry counters at injection stations, and streamlined workstation layouts via 5S.',
      metrics: [
        { value: '+18.5%', label: 'OEE Line Uplift' },
        { value: '-32%', label: 'Transit Motion Waste' },
        { value: '+$4.2k/mo', label: 'Overtime Saved' }
      ],
      technologies: ['Lean Six Sigma', 'Value Stream Mapping', 'OEE Engines', 'BPMN 2.0'],
      gradient: 'from-[#0F1A2E] via-[#0A1120] to-[#060B14]',
      accentColor: '#2563EB',
      icon: 'factory'
    },
    {
      id: 'case-05',
      category: 'Business Research & Strategy',
      categoryCode: 'PRACTICE 05 // BUSINESS ANALYSIS',
      title: 'Commercial Feasibility & Go-To-Market Modeling',
      tagline: 'Mathematical Financial Modeling & Demand Validation for Venture Expansion.',
      background: 'Business founders required independent analytical validation and dynamic financial forecasts before committing capital to a cold-chain logistics initiative.',
      objectivesAndScope: 'Map total addressable market (TAM), interview 40+ commercial clients, analyze competitor pricing, and build unit economics sensitivity models.',
      implementation: 'Built multi-scenario cash flow models, identified underserved pharmaceutical delivery segments, and structured the investment memorandum.',
      metrics: [
        { value: '40+ B2B', label: 'Clients Validated' },
        { value: '24 Mo', label: 'Clear Payoff Horizon' },
        { value: 'Seed Fund', label: 'Capital Secured' }
      ],
      technologies: ['Financial Modeling', 'Sensitivity Matrix', 'TAM-SAM-SOM', 'Porter 5F'],
      gradient: 'from-[#0A1F3E] via-[#061428] to-[#030A17]',
      accentColor: '#A855F7',
      icon: 'business'
    }
  ];

  const current = caseStudies[currentIndex];

  const handleNext = () => {
    sound.playBlip(620);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    sound.playBlip(560);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart !== null) {
      const delta = e.targetTouches[0].clientX - touchStart;
      setTouchDelta(delta);
    }
  };

  const handleTouchEnd = () => {
    if (touchDelta > 50) {
      handlePrev();
    } else if (touchDelta < -50) {
      handleNext();
    }
    setTouchStart(null);
    setTouchDelta(0);
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'system': return <Cpu className="w-4 h-4 text-tcElectric" />;
      case 'branding': return <Palette className="w-4 h-4 text-tcElectric" />;
      case 'cyber': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'factory': return <Layers className="w-4 h-4 text-tcElectric" />;
      case 'business': return <BarChart3 className="w-4 h-4 text-purple-400" />;
      default: return <Sparkles className="w-4 h-4 text-tcElectric" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-36 bg-[#F8FAFC] border-b border-tcDeep/10 overflow-hidden relative select-none">
      
      {/* Subtle 12-Column Blueprint Grid Lines */}
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
        
        {/* Section Header with Scroll-Triggered Rise (Matching TC Image 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-4 border-b border-tcDeep/10 pb-6 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-tcDeep/50 tracking-widest uppercase">
              02 / 08
            </span>
            <span className="w-6 h-px bg-tcDeep/20" />
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-tcDeep tracking-tight">
              Success Project<span className="text-tcElectric">.</span>
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="w-16 h-px bg-tcDeep/20" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-tcDeep/50">
              TEMAN CANGGIH
            </span>
          </div>
        </motion.div>

        {/* 5-Card Animated Horizontal Sliding Track Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-visible mb-14"
        >
          {/* Card Carousel Track */}
          <div className="relative w-full min-h-[460px] sm:min-h-[500px] flex items-center justify-center">
            {caseStudies.map((item, idx) => {
              const offset = idx - currentIndex;
              const isActive = offset === 0;
              const isNext = offset === 1 || (currentIndex === caseStudies.length - 1 && idx === 0);
              const isPrev = offset === -1 || (currentIndex === 0 && idx === caseStudies.length - 1);

              let transformStyle = '';
              let opacityStyle = 0;
              let zIndexStyle = 0;
              let pointerEventsStyle: 'auto' | 'none' = 'none';

              if (isActive) {
                transformStyle = 'translateX(0%) scale(1)';
                opacityStyle = 1;
                zIndexStyle = 30;
                pointerEventsStyle = 'auto';
              } else if (isNext) {
                transformStyle = 'translateX(65%) scale(0.92)';
                opacityStyle = 0.55;
                zIndexStyle = 20;
                pointerEventsStyle = 'auto';
              } else if (isPrev) {
                transformStyle = 'translateX(-65%) scale(0.92)';
                opacityStyle = 0.55;
                zIndexStyle = 20;
                pointerEventsStyle = 'auto';
              } else {
                transformStyle = offset > 0 ? 'translateX(140%) scale(0.85)' : 'translateX(-140%) scale(0.85)';
                opacityStyle = 0;
                zIndexStyle = 10;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isActive) {
                      sound.playBlip(580);
                      setCurrentIndex(idx);
                    }
                  }}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle,
                    pointerEvents: pointerEventsStyle,
                    transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`absolute w-full max-w-[820px] rounded-[24px] overflow-hidden border border-tcDeep/15 shadow-[0_32px_64px_-24px_rgba(15,23,42,0.5)] cursor-pointer bg-tcDeep text-white select-none ${
                    isActive ? 'ring-2 ring-tcElectric/30' : 'hover:opacity-80'
                  }`}
                >
                  
                  {/* Card Interior Gradient & Background Grid Texture */}
                  <div className={`p-6 sm:p-10 bg-gradient-to-br ${item.gradient} flex flex-col justify-between min-h-[460px] sm:min-h-[500px] relative overflow-hidden`}>
                    
                    {/* Engineering Dot Grid */}
                    <div 
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '16px 16px'
                      }}
                    />

                    {/* Top Row: Category Pill & Project Indicator Badge */}
                    <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 border border-white/15">
                          {renderIcon(item.icon)}
                        </span>
                        <div>
                          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-tcElectric font-bold block">
                            {item.categoryCode}
                          </span>
                          <span className="font-display font-bold text-xs text-white/70">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 font-mono text-xs font-bold text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tcElectric" />
                        <span>PROJECT 0{idx + 1}</span>
                      </span>
                    </div>

                    {/* Center Core Showcase: Title, Tagline & Implementation Brief */}
                    <div className="relative z-10 my-auto py-6">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-white/50 block mb-2">
                        VALIDATED CLIENT ENGAGEMENT
                      </span>
                      
                      <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight max-w-2xl mb-4">
                        {item.tagline}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed max-w-xl line-clamp-3">
                        {item.implementation}
                      </p>
                    </div>

                    {/* Bottom Concrete Results Metrics Row */}
                    <div className="relative z-10 pt-5 border-t border-white/15">
                      <span className="font-mono text-[10px] uppercase font-bold text-white/50 tracking-wider block mb-3">
                        DOCUMENTED MEASURABLE OUTCOMES:
                      </span>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {item.metrics.map((metric, mIdx) => (
                          <div 
                            key={mIdx}
                            className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-xs transition-colors hover:bg-white/10"
                          >
                            <span className="font-display font-extrabold text-lg sm:text-2xl text-tcElectric block leading-none">
                              {metric.value}
                            </span>
                            <span className="font-mono text-[9px] sm:text-[11px] text-white/70 uppercase tracking-wider block mt-1.5 truncate">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Metadata & Controls with Scroll-Triggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4"
        >
          
          {/* Active Project Full Narrative Breakdown */}
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-tcElectric">
              <span className="w-2 h-2 rounded-full bg-tcElectric shadow-[0_0_0_3px_rgba(251,186,0,0.25)]" />
              <span>{current.category}</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-tcDeep tracking-tight">
              {current.title}
            </h3>

            {/* Background & Objectives Summary */}
            <div className="space-y-2 text-xs sm:text-sm text-tcDeep/80 font-sans leading-relaxed pt-1">
              <p>
                <strong className="text-tcDeep font-semibold">Background: </strong>
                {current.background}
              </p>
              <p>
                <strong className="text-tcDeep font-semibold">Scope & Delivery: </strong>
                {current.objectivesAndScope}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {current.technologies.map((tech, tIdx) => (
                <span 
                  key={tIdx}
                  className="font-mono text-[10px] font-semibold bg-white text-tcDeep/80 px-2.5 py-1 rounded-md border border-tcDeep/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Controls: 5 Segmented Progress Lines + Slide Counter + Arrow Buttons */}
          <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
            
            {/* 5 Segmented Progress Track (Matching TC Image 2) */}
            <div className="flex items-center gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sound.playBlip(550 + idx * 30);
                    setCurrentIndex(idx);
                  }}
                  className={`h-[4px] rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex 
                      ? 'w-12 bg-tcElectric shadow-[0_0_6px_rgba(251,186,0,0.6)]' 
                      : 'w-7 bg-tcDeep/20 hover:bg-tcDeep/40'
                  }`}
                  aria-label={`Jump to case study 0${idx + 1}`}
                />
              ))}
            </div>

            {/* Numerals & Arrows */}
            <div className="flex items-center gap-5">
              <span className="font-display text-sm font-bold tabular-nums tracking-widest text-tcDeep">
                0{currentIndex + 1} <span className="text-tcDeep/40 font-normal">/ 0{caseStudies.length}</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-tcDeep/20 bg-white hover:bg-tcDeep hover:text-white text-tcDeep flex items-center justify-center transition-all duration-200 shadow-sm active:scale-90 cursor-pointer"
                  aria-label="Previous case study"
                  title="Previous Case Study"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-tcDeep text-white hover:bg-tcElectric hover:text-tcDeep flex items-center justify-center transition-all duration-200 shadow-md active:scale-90 cursor-pointer"
                  aria-label="Next case study"
                  title="Next Case Study"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Quick Discussion Link */}
            {onOpenContact && (
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-tcDeep hover:text-tcElectric transition-colors cursor-pointer"
              >
                <span>Request Case Study Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
};






