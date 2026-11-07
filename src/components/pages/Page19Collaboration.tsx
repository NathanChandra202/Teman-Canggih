import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { COLLABORATION_MODELS } from '../../data/companyData';
import { Handshake, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface Page19Props {
  onOpenContact?: () => void;
}

export const Page19Collaboration: React.FC<Page19Props> = ({ onOpenContact }) => {
  return (
    <PageContainer pageNumber={19}>
      <SectionHeader
        pageNumber={19}
        category="ENGAGEMENT & PARTNERSHIP"
        title="Collaboration Frameworks"
        subtitle="Transparent Structures Aligned with Your Operational Stage"
        description="We believe successful collaboration begins with shared understanding, clear objectives, and mutual commitment. We structure our engagements to match your scope and organizational rhythm."
      />

      <div className="space-y-6">
        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLABORATION_MODELS.map((model) => (
            <div
              key={model.id}
              className="p-6 rounded-2xl border border-carbon-900/10 bg-white hover:border-cobalt-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-cobalt-600">
                    {model.code}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cobalt-50 text-cobalt-700 border border-cobalt-200">
                    {model.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-carbon-900">
                    {model.name}
                  </h3>
                  <p className="text-xs text-carbon-600 mt-1 leading-relaxed">
                    {model.summary}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-carbon-900/5">
                  <span className="text-[10px] font-mono text-carbon-400 uppercase tracking-wider block">
                    Structural Features:
                  </span>
                  {model.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-carbon-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cobalt-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Box */}
              <div className="mt-6 pt-4 border-t border-carbon-900/10 bg-ivory-100/70 p-3 rounded-lg">
                <span className="text-[10px] font-mono text-carbon-500 uppercase tracking-wider block mb-0.5">
                  Ideal For:
                </span>
                <p className="text-[11px] text-carbon-800 leading-snug">
                  {model.recommendedFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-6 rounded-2xl bg-carbon-900 text-ivory-50 border border-carbon-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cobalt-400 uppercase tracking-wider">
              TAILORED SCOPE CHARTER
            </span>
            <p className="font-display font-bold text-base text-white">
              Need a hybrid engagement structure combining consulting with agile sprints?
            </p>
            <p className="text-xs text-carbon-400">
              We design custom scopes suited for multi-phase corporate and institutional rollouts.
            </p>
          </div>

          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-lg bg-cobalt-500 hover:bg-cobalt-600 text-white font-medium text-xs transition-all shadow hover:shadow-cobalt-500/25"
            >
              <Handshake className="w-4 h-4" />
              <span>Discuss Engagement Fit</span>
            </button>
          )}
        </div>
      </div>
    </PageContainer>
  );
};


