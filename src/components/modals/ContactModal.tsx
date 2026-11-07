import React, { useState } from 'react';
import { COMPANY_INFO, CAPABILITIES } from '../../data/companyData';
import { 
  X, 
  MessageSquare, 
  Phone, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'general',
}) => {
  const [selectedService, setSelectedService] = useState<string>(defaultService);
  const [copied, setCopied] = useState<boolean>(false);
  const [clientType, setClientType] = useState<string>('Komersial / UMKM');

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    sound.playClick();
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppMessage = () => {
    let serviceName = 'Solusi Komprehensif / Multi-Bidang';
    const found = CAPABILITIES.find(c => c.id === selectedService);
    if (found) serviceName = found.title;

    const text = `Halo Tim Teman Canggih,\n\nSaya tertarik untuk berdiskusi mengenai kerja sama solusi teknologi dan bisnis untuk bidang *${serviceName}* (Kategori: ${clientType}).\n\nBisa jadwalkan sesi diskusi / pitching awal?\n\nTerima kasih.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppClick = () => {
    sound.playClick();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#022438', '#2563EB', '#2563EB', '#FAF8F5'],
    });

    const url = `https://wa.me/6289508437967?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-tcDeep/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white border border-tcDeep/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-tcDeep/10 flex items-center justify-between bg-sandCanvas">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-tcDeep text-tcCyan flex items-center justify-center font-display font-black text-xs shadow-xs">
              TC
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-tcDeep tracking-tight flex items-center gap-1.5">
                <span>Start Direct Consultation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tcCyan" />
              </h3>
              <p className="text-[11px] font-mono text-tcDeep/60 font-medium">
                PITCHING & B2B INQUIRY // TEMAN CANGGIH
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-lg border border-tcDeep/15 bg-white text-tcDeep hover:bg-tcDeep hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 bg-white max-h-[75vh] overflow-y-auto">
          {/* Mission Box */}
          <div className="p-4 rounded-xl bg-tcDeep text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tcCyan/10 rounded-bl-full pointer-events-none" />
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-tcCyan block mb-1">
              {COMPANY_INFO.tagline}
            </span>
            <p className="text-xs text-white/80 font-sans leading-relaxed">
              "We think beyond limitations. We build for better possibilities." Pilih ruang lingkup kebutuhan bisnis Anda untuk terhubung langsung dengan para pimpinan Teman Canggih.
            </p>
          </div>

          {/* Service Selector */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-tcDeep/70 mb-2.5">
              1. Pilih Bidang Kebutuhan Utama:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  sound.playBlip(560);
                  setSelectedService('general');
                }}
                className={`p-3 rounded-xl border text-left text-xs font-sans font-bold transition-all ${
                  selectedService === 'general'
                    ? 'border-tcDeep bg-tcDeep text-white shadow-sm'
                    : 'border-tcDeep/15 bg-sandCanvas/50 text-tcDeep hover:border-tcDeep/40 hover:bg-white'
                }`}
              >
                Solusi Multi-Bidang / End-to-End
              </button>
              {CAPABILITIES.map((cap) => (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => {
                    sound.playBlip(600);
                    setSelectedService(cap.id);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-sans font-bold transition-all ${
                    selectedService === cap.id
                      ? 'border-tcDeep bg-tcDeep text-white shadow-sm'
                      : 'border-tcDeep/15 bg-sandCanvas/50 text-tcDeep hover:border-tcDeep/40 hover:bg-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono block ${selectedService === cap.id ? 'text-tcCyan' : 'text-tcDeep/50'}`}>
                    [{cap.number}]
                  </span>
                  {cap.title}
                </button>
              ))}
            </div>
          </div>

          {/* Client Type Selector */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-tcDeep/70 mb-2.5">
              2. Sektor / Kategori Organisasi:
            </label>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {[
                { id: 'sme', label: 'Komersial / UMKM' },
                { id: 'corp', label: 'Korporasi & Enterprise' },
                { id: 'factory', label: 'Pabrik & Manufaktur' },
                { id: 'edu', label: 'Sekolah & Institusi' },
                { id: 'tech', label: 'Startup & Digital' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    sound.playBlip(650);
                    setClientType(item.label);
                  }}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-medium transition-all ${
                    clientType === item.label
                      ? 'bg-tcCyan text-tcDeep border-tcAmber font-bold shadow-xs'
                      : 'bg-sandCanvas border-tcDeep/15 text-tcDeep/80 hover:border-tcDeep/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-tcDeep/10 space-y-3">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-tcDeep hover:bg-tcCobalt text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
            >
              <MessageSquare className="w-4 h-4 text-tcCyan" />
              <span>Buka Diskusi WhatsApp ({COMPANY_INFO.phone})</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Quick Contacts */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="flex items-center justify-between p-3 rounded-lg border border-tcDeep/15 bg-sandCanvas hover:bg-white text-tcDeep transition-colors"
                title="Copy Hotline Phone Number"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-tcDeep/60" />
                  <span className="font-bold text-[11px]">{COMPANY_INFO.phone}</span>
                </div>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-tcDeep/40" />}
              </button>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-lg border border-tcDeep/15 bg-sandCanvas hover:bg-white text-tcDeep transition-colors"
                title="Open Official Instagram"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-3.5 h-3.5 text-tcDeep/60" />
                  <span className="font-bold text-[11px]">{COMPANY_INFO.instagram}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-tcDeep/40" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-tcDeep/10 bg-sandCanvas flex items-center justify-between text-[11px] font-mono text-tcDeep/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kerahasiaan NDA & Data Dijamin</span>
          </div>
          <span className="font-bold text-tcDeep">Respon Cepat: 2–4 Jam</span>
        </div>
      </div>
    </div>
  );
};



