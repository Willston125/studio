'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Download, Send } from 'lucide-react';
import Link from 'next/link';

export default function ReglementPage() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        whatsapp: '',
        email: ''
    });

    const [checks, setChecks] = useState({
        conditions: false,
        assiduite: false,
        image: false
    });

    const [isValid, setIsValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('fr-FR'));
    }, []);

    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(val => val.trim() !== '');
        const allChecked = Object.values(checks).every(val => val === true);
        setIsValid(allFieldsFilled && allChecked);
    }, [formData, checks]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        // 1. Envoi WhatsApp
        const message = `📋 *NOUVELLE SIGNATURE RÈGLEMENT*\n\n👤 *Élève :* ${formData.nom} ${formData.prenom}\n📞 *WhatsApp :* ${formData.whatsapp}\n📧 *Email :* ${formData.email}\n\n✅ *ENGAGEMENTS VALIDÉS :*\n- Conditions & Non-remboursement (Art. 3)\n- Assiduité & Matériel (Art. 5)\n- Droit à l'image (Art. 6)\n\n📅 *Date :* ${currentDate}`;
        const url = `https://wa.me/25377556344?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');

        // 2. Affichage Succès
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center space-y-8">
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#333] max-w-md w-full shadow-2xl">
                    <CheckCircle className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
                    <h1 className="text-3xl font-headline font-bold text-white mb-2">FÉLICITATIONS !</h1>
                    <p className="text-gray-400 mb-8">Votre règlement a été signé et envoyé avec succès.</p>

                    <div className="space-y-4">
                        <a
                            href="/reglement.pdf"
                            download
                            className="flex items-center justify-center gap-3 w-full bg-[#D4AF37] hover:bg-[#b5952f] text-black font-bold py-4 rounded-lg transition-all"
                        >
                            <Download size={20} />
                            <span>TÉLÉCHARGER MON CONTRAT (PDF)</span>
                        </a>

                        <Link
                            href="/"
                            className="block w-full bg-[#333] hover:bg-[#444] text-white font-bold py-4 rounded-lg transition-all"
                        >
                            RETOUR À L'ACCUEIL
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans flex justify-center items-center p-4 pt-32 lg:pt-40 pb-20">
            <div className="w-full max-w-[800px]">
                <h1 className="text-[#D4AF37] text-4xl md:text-5xl font-headline text-center mb-12 tracking-wide">
                    CONTRAT DE FORMATION<br />
                    <span className="text-white text-2xl md:text-3xl">ET RÈGLEMENT INTÉRIEUR</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Zone de lecture du contrat */}
                    <div className="bg-[#111] border border-[#333] p-6 h-[500px] overflow-y-auto rounded-xl text-sm leading-relaxed text-justify shadow-inner custom-scrollbar">
                        <p className="mb-6 text-center border-b border-[#333] pb-4">
                            <strong>CINÉWORLD ACADÉMIE - MASTERCLASS "L'ART DU VISUEL"</strong>
                        </p>

                        <p className="mb-4">Entre les soussignés :<br />
                            L'Organisme de Formation : <strong>CINÉWORLD</strong> (Ci-après dénommé "Le Formateur")<br />
                            Représenté par : Ali William<br />
                            ET<br />
                            Le Participant (L'Élève) identifié dans le formulaire ci-dessus.</p>

                        <h3 className="text-[#D4AF37] mt-8 mb-3 uppercase font-bold tracking-wider text-base">ARTICLE 1 : OBJET DU CONTRAT</h3>
                        <p className="mb-4 text-gray-300">Le présent contrat a pour objet l'inscription du Participant à la formation complète de 20 jours "L'Art du Visuel" (Scénario, Réalisation, Montage, Création Visuelle), incluant la participation au concours final de court-métrage.</p>

                        <h3 className="text-[#D4AF37] mt-8 mb-3 uppercase font-bold tracking-wider text-base">ARTICLE 2 : ENGAGEMENT DE QUALITÉ</h3>
                        <p className="mb-4 text-gray-300">Cinéworld s'engage formellement à :<br />
                            - <strong>Moyens Techniques :</strong> Mettre à disposition tous les outils pédagogiques, logiciels et matériels nécessaires.<br />
                            - <strong>Qualité Pédagogique :</strong> Assurer un encadrement professionnel et garantir une qualité de formation à 100%.<br />
                            - <strong>Accompagnement :</strong> Superviser la création et la diffusion du court-métrage du Participant.</p>

                        <h3 className="text-[#D4AF37] mt-8 mb-3 uppercase font-bold tracking-wider text-base">ARTICLE 3 : CONDITIONS FINANCIÈRES ET REMBOURSEMENT</h3>
                        <p className="mb-4 text-gray-300">Le Participant reconnait avoir pris connaissance des conditions d'annulation suivantes :<br />
                            1. <strong>Délai de Rétractation (3 jours) :</strong> À compter du paiement, le Participant dispose de 3 jours pour demander un remboursement intégral.<br />
                            2. <strong>Expiration du Délai :</strong> Passé ce délai de 3 jours, <span className="text-[#d32f2f] font-bold">AUCUN REMBOURSEMENT</span> ne sera effectué, quel que soit le motif.<br />
                            3. <strong>Abandon :</strong> Une fois la formation débutée, aucun remboursement ne sera accordé en cas d'abandon.</p>

                        <h3 className="text-[#D4AF37] mt-8 mb-3 uppercase font-bold tracking-wider text-base">ARTICLE 4 : MODIFICATION DU PLANNING</h3>
                        <p className="mb-4 text-gray-300">Cinéworld se réserve le droit de modifier le planning en cas d'imprévus pour garantir la qualité pédagogique. Si la formation est retardée de plus de 15 jours par rapport à la date initiale, un remboursement total sera possible.</p>

                        <h3 className="text-[#D4AF37] mt-8 mb-3 uppercase font-bold tracking-wider text-base">ARTICLE 5 : ASSIDUITÉ ET COMPORTEMENT</h3>
                        <p className="mb-4 text-gray-300">Le Participant s'engage à être ponctuel et à respecter le matériel. Toute dégradation pourra être facturée.</p>

                        <h3 className="text-[#D4AF37] mt-8 mb-3 uppercase font-bold tracking-wider text-base">ARTICLE 6 : DROITS À L'IMAGE</h3>
                        <p className="mb-4 text-gray-300">Le Participant autorise Cinéworld à diffuser son film lors du Festival et à utiliser son image (photos/vidéos prises durant la formation) pour la communication de l'académie.</p>

                        <br />
                        <p className="text-gray-500 italic text-right">Fait à Djibouti, le {currentDate}</p>
                    </div>

                    {/* Section Signature & Engagement */}
                    <div className="bg-[#111] p-8 rounded-xl border border-[#333] space-y-8">
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest border-l-4 border-[#D4AF37] pl-4">Signature & Engagement</h3>

                        {/* Champs Identité */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">Nom Complet</label>
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    value={formData.nom}
                                    onChange={e => setFormData({ ...formData, nom: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white rounded focus:border-[#D4AF37] outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">Prénom</label>
                                <input
                                    type="text"
                                    placeholder="Votre prénom"
                                    value={formData.prenom}
                                    onChange={e => setFormData({ ...formData, prenom: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white rounded focus:border-[#D4AF37] outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">Numéro WhatsApp</label>
                                <input
                                    type="tel"
                                    placeholder="+253..."
                                    value={formData.whatsapp}
                                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white rounded focus:border-[#D4AF37] outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</label>
                                <input
                                    type="email"
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] p-4 text-white rounded focus:border-[#D4AF37] outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Checkboxes Obligatoires */}
                        <div className="space-y-4 pt-4 border-t border-[#333]">
                            <label className="flex items-start gap-4 cursor-pointer group p-3 rounded hover:bg-[#1a1a1a] transition-colors">
                                <div className="relative flex items-center mt-1">
                                    <input
                                        type="checkbox"
                                        checked={checks.conditions}
                                        onChange={e => setChecks({ ...checks, conditions: e.target.checked })}
                                        className="peer sr-only"
                                    />
                                    <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] flex items-center justify-center transition-all">
                                        <CheckCircle size={16} className="text-black opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    J'accepte sans réserve les conditions d'inscription, notamment la clause de <strong>NON REMBOURSEMENT</strong> après 3 jours (Article 3).
                                </span>
                            </label>

                            <label className="flex items-start gap-4 cursor-pointer group p-3 rounded hover:bg-[#1a1a1a] transition-colors">
                                <div className="relative flex items-center mt-1">
                                    <input
                                        type="checkbox"
                                        checked={checks.assiduite}
                                        onChange={e => setChecks({ ...checks, assiduite: e.target.checked })}
                                        className="peer sr-only"
                                    />
                                    <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] flex items-center justify-center transition-all">
                                        <CheckCircle size={16} className="text-black opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    Je m'engage à l'assiduité et au respect des règles de conduite et du matériel (Article 5).
                                </span>
                            </label>

                            <label className="flex items-start gap-4 cursor-pointer group p-3 rounded hover:bg-[#1a1a1a] transition-colors">
                                <div className="relative flex items-center mt-1">
                                    <input
                                        type="checkbox"
                                        checked={checks.image}
                                        onChange={e => setChecks({ ...checks, image: e.target.checked })}
                                        className="peer sr-only"
                                    />
                                    <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] flex items-center justify-center transition-all">
                                        <CheckCircle size={16} className="text-black opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    J'autorise Cinéworld à utiliser mon image durant la formation (Article 6).
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`w-full py-6 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${isValid
                                    ? 'bg-[#E50914] hover:bg-[#b2070f] text-white cursor-pointer shadow-lg transform hover:scale-[1.01]'
                                    : 'bg-[#333] text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            <span>J'ACCEPTE ET JE SIGNE LE RÈGLEMENT</span>
                            <Send size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
