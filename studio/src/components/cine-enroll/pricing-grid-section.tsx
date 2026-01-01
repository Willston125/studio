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
            cta: "DÉCOUVRIR",
            link: "https://wa.me/25377556344?text=Bonjour%2C%20je%20suis%20intéressé%20par%20le%20Pack%20Initiation%20à%205.000%20FDJ",
            highlight: false
        },
        {
            name: "PROFESSIONNEL",
            price: "10.000",
            duration: "12 Jours",
            target: "Futurs Pros",
            features: ["Maîtrise Technique Totale", "Gestion Client & Devis"],
            cta: "CANDIDATER",
            link: "https://wa.me/25377556344?text=Bonjour%2C%20je%20suis%20intéressé%20par%20le%20Pack%20Professionnel%20à%2010.000%20FDJ",
            highlight: true,
            badge: "RECOMMANDÉ"
        },
        {
            name: "MASTERCLASS",
            price: "20.000",
            duration: "23 Jours",
            target: "Réalisateurs",
            features: ["Scénario & Direction"],
            cta: "REJOINDRE",
            link: "https://wa.me/25377556344?text=Bonjour%2C%20je%20suis%20intéressé%20par%20la%20Masterclass%20à%2020.000%20FDJ",
            highlight: false
        }
    ];

    return (
        <section id="tarifs" className="pricing-grid-section bg-[#0a0a0a] py-20 px-4">
            {/* Header */}
            <div className="grid-header text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                    NOS CURSUS <span className="text-[#FFD700]">ACADÉMIQUES</span>
                </h2>
            </div>

            {/* Pricing Table */}
            <div className="pricing-table grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`pricing-col relative ${pkg.highlight ? 'highlight bg-[#111] border-2 border-[#FFD700] md:-my-4 z-10' : 'bg-[#0f0f0f] border border-[#222]'}`}
                    >
                        {/* Badge */}
                        {pkg.badge && (
                            <div className="p-badge absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-xs font-black px-4 py-1 uppercase tracking-wider">
                                {pkg.badge}
                            </div>
                        )}

                        {/* Head */}
                        <div className="p-head text-center py-8 border-b border-[#222]">
                            <h3 className={`text-xl font-black uppercase tracking-wider mb-2 ${pkg.highlight ? 'text-[#FFD700]' : 'text-white'}`}>
                                {pkg.name}
                            </h3>
                            <span className={`price text-4xl font-black ${pkg.highlight ? 'text-[#FFD700]' : 'text-white'}`}>
                                {pkg.price} <small className="text-lg font-normal text-gray-500">FDJ</small>
                            </span>
                        </div>

                        {/* Body */}
                        <div className="p-body p-6">
                            <ul className="space-y-3 mb-8">
                                <li className="text-gray-400">
                                    <strong className="text-white">Durée :</strong> {pkg.duration}
                                </li>
                                <li className="text-gray-400">
                                    <strong className="text-white">Cible :</strong> {pkg.target}
                                </li>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="text-gray-400">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href={pkg.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn-grid block w-full py-4 text-center font-black uppercase tracking-wider transition-all duration-300 ${pkg.highlight
                                        ? 'filled bg-[#FFD700] text-black hover:bg-white'
                                        : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                                    }`}
                            >
                                {pkg.cta}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
