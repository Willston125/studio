"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// 1. DONNÉES DES FILMS
const films = [
    {
        id: 1,
        title: "MBAYE TRAMBWÉ",
        category: "Drame Social",
        meta: "2023 • 14 min",
        year: "2023",
        image: "/affiche1.png", // Visage de l'homme
        link: "https://www.youtube.com/watch?v=1bep0NEFvZ0&t=103s",
        isNew: true,
    },
    {
        id: 2,
        title: "L'AUBE DES AVEUGLES",
        category: "Documentaire",
        meta: "2025 • 9 min",
        year: "2025",
        image: "/affiche3.png", // Yeux bandés
        link: "https://www.youtube.com/watch?v=SjcPxIWgRTI&t=401s",
        isNew: false,
    },
    {
        id: 3,
        title: "CODE",
        category: "Thriller",
        meta: "2020 • 8 min",
        year: "2020",
        image: "/affiche4.png", // Couteau
        link: "https://www.youtube.com/watch?v=cuMDhl0xyxA&t=95s",
        isNew: false,
    },
    {
        id: 4,
        title: "CODE 2",
        category: "Action",
        meta: "2025 • 25 min",
        year: "2025",
        image: "/affiche2.png", // Pistolet
        link: "https://www.youtube.com/watch?v=h-zKt_xyzrs&t=744s",
        isNew: true,
    },
];

export default function NosFilmsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-body selection:bg-amber-500/30">

            {/* 2. SECTION HERO (Netflix Style - Bottom Left) */}
            <section className="relative h-[90vh] w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/affiche1.png" // Image spécifique du film
                        alt="Mbaye Trambwé Cover"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradients - Enhanced for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content - Aligned Bottom Left */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 z-10 pb-12 md:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-3xl space-y-4 md:space-y-6"
                    >
                        {/* Title */}
                        <h1 className="text-5xl md:text-9xl font-headline font-black leading-[0.9] text-white drop-shadow-2xl tracking-tight">
                            MBAYE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">TRAMBWÉ</span>
                        </h1>

                        {/* Metadata Row */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-base font-medium text-gray-200">
                            <div className="flex items-center text-amber-500 gap-1">
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            </div>
                            <span className="text-white font-bold">4.9</span>
                            <span className="text-gray-500">|</span>
                            <span>2023</span>
                            <span className="text-gray-500">|</span>
                            <span>14 min</span>
                            <span className="text-gray-500">|</span>
                            <span className="border border-gray-500/50 bg-white/5 px-2 py-0.5 rounded text-[10px] md:text-xs tracking-wider">DRAME SOCIAL</span>
                            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded ml-2">TOP 1</span>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl drop-shadow-md line-clamp-3 md:line-clamp-none">
                            Une plongée saisissante dans la réalité djiboutienne. Entre tradition et modernité, suivez le parcours bouleversant d'une jeunesse en quête de repères.
                        </p>

                        {/* Buttons Row */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-4 md:pt-6">
                            <Button
                                asChild
                                className="bg-white text-black hover:bg-gray-200 font-bold text-base md:text-lg px-6 py-6 md:px-8 md:py-7 rounded flex items-center gap-2 md:gap-3 transition-all transform hover:scale-105"
                            >
                                <Link href="https://www.youtube.com/watch?v=1bep0NEFvZ0&t=103s" target="_blank">
                                    <Play fill="currentColor" className="w-5 h-5 md:w-7 md:h-7" />
                                    Lecture
                                </Link>
                            </Button>

                            <Button
                                className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 font-bold text-base md:text-lg px-6 py-6 md:px-8 md:py-7 rounded flex items-center gap-2 md:gap-3 transition-all"
                            >
                                <Plus className="w-5 h-5 md:w-7 md:h-7" />
                                Ma Liste
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. SECTION LISTE (Tendances Actuelles) */}
            <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32 relative z-10 mt-0 md:-mt-20">
                <h2 className="text-xl md:text-3xl font-headline font-bold text-white mb-6 md:mb-8 drop-shadow-lg flex items-center gap-2 md:gap-3">
                    TENDANCES ACTUELLES <span className="text-amber-500 text-3xl md:text-4xl">.</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {films.map((film, index) => (
                        <motion.div
                            key={film.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -10, zIndex: 20 }}
                            className="group cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl bg-neutral-900 border border-white/5 group-hover:border-amber-500/50 transition-colors duration-300">
                                <Link href={film.link} target="_blank" className="block w-full h-full">
                                    <Image
                                        src={film.image}
                                        alt={film.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-amber-500/90 rounded-full p-4 shadow-[0_0_20px_rgba(212,175,55,0.5)] transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                            <Play fill="black" className="w-8 h-8 text-black ml-1" />
                                        </div>
                                    </div>

                                    {/* Badge New */}
                                    {film.isNew && (
                                        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">
                                            NOUVEAU
                                        </div>
                                    )}
                                </Link>
                            </div>

                            {/* Minimal Info Below */}
                            <div className="mt-4 px-1 space-y-1">
                                <h3 className="font-headline font-bold text-xl text-gray-100 truncate group-hover:text-amber-500 transition-colors">
                                    {film.title}
                                </h3>
                                <div className="flex items-center justify-between text-xs text-gray-400 font-medium font-body">
                                    <span>{film.year}</span>
                                    <span className="border border-gray-600 px-1.5 rounded text-[10px]">HD</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
}
