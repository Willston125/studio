"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
    const highlights = [
        {
            title: "80% Pratique",
            description: "Vous filmez dès le premier jour. Learning by doing."
        },
        {
            title: "Matériel Pro",
            description: "Caméras Sony, éclairages, moniteurs de référence."
        },
        {
            title: "Petits Groupes",
            description: "Maximum 12 élèves. Encadrement personnalisé."
        },
        {
            title: "Projets Réels",
            description: "Vous repartez avec un portfolio professionnel."
        }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-semibold block mb-4">
                            NOTRE PÉDAGOGIE
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wider mb-6">
                            L'EXPÉRIENCE <span className="text-[#D4AF37]">CINEWORLD</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Chez Cineworld, on ne fait pas de la théorie en salle de classe.
                            <strong className="text-black"> Notre approche est 100% immersive</strong> :
                            vous êtes plongés dans des conditions réelles de tournage dès le premier jour.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-black mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="mt-10 p-6 bg-gray-50 border-l-4 border-[#D4AF37]">
                            <p className="text-gray-700 italic text-lg mb-3">
                                "On apprend le cinéma en faisant du cinéma, pas en lisant des livres."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold">
                                    AW
                                </div>
                                <div>
                                    <p className="font-semibold text-black">Ali William</p>
                                    <p className="text-gray-500 text-sm">Formateur & Réalisateur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/groupeeleve.png"
                                alt="Formation en immersion Cineworld"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Floating stats card */}
                        <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 shadow-xl">
                            <p className="text-4xl font-black text-[#D4AF37]">50+</p>
                            <p className="text-sm uppercase tracking-wider">Élèves formés</p>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-black p-4 rounded-full shadow-lg">
                            <p className="text-2xl font-black">2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
