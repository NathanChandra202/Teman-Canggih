import React, { useState } from 'react';
import { COLLABORATION_MODELS, CAPABILITIES } from '../../data/companyData';
import { 
  Briefcase, 
  Search, 
  Repeat, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Sparkles,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface TCCollaborationProps {
  onOpenContact: () => void;
}

export const TCCollaboration: React.FC<TCCollaborationProps> = ({ onOpenContact }) => {
  const [selectedModelId, setSelectedModelId] = useState(COLLABORATION_MODELS[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(CAPABILITIES[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeModel = COLLABORATION_MODELS.find(m => m.id === selectedModelId) || COLLABORATION_MODELS[0];
  const activeService = CAPABILITIES.find(s => s.id === selectedServiceId) || CAPABILITIES[0];

  const FAQS = [
    {
      q: 'Apakah Teman Canggih bersedia menandatangani Non-Disclosure Agreement (NDA)?',
      a: 'Ya, mutlak. Kami menghormati kerahasiaan kekayaan intelektual, data bisnis, dan strategi operasional setiap mitra. NDA standar kami sediakan atau dapat menggunakan format resmi dari institusi Anda sebelum sesi discovery teknis dimulai.'
    },
    {
      q: 'Bagaimana kepemilikan kode sumber (source code) dan hak cipta desain?',
      a: '100% hak kepemilikan penuh atas kode sumber, repositori, master file desain, dokumentasi arsitektur, dan konfigurasi server menjadi milik klien seutuhnya setelah serah terima tuntas, tanpa dependensi vendor tersembunyi.'
    },
    {
      q: 'Berapa lama estimasi pengerjaan dari discovery hingga sprint delivery pertama?',
      a: 'Proses discovery dan konfirmasi arsitektur membutuhkan 5â€“10 hari kerja. Selanjutnya, tim memulai siklus pengembangan dengan sprint review dan demo produk setiap 2 minggu secara transparan bersama Nathan Chandra (COO & PM).'
    },
    {
      q: 'Apakah Teman Canggih bisa menangani proyek multi-bidang terintegrasi?',
      a: 'Tentu. Keunggulan kompetitif Teman Canggih adalah integrasi 5 disiplin dalam satu atap: pengembangan sistem digital, perkuatan brand korporat, audit cyber intelligence, efisiensi pabrik, dan analisis kelayakan bisnis dapat dieksekusi secara sinergis.'
    }
  ];

  const getModelIcon = (index: number) => {
    switch (index) {
      case 0: return <Briefcase className="w-5 h-5 text-tcCyan" />;
      case 1: return <Search className="w-5 h-5 text-tcCyan" />;
      case 2: return <Repeat className="w-5 h-5 text-tcCyan" />;
      default: return <Briefcase className="w-5 h-5 text-tcCyan" />;
    }
  };

  const toggleFaq = (idx: number) => {
    sound.playBlip(550 + idx * 30);
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="collaboration" className="py-24 sm:py-32 bg-[#F8FAFC] text-tcDeep border-t border-tcDeep/10 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-tcDeep/15 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-tcDeep/60 bg-white px-2.5 py-1 rounded border border-tcDeep/10">
                08 / 08
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-tcDeep/60">
                [ ENGAGEMENT & COLLABORATION ]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-tcDeep">
              Collaboration Frameworks<span className="text-tcCyan">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-tcDeep/70 font-sans leading-relaxed">
            Transparent, structured, and agile collaboration structures tailored to your institutional growth pace and resource realities.
          </p>
        </div>

        {/* 3 Collaboration Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {COLLABORATION_MODELS.map((model, idx) => {
            const isSelected = model.id === selectedModelId;
            return (
              <div 
                key={model.id}
                onClick={() => {
                  sound.playBlip(540 + idx * 80);
                  setSelectedModelId(model.id);
                }}
                className={`bg-white border rounded-xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                  isSelected 
                    ? 'border-tcDeep ring-2 ring-tcDeep/20 shadow-xl -translate-y-1' 
                    : 'border-tcDeep/10 hover:border-tcDeep/40 hover:shadow-md'
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-3 right-6 bg-tcDeep text-tcCyan px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                    ACTIVE SELECTION
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-tcDeep/5 border border-tcDeep/10 flex items-center justify-center">
                      {getModelIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-bold text-tcDeep/40">
                      {model.code}
                    </span>
                  </div>

                  <span className="inline-block font-mono text-[10px] uppercase font-bold tracking-wider text-tcDeep bg-[#F8FAFC] px-2.5 py-1 rounded border border-tcDeep/10 mb-3">
                    {model.badge}
                  </span>

                  <h3 className="text-xl font-display font-bold text-tcDeep mb-3">
                    {model.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-tcDeep/75 leading-relaxed mb-6">
                    {model.summary}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-tcDeep/10">
                    <span className="font-mono text-[10px] uppercase font-bold text-tcDeep/50 tracking-wider block mb-2">
                      Key Structural Features:
                    </span>
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-tcDeep/80 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-tcDeep/10">
                  <span className="font-mono text-[10px] uppercase font-bold text-tcDeep/50 block mb-1">
                    Ideal Fit:
                  </span>
                  <p className="text-xs text-tcDeep/70 italic">
                    {model.recommendedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope Inquirer & Proposal Kickoff Matrix */}
        <div className="bg-tcDeep text-white rounded-2xl p-8 sm:p-12 border border-tcDeep relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-tcCyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-tcCyan bg-white/10 px-3 py-1 rounded inline-block mb-3">
                INSTITUTIONAL SCOPING CALCULATOR
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white">
                Configure Your Project Parameters<span className="text-tcCyan">.</span>
              </h3>
              <p className="text-sm text-white/70 max-w-xl mx-auto mt-2">
                Select your focus discipline and engagement model to review anticipated kickoff timeline and governance milestones.
              </p>
            </div>

            {/* Service discipline selector chips */}
            <div className="mb-8">
              <span className="block font-mono text-xs uppercase tracking-wider text-white/60 text-center mb-3">
                1. Select Target Practice Discipline:
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {CAPABILITIES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      sound.playBlip(700);
                      setSelectedServiceId(s.id);
                    }}
                    className={`px-4 py-2 rounded-lg font-mono text-xs transition-colors border ${
                      selectedServiceId === s.id
                        ? 'bg-tcCyan text-tcDeep font-bold border-tcCyan shadow-md'
                        : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Matrix Summary Card */}
            <div className="bg-white/5 border border-white/15 rounded-xl p-6 sm:p-8 backdrop-blur-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="flex items-center gap-2 text-tcCyan font-mono text-xs font-bold uppercase mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Discovery & Kickoff</span>
                  </div>
                  <div className="text-lg font-display font-bold text-white mb-1">
                    5 to 10 Working Days
                  </div>
                  <p className="text-xs text-white/60">
                    Comprehensive discovery workshop, initial scope confirmation, and repo/architecture provisioning.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-tcCyan font-mono text-xs font-bold uppercase mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Review Cadence</span>
                  </div>
                  <div className="text-lg font-display font-bold text-white mb-1">
                    Bi-Weekly Sprint Demos
                  </div>
                  <p className="text-xs text-white/60">
                    Transparent milestone reviews directly with Nathan Chandra (COO & PM) and technical lead.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-tcCyan font-mono text-xs font-bold uppercase mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Delivery Assurance</span>
                  </div>
                  <div className="text-lg font-display font-bold text-white mb-1">
                    Full Code & IP Transfer
                  </div>
                  <p className="text-xs text-white/60">
                    100% intellectual property ownership, complete documentation, and 30-day post-launch warranty.
                  </p>
                </div>
              </div>

              {/* Dynamic Summary Prompt */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-white/75">
                  Ready to scope <span className="text-tcCyan font-bold">[{activeService.title}]</span> under <span className="text-tcCyan font-bold">[{activeModel.name}]</span>?
                </div>
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-tcCyan hover:bg-white text-tcDeep font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Initiate Scoping Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-24 pt-16 border-t border-tcDeep/15 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-tcDeep/60 block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-tcDeep">
              Tanya Jawab Seputar Kolaborasi<span className="text-tcCyan">.</span>
            </h3>
            <p className="text-sm text-tcDeep/70 mt-2 max-w-lg mx-auto">
              Informasi esensial terkait tata kelola proyek, kerahasiaan NDA, hak cipta, dan mekanisme penyerahan hasil kerja.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-tcDeep/10 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-tcDeep/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-tcCyan bg-tcDeep px-2 py-0.5 rounded shrink-0">
                        Q0{idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-tcDeep">
                        {faq.q}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-tcDeep/50 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-tcDeep' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-tcDeep/80 font-sans leading-relaxed border-t border-tcDeep/5 animate-fadeIn">
                      <p className="pl-9 sm:pl-10">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs font-mono text-tcDeep/60">
            Ada pertanyaan spesifik yang belum terjawab?{' '}
            <button
              onClick={() => {
                sound.playClick();
                onOpenContact();
              }}
              className="text-tcElectric font-bold hover:underline"
            >
              Hubungi Tim Kami Langsung â†’
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};





