'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

export default function Home() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [citation, setCitation] = useState<{ auteur: string; texte: string } | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    // Choisir une citation aléatoire différente de la précédente si possible (simple random ici)
    const randomIndex = Math.floor(Math.random() * CITATIONS.length);
    setCitation(CITATIONS[randomIndex]);

    // Clear l'ancien timer si on reclique vite
    if (timeoutId) clearTimeout(timeoutId);

    // Faire disparaître après 6 secondes
    const id = setTimeout(() => {
      setCitation(null);
    }, 6000);
    setTimeoutId(id);
  };

  return (
    <main
      className="relative w-full h-screen overflow-hidden bg-black cursor-none select-none"
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
            CINEWORLD ACADÉMIE
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase mb-8">
            Première Académie Audiovisuelle de Djibouti
          </p>
          <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold animate-pulse">
            [ Cliquez n'importe où pour l'inspiration ]
          </div>
        </div>
      </div>
    </main>
  );
}
