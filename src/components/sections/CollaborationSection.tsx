import React from 'react';
import { COLLABORATION_MODELS } from '../../data/companyData';
import { Handshake, CheckCircle2, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { sound } from '../../utils/sound';
import { RetroScopeConfigurator } from '../retro/RetroScopeConfigurator';

interface CollaborationSectionProps {
  onOpenContact: () => void;
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="collaboration" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded bg-retro-amber font-mono font-black text-xs text-ink uppercase border-2 border-ink shadow-retro-sm">
              ENGAGEMENT FRAMEWORK
            </span>
            <span className="font-mono text-xs font-bold text-ink-600">
              // COLLABORATION
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            Collaboration Models
          </h2>
          <p className="mt-2 text-base text-ink-700 max-w-2xl font-normal leading-relaxed">
            Struktur kerja sama B2B yang fleksibel, transparan, dan terkalibrasi dengan tahapan pertumbuhan serta kapasitas sumber daya Anda.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLABORATION_MODELS.map((model) => (
            <div
              key={model.id}
              className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-white shadow-retro-lg flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                  <span className="font-mono text-xs font-black text-cobalt-600">
                    {model.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded border border-ink bg-retro-amber font-mono text-[10px] font-black text-ink">
                    {model.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl text-ink uppercase tracking-tight">
                    {model.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-700 mt-1 leading-relaxed font-normal">
                    {model.summary}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t-2 border-ink/10">
                  <span className="text-[10px] font-mono text-ink-500 uppercase tracking-wider font-bold block">
                    Karakteristik Engagement:
                  </span>
                  {model.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-cobalt-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Box */}
              <div className="mt-6 pt-4 border-t-2 border-ink bg-cream-100 p-4 rounded-xl border border-ink/30">
                <span className="text-[10px] font-mono font-black text-ink-600 uppercase tracking-wider block mb-0.5">
                  REKOMENDASI PENGGUNAAN:
                </span>
                <p className="text-xs text-ink font-bold leading-snug">
                  {model.recommendedFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive B2B Scope & Solution Configurator */}
        <RetroScopeConfigurator />

        {/* CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-ink text-cream-100 shadow-retro-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono text-retro-amber uppercase tracking-wider font-black">
              CUSTOM B2B ENGAGEMENT
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
              Membutuhkan format kerja sama khusus atau proposal terintegrasi?
            </h4>
            <p className="text-xs sm:text-sm text-cream-300 font-normal">
              Kami siap menggelar sesi presentasi / pitching komite langsung bersama para co-founder kami.
            </p>
          </div>

          <button
            onClick={() => {
              sound.click();
              onOpenContact();
            }}
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-white shadow-retro transition-all hover:-translate-y-0.5"
          >
            <Handshake className="w-4 h-4" />
            <span>Mulai Diskusi Kemitraan</span>
          </button>
        </div>
      </div>
    </section>
  );
};

