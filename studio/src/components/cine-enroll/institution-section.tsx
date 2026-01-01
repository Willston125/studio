
"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function InstitutionSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Side - Professional & Clean */}
                        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/experience-bg.png"
                                alt="L'excellence de l'Académie Cineworld"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        </div>

                        {/* Text Side - Academic Typography */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-[#B8860B] font-bold tracking-[0.2em] uppercase text-sm block">
                                    L'EXCELLENCE ACADÉMIQUE
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter">
                                    FORGER LES RÉALISATEURS <br /> DE DEMAIN.
                                </h2>
                                <div className="w-20 h-2 bg-black"></div>
                            </div>

                            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed font-body">
                                <p>
                                    Cineworld Academy n'est pas seulement un centre de formation. C'est un écosystème conçu pour transformer la passion en expertise technique et artistique rigoureuse.
                                </p>
                                <p>
                                    Inspirée par les plus grandes institutions mondiales, notre pédagogie repose sur un équilibre parfait entre théorie fondamentale et pratique intensive sur le terrain.
                                </p>

                                <ul className="space-y-4 pt-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#FFD700] text-2xl">●</span>
                                        <span className="text-black font-bold">Matériel professionnel de dernière génération</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#FFD700] text-2xl">●</span>
                                        <span className="text-black font-bold">Intervenants certifiés et actifs dans l'industrie</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#FFD700] text-2xl">●</span>
                                        <span className="text-black font-bold">Réseau d'anciens élèves connectés au marché</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
