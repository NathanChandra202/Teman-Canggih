import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { COMPANY_INFO } from '../../data/companyData';
import { Sparkles, MessageSquare, ArrowUp, Printer, CheckCircle } from 'lucide-react';

interface Page22Props {
  onScrollToTop: () => void;
  onOpenContact: () => void;
}

export const Page22Closing: React.FC<Page22Props> = ({
  onScrollToTop,
  onOpenContact,
}) => {
  return (
    <PageContainer pageNumber={22} dark className="bg-carbon-950 text-ivory-100 min-h-screen">
      <div className="py-8 max-w-4xl mx-auto flex flex-col justify-between items-center text-center space-y-10">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/30 text-cobalt-400 font-mono text-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CLOSING STATEMENT // OFFICIAL EPILOGUE</span>
        </div>

        {/* Brand Lockup & Huge Statement */}
        <div className="space-y-6">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Think Beyond. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory-100 to-cobalt-400">
              Build Better.
            </span>
          </h2>

          <p className="font-display font-medium text-lg sm:text-2xl text-cobalt-300 tracking-tight max-w-2xl mx-auto">
            "Let's Build Better Possibilities Together."
          </p>

          <p className="text-sm sm:text-base text-carbon-300 max-w-xl mx-auto leading-relaxed font-light">
            Meaningful transformation begins with a shared commitment to understand first and build with rigor. We look forward to partnering with your leadership team.
          </p>
        </div>

        {/* Contact Strip */}
        <div className="w-full p-6 sm:p-8 rounded-2xl bg-carbon-900 border border-carbon-800 space-y-4">
          <div className="flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-carbon-300">
            <div>
              <span className="text-carbon-500 block">FIRM</span>
              <span className="text-white font-bold">{COMPANY_INFO.name}</span>
            </div>
            <div>
              <span className="text-carbon-500 block">WHATSAPP</span>
              <span className="text-cobalt-300 font-bold">{COMPANY_INFO.phone}</span>
            </div>
            <div>
              <span className="text-carbon-500 block">INSTAGRAM</span>
              <span className="text-white font-bold">{COMPANY_INFO.instagram}</span>
            </div>
            <div>
              <span className="text-carbon-500 block">REVISION</span>
              <span className="text-carbon-400">{COMPANY_INFO.documentVersion}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-carbon-800/80 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-medium text-xs transition-all shadow hover:shadow-cobalt-500/25"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect with Partners</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-carbon-700 bg-carbon-850 hover:bg-carbon-800 text-carbon-300 text-xs font-mono transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export Document PDF</span>
            </button>

            <button
              onClick={onScrollToTop}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-carbon-700 bg-carbon-850 hover:bg-carbon-800 text-carbon-300 text-xs font-mono transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Return to Cover</span>
            </button>
          </div>
        </div>

        {/* Disclaimer / Document Notice from Copywriting */}
        <p className="text-[11px] font-mono text-carbon-500 max-w-lg mx-auto italic">
          *Corporate profile information should be updated as the team's organizational structure, legal status, service capabilities, and portfolio develop.
        </p>
      </div>
    </PageContainer>
  );
};


