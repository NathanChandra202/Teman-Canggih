import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { CORE_VALUES } from '../../data/companyData';
import { Target, CheckCircle2, Shield, Sparkles, HeartHandshake, Award } from 'lucide-react';

export const Page06VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'values'>('mission');

  const MISSIONS = [
    'Develop relevant and effective technology solutions based on real-world needs.',
    'Help businesses establish strong brand identities and strategic positioning.',
    'Support organizations in understanding and improving their cybersecurity posture.',
    'Encourage operational efficiency through analysis and industrial digitalization.',
    'Provide analytical insights and strategic recommendations for business development.',
    'Build collaborative relationships that encourage continuous learning and improvement.',
  ];

  return (
    <PageContainer pageNumber={6}>
      <SectionHeader
        pageNumber={6}
        category="FOUNDATIONS"
        title="Vision, Mission & Core Values"
        subtitle="The Architectural Blueprint Guiding Our Actions"
      />

      <div className="space-y-6">
        {/* Top: Bold Vision Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800 shadow-md relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>OUR VISION STATEMENT</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-snug">
                "To become a trusted multidisciplinary team in technology and business solutions, contributing to meaningful innovation, organizational development, and sustainable progress."
              </h3>
            </div>
            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded-full border border-cobalt-400/40 bg-cobalt-500/10 text-cobalt-300 font-mono text-xs">
                VISION 2026+
              </span>
            </div>
          </div>
        </div>

        {/* Tab Toggle for Interactive Experience */}
        <div className="flex items-center justify-between border-b border-carbon-900/10 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all ${
                activeTab === 'mission'
                  ? 'bg-carbon-900 text-ivory-50 shadow-sm'
                  : 'bg-white/80 text-carbon-600 hover:text-carbon-900'
              }`}
            >
              OUR 6 MISSIONS
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all ${
                activeTab === 'values'
                  ? 'bg-carbon-900 text-ivory-50 shadow-sm'
                  : 'bg-white/80 text-carbon-600 hover:text-carbon-900'
              }`}
            >
              OUR 6 CORE VALUES
            </button>
          </div>
          <span className="text-[11px] font-mono text-carbon-400 hidden sm:inline">
            CLICK TO TOGGLE PERSPECTIVE
          </span>
        </div>

        {/* Missions View */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 animate-fadeIn">
            {MISSIONS.map((mission, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-carbon-900/10 bg-white hover:border-cobalt-500/40 hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-cobalt-600">
                      MISSION 0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-carbon-300 group-hover:text-cobalt-500 transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-carbon-800 leading-snug">
                    {mission}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-carbon-900/5 text-[10px] font-mono text-carbon-400">
                  TEMAN CANGGIH // ACTION DIRECTIVE
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Core Values View */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 animate-fadeIn">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-carbon-900/10 bg-white hover:border-cobalt-500/40 hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-carbon-400 group-hover:text-cobalt-600">
                      VALUE 0{idx + 1}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-carbon-900/5 text-carbon-600">
                      {val.metric}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-carbon-900 mb-1">
                    {val.name}
                  </h4>
                  <p className="text-xs text-carbon-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-carbon-900/5 text-[10px] font-mono text-cobalt-600">
                  STANDARD: ZERO COMPROMISE
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
};


