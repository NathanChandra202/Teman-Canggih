import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/companyData';
import { CheckCircle2, ArrowRight, Layers, Sparkles, Check } from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { sound } from '../../utils/sound';

export const RetroPortfolioReel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>(PORTFOLIO_ITEMS[0].id);

  const categories = [
    { id: 'all', label: 'ALL DISCIPLINES' },
    { id: 'system-development', label: 'SYSTEMS' },
    { id: 'branding-development', label: 'BRANDING' },
    { id: 'cyber-analysis', label: 'CYBER' },
    { id: 'factory-consulting', label: 'FACTORY' },
    { id: 'business-analysis', label: 'STRATEGY' },
  ];

  const activeProject = PORTFOLIO_ITEMS.find(p => p.id === activeProjectId) || PORTFOLIO_ITEMS[0];

  const schematicMap: Record<string, 'system' | 'branding' | 'cyber' | 'factory' | 'business'> = {
    'system-development': 'system',
    'branding-development': 'branding',
    'cyber-analysis': 'cyber',
    'factory-consulting': 'factory',
    'business-analysis': 'business',
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded bg-retro-green/20 text-ink font-mono font-black text-xs uppercase border-2 border-ink shadow-retro-sm">
              PROVEN CAPABILITY
            </span>
            <span className="font-mono text-xs font-bold text-ink-600">
              // CASE ARCHIVE
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            Portfolio & Case Studies
          </h2>
          <p className="mt-2 text-base text-ink-700 max-w-2xl font-normal leading-relaxed">
            Studi kasus mendalam yang mendemonstrasikan proses diagnosis, implementasi disiplin, dan hasil terukur di lima bidang keahlian.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b-2 border-ink pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.click();
                setSelectedCategory(cat.id);
                const first = cat.id === 'all' 
                  ? PORTFOLIO_ITEMS[0] 
                  : PORTFOLIO_ITEMS.find(i => i.serviceId === cat.id);
                if (first) setActiveProjectId(first.id);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-black uppercase tracking-wider border-2 border-ink transition-all ${
                selectedCategory === cat.id
                  ? 'bg-ink text-cream-100 shadow-retro -translate-y-0.5'
                  : 'bg-white text-ink hover:bg-cream-200 shadow-retro-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Case Study Dossier Card */}
        <div className="p-6 sm:p-10 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-8 relative overflow-hidden">
          {/* Retro rubber stamp */}
          <div className="absolute top-6 right-6 hidden sm:block pointer-events-none select-none">
            <div className="px-3 py-1 rounded border-2 border-retro-red text-retro-red font-mono font-black text-xs tracking-widest uppercase rotate-6 opacity-85">
              VERIFIED IMPACT
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Background, Challenge, Solution, Results */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-retro-amber font-mono font-black text-[10px] text-ink uppercase border border-ink">
                    CASE // {activeProject.id.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono font-bold text-ink-500">
                    {activeProject.clientCategory}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-bold text-cobalt-600 mt-1">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Problem / Solution Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-ink-800">
                <div className="p-4 rounded-xl border border-ink/40 bg-cream-50 space-y-1">
                  <span className="font-mono text-[10px] font-black uppercase text-ink-500 block">
                    Konteks & Latar Belakang:
                  </span>
                  <p className="leading-relaxed">{activeProject.background}</p>
                </div>

                <div className="p-4 rounded-xl border border-ink/40 bg-retro-red/10 space-y-1">
                  <span className="font-mono text-[10px] font-black uppercase text-retro-red block">
                    Tantangan Kritis:
                  </span>
                  <p className="leading-relaxed font-medium">{activeProject.challenge}</p>
                </div>

                <div className="p-4 rounded-xl border border-ink/40 bg-retro-green/15 space-y-1">
                  <span className="font-mono text-[10px] font-black uppercase text-ink block">
                    Intervensi Solusi Teman Canggih:
                  </span>
                  <p className="leading-relaxed font-bold">{activeProject.solution}</p>
                </div>
              </div>

              {/* Quantified Results */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-ink block">
                  Hasil Terdokumentasi & Metrik:
                </span>
                <div className="space-y-2">
                  {activeProject.results.map((res, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border-2 border-ink bg-cream-50 flex items-start gap-2.5 text-xs text-ink font-bold shadow-retro-sm">
                      <Check className="w-4 h-4 text-retro-green shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack tags */}
              <div className="pt-2 border-t-2 border-ink flex flex-wrap gap-1.5">
                {activeProject.technologies.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-ink text-cream-100 text-[10px] font-mono font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Architectural Screenshot Wireframe & Case Switcher */}
            <div className="lg:col-span-5 space-y-5">
              <div className="border-2 border-ink rounded-xl overflow-hidden shadow-retro-sm">
                <ArchitecturalPlaceholder
                  label={activeProject.phase2AssetPrompt}
                  category="PORTFOLIO DOCUMENTATION"
                  aspectRatio="16/9"
                  badge={`CASE // ${activeProject.id.toUpperCase()}`}
                  schematicType={schematicMap[activeProject.serviceId] || 'generic'}
                />
              </div>

              {/* Case Study Switcher Buttons */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-black uppercase tracking-wider text-ink block">
                  PILIH STUDI KASUS LAIN:
                </span>
                <div className="space-y-1.5">
                  {PORTFOLIO_ITEMS.map((item) => {
                    const isCurrent = item.id === activeProjectId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          sound.click();
                          setActiveProjectId(item.id);
                        }}
                        className={`w-full text-left p-3 rounded-lg border-2 border-ink text-xs flex items-center justify-between transition-all ${
                          isCurrent
                            ? 'bg-ink text-cream-100 shadow-retro-sm font-bold scale-[1.01]'
                            : 'bg-cream-50 text-ink hover:bg-cream-200'
                        }`}
                      >
                        <span className="truncate pr-2 font-mono">{item.title}</span>
                        <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-retro-amber' : 'text-ink-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


