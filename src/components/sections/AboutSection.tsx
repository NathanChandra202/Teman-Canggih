import React from 'react';
import { Users2, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { COMPANY_INFO } from '../../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded bg-ink text-retro-amber font-mono font-black text-xs uppercase border border-ink shadow-retro-sm">
              TENTANG KAMI
            </span>
            <span className="font-mono text-xs font-bold text-ink-600">
              // WHO WE ARE
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            Ideas Are Everywhere. <br className="hidden sm:inline" />
            <span className="text-cobalt-500">Meaningful Solutions Make the Difference.</span>
          </h2>
        </div>

        {/* 2-Column Editorial Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-ink-800">
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-ink">
                Setiap bisnis, institusi, dan industri menghadapi tantangan yang membutuhkan lebih dari sekadar solusi standar.
              </p>

              <p className="text-base leading-relaxed font-normal">
                Di <strong className="text-ink font-black">Teman Canggih</strong>, kami meyakini bahwa progres nyata dimulai dari memahami akar masalah, mengeksplorasi ragam kemungkinan, dan membangun solusi dengan tujuan yang jelas.
              </p>

              <p className="text-base leading-relaxed font-normal">
                Kami adalah tim independen multidisiplin yang mempertemukan berbagai keahlian lintas sistem digital, pengembangan brand, keamanan siber, operasional industri, dan analisis strategi bisnis.
              </p>

              <p className="text-base leading-relaxed font-normal text-cobalt-600 font-bold">
                Melalui kolaborasi dan pengembangan berkelanjutan, kami bertekad menjadi mitra terpercaya yang mendampingi bisnis dan organisasi beradaptasi, berbenah, dan bertumbuh secara sehat.
              </p>
            </div>

            {/* Who We Are Box with Retro Brutalist styling */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-white shadow-retro space-y-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-black uppercase">
                  <Users2 className="w-4 h-4 text-cobalt-600" />
                  <span>Karakter & Identitas Tim</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-retro-amber font-mono font-black text-[10px] text-ink border border-ink">
                  7–10 ACTIVE TALENT
                </span>
              </div>

              <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight">
                Kolektif Multidisiplin Mandiri
              </h3>

              <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-normal">
                Kami percaya bahwa solusi yang efektif tidak lahir dari keahlian teknis semata, melainkan dari kombinasi pemahaman konteks, perencanaan arsitektur yang matang, eksekusi disiplin, dan evaluasi berkelanjutan.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg border border-ink bg-cream-100 shadow-retro-sm">
                  <span className="text-[10px] font-bold text-cobalt-600 block">01 / DISCOVERY</span>
                  <span className="font-black text-ink">Understanding</span>
                </div>
                <div className="p-2.5 rounded-lg border border-ink bg-cream-100 shadow-retro-sm">
                  <span className="text-[10px] font-bold text-cobalt-600 block">02 / BLUEPRINT</span>
                  <span className="font-black text-ink">Planning</span>
                </div>
                <div className="p-2.5 rounded-lg border border-ink bg-cream-100 shadow-retro-sm">
                  <span className="text-[10px] font-bold text-cobalt-600 block">03 / SPRINT</span>
                  <span className="font-black text-ink">Execution</span>
                </div>
                <div className="p-2.5 rounded-lg border border-ink bg-cream-100 shadow-retro-sm">
                  <span className="text-[10px] font-bold text-cobalt-600 block">04 / AUDIT</span>
                  <span className="font-black text-ink">Improvement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Placeholder & Key Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-2 border-ink rounded-2xl overflow-hidden shadow-retro">
              <ArchitecturalPlaceholder
                label="ARCHITECTURAL WORKSPACE // MULTIDISCIPLINARY DESIGN & SYSTEM LAB"
                category="ARCHITECTURAL STUDIO"
                aspectRatio="4/3"
                badge="PHASE 2 ASSET 01"
                showBlueprintGrid={true}
              />
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-4 rounded-xl border-2 border-ink bg-white shadow-retro-sm">
                <span className="text-2xl font-black text-ink block">5</span>
                <p className="font-bold text-ink mt-0.5">Bidang Layanan</p>
                <p className="text-[10px] text-ink-500">Saling terintegrasi</p>
              </div>

              <div className="p-4 rounded-xl border-2 border-ink bg-white shadow-retro-sm">
                <span className="text-2xl font-black text-cobalt-600 block">7–10</span>
                <p className="font-bold text-ink mt-0.5">Praktisi Aktif</p>
                <p className="text-[10px] text-ink-500">Talent pool spesialis</p>
              </div>

              <div className="p-4 rounded-xl border-2 border-ink bg-white shadow-retro-sm">
                <span className="text-2xl font-black text-ink block">B2B</span>
                <p className="font-bold text-ink mt-0.5">Fleksibel</p>
                <p className="text-[10px] text-ink-500">SME hingga Korporasi</p>
              </div>

              <div className="p-4 rounded-xl border-2 border-ink bg-white shadow-retro-sm">
                <span className="text-2xl font-black text-retro-green block">100%</span>
                <p className="font-bold text-ink mt-0.5">Independen</p>
                <p className="text-[10px] text-ink-500">Fokus pada hasil klien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

