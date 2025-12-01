'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function InscriptionPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // --- LOGIQUE COMPTE À REBOURS (CIBLE : 20 DECEMBRE 2025) ---
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const targetDate = new Date("Dec 20, 2025 00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setIsExpired(true);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // --- LOGIQUE ENVOI WHATSAPP ---
    const onSubmit = (data: any) => {
        const message = `*NOUVELLE INSCRIPTION - CINEWORLD ACADEMIE*\n--------------------------------\n👤 *Candidat:* ${data.prenom} ${data.nom}\n📱 *Tel:* ${data.telephone}\n📧 *Email:* ${data.email}\n🎓 *Niveau:* ${data.niveau}\n--------------------------------\n*ENGAGEMENTS SIGNÉS :*\n✅ Tarif 20.000 FDJ accepté\n✅ Clause de NON-REMBOURSEMENT acceptée\n✅ Engagement paiement 48h validé\n📅 Date: ${new Date().toLocaleDateString()}`;
        const url = `https://wa.me/25377556344?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#050505] font-sans text-white overflow-x-hidden">

            {/* --- ZONE GAUCHE (VISUEL & MARKETING) --- */}
            <aside className="w-full lg:w-[45%] relative bg-[url('/formateur-mentor.png')] bg-cover bg-top lg:bg-center shrink-0 min-h-[480px] lg:h-auto lg:min-h-screen flex flex-col justify-end">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#050505]/40 to-[#050505]/70 lg:bg-gradient-to-t lg:from-[#0a0a0a] lg:via-[#050505]/40 lg:to-[#050505]/70"></div>

                {/* BOUTON RETOUR MOBILE (Absolu en haut à gauche) */}
                <Link href="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors text-xs font-medium lg:hidden">
                    <ArrowLeft size={14} />
                    <span>Retour à l'accueil</span>
                </Link>

                <div className="relative z-10 px-5 pb-8 lg:absolute lg:bottom-8 lg:left-8 lg:right-8 mt-[320px] lg:mt-0">
                    <div className="text-[#D4AF37] font-oswald text-sm lg:text-base tracking-[2px] uppercase mb-1">Votre Formateur</div>
                    <div className="font-oswald text-4xl lg:text-6xl uppercase leading-[0.95] mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Ali William</div>

                    {/* --- BLOC MARKETING (MOBILE ONLY) --- */}
                    <div className="lg:hidden bg-black/85 border border-[#333] rounded-xl p-5 border-b-4 border-b-[#E50914] shadow-2xl backdrop-blur-sm">
                        {isExpired ? (
                            <h3 className="text-[#E50914] text-center font-oswald text-2xl uppercase">Offre Terminée</h3>
                        ) : (
                            <>
                                <span className="bg-[#E50914] text-white font-bold text-xs px-2.5 py-1 rounded uppercase font-oswald tracking-wider mb-2.5 inline-block">
                                    Offre Spéciale
                                </span>

                                <div className="flex items-center gap-4 mb-4">
                                    {/* PRIX BARRÉ AVEC TRAIT ROUGE CSS */}
                                    <div className="text-xl text-[#888] font-medium relative font-oswald">
                                        40.000 FDJ
                                        <div className="absolute -left-[5%] top-1/2 w-[110%] h-[3px] bg-[#E50914] -rotate-[10deg] opacity-90"></div>
                                    </div>
                                    <div className="font-oswald text-4xl text-white leading-none">20.000 FDJ</div>
                                </div>

                                <div className="text-xs text-[#bbb] mb-2">Fin de l'offre le 20 Décembre :</div>

                                {/* TIMER */}
                                <div className="grid grid-cols-4 gap-2.5 border-t border-[#333] pt-4">
                                    <div className="bg-[#1a1a1a] rounded-md p-2 text-center">
                                        <span className="block font-oswald text-xl lg:text-2xl text-[#D4AF37] font-bold">{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</span>
                                        <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Jrs</span>
                                    </div>
                                    <div className="bg-[#1a1a1a] rounded-md p-2 text-center">
                                        <span className="block font-oswald text-xl lg:text-2xl text-[#D4AF37] font-bold">{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</span>
                                        <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Hrs</span>
                                    </div>
                                    <div className="bg-[#1a1a1a] rounded-md p-2 text-center">
                                        <span className="block font-oswald text-xl lg:text-2xl text-[#D4AF37] font-bold">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
                                        <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Min</span>
                                    </div>
                                    <div className="bg-[#1a1a1a] rounded-md p-2 text-center">
                                        <span className="block font-oswald text-xl lg:text-2xl text-[#D4AF37] font-bold">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
                                        <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Sec</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </aside>

            {/* --- ZONE DROITE (FORMULAIRE) --- */}
            <main className="w-full lg:w-[55%] relative bg-[#0a0a0a] px-5 py-10 lg:p-20 overflow-y-auto bg-[url('/background-spotlight.jpg')] bg-cover bg-center">
                {/* Overlay Noir (85%) */}
                <div className="absolute inset-0 bg-black/85 z-0 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="mb-8">
                        <Link href="/" className="hidden lg:inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#D4AF37] transition-colors text-xs lg:text-sm mb-5 no-underline">
                            <span>← Retour à l'accueil</span>
                        </Link>
                        <h1 className="font-oswald text-3xl lg:text-5xl uppercase leading-none mb-2">
                            Inscription <br /><span className="text-[#D4AF37]">Formation</span>
                        </h1>
                        <p className="text-[#a0a0a0] text-sm lg:text-base leading-relaxed mb-6">
                            Réservez votre place pour l'aventure cinématographique.
                        </p>

                        {/* --- BLOC MARKETING (DESKTOP ONLY) --- */}
                        <div className="hidden lg:block bg-black/60 border border-[#333] rounded-xl p-5 border-b-4 border-b-[#E50914] shadow-2xl backdrop-blur-sm mb-8">
                            {isExpired ? (
                                <h3 className="text-[#E50914] text-center font-oswald text-2xl uppercase">Offre Terminée</h3>
                            ) : (
                                <>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <span className="bg-[#E50914] text-white font-bold text-xs px-2.5 py-1 rounded uppercase font-oswald tracking-wider mb-2 inline-block">
                                                Offre Spéciale
                                            </span>
                                            <div className="flex items-center gap-4">
                                                <div className="text-xl text-[#888] font-medium relative font-oswald">
                                                    40.000 FDJ
                                                    <div className="absolute -left-[5%] top-1/2 w-[110%] h-[3px] bg-[#E50914] -rotate-[10deg] opacity-90"></div>
                                                </div>
                                                <div className="font-oswald text-4xl text-white leading-none">20.000 FDJ</div>
                                            </div>
                                        </div>

                                        {/* TIMER DESKTOP COMPACT */}
                                        <div className="flex gap-2">
                                            <div className="bg-[#1a1a1a] rounded-md p-2 text-center min-w-[50px]">
                                                <span className="block font-oswald text-xl text-[#D4AF37] font-bold">{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</span>
                                                <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Jrs</span>
                                            </div>
                                            <div className="bg-[#1a1a1a] rounded-md p-2 text-center min-w-[50px]">
                                                <span className="block font-oswald text-xl text-[#D4AF37] font-bold">{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</span>
                                                <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Hrs</span>
                                            </div>
                                            <div className="bg-[#1a1a1a] rounded-md p-2 text-center min-w-[50px]">
                                                <span className="block font-oswald text-xl text-[#D4AF37] font-bold">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
                                                <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Min</span>
                                            </div>
                                            <div className="bg-[#1a1a1a] rounded-md p-2 text-center min-w-[50px]">
                                                <span className="block font-oswald text-xl text-[#D4AF37] font-bold">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
                                                <span className="text-[0.6rem] text-[#777] uppercase tracking-wider">Sec</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-[#bbb]">Fin de l'offre le 20 Décembre</div>
                                </>
                            )}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Nom</label>
                                <input
                                    {...register("nom", { required: true })}
                                    className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base placeholder-[#555]"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Prénom</label>
                                <input
                                    {...register("prenom", { required: true })}
                                    className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base placeholder-[#555]"
                                    placeholder="Votre prénom"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base placeholder-[#555]"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">WhatsApp (Djibouti)</label>
                                <input
                                    {...register("telephone", { required: true })}
                                    type="tel"
                                    className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base placeholder-[#555]"
                                    placeholder="Ex: 77 XX XX XX"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Niveau Actuel</label>
                            <select
                                {...register("niveau")}
                                className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base appearance-none cursor-pointer"
                            >
                                <option value="Débutant">Débutant (Je pars de zéro)</option>
                                <option value="Intermédiaire">Intermédiaire (Quelques bases)</option>
                                <option value="Avancé">Avancé (Perfectionnement)</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Matériel (Facultatif)</label>
                            <input
                                {...register("materiel")}
                                className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base placeholder-[#555]"
                                placeholder="Ex: Canon 5D, MacBook Pro..."
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Vos Attentes</label>
                            <textarea
                                {...register("attentes")}
                                rows={3}
                                className="w-full bg-[#161616]/80 backdrop-blur-[5px] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/90 outline-none transition-colors font-sans text-base placeholder-[#555]"
                                placeholder="Ce que vous voulez apprendre en priorité..."
                            />
                        </div>

                        {/* --- LEGAL BOX (CONDITIONS) --- */}
                        <div className="bg-[#111]/80 backdrop-blur-sm p-5 rounded-lg border border-[#222] mt-8 space-y-4">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        {...register("condition_prix", { required: true })}
                                        className="peer sr-only"
                                    />
                                    <div className="w-5 h-5 border-2 border-[#444] rounded bg-transparent peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] flex items-center justify-center transition-all shrink-0">
                                        <CheckCircle size={12} className="text-black opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-[#ccc] leading-relaxed group-hover:text-white transition-colors">
                                    Je valide mon inscription au tarif de 20.000 FDJ.
                                </span>
                            </label>
                            {errors.condition_prix && <span className="text-[#E50914] text-xs ml-8 block">Ce champ est obligatoire.</span>}

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        {...register("condition_remboursement", { required: true })}
                                        className="peer sr-only"
                                    />
                                    <div className="w-5 h-5 border-2 border-[#444] rounded bg-transparent peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] flex items-center justify-center transition-all shrink-0">
                                        <CheckCircle size={12} className="text-black opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-[#ccc] leading-relaxed group-hover:text-white transition-colors">
                                    Je comprends que ce paiement est <strong className="text-[#E50914]">NON REMBOURSABLE</strong> après 3 jours.
                                </span>
                            </label>
                            {errors.condition_remboursement && <span className="text-[#E50914] text-xs ml-8 block">Ce champ est obligatoire.</span>}

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        {...register("condition_paiement", { required: true })}
                                        className="peer sr-only"
                                    />
                                    <div className="w-5 h-5 border-2 border-[#444] rounded bg-transparent peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] flex items-center justify-center transition-all shrink-0">
                                        <CheckCircle size={12} className="text-black opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-[#ccc] leading-relaxed group-hover:text-white transition-colors">
                                    Je m'engage à effectuer le paiement sous 48h.
                                </span>
                            </label>
                            {errors.condition_paiement && <span className="text-[#E50914] text-xs ml-8 block">Ce champ est obligatoire.</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#E50914] hover:bg-[#b2070f] text-white font-oswald text-lg lg:text-xl py-5 rounded-md uppercase tracking-wider transition-all mt-5 shadow-[0_4px_15px_rgba(229,9,20,0.4)]"
                        >
                            CONFIRMER MON INSCRIPTION
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
