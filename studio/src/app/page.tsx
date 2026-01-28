'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Award, GraduationCap, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

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

// Données pour la section Orientation
const STATS = [
  { number: "4", label: "Formations", suffix: "", icon: BookOpen },
  { number: "80", label: "Pratique", suffix: "%", icon: Award },
  { number: "150", label: "Diplômés", suffix: "+", icon: GraduationCap },
  { number: "100", label: "Certifié", suffix: "%", icon: Shield },
];

const BENEFITS = [
  "5 questions pour identifier votre profil",
  "Recommandation personnalisée",
  "Résultat instantané",
];

// Données pour les témoignages avec couleurs de cartes
const TESTIMONIALS = [
  {
    id: 1,
    quote: "C'est une grande plaisir pour moi de travailler avec vous, je vous remercie amplement pour la confiance que vous m'accordez",
    name: "Assia",
    role: "Étudiante",
    avatar: null,
    initial: "A",
    cardColor: "from-[#6e1615] to-[#8b1c1b]", // Rouge bordeaux
    textColor: "text-white",
    accentColor: "text-yellow-400"
  },
  {
    id: 2,
    quote: "Insha'Allah je vais arriver à faire un festival moi aussi grâce à ton soutien, plusieurs festivals même !",
    name: "Houmed",
    role: "Étudiant",
    avatar: "/avatar-houmed.png",
    initial: "H",
    cardColor: "from-yellow-500 to-yellow-600", // Doré
    textColor: "text-gray-900",
    accentColor: "text-[#6e1615]"
  },
  {
    id: 3,
    quote: "Je suis une actrice de théâtre, je peux jouer toutes les émotions.",
    name: "Aicha",
    role: "Actrice",
    avatar: null,
    initial: "A",
    cardColor: "from-gray-800 to-gray-900", // Noir élégant
    textColor: "text-white",
    accentColor: "text-yellow-400"
  }
];

