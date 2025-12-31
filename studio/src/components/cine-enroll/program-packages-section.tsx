"use client";

import { Film, Scissors, Palette, PenTool, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { CinemaScope, Vignette } from "@/components/ui/cinema-effects";
import { ClapperIcon } from "@/components/ui/clapper-board";
import { FilmReel } from "@/components/ui/film-reel";

interface PackageFeature {
    icon: React.ReactNode;
    label: string;
}

interface Package {
    title: string;
    subtitle: string;
    slogan: string;
    duration: string;
    price: string;
    target: string;
    promise: string;
    features: PackageFeature[];
    careers: string[];
    isPopular?: boolean;
    badge?: string;
}

export default function ProgramPackagesSection() {
    const packages: Package[] = [
        {
            title: "L'INITIÉ",
            subtitle: "Le Créateur de Contenu",
            slogan: "Passez du Smartphone à la Caméra Pro.",
            duration: "8 JOURS",
            price: "5 000 FDJ",
            badge: "🥉",
            target: "Débutants, YouTubeurs, Community Managers",
            promise: "En 8 jours, apprenez à filmer et monter des vidéos dynamiques pour les réseaux sociaux.",
            features: [
                { icon: <Film className="w-5 h-5" />, label: "Réalisation de vidéo pro" },
                { icon: <Palette className="w-5 h-5" />, label: "Création visuel pro" },
            ],
            careers: ["Créateur de contenu", "Vlogger", "Assistant Com'"],
        },
        {
            title: "LA MAÎTRISE",
            subtitle: "Le Freelance / Le Pro",
            slogan: "Devenez autonome sur le marché du travail.",
            duration: "12 JOURS",
            price: "10 000 FDJ",
            badge: "🥇",
            isPopular: true,
            target: "Ceux qui veulent en vivre : clips, pubs, reportages",
            promise: "Le cursus complet pour gérer une commande client de A à Z. C'est le standard de l'industrie.",
            features: [
                { icon: <Film className="w-5 h-5" />, label: "Réalisation de vidéo pro" },
                { icon: <Palette className="w-5 h-5" />, label: "Création visuel pro" },
                { icon: <Scissors className="w-5 h-5" />, label: "Montage vidéo pro" },
            ],
            careers: ["Cadreur-Monteur", "Vidéaste Freelance", "Reporter d'images"],
        },
        {
            title: "L'EXPERT",
            subtitle: "Le Cinéaste / Le Réalisateur",
            slogan: "L'Art de raconter des histoires (Storytelling).",
            duration: "23 JOURS",
            price: "20 000 FDJ",
            badge: "💎",
            target: "Artistes, passionnés de cinéma, courts-métrages, télé",
            promise: "On ne fait pas que de la technique : écriture, direction d'acteurs, identité visuelle unique.",
            features: [
                { icon: <Film className="w-5 h-5" />, label: "Réalisation de vidéo pro" },
                { icon: <Palette className="w-5 h-5" />, label: "Création visuel pro" },
                { icon: <Scissors className="w-5 h-5" />, label: "Montage vidéo pro" },
                { icon: <PenTool className="w-5 h-5" />, label: "Écriture de scénario" },
            ],
            careers: ["Réalisateur", "Chef Opérateur", "Directeur Artistique"],
        },
    ];

    const whatsappNumber = "25377556344";
    const whatsappMessage = encodeURIComponent("Bonjour, je souhaite obtenir plus d'informations sur les formations Cinéworld Djibouti.");

    return (
        <section className="relative w-full overflow-hidden bg-black">
            {/* Hero Image Section with Overlay */}
            <Vignette>
                <div className="relative h-[400px] md:h-[500px] w-full cinemascope">
                    <Image
                        src="/groupeeleve.png"
                        alt="Formation Cinéma Cineworld Djibouti"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

                    {/* Title Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4">
                            {/* Film Reel decorations */}
                            <div className="flex justify-center gap-4 mb-4">
                                <FilmReel size={40} className="opacity-60 hidden md:block" />
                                <ClapperIcon size={32} className="opacity-80" />
                                <FilmReel size={40} className="opacity-60 hidden md:block" />
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
                                NOS PACKS CINÉMATOGRAPHIQUES
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                                Formations professionnelles diplômantes - Devenez un expert du cinéma
                            </p>
                        </div>
                    </div>
                </div>
            </Vignette>

            {/* Packages Cards Section */}
            <div className="relative bg-gradient-to-b from-black to-gray-900 py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Popular Badge */}
                                {pkg.isPopular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                                            ⭐ RECOMMANDÉ
                                        </span>
                                    </div>
                                )}

                                {/* Card with Film Strip Border */}
                                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    {/* Film Strip Border - Top */}
                                    <div className="h-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 relative">
                                        <div className="absolute inset-0 flex justify-around items-center">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 bg-black rounded-sm" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 pt-8">
                                        {/* Badge + Title */}
                                        <div className="text-center mb-3">
                                            <span className="text-3xl">{pkg.badge}</span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                                                {pkg.title}
                                            </h3>
                                            <p className="text-yellow-400 text-sm font-medium uppercase tracking-wider">
                                                {pkg.subtitle}
                                            </p>
                                        </div>

                                        {/* Slogan - The Hook */}
                                        <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-yellow-400 px-4 py-2 mb-4">
                                            <p className="text-white font-semibold italic text-sm">
                                                "{pkg.slogan}"
                                            </p>
                                        </div>

                                        {/* Duration */}
                                        <p className="text-gray-400 text-center font-semibold mb-4 text-sm">
                                            ⏱️ {pkg.duration}
                                        </p>

                                        {/* Price */}
                                        <div className="bg-black/50 rounded-lg p-4 mb-4 border border-yellow-500/30">
                                            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-center">
                                                {pkg.price}
                                            </p>
                                        </div>

                                        {/* Target Audience - Pour Qui ? */}
                                        <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                                            <p className="text-xs text-gray-400 uppercase font-bold mb-1">👤 Pour qui ?</p>
                                            <p className="text-gray-200 text-sm">{pkg.target}</p>
                                        </div>

                                        {/* Promise - La Promesse */}
                                        <div className="mb-4">
                                            <p className="text-xs text-gray-400 uppercase font-bold mb-1">🎯 La promesse</p>
                                            <p className="text-gray-300 text-sm leading-relaxed">{pkg.promise}</p>
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-2 mb-4">
                                            <p className="text-xs text-gray-400 uppercase font-bold">📚 Modules inclus</p>
                                            {pkg.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 text-gray-200"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                                    <span className="text-xs font-medium">{feature.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Career Outcomes - Débouchés */}
                                        <div className="bg-gradient-to-r from-green-900/30 to-transparent rounded-lg p-3 border border-green-600/30">
                                            <p className="text-xs text-green-400 uppercase font-bold mb-2">🚀 Débouchés</p>
                                            <div className="flex flex-wrap gap-1">
                                                {pkg.careers.map((career, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-green-900/50 text-green-300 text-xs px-2 py-1 rounded-full"
                                                    >
                                                        {career}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Film Strip Border - Bottom */}
                                    <div className="h-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 relative">
                                        <div className="absolute inset-0 flex justify-around items-center">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 bg-black rounded-sm" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-12 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Pour plus d'informations :
                    </h3>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>+253 77 55 63 44</span>
                    </a>
                    <p className="text-gray-600 mt-4 text-sm">
                        Réponse rapide garantie - Conseils personnalisés
                    </p>
                </div>
            </div>
        </section>
    );
}
