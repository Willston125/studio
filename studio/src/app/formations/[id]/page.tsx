'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    Calendar, Clock, MapPin, Users, CheckCircle2, ChevronDown,
    Award, ArrowLeft, GraduationCap
} from 'lucide-react';
import { FORMATIONS } from '../formationsData';

export default function FormationDetailPage() {
    const params = useParams();
    const formationId = Number(params.id);
    const formation = FORMATIONS.find(f => f.id === formationId);
    const [openSyllabusDay, setOpenSyllabusDay] = useState<number | null>(() => formation?.syllabus?.length ? 0 : null);

    if (!formation) {
        return (
            <main className="min-h-screen bg-[#101922] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Formation introuvable</h1>
                    <p className="text-white/60 mb-8">Cette formation n&apos;existe pas ou a été supprimée.</p>
                    <Link
                        href="/formations"
                        className="inline-flex items-center gap-2 text-[#137fec] hover:text-white transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Retour aux formations
                    </Link>
                </div>
            </main>
        );
    }

    const primaryColor = "#137fec";

    return (
        <main className="flex-grow bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 transition-colors duration-200 font-sans">

            {/* Hero Section */}
            <section className="relative bg-white dark:bg-slate-900 overflow-hidden py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <Link href="/formations" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#137fec] transition-colors mb-4">
                            <ArrowLeft size={16} /> Toutes les formations
                        </Link>

                        <div>
                            <div className="inline-flex items-center rounded-full bg-[#137fec]/10 px-3 py-1 text-sm font-medium text-[#137fec] mb-4">
                                {formation.module} • {formation.niveau}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] uppercase">
                                {formation.titre}
                            </h1>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                            {formation.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href={`/inscription?module=${formation.id}`}
                                className="flex items-center justify-center rounded-xl bg-[#137fec] px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-[#137fec]/30 transition-all hover:-translate-y-1"
                            >
                                S&apos;inscrire à cette formation
                            </Link>
                            <div className="flex items-center gap-3 px-6 py-4">
                                <span className="text-3xl font-bold text-[#137fec]">{formation.tarif}</span>
                                <span className="text-xs text-slate-500 uppercase tracking-widest font-black">PRIX TOTAL</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-2xl">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 aspect-[4/3]">
                            <Image
                                alt={formation.titre}
                                src={formation.image}
                                fill
                                className={`object-cover ${(formation as any).objectPosition || 'object-center'}`}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info Bar */}
            <section className="bg-[#f6f7f8] dark:bg-[#101922] py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#137fec]/10 p-3 rounded-lg text-[#137fec] shrink-0">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Prochaine session</p>
                                <p className="text-sm font-bold">{formation.dateDebut}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#137fec]/10 p-3 rounded-lg text-[#137fec] shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Horaires / Durée</p>
                                <p className="text-sm font-bold">{formation.horaires} ({formation.duree.split('/')[0].trim()})</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#137fec]/10 p-3 rounded-lg text-[#137fec] shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Lieu</p>
                                <p className="text-sm font-bold truncate max-w-[120px]" title={formation.lieu}>
                                    {formation.lieu.split(',')[0]}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-[#137fec]/10 p-3 rounded-lg text-[#137fec] shrink-0">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Disponibilité</p>
                                <p className="text-sm font-bold"><span className="text-[#137fec]">{formation.placesRestantes}</span> places restantes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details & Learning Objectives */}
            <section className="py-16 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Objectifs */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="h-8 w-1.5 bg-[#137fec] rounded-full"></span>
                                Objectifs d&apos;apprentissage
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {formation.objectifsPedagogiques.map((obj, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#137fec] shrink-0 mt-0.5" size={20} />
                                        <p className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed">{obj}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programme Accordion */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="h-8 w-1.5 bg-[#137fec] rounded-full"></span>
                                Programme de la formation
                            </h2>
                            <div className="space-y-4">
                                {formation.syllabus.map((jour, i) => {
                                    const isOpen = openSyllabusDay === i;
                                    return (
                                        <div
                                            key={i}
                                            className={`border rounded-xl p-6 transition-colors ${isOpen ? 'border-[#137fec]/30 bg-[#137fec]/5 dark:bg-[#137fec]/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}
                                        >
                                            <button
                                                onClick={() => setOpenSyllabusDay(isOpen ? null : i)}
                                                className="w-full flex items-center justify-between outline-none"
                                            >
                                                <div className="flex items-center gap-4 text-left">
                                                    <span className={`text-lg md:text-xl font-bold truncate ${isOpen ? 'text-[#137fec]' : 'text-slate-400'}`}>
                                                        Jour {jour.jour}
                                                    </span>
                                                    <h3 className="font-bold text-base md:text-lg">{jour.titre}</h3>
                                                </div>
                                                <ChevronDown
                                                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#137fec]' : 'text-slate-400'}`}
                                                    size={24}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <ul className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 space-y-3">
                                                            {jour.contenu.map((item, idx) => (
                                                                <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#137fec]/50 mt-1.5 shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Stats & Tools */}
                    <div className="space-y-8">
                        <div className="bg-[#f6f7f8] dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-6">Outils Maitrisés</h3>
                            <div className="flex flex-wrap gap-3">
                                {formation.outils.map((outil, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 font-medium text-sm">
                                        <span className="w-2 h-2 rounded-full bg-[#137fec]"></span> {outil}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10">
                                <h3 className="text-xl font-bold mb-6">Compétences Acquises</h3>
                                <div className="space-y-6">
                                    {formation.competencesAcquises.map((comp, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="font-medium">{comp.nom}</span>
                                                <span className="font-bold text-[#137fec]">{comp.niveau}%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${comp.niveau}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="bg-[#137fec] h-2 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#137fec] text-white p-8 rounded-2xl shadow-xl shadow-[#137fec]/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Award size={100} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">Certification Offerte</h3>
                            <p className="text-white/80 text-sm mb-6 relative z-10">À l&apos;issue de cette formation, vous recevrez le certificat officiel :</p>
                            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 relative z-10">
                                <Award className="text-white shrink-0" size={32} />
                                <span className="font-bold text-sm leading-snug">{formation.certification}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Info Section */}
            <section className="py-16 bg-[#f6f7f8] dark:bg-[#101922]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Informations Pratiques</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
                            <MapPin className="text-[#137fec]" size={32} />
                            <h4 className="text-xl font-bold">Localisation</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{formation.lieu}. Accès facile et environnement climatisé.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
                            <GraduationCap className="text-[#137fec]" size={32} />
                            <h4 className="text-xl font-bold">Niveau Requis</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{formation.niveau}. {formation.prerequis?.[0] || 'Une connaissance basique de l\'informatique suffit.'}</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
                            <CheckCircle2 className="text-[#137fec]" size={32} />
                            <h4 className="text-xl font-bold">Livrables</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{formation.livrable}. Vous repartez avec des créations prêtes à l&apos;emploi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-4xl font-bold tracking-tight">Prêt à transformer votre carrière ?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">Rejoignez la prochaine session {formation.module.toLowerCase()} et devenez un expert.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={`/inscription?module=${formation.id}`}
                            className="bg-[#137fec] text-white font-bold px-10 py-5 rounded-2xl shadow-lg hover:bg-[#137fec]/90 transition-all transform hover:-translate-y-1"
                        >
                            S&apos;inscrire Maintenant
                        </Link>
                        <a
                            href="https://wa.me/25377145306"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold px-10 py-5 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center"
                        >
                            Nous contacter (WhatsApp)
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
