import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { CAPABILITIES } from '../../data/companyData';
import { Code2, Palette, ShieldCheck, Factory, BarChart3, ArrowRight, Check } from 'lucide-react';

interface Page08Props {
  onNavigateToPage?: (pageNumber: number) => void;
}

export const Page08CapabilitiesOverview: React.FC<Page08Props> = ({ onNavigateToPage }) => {
  const [selectedId, setSelectedId] = useState<string>(CAPABILITIES[0].id);
  const activeCap = CAPABILITIES.find((c) => c.id === selectedId) || CAPABILITIES[0];

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Palette,
    ShieldCheck,
    Factory,
    BarChart3,
  };

  return (
    <PageContainer pageNumber={8}>
      <SectionHeader
        pageNumber={8}
        category="CAPABILITIES OVERVIEW"
        title="Five Core Practice Areas"
        subtitle="End-to-End Capabilities Across Technology, Brand & Strategy"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: 5 Interactive Capability Selector Cards */}
        <div className="lg:col-span-5 space-y-2.5">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = iconMap[cap.iconName] || Code2;
            const isSelected = cap.id === selectedId;

            return (
              <button
                key={cap.id}
                onClick={() => setSelectedId(cap.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'border-cobalt-500 bg-white shadow-md ring-2 ring-cobalt-500/20'
                    : 'border-carbon-900/10 bg-white/70 hover:bg-white hover:border-carbon-900/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-cobalt-500 text-white'
                        : 'bg-carbon-900/5 text-carbon-700 group-hover:bg-carbon-900 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-cobalt-600">
                        {cap.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-carbon-400">
                        PAGE 0{9 + idx}
                      </span>
                    </div>
                    <p className="font-display font-bold text-sm text-carbon-900">
                      {cap.title}
                    </p>
                    <p className="text-[11px] text-carbon-500 font-medium">
                      {cap.subtitle}
                    </p>
                  </div>
                </div>

                <div className={`p-1.5 rounded-full transition-colors ${
                  isSelected ? 'bg-cobalt-50 text-cobalt-600' : 'text-carbon-300 group-hover:text-carbon-600'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Preview for Selected Capability */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-carbon-900/15 shadow-sm space-y-6">
            {/* Header Lockup */}
            <div className="flex items-start justify-between gap-4 border-b border-carbon-900/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                    PRACTICE {activeCap.number} OF 05
                  </span>
                  <span className="text-xs font-mono text-carbon-400">
                    {activeCap.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-carbon-900">
                  {activeCap.title}
                </h3>
                <p className="text-xs font-mono text-cobalt-600 font-semibold uppercase tracking-wider mt-0.5">
                  {activeCap.subtitle}
                </p>
              </div>

              {onNavigateToPage && (
                <button
                  onClick={() => onNavigateToPage(8 + parseInt(activeCap.number))}
                  className="px-3 py-1.5 rounded-lg border border-carbon-900/15 hover:border-cobalt-500 text-xs font-mono text-carbon-700 hover:text-cobalt-600 flex items-center gap-1.5 transition-all"
                >
                  <span>Read Page 0{8 + parseInt(activeCap.number)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Overview & Tagline */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-carbon-900 leading-snug">
                {activeCap.tagline}
              </p>
              <p className="text-xs sm:text-sm text-carbon-600 leading-relaxed">
                {activeCap.overview}
              </p>
            </div>

            {/* Detailed Scope Checklist */}
            <div>
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-carbon-500 mb-2.5">
                Key Deliverables & Execution Scope:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCap.detailedScope.map((scope, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded bg-ivory-100/70 border border-carbon-900/5 text-xs text-carbon-800">
                    <Check className="w-3.5 h-3.5 text-cobalt-600 mt-0.5 shrink-0" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Value Box */}
            <div className="p-4 rounded-xl bg-ivory-200/80 border border-carbon-900/10">
              <span className="text-[10px] font-mono font-bold text-cobalt-600 uppercase tracking-wider block mb-1">
                Strategic Business Value
              </span>
              <p className="text-xs text-carbon-800 leading-relaxed">
                {activeCap.businessValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


