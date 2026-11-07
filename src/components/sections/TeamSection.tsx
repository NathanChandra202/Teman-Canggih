import React from 'react';
import { TEAM_MEMBERS } from '../../data/companyData';
import { Users2, Award, Briefcase } from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 border-b border-carbon-900/10 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <span className="font-mono text-xs font-semibold text-cobalt-600 uppercase tracking-wider block mb-2">
            // STRUKTUR ORGANISASI
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-carbon-900">
            Our Team
          </h2>
          <p className="mt-3 text-base sm:text-lg text-carbon-600 max-w-2xl font-light">
            Tim multidisiplin yang memadukan perspektif strategis, kapabilitas teknis mendalam, dan pendekatan pemecahan masalah yang disiplin.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-carbon-900/10 bg-white hover:border-carbon-900/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Portrait Placeholder Phase 2 */}
                <ArchitecturalPlaceholder
                  label={member.phase2AssetPrompt}
                  category="EXECUTIVE PORTRAIT"
                  aspectRatio="1/1"
                  badge={`LEAD // ${member.name.toUpperCase()}`}
                  schematicType="portrait"
                />

                {/* Name & Title */}
                <div>
                  <span className="font-mono text-[10px] text-cobalt-600 font-bold uppercase tracking-wider block">
                    {member.department}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-carbon-900 mt-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-carbon-600 font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-carbon-600 leading-relaxed font-light">
                  {member.bio}
                </p>

                {/* Mandate list */}
                <div className="pt-2 border-t border-carbon-900/5 space-y-1">
                  <span className="text-[10px] font-mono text-carbon-400 uppercase tracking-wider block">
                    Tanggung Jawab Utama:
                  </span>
                  {member.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 text-[11px] text-carbon-700">
                      <span className="text-cobalt-600">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
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

        {/* 7-10 Multidisciplinary Squad Roster Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-carbon-900 text-ivory-50 border border-carbon-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs uppercase tracking-wider">
                <Users2 className="w-4 h-4" />
                <span>KOLEKTIF TALENTA INTI // 7–10 ANGGOTA AKTIF</span>
              </div>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                Multidisciplinary Specialist Collective
              </h4>
              <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed font-light">
                Selain tim kepemimpinan, proyek-proyek Teman Canggih didukung oleh praktisi spesialis di bidang rekayasa perangkat lunak frontend/backend, DevOps, penetration testing siber, desain visual brand, simulasi operasional pabrik, dan riset model bisnis.
              </p>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-carbon-800/80 border border-carbon-700/60 text-xs font-mono text-carbon-300 space-y-1">
              <span className="text-cobalt-400 font-bold block mb-1">DISTRIBUSI PERAN TIM:</span>
              <p>• 4 Systems Engineers & Cloud DevOps</p>
              <p>• 2 Brand Designers & Visual Strategists</p>
              <p>• 2 Cyber & Industrial Analysts</p>
              <p>• 2 Business & Financial Researchers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


