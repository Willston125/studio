'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CommunicationPage() {
    return (
        <main className="bg-[#050505] text-white min-h-screen font-body overflow-x-hidden">

            {/* --- HERO WRAPPER (White Background, Rounded Bottom) --- */}
            <div className="bg-white rounded-b-[50px] pt-5 relative text-center overflow-hidden pb-0">

                {/* --- INTERNAL PILL NAVBAR --- */}
                <nav className="hidden md:inline-flex gap-5 bg-black px-10 py-4 rounded-full mb-10">
                    <Link href="/" className="text-white font-display uppercase text-sm hover:text-[#D4AF37] transition-colors">Accueil</Link>
                    <Link href="#" className="text-[#D4AF37] font-display uppercase text-sm">Nos Cours</Link>
                    <Link href="/inscription" className="text-white font-display uppercase text-sm hover:text-[#D4AF37] transition-colors">Inscription</Link>
                    <Link href="/contact" className="text-white font-display uppercase text-sm hover:text-[#D4AF37] transition-colors">Contact</Link>
                </nav>

                {/* --- HERO TITLE --- */}
                <h1 className="text-black font-display text-4xl md:text-6xl uppercase leading-[1.1] mb-2 max-w-4xl mx-auto px-4">
                    <span className="text-[#D4AF37] text-3xl align-middle mr-2">✶</span>
                    Devenez l'Expert<br />
                    De Votre Image
                    <span className="text-[#D4AF37] text-3xl align-middle ml-2">✶</span>
                </h1>
                <p className="text-[#555] max-w-xl mx-auto mt-2 mb-8 px-4">
                    Graphisme, Marketing, Communication. Apprenez à dompter les outils numériques.
                </p>

                {/* --- HERO IMAGE CONTAINER --- */}
                <div className="relative h-[400px] md:h-[500px] flex justify-center items-end mt-8">

                    {/* Circle Background */}
                    <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#f0f0f0] rounded-full bottom-[-50px] z-0"></div>

                    {/* Mentor Image */}
                    <div className="relative z-10 h-[110%] w-auto flex items-end">
                        <Image
                            src="/formateur-mentore.png"
                            alt="Ali William"
                            width={600}
                            height={800}
                            className="h-full w-auto object-cover drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                            priority
                        />
                    </div>

                    {/* Floating Buttons (Desktop Only) */}
                    <Link href="#programme" className="hidden md:block absolute z-20 bottom-[100px] left-1/2 -translate-x-[250px] bg-black/80 text-white px-6 py-3 rounded-full font-display border border-[#D4AF37] backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black hover:-translate-y-1 transition-all">
                        Voir le Programme
                    </Link>
                    <Link href="/inscription" className="hidden md:block absolute z-20 bottom-[100px] left-1/2 translate-x-[120px] bg-black/80 text-white px-6 py-3 rounded-full font-display border border-[#D4AF37] backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black hover:-translate-y-1 transition-all">
                        S'inscrire ➔
                    </Link>

                    {/* Review Badge (Desktop Only) */}
                    <div className="hidden md:block absolute top-[40%] right-[10%] text-left z-20">
                        <div className="text-[#D4AF37] tracking-widest text-lg">★★★★★</div>
                        <div className="font-display text-black text-2xl font-bold">10 Ans</div>
                        <div className="text-[#666] text-sm">d'Expérience</div>
                    </div>

                </div>
            </div>

            {/* --- MODULES SECTION (Preserved) --- */}
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

            {/* --- CTA SECTION (Preserved) --- */}
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
