import React, { useRef, useState, useEffect } from 'react';
import { Eye, Hammer, Sparkles, CheckCircle2, Zap, Target } from 'lucide-react';
import { CORE_VALUES } from '../../data/companyData';
import { sound } from '../../utils/sound';

export const ScrollyPhilosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 'think-beyond',
      code: 'PHILOSOPHY // 01',
      title: 'Think Beyond.',
      sub: 'LOOKING BEYOND IMMEDIATE SYMPTOMS',
      icon: Eye,
      tag: 'MACRO PERSPECTIVE',
      color: 'bg-retro-amber',
      text: 'Komitmen kami untuk melihat lebih jauh dari sekadar gejala masalah di permukaan. Kami mendiagnosis akar masalah organisasi, memahami dinamika pasar, dan mengidentifikasi peluang transformasi yang sering terlewatkan.',
      directives: [
        'Root-cause diagnostic inquiry',
        'Cross-disciplinary market scanning',
        'Long-term strategic positioning',
      ],
    },
    {
      id: 'build-better',
      code: 'PHILOSOPHY // 02',
      title: 'Build Better.',
      sub: 'TRANSLATING IDEAS INTO RESILIENT CRAFT',
      icon: Hammer,
      tag: 'DISCIPLINED CRAFT',
      color: 'bg-cobalt-500',
      text: 'Dedikasi kami untuk menerjemahkan gagasan dan strategi menjadi solusi nyata yang praktis, teruji, berdaya guna tinggi, dan memberikan nilai komersial nyata tanpa kompromi kualitas.',
      directives: [
        'Clean scalable software engineering',
        'Cohesive, high-trust brand systems',
        'Measurable operational ROI and efficiency',
      ],
    },
    {
      id: 'core-mantra',
      code: 'PHILOSOPHY // 03',
      title: 'Technology Is a Means.',
      sub: 'PURPOSE PRECEDES COMPLEXITY',
      icon: Sparkles,
      tag: 'HUMAN IMPACT',
      color: 'bg-retro-green',
      text: 'Kami meyakini bahwa teknologi bukanlah tujuan akhir. Teknologi adalah sarana untuk menciptakan kemajuan nyata bagi manusia dan organisasi. Kecanggihan sejati adalah menyederhanakan masalah menjadi solusi yang efektif.',
      directives: [
        'Zero unnecessary technological bloat',
        'Right-sized architecture for your scale',
        'Empowering client teams sustainably',
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height - window.innerHeight;
      if (containerHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / containerHeight));
      const newStage = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      if (newStage !== activeStage) {
        setActiveStage(newStage);
        sound.blip();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStage, stages.length]);

  const current = stages[activeStage];
  const Icon = current.icon;

  return (
    <section 
      id="philosophy" 
      ref={containerRef}
      className="relative h-[250vh] border-b-2 border-ink bg-cream-100"
    >
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Scrolly Header */}
        <div className="mb-6 flex items-center justify-between border-b-2 border-ink pb-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-ink text-retro-amber font-black uppercase">
              SCROLLYTELLING // 02
            </span>
            <span className="font-bold text-ink uppercase">
              CORE PHILOSOPHY & CONVICTION
            </span>
          </div>

          <div className="flex items-center gap-2 font-black">
            <span className="text-cobalt-600">STAGE 0{activeStage + 1} / 0{stages.length}</span>
            <span className="text-ink-400">|</span>
            <span className="text-ink-600">SCROLL DOWN ↓</span>
          </div>
        </div>

        {/* Dynamic Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Dynamic Content Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded border-2 border-ink font-mono font-black text-xs text-ink uppercase shadow-retro-sm ${current.color}`}>
                {current.code}
              </span>
              <span className="font-mono text-xs font-bold text-ink-600">
                // {current.tag}
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="font-display font-black text-4xl sm:text-6xl text-ink uppercase tracking-tight">
                {current.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm font-black text-cobalt-600 uppercase tracking-wider">
                {current.sub}
              </p>
            </div>

            <p className="text-base sm:text-lg text-ink-800 leading-relaxed font-normal max-w-2xl">
              {current.text}
            </p>

            {/* Directives checklist */}
            <div className="space-y-2 pt-2">
              {current.directives.map((dir, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono text-xs font-bold text-ink">
                  <div className="w-2 h-2 rounded-full bg-retro-amber border border-ink" />
                  <span>{dir}</span>
                </div>
              ))}
            </div>

            {/* Stage Buttons */}
            <div className="pt-2 flex items-center gap-2">
              {stages.map((st, idx) => (
                <button
                  key={st.id}
                  onClick={() => {
                    sound.click();
                    setActiveStage(idx);
                  }}
                  className={`px-3 py-1.5 rounded-lg border-2 border-ink font-mono text-xs font-black uppercase transition-all ${
                    idx === activeStage
                      ? 'bg-ink text-retro-amber shadow-retro-sm scale-105'
                      : 'bg-white text-ink hover:bg-cream-200'
                  }`}
                >
                  {st.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Interactive Terminal Visualizer */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-6 text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl border-2 border-ink bg-ink text-retro-amber flex items-center justify-center shadow-retro-sm">
                <Icon className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs font-black text-cobalt-600 uppercase">
                  PHILOSOPHY COMPASS
                </span>
                <h4 className="font-display font-black text-2xl text-ink uppercase">
                  {current.title}
                </h4>
              </div>

              <div className="p-4 rounded-xl border border-ink/40 bg-cream-50 font-mono text-xs text-ink-700 leading-relaxed font-medium">
                "Bukan sekadar slogan, melainkan standar evaluasi kualitas yang kami terapkan pada setiap sprint, dokumen strategi, dan baris kode."
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-ink-500 border-t-2 border-ink pt-3 font-bold">
                <span>TEMAN CANGGIH PLEDGE</span>
                <span className="text-retro-green">ACTIVE STANDARD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


