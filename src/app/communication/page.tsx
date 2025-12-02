'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CommunicationPage() {
    return (
        <main className="bg-[#050505] text-white min-h-screen font-body overflow-x-hidden">

            {/* --- HERO WRAPPER --- */}
            <div className="bg-white rounded-b-[40px] md:rounded-b-[60px] pt-5 pb-10 md:pb-0 relative text-center overflow-hidden min-h-auto md:min-h-[85vh] flex flex-col items-center">

                {/* --- NAVIGATION PILULE (Scrollable Mobile) --- */}
                <div className="w-full flex justify-center px-5 mb-8">
                    <nav className="inline-flex gap-1 px-4 py-2 bg-black rounded-full overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">
                        <Link href="/" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Accueil</Link>
                        <Link href="#" className="bg-[#D4AF37] text-black font-display uppercase text-sm px-4 py-2 rounded-full">Cours Com'</Link>
                        <Link href="/inscription" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Inscription</Link>
                        <Link href="/contact" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Contact</Link>
                        <Link href="/reglement" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Règlement</Link>
                    </nav>
                </div>

                {/* --- HERO TITLE --- */}
                <h1 className="text-black font-display text-[2.2rem] md:text-[3.5rem] uppercase leading-[1.1] mb-4 max-w-[900px] px-4 mx-auto">
                    <span className="text-[#D4AF37] text-xl md:text-2xl align-middle mr-2">✦</span>
                    Devenez l'Expert<br />
                    De Votre Image
                    <span className="text-[#D4AF37] text-xl md:text-2xl align-middle ml-2">✦</span>
                </h1>
                <p className="text-[#666] max-w-[600px] mx-auto mb-8 px-5 text-[0.95rem] md:text-[1.1rem] leading-relaxed">
                    Graphisme, Marketing, Communication. Passez au niveau supérieur avec nos modules intensifs.
                </p>

                {/* --- REVIEW BADGE (Mobile Position: Centered above image) --- */}
                <div className="block md:hidden relative mb-5 bg-white px-5 py-2 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-[#D4AF37] tracking-widest text-xs">★★★★★</div>
                    <div className="font-display text-black text-xl font-bold leading-none mt-1">10 Ans</div>
                    <div className="text-[#888] text-[0.7rem]">d'Expérience</div>
                </div>

                {/* --- HERO IMAGE CONTAINER --- */}
                <div className="relative w-full max-w-[800px] flex-grow flex justify-center items-end mt-5">

                    {/* Circle Background */}
                    <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-[#f2f2f2] rounded-full bottom-[-40px] md:bottom-[-80px] z-0 left-1/2 -translate-x-1/2"></div>

                    {/* Mentor Image */}
                    <div className="relative z-10">
                        <Image
                            src="/formateur-mentore.png"
                            alt="Ali William"
                            width={600}
                            height={800}
                            className="h-auto w-[90vw] max-w-[400px] md:h-[550px] md:w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] mb-[-20px] md:mb-0"
                            priority
                        />
                    </div>

                    {/* --- DESKTOP FLOATING BUTTONS --- */}
                    <div className="hidden md:block">
                        <Link href="#programme" className="absolute z-20 bottom-[150px] left-[10%] bg-black/90 text-white px-8 py-4 rounded-full font-display border border-[#D4AF37] backdrop-blur-md hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all shadow-lg text-lg">
                            Voir le Programme
                        </Link>
                        <Link href="/inscription" className="absolute z-20 bottom-[150px] right-[10%] bg-black/90 text-white px-8 py-4 rounded-full font-display border border-[#D4AF37] backdrop-blur-md hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all shadow-lg text-lg">
                            S'inscrire ➔
                        </Link>
                    </div>

                    {/* --- DESKTOP REVIEW BADGE --- */}
                    <div className="hidden md:block absolute top-[20%] right-[15%] z-20 bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-center">
                        <div className="text-[#D4AF37] tracking-widest text-sm">★★★★★</div>
                        <div className="font-display text-black text-3xl font-bold leading-none mt-1">10 Ans</div>
                        <div className="text-[#888] text-xs">d'Expérience</div>
                    </div>

                </div>

                {/* --- MOBILE ACTION BUTTONS (Stacked below image) --- */}
                <div className="flex md:hidden flex-wrap justify-center w-full mt-[-40px] relative z-20 gap-3 px-4">
                    <Link href="#programme" className="bg-black/90 text-white px-6 py-3 rounded-full font-display border border-[#D4AF37] backdrop-blur-md text-sm shadow-lg">
                        Voir le Programme
                    </Link>
                    <Link href="/inscription" className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-display border border-[#D4AF37] text-sm shadow-lg font-bold">
                        S'inscrire ➔
                    </Link>
                </div>

            </div>

            {/* --- MODULES SECTION (Preserved) --- */}
            <section id="programme" className="py-20 px-6 md:px-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center font-display text-3xl md:text-5xl text-[#D4AF37] mb-16 uppercase">
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
