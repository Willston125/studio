'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Clock, Star, Sparkles, Monitor, Palette, Video, TrendingUp } from 'lucide-react';

const FORMATIONS = [
    {
        id: 1,
        icon: Monitor,
        module: "MODULE 1",
        titre: "CRÉATION DE SITE WEB AVEC L'IA",
        slogan: "De l'idée au site en ligne sans coder",
        duree: "5 Jours",
        sessions: "Sessions de 1h30",
        tarif: "15.000 FDJ",
        hoverImage: "/hover-web.png",
        programme: [
            "Jour 1 : L'art du prompting & structure",
            "Jour 2 : Design UI/UX par IA",
            "Jour 3 : Génération de contenu (copywriting + images)",
            "Jour 4 : Assemblage & Intégration No-Code",
            "Jour 5 : Mise en ligne & Optimisation SEO"
        ]
    },
    {
        id: 2,
        icon: Palette,
        module: "MODULE 2",
        titre: "DESIGN GRAPHIQUE PRO",
        slogan: "Maîtrisez la suite visuelle moderne",
        duree: "12 Jours",
        sessions: "Sessions de 1h30",
        tarif: "10.000 FDJ",
        hoverImage: "/hover-design.png",
        programme: [
            "Jours 1-3 : Canva Expert",
            "Jours 4-8 : Photoshop CC (détourage, retouche, affiches)",
            "Jours 9-12 : Figma & UI Design"
        ]
    },
    {
        id: 3,
        icon: Video,
        module: "MODULE 3",
        titre: "RÉALISATION & EDITING VIDÉO",
        slogan: "Tournez, Montez, Publiez",
        duree: "15 Jours",
        sessions: "Sessions de 1h30",
        tarif: "13.000 FDJ",
        hoverImage: "/hover-editing.png",
        isBestSeller: true,
        programme: [
            "Phase 1 (J1-3) : Pré-production — Script, Storyboard",
            "Phase 2 (J4-8) : Tournage — Cadrage, Son, Éclairage",
            "Phase 3 (J9-14) : Post-Production — Montage, Sound Design, Colorimétrie",
            "Phase 4 (J15) : Export multi-plateformes"
        ]
    },
    {
        id: 4,
        icon: TrendingUp,
        module: "MODULE 4",
        titre: "MARKETING DIGITAL & GESTION DE PROJET",
        slogan: "Transformez vos talents en business",
        duree: "8 Jours",
        sessions: "Sessions de 1h30",
        tarif: "7.000 FDJ",
        hoverImage: "/hover-digital.png",
        programme: [
            "Jours 1-3 : Gestion de Projet (Cahier des charges, Devis, Planning)",
            "Jours 4-6 : Stratégie Marketing (Persona, Branding, Calendrier)",
            "Jours 7-8 : Publicité Facebook/Instagram Ads"
        ]
    }
];

