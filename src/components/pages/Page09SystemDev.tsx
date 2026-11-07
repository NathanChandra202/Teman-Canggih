import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { CAPABILITIES } from '../../data/companyData';
import { Code2, CheckCircle2, Server, Terminal, Layers, Cpu, Cloud } from 'lucide-react';

export const Page09SystemDev: React.FC = () => {
  const cap = CAPABILITIES[0]; // System Development

  return (
    <PageContainer pageNumber={9}>
      <SectionHeader
        pageNumber={9}
        category="PRACTICE 01 — TECHNOLOGY & ENGINEERING"
        title="System Development"
        subtitle="Scalable Architecture, Software Engineering & Cloud Infrastructure"
        description="Developing digital systems, software, applications, and infrastructure to support business operations and digital transformation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Detailed Service Scope & Deliverables */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Proposition */}
          <div className="p-6 rounded-xl bg-white border border-carbon-900/10 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-cobalt-600 font-mono text-xs font-bold uppercase">
              <Code2 className="w-4 h-4" />
              <span>CORE ENGINEERING PHILOSOPHY</span>
            </div>
            <h3 className="font-display font-bold text-lg text-carbon-900 leading-snug">
              {cap.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-carbon-600 leading-relaxed">
              We design software systems not as isolated apps, but as resilient organizational assets. Our architectures emphasize high performance, clean type safety, and seamless cloud scale.
            </p>
          </div>

          {/* Scope Grid */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-carbon-500 block">
              Core Technical Capabilities:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cap.detailedScope.map((scope, idx) => (
                <div key={idx} className="p-3.5 rounded-lg border border-carbon-900/10 bg-white flex items-start gap-2.5">
                  <div className="p-1 rounded bg-cobalt-50 text-cobalt-600 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-carbon-800 leading-tight">
                    {scope}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Stack Row */}
          <div className="p-5 rounded-xl border border-carbon-900/10 bg-ivory-200/50 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-carbon-600 block">
              Production Deliverables:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-carbon-700">
              {cap.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cobalt-500" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-carbon-900/10 flex flex-wrap gap-1.5">
              {cap.toolsAndTech.map((tech, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-white border border-carbon-900/10 text-[10px] font-mono text-carbon-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Photography Placeholder & Technical Schematic */}
        <div className="lg:col-span-5 space-y-4">
          <ArchitecturalPlaceholder
            label={cap.phase2AssetPrompt}
            category="SYSTEM ARCHITECTURE & CLOUD BLUEPRINT"
            aspectRatio="16/9"
            badge="PHASE 2 ASSET 09"
          />

          <div className="p-5 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800 space-y-2">
            <span className="text-[10px] font-mono text-cobalt-400 uppercase tracking-wider block">
              BUSINESS VALUE DELIVERY
            </span>
            <p className="text-xs leading-relaxed text-carbon-300">
              {cap.businessValue}
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


