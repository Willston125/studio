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
        <main className="bg-white min-h-screen font-sans overflow-x-hidden">

            {/* --- HERO STRICT SEOC STYLE --- */}
            <section className="hero-seoc-split relative bg-white overflow-hidden py-[80px] font-sans min-h-[90vh] flex items-center">

                {/* Blobs */}
                <div className="absolute w-[400px] h-[400px] bg-[#8e44ad] rounded-full blur-[80px] top-[-100px] left-[-100px] z-0 opacity-50"></div>
                <div className="absolute w-[300px] h-[300px] bg-[#ff7675] rounded-full blur-[80px] bottom-[-50px] right-[-50px] z-0 opacity-50"></div>

                <div className="container split-container flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] mx-auto px-[20px] relative z-10">

                    {/* --- GAUCHE : CONTENU (45%) --- */}
                    <div className="content-side w-full md:w-[45%] text-center md:text-left relative">
                        <div className="badge-pill inline-block bg-[#f3e5f5] text-[#8e44ad] px-[20px] py-[8px] rounded-[50px] font-bold mb-[20px]">
                            🚀 Formation Certifiante 2025
                        </div>

                        <h1 className="text-[3.5rem] leading-[1.1] text-[#2c3e50] font-[800] mb-[20px]">
                            Devenez un Expert du <br />
                            <span className="text-[#8e44ad]">Design Digital</span>
                        </h1>

                        <p className="hero-desc text-[1.1rem] text-[#666] mb-[30px] leading-[1.6]">
                            Ne créez plus au hasard. Apprenez à maîtriser <strong className="text-[#333] font-bold">Photoshop, Canva & l'IA</strong> pour propulser votre communication visuelle au niveau supérieur.
                        </p>

                        <div className="btn-group-left flex gap-[15px] justify-center md:justify-start flex-wrap">
                            <a href="#inscription" className="btn-fill bg-[#8e44ad] text-white px-[30px] py-[15px] rounded-[50px] font-bold hover:bg-[#732d91] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Je m'inscris maintenant ↗
                            </a>
                            <a href="#programme" className="btn-outline border-2 border-[#f3e5f5] text-[#8e44ad] px-[30px] py-[15px] rounded-[50px] font-bold hover:bg-[#f3e5f5] transition-colors">
                                Voir le programme
                            </a>
                        </div>

                        {/* Doodle Arrow */}
                        <div className="doodle-arrow absolute right-[-50px] bottom-[80px] text-[4rem] text-[#8e44ad] rotate-45 opacity-60 hidden md:block font-serif select-none pointer-events-none">
                            ⤵
                        </div>
                    </div>

                    {/* --- DROITE : VISUEL (50%) --- */}
                    <div className="visual-side w-full md:w-[50%] relative flex justify-center mb-[40px] md:mb-0">
                        <div className="relative z-10">
                            <Image
                                src="/mentor-formateur.png"
                                alt="Mentor Formateur Communication"
                                width={500}
                                height={600}
                                className="main-img max-w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Card Top */}
                        <div className="float-card card-top absolute top-[10%] right-0 bg-white p-[15px] rounded-[20px] shadow-xl flex items-center gap-[15px] z-20 animate-bounce-slow border border-gray-100">
                            <span className="icon text-[1.5rem] bg-[#f3e5f5] p-[10px] rounded-[12px]">🎨</span>
                            <div className="info flex flex-col text-left">
                                <strong className="text-[#333]">+50 Modèles</strong>
                                <small className="text-[#666]">Prêts à l'emploi</small>
                            </div>
                        </div>

                        {/* Floating Card Bottom */}
                        <div className="float-card card-bottom absolute bottom-[15%] left-0 bg-white p-[15px] rounded-[20px] shadow-xl flex items-center gap-[15px] z-20 animate-bounce-slow delay-700 border border-gray-100">
                            <span className="icon text-[1.5rem] bg-[#f3e5f5] p-[10px] rounded-[12px]">✨</span>
                            <div className="info flex flex-col text-left">
                                <strong className="text-[#333]">Certifié</strong>
                                <small className="text-[#666]">Expert Canva/Ps</small>
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

        </main >
    );
}
