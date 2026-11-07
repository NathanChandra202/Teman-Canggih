import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { WHY_TEMAN_CANGGIH } from '../../data/companyData';
import { Layers, Lightbulb, Users, Sliders, CheckCircle2 } from 'lucide-react';

export const Page16WhyUs: React.FC = () => {
  const iconList = [Layers, Lightbulb, Users, Sliders];

  return (
    <PageContainer pageNumber={16}>
      <SectionHeader
        pageNumber={16}
        category="WHY TEMAN CANGGIH"
        title="Distinctive Value & Decisive Advantages"
        subtitle="Why Organizations Partner with Teman Canggih Over Siloed Vendors"
        description="We bridge the gap between technical execution and business value. Here is what sets our multidisciplinary partnership apart."
      />

      <div className="space-y-6">
        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {WHY_TEMAN_CANGGIH.map((item, idx) => {
            const Icon = iconList[idx] || Layers;

            return (
              <div
                key={item.number}
                className="p-6 rounded-2xl border border-carbon-900/10 bg-white hover:border-cobalt-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-carbon-900 text-ivory-50 group-hover:bg-cobalt-500 transition-colors">
                        <Icon className="w-4 h-4 text-cobalt-300 group-hover:text-white" />
                      </div>
                      <span className="font-mono text-xs font-bold text-cobalt-600">
                        ADVANTAGE {item.number}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                      {item.highlightBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-carbon-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cobalt-600 font-medium mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-carbon-800 leading-snug">
                    {item.summary}
                  </p>

                  <p className="text-xs text-carbon-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-carbon-900/5 flex items-center justify-between text-[10px] font-mono text-carbon-400">
                  <span>TEMAN CANGGIH STANDARDS</span>
                  <span className="text-cobalt-600 font-semibold">VERIFIED PRACTICE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Banner */}
        <div className="p-5 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono text-cobalt-400 uppercase tracking-wider">
              CLIENT ASSURANCE GUARANTEE
            </span>
            <p className="text-sm font-medium text-white">
              Zero black-box handovers. Total intellectual property ownership and complete documentation from day one.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-cobalt-300">
            <CheckCircle2 className="w-4 h-4 text-cobalt-400" />
            <span>100% Transparent Architecture</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


