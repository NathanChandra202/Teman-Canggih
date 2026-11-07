import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { sound } from '../../utils/sound';

interface TCHeroProps {
  onOpenContact: () => void;
}

export const TCHero: React.FC<TCHeroProps> = ({ onOpenContact }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven parallax for hero elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const knotRotate = useTransform(smoothProgress, [0, 1], [0, 35]);
  const knotY = useTransform(smoothProgress, [0, 1], [0, -60]);
  const cardY = useTransform(smoothProgress, [0, 1], [0, 40]);
  const pearlY = useTransform(smoothProgress, [0, 1], [0, -120]);

  const capabilitiesList = [
    { name: 'Technology Development', href: '#services' },
    { name: 'Enterprise Platforms', href: '#services' },
    { name: 'Cyber Defense & Auditing', href: '#services' },
    { name: 'Factory & Operations Ops', href: '#services' },
    { name: 'Strategic Business Analysis', href: '#services' },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#F8FAFC] pt-28 pb-12 lg:pt-36 lg:pb-16 select-none"
    >
      
      {/* Ambient Radial Lighting & Subtle Pearls */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 52% 48% at 65% 42%, rgba(37, 99, 235, 0.12), transparent 72%), radial-gradient(ellipse 50% 50% at 10% 92%, rgba(6, 182, 212, 0.06), transparent 70%), linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 55%, #E0F2FE 100%)'
        }}
      />

      {/* Floating Ambient Pearl Spheres with Scroll Parallax */}
      <motion.div style={{ y: pearlY }} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="absolute left-[30vw] top-[8%] h-5 w-5 rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(15,23,42,0.25)] opacity-70" />
        <span className="absolute right-[22vw] top-[60%] hidden lg:block h-7 w-7 rounded-full bg-white shadow-[0_12px_24px_-6px_rgba(15,23,42,0.3)] opacity-75" />
        <span className="absolute right-[8vw] top-[34%] hidden lg:block h-10 w-10 rounded-full bg-white shadow-[0_14px_28px_-6px_rgba(15,23,42,0.25)]" />
        <span className="absolute left-[8%] bottom-[12%] h-6 w-6 rounded-full bg-white shadow-[0_8px_20px_-4px_rgba(15,23,42,0.2)] opacity-60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Headline & Interactive CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            
            {/* Slide Index Badge with Segmented Track */}
            <div className="mb-6 flex items-center gap-3 font-display text-xs font-semibold tracking-wider text-tcDeep/80">
              <span className="h-2 w-2 rounded-full bg-tcElectric shadow-[0_0_0_4px_rgba(251,186,0,0.22)]" />
              <span className="font-mono font-bold tracking-widest text-[11px]">01 / 02</span>
              
              <div className="flex items-center gap-1.5 ml-1">
                <button
                  type="button"
                  onClick={() => {
                    sound.playBlip(500);
                    setActiveSlide(0);
                  }}
                  className="group relative h-8 w-9 grid place-items-center cursor-pointer"
                  aria-label="Slide 1"
                >
                  <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-tcDeep/15 group-hover:bg-tcDeep/30 transition-colors">
                    <span className={`absolute inset-0 origin-left rounded-full bg-tcDeep transition-transform duration-300 ${activeSlide === 0 ? 'scale-x-100' : 'scale-x-0'}`} />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playBlip(560);
                    setActiveSlide(1);
                  }}
                  className="group relative h-8 w-9 grid place-items-center cursor-pointer"
                  aria-label="Slide 2"
                >
                  <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-tcDeep/15 group-hover:bg-tcDeep/30 transition-colors">
                    <span className={`absolute inset-0 origin-left rounded-full bg-tcDeep transition-transform duration-300 ${activeSlide === 1 ? 'scale-x-100' : 'scale-x-0'}`} />
                  </span>
                </button>
              </div>
            </div>

            {/* Massive Heading with Animated Marker Highlight */}
            <h1 className="font-display font-extrabold text-tcDeep tracking-tight leading-[0.92] text-[length:clamp(38px,6.2vw,74px)]">
              {activeSlide === 0 ? (
                <>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="block"
                  >
                    The multidisciplinary{' '}
                    <span className="relative isolate inline-block">
                      <motion.span 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        aria-hidden="true" 
                        className="absolute -inset-x-[0.06em] bottom-[0.08em] -z-10 h-[0.38em] rounded-[4px] bg-tcElectric origin-left" 
                      />
                      technology
                    </span>
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block"
                  >
                    & business solutions
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="block"
                  >
                    firm in Indonesia<span className="text-tcElectric">.</span>
                  </motion.span>
                </>
              ) : (
                <>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="block"
                  >
                    Think Beyond.{' '}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block"
                  >
                    <span className="relative isolate inline-block">
                      <motion.span 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        aria-hidden="true" 
                        className="absolute -inset-x-[0.06em] bottom-[0.08em] -z-10 h-[0.38em] rounded-[4px] bg-tcElectric origin-left" 
                      />
                      Build Better
                    </span>
                    <span> for</span>
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="block"
                  >
                    sustainable impact<span className="text-tcElectric">.</span>
                  </motion.span>
                </>
              )}
            </h1>

            {/* Narrative Paragraph */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 max-w-[27rem] text-sm sm:text-base text-tcDeep/80 font-sans font-medium leading-[1.65]"
            >
              {activeSlide === 0 ? (
                "Indonesia's multidisciplinary technology and business solutions firm. We engineer scalable systems, distinct brand identities, offensive cyber auditing, factory efficiency, and business intelligence."
              ) : (
                "We believe technology is not the final destination, but the catalyst for progress. We bring understanding, planning, disciplined execution, and continuous optimization to every client challenge."
              )}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              
              {/* Big Double-Pill Button with Yellow Rotating Circle */}
              <a 
                href="#services"
                onClick={() => sound.playClick()}
                className="group flex items-center transition-transform duration-200 active:scale-[0.97]"
              >
                <span className="relative z-10 grid h-[68px] w-[68px] place-items-center rounded-full border border-tcDeep/10 bg-white/70 shadow-[0_16px_36px_-18px_rgba(15,23,42,0.45),inset_0_1px_0_#fff] backdrop-blur-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-tcElectric text-tcDeep shadow-[0_10px_22px_-8px_rgba(251,186,0,0.9),inset_0_-2px_4px_rgba(200,120,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.7)] transition-transform duration-500 ease-editorial group-hover:rotate-[-45deg]">
                    <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                  </span>
                </span>

                <span className="relative -ml-5 flex h-[52px] items-center overflow-hidden rounded-full border border-tcDeep/12 bg-white/75 pl-9 pr-7 font-display text-[14px] font-bold text-tcDeep shadow-[0_14px_32px_-20px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                  <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-tcDeep transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
                  <span className="relative transition-colors duration-300 group-hover:text-pureWhite">
                    Explore capabilities
                  </span>
                </span>
              </a>

              {/* Text link */}
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenContact();
                }}
                className="group relative inline-flex items-center gap-2 py-2 font-display text-[14px] font-semibold text-tcDeep transition-colors hover:text-tcElectric cursor-pointer"
              >
                <span>Tell us about it</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
                <span className="absolute inset-x-0 bottom-0 h-[1.5px] origin-right scale-x-0 bg-tcDeep transition-transform duration-500 ease-editorial group-hover:origin-left group-hover:scale-x-100" />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Glossy Knot Torus with Scroll Rotation */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[580px]">
            
            {/* Elliptical Golden Orbit Line with Satellite Dot */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
              <svg className="absolute -inset-[10%] h-[120%] w-[120%] overflow-visible" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="hero-orbit" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                    <stop offset="35%" stopColor="#2563EB" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#2563EB" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="100" rx="92" ry="36" stroke="url(#hero-orbit)" strokeWidth="0.6" transform="rotate(-24 100 100)" />
                <g transform="rotate(-24 100 100)">
                  <circle r="2" fill="#0F172A">
                    <animateMotion dur="14s" repeatCount="indefinite" path="M8,100 a92,36 0 1,0 184,0 a92,36 0 1,0 -184,0" />
                  </circle>
                </g>
              </svg>
            </div>

            {/* Central 3D Glossy Yellow Torus Knot with Scroll Rotation & Parallax */}
            <motion.div 
              style={{ rotate: knotRotate, y: knotY }}
              className="relative z-10 w-[280px] sm:w-[360px] lg:w-[410px] aspect-square flex items-center justify-center"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_30px_50px_rgba(37,99,235,0.35)]">
                <defs>
                  <linearGradient id="knotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#BAE6FD" />
                    <stop offset="25%" stopColor="#2563EB" />
                    <stop offset="70%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#1234A0" />
                  </linearGradient>

                  <linearGradient id="knotGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#93C5FD" />
                    <stop offset="40%" stopColor="#2563EB" />
                    <stop offset="85%" stopColor="#1A44C0" />
                    <stop offset="100%" stopColor="#0C2680" />
                  </linearGradient>

                  <linearGradient id="specularGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>

                  <filter id="knotShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0F172A" floodOpacity="0.22" />
                  </filter>
                </defs>

                <g filter="url(#knotShadow)">
                  <path
                    d="M130,220 C90,260 80,310 120,335 C170,365 240,340 270,290 C300,240 290,170 240,140 C190,110 140,130 110,175 C80,220 95,290 150,315 C205,340 275,310 305,255 C335,200 315,130 260,95 C205,60 135,80 100,135 C65,190 85,260 140,295 C195,330 265,310 295,255"
                    fill="none"
                    stroke="url(#knotGrad1)"
                    strokeWidth="56"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M165,135 C195,115 240,125 265,160 C295,200 290,255 255,290 C220,325 160,335 125,295 C90,255 100,195 140,160 C180,125 245,135 280,180 C315,225 300,290 250,320"
                    fill="none"
                    stroke="url(#knotGrad2)"
                    strokeWidth="50"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M170,120 C205,100 245,115 270,145 C295,180 290,230 260,265"
                    fill="none"
                    stroke="url(#specularGlow)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M135,280 C110,250 115,205 145,175"
                    fill="none"
                    stroke="url(#specularGlow)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </g>
              </svg>

              {/* Ideas -> Real Solutions Floating Capsule Badge */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 right-2 sm:right-6 rotate-[-7deg] z-20"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-tcDeep/10 bg-white/90 px-3.5 py-1.5 font-display text-[11px] font-bold text-tcDeep shadow-[0_12px_26px_-12px_rgba(15,23,42,0.35)] backdrop-blur-md">
                  <span>Ideas</span>
                  <ArrowRight className="w-3 h-3 text-tcElectric stroke-[2.4]" />
                  <span className="font-semibold text-tcDeep/80">Real Solutions</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Floating Perspective Card on the Right with Counter-Parallax */}
            <motion.div 
              style={{ y: cardY }}
              className="absolute right-0 sm:-right-4 top-[8%] z-30 w-[min(20rem,88vw)] hidden sm:block"
            >
              <div className="rotate-[-4deg] rounded-[18px] border border-white/90 bg-white/80 p-5 shadow-[0_24px_50px_-24px_rgba(15,23,42,0.4)] backdrop-blur-md transition-transform duration-500 ease-editorial hover:rotate-0">
                
                {/* Header Row */}
                <a 
                  href="#services"
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-3 pb-3 border-b border-tcDeep/8 group"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-tcElectric shadow-[0_0_0_5px_rgba(251,186,0,0.18)]" />
                  <span className="min-w-0 flex-1 font-display text-[12px] font-semibold text-tcDeep/70 leading-snug">
                    Your Partner in<br />
                    <strong className="text-tcDeep font-bold text-[13px]">Digital Transformation</strong>
                  </span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-tcDeep/10 bg-white text-tcDeep group-hover:bg-tcDeep group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Bullet List */}
                <ul className="mt-3.5 space-y-2 font-display text-[12px] font-medium text-tcDeep/85">
                  {capabilitiesList.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={item.href}
                        onClick={() => sound.playBlip(600 + idx * 30)}
                        className="group flex items-center gap-2 hover:text-tcElectric transition-colors"
                      >
                        <span className="text-[13px] font-mono text-tcDeep/60 group-hover:rotate-90 transition-transform duration-200">
                          +
                        </span>
                        <span className="truncate border-b border-transparent group-hover:border-tcCobalt/40 transition-all">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-tcDeep/8">
                  <p className="font-display text-[11px] text-tcDeep/60 leading-tight italic">
                    Innovation drives real business growth.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
};






