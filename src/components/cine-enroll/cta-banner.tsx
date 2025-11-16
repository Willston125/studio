
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Film } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CtaBanner({ className }: { className?: string }) {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const ctaBandeauRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- Create sparkling stars ---
    const starsContainer = starsContainerRef.current;
    if (starsContainer) {
      // Clear existing stars if any
      starsContainer.innerHTML = '';
      const starCount = 30;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 3;
        
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
      }
    }

    // --- Hover animation ---
    const ctaBandeau = ctaBandeauRef.current;
    if (ctaBandeau) {
      const handleMouseEnter = () => {
        ctaBandeau.style.transform = 'translateY(-5px) scale(1.01)';
      };
      const handleMouseLeave = () => {
        ctaBandeau.style.transform = 'translateY(0) scale(1)';
      };
      
      ctaBandeau.addEventListener('mouseenter', handleMouseEnter);
      ctaBandeau.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        ctaBandeau.removeEventListener('mouseenter', handleMouseEnter);
        ctaBandeau.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className={cn("cta-flottante", className)}>
      <Link href="/inscription" className="block">
          <div className="cta-bandeau pulse" ref={ctaBandeauRef}>
              <div className="film-strip"></div>
              <div className="film-strip bottom"></div>
              
              <div className="cta-spotlights">
                  <div className="cta-spotlight"></div>
                  <div className="cta-spotlight"></div>
                  <div className="cta-spotlight"></div>
              </div>
              
              <div className="stars" ref={starsContainerRef}></div>
              
              <div className="cta-content">
                  <div className="cta-titre">LE FESTIVAL ARRIVE ! GAGNEZ LE GRAND PRIX DE 200 000 FJD !</div>
                  <div className="cta-sous-titre">Formez-vous du 1er au 20 Décembre 2025 et faites votre film.</div>
              </div>
              
              <div className="clapperboard">
                  <Film size={48} />
              </div>
          </div>
      </Link>
    </section>
  );
}
