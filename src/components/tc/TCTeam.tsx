import React from 'react';
import { TEAM_MEMBERS } from '../../data/companyData';
import { ArchitecturalPlaceholder } from '../common/ArchitecturalPlaceholder';
import { Shield, Sparkles, Terminal, Briefcase, Award } from 'lucide-react';

interface TCTeamProps {
  onOpenContact: () => void;
}

export const TCTeam: React.FC<TCTeamProps> = ({ onOpenContact }) => {
  const leadership = TEAM_MEMBERS.slice(0, 3);
  const corePool = TEAM_MEMBERS[3];

  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0: return <Award className="w-4 h-4 text-tcCyan" />;
      case 1: return <Briefcase className="w-4 h-4 text-tcCyan" />;
      case 2: return <Terminal className="w-4 h-4 text-tcCyan" />;
      default: return <Shield className="w-4 h-4 text-tcCyan" />;
    }
  };

  return (
    <section id="team" className="py-24 sm:py-32 bg-white text-tcDeep border-t border-tcDeep/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-tcDeep/15 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-tcDeep/60 bg-[#F8FAFC] px-2.5 py-1 rounded border border-tcDeep/10">
                07 / 08
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-tcDeep/60">
                [ LEADERSHIP & TEAM ]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-tcDeep">
              The Collective Mind<span className="text-tcCyan">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-tcDeep/70 font-sans leading-relaxed">
            A collaborative team of 7â€“10 active specialists combining analytical thinking, high-velocity engineering, and strategic discipline.
          </p>
        </div>

        {/* Leadership Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {leadership.map((leader, idx) => (
            <div 
              key={leader.name}
              className="bg-[#F8FAFC] border border-tcDeep/10 rounded-xl overflow-hidden hover:border-tcDeep/40 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Portrait Placeholder Container */}
              <div className="relative w-full aspect-[4/3] bg-tcDeep/5 overflow-hidden border-b border-tcDeep/10">
                <ArchitecturalPlaceholder
                  label={leader.name}
                  category={leader.department}
                  badge={`TC EXECUTIVE // ${leader.role.toUpperCase()}`}
                  schematicType="portrait"
                  aspectRatio="4/3"
                  className="w-full h-full"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-tcDeep text-white shadow-sm">
                    {getRoleIcon(idx)}
                    <span>CORE LEAD</span>
                  </span>
                </div>
              </div>

              {/* Leader Info Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-tcDeep/60 block mb-1">
                      {leader.department}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-tcDeep group-hover:text-tcElectric transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-tcCyan font-mono mt-0.5">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-tcDeep/75 leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  {/* Core Responsibilities */}
                  <div className="space-y-1.5 mb-6">
                    <span className="font-mono text-[10px] uppercase font-bold text-tcDeep/50 tracking-wider block mb-2">
                      Governance Scope:
                    </span>
                    {leader.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="text-xs text-tcDeep/80 flex items-start gap-2">
                        <span className="text-tcCyan font-bold">â€¢</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties Badges */}
                <div className="pt-4 border-t border-tcDeep/10 flex flex-wrap gap-1.5">
                  {leader.specialties.map((spec, sIdx) => (
                    <span 
                      key={sIdx}
                      className="font-mono text-[10px] font-medium bg-white text-tcDeep/80 px-2.5 py-1 rounded border border-tcDeep/10"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multidisciplinary Core Pool (7â€“10 Specialists) Full Width Feature */}
        {corePool && (
          <div className="bg-tcDeep text-white rounded-2xl p-8 sm:p-12 border border-tcDeep relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-tcCyan/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-tcCyan bg-white/10 px-3 py-1 rounded">
                    THE COLLECTIVE POOL
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    7â€“10 Active Practitioners
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
                  {corePool.role}
                </h3>

                <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6 max-w-2xl">
                  {corePool.bio} We do not operate as rigid sub-contractors or junior-staffed agencies. Every project is staffed by seasoned domain practitioners dedicated to craft, speed, and business outcome.
                </p>

                {/* Squad distribution tags */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { title: 'Full-Stack Software', count: '3 Engineers', icon: 'Code' },
                    { title: 'Brand & Visual Identity', count: '2 Designers', icon: 'Palette' },
                    { title: 'Cyber Risk & Auditing', count: '2 Analysts', icon: 'Shield' },
                    { title: 'Operations & Lean 5S', count: '2 Consultants', icon: 'Cpu' },
                    { title: 'Business & Strategy', count: '2 Analysts', icon: 'LineChart' },
                    { title: 'Agile Delivery PM', count: 'Dedicated Lead', icon: 'Users' },
                  ].map((squad, qIdx) => (
                    <div key={qIdx} className="bg-white/5 border border-white/10 p-3 rounded-lg">
                      <div className="font-mono text-xs text-tcCyan font-bold">{squad.count}</div>
                      <div className="text-xs font-sans text-white/90 font-medium">{squad.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Architecture Visual Blueprint */}
              <div className="lg:col-span-5">
                <div className="bg-white/5 border border-white/15 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="font-mono text-[10px] uppercase font-bold text-white/60">
                      TALENT POOL CAPABILITY MATRIX
                    </span>
                    <Sparkles className="w-4 h-4 text-tcCyan" />
                  </div>
                  
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-white/80">
                      <span>Engineering Velocity</span>
                      <span className="text-tcCyan font-bold">Senior Led</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-tcCyan h-full w-[94%]" />
                    </div>

                    <div className="flex justify-between items-center text-white/80">
                      <span>Cross-Domain Cohesion</span>
                      <span className="text-tcCyan font-bold">100% Unified</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-tcCyan h-full w-[100%]" />
                    </div>

                    <div className="flex justify-between items-center text-white/80">
                      <span>Delivery Discipline</span>
                      <span className="text-tcCyan font-bold">Zero AI Slop</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-tcCyan h-full w-[96%]" />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/60 font-sans">Ready to meet the leads?</span>
                    <button
                      onClick={onOpenContact}
                      className="px-4 py-2 bg-tcCyan hover:bg-white text-tcDeep font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      Book Team Briefing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};





