'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, CheckCircle, ArrowLeft } from 'lucide-react';

export default function InscriptionPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // --- LOGIQUE ENVOI WHATSAPP ---
    const onSubmit = (data: any) => {
        const message = `*NOUVELLE INSCRIPTION - CINEWORLD ACADEMIE*\n--------------------------------\n👤 *Candidat:* ${data.prenom} ${data.nom}\n📱 *Tel:* ${data.telephone}\n📧 *Email:* ${data.email}\n🎓 *Niveau:* ${data.niveau}\n--------------------------------\n*ENGAGEMENTS SIGNÉS :*\n✅ Tarif 20.000 FDJ accepté\n✅ Clause de NON-REMBOURSEMENT acceptée\n✅ Engagement paiement 48h validé\n📅 Date: ${new Date().toLocaleDateString()}`;
        const url = `https://wa.me/25377556344?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#050505] font-sans text-white overflow-x-hidden">

            {/* --- ZONE IMAGE (Haut sur mobile / Gauche sur PC) --- */}
            <aside className="w-full h-[38vh] lg:h-auto lg:w-[45%] relative bg-[url('/formateur-mentor.png')] bg-cover bg-top lg:bg-center shrink-0">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#050505]/20 to-[#050505]/60 lg:bg-gradient-to-t lg:from-[#0a0a0a] lg:via-[#050505]/20 lg:to-[#050505]/60"></div>

                <div className="absolute bottom-4 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-8 z-10">
                    <div className="text-[#D4AF37] font-oswald text-sm lg:text-base tracking-[2px] uppercase mb-1 lg:mb-2">Votre Formateur</div>
                    <div className="font-oswald text-4xl lg:text-6xl uppercase leading-[0.95] mb-3 lg:mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Ali William</div>

                    {/* Bloc Prix */}
                    <div className="inline-block bg-black/70 backdrop-blur-sm border border-white/10 px-4 py-3 lg:px-6 lg:py-4 rounded-lg border-l-4 border-l-[#D4AF37]">
                        <div className="text-xs lg:text-sm text-[#bbb] line-through mb-0.5">40.000 FDJ</div>
                        <div className="font-oswald text-2xl lg:text-4xl text-white leading-none">20.000 FDJ</div>
                    </div>
                </div>
            </aside>

            {/* --- ZONE FORMULAIRE (Bas sur mobile / Droite sur PC) --- */}
            <main className="w-full lg:w-[55%] bg-[#0a0a0a] px-5 py-10 lg:p-20 overflow-y-auto">
                <div className="mb-8 lg:mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#D4AF37] transition-colors text-xs lg:text-sm mb-5 no-underline">
                        <span>← Retour à l'accueil</span>
                    </Link>
                    <h1 className="font-oswald text-3xl lg:text-5xl uppercase leading-none mb-2">
                        Inscription <br /><span className="text-[#D4AF37]">Formation</span>
                    </h1>
                    <p className="text-[#a0a0a0] text-sm lg:text-base leading-relaxed">
                        Réservez votre place pour l'aventure cinématographique.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Nom</label>
                            <input
                                {...register("nom", { required: true })}
                                className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base placeholder-[#555]"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Prénom</label>
                            <input
                                {...register("prenom", { required: true })}
                                className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base placeholder-[#555]"
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
                                className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base placeholder-[#555]"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">WhatsApp (Djibouti)</label>
                            <input
                                {...register("telephone", { required: true })}
                                type="tel"
                                className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base placeholder-[#555]"
                                placeholder="Ex: 77 XX XX XX"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Niveau Actuel</label>
                        <select
                            {...register("niveau")}
                            className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base appearance-none cursor-pointer"
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
                            className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base placeholder-[#555]"
                            placeholder="Ex: Canon 5D, MacBook Pro..."
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.7rem] text-[#a0a0a0] uppercase font-semibold">Vos Attentes</label>
                        <textarea
                            {...register("attentes")}
                            rows={3}
                            className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-[#222] outline-none transition-colors font-sans text-base placeholder-[#555]"
                            placeholder="Ce que vous voulez apprendre en priorité..."
                        />
                    </div>

                    {/* Conditions (Checkbox) */}
                    <div className="bg-[#111] p-5 rounded-lg border border-[#222] mt-8 space-y-4">
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
                        className="w-full bg-[#E50914] hover:bg-[#b2070f] text-white font-oswald text-lg lg:text-xl py-5 rounded-md uppercase tracking-wider transition-all mt-5"
                    >
                        CONFIRMER MON INSCRIPTION
                    </button>
                </form>
            </main>
        </div>
    );
}
