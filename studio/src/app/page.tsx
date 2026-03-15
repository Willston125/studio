'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const CITATIONS = [
  { auteur: "Stanley Kubrick", texte: "Si cela peut être écrit ou pensé, cela peut être filmé." },
  { auteur: "Jean-Luc Godard", texte: "Le cinéma, c'est la vérité 24 fois par seconde." },
  { auteur: "Martin Scorsese", texte: "Le cinéma est une affaire de ce qui est dans le cadre et de ce qui est en dehors." },
  { auteur: "Quentin Tarantino", texte: "Je ne suis pas allé à l'école de cinéma, je suis allé au cinéma." },
  { auteur: "James Cameron", texte: "Prenez une caméra. Filmez quelque chose. Peu importe que ce soit petit, peu importe que ce soit mauvais... Mettez votre nom dessus en tant que réalisateur. Maintenant, vous êtes un réalisateur." },
  { auteur: "Alfred Hitchcock", texte: "Pour faire un grand film, il faut trois choses : le scénario, le scénario et le scénario." },
  { auteur: "Francis Ford Coppola", texte: "L'essence du cinéma, c'est le montage. C'est la combinaison des moments d'émotion humaine mis en images et assemblés pour former une sorte d'alchimie." },
  { auteur: "Robert Bresson", texte: "Rends visible ce qui, sans toi, ne serait peut-être jamais vu." },
  { auteur: "Orson Welles", texte: "Un film n'est jamais vraiment bon à moins que la caméra ne soit un œil dans la tête d'un poète." },
  { auteur: "Akira Kurosawa", texte: "Les êtres humains partagent les mêmes problèmes. Un film ne peut être compris que s'il décrit ces problèmes de manière humaine." },
];

const PARTNERS = [
  { src: "/ambassa-de-france.png", alt: "Ambassade de France" },
  { src: "/american-corner.png", alt: "American Corner" },
  { src: "/catmoon-production.jpg", alt: "Catmoon Production" },
  { src: "/logo_bdc.png", alt: "BDC" },
  { src: "/unicef.png", alt: "UNICEF" },
];





import { Clapperboard, Film, Tv2, Users, Trophy } from 'lucide-react';

// Données pour la section Mission
const MISSIONS = [
  { icon: Clapperboard, text: "Former les jeunes dans l'audiovisuel à devenir des professionnels" },
  { icon: Film, text: "Aider à la production de contenus créatifs" },
  { icon: Tv2, text: "Aider à la diffusion des œuvres djiboutiennes" },
  { icon: Users, text: "Créer une synergie entre jeunes créateurs" },
  { icon: Trophy, text: "Créer des grands événements pour mettre en valeur Djibouti et les talents des Djiboutiens" },
];

// ═══════════════════════════════════════════════════════════════════
// Section Notre Mission — Style Pro (Fond Noir)
// ═══════════════════════════════════════════════════════════════════
function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Titre */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[#C5A572] text-xs font-bold uppercase tracking-[0.3em]">
            Cineworld Académie
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight uppercase">
            Notre Mission
          </h2>
          <div className="w-16 h-1 bg-[#8B2635] mx-auto mt-5" />
        </div>

        {/* Grille de missions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {MISSIONS.slice(0, 3).map((mission, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 text-center hover:border-[#C5A572]/40 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full border border-[#C5A572]/40 bg-[#C5A572]/10 flex items-center justify-center group-hover:bg-[#C5A572]/20 group-hover:border-[#C5A572] transition-all duration-300">
                  <mission.icon className="w-6 h-6 text-[#C5A572]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{mission.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {MISSIONS.slice(3).map((mission, index) => (
            <div
              key={index + 3}
              className="bg-white/5 border border-white/10 p-8 text-center hover:border-[#C5A572]/40 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full border border-[#C5A572]/40 bg-[#C5A572]/10 flex items-center justify-center group-hover:bg-[#C5A572]/20 group-hover:border-[#C5A572] transition-all duration-300">
                  <mission.icon className="w-6 h-6 text-[#C5A572]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{mission.text}</p>
            </div>
          ))}
        </div>

        {/* Citation */}
        <div className="text-center mt-14 pt-8 border-t border-white/10">
          <p className="text-white/50 italic text-sm">
            &ldquo;Le cinéma djiboutien de demain se construit aujourd&apos;hui&rdquo;
          </p>
          <p className="text-[#C5A572] text-xs font-bold uppercase tracking-widest mt-2">
            — Cineworld Académie, depuis 2014
          </p>
        </div>
      </div>
    </section>
  );
}





