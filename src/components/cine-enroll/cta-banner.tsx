'use client';

import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

const PalaceFacade = () => (
  <svg
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-auto text-amber-500/10"
    width="1400"
    height="150"
    viewBox="0 0 1400 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax slice"
  >
    <path
      d="M700 50L750 150H650L700 50Z"
      fill="currentColor"
    />
    <path
      d="M0 150V120L50 100L100 120V150H0Z M100 120L150 100L200 120V150H100V120Z M200 120L250 100L300 120V150H200V120Z M300 120L350 100L400 120V150H300V120Z M400 120L450 100L500 120V150H400V120Z M500 120L550 100L600 120V150H500V120Z M600 120L650 100L700 120"
      fill="currentColor"
    />
    <path
      d="M1400 150V120L1350 100L1300 120V150H1400Z M1300 120L1250 100L1200 120V150H1300V120Z M1200 120L1150 100L1100 120V150H1200V120Z M1100 120L1050 100L1000 120V150H1100V120Z M1000 120L950 100L900 120V150H1000V120Z M900 120L850 100L800 120V150H900V120Z M800 120L750 100L700 120"
      fill="currentColor"
    />
  </svg>
);


export default function CtaBanner({ className }: { className?: string }) {

  useEffect(() => {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;
    
    particleContainer.innerHTML = '';

    const particleCount = 50; 
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle-gold');
        
        const size = Math.random() * 2 + 0.5;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        const xEnd = (Math.random() - 0.5) * 50;
        particle.style.setProperty('--x-end', `${xEnd}px`);
        
        particleContainer.appendChild(particle);
    }
  }, []);

  return (
    <section className={cn("relative my-20 py-20 overflow-hidden", className)}>
       <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/50 to-black z-0"></div>
       <div className="particle-container absolute inset-0 z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        
        <h2 
          className="font-serif text-2xl md:text-3xl text-amber-400 tracking-wider"
          style={{ fontFamily: "'Garamond', serif", textShadow: '0 2px 10px rgba(255, 215, 0, 0.5)'}}
        >
          LE FESTIVAL ARRIVE !
        </h2>

        <div className="my-4 md:my-6">
          <p 
            className="font-serif font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-300 leading-none"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 4px 20px rgba(255, 215, 0, 0.6)'}}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-normal block mb-2 text-amber-200/80">GAGNEZ</span>
            200 000 FDJ
          </p>
        </div>

        <p className="font-sans text-base md:text-lg text-white/80 tracking-widest uppercase">
          Vivez la magie du 7ème art
        </p>

      </div>
      
      <PalaceFacade />

    </section>
  );
}
