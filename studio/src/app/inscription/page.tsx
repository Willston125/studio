'use client';

import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle, Send } from 'lucide-react';

// Données des modules (synchronisées avec formations/page.tsx)
const MODULES_DATA = [
    { id: 1, titre: "CRÉATION DE SITE WEB AVEC L'IA", tarif: "15.000 FDJ", duree: "5 Jours", sessions: "Sessions de 1h30" },
    { id: 2, titre: "DESIGN GRAPHIQUE PRO", tarif: "10.000 FDJ", duree: "12 Jours", sessions: "Sessions de 1h30" },
    { id: 3, titre: "RÉALISATION & EDITING VIDÉO", tarif: "13.000 FDJ", duree: "15 Jours", sessions: "Sessions de 1h30" },
    { id: 4, titre: "MARKETING DIGITAL & GESTION DE PROJET", tarif: "7.000 FDJ", duree: "8 Jours", sessions: "Sessions de 1h30" },
    { id: 5, titre: "PACK CREATOR 360°", tarif: "45.000 FDJ", duree: "1 Mois", sessions: "Parcours intensif complet" },
];

export default function InscriptionPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const searchParams = useSearchParams();
    const moduleId = searchParams.get('module');

    // Récupérer les infos du module sélectionné
    const selectedModule = useMemo(() => {
        if (!moduleId) return null;
        return MODULES_DATA.find(m => m.id === parseInt(moduleId));
    }, [moduleId]);

    const onSubmit = (data: any) => {
        setShowSuccessModal(true);

        setTimeout(() => {
            let message = `*NOUVELLE INSCRIPTION - CINEWORLD ACADEMIE*\\n--------------------------------\\n👤 *Candidat:* ${data.prenom} ${data.nom}\\n📱 *Tel:* ${data.telephone}\\n📧 *Email:* ${data.email}\\n🎓 *Niveau:* ${data.niveau}`;

            // Ajouter les infos du module si sélectionné
            if (selectedModule) {
                message += `\\n\\n━━━━━━━━━━━━━━━━━━\\n📚 *MODULE SÉLECTIONNÉ*\\n━━━━━━━━━━━━━━━━━━\\n📌 ${selectedModule.titre}\\n💰 ${selectedModule.tarif}\\n⏱️ ${selectedModule.duree} (${selectedModule.sessions})`;
            }

            message += `\\n\\n--------------------------------\\n*ENGAGEMENTS:*\\n✅ Tarif accepté\\n✅ Engagement paiement 48h\\n📅 Date: ${new Date().toLocaleDateString()}`;

            const url = `https://wa.me/25377145306?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

            {/* En-tête avec retour */}
            <div className="container mx-auto px-4 py-8">
                <Link href="/formations" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Retour aux formations</span>
                </Link>
            </div>

            {/* Contenu Principal */}
            <div className="container mx-auto px-4 pb-20">
                <div className="max-w-4xl mx-auto">

                    {/* En-tête de Page */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                            Inscription
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-black mb-4">
                            Rejoignez-nous
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Remplissez ce formulaire pour candidater à l'une de nos formations.
                            Nous vous contacterons sous 48h pour confirmer votre inscription.
                        </p>
                    </div>

                    {/* Encadré Module Sélectionné */}
                    {selectedModule && (
                        <div className="bg-gradient-to-r from-[#6e1615] to-[#8b1c1b] text-white rounded-xl p-6 mb-8 shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle size={32} className="text-yellow-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-lg mb-2 uppercase tracking-wide">
                                        ✅ Module Sélectionné
                                    </h3>
                                    <div className="space-y-1 text-white/90">
                                        <p className="text-xl font-bold">{selectedModule.titre}</p>
                                        <div className="flex flex-wrap gap-4 text-sm mt-3">
                                            <span className="flex items-center gap-2">
                                                💰 <strong>{selectedModule.tarif}</strong>
                                            </span>
                                            <span className="flex items-center gap-2">
                                                ⏱️ {selectedModule.duree}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Formulaire */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Identité */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Nom *
                                    </label>
                                    <input
                                        {...register("nom", { required: "Le nom est obligatoire" })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Votre nom"
                                    />
                                    {errors.nom && (
                                        <span className="text-red-600 text-sm mt-1 block">
                                            {errors.nom.message as string}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Prénom *
                                    </label>
                                    <input
                                        {...register("prenom", { required: "Le prénom est obligatoire" })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Votre prénom"
                                    />
                                    {errors.prenom && (
                                        <span className="text-red-600 text-sm mt-1 block">
                                            {errors.prenom.message as string}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: "L'email est obligatoire",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email invalide"
                                            }
                                        })}
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                        placeholder="votre@email.com"
                                    />
                                    {errors.email && (
                                        <span className="text-red-600 text-sm mt-1 block">
                                            {errors.email.message as string}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        WhatsApp (Djibouti) *
                                    </label>
                                    <input
                                        {...register("telephone", {
                                            required: "Le numéro est obligatoire",
                                            pattern: {
                                                value: /^[0-9]{8}$/,
                                                message: "Format: 8 chiffres (ex: 77145306)"
                                            }
                                        })}
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                        placeholder="77 XX XX XX"
                                    />
                                    {errors.telephone && (
                                        <span className="text-red-600 text-sm mt-1 block">
                                            {errors.telephone.message as string}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Niveau */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Niveau Actuel *
                                </label>
                                <select
                                    {...register("niveau")}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer bg-white"
                                >
                                    <option value="Débutant">Débutant (Je pars de zéro)</option>
                                    <option value="Intermédiaire">Intermédiaire (Quelques bases)</option>
                                    <option value="Avancé">Avancé (Perfectionnement)</option>
                                </select>
                            </div>

                            {/* Attentes */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Vos Attentes (optionnel)
                                </label>
                                <textarea
                                    {...register("attentes")}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Ce que vous souhaitez apprendre..."
                                />
                            </div>

                            {/* Conditions */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-4">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        {...register("condition_prix", { required: true })}
                                        className="mt-1 w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                                    />
                                    <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                                        J'accepte les tarifs proposés et m'engage à effectuer le paiement sous 48h après validation.
                                    </span>
                                </label>
                                {errors.condition_prix && (
                                    <span className="text-red-600 text-xs block ml-8">Ce champ est obligatoire.</span>
                                )}

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        {...register("condition_remboursement", { required: true })}
                                        className="mt-1 w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                                    />
                                    <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                                        Je comprends que le paiement est <strong className="text-red-600">non remboursable</strong> après 3 jours.
                                    </span>
                                </label>
                                {errors.condition_remboursement && (
                                    <span className="text-red-600 text-xs block ml-8">Ce champ est obligatoire.</span>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                Envoyer ma Candidature
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal de Succès */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={48} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-black text-black mb-4">
                                Candidature Envoyée !
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Votre formulaire a été traité. <strong className="text-black">WhatsApp</strong> va s'ouvrir pour finaliser votre inscription.
                            </p>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="text-gray-500 hover:text-black text-sm font-medium transition-colors"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
