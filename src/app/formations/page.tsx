'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Calendar, Clock } from 'lucide-react';

export default function FormationsPage() {
    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Raleway:wght@300;400;600&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

            <div className="min-h-screen bg-[#050505] text-white font-raleway overflow-x-hidden selection:bg-[#C5A059] selection:text-black">

                {/* --- NAVIGATION --- */}
                <nav className="absolute top-0 w-full px-8 py-8 flex justify-between items-center z-50">
                    <div className="font-cinzel font-bold text-[#C5A059] text-2xl tracking-widest">CW DJIBOUTI</div>
                    <div className="flex gap-8 text-sm uppercase tracking-widest font-semibold">
                        <Link href="/" className="text-white hover:text-[#C5A059] transition-colors">Accueil</Link>
                        <Link href="/films" className="text-white hover:text-[#C5A059] transition-colors">Films</Link>
                        <Link href="/formations" className="text-[#C5A059] border-b border-[#C5A059] pb-1">Formations</Link>
                    </div>
                </nav>

                {/* --- HERO SECTION --- */}
                <header className="relative h-[90vh] w-full flex flex-col justify-center items-center text-center px-4">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/mentor.jpg"
                            alt="Hero Background"
                            fill
                            className="object-cover object-top opacity-60"
                            priority
                            onError={(e) => {
                                e.currentTarget.srcset = "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000";
                            }}
                        />
                        {/* Gradient Overlay (Gold Tint) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#C5A059]/10 to-[#050505] z-10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 max-w-4xl space-y-8 mt-20">
                        <div className="inline-block border border-[#C5A059] rounded-full p-2 mb-4 animate-pulse">
                            <Star className="w-6 h-6 text-[#C5A059] fill-[#C5A059]" />
                        </div>

                        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-wider leading-tight drop-shadow-2xl">
                            Réveillez le <span className="text-[#C5A059]">Réalisateur</span> en vous
                        </h1>

                        <p className="text-[#ebd69c] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            Transformez votre vision en chef-d'œuvre. Une formation d'élite pour les créateurs déterminés à marquer l'histoire du cinéma djiboutien.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                            <div className="flex items-center bg-[#050505]/80 border border-[#C5A059] rounded px-4 py-3 min-w-[300px]">
                                <span className="text-[#C5A059] mr-3">👤</span>
                                <input type="text" placeholder="Votre Nom" className="bg-transparent border-none outline-none text-white placeholder-gray-500 w-full font-raleway" />
                            </div>
                            <div className="flex items-center bg-[#050505]/80 border border-[#C5A059] rounded px-4 py-3 min-w-[300px]">
                                <span className="text-[#C5A059] mr-3">📧</span>
                                <input type="email" placeholder="Votre Email" className="bg-transparent border-none outline-none text-white placeholder-gray-500 w-full font-raleway" />
                            </div>
                            <button className="bg-gradient-to-r from-[#C5A059] to-[#9e7d3a] text-black font-cinzel font-bold uppercase px-8 py-3 rounded hover:scale-105 transition-transform shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                Rejoindre la liste
                            </button>
                        </div>
                    </div>
                </header>

                {/* --- SECTION DIVIDER --- */}
                <div className="flex items-center justify-center gap-6 my-20">
                    <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-cinzel text-[#C5A059] tracking-[0.3em] text-sm">PROGRAMME</span>
                        <span className="font-cinzel text-white text-2xl md:text-3xl tracking-widest">MASTERCLASS</span>
                    </div>
                    <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>
                </div>

                {/* --- MODULE LIST (BOXED STYLE) --- */}
                <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">

                    {/* MODULE 1 */}
                    <ModuleRow
                        title="L'Art du Storytelling"
                        subtitle="Écrire pour l'écran"
                        description="Apprenez à structurer vos idées. Du concept initial au scénario final, maîtrisez les arcs narratifs qui captivent l'audience dès la première minute."
                        image="/affiche_code1.jpg"
                        fallbackImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=500"
                        moduleNum="01"
                        date="Semaine 1"
                        reversed={false}
                    />

                    {/* MODULE 2 */}
                    <ModuleRow
                        title="Techniques de Tournage"
                        subtitle="Maîtriser la Lumière & le Cadre"
                        description="Passez derrière la caméra. Comprenez l'exposition, la composition et les mouvements de caméra qui donnent une âme à vos images."
                        image="/affiche_mbaye.jpg"
                        fallbackImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500"
                        moduleNum="02"
                        date="Semaine 2"
                        reversed={true}
                    />

                    {/* MODULE 3 */}
                    <ModuleRow
                        title="Montage & Post-Production"
                        subtitle="Le Rythme du Film"
                        description="C'est au montage que le film s'écrit une dernière fois. Apprenez le rythme, l'étalonnage et le sound design pour sublimer vos rushs."
                        image="/affiche_aube.jpg"
                        fallbackImage="https://images.unsplash.com/photo-1574717432707-c67803077e5c?q=80&w=500"
                        moduleNum="03"
                        date="Semaine 3"
                        reversed={false}
                    />

                </div>

                {/* --- FOOTER CTA --- */}
                <div className="text-center pb-20">
                    <Link href="/inscription" className="inline-block border border-[#C5A059] text-[#C5A059] font-cinzel text-xl px-12 py-4 hover:bg-[#C5A059] hover:text-black transition-all duration-500 tracking-widest uppercase">
                        S'inscrire à la Formation
                    </Link>
                </div>

            </div>
        </>
    );
}

