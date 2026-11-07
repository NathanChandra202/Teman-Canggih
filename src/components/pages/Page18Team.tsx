import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeader } from '../common/SectionHeader';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { TEAM_MEMBERS } from '../../data/companyData';
import { Users2, Award, Briefcase, ChevronRight, Check } from 'lucide-react';

export const Page18Team: React.FC = () => {
  return (
    <PageContainer pageNumber={18}>
      <SectionHeader
        pageNumber={18}
        category="PEOPLE & LEADERSHIP"
        title="Our Team & Multidisciplinary Collective"
        subtitle="Complementary Disciplines Under Unified Governance"
        description="Our leadership team bridges executive strategy, operational execution, and deep technical architecture, supported by an agile core pool of 7–10 active specialists."
      />

      <div className="space-y-6">
        {/* Core Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-carbon-900/10 bg-white hover:border-cobalt-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Phase 2 Portrait Placeholder */}
                <ArchitecturalPlaceholder
                  label={member.phase2AssetPrompt}
                  category="EXECUTIVE PORTRAIT"
                  aspectRatio="1/1"
                  badge={`PHASE 2 // ${member.name.toUpperCase()}`}
                  showBlueprintGrid={true}
                />

                {/* Name & Title */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-cobalt-600 font-bold uppercase tracking-wider">
                      {member.department}
                    </span>
                    <span className="text-[10px] font-mono text-carbon-400">
                      LEAD 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-carbon-900 mt-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-carbon-600 font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-carbon-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Responsibilities */}
                <div className="pt-2 border-t border-carbon-900/5 space-y-1">
                  <span className="text-[10px] font-mono text-carbon-400 uppercase tracking-wider block">
                    Core Mandate:
                  </span>
                  {member.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 text-[11px] text-carbon-700">
                      <span className="text-cobalt-600">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties Pill Badges */}
              <div className="mt-4 pt-3 border-t border-carbon-900/10 flex flex-wrap gap-1.5">
                {member.specialties.map((spec, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 rounded bg-ivory-100 border border-carbon-900/5 text-[10px] font-mono text-carbon-600">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Multidisciplinary Collective Squad Banner */}
        <div className="p-6 rounded-2xl bg-carbon-900 text-ivory-50 border border-carbon-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs uppercase tracking-wider">
                <Users2 className="w-4 h-4" />
                <span>AGILE TALENT POOL // 7–10 ACTIVE MEMBERS</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white">
                Multidisciplinary Specialist Collective
              </h4>
              <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed font-light">
                In addition to executive partners, our project teams are staffed with talented practitioners across frontend and backend engineering, penetration testing, visual brand design, industrial operations modeling, and financial research.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="p-3 rounded-lg bg-carbon-800/80 border border-carbon-700/60 text-xs font-mono text-carbon-300">
                <span className="text-cobalt-400 font-semibold block mb-0.5">TEAM COMPOSITION:</span>
                • 4 Systems Engineers & DevOps<br />
                • 2 Brand Designers & UI/UX<br />
                • 2 Cyber & Industrial Analysts<br />
                • 2 Strategic Business Researchers
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};


