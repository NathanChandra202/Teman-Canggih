import React, { useState } from 'react';
import { WHY_TEMAN_CANGGIH, INDUSTRIES } from '../../data/companyData';
import { Layers, Lightbulb, Users, Sliders, CheckCircle2, Store, Building2, GraduationCap, Cpu, Globe, Network, ArrowRight, Check, Zap } from 'lucide-react';
import { sound } from '../../utils/sound';

export const WhyUsSection: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);
  const activeInd = INDUSTRIES.find(i => i.id === selectedIndustryId) || INDUSTRIES[0];

  const iconList = [Layers, Lightbulb, Users, Sliders];
  const industryIcons: Record<string, React.ElementType> = {
    Store,
    Building2,
    GraduationCap,
    Cpu,
    Globe,
    Network,
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Sub-section 1: Why Teman Canggih */}
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded bg-retro-amber font-mono font-black text-xs text-ink uppercase border-2 border-ink shadow-retro-sm">
                COMPETITIVE ADVANTAGE
              </span>
              <span className="font-mono text-xs font-bold text-ink-600">
                // WHY US
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
              Why Teman Canggih
            </h2>
            <p className="mt-2 text-base text-ink-700 max-w-2xl font-normal leading-relaxed">
              Kami menyatukan disiplin lintas rekayasa, brand, keamanan, dan analisis operasional untuk menghindarkan klien dari jebakan vendor terkotak-kotak (siloed agencies).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_TEMAN_CANGGIH.map((item, idx) => {
              const Icon = iconList[idx] || Layers;
              return (
                <div
                  key={item.number}
                  className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg flex flex-col justify-between group hover:-translate-y-1 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-lg bg-ink text-retro-amber border border-ink">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-black text-cobalt-600">
                          0{idx + 1} //
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded border border-ink bg-retro-amber font-mono text-[10px] font-black text-ink">
                        {item.highlightBadge}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-cobalt-600">
                      {item.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t-2 border-ink font-mono text-[10px] text-ink-500 font-bold">
                    VERIFIED // TEMAN CANGGIH DIRECTIVE
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sub-section 2: Industries We Serve */}
        <div id="industries" className="space-y-10 pt-10 border-t-2 border-ink">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded bg-cobalt-500 text-white font-mono font-black text-xs uppercase border-2 border-ink shadow-retro-sm">
                SECTOR MATRIX
              </span>
              <span className="font-mono text-xs font-bold text-ink-600">
                // TARGET INDUSTRIES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-ink uppercase tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-2 text-base text-ink-700 max-w-2xl font-normal leading-relaxed">
              Mulai dari skala bisnis berkembang (SMEs) hingga korporasi besar, fasilitas manufaktur, dan institusi pendidikan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Industry Selector List */}
            <div className="lg:col-span-5 space-y-2.5">
              {INDUSTRIES.map((ind) => {
                const Icon = industryIcons[ind.icon] || Building2;
                const isSelected = ind.id === selectedIndustryId;

                return (
                  <button
                    key={ind.id}
                    onClick={() => {
                      sound.click();
                      setSelectedIndustryId(ind.id);
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 border-ink transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-ink text-cream-100 shadow-retro -translate-y-0.5'
                        : 'bg-white hover:bg-cream-200 text-ink shadow-retro-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border border-ink ${isSelected ? 'bg-ink-800 text-retro-amber' : 'bg-cream-100 text-ink'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`font-mono text-[10px] font-bold block ${isSelected ? 'text-cream-400' : 'text-ink-500'}`}>
                          {ind.code}
                        </span>
                        <p className="font-display font-black text-sm uppercase tracking-tight">
                          {ind.name}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-retro-amber' : 'text-ink-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Industry Detail Card */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-5">
                <div className="border-b-2 border-ink pb-4">
                  <span className="px-2.5 py-0.5 rounded bg-retro-amber font-mono font-black text-[10px] text-ink uppercase border border-ink">
                    SECTOR // {activeInd.code}
                  </span>
                  <h3 className="font-display font-black text-2xl text-ink uppercase tracking-tight mt-2">
                    {activeInd.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-700 mt-1 leading-relaxed">
                    {activeInd.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border-2 border-ink bg-retro-red/10 space-y-2">
                    <span className="text-[10px] font-mono font-black uppercase text-retro-red block">
                      Tantangan Kritis Sektor:
                    </span>
                    <div className="space-y-1.5 text-xs text-ink-800 font-medium">
                      {activeInd.keyChallenges.map((ch, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-retro-red font-bold">►</span>
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border-2 border-ink bg-retro-green/15 space-y-2">
                    <span className="text-[10px] font-mono font-black uppercase text-ink block">
                      Solusi Teman Canggih:
                    </span>
                    <div className="space-y-1.5 text-xs text-ink font-bold">
                      {activeInd.tcSolutions.map((sol, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-retro-green shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-ink bg-ink text-cream-100 shadow-retro-sm">
                  <span className="text-[10px] font-mono text-retro-amber uppercase tracking-wider font-black block mb-1">
                    ILUSTRASI IMPLEMENTASI:
                  </span>
                  <p className="text-xs text-cream-200 leading-relaxed font-normal">
                    "{activeInd.sampleUseCases}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

