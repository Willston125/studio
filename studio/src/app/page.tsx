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

export default function Home() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [citation, setCitation] = useState<{ auteur: string; texte: string } | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * CITATIONS.length);
    setCitation(CITATIONS[randomIndex]);

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setCitation(null);
    }, 2000);
    setTimeoutId(id);
  };

  return (
    <main className="bg-black">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION HERO */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full h-screen overflow-hidden cursor-none select-none"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* 1. COUCHE INFÉRIEURE : Image en Noir et Blanc */}
        <div className="absolute inset-0 z-0 filter grayscale contrast-125 brightness-75 pointer-events-none">
          <Image
            src="/galerie1.png"
            alt="Cineworld B&WBackground"
            fill
            className="object-cover"
            priority
            quality={100}
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
            quality={100}
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
              className="inline-block px-8 py-4 bg-[#6e1615] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#8b1c1b] transition-all transform hover:scale-105 pointer-events-auto border border-white/10 shadow-xl"
            >
              {/* CTA visible */}
              Découvrir nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION PARTENAIRES */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Titre */}
          <div className="text-center mb-16">
            <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
              Nos Collaborations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 tracking-tight">
              ILS NOUS FONT CONFIANCE
            </h2>
            <div className="w-16 h-1 bg-[#6e1615] mx-auto mt-4"></div>
          </div>

          {/* Grille de Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="relative w-28 h-28 md:w-36 md:h-36 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110"
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

