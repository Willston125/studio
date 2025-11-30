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
        const message = `Bonjour, je m'appelle ${data.nom} ${data.prenom}. Je souhaite m'inscrire à la formation (20 000 FDJ).\n\n📋 MES INFOS :\n- Email: ${data.email}\n- Tél: ${data.telephone}\n- Ville: ${data.ville}\n\n🎬 MON PROFIL :\n- Niveau: ${data.niveau}\n- Matériel: ${data.materiel}\n- Attentes: ${data.attentes}\n\n✅ J'ai lu et accepté les conditions de la formation (Non remboursable).\n\n📷 NOTE : J'envoie ma photo d'identité juste après ce message.`;
        const url = `https://wa.me/25377556344?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a0a0a] font-sans">

            {/* --- COLONNE GAUCHE (Visuelle) --- */}
            {/* Mobile: h-[500px] relative, Desktop: fixed w-[40%] h-full */}
            <div className="w-full h-[500px] relative lg:fixed lg:w-[40%] lg:h-full lg:inset-0 flex flex-col justify-end p-6 lg:p-8 overflow-hidden shrink-0">
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
                {/* Contenu Gauche */}
                <div className="relative z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                    {/* Mentor Identity */}
                    <div className="space-y-2">
                        <p className="text-[#FFD700] font-bold tracking-[0.3em] text-xs lg:text-sm uppercase">VOTRE FORMATEUR</p>
                        <div className="flex flex-col items-center lg:items-start">
                            <h2 className="text-6xl lg:text-7xl font-bold font-headline leading-none text-white drop-shadow-lg">ALI WILLIAM</h2>
                            <div className="h-0.5 w-24 bg-[#FFD700] my-4 shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
                            <p className="text-gray-200 font-light tracking-widest uppercase text-sm lg:text-base">Réalisateur & Visionnaire</p>
                        </div>
                    </div>

                    {/* Bloc Prix & Timer */}
                    <div className="w-full bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
                        {/* Price */}
                        <div className="flex flex-col items-center mb-6">
                            <span className="bg-[#E50914] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-lg">OFFRE SPÉCIALE</span>
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md">20.000 FDJ</span>
                                <span className="text-lg text-gray-400 line-through">40.000 FDJ</span>
                            </div>
                        </div>

                        {/* Countdown Grid */}
                        <div className="grid grid-cols-4 gap-3">
                            {/* Day */}
                            <div className="flex flex-col items-center p-3 border border-[#FFD700]/30 bg-black/50 rounded-lg backdrop-blur-sm shadow-inner">
                                <span className="text-2xl lg:text-3xl font-bold font-mono text-white">{timeLeft.days}</span>
                                <span className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Jrs</span>
                            </div>
                            {/* Hours */}
                            <div className="flex flex-col items-center p-3 border border-[#FFD700]/30 bg-black/50 rounded-lg backdrop-blur-sm shadow-inner">
                                <span className="text-2xl lg:text-3xl font-bold font-mono text-white">{timeLeft.hours}</span>
                                <span className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Hrs</span>
                            </div>
                            {/* Min */}
                            <div className="flex flex-col items-center p-3 border border-[#FFD700]/30 bg-black/50 rounded-lg backdrop-blur-sm shadow-inner">
                                <span className="text-2xl lg:text-3xl font-bold font-mono text-white">{timeLeft.minutes}</span>
                                <span className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Min</span>
                            </div>
                            {/* Sec */}
                            <div className="flex flex-col items-center p-3 border border-[#FFD700]/30 bg-black/50 rounded-lg backdrop-blur-sm shadow-inner">
                                <span className="text-2xl lg:text-3xl font-bold font-mono text-white">{timeLeft.seconds}</span>
                                <span className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Sec</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bouton Retour Mobile */}
                <Link href="/" className="absolute top-4 left-4 z-50 lg:hidden bg-black/50 p-2 rounded-full text-white backdrop-blur-sm border border-white/10">
                    <ArrowLeft size={20} />
                </Link>
            </div>

            {/* --- COLONNE DROITE (Formulaire) --- */}
            {/* Mobile: px-4 py-10, Desktop: w-[60%] ml-auto p-20 */}
            <div className="w-full relative z-10 lg:w-[60%] lg:ml-auto px-4 py-10 lg:p-20 bg-black flex flex-col overflow-y-auto">

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

                        {/* --- SECTION ENGAGEMENT --- */}
                        <div className="space-y-4 pt-4 border-t border-neutral-800">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">VALIDATION DES CONDITIONS</h3>

                            <div className="space-y-3">
                                {/* Case 1 : Prix */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("condition_prix", { required: true })}
                                            className="peer sr-only"
                                        />
                                        <div className="w-5 h-5 border-2 border-neutral-600 rounded bg-transparent peer-checked:bg-[#FFD700] peer-checked:border-[#FFD700] flex items-center justify-center transition-all">
                                            <CheckCircle size={14} className="text-black opacity-0 peer-checked:opacity-100" />
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors pt-0.5">
                                        Je valide mon inscription au tarif de 20 000 FDJ.
                                    </span>
                                </label>
                                {errors.condition_prix && <span className="text-red-500 text-xs ml-8">Ce champ est obligatoire.</span>}

                                {/* Case 2 : Non-remboursable */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("condition_remboursement", { required: true })}
                                            className="peer sr-only"
                                        />
                                        <div className="w-5 h-5 border-2 border-neutral-600 rounded bg-transparent peer-checked:bg-[#FFD700] peer-checked:border-[#FFD700] flex items-center justify-center transition-all">
                                            <CheckCircle size={14} className="text-black opacity-0 peer-checked:opacity-100" />
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors pt-0.5">
                                        Je comprends que ce paiement est ferme et <strong>NON REMBOURSABLE</strong> (réservation de place).
                                    </span>
                                </label>
                                {errors.condition_remboursement && <span className="text-red-500 text-xs ml-8">Ce champ est obligatoire.</span>}

                                {/* Case 3 : Délai Paiement */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("condition_paiement", { required: true })}
                                            className="peer sr-only"
                                        />
                                        <div className="w-5 h-5 border-2 border-neutral-600 rounded bg-transparent peer-checked:bg-[#FFD700] peer-checked:border-[#FFD700] flex items-center justify-center transition-all">
                                            <CheckCircle size={14} className="text-black opacity-0 peer-checked:opacity-100" />
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors pt-0.5">
                                        Je m'engage à effectuer le paiement sous 48h pour valider mon dossier.
                                    </span>
                                </label>
                                {errors.condition_paiement && <span className="text-red-500 text-xs ml-8">Ce champ est obligatoire.</span>}
                            </div>
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