// Composant Pile de Cartes Interactive pour Témoignages - Style Script Cinéma
function TestimonialStack() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Titre */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">
            Ils ont suivi nos formations
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-2 tracking-tight">
            TÉMOIGNAGES
          </h2>
          <div className="w-16 h-1 bg-[#6e1615] mx-auto mt-4"></div>
        </div>

        {/* Instruction */}
        <p className="text-center text-gray-400 mb-8 md:mb-12 font-medium text-base md:text-lg font-mono px-4">
          {isOpen ? "📜 Cliquez pour rassembler les scripts" : "🎬 Cliquez sur la pile pour lire les témoignages"}
        </p>

        {/* Container de la pile de scripts */}
        <div
          className={`cursor-pointer transition-all duration-500 ${isOpen
            ? 'flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-0'
            : 'relative flex justify-center items-center min-h-[420px] md:min-h-[500px]'
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Les cartes format script */}
          {TESTIMONIALS.map((testimonial, index) => {
            const sceneNumber = String(index + 1).padStart(2, '0');

            // Sur mobile ouvert : pas de transformation (empilé verticalement)
            // Sur desktop ouvert : éventail
            // Fermé : pile empilée
            const getTransform = () => {
              if (isOpen) {
                // Desktop: éventail, Mobile: aucune transformation (géré par flexbox)
                return `translateX(0) translateY(0) rotate(0deg)`;
              }
              // Fermé: pile
              return `translateX(${(index - 1) * 5}px) translateY(${index * 8}px) rotate(${(index - 1) * 3}deg)`;
            };

            return (
              <div
                key={testimonial.id}
                className={`w-[280px] h-[360px] md:w-[300px] md:h-[400px] rounded-sm shadow-2xl transition-all duration-700 ease-out flex-shrink-0 ${isOpen ? 'relative' : 'absolute'
                  }`}
                style={{
                  background: 'linear-gradient(135deg, #f5f5dc 0%, #e8e4c9 50%, #d4c89e 100%)',
                  transform: getTransform(),
                  zIndex: isOpen ? 10 : TESTIMONIALS.length - index,
                  boxShadow: isOpen
                    ? '0 20px 50px -12px rgba(0, 0, 0, 0.5)'
                    : '0 10px 40px -5px rgba(0, 0, 0, 0.4)',
                }}
              >

                {/* Trous de perforation gauche */}
                <div className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 flex flex-col gap-8 md:gap-12">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-400/40 shadow-inner"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-400/40 shadow-inner"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-400/40 shadow-inner"></div>
                </div>

                {/* Marge rouge gauche */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-red-400/60"></div>

                {/* Contenu du script */}
                <div className="h-full pl-8 md:pl-12 pr-4 md:pr-5 py-4 md:py-5 flex flex-col font-mono text-gray-800 overflow-hidden">

                  {/* En-tête du script - Compact */}
                  <div className="flex justify-between items-center border-b border-gray-400/40 pb-2 mb-3">
                    <div>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-wider">Cineworld Académie</p>
                      <p className="text-[10px] md:text-xs text-gray-600 font-bold">TÉMOIGNAGE #{sceneNumber}</p>
                    </div>
                    <p className="text-[8px] md:text-[10px] text-gray-400">🎬</p>
                  </div>

                  {/* Scène - Plus compact */}
                  <p className="text-[9px] md:text-[10px] font-bold text-gray-600 tracking-wide text-center mb-2">
                    SCÈNE {sceneNumber} - INT. ACADÉMIE
                  </p>

                  {/* Direction de scène */}
                  <p className="text-[9px] md:text-[10px] text-gray-500 italic mb-2 text-center">
                    ({testimonial.name} face caméra)
                  </p>

                  {/* Nom du personnage - centré */}
                  <p className="text-center font-bold text-xs md:text-sm text-gray-800 uppercase tracking-wider mb-2">
                    {testimonial.name}
                  </p>

                  {/* Dialogue/Citation - Zone principale */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden mb-3">
                    <p className="text-[11px] md:text-xs leading-relaxed text-gray-700 text-center px-1 line-clamp-5">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Pied de page - Compact */}
                  <div className="border-t border-gray-300/50 pt-2 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={24}
                            height={24}
                            className="rounded-full border border-gray-400"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[#6e1615] flex items-center justify-center text-white text-[10px] font-bold">
                            {testimonial.initial}
                          </div>
                        )}
                        <div>
                          <p className="text-[10px] md:text-xs font-bold text-gray-700">{testimonial.name}</p>
                          <p className="text-[8px] md:text-[10px] text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-[8px] text-gray-400">TAKE 1</p>
                    </div>
                  </div>
                </div>

                {/* Effet de papier usé */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-gray-400/20 to-transparent"></div>
              </div>
            );
          })}
        </div>

        {/* Indication visuelle */}
        <p className="text-center text-gray-500 text-sm mt-8 font-mono">
          {isOpen ? "📄 3 scripts de témoignages" : "📚 3 témoignages à découvrir"}
        </p>
      </div>
    </section>
  );
}

// Composant Section Orientation Carrière avec animations
function OrientationCarriereSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Pattern SVG subtil en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Barre latérale couleur institutionnelle */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#6e1615] via-yellow-500 to-[#6e1615] hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Titre */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
            Trouvez votre voie
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
            ORIENTATION CARRIÈRE
          </h2>
          <div className="w-16 h-1 bg-[#6e1615] mx-auto mt-4"></div>
        </div>

        {/* Card CTA - Design enrichi */}
        <div className={`bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 hover:border-[#6e1615]/50 transition-all duration-700 overflow-hidden relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
          {/* Décoration visuelle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6e1615]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Colonne gauche - Contenu (7 colonnes) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#6e1615]/20 border border-[#6e1615]/30 px-4 py-2 rounded-lg mb-6">
                <div className="w-2 h-2 rounded-full bg-[#6e1615] animate-pulse" />
                <GraduationCap className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Quiz Gratuit</span>
              </div>

              {/* Hook principal */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Votre carrière commence{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-yellow-500">ici</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#6e1615]/60 -z-0" />
                </span>
                <span className="text-gray-500">.</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">
                Faites le test d'orientation pour découvrir la formation qui correspond à vos aspirations professionnelles.
              </p>

              {/* Liste d'avantages avec fond */}
              <ul className="space-y-3 mb-8 bg-black/30 p-5 rounded-xl border border-gray-700/50">
                {BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6e1615] flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Bouton CTA avec animation */}
              <Link
                href="/formations#quiz"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#6e1615] text-white font-bold uppercase tracking-wider rounded-lg hover:bg-[#8b1c1b] transition-all duration-300 shadow-lg shadow-[#6e1615]/30 hover:shadow-xl hover:shadow-[#6e1615]/40 hover:scale-105"
              >
                <span>Découvrir mon profil</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Métadonnées en bas */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-gray-500 mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>2 minutes</span>
                </div>
                <div className="w-px h-4 bg-gray-700 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Sans engagement</span>
                </div>
                <div className="w-px h-4 bg-gray-700 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Certifié</span>
                </div>
              </div>
            </div>

            {/* Colonne droite - Statistiques (5 colonnes) */}
            <div className={`lg:col-span-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-black/40 border border-gray-700 rounded-xl p-5 text-center hover:border-[#6e1615]/50 hover:bg-black/60 transition-all duration-300 cursor-default"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="p-3 rounded-full bg-[#6e1615]/20 group-hover:bg-[#6e1615]/30 transition-colors">
                          <Icon className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                          <div className="text-3xl md:text-4xl font-black text-white">
                            {stat.number}
                            <span className="text-yellow-500">{stat.suffix}</span>
                          </div>
                          <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mention académique */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Excellence académique depuis 2014
                </p>
              </div>
            </div>
          </div>
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
    }, 2000);
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
      <OrientationCarriereSection />

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
      <TestimonialStack />

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

