import React, { useState, useEffect, useRef } from 'react';
import { CAPABILITIES } from '../../data/companyData';
import { 
  Code2, 
  Palette, 
  ShieldCheck, 
  Factory, 
  BarChart3, 
  Check, 
  ArrowRight, 
  Sparkles,
  Terminal,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { sound } from '../../utils/sound';

export const RetroScrollyServices: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(CAPABILITIES[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCap = CAPABILITIES.find(c => c.id === activeServiceId) || CAPABILITIES[0];

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Palette,
    ShieldCheck,
    Factory,
    BarChart3,
  };

  const schematicMap: Record<string, 'system' | 'branding' | 'cyber' | 'factory' | 'business'> = {
    'system-development': 'system',
    'branding-development': 'branding',
    'cyber-analysis': 'cyber',
    'factory-consulting': 'factory',
    'business-analysis': 'business',
  };

  // Scroll spy to detect which service card is currently in view
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          const serviceId = entry.target.getAttribute('data-service-id');
          if (serviceId && serviceId !== activeServiceId) {
            setActiveServiceId(serviceId);
            sound.blip();
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.4, 0.7],
      rootMargin: '-10% 0px -20% 0px',
    });

    const elements = document.querySelectorAll('.service-scroll-target');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeServiceId]);

  const scrollToService = (id: string) => {
    sound.click();
    setActiveServiceId(id);
    const el = document.getElementById(`service-card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="services" ref={containerRef} className="py-24 sm:py-32 border-b-2 border-ink bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-cobalt-500 text-white font-mono font-black text-xs uppercase border-2 border-ink shadow-retro-sm">
              FIVE CORE PRACTICES
            </span>
            <span className="font-mono text-xs text-ink-600 font-bold">
              // INTERACTIVE SCROLL EXPLORER
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            Our Capabilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-700 max-w-2xl font-normal leading-relaxed">
            Scroll ke bawah untuk menjelajahi lima bidang layanan terpadu. Monitor di sisi kiri akan bertransformasi secara dinamis mengikuti pembacaan Anda.
          </p>
        </div>

        {/* Pinned Scrollytelling Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Left Column: Retro Telemetry Monitor */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            {/* Retro Monitor Case */}
            <div className="border-2 border-ink bg-cream-50 rounded-2xl p-5 shadow-retro space-y-4">
              {/* Monitor Header */}
              <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-retro-green animate-pulse" />
                  <span className="font-mono font-black text-xs text-ink uppercase">
                    SYS MONITOR // {activeCap.number} OF 05
                  </span>
                </div>
                <span className="font-mono text-[10px] text-ink-500 font-bold uppercase">
                  {activeCap.subtitle}
                </span>
              </div>

              {/* Dynamic Interactive Schematic Visualizer */}
              <div className="border-2 border-ink rounded-xl overflow-hidden shadow-retro-sm bg-ink">
                <ArchitecturalPlaceholder
                  label={activeCap.phase2AssetPrompt}
                  category={activeCap.category}
                  aspectRatio="16/9"
                  badge={`TELEMETRY // ${activeCap.number}`}
                  schematicType={schematicMap[activeCap.id] || 'generic'}
                />
              </div>

              {/* Active Service Title & Quick Jump Buttons */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-cobalt-600 uppercase tracking-wider">
                    CURRENT DISCIPLINE:
                  </span>
                  <span className="font-mono text-xs font-black text-ink">
                    [{activeCap.number}] {activeCap.title}
                  </span>
                </div>

                {/* 5 mini button pills to jump */}
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  {CAPABILITIES.map((cap) => {
                    const isCurrent = cap.id === activeServiceId;
                    return (
                      <button
                        key={cap.id}
                        onClick={() => scrollToService(cap.id)}
                        className={`py-1.5 rounded border-2 border-ink font-mono text-[11px] font-black transition-all ${
                          isCurrent
                            ? 'bg-cobalt-500 text-white shadow-retro-sm scale-105'
                            : 'bg-white hover:bg-retro-amber/30 text-ink'
                        }`}
                        title={cap.title}
                      >
                        {cap.number}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business Value Highlight Box */}
              <div className="p-3.5 rounded-xl border-2 border-ink bg-retro-amber/20 space-y-1">
                <span className="text-[10px] font-mono font-black uppercase text-ink block">
                  STRATEGIC ROI & IMPACT:
                </span>
                <p className="text-xs text-ink leading-relaxed font-medium">
                  {activeCap.businessValue}
                </p>
              </div>
            </div>

            <p className="text-center font-mono text-[11px] text-ink-500 hidden lg:block">
              ↓ Scroll kebawah untuk melihat layanan berikutnya
            </p>
          </div>

          {/* Scrolling Right Column: 5 Detailed Service Dossiers */}
          <div className="lg:col-span-7 space-y-8">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = iconMap[cap.iconName] || Code2;
              const isSelected = cap.id === activeServiceId;

              return (
                <div
                  key={cap.id}
                  id={`service-card-${cap.id}`}
                  data-service-id={cap.id}
                  className={`service-scroll-target p-6 sm:p-8 rounded-2xl border-2 border-ink transition-all duration-300 ${
                    isSelected
                      ? 'bg-white shadow-retro-lg ring-2 ring-cobalt-500'
                      : 'bg-cream-50/90 shadow-retro opacity-90'
                  }`}
                >
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between border-b-2 border-ink pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ink text-retro-amber flex items-center justify-center font-mono font-black text-sm border-2 border-ink shadow-retro-sm">
                        <Icon className="w-5 h-5 text-retro-amber" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-black text-cobalt-600 block">
                          PRACTICE {cap.number} / 05
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                          {cap.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-cream-200 border border-ink text-xs font-mono font-bold text-ink">
                      {cap.subtitle}
                    </span>
                  </div>

                  {/* Tagline & Overview */}
                  <div className="space-y-3 mb-6">
                    <p className="font-display font-bold text-base sm:text-lg text-ink leading-snug">
                      "{cap.tagline}"
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed font-normal">
                      {cap.overview}
                    </p>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-mono font-black uppercase tracking-wider text-ink block">
                      Ruang Lingkup Teknis:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.detailedScope.map((scope, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-lg border border-ink/40 bg-cream-100/80 flex items-start gap-2 text-xs text-ink font-medium leading-tight">
                          <Check className="w-3.5 h-3.5 text-cobalt-600 shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Concrete Deliverables */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono font-black uppercase tracking-wider text-ink block">
                      Deliverables Terdokumentasi:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-ink-800">
                      {cap.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-retro-amber border border-ink shrink-0" />
                          <span className="font-medium">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toolchain Badges */}
                  <div className="pt-4 border-t-2 border-ink flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-ink-500 mr-1">
                      TOOLCHAIN:
                    </span>
                    {cap.toolsAndTech.map((tool, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-ink text-cream-100 font-mono text-[10px] font-bold">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


