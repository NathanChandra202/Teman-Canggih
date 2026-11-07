import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { INDUSTRIES } from '../../data/companyData';
import { Store, Building2, GraduationCap, Cpu, Globe, Network, ArrowRight, Check } from 'lucide-react';

export const Page15Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].id);
  const activeInd = INDUSTRIES.find(i => i.id === selectedIndustry) || INDUSTRIES[0];

  const iconMap: Record<string, React.ElementType> = {
    Store,
    Building2,
    GraduationCap,
    Cpu,
    Globe,
    Network,
  };

  return (
    <PageContainer pageNumber={15}>
      <SectionHeader
        pageNumber={15}
        category="INDUSTRIES WE SERVE"
        title="Cross-Sector Relevance & Adaptability"
        subtitle="Tailoring Multidisciplinary Solutions Across Distinct Operational Realities"
        description="Whether navigating resource constraints in high-growth SMEs or meeting strict compliance frameworks in corporate institutions, we adapt our toolchains and governance to your domain."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Sector Buttons */}
        <div className="lg:col-span-5 space-y-2">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            const isSelected = ind.id === selectedIndustry;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'border-cobalt-500 bg-white shadow-md ring-2 ring-cobalt-500/20'
                    : 'border-carbon-900/10 bg-white/70 hover:bg-white hover:border-carbon-900/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${
                    isSelected ? 'bg-cobalt-500 text-white' : 'bg-carbon-900/5 text-carbon-700 group-hover:bg-carbon-900 group-hover:text-white'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-carbon-400 block">{ind.code}</span>
                    <p className="font-display font-bold text-xs sm:text-sm text-carbon-900 leading-tight">
                      {ind.name}
                    </p>
                  </div>
                </div>

                <ArrowRight className={`w-4 h-4 transition-transform ${
                  isSelected ? 'text-cobalt-600 translate-x-1' : 'text-carbon-300 group-hover:text-carbon-500'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Sector Deep-Dive Card */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-carbon-900/15 shadow-sm space-y-6">
            <div className="border-b border-carbon-900/10 pb-4">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                SECTOR MATRIX // {activeInd.code}
              </span>
              <h3 className="font-display font-bold text-2xl text-carbon-900 mt-2">
                {activeInd.name}
              </h3>
              <p className="text-sm text-carbon-600 mt-1 leading-relaxed">
                {activeInd.description}
              </p>
            </div>

            {/* Challenges vs Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Typical Challenges */}
              <div className="p-4 rounded-xl border border-carbon-900/10 bg-ivory-100/60 space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-carbon-500 block">
                  Typical Friction Points:
                </span>
                <div className="space-y-1.5">
                  {activeInd.keyChallenges.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-700">
                      <span className="text-rose-500 font-bold shrink-0">•</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teman Canggih Solutions */}
              <div className="p-4 rounded-xl border border-carbon-900/10 bg-ivory-100/60 space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cobalt-600 block">
                  Teman Canggih Interventions:
                </span>
                <div className="space-y-1.5">
                  {activeInd.tcSolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-800">
                      <Check className="w-3.5 h-3.5 text-cobalt-600 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical Scenario Highlight */}
            <div className="p-4 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800">
              <span className="text-[10px] font-mono text-cobalt-400 uppercase tracking-wider block mb-1">
                ILLUSTRATIVE USE CASE
              </span>
              <p className="text-xs sm:text-sm text-carbon-200 leading-relaxed font-light">
                "{activeInd.sampleUseCases}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


