'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, CheckCircle, ArrowLeft } from 'lucide-react';

export default function InscriptionPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // --- LOGIQUE COMPTE À REBOURS ---
    const [timeLeft, setTimeLeft] = useState({ days: 21, hours: 5, minutes: 46, seconds: 50 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                return { ...prev, seconds: 59, minutes: prev.minutes - 1 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // --- LOGIQUE ENVOI WHATSAPP ---
    const onSubmit = (data: any) => {
        const message = `Bonjour, je m'appelle ${data.nom} ${data.prenom}. Je souhaite m'inscrire à la formation (20 000 FDJ).\n\n📋 MES INFOS :\n- Email: ${data.email}\n- Tél: ${data.telephone}\n- Ville: ${data.ville}\n\n🎬 MON PROFIL :\n- Niveau: ${data.niveau}\n- Matériel: ${data.materiel}\n- Attentes: ${data.attentes}\n\n📷 NOTE : J'envoie ma photo d'identité juste après ce message.`;
        const url = `https://wa.me/25377556344?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-black text-white font-sans">

            {/* --- COLONNE GAUCHE (Visuelle) --- */}
            {/* Mobile: h-80 (fixe), Desktop: h-screen (40%) */}
            <div className="w-full lg:w-[40%] relative h-80 lg:h-screen flex flex-col justify-end p-6 lg:p-8 overflow-hidden shrink-0">
                {/* Image de Fond */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/mentor-affiche.png"
                        alt="Ali William - Formateur"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    {/* Overlay Dégradé */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Contenu Gauche */}
                <div className="relative z-10 space-y-4 lg:space-y-6">
                    <div>
                        <p className="text-[#FFD700] font-bold tracking-widest text-xs lg:text-sm uppercase mb-2">Votre Formateur</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-headline leading-tight">ALI WILLIAM</h2>
                    </div>

                    {/* Bloc Prix & Timer */}
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 lg:p-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="bg-[#E50914] text-white text-[10px] lg:text-xs font-bold px-2 py-1 rounded">OFFRE SPÉCIALE</span>
                            <div className="flex items-center gap-2 text-[10px] lg:text-xs text-gray-300">
                                <Clock className="w-3 h-3 text-[#FFD700]" />
                                <span className="font-mono">{timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m</span>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl lg:text-4xl font-bold text-white">20.000 FDJ</span>
                            <span className="text-base lg:text-lg text-gray-500 line-through">40.000 FDJ</span>
                        </div>
                        <p className="text-[10px] lg:text-xs text-gray-400 mt-2">Formation complète + Certification</p>
                    </div>
                </div>

                {/* Bouton Retour Mobile */}
                <Link href="/" className="absolute top-4 left-4 z-50 lg:hidden bg-black/50 p-2 rounded-full text-white backdrop-blur-sm border border-white/10">
                    <ArrowLeft size={20} />
                </Link>
            </div>

            {/* --- COLONNE DROITE (Formulaire) --- */}
            {/* Mobile: px-6, Desktop: pt-40 (pour éviter le menu) */}
            <div className="w-full lg:w-[60%] h-full lg:h-screen bg-black flex flex-col px-6 md:px-12 lg:px-20 pt-10 lg:pt-40 pb-10 overflow-y-auto">

                {/* Bouton Retour Desktop */}
                <div className="hidden lg:block absolute top-8 right-8 z-50">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-sm uppercase tracking-wider">Retour à l'accueil</span>
                    </Link>
                </div>

                <div className="max-w-xl mx-auto w-full space-y-8">

                    {/* --- HEADER TITRE (Nouveau) --- */}
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-bold font-headline text-white tracking-wide">
                            INSCRIPTION - FORMATION
                        </h1>
                        <p className="text-gray-400 text-lg font-light">
                            Réservez votre place pour l'aventure cinématographique.
                        </p>
                        {/* Ligne Dorée */}
                        <div className="h-1 w-24 bg-[#FFD700] rounded-full"></div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Nom</label>
                                <input
                                    {...register("nom", { required: true })}
                                    className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-neutral-600"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Prénom</label>
                                <input
                                    {...register("prenom", { required: true })}
                                    className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-neutral-600"
                                    placeholder="Votre prénom"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-neutral-600"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Ville</label>
                                <input
                                    {...register("ville", { required: true })}
                                    className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-neutral-600"
                                    placeholder="Votre ville"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Téléphone (WhatsApp)</label>
                            <input
                                {...register("telephone", { required: true })}
                                type="tel"
                                className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-neutral-600"
                                placeholder="+253..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Niveau Actuel</label>
                            <select
                                {...register("niveau")}
                                className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="debutant">Débutant (Je pars de zéro)</option>
                                <option value="intermediaire">Intermédiaire (Je monte un peu)</option>
                                <option value="avance">Avancé (Je veux me perfectionner)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Matériel (Caméra, PC, etc.)</label>
                            <input
                                {...register("materiel")}
                                className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-neutral-600"
                                placeholder="Ex: Canon 5D, MacBook Pro..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider">Vos Attentes</label>
                            <textarea
                                {...register("attentes")}
                                className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-lg focus:border-[#FFD700] focus:ring-0 outline-none transition-all min-h-[100px] placeholder-neutral-600"
                                placeholder="Ce que vous voulez apprendre..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#E50914] hover:bg-[#b2070f] text-white font-bold text-lg py-5 rounded-lg shadow-lg transform hover:scale-[1.01] transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                            <span>Confirmer mon inscription</span>
                            <CheckCircle size={20} />
                        </button>

                        <p className="text-center text-xs text-neutral-500">
                            En cliquant, vous serez redirigé vers WhatsApp pour finaliser.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
