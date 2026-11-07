import React from 'react';
import { TEAM_MEMBERS } from '../../data/companyData';
import { Users2, Shield, QrCode } from 'lucide-react';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { sound } from '../../utils/sound';

export const RetroTeamBadges: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 border-b-2 border-ink bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded bg-retro-amber font-mono font-black text-xs text-ink uppercase border-2 border-ink shadow-retro-sm">
              PEOPLE & GOVERNANCE
            </span>
            <span className="font-mono text-xs font-bold text-ink-600">
              // TEAM ROSTER
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-ink uppercase tracking-tight">
            Our Team
          </h2>
          <p className="mt-2 text-base text-ink-700 max-w-2xl font-normal leading-relaxed">
            Struktur kepemimpinan dan talenta multidisiplin yang memadukan keahlian strategis, manajemen sprint operasional, dan arsitektur teknis tinggi.
          </p>
        </div>

        {/* 3 Executive ID Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border-2 border-ink bg-white shadow-retro-lg flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                {/* Badge Header with Lanyard Hole */}
                <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                  <div className="w-10 h-3 rounded-full border-2 border-ink bg-cream-200 mx-auto" />
                </div>

                {/* Portrait Placeholder Phase 2 */}
                <div className="border-2 border-ink rounded-xl overflow-hidden shadow-retro-sm">
                  <ArchitecturalPlaceholder
                    label={member.phase2AssetPrompt}
                    category="EXECUTIVE BADGE"
                    aspectRatio="1/1"
                    badge={`ID // ${member.name.toUpperCase()}`}
                    schematicType="portrait"
                  />
                </div>

                {/* Name & Role */}
                <div>
                  <span className="font-mono text-[10px] text-cobalt-600 font-black uppercase tracking-wider block">
                    {member.department}
                  </span>
                  <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight mt-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-retro-orange mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-ink-700 leading-relaxed font-normal">
                  {member.bio}
                </p>

                {/* Responsibilities list */}
                <div className="pt-2 border-t-2 border-ink/10 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-ink-500 uppercase tracking-wider block">
                    Mandat Kerja:
                  </span>
                  {member.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 text-[11px] text-ink-800">
                      <span className="text-cobalt-600 font-bold">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties Pill Badges */}
              <div className="mt-5 pt-3 border-t-2 border-ink flex flex-wrap gap-1.5">
                {member.specialties.map((spec, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 rounded border border-ink bg-cream-100 text-[10px] font-mono font-bold text-ink">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 7-10 Multidisciplinary Squad Roster Card */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-ink bg-ink text-cream-100 shadow-retro-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-retro-amber font-mono text-xs uppercase font-black">
                <Users2 className="w-4 h-4" />
                <span>AGILE TALENT POOL // 7–10 ACTIVE MEMBERS</span>
              </div>
              <h4 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                Multidisciplinary Specialist Collective
              </h4>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed font-normal">
                Selain tim kepemimpinan, Teman Canggih mengorkestrasi praktisi spesialis lintas disiplin: frontend & backend engineering, cloud DevOps, penetration testing siber, desain visual brand, telemetri operasional pabrik, dan riset model bisnis.
              </p>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl border-2 border-cream-300/40 bg-ink-800 font-mono text-xs text-cream-200 space-y-1.5">
              <span className="text-retro-amber font-black block mb-1">DISTRIBUSI PERAN SQUAD:</span>
              <p>► 4 Systems & Cloud Engineers</p>
              <p>► 2 Brand & UI/UX Designers</p>
              <p>► 2 Cyber & Industrial Analysts</p>
              <p>► 2 Business & Financial Analysts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


