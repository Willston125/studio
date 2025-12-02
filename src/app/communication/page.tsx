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

            {/* --- HERO WRAPPER (PARTIE BLANCHE) --- */}
            <div className="hero-wrapper bg-white rounded-b-[30px] md:rounded-b-[60px] pt-5 pb-10 relative text-center overflow-hidden min-h-auto md:min-h-[90vh] flex flex-col items-center">

                {/* --- NAVBAR REMOVED (Using Global Navbar) --- */}

                {/* --- TITRE PRINCIPAL --- */}
                <h1 className="text-black font-display text-[2.2rem] md:text-[3.5rem] leading-[1.1] mt-[100px] md:mt-[120px] mb-[10px] md:mb-[10px] uppercase max-w-[900px] px-[15px] relative z-10 mx-auto">
                    MAÎTRISEZ L'ART DU <span className="text-[#D4AF37]">DIGITAL</span><br />
                    CRÉEZ. IMPACTEZ.
                </h1>

                {/* --- Décoration Étoile --- */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="deco-spark absolute top-[10px] md:top-[50px] left-[10px] md:left-[5%] text-[#D4AF37] text-[2rem] md:text-[3rem] opacity-80"
                >
                    ✶
                </motion.div>

                {/* --- GRILLE CENTRALE (Mise en scène) --- */}
                <div className="hero-grid relative w-full max-w-[1200px] h-auto md:h-[600px] mt-0 md:mt-[20px] flex flex-col md:flex-row justify-center items-center md:items-end mx-auto">

                    {/* TEXTE GAUCHE */}
                    <div className="intro-text-box order-2 md:order-1 relative md:absolute md:left-[5%] md:top-[30%] w-[90%] md:w-[280px] text-center md:text-left z-[5] mt-[40px] md:mt-0 mb-[20px] md:mb-0 mx-auto md:mx-0">
                        <span className="mini-title text-[#D4AF37] font-bold uppercase tracking-[1px] mb-[10px] block text-[0.9rem]">INNOVATE YOUR BRAND</span>
                        <p className="intro-desc text-[0.9rem] text-[#555] leading-[1.6] mb-[20px]">
                            Du graphisme au marketing, nous vous livrons les stratégies innovantes qui élèvent votre marque. Créons quelque chose d'exceptionnel ensemble.
                        </p>
                        <Link href="#programme" className="btn-pill-black px-[25px] py-[10px] border border-black rounded-[50px] text-black font-display text-[0.85rem] transition-all inline-block bg-transparent hover:bg-black hover:text-white">
                            Voir le Programme
                        </Link>

                        {/* FLÈCHE DESSINÉE (Desktop only) */}
                        <svg className="curly-arrow hidden md:block absolute -right-[50px] -bottom-[30px] w-[60px] -rotate-[20deg]" viewBox="0 0 100 100">
                            <path d="M10,10 Q50,10 50,50 T90,90" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    {/* IMAGE CENTRALE */}
                    <div className="hero-image-container order-1 md:order-2 relative z-10 cursor-pointer transition-transform duration-300 hover:scale-[1.01] mt-[20px] md:mt-0 w-full flex justify-center" onClick={toggleQuote}>

                        {/* CERCLE FOND */}
                        <div className="circle-backdrop absolute w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-[#f4f4f4] rounded-full -bottom-[20px] md:-bottom-[100px] left-1/2 -translate-x-1/2 z-[1]"></div>

                        {/* BULLE CITATION */}
                        <AnimatePresence>
                            {showQuote && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20, x: "-50%" }}
                                    animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, scale: 0.8, y: 20, x: "-50%" }}
                                    className="quote-bubble absolute top-0 md:top-[50px] left-1/2 md:left-auto md:right-[-150px] bg-white p-[15px] rounded-[15px] rounded-bl-none shadow-[0_10px_30px_rgba(0,0,0,0.15)] w-[220px] md:w-[240px] text-left border-2 border-[#D4AF37] z-[20] md:translate-x-0"
                                >
                                    <p className="quote-text font-display text-[1rem] text-black italic">"La créativité c'est l'intelligence qui s'amuse."</p>
                                    <span className="quote-author block mt-[5px] text-[0.8rem] text-[#D4AF37] font-bold">- Ali William</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* IMAGE */}
                        <Image
                            src="/mentor-formateur.png"
                            alt="Ali William"
                            width={600}
                            height={800}
                            className="ali-photo h-[350px] md:h-[550px] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] relative z-10"
                            priority
                        />

                        {/* Petit bouton indicateur */}
                        <div className="absolute bottom-[20px] right-[20px] bg-white px-[12px] py-[5px] rounded-[20px] text-[0.7rem] text-[#888] shadow-[0_4px_10px_rgba(0,0,0,0.1)] pointer-events-none z-20">
                            👆 Cliquez sur moi
                        </div>
                    </div>

                    {/* BADGE DROITE */}
                    <div className="xp-badge order-3 md:order-3 relative md:absolute md:right-[10%] md:top-[35%] text-center z-[5] mt-[20px] md:mt-0 mb-[10px] md:mb-0">
                        <div className="xp-stars text-[#D4AF37] text-[1rem] mb-[5px]">★★★★★</div>
                        <div className="xp-number text-[3.5rem] font-display leading-[0.9] text-black font-bold">10 Ans</div>
                        <div className="xp-label text-[0.9rem] text-[#777] font-medium">d'Expérience</div>
                    </div>

                </div>
            </div>

            {/* --- PARTIE BASSE (NOIRE) - PROGRAMME --- */}
            <div className="dark-section bg-[#050505] py-[60px] px-[20px] text-center" id="programme">
                <h2 className="section-title text-[#D4AF37] font-display text-[2.5rem] mb-[50px] uppercase">LE PROGRAMME COMPLET</h2>

                <div className="modules-grid grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] max-w-[1200px] mx-auto mb-[60px]">
                    {/* CARTE 1 */}
                    <div className="module-card bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[15px] p-[30px] text-left transition-all duration-300 hover:-translate-y-[5px] hover:border-[#D4AF37]">
                        <div className="icon-box text-[#D4AF37] text-[2.5rem] mb-[20px]"><i className="fa-solid fa-paintbrush"></i></div>
                        <h3 className="module-title font-display text-white text-[1.4rem] mb-[10px]">Design Graphique Pro</h3>
                        <p className="module-desc text-[#aaa] text-[0.9rem] leading-[1.5] mb-[15px]">Maîtrisez Photoshop pour créer des affiches de film, des retouches photos professionnelles et des visuels impactants.</p>
                        <div className="tag-list flex flex-wrap gap-1">
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Photoshop</span>
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Détourage</span>
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Composition</span>
                        </div>
                    </div>
                    {/* CARTE 2 */}
                    <div className="module-card bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[15px] p-[30px] text-left transition-all duration-300 hover:-translate-y-[5px] hover:border-[#D4AF37]">
                        <div className="icon-box text-[#D4AF37] text-[2.5rem] mb-[20px]"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                        <h3 className="module-title font-display text-white text-[1.4rem] mb-[10px]">Création Rapide & Efficace</h3>
                        <p className="module-desc text-[#aaa] text-[0.9rem] leading-[1.5] mb-[15px]">Apprenez à utiliser Canva comme un pro pour gérer vos réseaux sociaux et créer du contenu viral en quelques minutes.</p>
                        <div className="tag-list flex flex-wrap gap-1">
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Canva Pro</span>
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Réseaux Sociaux</span>
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Identité Visuelle</span>
                        </div>
                    </div>
                    {/* CARTE 3 */}
                    <div className="module-card bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[15px] p-[30px] text-left transition-all duration-300 hover:-translate-y-[5px] hover:border-[#D4AF37]">
                        <div className="icon-box text-[#D4AF37] text-[2.5rem] mb-[20px]"><i className="fa-solid fa-bullhorn"></i></div>
                        <h3 className="module-title font-display text-white text-[1.4rem] mb-[10px]">Marketing Digital</h3>
                        <p className="module-desc text-[#aaa] text-[0.9rem] leading-[1.5] mb-[15px]">Ne faites pas que créer, apprenez à vendre. Stratégie de contenu, publicité Facebook/Instagram et branding personnel.</p>
                        <div className="tag-list flex flex-wrap gap-1">
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Stratégie</span>
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Publicité</span>
                            <span className="inline-block bg-[#222] text-[#ccc] px-[8px] py-[4px] rounded-[4px] text-[0.75rem] mr-[5px]">Branding</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-white font-display text-[2rem] md:text-[2.5rem] mb-[20px] uppercase">PRÊT À LANCER VOTRE CARRIÈRE ?</h2>
                <p className="text-[#aaa] mb-[30px]">Les places sont limitées. Rejoignez la prochaine session.</p>
                <Link href="/inscription" className="btn-register bg-[#E50914] text-white px-[40px] py-[15px] font-display uppercase text-[1.2rem] rounded-[5px] inline-block hover:bg-[#b2070f] transition-colors">
                    S'INSCRIRE À LA FORMATION
                </Link>
            </div>

        </main>
    );
}
