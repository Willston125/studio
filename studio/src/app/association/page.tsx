'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MembershipModal from '@/components/MembershipModal';
import SponsorshipModal from '@/components/SponsorshipModal';

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

const PARTNERS = [
    { src: "/ambassa-de-france.png", alt: "Ambassade de France" },
    { src: "/american-corner.png", alt: "American Corner" },
    { src: "/catmoon-production.jpg", alt: "Catmoon Production" },
    { src: "/logo_bdc.png", alt: "BDC" },
    { src: "/unicef.png", alt: "UNICEF" },
];

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════

export default function AssociationPage() {
    const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
    const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState(false);

    return (
        <main className="font-sans text-[#1F252D] bg-white">

            {/* Membership Modal */}
            <MembershipModal isOpen={isMembershipModalOpen} onClose={() => setIsMembershipModalOpen(false)} />

            {/* Sponsorship Modal */}
            <SponsorshipModal isOpen={isSponsorshipModalOpen} onClose={() => setIsSponsorshipModalOpen(false)} />

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative text-white min-h-[600px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/equipes.jpg"
                        alt="Association Ensemble"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                <div className="max-w-[1200px] mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-24 w-full">
                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-lg">
                            L&apos;<span className="text-[#D4AF37]">Image</span> au Service de la <span className="text-[#D4AF37]">Jeunesse</span>
                        </h1>
                        <p className="text-gray-100 text-lg mb-8 leading-relaxed max-w-md drop-shadow-md">
                            Former, accompagner et inspirer les jeunes Djiboutiens aux métiers du cinéma et de l&apos;audiovisuel.
                        </p>
                        <button
                            onClick={() => setIsMembershipModalOpen(true)}
                            className="inline-flex items-center bg-[#D4AF37] text-white px-6 py-3 font-bold rounded hover:bg-yellow-600 transition shadow-lg group"
                        >
                            Devenir Membre
                            <svg className="ml-3 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 16 16"><path d="M6.271 4.586l3.643 3.643a.25.25 0 010 .354L6.271 12.22a.25.25 0 01-.354-.354L9.18 8.603a.25.25 0 000-.354L5.917 4.94a.25.25 0 01.354-.354z" /></svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* LE DÉFI SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="defi" className="bg-[#F4F4F4] scroll-mt-24">
                {/* Section Header Bar */}
                <div className="bg-[#7A1C38] py-3">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-white text-xl font-bold uppercase tracking-wide">Le Défi</h2>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Image Card */}
                        <div className="lg:col-span-7 relative group overflow-hidden rounded-lg shadow-xl h-80 lg:h-auto">
                            <Image
                                src="/galerie7.png"
                                alt="Jeunesse en attente"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Une Jeunesse en Attente.</h3>
                                <p className="text-sm text-gray-300 max-w-md">À Djibouti, les jeunes talents n&apos;ont pas accès aux métiers créatifs. Aucune structure ne leur offre de formation audiovisuelle professionnelle.</p>
                            </div>
                        </div>
                        {/* Right Stats Cards */}
                        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-full">
                            {/* Stat 1 */}
                            <div className="bg-[#1F252D] p-6 flex flex-col items-center justify-center text-center text-white rounded-lg shadow-md h-full">
                                <div className="w-12 h-12 rounded-full bg-[#7A1C38] flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <span className="text-3xl font-bold text-[#D4AF37] block mb-1">60%</span>
                                <span className="text-xs uppercase font-medium mb-2">Des jeunes sans emploi stable</span>
                                <span className="text-[10px] text-gray-400 leading-tight">Un taux de chômage alarmant chez les 18-30 ans à Djibouti</span>
                            </div>
                            {/* Stat 2 */}
                            <div className="bg-[#1F252D] p-6 flex flex-col items-center justify-center text-center text-white rounded-lg shadow-md h-full">
                                <div className="w-12 h-12 rounded-full bg-[#7A1C38] flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
                                </div>
                                <span className="text-3xl font-bold text-white block mb-1">0</span>
                                <span className="text-xs uppercase font-medium mb-2">École de cinéma à Djibouti</span>
                                <span className="text-[10px] text-gray-400 leading-tight">Aucune formation audiovisuelle professionnelle n&apos;existe dans le pays</span>
                            </div>
                            {/* Stat 3 */}
                            <div className="bg-[#1F252D] p-6 flex flex-col items-center justify-center text-center text-white rounded-lg shadow-md h-full">
                                <div className="w-12 h-12 rounded-full bg-[#7A1C38] flex items-center justify-center mb-4">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-3xl font-bold text-white block mb-1">85%</span>
                                <span className="text-xs uppercase font-medium mb-2">N&apos;ont jamais touché une caméra pro</span>
                                <span className="text-[10px] text-gray-400 leading-tight">Des talents créatifs inexploités faute d&apos;accès au matériel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* NOTRE DIFFÉRENCE SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="difference" className="bg-white pb-16 scroll-mt-24">
                {/* Section Header Bar */}
                <div className="bg-[#D4AF37] py-3 mb-12">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-white text-xl font-bold uppercase tracking-wide">Notre Différence</h2>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Text */}
                        <div className="lg:w-1/4 text-center lg:text-left">
                            <h3 className="text-3xl font-extrabold text-[#1F252D] leading-tight">
                                Un Modèle<br />
                                <span className="text-[#7A1C38]">100% Solidaire</span>
                            </h3>
                        </div>

                        {/* Center Chart */}
                        <div className="lg:w-1/4 flex flex-col items-center">
                            <div className="relative w-48 h-48 rounded-full border-[16px] border-[#7A1C38] flex items-center justify-center">
                                <div className="text-center z-10">
                                    <span className="block text-4xl font-extrabold text-[#1F252D]">100%</span>
                                    <span className="block text-sm font-bold text-[#1F252D]">Réinvesti</span>
                                </div>
                                <p className="absolute -bottom-12 w-48 text-[10px] text-center text-gray-500 leading-tight">Chaque franc collecté forme un jeune de plus aux métiers du cinéma.</p>
                            </div>
                            {/* Legend */}
                            <div className="flex gap-4 mt-16 text-[10px] font-bold uppercase">
                                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#7A1C38] block"></span> Formation</div>
                                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#D4AF37] block"></span> Production</div>
                                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-200 block"></span> Sensibilisation</div>
                            </div>
                        </div>

                        {/* Right Flow */}
                        <div className="lg:w-1/2 w-full">
                            <h4 className="text-sm font-bold uppercase mb-6 text-center lg:text-left tracking-wider">Comment votre don agit</h4>
                            <div className="flex items-center justify-between text-center relative">
                                {/* Arrow Line background */}
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-5"></div>
                                {/* Step 1 */}
                                <div className="flex flex-col items-center bg-white p-2 z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#7A1C38] text-white flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                    </div>
                                    <span className="text-xs font-bold leading-tight">Votre Don</span>
                                </div>
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                {/* Step 2 */}
                                <div className="flex flex-col items-center bg-white p-2 z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#7A1C38] text-white flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    </div>
                                    <span className="text-xs font-bold leading-tight">100% Réinvesti</span>
                                </div>
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                {/* Step 3 */}
                                <div className="flex flex-col items-center bg-white p-2 z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold leading-tight">Formation</span>
                                </div>
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                {/* Step 4 */}
                                <div className="flex flex-col items-center bg-white p-2 z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold leading-tight">Équipement</span>
                                </div>
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                {/* Result */}
                                <div className="flex flex-col items-center bg-white p-2 z-10">
                                    <span className="text-2xl font-extrabold text-[#7A1C38]">150+</span>
                                    <span className="text-xs font-bold leading-tight">Jeunes Formés</span>
                                    <span className="text-[9px] text-gray-500 max-w-[90px] mt-1">Des compétences garanties pour l&apos;avenir</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* NOS 3 AXES D'ACTION SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="axes" className="bg-[#F4F4F4] scroll-mt-24">
                {/* Section Header Bar */}
                <div className="bg-[#7A1C38] py-3">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-white text-xl font-bold uppercase tracking-wide">Nos 3 Axes D&apos;action</h2>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="relative h-80 group overflow-hidden rounded shadow-lg">
                            <Image src="/ultime.jpg" alt="Former" fill className="object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col items-center justify-center px-4 text-center">
                                <h3 className="text-white text-2xl font-bold uppercase mb-2">Former</h3>
                                <p className="text-gray-200 text-xs mb-4 max-w-[220px] leading-relaxed">Révéler les talents des quartiers et former les créateurs de demain aux métiers de l&apos;audiovisuel.</p>
                                <Link href="/association/former" className="bg-[#D4AF37] text-white text-xs font-bold px-4 py-2 uppercase hover:bg-white hover:text-[#D4AF37] transition rounded">En Savoir Plus</Link>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="relative h-80 group overflow-hidden rounded shadow-lg">
                            <Image src="/studio-production.png" alt="Produire" fill className="object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col items-center justify-center px-4 text-center">
                                <h3 className="text-white text-2xl font-bold uppercase mb-2">Produire</h3>
                                <p className="text-gray-200 text-xs mb-4 max-w-[220px] leading-relaxed">Accompagner les jeunes dans la création de contenus audiovisuels professionnels et engagés.</p>
                                <Link href="/association/produire" className="bg-[#D4AF37] text-white text-xs font-bold px-4 py-2 uppercase hover:bg-white hover:text-[#D4AF37] transition rounded">En Savoir Plus</Link>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative h-80 group overflow-hidden rounded shadow-lg">
                            <Image src="/eleve-classe.png" alt="Sensibiliser" fill className="object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col items-center justify-center px-4 text-center">
                                <h3 className="text-white text-2xl font-bold uppercase mb-2">Sensibiliser</h3>
                                <p className="text-gray-200 text-xs mb-4 max-w-[220px] leading-relaxed">Éveiller les consciences sur le pouvoir de l&apos;image et le potentiel créatif de la jeunesse.</p>
                                <Link href="/association/sensibiliser" className="bg-[#D4AF37] text-white text-xs font-bold px-4 py-2 uppercase hover:bg-white hover:text-[#D4AF37] transition rounded">En Savoir Plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* QUOTE SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#1F252D] py-10 relative">
                {/* Border accent lines */}
                <div className="max-w-[1200px] mx-auto px-4 relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-[#7A1C38] opacity-50"></div>
                    <div className="absolute top-0 right-0 h-full w-1 bg-[#7A1C38] opacity-50"></div>
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative">
                            <Image
                                src="/Victor_Hugo_by_Étienne_Carjat_1876_-_full.jpg"
                                alt="Victor Hugo"
                                fill
                                className="object-cover rounded-lg shadow-lg sepia"
                            />
                        </div>
                        <div>
                            <svg className="w-8 h-8 text-[#D4AF37] mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <p className="text-white text-xl md:text-2xl font-bold font-serif leading-relaxed">
                                Celui qui ouvre une porte d&apos;école,<br /> ferme une prison.
                            </p>
                            <p className="text-[#D4AF37] text-sm mt-2 font-medium tracking-wide">Victor Hugo</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* NOTRE PARCOURS SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="parcours" className="bg-white pb-16 scroll-mt-24">
                {/* Section Header Bar */}
                <div className="bg-[#D4AF37] py-3 mb-12">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-white text-xl font-bold uppercase tracking-wide">Notre Parcours</h2>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute top-[110px] left-0 w-full h-1 bg-[#D4AF37]/30 -z-10">
                            <div className="absolute top-[-4px] left-[12%] w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                            <div className="absolute top-[-4px] left-[37%] w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                            <div className="absolute top-[-4px] left-[62%] w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                            <div className="absolute top-[-4px] left-[87%] w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Event 1 */}
                            <div className="flex flex-col group">
                                <div className="h-40 overflow-hidden rounded mb-4 shadow-md relative">
                                    <Image src="/cinema-nomade.png" alt="La Genèse" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-[#1F252D]">La Genèse</h4>
                                <p className="text-xs text-[#D4AF37] font-semibold mb-1">27 Oct. 2023</p>
                                <p className="text-xs text-gray-600 leading-snug">Création de l&apos;association et premiers pas vers la formation audiovisuelle à Djibouti.</p>
                            </div>
                            {/* Event 2 */}
                            <div className="flex flex-col group">
                                <div className="h-40 overflow-hidden rounded mb-4 shadow-md relative">
                                    <Image src="/equipe-formation.jpg" alt="Premières Formations" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-[#1F252D]">Premières Formations</h4>
                                <p className="text-xs text-[#D4AF37] font-semibold mb-1">25 Fév. 2024</p>
                                <p className="text-xs text-gray-600 leading-snug">Lancement des premiers modules de formation aux métiers du cinéma et de l&apos;audiovisuel.</p>
                            </div>
                            {/* Event 3 */}
                            <div className="flex flex-col group">
                                <div className="h-40 overflow-hidden rounded mb-4 shadow-md relative">
                                    <Image src="/festivaldecinemacom.jpg" alt="Le Premier Festival" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-[#1F252D]">Le Premier Festival</h4>
                                <p className="text-xs text-[#D4AF37] font-semibold mb-1">27 Jan. 2025</p>
                                <p className="text-xs text-gray-600 leading-snug">Organisation du premier festival de cinéma djiboutien, vitrine des talents émergents.</p>
                            </div>
                            {/* Event 4 */}
                            <div className="flex flex-col group">
                                <div className="h-40 overflow-hidden rounded mb-4 shadow-md relative">
                                    <Image src="/formationgroupecom.jpg" alt="L'Expansion" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500" />
                                </div>
                                <h4 className="text-sm font-bold uppercase text-[#1F252D]">L&apos;Expansion</h4>
                                <p className="text-xs text-[#D4AF37] font-semibold mb-1">Vision 2030</p>
                                <p className="text-xs text-gray-600 leading-snug">Déploiement de centres de formation régionaux à travers tout le territoire national.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* IMPACT & VISION 2030 SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="vision" className="bg-white pb-12 scroll-mt-24">
                {/* Section Header Bar */}
                <div className="bg-[#7A1C38] py-3 mb-12">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-white text-xl font-bold uppercase tracking-wide">Notre Impact &amp; Vision 2030</h2>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left: Donut Chart */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-[#1F252D] mb-6 text-left w-full pl-12">Cap sur 2030</h3>
                            <div className="relative w-56 h-56 rounded-full border-[20px] border-gray-200 flex items-center justify-center">
                                <div className="text-center z-10">
                                    <span className="block text-5xl font-extrabold text-[#1F252D]">30%</span>
                                    <span className="block text-sm font-bold text-gray-500 uppercase">Accumulé</span>
                                </div>
                            </div>
                        </div>
                        {/* Right: Progress Lists */}
                        <div className="space-y-6">
                            {/* Item 1 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-[#1F252D] mb-1">
                                    <span>Jeunes formés</span>
                                    <span>30 / 2 030</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-[#7A1C38] h-full rounded-full w-[1.5%]"></div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-[#1F252D] mb-1">
                                    <span>Productions</span>
                                    <span>25 / 2 030</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-[#7A1C38] h-full rounded-full w-[1%]"></div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-[#1F252D] mb-1">
                                    <span>Partenaires CDC</span>
                                    <span>1 / 230</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-[#D4AF37] h-full rounded-full w-[0.5%]"></div>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-[#1F252D] mb-1">
                                    <span>Centres Régionaux</span>
                                    <span>20 / 2 030</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-[#D4AF37] h-full rounded-full w-[1%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* PARTNERS SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="partenaires" className="bg-white py-10 border-t border-gray-200 scroll-mt-24">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h3 className="text-xl font-bold text-[#1F252D] mb-6">Nos Partenaires</h3>
                    <div className="flex flex-wrap justify-between items-center gap-8">
                        {PARTNERS.map((partner, index) => (
                            <div key={index} className="relative h-24 w-40 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500">
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* CTA FOOTER BAR */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <div className="flex flex-col md:flex-row w-full text-white font-bold text-center uppercase tracking-wider text-sm md:text-lg">
                <button onClick={() => setIsMembershipModalOpen(true)} className="flex-1 bg-[#D4AF37] py-6 hover:bg-yellow-600 transition cursor-pointer">Devenir Membre</button>
                <button onClick={() => setIsSponsorshipModalOpen(true)} className="flex-1 bg-[#7A1C38] py-6 hover:bg-red-900 transition cursor-pointer">Soutenir L&apos;Association</button>
            </div>

        </main>
    );
}
