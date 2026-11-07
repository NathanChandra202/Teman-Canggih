import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/companyData';
import { CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>(PORTFOLIO_ITEMS[0].id);

  const categories = [
    { id: 'all', label: 'Semua Bidang' },
    { id: 'system-development', label: 'Digital Systems' },
    { id: 'branding-development', label: 'Brand & Creative' },
    { id: 'cyber-analysis', label: 'Cyber Security' },
    { id: 'factory-consulting', label: 'Industrial Ops' },
    { id: 'business-analysis', label: 'Business Strategy' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.serviceId === selectedCategory);

  const activeProject = PORTFOLIO_ITEMS.find(p => p.id === activeProjectId) || PORTFOLIO_ITEMS[0];

  const schematicMap: Record<string, 'system' | 'branding' | 'cyber' | 'factory' | 'business'> = {
    'system-development': 'system',
    'branding-development': 'branding',
    'cyber-analysis': 'cyber',
    'factory-consulting': 'factory',
    'business-analysis': 'business',
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 border-b border-carbon-900/10 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <span className="font-mono text-xs font-semibold text-cobalt-600 uppercase tracking-wider block mb-2">
            // BUKTI KAPABILITAS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-carbon-900">
            Portfolio & Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-carbon-600 max-w-2xl font-light">
            Seleksi representasi proyek yang mendemonstrasikan cara kerja, implementasi teknis, dan hasil yang terdokumentasi.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-carbon-900/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                const first = cat.id === 'all' 
                  ? PORTFOLIO_ITEMS[0] 
                  : PORTFOLIO_ITEMS.find(i => i.serviceId === cat.id);
                if (first) setActiveProjectId(first.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-carbon-900 text-ivory-50 shadow-xs'
                  : 'bg-white border border-carbon-900/10 text-carbon-600 hover:text-carbon-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Study Feature Container */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-carbon-900/10 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Background, Challenge, Solution, Results */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200 uppercase">
                    STUDI KASUS // {activeProject.id.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-carbon-500">
                    {activeProject.clientCategory}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-carbon-900">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-medium text-cobalt-700 mt-1">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Problem / Solution Narrative */}
              <div className="space-y-3 text-xs sm:text-sm text-carbon-700">
                <div className="p-3.5 rounded-lg bg-ivory-100 border border-carbon-900/5 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-carbon-500 block">
                    Konteks & Latar Belakang:
                  </span>
                  <p className="leading-relaxed">{activeProject.background}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-ivory-100 border border-carbon-900/5 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-rose-600 block">
                    Tantangan Utama:
                  </span>
                  <p className="leading-relaxed">{activeProject.challenge}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-cobalt-50/70 border border-cobalt-200/50 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-cobalt-700 block">
                    Solusi Teman Canggih:
                  </span>
                  <p className="leading-relaxed text-carbon-900 font-medium">{activeProject.solution}</p>
                </div>
              </div>

              {/* Quantified Results */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-carbon-600 block">
                  Hasil & Dampak Terukur:
                </span>
                <div className="space-y-1.5">
                  {activeProject.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-carbon-900 font-medium leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack tags */}
              <div className="pt-2 border-t border-carbon-900/10 flex flex-wrap gap-1.5">
                {activeProject.technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-carbon-900/5 text-[10px] font-mono text-carbon-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Architectural Screenshot Wireframe & Quick Project List */}
            <div className="lg:col-span-5 space-y-5">
              <ArchitecturalPlaceholder
                label={activeProject.phase2AssetPrompt}
                category="PORTFOLIO DOCUMENTATION"
                aspectRatio="16/9"
                badge={`CASE // ${activeProject.id.toUpperCase()}`}
                schematicType={schematicMap[activeProject.serviceId] || 'generic'}
              />

              {/* Case Study Switcher List */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-carbon-400 block">
                  Pilih Studi Kasus Lainnya:
                </span>
                <div className="space-y-1.5">
                  {PORTFOLIO_ITEMS.map((item) => {
                    const isCurrent = item.id === activeProjectId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveProjectId(item.id)}
                        className={`w-full text-left p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${
                          isCurrent
                            ? 'bg-carbon-900 text-ivory-50 border-carbon-900 font-medium shadow-xs'
                            : 'bg-white border-carbon-900/10 text-carbon-700 hover:border-carbon-900/30'
                        }`}
                      >
                        <span className="truncate pr-2">{item.title}</span>
                        <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-cobalt-400' : 'text-carbon-400'}`} />
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


