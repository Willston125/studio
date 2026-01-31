'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Info, ArrowRight } from 'lucide-react';

// Données des projets
const PROJETS = [
    {
        slug: 'doute-forcé',
        titre: 'Doute forcé',
        type: 'Fiction-dramatique',
        badge: 'Nouvelle Sortie',
        saison: 'Saison 1',
        episodes: '1 Épisodes',
        client: 'Cinéworld Production',
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
                            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Cinéworld Studio</span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">
                                Nos Dernières <br />Réalisations ( En cours de production)
                            </h1>
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
                                    <span>Client : {featuredProject.client}</span>
                                </div>
                                <p className="text-gray-400 text-lg mb-8 line-clamp-2">
                                    {featuredProject.synopsis}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={featuredProject.teaser || '#'}
                                        className="bg-white text-black px-8 py-3 rounded font-bold flex items-center hover:bg-gray-200 transition gap-2"
                                    >
                                        <Play className="w-5 h-5" /> Voir le Teaser
                                    </Link>
                                    <Link
                                        href={`/production/${featuredProject.slug}`}
                                        className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded font-bold hover:bg-white/30 transition flex items-center gap-2"
                                    >
                                        <Info className="w-5 h-5" /> Plus d'infos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ═══════════════════════════════════════════════════════════════════ */}
                    {/* OTHER PROJECTS GRID */}
                    {/* ═══════════════════════════════════════════════════════════════════ */}
                    <div id="all-projects" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherProjects.map((projet) => (
                            <Link
                                key={projet.slug}
                                href={`/production/${projet.slug}`}
                                className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-800"
                            >
                                {/* Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={projet.image}
                                        alt={projet.titre}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                                {/* Info */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-yellow-500 text-xs font-bold uppercase">{projet.type}</span>
                                    <h3 className="text-white font-bold text-xl">{projet.titre}</h3>
                                </div>

                                {/* Play Button on Hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black">
                                        <Play className="w-5 h-5 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
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
                        © 2026 Cineworld Académie - Tous droits réservés - #quedubon
                    </div>
                </div>
            </footer>
        </main>
    );
}
