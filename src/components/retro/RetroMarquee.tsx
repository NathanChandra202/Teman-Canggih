import React from 'react';

interface RetroMarqueeProps {
  text?: string;
  speed?: 'normal' | 'fast';
  className?: string;
}

export const RetroMarquee: React.FC<RetroMarqueeProps> = ({
  text,
  className = '',
}) => {
  const defaultItems = [
    'TEMAN CANGGIH',
    'THINK BEYOND. BUILD BETTER.',
    'SYSTEM DEVELOPMENT',
    'BRANDING STRATEGY',
    'CYBER ANALYSIS',
    'FACTORY CONSULTING',
    'BUSINESS ANALYSIS',
    'EST. 2026 // JAKARTA — BANDUNG',
    'MULTIDISCIPLINARY SOLUTIONS',
  ];

  return (
    <div className={`overflow-hidden whitespace-nowrap border-y-2 border-ink bg-ink text-cream-100 py-2.5 select-none font-mono text-xs font-bold tracking-widest ${className}`}>
      <div className="flex w-max animate-marquee gap-8">
        {[...defaultItems, ...defaultItems, ...defaultItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-retro-amber">///</span>
            <span>{item}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-retro-green" />
          </div>
        ))}
      </div>
    </div>
  );
};


