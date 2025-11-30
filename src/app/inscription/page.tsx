'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function InscriptionPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // --- LOGIQUE COMPTE À REBOURS (Conservée) ---
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

    // --- LOGIQUE ENVOI WHATSAPP (Conservée) ---
    const onSubmit = (data: any) => {
        const message = `Bonjour Ali, je veux m'inscrire !\n\n👤 ${data.nom} ${data.prenom}\n📧 ${data.email}\n📱 ${data.telephone}\n🎬 Niveau: ${data.niveau}\n💡 Attentes: ${data.attentes || 'Non précisé'}`;
        const url = `https://wa.me/25377722004?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen w-full flex bg-black text-white font-sans relative">

            {/* --- LOGO BRANDING (Top Left) --- */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <Image
                        src="/logo_cineworld.png"
                        alt="Cineworld Logo"
                        width={120}
                        height={40}
                        className="w-20 md:w-24 h-auto object-contain hover:opacity-80 transition-opacity"
                        priority
                    />
                </Link>
            </div>

            {/* --- COLONNE GAUCHE : VISUEL (Desktop uniquement) --- */}
            <div className="hidden lg:block w-1/2 relative overflow-hidden">
                <Image
                    src="/formateur-mentor.png"
                    alt="Mentor Affiche"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay Sombre */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Citation / Titre en bas */}
                <div className="absolute bottom-12 left-12 right-12 z-10">
                    <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        MAÎTRISEZ L'ART <br /> DU CINÉMA
                    </h2>
                    <div className="h-1 w-20 bg-[#FFD700] mb-6" />
                    <p className="text-lg text-gray-200 font-light italic">
                        "Le cinéma n'est pas un métier, c'est une vision du monde."
                    </p>
                </div>
            </div>

            {/* --- COLONNE DROITE : FORMULAIRE --- */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-black relative">

                {/* Background mobile (optionnel, pour texture) */}
                <div className="absolute inset-0 bg-[#050505] z-0" />

                <div className="relative z-10 w-full max-w-md">

                    {/* Header Mobile (Visible uniquement sur mobile si besoin, ou intégré) */}
                    <div className="lg:hidden mb-8 text-center mt-12">
                        <h1 className="text-4xl font-bold text-[#FFD700]" style={{ fontFamily: 'Oswald, sans-serif' }}>CINEWORLD</h1>
                        <p className="text-gray-400 text-sm">Académie de Création Vidéo</p>
                    </div>

                    {/* CARD FORMULAIRE */}
                    <div className="bg-[#111] border border-white/10 rounded-xl p-8 shadow-2xl">

                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                                REJOIGNEZ L'ACADÉMIE
                            </h1>
                            <p className="text-gray-400 text-sm uppercase tracking-widest">
                                Session 2025 • Places Limitées
                            </p>
                        </div>

                        {/* Info Prix & Timer (Intégré discrètement) */}
                        <div className="bg-white/5 rounded-lg p-4 mb-8 border-l-2 border-[#FFD700]">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[#FFD700] font-bold">PROMO SPÉCIALE</span>
                                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">-50% OFF</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-white">20.000 FDJ</span>
                                <span className="text-sm text-gray-500 line-through">40.000 FDJ</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                                <Clock className="w-3 h-3" />
                                <span>Offre termine dans : {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Nom</label>
                                    <input
                                        {...register("nom", { required: true })}
                                        className="w-full bg-black/50 border border-white/10 text-white p-3 rounded focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                        placeholder="Votre Nom"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Prénom</label>
                                    <input
                                        {...register("prenom", { required: true })}
                                        className="w-full bg-black/50 border border-white/10 text-white p-3 rounded focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                        placeholder="Votre Prénom"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 text-white p-3 rounded focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                    placeholder="exemple@email.com"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp</label>
                                <input
                                    {...register("telephone", { required: true })}
                                    type="tel"
                                    className="w-full bg-black/50 border border-white/10 text-white p-3 rounded focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all"
                                    placeholder="+253 ..."
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Niveau</label>
                                <select
                                    {...register("niveau")}
                                    className="w-full bg-black/50 border border-white/10 text-white p-3 rounded focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] outline-none transition-all appearance-none"
                                >
                                    <option value="debutant">Débutant (Je pars de zéro)</option>
                                    <option value="intermediaire">Intermédiaire (Je monte un peu)</option>
                                    <option value="avance">Avancé (Je veux me perfectionner)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 bg-[#E50914] hover:bg-[#b2070f] text-white font-bold text-lg py-4 rounded shadow-lg transform hover:scale-[1.02] transition-all uppercase tracking-wider"
                            >
                                Commencer l'Aventure
                            </button>

                            <p className="text-center text-xs text-gray-600 mt-4">
                                En cliquant, vous serez redirigé vers WhatsApp pour finaliser.
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
