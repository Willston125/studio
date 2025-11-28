'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Info, Star } from 'lucide-react';

export default function FilmsPage() {
    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Oswald:wght@400;700&display=swap');
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

            <div className="min-h-screen bg-[#0a0a0a] text-white font-montserrat overflow-x-hidden">

                {/* --- NAVIGATION --- */}
                <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
                    <div className="flex items-center gap-8">
                        {/* Logo Placeholder if image missing */}
                        <div className="text-2xl font-oswald font-bold text-[#E50914] tracking-tighter">CINEWORLD</div>

                        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
                            <Link href="/" className="hover:text-[#FFD700] transition-colors">Accueil</Link>
                            <Link href="/films" className="text-white border-b-2 border-[#E50914] pb-1">Mes Films</Link>
                            <Link href="/inscription" className="hover:text-[#FFD700] transition-colors">Formation</Link>
                        </div>
                    </div>
                    <Link href="/inscription" className="bg-[#FFD700] text-black px-5 py-2 rounded font-bold uppercase text-sm hover:bg-[#dbb700] transition-colors">
                        S'inscrire
                    </Link>
                </nav>

                {/* --- HERO SECTION (MBAYE TRAMBWÉ) --- */}
                <section className="relative h-[85vh] w-full flex items-center pl-[5%]">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/mbaye_bg.jpg"
                            alt="Mbaye Trambwé Background"
                            fill
                            className="object-cover object-center"
                            priority
                            onError={(e) => {
                                // Fallback if image missing
                                e.currentTarget.srcset = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000";
                            }}
                        />
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-30 max-w-2xl mt-16">
                        <h1 className="font-oswald text-6xl md:text-8xl uppercase leading-[0.9] mb-6 text-white drop-shadow-lg">
                            Mbaye<br />Trambwé
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-gray-300 mb-6 font-medium">
                            <span className="text-[#46d369] font-bold">98% Recommandé</span>
                            <span>2023</span>
                            <span className="border border-gray-500 px-1 rounded text-xs">HD</span>
                            <span>Drame Social</span>
                        </div>

                        <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl drop-shadow-md hidden md:block">
                            Une plongée saisissante dans la réalité djiboutienne. Entre tradition et modernité, suivez le parcours bouleversant d'une jeunesse en quête de repères.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 transition-colors">
                                <Play className="fill-black w-6 h-6" /> Lecture
                            </a>
                            <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded font-bold text-lg hover:bg-gray-500/50 transition-colors backdrop-blur-sm">
                                <Info className="w-6 h-6" /> Plus d'infos
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- CATALOG SECTION --- */}
                <section className="relative z-40 px-[5%] pb-20 -mt-10">
                    <h2 className="font-oswald text-2xl text-gray-200 mb-6 border-l-4 border-[#FFD700] pl-4">
                        Tendances Actuelles
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

                        {/* MOVIE CARD 1: CODE 2 */}
                        <MovieCard
                            title="CODE 2"
                            year="2025"
                            genre="16+"
                            image="/affiche_code2.jpg"
                            fallbackImage="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500"
                        />

                        {/* MOVIE CARD 2: L'AUBE DES AVEUGLES */}
                        <MovieCard
                            title="L'AUBE DES AVEUGLES"
                            year="2025"
                            genre="Drame"
                            image="/affiche_aube.jpg"
                            fallbackImage="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=500"
                        />

                        {/* MOVIE CARD 3: CODE */}
                        <MovieCard
                            title="CODE"
                            year="2020"
                            genre="Action"
                            image="/affiche_code1.jpg"
                            fallbackImage="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500"
                        />

                        {/* MOVIE CARD 4: MBAYE TRAMBWÉ */}
                        <MovieCard
                            title="MBAYE TRAMBWÉ"
                            year="2023"
                            genre="Culte"
                            image="/affiche_mbaye.jpg"
                            fallbackImage="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500"
                        />

                    </div>
                </section>

            </div>
        </>
    );
}

// --- SUB COMPONENT: MOVIE CARD ---
function MovieCard({ title, year, genre, image, fallbackImage }: { title: string, year: string, genre: string, image: string, fallbackImage: string }) {
    return (
        <div className="group relative bg-[#141414] rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50 hover:shadow-2xl hover:shadow-black/50">
            {/* Poster Wrapper (Aspect Ratio 2:3) */}
            <div className="relative w-full pt-[150%]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    onError={(e) => { e.currentTarget.srcset = fallbackImage; }}
                />
                {/* Hover Play Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#E50914] flex items-center justify-center shadow-[0_0_15px_#E50914]">
                        <Play className="fill-white text-white ml-1 w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <h3 className="font-oswald text-lg text-white truncate mb-1">{title}</h3>
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                    <span>{year}</span>
                    <span className="border border-gray-600 px-1 rounded text-[10px]">{genre}</span>
                </div>
            </div>
        </div>
    )
}
