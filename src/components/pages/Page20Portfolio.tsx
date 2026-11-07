import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { PORTFOLIO_ITEMS } from '../../data/companyData';
import { CheckCircle2, ArrowRight, Layers, ExternalLink, Sparkles } from 'lucide-react';

export const Page20Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>(PORTFOLIO_ITEMS[0].id);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
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

  return (
    <PageContainer pageNumber={20}>
      <SectionHeader
        pageNumber={20}
        category="PORTFOLIO & CASE STUDIES"
        title="Demonstrated Impact Across Disciplines"
        subtitle="Representative Problem-Solving, Implementation & Measurable Outcomes"
        description="A curated selection of client engagements illustrating our methodology from root-cause diagnosis to delivered organizational results."
      />

      <div className="space-y-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-carbon-900/10 pb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                // auto select first of filtered
                const first = cat.id === 'all' 
                  ? PORTFOLIO_ITEMS[0] 
                  : PORTFOLIO_ITEMS.find(i => i.serviceId === cat.id);
                if (first) setActiveProjectId(first.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-carbon-900 text-ivory-50 shadow-sm'
                  : 'bg-white border border-carbon-900/10 text-carbon-600 hover:text-carbon-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Selected Project Full Detailed Case Study */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-carbon-900/15 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Background, Challenge, Solution */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                    CASE STUDY // {activeProject.id.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-carbon-500">
                    {activeProject.clientCategory}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-carbon-900">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-mono text-cobalt-600 font-semibold mt-0.5">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Background & Challenge */}
              <div className="space-y-3 text-xs sm:text-sm text-carbon-700">
                <div className="p-3.5 rounded-lg bg-ivory-100 border border-carbon-900/5 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-carbon-400 block">
                    Context & Background:
                  </span>
                  <p>{activeProject.background}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-ivory-100 border border-carbon-900/5 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-rose-600 block">
                    The Challenge:
                  </span>
                  <p>{activeProject.challenge}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-cobalt-50/70 border border-cobalt-200/50 space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-cobalt-700 block">
                    Teman Canggih Intervention:
                  </span>
                  <p className="text-carbon-900 font-medium">{activeProject.solution}</p>
                </div>
              </div>

              {/* Documented Results */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-carbon-600 block">
                  Documented Outcomes & Impact:
                </span>
                <div className="space-y-1.5">
                  {activeProject.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-carbon-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="pt-2 border-t border-carbon-900/10 flex flex-wrap gap-1.5">
                {activeProject.technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-carbon-900/5 text-[10px] font-mono text-carbon-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Architectural Screenshot Wireframe & Quick Switcher */}
            <div className="lg:col-span-5 space-y-4">
              <ArchitecturalPlaceholder
                label={activeProject.phase2AssetPrompt}
                category="CASE STUDY DOCUMENTATION"
                aspectRatio="16/9"
                badge={`CASE // ${activeProject.id.toUpperCase()}`}
              />

              {/* Quick Case Switcher Mini List */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-carbon-400 block">
                  Switch Case Study:
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {PORTFOLIO_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveProjectId(item.id)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
                        item.id === activeProjectId
                          ? 'bg-cobalt-500 text-white border-cobalt-500 font-medium shadow-sm'
                          : 'bg-white border-carbon-900/10 text-carbon-700 hover:bg-ivory-100'
                      }`}
                    >
                      <span className="line-clamp-1">{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


