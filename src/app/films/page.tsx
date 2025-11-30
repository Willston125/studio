'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FilmsPage() {
    return (
        <>
            <div className="min-h-screen bg-[#050505] text-white font-raleway overflow-x-hidden selection:bg-[#C5A059] selection:text-black">

                {/* --- NAVIGATION --- */}
                <nav className="absolute top-0 w-full px-8 py-8 flex justify-between items-center z-50">
                    <div className="font-cinzel font-bold text-[#C5A059] text-2xl tracking-widest">CW DJIBOUTI</div>
                    <div className="flex gap-8 text-sm uppercase tracking-widest font-semibold">
                        <Link href="/" className="text-white hover:text-[#C5A059] transition-colors">Accueil</Link>
                        <Link href="/films" className="text-[#C5A059] border-b border-[#C5A059] pb-1">Films</Link>
                    </div>
                </nav>

                {/* --- HERO SECTION --- */}
                <header className="relative h-[80vh] w-full flex flex-col justify-end items-center text-center pb-20">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/mbaye_bg.jpg"
                            alt="Hero Background"
                            fill
                            className="object-cover object-center"
                            priority
                            onError={(e) => {
                                e.currentTarget.srcset = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000";
                            }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20 z-10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 max-w-3xl px-6">
                        <h1 className="font-cinzel text-5xl md:text-7xl text-white mb-4 uppercase tracking-wider drop-shadow-2xl">
                            Une Vision Cinématographique
                        </h1>
                        <p className="text-[#ebd69c] text-lg md:text-xl italic font-light tracking-wide">
                            Explorez les œuvres qui redéfinissent le récit djiboutien.
                        </p>
                    </div>
                </header>

                {/* --- ORNAMENTAL DIVIDER --- */}
                <div className="flex items-center justify-center gap-6 my-16 opacity-80">
                    <div className="h-[1px] w-24 bg-[#C5A059] opacity-50"></div>
                    <div className="text-[#C5A059] font-cinzel text-xl border border-[#C5A059] px-6 py-2 rounded tracking-widest">
                        FILMOGRAPHIE
                    </div>
                    <div className="h-[1px] w-24 bg-[#C5A059] opacity-50"></div>
                </div>

                {/* --- FILM LIST (ZIG-ZAG) --- */}
                <div className="max-w-6xl mx-auto px-6 pb-24 space-y-24">

                    {/* FILM 1: MBAYE TRAMBWÉ */}
                    <FilmRow
                        title="Mbaye Trambwé"
                        year="2023"
                        genre="Drame Social"
                        description="Une plongée saisissante dans la réalité djiboutienne. Entre tradition et modernité, suivez le parcours bouleversant d'une jeunesse en quête de repères face aux défis urbains."
                        image="/affiche_mbaye.jpg"
                        fallbackImage="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500"
                        link="https://youtu.be/TON_LIEN_ICI"
                        buttonText="Regarder le film"
                        reversed={false}
                    />

                    {/* FILM 2: CODE 2 */}
                    <FilmRow
                        title="Code 2 : L'Achèvement"
                        year="2025"
                        genre="Action"
                        description="La suite tant attendue. Ali William revient avec une réalisation plus nerveuse. Une histoire de trahison et de rédemption dans les bas-fonds."
                        image="/affiche_code2.jpg"
                        fallbackImage="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500"
                        link="https://youtu.be/TON_LIEN_ICI"
                        buttonText="Voir la bande annonce"
                        reversed={true}
                    />

                    {/* FILM 3: L'AUBE DES AVEUGLES */}
                    <FilmRow
                        title="L'Aube des Aveugles"
                        year="2025"
                        genre="Historique"
                        description="&quot; Jusqu'à sauver son peuple&quot;. Une épopée visuelle marquante signée par le groupe OATMOON. Une œuvre qui questionne notre perception de l'histoire."
                        image="/affiche_aube.jpg"
                        fallbackImage="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=500"
                        link="https://youtu.be/TON_LIEN_ICI"
                        buttonText="Découvrir l'œuvre"
                        reversed={false}
                    />

                </div>

            </div>
        </>
    );
}

// --- SUB COMPONENT: FILM ROW ---
interface FilmRowProps {
    title: string;
    year: string;
    genre: string;
    description: string;
    image: string;
    fallbackImage: string;
    link: string;
    buttonText: string;
    reversed: boolean;
}

function FilmRow({ title, year, genre, description, image, fallbackImage, link, buttonText, reversed }: FilmRowProps) {
    return (
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 group`}>

            {/* IMAGE */}
            <div className="w-full lg:w-1/2 relative overflow-hidden border border-[#C5A059]/30">
                <div className="relative w-full pt-[60%] lg:pt-[70%]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                        onError={(e) => { e.currentTarget.srcset = fallbackImage; }}
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 relative p-8 lg:p-12 border border-[#C5A059] bg-gradient-to-b from-transparent to-[#141414]/50">

                {/* Corner Decos */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />

                {/* Badges */}
                <div className="flex gap-4 mb-6">
                    <span className="border border-[#C5A059] text-[#C5A059] px-4 py-1 rounded-full text-xs font-cinzel font-bold uppercase tracking-wider">
                        {genre}
                    </span>
                    <span className="border border-[#C5A059] text-[#C5A059] px-4 py-1 rounded-full text-xs font-cinzel font-bold uppercase tracking-wider">
                        {year}
                    </span>
                </div>

                <h2 className="font-cinzel text-3xl lg:text-4xl text-white mb-6 leading-tight">
                    {title}
                </h2>

                <p className="text-[#cccccc] text-lg font-light leading-relaxed mb-8">
                    {description}
                </p>

                <a
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-3 text-[#C5A059] font-semibold uppercase tracking-[0.15em] text-sm group/btn hover:gap-5 transition-all duration-300 border-b border-transparent hover:border-[#C5A059] pb-1"
                >
                    {buttonText} <ArrowRight className="w-4 h-4" />
                </a>

            </div>
        </div>
    );
}
