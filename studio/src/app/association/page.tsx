'use client';

import React from 'react';
import Link from 'next/link';
import { Target, Users, Globe, Handshake, ArrowRight } from 'lucide-react';

const piliers = [
    {
        icon: Target,
        title: "Excellence Éducative",
        desc: "Nous offrons des standards de formation internationaux, accessibles localement, pour propulser les talents djiboutiens sur la scène mondiale."
    },
    {
        icon: Users,
        title: "Mission Sociale",
        desc: "Réduire la fracture numérique et culturelle en offrant des bourses et des programmes d'insertion pour les jeunes passionnés."
    },
    {
        icon: Globe,
        title: "Culture Locale",
        desc: "Valoriser le patrimoine de Djibouti à travers le cinéma et l'image, pour que nos histoires soient racontées par nous, pour nous."
    }
];

export default function AssociationPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* HEADER / NAVIGATION RAPPEL (Cohérence institutionnelle) */}
            <nav className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-12">
                <div className="font-black text-xl uppercase tracking-tighter">
                    CINEWORDL<span className="text-[#D4AF37]">ACADÉMIE</span>
                </div>
                <Link href="/" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">
                    ← RETOUR ACCUEIL
                </Link>
            </nav>

            {/* HERO SECTION */}
            <section className="py-24 px-6 bg-[#F9FAFB] border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-yellow-100/50 text-[#B8860B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        L'ASBL CINEWORLD
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        Plus qu'une école,<br />
                        un <span className="text-[#D4AF37]">Moteur de Changement</span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Depuis notre création, notre mission dépasse l'apprentissage technique.
                        Nous bâtissons un écosystème créatif pour la jeunesse de Djibouti.
                    </p>
                </div>
            </section>

            {/* SECTION 3 PILIERS */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {piliers.map((pilier, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-[#F9FAFB] border border-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors">
                                <pilier.icon className="w-7 h-7 text-[#D4AF37]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{pilier.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {pilier.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION PARTENAIRES & ENTREPRISES */}
            <section className="py-20 px-6 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        {/* Logos Partenaires (Gris) */}
                        <div className="flex-1 space-y-8">
                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest text-center md:text-left">
                                ILS NOUS FONT CONFIANCE
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-40">
                                <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* CTA Entreprises */}
                        <div className="flex-1 bg-white p-10 border border-gray-200 rounded-2xl shadow-sm">
                            <Handshake className="w-12 h-12 text-[#D4AF37] mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Espace Entreprises</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Vous souhaitez former vos équipes à la création de contenu ou parrainer une promotion ?
                                Devenez partenaire de l'Académie et participez à l'essor de l'économie créative.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded font-bold text-sm uppercase hover:bg-gray-800 transition-all"
                            >
                                Devenir Partenaire
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER SIMPLE (Institutionnel) */}
            <footer className="py-12 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                    Cineworld Djibouti • Association à but non lucratif • 2026
                </p>
            </footer>

        </div>
    );
}