// --- SUB COMPONENT: MODULE ROW ---
interface ModuleRowProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    fallbackImage: string;
    moduleNum: string;
    date: string;
    reversed: boolean;
}

function ModuleRow({ title, subtitle, description, image, fallbackImage, moduleNum, date, reversed }: ModuleRowProps) {
    return (
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}>

            {/* IMAGE SIDE */}
            <div className="w-full lg:w-1/2 relative group">
                <div className="relative w-full pt-[65%] overflow-hidden border border-[#C5A059]/20 rounded-sm">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                        onError={(e) => { e.currentTarget.srcset = fallbackImage; }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
                {/* Floating Badge */}
                <div className={`absolute -bottom-6 ${reversed ? 'left-10' : 'right-10'} bg-[#050505] border border-[#C5A059] px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]`}>
                    <span className="block text-[#C5A059] font-cinzel text-xs uppercase tracking-widest text-center">Module</span>
                    <span className="block text-white font-cinzel text-3xl font-bold text-center">{moduleNum}</span>
                </div>
            </div>

            {/* CONTENT SIDE (BOXED) */}
            <div className="w-full lg:w-1/2 relative">
                <div className="border border-[#C5A059] p-8 lg:p-12 relative bg-[#0a0a0a]">

                    {/* Top Badges */}
                    <div className="flex justify-between items-center mb-8 border-b border-[#C5A059]/30 pb-4">
                        <span className="text-[#C5A059] font-cinzel text-xs uppercase tracking-[0.2em] border border-[#C5A059] px-3 py-1 rounded-full">
                            Formation
                        </span>
                        <div className="flex items-center gap-2 text-gray-400 font-cinzel text-xs">
                            <Calendar className="w-4 h-4 text-[#C5A059]" />
                            <span>{date}</span>
                        </div>
                    </div>

                    <h3 className="text-[#ebd69c] font-raleway text-sm uppercase tracking-widest mb-2">{subtitle}</h3>
                    <h2 className="text-white font-cinzel text-3xl lg:text-4xl mb-6 leading-tight">{title}</h2>

                    <p className="text-gray-400 font-light leading-relaxed mb-8 text-justify">
                        {description}
                    </p>

                    <Link href="/inscription" className="group inline-flex items-center gap-2 text-[#C5A059] font-cinzel text-sm uppercase tracking-widest hover:text-white transition-colors">
                        En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>

                    {/* Decorative Corners */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C5A059]" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#C5A059]" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#C5A059]" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C5A059]" />
                </div>
            </div>

        </div>
    );
}
