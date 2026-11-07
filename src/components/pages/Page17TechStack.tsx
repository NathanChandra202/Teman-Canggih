import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { TECH_STACK } from '../../data/companyData';
import { Code2, ShieldCheck, Factory, Palette, Layers, Terminal } from 'lucide-react';

export const Page17TechStack: React.FC = () => {
  return (
    <PageContainer pageNumber={17}>
      <SectionHeader
        pageNumber={17}
        category="INFRASTRUCTURE & ECOSYSTEM"
        title="Technology, Toolchains & Platforms"
        subtitle="Modern, Production-Grade Tooling Supporting Every Engagement"
        description="We leverage battle-tested open standards and enterprise ecosystems to ensure maintainability, security, and long-term viability without vendor lock-in."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Category 1: Software & Cloud */}
        <div className="p-6 rounded-2xl border border-carbon-900/10 bg-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-carbon-900/10 pb-3">
            <div className="flex items-center gap-2 text-carbon-900 font-display font-bold text-base">
              <Code2 className="w-5 h-5 text-cobalt-600" />
              <span>Software Engineering & Cloud</span>
            </div>
            <span className="font-mono text-[10px] text-carbon-400">STACK-01</span>
          </div>

          <div className="space-y-2">
            {TECH_STACK.softwareEngineering.map((tech, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border border-carbon-900/5 bg-ivory-100 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-carbon-900">{tech.name}</span>
                <span className="text-carbon-500 font-mono text-[11px]">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Cyber Defense */}
        <div className="p-6 rounded-2xl border border-carbon-900/10 bg-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-carbon-900/10 pb-3">
            <div className="flex items-center gap-2 text-carbon-900 font-display font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-cobalt-600" />
              <span>Cyber Intelligence & Defense</span>
            </div>
            <span className="font-mono text-[10px] text-carbon-400">STACK-02</span>
          </div>

          <div className="space-y-2">
            {TECH_STACK.cyberDefense.map((tech, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border border-carbon-900/5 bg-ivory-100 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-carbon-900">{tech.name}</span>
                <span className="text-carbon-500 font-mono text-[11px]">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Industrial Operations */}
        <div className="p-6 rounded-2xl border border-carbon-900/10 bg-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-carbon-900/10 pb-3">
            <div className="flex items-center gap-2 text-carbon-900 font-display font-bold text-base">
              <Factory className="w-5 h-5 text-cobalt-600" />
              <span>Industrial Telemetry & Lean</span>
            </div>
            <span className="font-mono text-[10px] text-carbon-400">STACK-03</span>
          </div>

          <div className="space-y-2">
            {TECH_STACK.industrialAndOperations.map((tech, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border border-carbon-900/5 bg-ivory-100 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-carbon-900">{tech.name}</span>
                <span className="text-carbon-500 font-mono text-[11px]">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category 4: Design & Analytics */}
        <div className="p-6 rounded-2xl border border-carbon-900/10 bg-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-carbon-900/10 pb-3">
            <div className="flex items-center gap-2 text-carbon-900 font-display font-bold text-base">
              <Palette className="w-5 h-5 text-cobalt-600" />
              <span>Design Systems & Analytics</span>
            </div>
            <span className="font-mono text-[10px] text-carbon-400">STACK-04</span>
          </div>

          <div className="space-y-2">
            {TECH_STACK.designAndStrategy.map((tech, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border border-carbon-900/5 bg-ivory-100 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-carbon-900">{tech.name}</span>
                <span className="text-carbon-500 font-mono text-[11px]">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


