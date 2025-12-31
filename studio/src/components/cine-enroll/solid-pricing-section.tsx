"use client";

import Image from 'next/image';

export default function SolidPricingSection() {
    const packages = [
        {
            title: "CREATOR",
            subtitle: "Créateur de Contenu",
            price: "5.000",
            duration: "8 JOURS",
            features: [
                { icon: "🎥", text: "Prise de vue Smartphone" },
                { icon: "⚡", text: "Montage Dynamique (Reels)" },
                { icon: "📱", text: "Stratégie Réseaux Sociaux" },
            ],
            cta: "Démarrer",
            ctaLink: "https://wa.me/25377556344?text=Infos%20Pack%20Creator",
            bgColor: "bg-white",
            textColor: "text-black",
        },
        {
            title: "PROFESSIONNEL",
            subtitle: "Vidéaste Freelance",
            price: "10.000",
            duration: "12 JOURS",
            features: [
                { icon: "🎬", text: "Réalisation Technique Pro" },
                { icon: "💻", text: "Montage Avancé (Premiere)" },
                { icon: "🎨", text: "Identité Visuelle & Branding" },
                { icon: "🤝", text: "Gestion Client & Devis" },
            ],
            cta: "Devenir Pro",
            ctaLink: "https://wa.me/25377556344?text=Je%20veux%20le%20Pack%20Pro",
            bgColor: "bg-black",
            textColor: "text-white",
            highlight: true,
            badge: "RECOMMANDÉ"
        },
        {
            title: "RÉALISATEUR",
            subtitle: "Cinéma & Fiction",
            price: "20.000",
            duration: "23 JOURS",
            features: [
                { icon: "✍️", text: "Scénario & Storytelling" },
                { icon: "🎭", text: "Direction d'Acteurs" },
                { icon: "🎞️", text: "Post-Production Cinéma" },
                { icon: "🏆", text: "Court-Métrage de Fin" },
            ],
            cta: "Rejoindre l'Élite",
            ctaLink: "https://wa.me/25377556344?text=Infos%20Pack%20Réalisateur",
            bgColor: "bg-white",
            textColor: "text-black",
        },
    ];

    return (
        <section id="tarifs" className="relative py-24 bg-[#0a0a0a]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/groupeeleve.png"
                    alt="Ambiance Cineworld"
                    fill
                    className="object-cover opacity-10 grayscale"
                />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-light block mb-4">
                        FORMATIONS CERTIFIANTES
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-4">
                        NOS <span className="text-[#D4AF37]">TARIFS</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
                </div>

                {/* Cards Grid - Solid Design */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative ${pkg.bgColor} ${pkg.textColor} ${pkg.highlight ? 'md:-mt-4 md:-mb-4 md:shadow-2xl z-10' : ''}`}
                        >
                            {/* Badge */}
                            {pkg.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-[#D4AF37] text-black px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                        {pkg.badge}
                                    </span>
                                </div>
                            )}

                            <div className={`p-8 ${pkg.highlight ? 'py-12' : ''}`}>
                                {/* Title */}
                                <h3 className={`text-2xl font-bold uppercase tracking-wider mb-1 ${pkg.highlight ? 'text-[#D4AF37]' : ''}`}>
                                    {pkg.title}
                                </h3>

                                {/* Subtitle */}
                                <p className={`text-sm uppercase tracking-wider mb-6 ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {pkg.subtitle}
                                </p>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-5xl font-black ${pkg.highlight ? 'text-[#D4AF37]' : ''}`}>
                                            {pkg.price}
                                        </span>
                                        <span className={`text-lg ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                            FDJ
                                        </span>
                                    </div>
                                    <p className={`text-sm mt-1 ${pkg.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {pkg.duration}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className={`h-px w-full mb-6 ${pkg.highlight ? 'bg-gray-700' : 'bg-gray-200'}`} />

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="text-lg">{feature.icon}</span>
                                            <span className={`text-sm ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href={pkg.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full py-4 text-center font-bold uppercase tracking-wider transition-all duration-300 ${pkg.highlight
                                            ? 'bg-[#D4AF37] text-black hover:bg-[#FFD700]'
                                            : 'border-2 border-black text-black hover:bg-black hover:text-white'
                                        }`}
                                >
                                    {pkg.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm mb-4">
                        Besoin d'aide pour choisir ? Contactez-nous
                    </p>
                    <a
                        href="https://wa.me/25377556344?text=Bonjour,%20j'ai%20besoin%20de%20conseils%20pour%20choisir%20mon%20pack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-white transition-colors font-semibold"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        +253 77 55 63 44
                    </a>
                </div>
            </div>
        </section>
    );
}
