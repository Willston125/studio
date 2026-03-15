"use client";

import Link from 'next/link';

export default function NextStepsSection() {
    const steps = [
        {
            icon: "📋",
            title: "Demander des Infos",
            description: "Recevez notre brochure complète par WhatsApp",
            cta: "Recevoir la Brochure",
            link: "https://wa.me/25377556344?text=Bonjour,%20je%20souhaite%20recevoir%20la%20brochure%20Cineworld",
        },
        {
            icon: "✍️",
            title: "S'inscrire Maintenant",
            description: "Places limitées - Inscrivez-vous en ligne",
            cta: "Formulaire d'Inscription",
            link: "/inscription",
            highlight: true
        },
        {
            icon: "📞",
            title: "Nous Appeler",
            description: "Parlez directement à notre équipe",
            cta: "+253 77 55 63 44",
            link: "tel:+25377556344",
        }
    ];

    return (
        <section className="prochaine-etape-section bg-[#FFD700] py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-wider mb-4">
                        PROCHAINE ÉTAPE
                    </h2>
                    <p className="text-black/70 text-lg">
                        Choisissez comment vous souhaitez nous contacter
                    </p>
                </div>

                {/* Steps Grid - TEXTE DIRECTEMENT SUR FOND JAUNE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="text-center prochaine-etape-card"
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{step.icon}</div>

                            {/* Title - NOIR SUR JAUNE */}
                            <h3 className="text-xl font-black text-black uppercase tracking-wider mb-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-black/70 text-sm mb-6">
                                {step.description}
                            </p>

                            {/* CTA Button - TRANSPARENT AVEC BORDURE NOIRE */}
                            {step.link.startsWith('http') || step.link.startsWith('tel') ? (
                                <a
                                    href={step.link}
                                    target={step.link.startsWith('http') ? "_blank" : undefined}
                                    rel={step.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="btn-cta-footer inline-block w-full py-4 px-6 bg-transparent border-2 border-black text-black font-black uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-[#FFD700]"
                                >
                                    {step.cta}
                                </a>
                            ) : (
                                <Link
                                    href={step.link}
                                    className="btn-cta-footer inline-block w-full py-4 px-6 bg-transparent border-2 border-black text-black font-black uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-[#FFD700]"
                                >
                                    {step.cta}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <p className="text-center text-black/60 text-sm mt-8">
                    📍 CineWorld Academy - Saalam Tower, Djibouti
                </p>
            </div>
        </section>
    );
}
