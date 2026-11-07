import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { MessageSquare, ArrowUpRight, Copy, Check, MapPin, Sparkles, ArrowUp, Phone } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

interface RetroContactFooterProps {
  onOpenContactModal: () => void;
}

export const RetroContactFooter: React.FC<RetroContactFooterProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    sound.click();
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    sound.success();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#FF5500', '#FFB800', '#121314'],
    });
    window.open(COMPANY_INFO.whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    sound.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 bg-ink text-cream-100 border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Huge Statement */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-retro-amber font-mono font-black text-xs text-ink uppercase border border-cream-100 shadow-retro-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PARTNERSHIP & B2B INQUIRY</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95]">
            Think Beyond. <br />
            <span className="text-retro-amber underline decoration-cobalt-500 underline-offset-8">
              Build Better.
            </span>
          </h2>

          <p className="font-display font-bold text-xl sm:text-2xl text-cream-200">
            "Let's Build Better Possibilities Together."
          </p>

          <p className="text-sm sm:text-base text-cream-300 font-normal leading-relaxed max-w-2xl">
            Mari diskusikan tantangan sistem, pengembangan brand, audit keamanan siber, efisiensi pabrik, atau pemodelan strategi bisnis Anda bersama mitra kami.
          </p>
        </div>

        {/* 3 Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl border-2 border-cream-300/40 bg-[#1a1c1f] space-y-4 flex flex-col justify-between shadow-retro-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-retro-amber font-black uppercase tracking-wider block">
                DIRECT WHATSAPP DESK
              </span>
              <p className="font-display font-black text-2xl text-white">
                {COMPANY_INFO.phone}
              </p>
              <p className="text-xs text-cream-300">
                Pintu masuk diskusi tercepat untuk pitching & estimasi kebutuhan.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white shadow-retro-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </button>

              <button
                onClick={handleCopyPhone}
                className="p-3 rounded-lg border border-cream-300/40 bg-ink hover:bg-ink-700 text-cream-200 text-xs transition-all"
                title="Salin Nomor"
              >
                {copied ? <Check className="w-4 h-4 text-retro-green" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Instagram */}
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.click()}
            className="p-6 rounded-2xl border-2 border-cream-300/40 bg-[#1a1c1f] space-y-4 flex flex-col justify-between group hover:border-retro-amber transition-all shadow-retro-sm"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cream-400 font-black uppercase tracking-wider block">
                INSTAGRAM RESMI
              </span>
              <p className="font-display font-black text-2xl text-white group-hover:text-retro-amber transition-colors">
                {COMPANY_INFO.instagram}
              </p>
              <p className="text-xs text-cream-300">
                Dokumentasi proyek, wawasan teknologi, dan studi kasus berkala.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-cream-300 pt-3 border-t border-cream-300/20">
              <span className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Follow @temancanggih_id</span>
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* Form Modal & Locations */}
          <div className="p-6 rounded-2xl border-2 border-cream-300/40 bg-[#1a1c1f] space-y-4 flex flex-col justify-between shadow-retro-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cream-400 font-black uppercase tracking-wider block">
                HEADQUARTERS & JANGKAUAN
              </span>
              <p className="font-display font-black text-2xl text-white">
                {COMPANY_INFO.address}
              </p>
              <p className="text-xs text-cream-300">
                Melayani mitra di seluruh Indonesia (On-Site & Remote Hybrid).
              </p>
            </div>

            <button
              onClick={() => {
                sound.click();
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-cream-300/40 bg-ink hover:bg-ink-700 text-cream-100 font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Formulir Diskusi Proyek</span>
              <ArrowUpRight className="w-4 h-4 text-retro-amber" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Return to Top */}
        <div className="pt-8 border-t border-cream-300/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cream-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-black text-white">© 2026 TEMAN CANGGIH</span>
            <span className="hidden sm:inline">•</span>
            <span>Technology & Business Solutions Firm</span>
            <span className="hidden sm:inline">•</span>
            <span>{COMPANY_INFO.documentVersion}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cream-300 hover:text-retro-amber font-bold transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-4 h-4 text-retro-amber" />
          </button>
        </div>

        <p className="text-[11px] font-mono text-cream-500 text-center italic">
          *Informasi profil korporat ini diperbarui secara berkala seiring perkembangan struktur organisasi, status legal, kapabilitas layanan, dan portofolio tim.
        </p>
      </div>
    </footer>
  );
};


