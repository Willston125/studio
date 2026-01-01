"use client";

import Link from 'next/link';

export default function PricingGridSection() {
    const packages = [
        {
            name: "INITIATION",
            price: "5.000",
            duration: "8 Jours",
            target: "Débutants",
            features: ["Caméra & Montage Base"],
            description: "Idéal pour découvrir les bases du cinéma.",
            cta: "DÉCOUVRIR",
            link: "https://wa.me/25377556344?text=Bonjour%2C%20je%20suis%20intéressé%20par%20le%20Pack%20Initiation%20à%205.000%20FDJ",
            highlight: false
        },
        {
            name: "PROFESSIONNEL",
            price: "10.000",
            duration: "12 Jours",
            target: "Futurs Pro",
            features: ["Maîtrise Technique Totale", "Gestion Client & Devis"],
            description: "Le cursus complet pour lancer votre carrière.",
            cta: "CANDIDATER",
            link: "https://wa.me/25377556344?text=Bonjour%2C%20je%20suis%20intéressé%20par%20le%20Pack%20Professionnel%20à%2010.000%20FDJ",
            highlight: true,
            badge: "PLUS POPULAIRE"
        },
        {
            name: "MASTERCLASS",
            price: "20.000",
            duration: "23 Jours",
            target: "Réalisateurs",
            features: ["Scénario & Direction"],
            description: "L'expertise créative au plus haut niveau.",
            cta: "REJOINDRE",
            link: "https://wa.me/25377556344?text=Bonjour%2C%20je%20suis%20intéressé%20par%20la%20Masterclass%20à%2020.000%20FDJ",
            highlight: false
        }
    ];

    return (
        <section id="tarifs" className="pricing-grid-section bg-[#F9FAFB] py-32 px-4 border-y border-gray-100">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                <span className="text-[#B8860B] font-bold tracking-[0.2em] uppercase text-sm block">VOTRE PARCOURS</span>
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
                    CHOISISSEZ VOTRE <span className="text-gray-400">NIVEAU</span>
                </h2>
                <p className="text-gray-500 text-lg font-body max-w-xl mx-auto">
                    Des programmes intensifs adaptés à votre profil et à vos ambitions professionnelles.
                </p>
                <div className="w-20 h-1.5 bg-black mx-auto mt-6"></div>
            </div>

            {/* Pricing Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${pkg.highlight
                            ? 'bg-white border-2 border-[#FFD700] shadow-2xl scale-105 z-10'
                            : 'bg-white border border-gray-100 hover:border-gray-200 shadow-sm'}`}
                    >
                        {/* Badge */}
                        {pkg.badge && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                {pkg.badge}
                            </div>
                        )}

                        {/* Head */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-[#B8860B] uppercase tracking-widest mb-4">
                                {pkg.name}
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-black">{pkg.price}</span>
                                <span className="text-lg font-bold text-gray-400">FDJ</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-4 font-medium italic">
                                {pkg.description}
                            </p>
                        </div>

                        {/* Body - Details list */}
                        <div className="flex-grow space-y-4 mb-10 pt-6 border-t border-gray-50">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">⏱</span>
                                <span className="text-gray-700 font-bold">{pkg.duration} de formation</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">🎯</span>
                                <span className="text-gray-700 font-bold">{pkg.target}</span>
                            </div>
                            {pkg.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <span className="w-5 h-5 rounded-full bg-[#FFD700]/20 text-[#B8860B] flex items-center justify-center text-[10px] font-bold">✓</span>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href={pkg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block w-full py-4 text-center font-black uppercase tracking-widest transition-all duration-300 rounded-xl ${pkg.highlight
                                ? 'bg-black text-white hover:bg-[#FFD700] hover:text-black shadow-xl shadow-black/10'
                                : 'bg-gray-50 text-black border border-gray-100 hover:bg-gray-100 hover:border-gray-200'
                                }`}
                        >
                            {pkg.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
