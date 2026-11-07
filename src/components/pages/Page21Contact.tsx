import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  MessageSquare, 
  MapPin, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Calendar,
} from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import confetti from 'canvas-confetti';

interface Page21Props {
  onOpenContactModal?: () => void;
}

export const Page21Contact: React.FC<Page21Props> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppClick = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#0F1115', '#4D81F4', '#FAF8F4'],
    });

    window.open(COMPANY_INFO.whatsappUrl, '_blank');
  };

  return (
    <PageContainer pageNumber={21}>
      <SectionHeader
        pageNumber={21}
        category="PARTNERSHIP & CONTACT"
        title="Initiate a Conversation"
        subtitle="Schedule a Discovery Session or Technical Pitch Meeting"
        description="Whether you have an immediate technical challenge or are evaluating strategic partners for an upcoming fiscal quarter, our partners are ready to connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Interactive Channels */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-carbon-900/15 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cobalt-600">
                DIRECT COMMUNICATION CHANNELS
              </span>
              <h3 className="font-display font-bold text-2xl text-carbon-900">
                Let's Build Better Possibilities Together.
              </h3>
              <p className="text-xs sm:text-sm text-carbon-600 leading-relaxed">
                Reach out directly to schedule an introductory discovery conversation or receive a tailored capability deck for your committee.
              </p>
            </div>

            {/* Main Primary WhatsApp Action */}
            <div className="p-5 rounded-xl bg-carbon-900 text-ivory-50 border border-carbon-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs">
                  <MessageSquare className="w-4 h-4" />
                  <span>PRIMARY CLIENT DESK</span>
                </div>
                <span className="text-[10px] font-mono text-carbon-400">RAPID RESPONSE</span>
              </div>

              <div>
                <p className="font-display font-bold text-xl sm:text-2xl text-white">
                  {COMPANY_INFO.phone}
                </p>
                <p className="text-xs text-carbon-400 mt-0.5">
                  Direct WhatsApp Business Line — Muhammad Syafiq & Nathan Chandra
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-medium text-xs transition-all shadow hover:shadow-cobalt-500/25"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-carbon-700 bg-carbon-800 hover:bg-carbon-750 text-carbon-200 text-xs font-mono transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied Number</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instagram & Social Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-carbon-900/10 bg-ivory-100/70 hover:bg-white hover:border-carbon-900/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-50 text-pink-600 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-carbon-400 block">INSTAGRAM</span>
                    <p className="font-display font-bold text-sm text-carbon-900">
                      {COMPANY_INFO.instagram}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-carbon-400 group-hover:text-carbon-900" />
              </a>

              <div className="p-4 rounded-xl border border-carbon-900/10 bg-ivory-100/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cobalt-50 text-cobalt-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-carbon-400 block">BASE LOCATIONS</span>
                    <p className="font-display font-bold text-sm text-carbon-900">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Swiss Editorial Coordinates & Presentation Inquiry */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-carbon-900/15 shadow-sm space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-carbon-500 block">
              Engagement Preparation:
            </span>

            <div className="space-y-3 text-xs text-carbon-700">
              <p>
                To help us prepare meaningful perspectives for your initial call, please feel free to share:
              </p>

              <div className="space-y-2 font-mono text-[11px] text-carbon-800">
                <div className="p-2.5 rounded bg-ivory-100 border border-carbon-900/5">
                  1. Current core operational bottleneck or project goal
                </div>
                <div className="p-2.5 rounded bg-ivory-100 border border-carbon-900/5">
                  2. Desired timeline and target milestones
                </div>
                <div className="p-2.5 rounded bg-ivory-100 border border-carbon-900/5">
                  3. Key internal stakeholders involved in review
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-carbon-900/10">
              <button
                onClick={onOpenContactModal}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-cobalt-500 bg-cobalt-50/50 hover:bg-cobalt-50 text-cobalt-700 font-mono text-xs font-bold transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Open Interactive Inquiry Form</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-ivory-200/60 border border-carbon-900/10 text-[11px] font-mono text-carbon-500 flex items-center justify-between">
            <span>OFFICIAL PROFILE // DOC REV 2.4</span>
            <span className="text-cobalt-600 font-bold">PAGE 21 / 22</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

