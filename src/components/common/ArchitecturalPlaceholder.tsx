import React, { useState } from 'react';
import { Camera, Sparkles, Layers, Terminal, ShieldCheck, Cpu, BarChart3, Palette, Activity } from 'lucide-react';

export type SchematicType = 'system' | 'branding' | 'cyber' | 'factory' | 'business' | 'portrait' | 'generic';

interface ArchitecturalPlaceholderProps {
  label: string;
  category?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9' | '3/4';
  className?: string;
  badge?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
  showBlueprintGrid?: boolean;
  schematicType?: SchematicType;
  src?: string;
  alt?: string;
}

export const ArchitecturalPlaceholder: React.FC<ArchitecturalPlaceholderProps> = ({
  label,
  category = 'ARCHITECTURAL & INDUSTRIAL',
  aspectRatio = '16/9',
  className = '',
  badge = 'PHASE 2 VISUAL ASSET',
  showBlueprintGrid = true,
  schematicType = 'generic',
  src,
  alt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    '3/4': 'aspect-[3/4]',
  }[aspectRatio] || 'aspect-[16/9]';

  // Determine schematic illustration based on type or fallback
  const renderSchematicVisual = () => {
    switch (schematicType) {
      case 'system':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[10px] text-carbon-600 select-none">
            {/* Top row */}
            <div className="flex justify-between items-center text-carbon-400">
              <span className="flex items-center gap-1.5 text-cobalt-600 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>ARCH_TOPOLOGY_V2</span>
              </span>
              <span>EDGE_LATENCY: 14MS</span>
            </div>

            {/* Middle node connection graph */}
            <div className="my-auto grid grid-cols-4 gap-2 items-center text-center">
              <div className="p-2 rounded bg-white border border-carbon-900/10 shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mx-auto mb-1 animate-ping" />
                <span className="font-bold text-[9px] block">CLIENT APPS</span>
                <span className="text-[8px] text-carbon-400">Web • iOS • Android</span>
              </div>
              <div className="p-2 rounded bg-cobalt-500 text-white font-bold text-[9px] shadow-sm">
                <span>API GATEWAY</span>
                <span className="block text-[8px] opacity-80">Load Balanced</span>
              </div>
              <div className="p-2 rounded bg-white border border-carbon-900/10 shadow-2xs">
                <span className="font-bold text-[9px] block">MICROSERVICES</span>
                <span className="text-[8px] text-cobalt-600">Go / Node.js</span>
              </div>
              <div className="p-2 rounded bg-carbon-900 text-ivory-100 font-bold text-[9px]">
                <span>DATA LAYER</span>
                <span className="block text-[8px] text-carbon-400">PostgreSQL+Redis</span>
              </div>
            </div>

            {/* Bottom telemetry line */}
            <div className="flex justify-between items-center text-[9px] text-carbon-500 border-t border-carbon-900/10 pt-1.5">
              <span>ACTIVE CLUSTER: AWS AP-SOUTHEAST-3</span>
              <span className="text-emerald-600 font-semibold">99.98% UPTIME</span>
            </div>
          </div>
        );

      case 'branding':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 font-mono select-none">
            <div className="flex justify-between items-center text-[10px] text-carbon-500">
              <span className="flex items-center gap-1 text-cobalt-600 font-bold">
                <Palette className="w-3.5 h-3.5" />
                <span>SWISS_GRID_SYSTEM</span>
              </span>
              <span>RATIO: 1.61803</span>
            </div>

            {/* Typographic and color specimens */}
            <div className="my-auto flex items-center justify-around gap-4">
              <div className="space-y-1 text-left">
                <div className="font-display font-extrabold text-2xl tracking-tighter text-carbon-900">
                  Aa Bb 01
                </div>
                <div className="text-[9px] text-carbon-500">Manrope Bold + Inter Sans</div>
              </div>

              {/* Color swatches */}
              <div className="flex gap-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded bg-carbon-900 border border-carbon-700 shadow-sm" />
                  <span className="text-[8px] text-carbon-500">#0F1115</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded bg-cobalt-500 shadow-sm" />
                  <span className="text-[8px] text-cobalt-600 font-bold">#2563EB</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded bg-[#FAF8F4] border border-carbon-900/20 shadow-sm" />
                  <span className="text-[8px] text-carbon-500">#FAF8F4</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[9px] text-carbon-500 border-t border-carbon-900/10 pt-1.5">
              <span>DESIGN TOKENS // 8-PT BASELINE</span>
              <span className="text-cobalt-600">TC-BRAND-SPEC</span>
            </div>
          </div>
        );

      case 'cyber':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 font-mono select-none">
            <div className="flex justify-between items-center text-[10px] text-carbon-500">
              <span className="flex items-center gap-1 text-rose-600 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-cobalt-600" />
                <span>ATTACK_SURFACE_RADAR</span>
              </span>
              <span className="text-emerald-600 font-semibold">STATUS: HARDENED</span>
            </div>

            {/* Central Radar Simulation */}
            <div className="my-auto flex items-center justify-around">
              <div className="relative w-20 h-20 rounded-full border border-dashed border-carbon-900/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-cobalt-500/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cobalt-600 animate-pulse" />
                </div>
                <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-rose-500" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              <div className="space-y-1.5 text-[9px] text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-carbon-500">OWASP TOP 10:</span>
                  <span className="font-bold text-emerald-600">PASS (0 VULN)</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-carbon-500">WAF FILTER:</span>
                  <span className="font-bold text-carbon-800">ACTIVE (CLOUDFLARE)</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-carbon-500">TLS CIPHER:</span>
                  <span className="font-bold text-carbon-800">TLS 1.3 STRICT</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[9px] text-carbon-500 border-t border-carbon-900/10 pt-1.5">
              <span>PENETRATION AUDIT: VAPT-2026-Q1</span>
              <span className="text-cobalt-600">ISO/IEC 27001 ALIGNED</span>
            </div>
          </div>
        );

      case 'factory':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 font-mono select-none">
            <div className="flex justify-between items-center text-[10px] text-carbon-500">
              <span className="flex items-center gap-1 text-cobalt-600 font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span>OEE_LINE_TELEMETRY</span>
              </span>
              <span className="text-carbon-600">CYCLE: 42 SEC/UNIT</span>
            </div>

            <div className="my-auto grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-white border border-carbon-900/10">
                <span className="text-[9px] text-carbon-400 block">AVAILABILITY</span>
                <span className="font-display font-bold text-base text-carbon-900">94.2%</span>
                <span className="text-[8px] text-emerald-600 block mt-0.5">+4.1% vs baseline</span>
              </div>
              <div className="p-2 rounded bg-cobalt-50 border border-cobalt-200">
                <span className="text-[9px] text-cobalt-600 font-bold block">OVERALL OEE</span>
                <span className="font-display font-extrabold text-lg text-cobalt-700">88.5%</span>
                <span className="text-[8px] text-cobalt-600 block mt-0.5">World-Class Tier</span>
              </div>
              <div className="p-2 rounded bg-white border border-carbon-900/10">
                <span className="text-[9px] text-carbon-400 block">QUALITY YIELD</span>
                <span className="font-display font-bold text-base text-carbon-900">99.1%</span>
                <span className="text-[8px] text-emerald-600 block mt-0.5">Scrap &lt; 0.9%</span>
              </div>
            </div>

            <div className="flex justify-between text-[9px] text-carbon-500 border-t border-carbon-900/10 pt-1.5">
              <span>PROTOCOL: MQTT / OPC-UA SENSORS</span>
              <span className="text-cobalt-600">LEAN 5S COMPLIANT</span>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 font-mono select-none">
            <div className="flex justify-between items-center text-[10px] text-carbon-500">
              <span className="flex items-center gap-1 text-cobalt-600 font-bold">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>FEASIBILITY_MODEL</span>
              </span>
              <span className="text-emerald-600 font-semibold">IRR: 34.2%</span>
            </div>

            {/* Chart visualization */}
            <div className="my-auto px-4 flex items-end justify-between h-14 gap-2">
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-carbon-900/10 rounded-t h-4" />
                <span className="text-[8px] text-carbon-400">M1</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-carbon-900/20 rounded-t h-6" />
                <span className="text-[8px] text-carbon-400">M3</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-cobalt-300 rounded-t h-9" />
                <span className="text-[8px] text-carbon-400">M6</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-cobalt-500 rounded-t h-12" />
                <span className="text-[8px] text-cobalt-600 font-bold">M12</span>
              </div>
            </div>

            <div className="flex justify-between text-[9px] text-carbon-500 border-t border-carbon-900/10 pt-1.5">
              <span>PAYBACK PERIOD: 7.4 MONTHS</span>
              <span className="text-cobalt-600">BPMN 2.0 VALIDATED</span>
            </div>
          </div>
        );

      case 'portrait':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 font-mono select-none">
            <div className="flex justify-between items-center text-[10px] text-carbon-400">
              <span>[LENS: 85MM F/1.4]</span>
              <span className="text-cobalt-600">PORTRAIT_RAW</span>
            </div>

            <div className="my-auto flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-carbon-900/30 flex items-center justify-center bg-white/50 text-carbon-400">
                <Camera className="w-6 h-6 text-cobalt-600" />
              </div>
              <p className="font-display font-bold text-xs text-carbon-800 mt-2 uppercase tracking-wide">
                Executive Profile
              </p>
              <span className="text-[9px] text-carbon-400">Monochrome Swiss Lighting</span>
            </div>

            <div className="flex justify-between text-[9px] text-carbon-400 border-t border-carbon-900/10 pt-1.5">
              <span>ISO 100 • 1/250S</span>
              <span className="text-cobalt-600">PHASE 2 ASSET</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-6 border border-dashed border-carbon-900/15 rounded flex flex-col items-center justify-center p-4 text-center transition-all duration-300 group-hover:border-cobalt-500/30">
            <div className="flex items-center gap-2 mb-2 px-2.5 py-1 rounded bg-carbon-900/5 border border-carbon-900/10 text-[10px] font-mono tracking-wider text-carbon-600 uppercase">
              <Camera className="w-3 h-3 text-cobalt-600" />
              <span>{badge}</span>
            </div>

            <p className="font-display font-semibold text-xs md:text-sm text-carbon-800 max-w-sm line-clamp-2 uppercase tracking-wide">
              {label}
            </p>

            <p className="mt-1 text-[11px] font-mono text-carbon-400 tracking-tight">
              Visual Direction: <span className="text-carbon-600 font-medium">{category}</span>
            </p>

            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-carbon-400 opacity-60 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-2.5 h-2.5 text-cobalt-500" />
              <span>Reserved for Phase 2 Production Shoot / 3D Render</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden border border-carbon-900/20 bg-ivory-200/60 transition-all duration-300 hover:border-cobalt-500/40 hover:bg-ivory-200/90 ${aspectClass} ${className}`}
    >
      {/* Blueprint Grid Lines */}
      {showBlueprintGrid && (
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity" />
      )}

      {/* Crosshairs & Technical Corner Markers */}
      <div className="absolute top-2 left-2 text-[9px] font-mono text-carbon-400 select-none">
        + [x0, y0]
      </div>
      <div className="absolute top-2 right-2 text-[9px] font-mono text-carbon-400 select-none">
        [w1920, h1080] +
      </div>
      <div className="absolute bottom-2 left-2 text-[9px] font-mono text-carbon-400 select-none">
        + TC-ASSET-GRID
      </div>
      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-cobalt-600 font-semibold select-none">
        {aspectRatio.replace('/', ':')} +
      </div>

      {/* Render Image if available, or Schematic Blueprint */}
      {src ? (
        <div className="relative w-full h-full z-10 overflow-hidden">
          <img 
            src={src} 
            alt={alt || label} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      ) : (
        <div className="relative w-full h-full z-10">
          {renderSchematicVisual()}
        </div>
      )}

      {/* Diagonal Subtle Wireframe Watermark Line */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

