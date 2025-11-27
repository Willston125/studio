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
        <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-body">

            {/* 2. SECTION HERO (Netflix Style - Bottom Left) */}
            <section className="relative h-[85vh] w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/affiche1.png" // Image spécifique du film
                        alt="Mbaye Trambwé Cover"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradients - Bottom to Top for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content - Aligned Bottom Left */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 z-10 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl space-y-6"
                    >
                        {/* Title */}
                        <h1 className="text-6xl md:text-8xl font-headline font-black leading-[0.9] text-white drop-shadow-2xl tracking-tight">
                            MBAYE <br /> TRAMBWÉ
                        </h1>

                        {/* Metadata Row */}
                        <div className="flex items-center gap-4 text-sm md:text-base font-medium text-gray-200">
                            <div className="flex items-center text-amber-500 gap-1">
                                <Star fill="currentColor" className="w-4 h-4" />
                                <Star fill="currentColor" className="w-4 h-4" />
                                <Star fill="currentColor" className="w-4 h-4" />
                                <Star fill="currentColor" className="w-4 h-4" />
                                <Star fill="currentColor" className="w-4 h-4" />
                            </div>
                            <span className="text-white font-bold">4.8</span>
                            <span className="text-gray-400">|</span>
                            <span>2023</span>
                            <span className="text-gray-400">|</span>
                            <span>14 min</span>
                            <span className="text-gray-400">|</span>
                            <span className="border border-gray-500 px-2 py-0.5 rounded text-xs">Drame</span>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-300 font-light leading-relaxed max-w-xl drop-shadow-md">
                            Une plongée saisissante dans la réalité djiboutienne. Entre tradition et modernité, suivez le parcours bouleversant d'une jeunesse en quête de repères.
                        </p>

                        {/* Buttons Row */}
                        <div className="flex items-center gap-4 pt-4">
                            <Button
                                asChild
                                className="bg-white text-black hover:bg-white/90 font-bold text-lg px-8 py-6 rounded flex items-center gap-3 transition-colors"
                            >
                                <Link href="https://www.youtube.com/watch?v=1bep0NEFvZ0&t=103s" target="_blank">
                                    <Play fill="currentColor" className="w-6 h-6" />
                                    LECTURE
                                </Link>
                            </Button>

                            <Button
                                className="bg-transparent border-2 border-gray-500 text-white hover:bg-white/10 hover:border-white font-bold text-lg px-8 py-6 rounded flex items-center gap-3 transition-all"
                            >
                                <Plus className="w-6 h-6" />
                                MA LISTE
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. SECTION LISTE (Tendances Actuelles) */}
            <section className="px-8 md:px-12 lg:px-16 pb-24 relative z-10 -mt-10">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-6 drop-shadow-lg">
                    TENDANCES ACTUELLES
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {films.map((film) => (
                        <motion.div
                            key={film.id}
                            whileHover={{ scale: 1.05, zIndex: 20 }}
                            transition={{ duration: 0.3 }}
                            className="group cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[2/3] rounded-md overflow-hidden shadow-lg bg-neutral-800">
                                <Link href={film.link} target="_blank" className="block w-full h-full">
                                    <Image
                                        src={film.image}
                                        alt={film.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/50">
                                            <Play fill="white" className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Minimal Info Below */}
                            <div className="mt-3 px-1">
                                <h3 className="font-headline font-bold text-lg text-gray-200 truncate group-hover:text-white transition-colors">
                                    {film.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-medium font-body">
                                    {film.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
}
