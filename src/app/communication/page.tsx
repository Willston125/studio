'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CommunicationPage() {
    return (
        <main className="bg-[#050505] text-white min-h-screen font-body overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[70vh] flex items-center justify-center text-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/background-design.jpg"
                        alt="Communication Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 to-[#050505]" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl uppercase mb-6 leading-tight"
                    >
                        Devenez un Expert<br />
                        <span className="text-[#D4AF37]">Digital & Créatif</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                    >
                        Graphisme • Marketing • Stratégie de Marque
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        href="#programme"
                        className="text-white underline hover:text-[#D4AF37] transition-colors"
                    >
                        Voir le programme ↓
                    </motion.a>
                </div>
            </section>

            {/* --- MODULES SECTION --- */}
            <section id="programme" className="py-20 px-6 md:px-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center font-display text-4xl md:text-5xl text-[#D4AF37] mb-16 uppercase">
                        Le Programme Complet
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* MODULE 1 : PHOTOSHOP */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group"
                        >
                            <div className="text-5xl text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className="fa-solid fa-paintbrush"></i>
                            </div>
                            <h3 className="font-display text-2xl mb-4 text-white">Design Graphique Pro</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Maîtrisez Photoshop pour créer des affiches de film, des retouches photos professionnelles et des visuels impactants.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Photoshop</span>
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Détourage</span>
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Composition</span>
                            </div>
                        </motion.div>

                        {/* MODULE 2 : CANVA */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group"
                        >
                            <div className="text-5xl text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <h3 className="font-display text-2xl mb-4 text-white">Création Rapide & Efficace</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Apprenez à utiliser Canva comme un pro pour gérer vos réseaux sociaux et créer du contenu viral en quelques minutes.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Canva Pro</span>
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Réseaux Sociaux</span>
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Identité Visuelle</span>
                            </div>
                        </motion.div>

                        {/* MODULE 3 : MARKETING */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group"
                        >
                            <div className="text-5xl text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className="fa-solid fa-bullhorn"></i>
                            </div>
                            <h3 className="font-display text-2xl mb-4 text-white">Marketing Digital</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Ne faites pas que créer, apprenez à vendre. Stratégie de contenu, publicité Facebook/Instagram et branding personnel.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Stratégie</span>
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Publicité</span>
                                <span className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Branding</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 px-6 text-center bg-gradient-to-t from-[#050505] to-[#111]">
                <h2 className="font-display text-4xl md:text-5xl mb-4 uppercase">
                    Prêt à lancer votre carrière ?
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                    Les places sont limitées. Rejoignez la prochaine session.
                </p>
                <Link
                    href="/inscription"
                    className="inline-block bg-[#E50914] text-white px-10 py-4 rounded font-display text-xl uppercase tracking-wide hover:bg-[#b2070f] hover:-translate-y-1 transition-all duration-300 shadow-[0_5px_20px_rgba(229,9,20,0.4)]"
                >
                    S'inscrire à la formation
                </Link>
            </section>

        </main>
    );
}
