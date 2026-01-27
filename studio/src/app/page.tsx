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
      {/* SECTION CHIFFRES CLÉS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-4xl md:text-6xl font-black text-yellow-500">3000+</span>
              <p className="text-white/70 text-sm md:text-base mt-2 uppercase tracking-wider">Personnes formées</p>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-black text-yellow-500">10+</span>
              <p className="text-white/70 text-sm md:text-base mt-2 uppercase tracking-wider">Ans d'expérience</p>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-black text-yellow-500">100%</span>
              <p className="text-white/70 text-sm md:text-base mt-2 uppercase tracking-wider">Pratique</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION ORIENTATION CARRIÈRE - CTA QUIZ */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          {/* Titre */}
          <div className="text-center mb-12">
            <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
              Trouvez votre voie
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
              ORIENTATION CARRIÈRE
            </h2>
            <div className="w-16 h-1 bg-[#6e1615] mx-auto mt-4"></div>
          </div>

          {/* Card CTA - Design enrichi */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 hover:border-[#6e1615]/50 transition-all duration-500 overflow-hidden relative">
            {/* Décoration visuelle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6e1615]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Colonne gauche - Contenu */}
              <div className="text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#6e1615]/20 px-4 py-2 rounded-full mb-6">
                  <span className="text-2xl">🎯</span>
                  <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Quiz Gratuit</span>
                </div>

                {/* Hook principal */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Votre carrière commence ici.
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Faites le test pour trouver la compétence qui changera votre avenir.
                </p>

                {/* Liste d'avantages */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-[#6e1615] rounded-full flex items-center justify-center text-xs">✓</span>
                    <span>5 questions pour identifier votre profil</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-[#6e1615] rounded-full flex items-center justify-center text-xs">✓</span>
                    <span>Recommandation personnalisée</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-[#6e1615] rounded-full flex items-center justify-center text-xs">✓</span>
                    <span>Résultat instantané</span>
                  </li>
                </ul>

                {/* Bouton CTA */}
                <Link
                  href="/formations#quiz"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#6e1615] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#8b1c1b] transition-all transform hover:scale-105 border border-white/10 shadow-xl"
                >
                  <span>Découvrir mon profil</span>
                  <span className="text-xl">→</span>
                </Link>

                {/* Sous-texte */}
                <p className="text-gray-500 text-sm mt-4 flex items-center justify-center md:justify-start gap-4">
                  <span className="flex items-center gap-1">
                    <span>⏱️</span> 2 minutes
                  </span>
                  <span>•</span>
                  <span>Sans engagement</span>
                </p>
              </div>

              {/* Colonne droite - Statistiques visuelles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">4</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Formations</div>
                </div>
                <div className="bg-black/40 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">80%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Pratique</div>
                </div>
                <div className="bg-black/40 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">150+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Diplômés</div>
                </div>
                <div className="bg-black/40 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">100%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Certifié</div>
                </div>
              </div>
            </div>
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

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION TÉMOIGNAGES */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
              Ils ont suivi nos formations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 tracking-tight">
              TÉMOIGNAGES
            </h2>
            <div className="w-16 h-1 bg-[#6e1615] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-[#6e1615] mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                C'est une grande plaisir pour moi de travailler avec vous, je vous remercie amplement pour la confiance que vous m'accordez
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6e1615] rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <p className="font-bold text-gray-900">Assia</p>
                  <p className="text-sm text-gray-500">Étudiante</p>
                </div>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-[#6e1615] mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                Insha'Allah je vais arriver à faire un festival moi aussi grâce à ton soutien, plusieurs festivals même !
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6e1615] rounded-full flex items-center justify-center text-white font-bold">H</div>
                <div>
                  <p className="font-bold text-gray-900">Houmed</p>
                  <p className="text-sm text-gray-500">Étudiant</p>
                </div>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-[#6e1615] mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                Je suis une actrice de théâtre, je peux jouer toutes les émotions.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6e1615] rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <p className="font-bold text-gray-900">Aicha</p>
                  <p className="text-sm text-gray-500">Actrice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FOOTER */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-black text-white py-16 border-t-4 border-[#6e1615]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Formations */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Formations</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/formations" className="hover:text-white transition-colors">Site Web avec l'IA</Link></li>
                <li><Link href="/formations" className="hover:text-white transition-colors">Design Graphique</Link></li>
                <li><Link href="/formations" className="hover:text-white transition-colors">Réalisation Vidéo</Link></li>
                <li><Link href="/formations" className="hover:text-white transition-colors">Marketing Digital</Link></li>
                <li><Link href="/formations" className="hover:text-white transition-colors">Pack Creator 360°</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  <span>Djibouti, Aviation<br />Institut "DIHM"</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📧</span>
                  <a href="mailto:cineworld@cineworldacademie.com" className="hover:text-white transition-colors">cineworld@cineworldacademie.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span>📱</span>
                  <a href="https://wa.me/25377145306" className="hover:text-white transition-colors">+253 77 14 53 06</a>
                </li>
              </ul>
            </div>

            {/* Réseaux */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Réseaux Sociaux</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors">
                  <span>📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors">
                  <span>📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors">
                  <span>📺</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © 2026 Cineworld Académie - Tous droits réservés
          </div>
        </div>
      </footer>
    </main>
  );
}

