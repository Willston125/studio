'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Target, GraduationCap, Briefcase, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const pillars = [
    {
        icon: GraduationCap,
        title: "L'Académie",
        subtitle: "Ingénierie Pédagogique",
        points: [
            "Première académie 100% pratique à Djibouti",
            "Cursus intensifs certifiants",
            "Formation de créateurs de contenu"
        ]
    },
    {
        icon: Briefcase,
        title: "L'Expertise",
        subtitle: "Consulting Audiovisuel",
        points: [
            "Stratégie vidéo pour institutions & ONG",
            "Conseil en production exécutive",
            "Supervision artistique"
        ]
    },
    {
        icon: Sparkles,
        title: "L'Innovation",
        subtitle: "Technologie & Mentorat",
        points: [
            "Workflows IA & Nouveaux médias",
            "Mentorat de jeunes talents locaux",
            "Ateliers d'innovation continue"
        ]
    }
];

export default function AProposPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">

            {/* Navigation Header */}
            <nav className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-12">
                <div className="font-black text-xl uppercase tracking-tighter">
                    CINEWORDL<span className="text-[#D4AF37]">ACADÉMIE</span>
                </div>
                <Link href="/" className="text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> RETOUR ACCUEIL
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden bg-gray-50">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-yellow-100 text-[#B8860B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                Qui Sommes-Nous ?
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-black">
                                Façonner le Futur de <br />
                                <span className="text-[#D4AF37]">l'Audiovisuel à Djibouti</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                                Cineworld Academy est l'institution de référence pour les métiers de l'image.
                                Nous allions rigueur académique et expertise de terrain pour transformer
                                le potentiel des talents locaux en compétences professionnelles de classe mondiale.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/inscription" className="bg-black text-white px-8 py-4 rounded font-bold text-sm uppercase hover:bg-gray-800 transition-all shadow-lg">
                                    Découvrir nos cursus
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden md:block"
                        >
                            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                                <Image
                                    src="/groupeeleve.png"
                                    alt="Académie Cineworld"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Overlay decoratif */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl opacity-20" />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Mission & Vision (Light) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#F9FAFB] p-10 rounded-2xl border border-gray-100"
                        >
                            <Target className="w-12 h-12 text-[#D4AF37] mb-6" />
                            <h2 className="text-2xl font-black mb-4 uppercase">Notre Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Professionnaliser le secteur en offrant aux talents djiboutiens
                                les outils techniques pour raconter leurs propres histoires avec une qualité irréprochable.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#F9FAFB] p-10 rounded-2xl border border-gray-100"
                        >
                            <Sparkles className="w-12 h-12 text-[#D4AF37] mb-6" />
                            <h2 className="text-2xl font-black mb-4 uppercase">Notre Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Faire de Djibouti un hub créatif reconnu en Afrique de l'Est,
                                porté par une industrie locale dynamique, innovante et respectée.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">Nos <span className="text-[#D4AF37]">3 Pillars</span> Stratégiques</h2>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-yellow-50 rounded-lg flex items-center justify-center mb-6">
                                    <pillar.icon className="w-7 h-7 text-[#D4AF37]" />
                                </div>
                                <h3 className="text-xl font-black text-black mb-1">{pillar.title}</h3>
                                <p className="text-[#B8860B] font-bold text-xs uppercase tracking-wider mb-6">{pillar.subtitle}</p>
                                <ul className="space-y-4">
                                    {pillar.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-yellow-500 font-bold mt-1">✓</span>
                                            <span className="text-sm text-gray-600 leading-relaxed font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black rounded-3xl p-12 text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">Prêt à Transformer Votre <span className="text-yellow-500">Passion</span> ?</h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                            Rejoignez la prochaine promotion et commencez votre carrière dans l'audiovisuel avec les meilleurs outils.
                        </p>
                        <Link
                            href="/inscription"
                            className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-4 rounded font-black text-sm uppercase hover:scale-105 transition-all shadow-xl"
                        >
                            S'inscrire Maintenant
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Signature Footer */}
            <footer className="py-12 bg-white text-center border-t border-gray-100">
                <div className="font-black text-xs uppercase tracking-[0.2em] text-gray-300 mb-2">Cineworld Djibouti</div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">© 2026 Tous Droits Réservés</p>
            </footer>

        </div>
    );
}
