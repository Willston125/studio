"use client";

import Image from 'next/image';

export default function PremiumPricingSection() {
    return (
        <section id="tarifs" className="premium-pricing-section relative min-h-screen py-24 overflow-hidden">
            {/* Background Container */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 z-10" />
                {/* Background Image - Grayscale */}
                <Image
                    src="/groupeeleve.png"
                    alt="Ambiance Cineworld"
                    fill
                    className="object-cover grayscale opacity-30"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="tagline text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-light block mb-4">
                        L'EXCELLENCE AUDIOVISUELLE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-6">
                        CHOISISSEZ VOTRE <span className="text-[#D4AF37]">DESTIN</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                </div>

                {/* Cards Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* PACK CREATOR */}
                    <div className="premium-card group relative">
                        {/* Card Blur Background */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />

                        {/* Card Content */}
                        <div className="relative z-10 p-8">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">
                                CREATOR
                            </h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                                Créateur de Contenu
                            </p>

                            {/* Price Box */}
                            <div className="mb-8">
                                <span className="text-gray-400 text-sm block">FDJ</span>
                                <span className="text-5xl font-black text-white">5.000</span>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">🎥</span>
                                    <span>Prise de vue Smartphone</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">⚡</span>
                                    <span>Montage Dynamique (Reels)</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">📱</span>
                                    <span>Stratégie Réseaux Sociaux</span>
                                </li>
                            </ul>

                            {/* CTA Button - Ghost */}
                            <a
                                href="https://wa.me/25377556344?text=Infos%20Pack%20Creator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 text-center border-2 border-white/30 text-white rounded-lg uppercase tracking-wider font-semibold transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                            >
                                Démarrer
                            </a>
                        </div>
                    </div>

                    {/* PACK PROFESSIONNEL - HIGHLIGHT */}
                    <div className="premium-card highlight group relative transform md:-translate-y-4 md:scale-105">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/40 to-[#D4AF37]/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Card Blur Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border-2 border-[#D4AF37]/50" />

                        {/* Badge Premium */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30">
                                RECOMMANDÉ
                            </span>
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10 p-8 pt-10">
                            <h3 className="text-2xl font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                                PROFESSIONNEL
                            </h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                                Vidéaste Freelance
                            </p>

                            {/* Price Box */}
                            <div className="mb-8">
                                <span className="text-[#D4AF37] text-sm block">FDJ</span>
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">10.000</span>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-200">
                                    <span className="text-xl">🎬</span>
                                    <span>Réalisation Technique Pro</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-200">
                                    <span className="text-xl">💻</span>
                                    <span>Montage Avancé (Premiere)</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-200">
                                    <span className="text-xl">🎨</span>
                                    <span>Identité Visuelle & Branding</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-200">
                                    <span className="text-xl">🤝</span>
                                    <span>Gestion Client & Devis</span>
                                </li>
                            </ul>

                            {/* CTA Button - Filled Gold */}
                            <a
                                href="https://wa.me/25377556344?text=Je%20veux%20le%20Pack%20Pro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 text-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black rounded-lg uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/50 hover:scale-105"
                            >
                                Devenir Pro
                            </a>
                        </div>
                    </div>

                    {/* PACK RÉALISATEUR */}
                    <div className="premium-card group relative">
                        {/* Card Blur Background */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />

                        {/* Card Content */}
                        <div className="relative z-10 p-8">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">
                                RÉALISATEUR
                            </h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                                Cinéma & Fiction
                            </p>

                            {/* Price Box */}
                            <div className="mb-8">
                                <span className="text-gray-400 text-sm block">FDJ</span>
                                <span className="text-5xl font-black text-white">20.000</span>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">✍️</span>
                                    <span>Scénario & Storytelling</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">🎭</span>
                                    <span>Direction d'Acteurs</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">🎞️</span>
                                    <span>Post-Production Cinéma</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="text-xl">🏆</span>
                                    <span>Court-Métrage de Fin</span>
                                </li>
                            </ul>

                            {/* CTA Button - Ghost */}
                            <a
                                href="https://wa.me/25377556344?text=Infos%20Pack%20Réalisateur"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 text-center border-2 border-white/30 text-white rounded-lg uppercase tracking-wider font-semibold transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                            >
                                Rejoindre l'Élite
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
