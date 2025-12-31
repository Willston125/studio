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
            variant: "outline"
        },
        {
            icon: "✍️",
            title: "S'inscrire Maintenant",
            description: "Places limitées - Inscrivez-vous en ligne",
            cta: "Formulaire d'Inscription",
            link: "/inscription",
            variant: "filled",
            highlight: true
        },
        {
            icon: "📞",
            title: "Nous Appeler",
            description: "Parlez directement à notre équipe",
            cta: "+253 77 55 63 44",
            link: "tel:+25377556344",
            variant: "outline"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-[#D4AF37] to-[#B8960C]">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 20L20 0h20v20L20 40H0z'/%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wider mb-4">
                        PROCHAINE ÉTAPE
                    </h2>
                    <p className="text-black/70 text-lg">
                        Choisissez comment vous souhaitez nous contacter
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${step.highlight ? 'ring-4 ring-black/20' : ''}`}
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4">{step.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-black uppercase tracking-wider mb-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-6">
                                {step.description}
                            </p>

                            {/* CTA Button */}
                            {step.link.startsWith('http') || step.link.startsWith('tel') ? (
                                <a
                                    href={step.link}
                                    target={step.link.startsWith('http') ? "_blank" : undefined}
                                    rel={step.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className={`block w-full py-4 font-bold uppercase tracking-wider transition-all duration-300 ${step.variant === 'filled'
                                            ? 'bg-black text-white hover:bg-[#D4AF37] hover:text-black'
                                            : 'border-2 border-black text-black hover:bg-black hover:text-white'
                                        }`}
                                >
                                    {step.cta}
                                </a>
                            ) : (
                                <Link
                                    href={step.link}
                                    className={`block w-full py-4 font-bold uppercase tracking-wider transition-all duration-300 ${step.variant === 'filled'
                                            ? 'bg-black text-white hover:bg-[#D4AF37] hover:text-black'
                                            : 'border-2 border-black text-black hover:bg-black hover:text-white'
                                        }`}
                                >
                                    {step.cta}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <p className="text-center text-black/60 text-sm mt-8">
                    📍 CineWorld Academy - Djibouti Centre Ville
                </p>
            </div>
        </section>
    );
}
