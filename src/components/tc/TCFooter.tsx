import React, { useRef } from 'react';
import { ArrowUp, Phone, Mail, MapPin, ExternalLink, Printer } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InstagramIcon } from '../common/InstagramIcon';
import { sound } from '../../utils/sound';

interface TCFooterProps {
  onOpenContact: () => void;
}

export const TCFooter: React.FC<TCFooterProps> = ({ onOpenContact }) => {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: '01 // Entry & Overview', href: '#hero' },
    { label: '02 // Selected Projects', href: '#portfolio' },
    { label: '03 // 5 Practice Areas', href: '#services' },
    { label: '04 // The TC Approach', href: '#methodology' },
    { label: '05 // Philosophy & Values', href: '#about' },
    { label: '06 // Why Us & Industries', href: '#why-us' },
    { label: '07 // Leadership Team', href: '#team' },
    { label: '08 // Collaboration Models', href: '#collaboration' },
  ];

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="bg-tcDeep text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-tcCyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pitch / Closing Statement Box */}
        <div className="border-b border-white/15 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-tcCyan bg-white/10 px-3 py-1 rounded inline-block mb-4">
                CLOSING CONVICTION // EPILOGUE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Ideas are everywhere.<br />
                Meaningful solutions make the difference<span className="text-tcCyan">.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-white/70 font-sans max-w-2xl leading-relaxed">
                Whether you need enterprise-grade software, high-impact brand positioning, offensive cyber auditing, or industrial efficiency consulting â€” let's build for better possibilities.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="https://wa.me/6289508437967"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full px-6 py-4 bg-tcCyan hover:bg-white text-tcDeep font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-tcDeep" />
                  <span>Start WhatsApp Chat</span>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">â†’</span>
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenContact();
                }}
                className="w-full px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-between border border-white/15 cursor-pointer"
              >
                <span>Submit Official Inquiry</span>
                <span>â†—</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  window.print();
                }}
                className="w-full px-6 py-3.5 bg-white/5 hover:bg-white/15 text-white/90 font-mono text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-between border border-white/10 cursor-pointer"
                title="Print or Save Company Profile as PDF"
              >
                <div className="flex items-center gap-2.5">
                  <Printer className="w-3.5 h-3.5 text-tcElectric" />
                  <span>Export Compro (PDF / Print)</span>
                </div>
                <span>â†“</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Contact Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-sm bg-tcCyan" />
              <span className="font-display font-black text-xl tracking-tight text-white">
                TEMAN CANGGIH<span className="text-tcCyan">.</span>
              </span>
            </div>
            
            <p className="font-mono text-xs text-tcCyan uppercase tracking-wider mb-4">
              Think Beyond. Build Better.
            </p>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              Independent multidisciplinary technology and business solutions firm delivering high-integrity digital systems, strategic branding, cyber defense, and industrial consulting.
            </p>

            <div className="flex items-center gap-4 text-white/70">
              <a 
                href="https://instagram.com/temancanggih_id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(700)}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center hover:bg-tcCyan hover:text-tcDeep transition-colors"
                title="Instagram @temancanggih_id"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a 
                href="https://wa.me/6289508437967"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playBlip(750)}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center hover:bg-tcCyan hover:text-tcDeep transition-colors"
                title="WhatsApp Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Index Links */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/50 block mb-4">
              DOCUMENT NAVIGATION
            </span>
            <ul className="space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={() => sound.playClick()}
                    className="font-mono text-xs text-white/70 hover:text-tcCyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-tcCyan transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Credentials & Locations */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/50 block mb-4">
              DIRECT REACH & HUBS
            </span>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-white/50 text-[10px] uppercase mb-1 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-tcCyan" />
                  <span>DIRECT WHATSAPP HOTLINE</span>
                </div>
                <a 
                  href="https://wa.me/6289508437967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-tcCyan text-sm font-bold block"
                >
                  +62 895-0843-7967
                </a>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-white/50 text-[10px] uppercase mb-1 flex items-center gap-2">
                  <InstagramIcon className="w-3.5 h-3.5 text-tcCyan" />
                  <span>OFFICIAL INSTAGRAM</span>
                </div>
                <a 
                  href="https://instagram.com/temancanggih_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-tcCyan text-sm font-bold block"
                >
                  @temancanggih_id
                </a>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-white/50 text-[10px] uppercase mb-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-tcCyan" />
                  <span>OPERATIONAL HUBS</span>
                </div>
                <div className="text-white text-sm font-medium">
                  Jakarta & Bandung, Indonesia
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
          <div>
            Â© {new Date().getFullYear()} TEMAN CANGGIH (PT / Firm). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>B2B CORPORATE PROFILE V2.4</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white hover:text-tcCyan transition-colors group cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-tcCyan group-hover:text-tcDeep flex items-center justify-center transition-all">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Massive Faint Typography Watermark with Scroll Parallax across bottom */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-12 pt-4 border-t border-white/5">
        <motion.div 
          style={{ x: watermarkX }}
          className="text-[14vw] font-display font-black tracking-tighter text-white/[0.04] whitespace-nowrap leading-none text-center"
        >
          TEMAN CANGGIH
        </motion.div>
      </div>
    </footer>
  );
};





