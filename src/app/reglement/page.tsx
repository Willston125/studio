'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { CheckCircle, Download } from 'lucide-react';

export default function ReglementPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data: any) => {
        // 1. Envoi au FORMATEUR (Moi)
        const messageFormateur = `*SIGNATURE RÈGLEMENT - CINEWORLD*\n--------------------------------\n👤 *Élève:* ${data.prenom} ${data.nom}\n📱 *Tel:* ${data.telephone}\n--------------------------------\n*ENGAGEMENTS VALIDÉS :*\n✅ Clause Non-Remboursement (Art. 3)\n✅ Assiduité & Matériel (Art. 5)\n✅ Droit à l'image (Art. 6)\n📅 Date: ${new Date().toLocaleDateString()}`;
        const urlFormateur = `https://wa.me/25377556344?text=${encodeURIComponent(messageFormateur)}`;

        // 2. Envoi à l'ÉLÈVE
        const messageEleve = `Félicitations ${data.prenom} ! Votre acceptation du règlement est enregistrée.\n\nVous avez coché :\n✅ NON REMBOURSABLE (Article 3)\n✅ ASSIDUITÉ (Article 5)\n✅ DROIT IMAGE (Article 6)\n\nTéléchargez votre copie ici : https://cineworld-djibouti.vercel.app/reglement.pdf`;
        const urlEleve = `https://wa.me/${data.telephone}?text=${encodeURIComponent(messageEleve)}`;

        // Ouverture des fenêtres (Attention aux bloqueurs de pop-up)
        window.open(urlFormateur, '_blank');

        // Petit délai pour tenter d'ouvrir la 2ème fenêtre
        setTimeout(() => {
            window.open(urlEleve, '_blank');
        }, 1000);

        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen w-full flex flex-col relative font-sans text-white overflow-x-hidden">

            {/* --- FOND D'ÉCRAN --- */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/background-reglement.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
                <div className="absolute inset-0 bg-black/75"></div>
            </div>

            {/* --- CONTENU PRINCIPAL --- */}
            <div className="relative z-10 flex-grow flex items-center justify-center p-5 md:p-10 pt-32 md:pt-40 min-h-screen">
                <div className="w-full max-w-4xl bg-[#141414]/65 backdrop-blur-[12px] border border-white/15 rounded-[15px] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col h-auto md:h-[85vh]">

                    <div className="text-center mb-8 border-b-2 border-[#D4AF37] pb-5 shrink-0">
                        <h1 className="font-oswald text-3xl md:text-4xl text-[#D4AF37] uppercase tracking-[2px] mb-2.5">Règlement Intérieur</h1>
                        <h2 className="text-base md:text-lg font-normal text-white tracking-[1px]">Conditions Générales de Formation - Cinéworld Académie</h2>
                    </div>

                    {!isSubmitted ? (
                        <>
                            <div className="flex-grow md:overflow-y-auto pr-0 md:pr-5 text-base leading-[1.8] text-justify space-y-6 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-[#D4AF37] max-[900px]:h-[350px] max-[900px]:overflow-y-auto max-[900px]:block max-[900px]:bg-black/40 max-[900px]:border max-[900px]:border-[#444] max-[900px]:p-[15px] max-[900px]:mb-[20px]">
                                <p><strong>CONTRAT DE FORMATION ET RÈGLEMENT INTÉRIEUR</strong><br />
                                    Cinéworld - Masterclass "L'Art du Visuel"</p>

                                <p>
                                    <strong>L'Organisme de Formation :</strong> CINÉWORLD (Représenté par Ali William)<br />
                                    <strong>Le Participant :</strong> Toute personne inscrite à la formation.
                                </p>

                                <div>
                                    <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 1 : OBJET DU CONTRAT</h3>
                                    <p>Le présent contrat a pour objet l'inscription du Participant à la formation complète de 20 jours "L'Art du Visuel" (Scénario, Réalisation, Montage, Création Visuelle).</p>
                                </div>

                                <div>
                                    <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 2 : ENGAGEMENT DE QUALITÉ</h3>
                                    <p>Cinéworld s'engage formellement à :</p>
                                    <ul className="list-disc ml-5 space-y-2 mt-2">
                                        <li><strong>Moyens Techniques :</strong> Mettre à disposition tous les outils pédagogiques, logiciels et matériels nécessaires au bon déroulement de la formation.</li>
                                        <li><strong>Qualité Pédagogique :</strong> Assurer un encadrement professionnel et garantir une qualité de formation à 100%, incluant la supervision des projets finaux.</li>
                                        <li><strong>Accompagnement :</strong> Superviser la création, le montage et la diffusion du court-métrage du Participant.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 3 : CONDITIONS FINANCIÈRES (IMPORTANT)</h3>
                                    <div className="bg-[#E50914]/10 border border-[#E50914] p-4 rounded-[5px] my-5 text-[#ffcccc]">
                                        <strong>⚠️ POLITIQUE DE REMBOURSEMENT STRICTE :</strong><br />
                                        1. <strong>Délai de Rétractation :</strong> Le Participant dispose d'un délai strict de 3 (trois) jours calendaires après paiement pour se rétracter.<br />
                                        2. <strong>Expiration :</strong> Passé ce délai de 3 jours, <span className="underline">aucun remboursement</span> ne sera effectué, quel que soit le motif (abandon, empêchement, changement d'avis).<br />
                                        3. <strong>En cours de formation :</strong> Une fois les cours débutés, la somme reste acquise à Cinéworld.
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 4 : ANNULATION PAR L'ORGANISME</h3>
                                    <p>Cinéworld se réserve le droit de modifier le planning en cas d'imprévus majeurs. Toutefois, si la formation ne peut se tenir et dépasse un délai de <strong>15 jours de retard</strong> par rapport à la date prévue, Cinéworld s'engage à rembourser intégralement les participants.</p>
                                </div>

                                <div>
                                    <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 5 : ASSIDUITÉ ET COMPORTEMENT</h3>
                                    <p>Le Participant s'engage à être présent et ponctuel durant les 20 jours de formation. Le matériel mis à disposition doit être respecté ; toute dégradation volontaire pourra être facturée.</p>
                                </div>

                                <div>
                                    <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 6 : DROITS À L'IMAGE</h3>
                                    <p><strong>Les Films :</strong> Le Participant reste l'auteur de son œuvre, mais autorise Cinéworld à diffuser son film lors de la fin de la formation et à des fins promotionnelles.<br />
                                        <strong>Image du Participant :</strong> L'élève autorise Cinéworld à le filmer/photographier durant la formation pour le "Making-of" et la communication.</p>
                                </div>

                                {/* --- FORMULAIRE DE SIGNATURE --- */}
                                <div className="mt-10 pt-10 border-t border-white/10">
                                    <h3 className="text-white font-oswald text-2xl mb-6 uppercase">Validation et Signature</h3>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs text-[#aaa] uppercase font-bold">Nom</label>
                                                <input
                                                    {...register("nom", { required: true })}
                                                    className="bg-black/50 border border-white/20 rounded p-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                                                    placeholder="Votre Nom"
                                                />
                                                {errors.nom && <span className="text-[#E50914] text-xs">Requis</span>}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs text-[#aaa] uppercase font-bold">Prénom</label>
                                                <input
                                                    {...register("prenom", { required: true })}
                                                    className="bg-black/50 border border-white/20 rounded p-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                                                    placeholder="Votre Prénom"
                                                />
                                                {errors.prenom && <span className="text-[#E50914] text-xs">Requis</span>}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs text-[#aaa] uppercase font-bold">Téléphone WhatsApp</label>
                                            <input
                                                {...register("telephone", { required: true })}
                                                type="tel"
                                                className="bg-black/50 border border-white/20 rounded p-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                                                placeholder="Ex: 77 XX XX XX"
                                            />
                                            {errors.telephone && <span className="text-[#E50914] text-xs">Requis</span>}
                                        </div>

                                        {/* CHECKBOXES OBLIGATOIRES */}
                                        <div className="space-y-4 bg-[#E50914]/5 p-5 rounded border border-[#E50914]/30">
                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <div className="relative flex items-center mt-0.5">
                                                    <input type="checkbox" {...register("check_remboursement", { required: true })} className="peer sr-only" />
                                                    <div className="w-5 h-5 border-2 border-[#555] rounded bg-transparent peer-checked:bg-[#E50914] peer-checked:border-[#E50914] peer-focus:ring-2 peer-focus:ring-[#D4AF37] peer-focus:ring-offset-2 peer-focus:ring-offset-black flex items-center justify-center transition-all shrink-0">
                                                        <CheckCircle size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                                                    </div>
                                                </div>
                                                <span className="text-sm text-[#ddd] group-hover:text-white transition-colors">
                                                    Je reconnais explicitement la clause de <strong>NON REMBOURSEMENT</strong> (Article 3).
                                                </span>
                                            </label>
                                            {errors.check_remboursement && <span className="text-[#E50914] text-xs ml-8 block">Vous devez accepter cette clause.</span>}

                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <div className="relative flex items-center mt-0.5">
                                                    <input type="checkbox" {...register("check_assiduite", { required: true })} className="peer sr-only" />
                                                    <div className="w-5 h-5 border-2 border-[#555] rounded bg-transparent peer-checked:bg-[#E50914] peer-checked:border-[#E50914] peer-focus:ring-2 peer-focus:ring-[#D4AF37] peer-focus:ring-offset-2 peer-focus:ring-offset-black flex items-center justify-center transition-all shrink-0">
                                                        <CheckCircle size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                                                    </div>
                                                </div>
                                                <span className="text-sm text-[#ddd] group-hover:text-white transition-colors">
                                                    Je m'engage à l'assiduité et au respect du matériel (Article 5).
                                                </span>
                                            </label>
                                            {errors.check_assiduite && <span className="text-[#E50914] text-xs ml-8 block">Vous devez accepter cette clause.</span>}

                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <div className="relative flex items-center mt-0.5">
                                                    <input type="checkbox" {...register("check_image", { required: true })} className="peer sr-only" />
                                                    <div className="w-5 h-5 border-2 border-[#555] rounded bg-transparent peer-checked:bg-[#E50914] peer-checked:border-[#E50914] peer-focus:ring-2 peer-focus:ring-[#D4AF37] peer-focus:ring-offset-2 peer-focus:ring-offset-black flex items-center justify-center transition-all shrink-0">
                                                        <CheckCircle size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                                                    </div>
                                                </div>
                                                <span className="text-sm text-[#ddd] group-hover:text-white transition-colors">
                                                    J'autorise Cinéworld à utiliser mon image à des fins promotionnelles (Article 6).
                                                </span>
                                            </label>
                                            {errors.check_image && <span className="text-[#E50914] text-xs ml-8 block">Vous devez accepter cette clause.</span>}
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#E50914] hover:bg-[#b2070f] text-white font-oswald text-xl py-4 rounded uppercase tracking-wider transition-all shadow-lg hover:shadow-red-900/50 mt-4"
                                        >
                                            J'ACCEPTE ET JE SIGNE LE RÈGLEMENT
                                        </button>
                                    </form>
                                </div>

                                <br />
                                <p className="text-center italic text-[#888]">Dernière mise à jour : 01 Décembre 2025</p>
                            </div>
                        </>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-500">
                            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                <CheckCircle size={40} className="text-black" />
                            </div>
                            <h3 className="font-oswald text-3xl text-white uppercase">Signature Enregistrée !</h3>
                            <p className="text-[#ccc] max-w-md">
                                Votre acceptation du règlement a bien été prise en compte. Un message de confirmation a été envoyé sur votre WhatsApp.
                            </p>

                            <div className="p-6 bg-[#1a1a1a] border border-[#333] rounded-lg w-full max-w-md mt-6">
                                <p className="text-sm text-[#888] mb-4 uppercase tracking-widest">Votre copie du contrat</p>
                                <a
                                    href="/reglement.pdf"
                                    download="Reglement_Interieur_Cineworld.pdf"
                                    className="flex items-center justify-center gap-3 bg-[#222] hover:bg-[#333] text-white border border-[#444] py-4 px-6 rounded transition-all group"
                                >
                                    <Download size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                                    <span className="font-oswald tracking-wider">TÉLÉCHARGER LA COPIE PDF</span>
                                </a>
                            </div>

                            <Link href="/" className="text-[#888] hover:text-white text-sm underline mt-8 block">
                                Retour à l'accueil
                            </Link>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
}
