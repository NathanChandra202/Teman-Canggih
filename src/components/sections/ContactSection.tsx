import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { MessageSquare, ArrowUpRight, Copy, Check, MapPin, Sparkles, Phone, ArrowUp } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#0F1115', '#4D81F4', '#FAF8F4'],
    });
    window.open(COMPANY_INFO.whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-carbon-950 text-ivory-100 border-t border-carbon-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Brand Callout */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-cobalt-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PARTNERSHIP & CONTACT</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Think Beyond. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory-100 to-cobalt-400">
              Build Better.
            </span>
          </h2>

          <p className="font-display font-medium text-lg sm:text-xl text-cobalt-300">
            "Let's Build Better Possibilities Together."
          </p>

          <p className="text-sm sm:text-base text-carbon-300 font-light leading-relaxed">
            Apakah Anda memiliki proyek digital baru, kebutuhan audit keamanan siber, revitalisasi identitas brand, efisiensi operasional pabrik, atau analisis strategi bisnis — kami siap membuka ruang diskusi awal.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* WhatsApp Direct Card */}
          <div className="p-6 rounded-2xl bg-carbon-900 border border-carbon-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-cobalt-400 uppercase tracking-wider block">
                WHATSAPP / TELEPON
              </span>
              <p className="font-display font-bold text-xl text-white">
                {COMPANY_INFO.phone}
              </p>
              <p className="text-xs text-carbon-400">
                Layanan pesan cepat untuk konsultasi awal & penjadwalan pitching.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-medium text-xs transition-all shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat WhatsApp</span>
              </button>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-lg border border-carbon-700 bg-carbon-850 hover:bg-carbon-800 text-carbon-300 text-xs transition-all"
                title="Salin Nomor"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Instagram */}
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-carbon-900 border border-carbon-800 space-y-4 flex flex-col justify-between group hover:border-carbon-700 transition-all"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-carbon-400 uppercase tracking-wider block">
                INSTAGRAM RESMI
              </span>
              <p className="font-display font-bold text-xl text-white group-hover:text-cobalt-400 transition-colors">
                {COMPANY_INFO.instagram}
              </p>
              <p className="text-xs text-carbon-400">
                Pembaruan wawasan teknologi, pemikiran desain, dan aktivitas tim.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-carbon-400 pt-2 border-t border-carbon-800">
              <span className="flex items-center gap-1.5">
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Follow kami</span>
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Base Locations & Inquiry */}
          <div className="p-6 rounded-2xl bg-carbon-900 border border-carbon-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-carbon-400 uppercase tracking-wider block">
                LOKASI & DOMISILI
              </span>
              <p className="font-display font-bold text-xl text-white">
                {COMPANY_INFO.address}
              </p>
              <p className="text-xs text-carbon-400">
                Melayani klien di seluruh Indonesia secara hybrid & on-site.
              </p>
            </div>

            <button
              onClick={onOpenContactModal}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-carbon-700 bg-carbon-850 hover:bg-carbon-800 text-carbon-200 text-xs font-mono font-medium transition-all"
            >
              <span>Formulir Kerja Sama Interaktif</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cobalt-400" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Legal & Return to Top */}
        <div className="pt-8 border-t border-carbon-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-carbon-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-semibold text-carbon-400">© 2026 TEMAN CANGGIH</span>
            <span className="hidden sm:inline">•</span>
            <span>Technology & Business Solutions Firm</span>
            <span className="hidden sm:inline">•</span>
            <span>{COMPANY_INFO.documentVersion}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-carbon-400 hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-cobalt-400" />
          </button>
        </div>

        <p className="text-[11px] font-mono text-carbon-600 text-center italic">
          *Informasi profil perusahaan ini diperbarui secara berkala seiring perkembangan struktur organisasi, status legal, kapabilitas layanan, dan portofolio tim.
        </p>
      </div>
    </footer>
  );
};


