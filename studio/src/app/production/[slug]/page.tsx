'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Play, Calendar, Users, Film, Clock } from 'lucide-react';

// Données des projets (même structure que page principale)
const PROJETS = [
    {
        slug: 'doute-force',
        titre: 'DOUTE FORCE',
        type: 'Fiction',
        badge: 'Nouvelle Sortie',
        saison: 'Saison 1',
        episodes: '4 Épisodes',
        client: 'Abdoulwahab Mohamed Ali',
        annee: '2026',
        duree: '4 x 25 min',
        synopsis: "Hassan et Hela partagent une complicité profonde à Djibouti-ville, mais Hassan est fiancé, lié par une promesse traditionnelle. Pris entre deux amours, un mensonge et une suite de tensions font éclater la vérité. Humiliée, la fiancée rompt, tandis que Hela, blessée, décide de se battre.",
        image: '/affiche-film-doute.png',
        teaser: '#',
        equipe: [
            { role: 'Réalisateur', nom: 'Abdoulwahab Mohamed Ali' },
            { role: 'Scénariste', nom: 'Abdoulwahab Mohamed Ali' },
            { role: 'Production', nom: 'cineworld academie' },
        ],
    },
    {
        slug: 'spot-tv-djibouti',
        titre: 'Spot TV Djibouti',
        type: 'Publicité',
        client: 'Office du Tourisme',
        annee: '2025',
        duree: '30 secondes',
        synopsis: "Campagne publicitaire pour la promotion du tourisme à Djibouti. Des images époustouflantes du Lac Assal, du Golfe de Tadjoura et des paysages uniques du pays.",
        image: '/galerie1.png',
        teaser: '#',
        equipe: [
            { role: 'Réalisateur', nom: 'Équipe Cinéworld' },
            { role: 'Production', nom: 'Cinéworld Studio' },
        ],
    },
    {
        slug: 'waliyya-reportage',
        titre: 'Waliyya (Reportage)',
        type: 'Documentaire',
        client: 'Production Interne',
        annee: '2025',
        duree: '45 minutes',
        synopsis: "Un documentaire émouvant sur les traditions et la culture djiboutienne. Waliyya nous emmène à la découverte des richesses immatérielles de notre patrimoine.",
        image: '/galerie2.png',
        teaser: '#',
        equipe: [
            { role: 'Réalisateur', nom: 'Équipe Cinéworld' },
            { role: 'Narration', nom: 'À définir' },
        ],
    },
    {
        slug: 'clip-artiste-local',
        titre: 'Clip Artiste Local',
        type: 'Clip Vidéo',
        client: 'Artiste Indépendant',
        annee: '2025',
        duree: '4 minutes',
        synopsis: "Clip musical réalisé pour un artiste local émergent. Une esthétique moderne qui met en valeur la musique djiboutienne contemporaine.",
        image: '/galerie3.png',
        teaser: '#',
        equipe: [
            { role: 'Réalisateur', nom: 'Abdoulwahab Mohamed Ali' },
            { role: 'Montage', nom: 'Abdoulwahab Mohamed Ali' },
        ],
    },
];

export default function ProjetDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const projet = PROJETS.find(p => p.slug === slug);

    if (!projet) {
        return (
            <main className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Projet non trouvé</h1>
                    <Link href="/production" className="text-yellow-500 hover:underline">
                        Retour aux réalisations
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-black min-h-screen">
            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO IMAGE */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src={projet.image}
                    alt={projet.titre}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Back Button */}
                <Link
                    href="/production"
                    className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white/80 hover:text-white transition bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Retour
                </Link>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* CONTENT */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10 pb-20">

                {/* Type Badge */}
                <span className="bg-[#6e1615] text-white text-xs font-bold px-4 py-2 rounded uppercase inline-block mb-4">
                    {projet.type}
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    {projet.titre}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                    {projet.annee && (
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-yellow-500" />
                            <span>{projet.annee}</span>
                        </div>
                    )}
                    {projet.duree && (
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-yellow-500" />
                            <span>{projet.duree}</span>
                        </div>
                    )}
                    {projet.client && (
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-yellow-500" />
                            <span>Client : {projet.client}</span>
                        </div>
                    )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <Link
                        href={projet.teaser || '#'}
                        className="bg-white text-black px-8 py-4 rounded font-bold flex items-center gap-2 hover:bg-gray-200 transition"
                    >
                        <Play className="w-5 h-5" /> Voir le Teaser
                    </Link>
                    <Link
                        href="https://wa.me/25377145306"
                        target="_blank"
                        className="bg-[#6e1615] text-white px-8 py-4 rounded font-bold hover:bg-[#8b1c1b] transition"
                    >
                        Nous Contacter
                    </Link>
                </div>

                {/* Synopsis */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Film className="w-6 h-6 text-yellow-500" />
                        Synopsis
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {projet.synopsis}
                    </p>
                </div>

                {/* Équipe */}
                {projet.equipe && projet.equipe.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Users className="w-6 h-6 text-yellow-500" />
                            Équipe
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {projet.equipe.map((membre, index) => (
                                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                                    <span className="text-yellow-500 text-sm font-medium uppercase">{membre.role}</span>
                                    <p className="text-white font-bold mt-1">{membre.nom}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back Link */}
                <div className="border-t border-gray-800 pt-8">
                    <Link
                        href="/production"
                        className="text-gray-400 hover:text-white transition flex items-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Voir toutes les réalisations
                    </Link>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* FOOTER */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <footer className="bg-black text-white py-16 border-t-4 border-[#6e1615]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Formations</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><Link href="/formations" className="hover:text-white transition-colors">Site Web avec l'IA</Link></li>
                                <li><Link href="/formations" className="hover:text-white transition-colors">Design Graphique</Link></li>
                                <li><Link href="/formations" className="hover:text-white transition-colors">Réalisation Vidéo</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>📍 Djibouti, Aviation, Institut "DIHM"</li>
                                <li>📧 cineworld@cineworldacademie.com</li>
                                <li>📱 +253 77 14 53 06</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Réseaux Sociaux</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors">📘</a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors">📷</a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors">📺</a>
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
