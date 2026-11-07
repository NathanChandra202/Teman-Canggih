import React, { useState, useEffect } from 'react';
import { TCHeader } from './components/tc/TCHeader';
import { TCHero } from './components/tc/TCHero';
import { TCSelectedWork } from './components/tc/TCSelectedWork';
import { TCServices } from './components/tc/TCServices';
import { TCMethodology } from './components/tc/TCMethodology';
import { TCAboutPhilosophy } from './components/tc/TCAboutPhilosophy';
import { TCWhyUsIndustries } from './components/tc/TCWhyUsIndustries';
import { TCTeam } from './components/tc/TCTeam';
import { TCCollaboration } from './components/tc/TCCollaboration';
import { TCFooter } from './components/tc/TCFooter';
import { TCWhatsAppFAB } from './components/tc/TCWhatsAppFAB';
import { ContactModal } from './components/modals/ContactModal';
import { sound } from './utils/sound';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(true);

  // Sync initial sound state
  useEffect(() => {
    sound.enabled = isSoundActive;
  }, [isSoundActive]);

  const handleToggleSound = () => {
    const next = !isSoundActive;
    setIsSoundActive(next);
    sound.enabled = next;
    if (next) {
      sound.playClick();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-tcDeep font-sans antialiased relative antialiased relative">
      {/* Floating Modern Header with Section Links & Progress */}
      <TCHeader 
        onOpenContact={() => setIsContactOpen(true)}
        isSoundActive={isSoundActive}
        onToggleSound={handleToggleSound}
      />

      {/* Main Corporate Editorial Stream */}
      <main className="w-full relative z-10">
        {/* 01 / 08: Hero & Thesis */}
        <div id="hero">
          <TCHero onOpenContact={() => setIsContactOpen(true)} />
        </div>

        {/* 02 / 08: Selected Work / Case Studies */}
        <div id="portfolio">
          <TCSelectedWork onOpenContact={() => setIsContactOpen(true)} />
        </div>

        {/* 03 / 08: What We Build â€” 5 Practice Areas */}
        <div id="services">
          <TCServices onOpenContact={() => setIsContactOpen(true)} />
        </div>

        {/* 04 / 08: The TC Approach (6-Stage Methodology) */}
        <div id="methodology">
          <TCMethodology />
        </div>

        {/* 05 / 08: Who We Are & Philosophy */}
        <div id="about">
          <TCAboutPhilosophy />
        </div>

        {/* 06 / 08: Why Choose Us & Industries We Serve */}
        <div id="why-us">
          <TCWhyUsIndustries onOpenContact={() => setIsContactOpen(true)} />
        </div>

        {/* 07 / 08: Leadership & The Collective */}
        <div id="team">
          <TCTeam onOpenContact={() => setIsContactOpen(true)} />
        </div>

        {/* 08 / 08: Collaboration Frameworks & Scoping */}
        <div id="collaboration">
          <TCCollaboration onOpenContact={() => setIsContactOpen(true)} />
        </div>
      </main>

      {/* Corporate Deep Slate Navy Footer with Huge Watermark */}
      <TCFooter onOpenContact={() => setIsContactOpen(true)} />

      {/* Floating Interactive WhatsApp FAB with Pulse Ring */}
      <TCWhatsAppFAB />

      {/* Contact & Pitching Dialog Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;



