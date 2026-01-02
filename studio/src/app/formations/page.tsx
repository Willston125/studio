'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, BookOpen, Users } from 'lucide-react';

// --- DONNÉES PÉDAGOGIQUES ---
const formationsData = [
    {
        id: 'initie',
        icon: '📱',
        title: 'Création Digitale & Réseaux',
        niveau: 'Niveau 1 - Initiation',
        category: 'debutant',
        prix: '5.000 FDJ',
        duree: '8 Jours',
        modules: 4,
        accroche: 'Maîtrisez votre image sur les réseaux sociaux. Idéal pour débutants et entrepreneurs.',
        programmeDetails: [
            { titre: 'Théorie de l\'image', desc: 'Cadrage, règle des tiers, lumière naturelle.' },
            { titre: 'Design Graphique', desc: 'Création de logos et affiches sur Canva.' },
            { titre: 'Montage Mobile', desc: 'Rythme et effets sur CapCut / VN.' },
            { titre: 'Stratégie Sociale', desc: 'Algorithmes TikTok/Instagram et Storytelling.' }
        ],
        metiers: ['Community Manager', 'Créateur de Contenu', 'Chargé de Com.'],
    },
    {
        id: 'pro',
        icon: '🎥',
        title: 'Vidéaste Professionnel',
        niveau: 'Niveau 2 - Intermédiaire',
        category: 'intermediaire',
        prix: '10.000 FDJ',
        duree: '12 Jours',
        modules: 4,
        badge: 'LE PLUS POPULAIRE',
        accroche: 'Le standard de l\'industrie. Devenez un technicien polyvalent capable de gérer un client.',
        programmeDetails: [
            { titre: 'Caméra Pro', desc: 'Maîtrise Sony/BlackMagic, exposition, optiques.' },
            { titre: 'Lumière & Son', desc: 'Éclairage 3 points, prise de son interview.' },
            { titre: 'Post-Production', desc: 'Montage avancé sur Premiere Pro, étalonnage.' },
            { titre: 'Business', desc: 'Devis, facturation et gestion client.' }
        ],
        metiers: ['Monteur Freelance', 'Cadreur TV (JRI)', 'Réalisateur Clips'],
    },
    {
        id: 'expert',
        icon: '🎬',
        title: 'Réalisation Cinéma',
        niveau: 'Niveau 3 - Expert',
        category: 'expert',
        prix: '20.000 FDJ',
        duree: '23 Jours',
        modules: 4,
        accroche: 'Pour les futurs réalisateurs. Écriture, direction d\'acteurs et production de film.',
        programmeDetails: [
            { titre: 'Scénario', desc: 'Structure narrative, découpage technique.' },
            { titre: 'Mise en Scène', desc: 'Direction d\'acteurs, grammaire de l\'image.' },
            { titre: 'Production', desc: 'Gestion d\'équipe technique, plan de travail.' },
            { titre: 'Projet Final', desc: 'Réalisation complète d\'un court-métrage.' }
        ],
        metiers: ['Réalisateur', 'Chef Opérateur', 'Assistant Réalisateur'],
    }
];

