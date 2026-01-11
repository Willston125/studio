'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      className="relative w-full h-screen overflow-hidden bg-black cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* 1. COUCHE INFÉRIEURE : Image en Noir et Blanc (Grayscale) */}
      <div className="absolute inset-0 z-0 filter grayscale contrast-125 brightness-75">
        <Image
          src="/galerie1.png"
          alt="Cineworld B&WBackground"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* 2. OVERLAY SOMBRE GLOBAL (Pour lisibilité texte sur le fond N&B) */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* 3. COUCHE SUPÉRIEURE : Image Couleur (Révélée par le masque) */}
      <div
        className="absolute inset-0 z-20"
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

      {/* 4. CURSEUR LUMINEUX (Optionnel, ajoute un halo) */}
      {mousePos && (
        <div
          className="absolute z-30 pointer-events-none w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl mix-blend-overlay transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75"
          style={{ left: mousePos.x, top: mousePos.y }}
        />
      )}

      {/* 5. CONTENU TEXTE (Au-dessus de tout) */}
      <div className="relative z-40 h-full flex items-center justify-center pointer-events-none">
        <div className="text-center px-6 drop-shadow-2xl">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter mix-blend-overlay opacity-90">
            CINEWORLD ACADÉMIE
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase">
            Première Académie Audiovisuelle de Djibouti
          </p>
        </div>
      </div>
    </main>
  );
}
