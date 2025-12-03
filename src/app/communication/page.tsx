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

            {/* --- HERO ZYLO STRUCTURE (STRICT) --- */}
            <section className="zylo-hero-wrapper flex flex-col md:flex-row items-center justify-between px-[5%] py-[60px] bg-black text-white min-h-[90vh] gap-[40px]">

                {/* --- GAUCHE : TEXTE (40%) --- */}
                <div className="zylo-text-side w-full md:w-[40%] text-center md:text-left">
                    <div className="brand-badge inline-block bg-[#222] text-[#D4AF37] px-[15px] py-[5px] rounded-full text-[0.9rem] font-bold uppercase tracking-wider mb-[20px] border border-[#333]">
                        ✨ Nouveau Module
                    </div>
                    <h1 className="text-[3.5rem] md:text-[4rem] font-[800] leading-[1.1] my-[20px]">
                        AUTOMATISEZ VOTRE <br />
                        <span className="text-[#D4AF37]">CROISSANCE</span>
                    </h1>
                    <p className="text-[#ccc] text-[1.1rem] leading-[1.6] mb-[30px]">
                        Rejoignez un réseau où créateurs et marques collaborent. Du branding au montage, maîtrisez l'impact digital.
                    </p>

                    <div className="zylo-actions">
                        <a href="#programme" className="btn-main bg-white text-black px-[35px] py-[15px] rounded-[50px] font-bold inline-block hover:bg-gray-200 transition-colors text-[1.1rem]">
                            Commencer
                        </a>

                        <div className="pills-container mt-[30px] flex gap-[10px] flex-wrap justify-center md:justify-start">
                            <span className="pill border border-[#333] px-[20px] py-[10px] rounded-[50px] text-[0.9rem] bg-[#111]">Stratégie +</span>
                            <span className="pill border border-[#333] px-[20px] py-[10px] rounded-[50px] text-[0.9rem] bg-[#111]">Branding +</span>
                            <span className="pill border border-[#333] px-[20px] py-[10px] rounded-[50px] text-[0.9rem] bg-[#111]">Montage</span>
                        </div>
                    </div>
                </div>

                {/* --- DROITE : GRILLE (55%) --- */}
                <div className="zylo-grid-side w-full md:w-[55%] flex gap-[20px]">

                    {/* Colonne A (Gauche) */}
                    <div className="grid-column flex flex-col gap-[20px] w-1/2">
                        {/* Haut : GRANDE carte verticale (Portrait) */}
                        <div className="card card-tall h-[400px] bg-[#222] rounded-[40px] overflow-hidden relative group">
                            <Image
                                src="/formateur-mentor.png"
                                alt="Mentor Portrait"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* Bas : PETITE carte (Communauté) */}
                        <div className="card card-short h-[200px] bg-[#333] rounded-[40px] flex flex-col justify-center items-center text-center p-4">
                            <div className="avatars text-[2rem] mb-2">👤👤👤</div>
                            <span className="font-bold text-[1.1rem]">Rejoignez-nous</span>
                        </div>
                    </div>

                    {/* Colonne B (Droite) */}
                    <div className="grid-column flex flex-col gap-[20px] w-1/2">
                        {/* Haut : PETITE carte (Chiffre clé) */}
                        <div className="card card-short h-[200px] bg-[#333] rounded-[40px] flex flex-col justify-center items-center text-center p-4">
                            <span className="stat-val text-[#D4AF37] text-[3rem] font-[800] leading-none">+50</span>
                            <span className="stat-label text-[1rem] font-medium uppercase mt-2">Marques</span>
                        </div>
                        {/* Bas : GRANDE carte verticale (Action) */}
                        <div className="card card-tall h-[400px] bg-[#222] rounded-[40px] overflow-hidden relative group">
                            <Image
                                src="/mentor-formateur.png"
                                alt="Action Mentor"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
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
