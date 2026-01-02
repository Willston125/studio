'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { CheckCircle, Download, FileText, ArrowLeft, Send } from 'lucide-react';

export default function ReglementPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const onSubmit = (data: any) => {
        setShowSuccessModal(true);

        setTimeout(() => {
            const messageFormateur = `*SIGNATURE RÈGLEMENT - CINEWORLD*\n--------------------------------\n👤 *Élève:* ${data.prenom} ${data.nom}\n📱 *Tel:* ${data.telephone}\n--------------------------------\n*ENGAGEMENTS VALIDÉS :*\n✅ Clause Non-Remboursement (Art. 3)\n✅ Assiduité & Matériel (Art. 5)\n✅ Droit à l'image (Art. 6)\n📅 Date: ${new Date().toLocaleDateString()}`;
            const urlFormateur = `https://wa.me/25377556344?text=${encodeURIComponent(messageFormateur)}`;

            const messageEleve = `Félicitations ${data.prenom} ! Votre acceptation du règlement est enregistrée.\n\nVous avez coché :\n✅ NON REMBOURSABLE (Article 3)\n✅ ASSIDUITÉ (Article 5)\n✅ DROIT IMAGE (Article 6)\n\nTéléchargez votre copie ici : https://cineworld-djibouti.vercel.app/reglement.pdf`;
            const urlEleve = `https://wa.me/${data.telephone}?text=${encodeURIComponent(messageEleve)}`;

            window.open(urlFormateur, '_blank');

            setTimeout(() => {
                window.open(urlEleve, '_blank');
            }, 1000);

            setTimeout(() => {
                setIsSubmitted(true);
                setShowSuccessModal(false);
            }, 2000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB]">

            {/* Header / Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-12">
                <div className="font-black text-xl uppercase tracking-tighter">
                    CINEWORLD<span className="text-[#D4AF37]">ACADÉMIE</span>
                </div>
                <Link href="/" className="text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> RETOUR ACCUEIL
                </Link>
            </nav>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* En-tête de la page */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-yellow-100/50 text-[#B8860B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            Documents Officiels
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                            Règlement <span className="text-[#D4AF37]">Intérieur</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Conditions Générales de Formation - Cinéworld Académie</p>
                    </div>

                    {!isSubmitted ? (
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

                            {/* Corps du règlement (Scrollable) */}
                            <div className="p-8 md:p-12 max-h-[60vh] overflow-y-auto border-b border-gray-100 text-gray-600 leading-relaxed text-sm space-y-8 scrollbar-thin scrollbar-thumb-gray-200">

                                <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
                                    <h3 className="text-black font-black uppercase tracking-wider mb-2">Article 1 : Objet du Contrat</h3>
                                    <p>Le présent contrat a pour objet l'inscription du Participant à nos formations audiovisuelles certifiantes. Chaque inscription engage le participant au respect des modules prévus.</p>
                                </div>

                                <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
                                    <h3 className="text-black font-black uppercase tracking-wider mb-2">Article 2 : Engagement de Qualité</h3>
                                    <p>Cineworld s'engage à mettre à disposition du matériel professionnel, des formateurs qualifiés et un accompagnement de A à Z pour la réussite de vos projets.</p>
                                </div>

                                <div className="border-l-4 border-red-500 pl-6 py-2 bg-red-50/50 pr-4">
                                    <h3 className="text-red-600 font-black uppercase tracking-wider mb-2">Article 3 : Politique de Remboursement</h3>
                                    <p className="font-bold mb-2">ATTENTION : POLITIQUE STRICTE</p>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>Le participant dispose de <strong>3 jours</strong> après paiement pour se rétracter.</li>
                                        <li>Passé ce délai, <strong>aucun remboursement</strong> ne sera effectué.</li>
                                        <li>Une formation débutée est due dans son intégralité.</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
                                    <h3 className="text-black font-black uppercase tracking-wider mb-2">Article 4 : Matériel & Assiduité</h3>
                                    <p>Le matériel confié lors des tournages doit être traité avec le plus grand soin. Toute dégradation pourra faire l'objet d'une facturation. L'assiduité est requise pour l'obtention du certificat.</p>
                                </div>

                                <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
                                    <h3 className="text-black font-black uppercase tracking-wider mb-2">Article 5 : Droit à l'image</h3>
                                    <p>L'élève autorise l'Académie à utiliser les images de tournage et les oeuvres réalisées à des fins promotionnelles et pédagogiques.</p>
                                </div>

                                <p className="text-center italic text-gray-400 pt-8 border-t border-gray-100">
                                    Dernière mise à jour : 01 Décembre 2025
                                </p>
                            </div>

                            {/* Formulaire de Signature */}
                            <div className="p-8 md:p-12 bg-[#F9FAFB]">
                                <h3 className="text-lg font-black text-black uppercase tracking-wide mb-8 flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-[#D4AF37]" /> Signature Numérique
                                </h3>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <input
                                                {...register("nom", { required: true })}
                                                placeholder="NOM"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all uppercase font-bold text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                {...register("prenom", { required: true })}
                                                placeholder="PRÉNOM"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all uppercase font-bold text-sm"
                                            />
                                        </div>
                                    </div>

                                    <input
                                        {...register("telephone", { required: true })}
                                        placeholder="TÉLÉPHONE WHATSAPP (EX: 77 XX XX XX)"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all uppercase font-bold text-sm"
                                    />

                                    <div className="space-y-4 pt-4">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" {...register("check_remboursement", { required: true })} className="mt-1 w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]" />
                                            <span className="text-xs text-gray-600 font-medium">J'accepte la clause de <strong>NON REMBOURSEMENT</strong> (Art. 3).</span>
                                        </label>
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" {...register("check_assiduite", { required: true })} className="mt-1 w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]" />
                                            <span className="text-xs text-gray-600 font-medium">Je m'engage à assister à tous les cours et respecter le matériel (Art. 4).</span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-3 shadow-lg"
                                    >
                                        <Send className="w-4 h-4" /> COCHEL ET SIGNER LE RÈGLEMENT
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle size={40} className="text-green-600" />
                            </div>
                            <h2 className="text-3xl font-black text-black mb-4 uppercase">Signature Validée</h2>
                            <p className="text-gray-500 mb-12 max-w-sm mx-auto">
                                Votre exemplaire a été enregistré. Un message de confirmation vous a été envoyé via WhatsApp.
                            </p>

                            <div className="p-8 bg-gray-50 rounded-xl border border-gray-100">
                                <Download className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
                                <a
                                    href="/reglement.pdf"
                                    download="Reglement_Cineworld.pdf"
                                    className="block w-full bg-white border border-gray-200 text-black py-3 rounded font-black text-xs uppercase tracking-widest hover:border-black transition-all"
                                >
                                    Télécharger ma copie PDF
                                </a>
                            </div>

                            <Link href="/" className="inline-block mt-12 text-sm font-bold text-gray-400 hover:text-black transition-colors underline">
                                RETOUR ACCUEIL
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de chargement temporaire */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl scale-in-95 animate-in">
                        <div className="w-16 h-16 border-4 border-gray-100 border-t-[#D4AF37] rounded-full animate-spin mx-auto mb-6"></div>
                        <h3 className="text-xl font-bold text-black mb-2">Signature en cours...</h3>
                        <p className="text-sm text-gray-500">Ouverture de WhatsApp pour confirmation automatique.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
