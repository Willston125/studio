'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Info, ArrowRight } from 'lucide-react';

// Données des projets
const PROJETS = [
    {
        slug: 'doute-force',
        titre: 'Doute forcé',
        type: 'Fiction-dramatique',
        badge: 'Nouvelle Sortie',
        saison: 'Saison 1',
        episodes: '1 Épisodes',
        Auteur: 'Abdoulwabe Mohamed Ali',
        synopsis: "Hassan et Hela partagent une complicité profonde à Djibouti-ville, mais Hassan est fiancé, lié par une promesse traditionnelle. Pris entre deux amours, un mensonge et une suite de tensions font éclater la vérité. Humiliée, la fiancée rompt, tandis que Hela, blessée, décide de se battre.",
        image: '/affiche-film-doute.png',
        featured: true,
        teaser: '#',
    },
    {
        slug: 'films',
        titre: 'Films',
        type: 'Fiction',
        synopsis: "Campagne publicitaire pour la promotion du tourisme à Djibouti.",
        image: '/galerie1.png',
        featured: false,
    },
    {
        slug: 'Serie - La boussole Digitale',
        titre: 'LA BOUSSOLE DIGITALE',
        type: 'SERIE',
        synopsis: "Un documentaire sur les traditions et la culture djiboutienne.",
        image: '/galerie2.png',
        featured: false,
    },
    {
        slug: 'Collaboration Artistique',
        titre: 'Collaboration Artistique',
        type: 'DOCUMENTAIRE',
        synopsis: "Clip musical réalisé pour un artiste local émergent.",
        image: '/galerie3.png',
        featured: false,
    },
];

export default function ProductionPage() {
    const featuredProject = PROJETS.find(p => p.featured);
    const otherProjects = PROJETS.filter(p => !p.featured);

    return (
        <main className="bg-black min-h-screen">
            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HEADER SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-24 border-b border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-[#C5A572] text-xs font-bold uppercase tracking-[0.3em]">Cinéworld Studio</span>
                            <h1 className="text-3xl md:text-5xl font-black text-white mt-3 uppercase tracking-tight">
                                Nos Dernières <br />Réalisations
                            </h1>
                            <div className="w-16 h-1 bg-[#C5A572] mt-4" />
                        </div>
                        <Link
                            href="#all-projects"
                            className="hidden md:flex items-center text-gray-400 hover:text-white transition gap-2"
                        >
                            Voir tout le portfolio <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* ═══════════════════════════════════════════════════════════════════ */}
                    {/* FEATURED PROJECT (HERO) */}
                    {/* ═══════════════════════════════════════════════════════════════════ */}
                    {featuredProject && (
                        <div id="featured" className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden group mb-12 shadow-2xl border border-gray-800 scroll-mt-28">

                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={featuredProject.image}
                                    alt={featuredProject.titre}
                                    fill
                                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase mb-4 inline-block">
                                    {featuredProject.badge}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                                    {featuredProject.titre}
                                </h2>
                                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-300 text-sm mb-6">
                                    <span className="border border-gray-600 px-2 py-0.5 rounded">{featuredProject.type}</span>
                                    <span>{featuredProject.saison}</span>
                                    <span className="hidden md:inline">•</span>
                                    <span>{featuredProject.episodes}</span>
                                    <span className="hidden md:inline">•</span>
                                    <span>Auteur : {featuredProject.Auteur}</span>
                                </div>
                                <p className="text-gray-400 text-lg mb-8 line-clamp-2">
                                    {featuredProject.synopsis}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={featuredProject.teaser || '#'}
                                        className="btn-animated btn-animated-white"
                                    >
                                        <span className="btn-circle"></span>
                                        <Play className="w-5 h-5 btn-icon" />
                                        <span className="btn-text">Voir le Teaser</span>
                                    </Link>
                                    <Link
                                        href={`/production/${featuredProject.slug}`}
                                        className="btn-animated btn-animated-yellow"
                                    >
                                        <span className="btn-circle"></span>
                                        <Info className="w-5 h-5 btn-icon" />
                                        <span className="btn-text">Plus d'infos</span>
                                    </Link>
                                </div>

                                {/* Partenaires Intégrés - Version Large Mobile */}
                                <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-center gap-4">
                                    <span className="text-sm text-gray-300 uppercase tracking-widest font-bold">Avec le soutien de :</span>
                                    <div className="flex flex-wrap items-center gap-6 opacity-100">
                                        <div className="relative w-24 h-12 md:w-20 md:h-10 grayscale-0 hover:grayscale-0 transition duration-300">
                                            <Image src="/unicef.png" alt="Unicef" fill className="object-contain" />
                                        </div>
                                        <div className="relative w-24 h-12 md:w-20 md:h-10 grayscale-0 hover:grayscale-0 transition duration-300">
                                            <Image src="/ambassa-de-france.png" alt="France" fill className="object-contain" />
                                        </div>
                                        <div className="relative w-24 h-10 md:w-20 md:h-8 grayscale-0 hover:grayscale-0 transition duration-300">
                                            <Image src="/logo_bdc.png" alt="BDC" fill className="object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ═══════════════════════════════════════════════════════════════════ */}
                    {/* OTHER PROJECTS GRID */}
                    {/* ═══════════════════════════════════════════════════════════════════ */}
                    <div id="all-projects" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {otherProjects.map((projet) => (
                            <Link
                                key={projet.slug}
                                href={`/production/${projet.slug}`}
                                className="relative group aspect-[3/4] overflow-hidden bg-black cursor-pointer block"
                            >
                                {/* Image de fond */}
                                <Image
                                    src={projet.image}
                                    alt={projet.titre}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Filtre sombre par défaut */}
                                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />

                                {/* Dégradé Gold au survol */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/90 via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Type en haut — glisse au survol */}
                                <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                                    <span className="text-white text-xs font-black tracking-widest uppercase drop-shadow-md">
                                        {projet.type}
                                    </span>
                                </div>

                                {/* Titre centré */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-white text-center leading-tight drop-shadow-lg uppercase">
                                        {projet.titre}
                                    </h3>
                                </div>

                                {/* Bouton Détails en bas */}
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                                    <span className="border border-white text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 group-hover:bg-white group-hover:text-black transition-colors duration-300 drop-shadow-md">
                                        Détails →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>


        </main >
    );
}
