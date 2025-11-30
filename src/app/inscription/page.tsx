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
        <div className="min-h-screen w-full flex items-center justify-center bg-black text-white font-sans relative overflow-hidden">

            {/* --- ARRIÈRE-PLAN IMMERSIF --- */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/hero-fond.png"
                    alt="Background Cinema"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay Sombre pour lisibilité */}
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* --- BOUTON RETOUR (Top Left) --- */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/" className="flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all border border-white/10 group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-medium text-sm uppercase tracking-wider">Retour à l'accueil</span>
                </Link>
            </div>

            {/* --- CONTENEUR PRINCIPAL (Centré) --- */}
            <div className="relative z-10 w-full max-w-lg p-4">

                {/* LOGO (Centré au-dessus) */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/logo_cineworld.png"
                        alt="Cineworld Logo"
                        width={180}
                        height={60}
                        className="h-auto w-40 object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* CARD FORMULAIRE (Glassmorphism) */}
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">

                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-lg" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            BIENVENUE !
                        </h1>
                        <p className="text-gray-300 text-sm uppercase tracking-widest font-light">
                            Rejoignez l'élite du cinéma
                        </p>
                    </div>

                    {/* Info Prix & Timer */}
                    <div className="bg-white/5 rounded-lg p-4 mb-8 border-l-2 border-[#FFD700]">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[#FFD700] font-bold text-xs tracking-wider">OFFRE LIMITÉE</span>
                            <span className="bg-[#E50914] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">-50%</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">20.000 FDJ</span>
                            <span className="text-sm text-gray-400 line-through">40.000 FDJ</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                            <Clock className="w-3 h-3 text-[#FFD700]" />
                            <span>Expire dans : <span className="text-white font-mono">{timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m</span></span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <input
                                    {...register("nom", { required: true })}
                                    className="w-full bg-white/5 border border-white/20 text-white p-4 rounded focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-gray-500"
                                    placeholder="Nom"
                                />
                            </div>
                            <div className="space-y-1">
                                <input
                                    {...register("prenom", { required: true })}
                                    className="w-full bg-white/5 border border-white/20 text-white p-4 rounded focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-gray-500"
                                    placeholder="Prénom"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full bg-white/5 border border-white/20 text-white p-4 rounded focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-gray-500"
                                placeholder="Email"
                            />
                        </div>

                        <div className="space-y-1">
                            <input
                                {...register("telephone", { required: true })}
                                type="tel"
                                className="w-full bg-white/5 border border-white/20 text-white p-4 rounded focus:border-[#FFD700] focus:ring-0 outline-none transition-all placeholder-gray-500"
                                placeholder="WhatsApp (+253...)"
                            />
                        </div>

                        <div className="space-y-1">
                            <select
                                {...register("niveau")}
                                className="w-full bg-white/5 border border-white/20 text-white p-4 rounded focus:border-[#FFD700] focus:ring-0 outline-none transition-all appearance-none cursor-pointer"
                            >
                                <option value="debutant" className="bg-black text-white">Débutant (Je pars de zéro)</option>
                                <option value="intermediaire" className="bg-black text-white">Intermédiaire (Je monte un peu)</option>
                                <option value="avance" className="bg-black text-white">Avancé (Je veux me perfectionner)</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-[#E50914] hover:bg-[#b2070f] text-white font-bold text-xl py-4 rounded shadow-lg transform hover:scale-[1.02] transition-all uppercase tracking-wider"
                        >
                            S'inscrire Maintenant
                        </button>

                        <p className="text-center text-xs text-gray-500 mt-4">
                            Redirection sécurisée vers WhatsApp.
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}
