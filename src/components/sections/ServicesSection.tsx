import React, { useState } from 'react';
import { CAPABILITIES } from '../../data/companyData';
import { 
  Code2, 
  Palette, 
  ShieldCheck, 
  Factory, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(CAPABILITIES[0].id);
  const currentCapability = CAPABILITIES.find(c => c.id === selectedServiceId) || CAPABILITIES[0];

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

  return (
    <section id="services" className="py-20 sm:py-28 border-b border-carbon-900/10 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <span className="font-mono text-xs font-semibold text-cobalt-600 uppercase tracking-wider block mb-2">
            // LIMA BIDANG LAYANAN
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-carbon-900">
            Our Capabilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-carbon-600 max-w-2xl font-light">
            Kami mengintegrasikan keahlian teknis, pemikiran kreatif, dan analisis bisnis dalam lima bidang keahlian terfokus.
          </p>
        </div>

        {/* 5 Service Tabs Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.iconName] || Code2;
            const isSelected = cap.id === selectedServiceId;

            return (
              <button
                key={cap.id}
                onClick={() => setSelectedServiceId(cap.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'border-carbon-900 bg-carbon-900 text-ivory-50 shadow-sm'
                    : 'border-carbon-900/10 bg-white hover:border-carbon-900/30 text-carbon-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[11px] font-bold ${
                      isSelected ? 'text-cobalt-400' : 'text-cobalt-600'
                    }`}>
                      {cap.number} /
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-carbon-400 group-hover:text-carbon-800'}`} />
                  </div>
                  <p className="font-display font-bold text-xs sm:text-sm leading-snug">
                    {cap.title}
                  </p>
                </div>
                <span className={`text-[10px] font-mono mt-3 block ${
                  isSelected ? 'text-carbon-300' : 'text-carbon-500'
                }`}>
                  {cap.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Presentation Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-carbon-900/10 shadow-xs space-y-8 animate-fadeIn">
          {/* Top Title & Tagline */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-carbon-900/10 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                  BIDANG {currentCapability.number}
                </span>
                <span className="text-xs font-mono text-carbon-500 uppercase">
                  {currentCapability.subtitle}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon-900">
                {currentCapability.title}
              </h3>
              <p className="text-base text-carbon-800 font-medium">
                {currentCapability.tagline}
              </p>
              <p className="text-sm text-carbon-600 leading-relaxed font-light pt-1">
                {currentCapability.overview}
              </p>
            </div>

            {/* Strategic Value Mini Callout */}
            <div className="lg:max-w-xs p-4 rounded-xl bg-ivory-100 border border-carbon-900/10 space-y-1.5 self-start">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cobalt-600 block">
                STRATEGIC IMPACT
              </span>
              <p className="text-xs text-carbon-800 leading-relaxed font-normal">
                {currentCapability.businessValue}
              </p>
            </div>
          </div>

          {/* 2-Column: Scope & Deliverables vs Visual Blueprint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Scope Checklist & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              {/* Detailed Scope */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-carbon-500 block">
                  Ruang Lingkup & Kapabilitas Teknis:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCapability.detailedScope.map((scope, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-carbon-900/5 bg-ivory-100/60 flex items-start gap-2 text-xs text-carbon-800">
                      <Check className="w-3.5 h-3.5 text-cobalt-600 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Deliverables */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-carbon-500 block">
                  Output & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-carbon-700">
                  {currentCapability.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cobalt-500 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-carbon-900/10">
                <span className="text-[10px] font-mono text-carbon-400 uppercase tracking-wider block mb-2">
                  Teknologi & Toolchain Utama:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCapability.toolsAndTech.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-carbon-900/5 border border-carbon-900/10 text-[11px] font-mono text-carbon-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architectural Visual / Wireframe Box for Phase 2 */}
            <div className="lg:col-span-5 space-y-3">
              <ArchitecturalPlaceholder
                label={currentCapability.phase2AssetPrompt}
                category={currentCapability.category}
                aspectRatio="16/9"
                badge={`PHASE 2 // ${currentCapability.number}`}
                schematicType={schematicMap[currentCapability.id] || 'generic'}
              />
              <p className="text-[11px] font-mono text-carbon-400 text-center">
                Visual Direction: {currentCapability.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


