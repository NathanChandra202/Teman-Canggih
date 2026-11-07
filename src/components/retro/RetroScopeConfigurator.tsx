import React, { useState } from 'react';
import { Sliders, CheckCircle2, ArrowRight, MessageSquare, Zap, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { sound } from '../../utils/sound';
import confetti from 'canvas-confetti';

export const RetroScopeConfigurator: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('system');
  const [selectedScale, setSelectedScale] = useState<string>('sme');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');

  const disciplines = [
    { id: 'system', name: 'Digital Systems / Web & Apps', code: 'DISC-01' },
    { id: 'branding', name: 'Brand Identity & Pitch Architecture', code: 'DISC-02' },
    { id: 'cyber', name: 'Cyber Analysis & Security Hardening', code: 'DISC-03' },
    { id: 'factory', name: 'Factory Lean 5S & Industrial IoT', code: 'DISC-04' },
    { id: 'business', name: 'Business Feasibility & Financial Model', code: 'DISC-05' },
    { id: 'hybrid', name: 'Multi-Disciplinary / Comprehensive Squad', code: 'DISC-ALL' },
  ];

  const scales = [
    { id: 'startup', name: 'Digital Startup / Early Stage', squad: '2–3 Spesialis' },
    { id: 'sme', name: 'Growing Commercial SME', squad: '3–4 Spesialis' },
    { id: 'corporate', name: 'Corporate & Established Enterprise', squad: '4–6 Spesialis' },
    { id: 'industrial', name: 'Industrial Plant / Factory Facility', squad: '3–5 Spesialis' },
  ];

  const timelines = [
    { id: 'sprint', name: 'Rapid Sprint (3–4 Minggu)', cadence: 'High-Velocity Sprint' },
    { id: 'standard', name: 'Standard Phase (6–8 Minggu)', cadence: 'Bi-Weekly Milestones' },
    { id: 'retainer', name: 'Strategic Retainer (3+ Bulan)', cadence: 'Dedicated Ongoing Squad' },
  ];

  // Derived recommendation
  const getRecommendation = () => {
    let modelName = 'Project-Based Engagement (Model 01)';
    let deliverables = 'Production Assets, Source Code & Technical Documentation Handover';

    if (selectedTimeline === 'retainer') {
      modelName = 'Strategic Retainer / Tech Partner (Model 03)';
      deliverables = 'Dedicated Sprint Queue, Continuous Feature Releases & SLA Support';
    } else if (selectedDiscipline === 'cyber' || selectedDiscipline === 'business') {
      modelName = 'Consultation & Diagnostic Audit (Model 02)';
      deliverables = 'Comprehensive Risk Register, Gap Analysis & Strategic Playbook';
    }

    const currentScaleObj = scales.find(s => s.id === selectedScale) || scales[1];
    const currentTimelineObj = timelines.find(t => t.id === selectedTimeline) || timelines[1];
    const currentDisciplineObj = disciplines.find(d => d.id === selectedDiscipline) || disciplines[0];

    return {
      modelName,
      squadSize: currentScaleObj.squad,
      cadence: currentTimelineObj.cadence,
      deliverables,
      disciplineName: currentDisciplineObj.name,
      scaleName: currentScaleObj.name,
      timelineName: currentTimelineObj.name,
    };
  };

  const rec = getRecommendation();

  const handleSendToWhatsApp = () => {
    sound.success();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#2563EB', '#FF5500', '#FFB800', '#121314'],
    });

    const text = `Halo Tim Teman Canggih,\n\nSaya telah mencoba simulasi estimasi proyek di website Teman Canggih:\n• Bidang: *${rec.disciplineName}*\n• Skala Organisasi: *${rec.scaleName}*\n• Target Timeline: *${rec.timelineName}*\n• Rekomendasi Format: *${rec.modelName}* (${rec.squadSize})\n\nBisa jadwalkan sesi pitching / diskusi detail mengenai kebutuhan ini?\n\nTerima kasih.`;
    const url = `https://wa.me/6289508437967?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="p-6 sm:p-10 rounded-2xl border-2 border-ink bg-white shadow-retro-lg space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-ink pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-ink text-retro-amber border-2 border-ink shadow-retro-sm">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-ink uppercase tracking-tight">
              Interactive B2B Scope Configurator
            </h3>
            <p className="text-xs font-mono text-ink-600 font-bold">
              SIMULASI KEBUTUHAN PROYEK // v1.2
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded bg-retro-amber border-2 border-ink font-mono font-black text-xs text-ink shadow-retro-sm self-start sm:self-auto">
          INTERACTIVE SIMULATOR
        </span>
      </div>

      {/* 3 Step Interactive Chooser */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1: Discipline */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-black text-ink uppercase">
            <span className="w-5 h-5 rounded-full bg-ink text-cream-100 flex items-center justify-center text-[10px]">1</span>
            <span>Bidang Kebutuhan:</span>
          </div>
          <div className="space-y-2">
            {disciplines.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  sound.click();
                  setSelectedDiscipline(d.id);
                }}
                className={`w-full text-left p-2.5 rounded-lg border-2 text-xs font-mono transition-all ${
                  selectedDiscipline === d.id
                    ? 'border-ink bg-cobalt-500 text-white font-black shadow-retro-sm'
                    : 'border-ink/30 bg-cream-50 text-ink hover:border-ink font-bold'
                }`}
              >
                <span className="text-[10px] opacity-75 block">[{d.code}]</span>
                <span className="line-clamp-1">{d.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Organization Scale */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-black text-ink uppercase">
            <span className="w-5 h-5 rounded-full bg-ink text-cream-100 flex items-center justify-center text-[10px]">2</span>
            <span>Skala Organisasi:</span>
          </div>
          <div className="space-y-2">
            {scales.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  sound.click();
                  setSelectedScale(s.id);
                }}
                className={`w-full text-left p-3 rounded-lg border-2 text-xs font-mono transition-all ${
                  selectedScale === s.id
                    ? 'border-ink bg-retro-amber text-ink font-black shadow-retro-sm'
                    : 'border-ink/30 bg-cream-50 text-ink hover:border-ink font-bold'
                }`}
              >
                <span className="block font-black">{s.name}</span>
                <span className="text-[10px] text-ink-600 block mt-0.5">Alokasi: {s.squad}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Timeline Target */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-black text-ink uppercase">
            <span className="w-5 h-5 rounded-full bg-ink text-cream-100 flex items-center justify-center text-[10px]">3</span>
            <span>Target Timeline:</span>
          </div>
          <div className="space-y-2">
            {timelines.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  sound.click();
                  setSelectedTimeline(t.id);
                }}
                className={`w-full text-left p-3 rounded-lg border-2 text-xs font-mono transition-all ${
                  selectedTimeline === t.id
                    ? 'border-ink bg-ink text-cream-100 font-black shadow-retro-sm'
                    : 'border-ink/30 bg-cream-50 text-ink hover:border-ink font-bold'
                }`}
              >
                <span className="block font-black">{t.name}</span>
                <span className="text-[10px] opacity-75 block mt-0.5">{t.cadence}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calculated Blueprint Box */}
      <div className="p-6 rounded-2xl border-2 border-ink bg-cream-50 shadow-retro space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-ink pb-3 font-mono">
          <div className="flex items-center gap-2 text-xs font-black text-ink uppercase">
            <Zap className="w-4 h-4 text-retro-orange" />
            <span>HASIL REKOMENDASI TATA KELOLA ENGAGEMENT:</span>
          </div>
          <span className="text-[11px] font-bold text-cobalt-600">TC ESTIMATION ENGINE v1.2</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 rounded-xl border border-ink/40 bg-white">
            <span className="text-[10px] text-ink-500 font-bold block uppercase">MODEL ENGAGEMENT:</span>
            <span className="font-black text-ink text-sm block mt-0.5">{rec.modelName}</span>
          </div>

          <div className="p-3 rounded-xl border border-ink/40 bg-white">
            <span className="text-[10px] text-ink-500 font-bold block uppercase">ESTIMASI ALOKASI SQUAD:</span>
            <span className="font-black text-cobalt-600 text-sm block mt-0.5">{rec.squadSize}</span>
          </div>

          <div className="p-3 rounded-xl border border-ink/40 bg-white">
            <span className="text-[10px] text-ink-500 font-bold block uppercase">CADENCE EVALUASI:</span>
            <span className="font-black text-retro-orange text-sm block mt-0.5">{rec.cadence}</span>
          </div>
        </div>

        {/* Deliverables summary */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-ink font-mono">
            <span className="font-bold text-ink-500 uppercase">STANDAR OUTPUT: </span>
            <span className="font-bold text-ink">{rec.deliverables}</span>
          </div>

          <button
            onClick={handleSendToWhatsApp}
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-cobalt-500 hover:bg-cobalt-600 text-white font-mono font-black text-xs uppercase tracking-wider border-2 border-ink shadow-retro transition-all hover:-translate-y-0.5 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-retro-amber" />
            <span>Kirim Simulasi Ini ke WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};