export default function FormationsPage() {
    const [openCardId, setOpenCardId] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('tous');

    const toggleCard = (id: string) => {
        setOpenCardId(openCardId === id ? null : id);
    };

    const filteredFormations = activeFilter === 'tous'
        ? formationsData
        : formationsData.filter(f => f.category === activeFilter);

    return (
        <div className="min-h-screen bg-white">

            {/* HEADER (Rappel Navbar) */}
            <nav className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-12">
                <div className="font-black text-xl uppercase tracking-tighter">
                    CINEWORLD<span className="text-[#D4AF37]">ACADÉMIE</span>
                </div>
                <Link href="/" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">
                    ← RETOUR ACCUEIL
                </Link>
            </nav>

            {/* TITRE */}
            <section className="py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-6">
                    Nos Programmes <span className="text-[#D4AF37]">Académiques</span>
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-8">
                    Des cursus certifiants conçus pour l'emploi. Cliquez sur <span className="font-bold text-black">( + )</span> pour voir le détail des modules.
                </p>

                {/* FILTRES PAR CATÉGORIE (Style Edule) */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {[
                        { label: 'Tous les cours', value: 'tous' },
                        { label: 'Débutant', value: 'debutant' },
                        { label: 'Intermédiaire', value: 'intermediaire' },
                        { label: 'Expert', value: 'expert' }
                    ].map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`
                px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all
                ${activeFilter === filter.value
                                    ? 'bg-black text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* GRILLE DES CARTES */}
            <section className="pb-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">

                {filteredFormations.map((formation) => {
                    const isOpen = openCardId === formation.id;
                    const isPro = formation.id === 'pro';

                    return (
                        <div
                            key={formation.id}
                            className={`
                relative rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 shadow-sm
                ${isOpen ? 'ring-2 ring-[#D4AF37] shadow-xl' : 'hover:shadow-lg'}
                ${isPro && !isOpen ? 'md:-translate-y-4 shadow-md' : ''}
              `}
                        >
                            {/* Badge Populaire */}
                            {formation.badge && (
                                <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 uppercase z-10">
                                    {formation.badge}
                                </div>
                            )}

                            {/* EN-TÊTE DE LA CARTE (Toujours visible) */}
                            <div className={`p-8 ${isPro ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>

                                {/* Avatar Formateur + Badge Niveau (Style Edule) */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/mentor-affiche.png"
                                            alt="Ali William - Formateur"
                                            width={48}
                                            height={48}
                                            className="rounded-full border-2 border-gray-200"
                                        />
                                        <div>
                                            <div className="text-xs font-bold text-gray-500">Ali William</div>
                                            <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${isPro ? 'bg-[#D4AF37] text-black' : 'bg-green-100 text-green-700'}`}>
                                                {formation.category}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-4xl">{formation.icon}</div>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 leading-tight">{formation.title}</h3>
                                <p className={`text-xs font-bold uppercase tracking-wide mb-4 ${isPro ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
                                    {formation.niveau}
                                </p>
                                <p className={`text-sm mb-6 leading-relaxed ${isPro ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {formation.accroche}
                                </p>

                                {/* Icônes Informatives (Style Edule) */}
                                <div className={`flex items-center gap-4 mb-6 text-xs ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{formation.duree}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="w-4 h-4" />
                                        <span>{formation.modules} Modules</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>Max 15</span>
                                    </div>
                                </div>

                                <div className={`border-t pt-4 flex justify-between items-end ${isPro ? 'border-gray-800' : 'border-gray-100'}`}>
                                    <div>
                                        <span className="block text-2xl font-black">{formation.prix}</span>
                                    </div>

                                    {/* BOUTON (+) TOGGLE */}
                                    <button
                                        onClick={() => toggleCard(formation.id)}
                                        className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors border
                      ${isOpen
                                                ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                                                : isPro ? 'bg-white text-black border-white hover:bg-[#D4AF37]' : 'bg-black text-white border-black hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black'}
                    `}
                                    >
                                        {isOpen ? '−' : '+'}
                                    </button>
                                </div>
                            </div>

                            {/* DÉTAILS (Visible si isOpen est true) */}
                            {isOpen && (
                                <div className="bg-white p-8 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">

                                    <div className="mb-8">
                                        <h4 className="font-bold text-sm mb-4 text-[#D4AF37] uppercase tracking-wider">Programme Détaillé</h4>
                                        <ul className="space-y-4">
                                            {formation.programmeDetails.map((mod, index) => (
                                                <li key={index} className="flex gap-3">
                                                    <span className="text-xs font-bold bg-gray-100 text-gray-500 w-6 h-6 flex items-center justify-center rounded-full shrink-0">
                                                        {index + 1}
                                                    </span>
                                                    <div>
                                                        <strong className="block text-sm font-bold text-gray-900">{mod.titre}</strong>
                                                        <span className="text-xs text-gray-500">{mod.desc}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#F9FAFB] p-4 rounded-lg mb-8">
                                        <h4 className="font-bold text-xs mb-2 text-gray-400 uppercase">Débouchés Métiers</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {formation.metiers.map((metier, idx) => (
                                                <span key={idx} className="text-xs font-semibold bg-white border border-gray-200 px-2 py-1 rounded text-gray-700">
                                                    {metier}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/inscription?pack=${formation.id}`}
                                        className="block w-full text-center bg-black text-white font-bold py-4 rounded hover:bg-[#D4AF37] hover:text-black transition-all uppercase text-sm tracking-wide"
                                    >
                                        S'inscrire à ce cursus
                                    </Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
