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

            {/* --- HERO COMMUNICATION (BENTO UI) --- */}
            <section className="hero-communication bg-white rounded-b-[30px] md:rounded-b-[60px] pt-[120px] pb-[60px] px-[20px] md:px-[50px] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center">

                    {/* --- GAUCHE : CONTENU TEXTE (40%) --- */}
                    <div className="lg:col-span-5 text-center lg:text-left z-10">
                        <div className="badge-new inline-block bg-[#f0f0f0] text-black px-[15px] py-[5px] rounded-full text-[0.8rem] font-bold uppercase tracking-wider mb-[20px] border border-[#e0e0e0]">
                            Nouveau Module
                        </div>
                        <h1 className="text-black font-display text-[2.5rem] md:text-[3.5rem] leading-[1.1] mb-[20px] uppercase">
                            DEVENEZ UN STRATÈGE <br />
                            <span className="text-[#D4AF37]">DE LA COMMUNICATION</span>
                        </h1>
                        <p className="text-[#555] text-[1rem] md:text-[1.1rem] leading-[1.6] mb-[30px] max-w-[500px] mx-auto lg:mx-0">
                            Branding, Réseaux Sociaux, Publicité : apprenez à faire entendre votre voix et à construire une image de marque puissante.
                        </p>
                        <a href="#programme" className="btn-com inline-block bg-black text-white px-[30px] py-[15px] rounded-full font-bold uppercase tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Se former maintenant
                        </a>
                    </div>

                    {/* --- DROITE : MOSAÏQUE (60%) --- */}
                    <div className="lg:col-span-7 relative">
                        <div className="bento-grid grid grid-cols-2 md:grid-cols-3 gap-[15px] md:gap-[20px] h-auto md:h-[500px]">

                            {/* Carte 1 : Grande Image Verticale */}
                            <div className="card-vertical col-span-2 md:col-span-1 md:row-span-2 bg-[#f4f4f4] rounded-[20px] overflow-hidden relative group h-[300px] md:h-full">
                                <Image
                                    src="/mentor-formateur.png"
                                    alt="Étudiant en présentation"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-[20px]">
                                    <span className="text-white font-display text-[1.2rem]">Mentorat</span>
                                </div>
                            </div>

                            {/* Carte 2 : Chiffre Clé */}
                            <div className="card-stat bg-[#D4AF37] rounded-[20px] p-[20px] flex flex-col justify-center items-center text-center text-black relative overflow-hidden group">
                                <div className="absolute top-[-20px] right-[-20px] text-white/20 text-[8rem] font-display leading-none rotate-12 group-hover:rotate-0 transition-transform duration-500">50</div>
                                <span className="text-[3rem] font-display font-bold leading-none relative z-10">+50</span>
                                <span className="text-[0.9rem] font-medium uppercase tracking-wide relative z-10">Marques Accompagnées</span>
                            </div>

                            {/* Carte 3 : Outils (Visuel) */}
                            <div className="card-tools bg-[#111] rounded-[20px] p-[20px] flex flex-col justify-center items-center text-center relative overflow-hidden group">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="flex gap-4 mb-2 relative z-10">
                                    {/* Fake Logos for demo */}
                                    <div className="w-[40px] h-[40px] bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">C</div>
                                    <div className="w-[40px] h-[40px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">IG</div>
                                </div>
                                <span className="text-white text-[0.9rem] font-medium relative z-10">Maîtrisez les outils</span>
                                <span className="text-[#888] text-[0.7rem] relative z-10">Canva, Meta Ads, TikTok</span>
                            </div>

                            {/* Carte 4 : Visuel Extra (Pour remplir la grille) */}
                            <div className="card-extra col-span-2 md:col-span-2 bg-[#f8f8f8] rounded-[20px] p-[25px] flex items-center justify-between border border-[#eee] relative overflow-hidden">
                                <div className="z-10">
                                    <h3 className="font-display text-black text-[1.5rem] leading-tight mb-1">Stratégie <br />360°</h3>
                                    <p className="text-[#666] text-[0.8rem]">De l'idée à la diffusion.</p>
                                </div>
                                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-md z-10 text-[#D4AF37] text-[1.5rem]">
                                    ➔
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute right-[-20px] bottom-[-20px] w-[100px] h-[100px] bg-[#D4AF37]/10 rounded-full"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

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
