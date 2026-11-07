import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { Code2, Palette, ShieldCheck, Factory, BarChart3, Users, Network, TrendingUp } from 'lucide-react';

export const Page03Overview: React.FC = () => {
  return (
    <PageContainer pageNumber={3}>
      <SectionHeader
        pageNumber={3}
        category="COMPANY OVERVIEW"
        title="Multidisciplinary Technology & Business Solutions"
        subtitle="Uniting Technical Depth with Commercial Acumen"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Core Narrative & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="prose prose-slate max-w-none text-carbon-800 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed font-light">
              <strong className="text-carbon-950 font-bold">Teman Canggih</strong> is an independent multidisciplinary team focused on technology and business solutions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-carbon-700">
              We bring together different areas of expertise to address challenges across digital systems, brand development, cybersecurity, industrial operations, and business strategy.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-carbon-700">
              Our approach combines analytical thinking, technical implementation, and creative problem-solving to deliver solutions aligned with each client's needs and objectives.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-carbon-700 font-medium text-cobalt-700">
              Through collaboration and continuous development, we aim to become a trusted partner in helping businesses and organizations adapt, improve, and grow.
            </p>
          </div>

          {/* 5 Integrated Spheres of Capability Bar */}
          <div className="p-5 rounded-xl border border-carbon-900/10 bg-white shadow-sm">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-carbon-500 mb-3 flex items-center justify-between">
              <span>5 Practice Integrations</span>
              <span className="text-cobalt-600">Cross-Disciplinary Model</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Digital Systems', desc: 'Software, Web, Mobile & Cloud', icon: Code2 },
                { label: 'Brand Development', desc: 'Identity, Positioning & Pitch', icon: Palette },
                { label: 'Cyber Analysis', desc: 'Risk Assessment & Defense Posture', icon: ShieldCheck },
                { label: 'Industrial Operations', desc: 'Factory Workflow & IoT Efficiency', icon: Factory },
                { label: 'Business Strategy', desc: 'Feasibility, Economics & Process', icon: BarChart3 },
              ].map((sphere, idx) => {
                const Icon = sphere.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg border border-carbon-900/5 bg-ivory-100 hover:bg-white hover:border-carbon-900/20 transition-all">
                    <div className="p-1.5 rounded bg-cobalt-50 text-cobalt-600 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-carbon-900">{sphere.label}</p>
                      <p className="text-[11px] text-carbon-500">{sphere.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual & Key Metrics */}
        <div className="lg:col-span-5 space-y-4">
          <ArchitecturalPlaceholder
            label="ARCHITECTURAL INTERIOR // MULTIDISCIPLINARY COLLABORATIVE STUDIO"
            category="CONTEMPORARY STUDIO ARCHITECTURE"
            aspectRatio="16/9"
            badge="PHASE 2 ASSET 02"
          />

          {/* Stat Matrix */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-carbon-900/10 bg-white">
              <span className="font-mono text-2xl font-bold text-carbon-900">5</span>
              <p className="text-xs font-semibold text-carbon-700 mt-1">Unified Practices</p>
              <p className="text-[10px] font-mono text-carbon-400">Zero Agency Silos</p>
            </div>
            <div className="p-4 rounded-xl border border-carbon-900/10 bg-white">
              <span className="font-mono text-2xl font-bold text-cobalt-600">7–10</span>
              <p className="text-xs font-semibold text-carbon-700 mt-1">Core Specialists</p>
              <p className="text-[10px] font-mono text-carbon-400">High-Touch Squad</p>
            </div>
            <div className="p-4 rounded-xl border border-carbon-900/10 bg-white">
              <span className="font-mono text-2xl font-bold text-carbon-900">B2B</span>
              <p className="text-xs font-semibold text-carbon-700 mt-1">Flexible Scope</p>
              <p className="text-[10px] font-mono text-carbon-400">SME to Enterprise</p>
            </div>
            <div className="p-4 rounded-xl border border-carbon-900/10 bg-white">
              <span className="font-mono text-2xl font-bold text-emerald-600">100%</span>
              <p className="text-xs font-semibold text-carbon-700 mt-1">Independent</p>
              <p className="text-[10px] font-mono text-carbon-400">Client-First Alignment</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


