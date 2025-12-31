"use client";

import Link from 'next/link';

export default function PathfinderSection() {
    const paths = [
        {
            title: "CREATOR",
            subtitle: "Créateur de Contenu",
            description: "Réseaux sociaux, Reels, Vlogs. Passez du smartphone à la caméra pro.",
            price: "5.000 FDJ",
            duration: "8 jours",
            link: "#tarifs",
            icon: "📱"
        },
        {
            title: "PROFESSIONNEL",
            subtitle: "Vidéaste Freelance",
            description: "Clips, pubs, reportages. Gérez une commande client de A à Z.",
            price: "10.000 FDJ",
            duration: "12 jours",
            link: "#tarifs",
            icon: "🎬",
            highlight: true
        },
        {
            title: "RÉALISATEUR",
            subtitle: "Cinéma & Fiction",
            description: "Scénario, direction d'acteurs, post-prod. L'art de raconter des histoires.",
            price: "20.000 FDJ",
            duration: "23 jours",
            link: "#tarifs",
            icon: "🎥"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-[#D4AF37] to-[#B8960C]">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wider mb-4">
                        QUEL PARCOURS POUR VOUS ?
                    </h2>
                    <p className="text-black/70 text-lg max-w-2xl mx-auto">
                        Trois cursus adaptés à votre niveau et vos ambitions professionnelles
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {paths.map((path, index) => (
                        <Link
                            href={path.link}
                            key={index}
                            className={`group block bg-white rounded-lg p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${path.highlight ? 'ring-4 ring-black/20' : ''}`}
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4">{path.icon}</div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-black uppercase tracking-wider mb-1">
                                {path.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-4">
                                {path.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {path.description}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <div>
                                    <span className="text-2xl font-black text-black">{path.price}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-gray-500 text-sm">{path.duration}</span>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="mt-4 text-[#D4AF37] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                                Voir le détail
                                <span className="text-xl">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
