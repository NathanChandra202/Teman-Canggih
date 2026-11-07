import React, { useState } from 'react';
import { 
  WHY_TEMAN_CANGGIH, 
  INDUSTRIES 
} from '../../data/companyData';
import { 
  Layers, 
  Search, 
  Users, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Store,
  GraduationCap,
  Cpu,
  Globe,
  Network
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface TCWhyUsIndustriesProps {
  onOpenContact: () => void;
}

export const TCWhyUsIndustries: React.FC<TCWhyUsIndustriesProps> = ({ onOpenContact }) => {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES[0].id);
  const activeIndustry = INDUSTRIES.find(i => i.id === activeIndustryId) || INDUSTRIES[0];

  const getDifferentiatorIcon = (index: number) => {
    switch (index) {
      case 0: return <Layers className="w-5 h-5 text-tcCyan" />;
      case 1: return <Search className="w-5 h-5 text-tcCyan" />;
      case 2: return <Users className="w-5 h-5 text-tcCyan" />;
      case 3: return <Sliders className="w-5 h-5 text-tcCyan" />;
      default: return <Layers className="w-5 h-5 text-tcCyan" />;
    }
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#F8FAFC] border-t border-tcDeep/10 text-tcDeep relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-tcDeep/15 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-tcDeep/60 bg-white px-2.5 py-1 rounded border border-tcDeep/10">
                06 / 08
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-tcDeep/60">
                [ WHY US & INDUSTRIES ]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-tcDeep">
              Why Teman Canggih<span className="text-tcCyan">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-tcDeep/70 font-sans leading-relaxed">
            We connect multidisciplinary engineering and strategic insight to solve real operational friction across high-stakes commercial sectors.
          </p>
        </div>

        {/* Part 1: 4 Core Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {WHY_TEMAN_CANGGIH.map((diff, idx) => (
            <div 
              key={diff.number}
              className="bg-white border border-tcDeep/10 p-8 rounded-xl hover:border-tcCyan/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-tcDeep/5 border border-tcDeep/10 flex items-center justify-center group-hover:bg-tcDeep group-hover:text-white transition-colors">
                    {getDifferentiatorIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-tcDeep/40">
                    {diff.number}
                  </span>
                </div>
                
                <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider text-tcCyan bg-tcDeep px-2 py-0.5 rounded mb-3">
                  {diff.highlightBadge}
                </span>

                <h3 className="text-xl font-display font-bold text-tcDeep mb-2 group-hover:text-tcElectric transition-colors">
                  {diff.title}
                </h3>
                
                <p className="text-xs font-semibold text-tcDeep/60 uppercase tracking-wider mb-4">
                  {diff.tagline}
                </p>

                <p className="text-sm text-tcDeep/75 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-tcDeep/10 flex items-center text-xs font-mono font-semibold text-tcDeep/50 group-hover:text-tcDeep transition-colors">
                <span>Rigor Guaranteed</span>
                <span className="ml-auto">â†’</span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Industries We Serve */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-tcDeep/15 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-tcDeep/60 block mb-2">
                SECTOR APPLICABILITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-tcDeep">
                Industries We Serve<span className="text-tcCyan">.</span>
              </h3>
            </div>
            <p className="text-sm text-tcDeep/70 max-w-sm">
              Select an industry to explore the specific challenges we address and our validated operational solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Industry Selector Buttons (Left Column) */}
            <div className="lg:col-span-5 space-y-3">
              {INDUSTRIES.map((ind) => {
                const isSelected = ind.id === activeIndustryId;
                return (
                  <button
                    key={ind.id}
                    onClick={() => {
                      sound.playBlip(620);
                      setActiveIndustryId(ind.id);
                    }}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-tcDeep text-white border-tcDeep shadow-md translate-x-1'
                        : 'bg-white text-tcDeep border-tcDeep/10 hover:border-tcDeep/30 hover:bg-tcDeep/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-tcCyan text-tcDeep font-bold' 
                          : 'bg-tcDeep/5 text-tcDeep/70 group-hover:text-tcDeep'
                      }`}>
                        {getIndustryIcon(ind.icon)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                            isSelected ? 'text-tcCyan' : 'text-tcDeep/50'
                          }`}>
                            {ind.code}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base sm:text-lg">
                          {ind.name}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-tcCyan translate-x-1' : 'text-tcDeep/30 group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Detailed Selected Industry Card (Right Column) */}
            <div className="lg:col-span-7 bg-white border border-tcDeep/10 rounded-xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tcCyan/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-tcDeep text-tcCyan">
                  {activeIndustry.code} // SECTOR BRIEF
                </span>
                <span className="font-mono text-xs text-tcDeep/50">
                  Teman Canggih Matrix
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-tcDeep mb-4">
                {activeIndustry.name}
              </h4>

              <p className="text-base text-tcDeep/80 font-sans leading-relaxed mb-8">
                {activeIndustry.description}
              </p>

              {/* Challenges vs TC Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-tcDeep/10">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-red-600 font-mono text-xs font-bold uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>Typical Sector Friction</span>
                  </div>
                  <ul className="space-y-2">
                    {activeIndustry.keyChallenges.map((ch, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-tcDeep/70 flex items-start gap-2">
                        <span className="text-red-500 font-bold">â€¢</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>TC Intervention</span>
                  </div>
                  <ul className="space-y-2">
                    {activeIndustry.tcSolutions.map((sol, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-tcDeep/85 font-medium flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">âœ“</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sample Real-World Use Case Box */}
              <div className="bg-[#F8FAFC] p-5 rounded-lg border border-tcDeep/10 mb-8">
                <span className="font-mono text-[10px] uppercase font-bold text-tcDeep/60 block mb-1">
                  Validated Use Case Scenario
                </span>
                <p className="text-sm font-sans font-medium text-tcDeep/90 italic">
                  "{activeIndustry.sampleUseCases}"
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-tcDeep/10 gap-4">
                <span className="text-xs font-mono text-tcDeep/60">
                  Ready to optimize in {activeIndustry.name}?
                </span>
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-tcDeep text-white hover:bg-tcElectric rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};






