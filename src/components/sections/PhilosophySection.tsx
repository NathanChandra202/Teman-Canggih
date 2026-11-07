import React, { useState } from 'react';
import { Eye, Hammer, Sparkles, Target, CheckCircle2, Shield, HeartHandshake, Zap } from 'lucide-react';
import { CORE_VALUES } from '../../data/companyData';
import { sound } from '../../utils/sound';

export const PhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'values'>('mission');

  const MISSIONS = [
    'Mengembangkan solusi teknologi yang relevan dan efektif berbasis kebutuhan nyata.',
    'Membantu bisnis membangun identitas brand yang kuat dan posisi strategis di pasar.',
    'Mendukung organisasi dalam memahami dan meningkatkan postur keamanan siber.',
    'Mendorong efisiensi operasional melalui analisis mendalam dan digitalisasi industri.',
    'Memberikan wawasan analitis dan rekomendasi strategis bagi pengembangan bisnis.',
    'Membangun hubungan kolaboratif yang menumbuhkan pembelajaran dan perbaikan berkelanjutan.',
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded bg-retro-amber font-mono font-black text-xs text-ink uppercase border-2 border-ink shadow-retro-sm">
              FOUNDATIONAL CORE
            </span>
            <span className="font-mono text-xs font-bold text-ink-600">
              // OUR PHILOSOPHY
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            Think Beyond. Build Better.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-700 max-w-2xl font-normal leading-relaxed">
            Dua pilar pemikiran yang menyatukan eksplorasi kemungkinan strategis dengan disiplin rekayasa teknis tingkat tinggi.
          </p>
        </div>

        {/* 2 Philosophy Halves Cards with Retro Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Think Beyond */}
          <div className="p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-5 flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-4">
                <div className="p-3 rounded-lg bg-ink text-retro-amber border-2 border-ink shadow-retro-sm">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-black text-ink uppercase px-2 py-0.5 rounded bg-retro-amber border border-ink">
                  PILLAR 01
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                Think Beyond.
              </h3>
              <p className="text-base text-ink-700 leading-relaxed font-normal">
                Komitmen kami untuk melihat melampaui gejala masalah permukaan, mengeksplorasi perspektif yang lebih luas, dan mengidentifikasi peluang tersembunyi yang sering terabaikan oleh kompetitor.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-ink font-mono text-xs text-ink-500 font-bold">
              // Root cause analysis • Pemikiran holistik • Wawasan masa depan
            </div>
          </div>

          {/* Build Better */}
          <div className="p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-5 flex flex-col justify-between group hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-4">
                <div className="p-3 rounded-lg bg-cobalt-500 text-white border-2 border-ink shadow-retro-sm">
                  <Hammer className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-black text-white uppercase px-2 py-0.5 rounded bg-cobalt-600 border border-ink">
                  PILLAR 02
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                Build Better.
              </h3>
              <p className="text-base text-ink-700 leading-relaxed font-normal">
                Dedikasi kami untuk menerjemahkan gagasan dan strategi ke dalam solusi nyata yang praktis, teruji, berdaya tahan tinggi, dan memberikan dampak komersial positif yang berkelanjutan.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-ink font-mono text-xs text-cobalt-600 font-bold">
              // Craftsmanship • Arsitektur skalabel • Nol kompromi kualitas
            </div>
          </div>
        </div>

        {/* Core Conviction Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-ink text-cream-100 shadow-retro-lg">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-retro-amber text-ink shrink-0 border border-ink">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-retro-amber font-black">
                CORE MANTRA
              </span>
              <p className="font-display font-black text-xl sm:text-2xl text-white leading-snug">
                "Kami meyakini bahwa teknologi bukanlah tujuan akhir. Teknologi adalah sarana untuk menciptakan kemajuan nyata."
              </p>
              <p className="text-sm text-cream-300 font-normal leading-relaxed">
                Teknologi yang dibangun tanpa memahami tujuan bisnis atau kapasitas tim pengguna hanya akan menambah kompleksitas. Kecanggihan sejati adalah menyederhanakan masalah menjadi solusi yang efektif digunakan.
              </p>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Values Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-ink pb-4">
            <div>
              <span className="text-xs font-mono font-black text-cobalt-600 uppercase tracking-wider block">
                PONDASI STRATEGIS
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                Visi, Misi & Core Values
              </h3>
            </div>

            {/* Tab switch */}
            <div className="flex items-center p-1 rounded-lg border-2 border-ink bg-white font-mono text-xs font-bold shadow-retro-sm">
              <button
                onClick={() => {
                  sound.click();
                  setActiveTab('mission');
                }}
                className={`px-4 py-1.5 rounded transition-all ${
                  activeTab === 'mission'
                    ? 'bg-ink text-retro-amber font-black shadow-xs'
                    : 'text-ink-600 hover:text-ink'
                }`}
              >
                6 MISI KAMI
              </button>
              <button
                onClick={() => {
                  sound.click();
                  setActiveTab('values');
                }}
                className={`px-4 py-1.5 rounded transition-all ${
                  activeTab === 'values'
                    ? 'bg-ink text-retro-amber font-black shadow-xs'
                    : 'text-ink-600 hover:text-ink'
                }`}
              >
                6 CORE VALUES
              </button>
            </div>
          </div>

          {/* Visi Callout */}
          <div className="p-6 rounded-2xl border-2 border-ink bg-cream-50 shadow-retro-sm">
            <span className="text-[10px] font-mono font-black uppercase tracking-wider text-cobalt-600 block mb-1">
              VISI UTAMA TEMAN CANGGIH:
            </span>
            <p className="font-display font-bold text-lg sm:text-xl text-ink leading-relaxed">
              "Menjadi tim multidisiplin terpercaya dalam solusi teknologi dan bisnis, yang berkontribusi pada inovasi bermakna, pengembangan organisasi, dan kemajuan yang berkelanjutan."
            </p>
          </div>

          {/* Missions View */}
          {activeTab === 'mission' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MISSIONS.map((mission, idx) => (
                <div key={idx} className="p-5 rounded-xl border-2 border-ink bg-white shadow-retro-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-black text-cobalt-600">
                        MISI 0{idx + 1} //
                      </span>
                      <Zap className="w-4 h-4 text-retro-amber" />
                    </div>
                    <p className="text-xs sm:text-sm text-ink font-bold leading-relaxed">
                      {mission}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-ink/10 text-[10px] font-mono text-ink-500">
                    TC // ACTION DIRECTIVE
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="p-5 rounded-xl border-2 border-ink bg-white shadow-retro-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-black text-ink-400">
                        VALUE 0{idx + 1} //
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-retro-amber/30 border border-ink font-mono text-[9px] font-black text-ink">
                        {val.metric}
                      </span>
                    </div>
                    <h4 className="font-display font-black text-base text-ink uppercase mb-1">
                      {val.name}
                    </h4>
                    <p className="text-xs text-ink-700 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-ink/10 text-[10px] font-mono font-black text-cobalt-600">
                    STANDAR: BEBAS KOMPROMI
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

