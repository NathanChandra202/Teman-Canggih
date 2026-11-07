import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Sparkles, Check, ChevronRight } from 'lucide-react';
import { sound } from '../../utils/sound';

export const RetroTerminalWidget: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>('tc --overview');
  const [output, setOutput] = useState<string[]>(() => [
    'TEMAN CANGGIH OS [Version 2.6.4 - RETRO ENGINE]',
    'INITIALIZING SYSTEM SUBSYSTEMS... [OK]',
    'FIRM STATUS: INDEPENDENT MULTIDISCIPLINARY FIRM',
    'TAGLINE: "Think Beyond. Build Better."',
    'READY FOR INTERACTIVE QUERY.',
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const commands = [
    {
      cmd: 'tc --overview',
      label: 'Overview',
      result: [
        '>>> RUNNING: tc --overview',
        'FIRM: TEMAN CANGGIH',
        'MISSION: Technology & Business Solutions Firm',
        'HEADQUARTERS: Jakarta & Bandung, Indonesia',
        'CORE COLLECTIVE: 7-10 Active Specialists',
        'PHILOSOPHY: Ideas are everywhere. Meaningful solutions make the difference.',
        '[STATUS: ALL 5 DISCIPLINES OPERATIONAL]'
      ],
    },
    {
      cmd: 'tc --services',
      label: '5 Disciplines',
      result: [
        '>>> RUNNING: tc --services',
        '[01] SYSTEM DEVELOPMENT  -> React, Next.js, Node.js, Cloudflare, AWS, PostgreSQL',
        '[02] BRANDING STRATEGY   -> Identity Systems, Design Tokens, B2B Pitch Kits',
        '[03] CYBER ANALYSIS      -> VAPT Audits, OWASP Top 10, Network Defense Hardening',
        '[04] FACTORY CONSULTING  -> Lean 5S, Industrial IoT, Telemetry & OEE Maximization',
        '[05] BUSINESS ANALYSIS   -> Feasibility Modeling, Unit Economics & GTM Strategy',
      ],
    },
    {
      cmd: 'tc --team',
      label: 'Leadership',
      result: [
        '>>> RUNNING: tc --team',
        'LEADERSHIP CORE:',
        '• Muhammad Syafiq   [CEO & Founder]   -> Strategic Vision & Partnerships',
        '• Nathan Chandra    [COO & PM]         -> Operations, Delivery & Governance',
        '• Daffa Taufiq      [CTO]              -> Architecture, Cloud & Engineering',
        'CORE POOL: 7–10 Specialized Practitioners across Engineering, Design, Cyber, Factory, Strategy',
      ],
    },
    {
      cmd: 'tc --ping',
      label: 'Ping Test',
      result: [
        '>>> RUNNING: tc --ping',
        'PING teman-canggih-edge (106.8456° E, 6.2088° S): 56 data bytes',
        '64 bytes from tc-jkt-edge: icmp_seq=1 ttl=64 time=8.42 ms',
        '64 bytes from tc-bdg-node: icmp_seq=2 ttl=64 time=11.18 ms',
        '--- SUMMARY: 0% packet loss, min/avg/max = 8.4/9.8/11.2 ms ---',
        'RESPONSE STATUS: FAST, SCALABLE, READY TO DEPLOY.'
      ],
    },
  ];

  const runCommand = (cmdObj: typeof commands[0]) => {
    sound.click();
    setActiveCommand(cmdObj.cmd);
    setIsTyping(true);

    let currentLines: string[] = [];
    setOutput(['> Executing ' + cmdObj.cmd + '...']);

    cmdObj.result.forEach((line, index) => {
      setTimeout(() => {
        sound.keypress();
        currentLines.push(line);
        setOutput([...currentLines]);
        if (index === cmdObj.result.length - 1) {
          setIsTyping(false);
          sound.blip();
        }
      }, (index + 1) * 80);
    });
  };

  return (
    <div className="border-2 border-ink bg-ink text-retro-green rounded-xl shadow-retro overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="bg-[#1e2023] px-3.5 py-2.5 border-b-2 border-ink flex items-center justify-between text-cream-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-retro-red" />
            <span className="w-2.5 h-2.5 rounded-full bg-retro-amber" />
            <span className="w-2.5 h-2.5 rounded-full bg-retro-green" />
          </div>
          <span className="text-[11px] font-bold text-cream-300 ml-1.5 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-retro-green" />
            <span>TC_DIAGNOSTIC_CONSOLE // v2.6</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-cream-400">
          <span className="w-2 h-2 rounded-full bg-retro-green animate-pulse" />
          <span>ONLINE</span>
        </div>
      </div>

      {/* Terminal Command Buttons */}
      <div className="bg-[#16181a] px-3 py-2 border-b border-ink/80 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-cream-400 uppercase tracking-wider mr-1">RUN:</span>
        {commands.map((c) => (
          <button
            key={c.cmd}
            onClick={() => runCommand(c)}
            disabled={isTyping}
            className={`px-2.5 py-1 rounded border text-[11px] font-mono transition-all flex items-center gap-1 ${
              activeCommand === c.cmd
                ? 'bg-retro-green text-ink border-retro-green font-bold shadow-xs'
                : 'bg-ink/80 text-cream-300 border-ink hover:border-retro-green/50 hover:text-white'
            }`}
          >
            <ChevronRight className="w-3 h-3" />
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Output Screen */}
      <div className="p-4 sm:p-5 h-56 overflow-y-auto space-y-1.5 bg-[#0e0f10] text-[#00ff88] leading-relaxed select-text scrollbar-thin">
        {output.map((line, idx) => (
          <div key={idx} className="flex items-start gap-1">
            <span className="text-retro-amber select-none">&gt;</span>
            <span className="font-mono text-[11px] sm:text-xs">{line}</span>
          </div>
        ))}
        {isTyping && (
          <div className="inline-block w-2 h-3.5 bg-retro-green animate-blink align-middle ml-1" />
        )}
      </div>

      {/* Terminal Footer */}
      <div className="bg-[#16181a] px-3 py-1.5 border-t border-ink/80 flex items-center justify-between text-[10px] text-cream-400">
        <span>MEM: 640K CONV // OK</span>
        <span className="text-retro-green">PRESS BUTTON TO TEST CAPABILITIES</span>
      </div>
    </div>
  );
};