export default function Home() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [citation, setCitation] = useState<{ auteur: string; texte: string } | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Optimisation: Throttle mousemove avec requestAnimationFrame
  useEffect(() => {
    let rafId: number = 0;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return; // Throttle à 1 update par frame

      rafId = requestAnimationFrame(() => {
        // Seuil de 5px pour ignorer les micro-mouvements
        if (Math.abs(e.clientX - lastX) > 5 || Math.abs(e.clientY - lastY) > 5) {
          setMousePos({ x: e.clientX, y: e.clientY });
          lastX = e.clientX;
          lastY = e.clientY;
        }
        rafId = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * CITATIONS.length);
    setCitation(CITATIONS[randomIndex]);

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setCitation(null);
    }, 1500);
    setTimeoutId(id);
  };

  return (
    <main className="bg-black">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION HERO */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full h-screen overflow-hidden select-none"
        onClick={handleClick}
      >
        {/* Curseur personnalisé visible (desktop uniquement) */}
        {mousePos && (
          <div
            className="fixed z-[100] pointer-events-none w-4 h-4 bg-yellow-500 rounded-full mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-transform duration-75"
            style={{ left: mousePos.x, top: mousePos.y }}
          />
        )}
        {/* 1. COUCHE INFÉRIEURE : Image en Noir et Blanc */}
        <div className="absolute inset-0 z-0 filter grayscale contrast-125 brightness-75 pointer-events-none">
          <Image
            src="/galerie1.png"
            alt="Cineworld B&WBackground"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        {/* 2. OVERLAY SOMBRE GLOBAL */}
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

        {/* 3. COUCHE SUPÉRIEURE : Image Couleur (Révélée par le masque) */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            maskImage: mousePos ? `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)` : 'none',
            WebkitMaskImage: mousePos ? `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)` : 'none',
          }}
        >
          <Image
            src="/galerie1.png"
            alt="Cineworld Color Reveal"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        {/* 4. CITATION OVERLAY (Apparaît au clic) */}
        {citation && (
          <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none animate-in fade-in zoom-in duration-500">
            <div className="bg-black/80 backdrop-blur-md p-8 md:p-12 max-w-4xl mx-6 border-l-4 border-yellow-500 shadow-2xl rounded-r-xl">
              <p className="text-2xl md:text-4xl text-white font-serif italic mb-6 leading-relaxed">
                "{citation.texte}"
              </p>
              <div className="text-right">
                <span className="text-yellow-500 font-black text-sm md:text-lg uppercase tracking-widest">
                  — {citation.auteur}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 5. CURSEUR LUMINEUX */}
        {mousePos && (
          <div
            className="absolute z-30 pointer-events-none w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl mix-blend-overlay transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75"
            style={{ left: mousePos.x, top: mousePos.y }}
          />
        )}

        {/* 6. TITRE PRINCIPAL (Caché si citation affichée pour lisibilité) */}
        <div className={`relative z-40 h-full flex items-center justify-center pointer-events-none transition-opacity duration-500 ${citation ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center px-6 drop-shadow-2xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter mix-blend-overlay opacity-90">
              Cinéworld Académie
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase mb-10">
              Première Académie Audiovisuelle de Djibouti
            </p>
            <Link
              href="/formations"
              className="btn-animated btn-animated-bordeaux pointer-events-auto shadow-xl"
            >
              <span className="btn-circle"></span>
              <span className="btn-text">Découvrir nos formations</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION NOTRE MISSION */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <MissionSection />



      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION CHIFFRES CLÉS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-[#C5A572] text-xs font-bold uppercase tracking-[0.3em]">
              En quelques chiffres
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight uppercase">
              Nos Résultats
            </h2>
            <div className="w-16 h-1 bg-[#8B2635] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-4xl md:text-6xl font-black text-[#C5A572]">3000+</span>
              <p className="text-white/50 text-sm md:text-base mt-3 font-bold uppercase tracking-wider">Personnes formées</p>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-black text-[#C5A572]">10+</span>
              <p className="text-white/50 text-sm md:text-base mt-3 font-bold uppercase tracking-wider">Ans d&apos;expérience</p>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-black text-[#C5A572]">100%</span>
              <p className="text-white/50 text-sm md:text-base mt-3 font-bold uppercase tracking-wider">Pratique</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION PARTENAIRES */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#8B2635] text-xs font-bold uppercase tracking-[0.3em]">
              Nos Collaborations
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-black mt-3 tracking-tight uppercase">
              Ils nous font confiance
            </h2>
            <div className="w-12 h-1 bg-[#8B2635] mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="relative w-20 h-20 md:w-28 md:h-28 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}
