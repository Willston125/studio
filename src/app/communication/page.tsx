'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommunicationPage() {
    const [showQuote, setShowQuote] = useState(false);

    const toggleQuote = () => {
        setShowQuote(!showQuote);
    };

    // Auto-hide quote after 5 seconds
    useEffect(() => {
        if (showQuote) {
            const timer = setTimeout(() => {
                setShowQuote(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showQuote]);

    return (
        <main className="bg-[#050505] text-white min-h-screen font-body overflow-x-hidden">

            {/* --- HERO WRAPPER --- */}
            <div className="bg-white rounded-b-[40px] md:rounded-b-[60px] pt-5 pb-10 relative text-center overflow-hidden min-h-[90vh] flex flex-col items-center">

                {/* --- NAVIGATION PILULE (Scrollable Mobile) --- */}
                <div className="w-full flex justify-center px-5 mb-8 z-30 relative">
                    <nav className="inline-flex gap-1 px-4 py-2 bg-black rounded-full overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">
                        <Link href="/" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Accueil</Link>
                        <Link href="#" className="bg-[#D4AF37] text-black font-display uppercase text-sm px-4 py-2 rounded-full">Cours Com'</Link>
                        <Link href="/inscription" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Inscription</Link>
                        <Link href="/contact" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Contact</Link>
                        <Link href="/reglement" className="text-white font-display uppercase text-sm px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors">Règlement</Link>
                    </nav>
                </div>

                {/* --- DECORATION SPARK --- */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[50px] left-[5%] text-[#D4AF37] text-[2rem] md:text-[4rem] opacity-80 z-0"
                >
                    ✶
                </motion.div>

                {/* --- HERO TITLE --- */}
                <h1 className="text-black font-display text-[2.2rem] md:text-[3.5rem] uppercase leading-[1.1] mb-4 max-w-[900px] px-4 mx-auto relative z-10">
                    Maîtrisez l'Art du <span className="text-[#D4AF37]">Digital</span><br />
                    Créez. Impactez.
                </h1>

                {/* --- HERO GRID --- */}
                <div className="relative w-full max-w-[1200px] flex-grow mt-5 flex flex-col md:flex-row justify-center items-center md:items-end px-4">

                    {/* 1. LEFT: INTRO TEXT */}
                    <div className="order-1 md:order-1 relative md:absolute md:left-[5%] md:top-[30%] w-full md:w-[280px] text-center md:text-left z-20 mb-8 md:mb-0">
                        <span className="block text-[#D4AF37] font-bold uppercase tracking-widest mb-2 text-sm md:text-base">Innovate Your Brand</span>
                        <p className="text-[#555] text-[0.95rem] leading-relaxed mb-5">
                            Du graphisme au marketing, nous vous livrons les stratégies innovantes qui élèvent votre marque. Créons quelque chose d'exceptionnel ensemble.
                        </p>
                        <Link href="#programme" className="inline-block px-6 py-3 border border-black rounded-full text-black font-display text-sm hover:bg-black hover:text-white transition-all">
                            Voir le Programme
                        </Link>

                        {/* CURLY ARROW SVG (Desktop Only) */}
                        <svg className="hidden md:block absolute -right-[60px] -bottom-[40px] w-[80px] -rotate-[20deg]" viewBox="0 0 100 100">
                            <path d="M10,10 Q50,10 50,50 T90,90" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    {/* 2. CENTER: IMAGE & CIRCLE */}
                    <div className="order-2 md:order-2 relative z-10 cursor-pointer group" onClick={toggleQuote}>

                        {/* Circle Backdrop */}
                        <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#f4f4f4] rounded-full bottom-[40px] md:-bottom-[150px] left-1/2 -translate-x-1/2 z-0"></div>

                        {/* Quote Bubble */}
                        <AnimatePresence>
                            {showQuote && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20, x: "-50%" }}
                                    animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, scale: 0.8, y: 20, x: "-50%" }}
                                    className="absolute top-[-100px] md:top-[20px] left-1/2 md:left-auto md:right-[-160px] md:translate-x-0 bg-white p-5 rounded-[20px] rounded-bl-none shadow-[0_10px_30px_rgba(0,0,0,0.2)] w-[280px] text-left border-2 border-[#D4AF37] z-30 pointer-events-auto"
                                >
                                    <p className="font-display italic text-black text-[1.1rem] leading-snug">"La créativité demande du courage. Osez sortir du cadre et imposez votre vision."</p>
                                    <span className="block mt-2 text-xs text-[#D4AF37] font-bold uppercase">- Ali William</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Mentor Image */}
                        <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/formateur-mentore.png"
                                alt="Ali William"
                                width={600}
                                height={800}
                                className="h-[400px] md:h-[550px] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
                                priority
                            />

                            {/* Click Indicator */}
                            <div className="absolute bottom-[20px] right-[20px] bg-white px-3 py-1 rounded-full text-[0.7rem] text-[#888] shadow-md flex items-center gap-1 animate-bounce">
                                <span>👆</span> Cliquez sur moi
                            </div>
                        </div>

                    </div>

                    {/* 3. RIGHT: XP BADGE */}
                    <div className="order-3 md:order-3 relative md:absolute md:right-[10%] md:top-[35%] text-center z-20 mt-8 md:mt-0 mb-10 md:mb-0">
                        <div className="text-[#D4AF37] text-[1.2rem] mb-1">★★★★★</div>
                        <div className="font-display text-black text-[3.5rem] font-bold leading-[0.9]">10 Ans</div>
                        <div className="text-[#777] font-medium text-base">d'Expérience</div>
                    </div>

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
