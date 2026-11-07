import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Users2, Layers, CheckCircle2, ArrowDown, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ScrollyManifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      badge: 'PROPOSISI UTAMA // 01',
      title: 'Ideas Are Everywhere.',
      highlight: 'Meaningful Solutions Make the Difference.',
      body: 'Setiap bisnis, institusi, dan industri menghadapi tantangan yang membutuhkan lebih dari sekadar solusi standar. Progres nyata berawal dari pemahaman konteks, eksplorasi peluang, dan pembangunan solusi dengan tujuan yang jelas.',
      stat: '100% Client Alignment',
      statLabel: 'Zero Generic Templates',
      tag: 'CONTEXTUAL FOCUS',
    },
    {
      badge: 'SIAPA KAMI // 02',
      title: 'Independent Multidisciplinary Firm.',
      highlight: 'Five Core Fields Under One Roof.',
      body: 'Teman Canggih mempertemukan berbagai keahlian lintas sistem digital, pengembangan brand, keamanan siber, operasional industri, dan strategi bisnis untuk memecahkan masalah tanpa terbentur sekat birokrasi konvensional.',
      stat: '5 Integrated Practices',
      statLabel: 'No Agency Silos',
      tag: 'HOLISTIC INTEGRATION',
    },
    {
      badge: 'TIM & STRUKTUR // 03',
      title: '7–10 Core Active Practitioners.',
      highlight: 'Understanding. Planning. Execution. Improvement.',
      body: 'Solusi yang efektif tidak lahir dari keahlian teknis semata, melainkan dari siklus disiplin: pemahaman mendalam, perencanaan arsitektur, eksekusi sprint yang rapi, dan evaluasi berkelanjutan bersama klien.',
      stat: '7–10 Talent Pool',
      statLabel: 'Agile Squad Cadence',
      tag: 'RAPID DELIVERY',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));

      const newStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      if (newStep !== activeStep) {
        setActiveStep(newStep);
        sound.blip();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, steps.length]);

  return (
    <section 
      id="manifesto" 
      ref={containerRef}
      className="relative h-[250vh] border-b-2 border-ink bg-cream-50"
    >
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Scrollytelling Indicator */}
        <div className="mb-6 flex items-center justify-between border-b-2 border-ink pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-ink text-retro-amber font-mono font-black text-xs uppercase">
              SCROLLYTELLING // 01
            </span>
            <span className="font-mono text-xs font-bold text-ink uppercase">
              WHO WE ARE & MANIFESTO
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="text-cobalt-600">FASE {activeStep + 1} DARI {steps.length}</span>
            <span className="text-ink-400">|</span>
            <span className="text-ink-600">SCROLL DOWN ↓</span>
          </div>
        </div>

        {/* Dynamic Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Dynamic Illuminated Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded bg-retro-amber border-2 border-ink font-mono font-black text-xs text-ink uppercase shadow-retro-sm">
              {steps[activeStep].badge}
            </span>

            <div className="space-y-2">
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight leading-[0.95] transition-all duration-300">
                {steps[activeStep].title}
              </h2>
              <p className="font-display font-black text-2xl sm:text-3xl text-cobalt-500 uppercase tracking-tight">
                {steps[activeStep].highlight}
              </p>
            </div>

            <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-normal max-w-2xl">
              {steps[activeStep].body}
            </p>

            {/* Quick step click override */}
            <div className="flex items-center gap-2 pt-2">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sound.click();
                    setActiveStep(idx);
                  }}
                  className={`px-3 py-1.5 rounded-lg border-2 border-ink font-mono text-xs font-black uppercase transition-all ${
                    idx === activeStep
                      ? 'bg-ink text-retro-amber shadow-retro-sm scale-105'
                      : 'bg-white text-ink hover:bg-cream-200'
                  }`}
                >
                  Step 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Interactive Retro Telemetry Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-5">
              <div className="flex items-center justify-between border-b-2 border-ink pb-3 font-mono text-xs">
                <span className="font-black text-ink">TELEMETRY STATS</span>
                <span className="px-2 py-0.5 rounded bg-retro-green/20 text-ink font-bold border border-ink">
                  {steps[activeStep].tag}
                </span>
              </div>

              {/* Dynamic Big Stat */}
              <div className="p-6 rounded-xl border-2 border-ink bg-ink text-cream-100 shadow-retro-sm space-y-1 text-center">
                <span className="font-display font-black text-4xl sm:text-5xl text-retro-amber uppercase block">
                  {steps[activeStep].stat}
                </span>
                <span className="font-mono text-xs text-cream-300 font-bold uppercase tracking-wider block">
                  {steps[activeStep].statLabel}
                </span>
              </div>

              {/* Dynamic checklist */}
              <div className="space-y-2 font-mono text-xs text-ink font-bold">
                <div className="flex items-center justify-between p-2.5 rounded border border-ink bg-cream-100">
                  <span>DISCOVERY RIGOR</span>
                  <span className="text-retro-green">VERIFIED</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded border border-ink bg-cream-100">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span className="text-cobalt-600">BESPOKE</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded border border-ink bg-cream-100">
                  <span>DEPLOYMENT LIFECYCLE</span>
                  <span className="text-retro-orange">AGILE SPRINT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