export default function FormationsPage() {
    const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const scrollToFormations = () => {
        document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="bg-black min-h-screen">

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 1 : HERO AVEC EFFET CURSEUR LUMINEUX */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section
                className="relative w-full h-screen overflow-hidden cursor-none select-none"
                onMouseMove={handleMouseMove}
            >
                {/* Image en Noir et Blanc */}
                <div className="absolute inset-0 z-0 filter grayscale contrast-125 brightness-75 pointer-events-none">
                    <Image
                        src="/groupeeleve.png"
                        alt="Étudiants Cineworld"
                        fill
                        className="object-cover object-top"
                        priority
                        quality={100}
                    />
                </div>

                {/* Overlay sombre */}
                <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

                {/* Image Couleur (révélée par curseur) */}
                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        maskImage: mousePos ? `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)` : 'none',
                        WebkitMaskImage: mousePos ? `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)` : 'none',
                    }}
                >
                    <Image
                        src="/groupeeleve.png"
                        alt="Étudiants Cineworld Couleur"
                        fill
                        className="object-cover object-top"
                        priority
                        quality={100}
                    />
                </div>

                {/* Curseur lumineux */}
                {mousePos && (
                    <div
                        className="absolute z-30 pointer-events-none w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl mix-blend-overlay transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75"
                        style={{ left: mousePos.x, top: mousePos.y }}
                    />
                )}

                {/* Titre principal */}
                <div className="relative z-40 h-full flex flex-col items-center justify-center pointer-events-none">
                    <div className="text-center px-6 drop-shadow-2xl">
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
                            NOS FORMATIONS
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest uppercase">
                            Développez vos talents créatifs
                        </p>
                    </div>
                </div>

                {/* Indicateur de scroll */}
                <button
                    onClick={scrollToFormations}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center text-white/60 hover:text-yellow-500 transition-colors cursor-pointer pointer-events-auto animate-bounce"
                >
                    <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
                    <ChevronDown size={24} />
                </button>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 2 : CATALOGUE DES FORMATIONS */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="catalogue" className="py-20 px-6 md:px-12 lg:px-20">

                {/* Titre section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        NOTRE CATALOGUE
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                {/* Grille des formations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {FORMATIONS.map((formation) => {
                        const IconComponent = formation.icon;
                        return (
                            <div
                                key={formation.id}
                                className="group relative bg-black border border-gray-800 p-8 transition-all duration-300 hover:border-l-4 hover:border-l-yellow-500 hover:bg-gray-900/30 overflow-hidden"
                            >
                                {/* Image Hover Background */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                    <Image
                                        src={formation.hoverImage}
                                        alt=""
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>

                                {/* Badge Best-Seller */}
                                {formation.isBestSeller && (
                                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-yellow-500 text-black px-3 py-1 text-xs font-bold uppercase">
                                        <Star size={12} fill="currentColor" />
                                        Best-Seller
                                    </div>
                                )}

                                {/* Header */}
                                <div className="relative z-10 flex items-start gap-4 mb-6">
                                    <div className="p-3 border border-gray-700 group-hover:border-yellow-500/50 transition-colors bg-black/50">
                                        <IconComponent size={28} className="text-yellow-500" />
                                    </div>
                                    <div>
                                        <span className="text-yellow-500 text-xs font-bold tracking-widest">
                                            {formation.module}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                                            {formation.titre}
                                        </h3>
                                    </div>
                                </div>

                                {/* Slogan */}
                                <p className="relative z-10 text-white/60 italic mb-6 text-lg">
                                    "{formation.slogan}"
                                </p>

                                {/* Infos */}
                                <div className="relative z-10 flex flex-wrap gap-4 mb-6 text-sm">
                                    <div className="flex items-center gap-2 text-white/80">
                                        <Clock size={16} className="text-yellow-500" />
                                        <span>{formation.duree}</span>
                                        <span className="text-white/40">({formation.sessions})</span>
                                    </div>
                                    <div className="text-yellow-500 font-bold text-lg">
                                        {formation.tarif}
                                    </div>
                                </div>

                                {/* Programme */}
                                <div className="relative z-10 border-t border-gray-800 pt-6">
                                    <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                                        Programme
                                    </h4>
                                    <ul className="space-y-2">
                                        {formation.programme.map((item, index) => (
                                            <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                                                <span className="text-yellow-500 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 3 : PACK CREATOR 360° */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="group relative border-2 border-yellow-500 bg-gradient-to-br from-yellow-500/10 to-transparent p-10 md:p-14 overflow-hidden">

                        {/* Image Hover Background for Pack */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                            <Image
                                src="/hover-pack360.png"
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Badge */}
                        <div className="absolute -top-4 left-8 z-20 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 font-black text-sm uppercase">
                            <Sparkles size={16} />
                            L'Offre Ultime
                        </div>

                        {/* Contenu */}
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
                                PACK "CREATOR 360°"
                            </h2>
                            <p className="text-yellow-500 text-lg font-medium mb-8">
                                Parcours intensif complet
                            </p>

                            {/* Infos */}
                            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                                <div className="flex items-center justify-center gap-2 text-white">
                                    <Clock size={20} className="text-yellow-500" />
                                    <span className="text-xl">Durée : <strong>1 Mois</strong></span>
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-yellow-500">
                                    45.000 FDJ
                                </div>
                            </div>

                            <p className="text-white/60 text-sm mb-4">
                                Paiement possible en 2 fois
                            </p>

                            {/* Promesse */}
                            <div className="bg-black/50 p-6 mb-10 border-l-4 border-yellow-500">
                                <p className="text-white/90 text-lg italic leading-relaxed">
                                    « En seulement 30 jours, transformez-vous d'un simple débutant en un professionnel du multimédia accompli. Vous serez en mesure de créer des contenus percutants, de mener à bien des projets complets et d'atteindre des résultats chiffrés significatifs. »
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/inscription"
                                className="inline-block bg-[#6e1615] text-white px-10 py-4 font-bold text-lg uppercase tracking-wider hover:bg-[#8b1c1b] transition-all shadow-lg hover:shadow-yellow-500/20"
                            >
                                Candidater Maintenant
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 4 : CTA FINAL */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 px-6 border-t border-gray-800">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
                        PRÊT À REJOINDRE L'AVENTURE ?
                    </h2>
                    <p className="text-white/60 mb-8">
                        Rejoignez la première académie audiovisuelle de Djibouti
                    </p>
                    <Link
                        href="/inscription"
                        className="inline-block bg-[#6e1615] text-white px-12 py-4 font-bold uppercase tracking-wider hover:bg-[#8b1c1b] transition-all"
                    >
                        S'inscrire
                    </Link>
                </div>
            </section>

        </main>
    );
}
