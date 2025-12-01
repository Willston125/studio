'use client';

import React from 'react';
import Link from 'next/link';

export default function ReglementPage() {
    return (
        <div className="min-h-screen w-full flex flex-col relative font-sans text-white overflow-x-hidden">

            {/* --- FOND D'ÉCRAN --- */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/background-reglement.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
                {/* Voile noir (Overlay) */}
                <div className="absolute inset-0 bg-black/75"></div>
            </div>

            {/* --- CONTENU PRINCIPAL --- */}
            <div className="relative z-10 flex-grow flex items-center justify-center p-5 md:p-10 pt-32 md:pt-40 h-screen">
                <div className="w-full max-w-4xl bg-[#141414]/65 backdrop-blur-[12px] border border-white/15 rounded-[15px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col h-[80vh] md:h-[85vh]">

                    <div className="text-center mb-8 border-b-2 border-[#D4AF37] pb-5 shrink-0">
                        <h1 className="font-oswald text-3xl md:text-4xl text-[#D4AF37] uppercase tracking-[2px] mb-2.5">Règlement Intérieur</h1>
                        <h2 className="text-base md:text-lg font-normal text-white tracking-[1px]">Conditions Générales de Formation - Cinéworld Académie</h2>
                    </div>

                    <div className="flex-grow overflow-y-auto pr-5 text-base leading-[1.8] text-justify space-y-6 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-[#D4AF37]">
                        <p><strong>CONTRAT DE FORMATION ET RÈGLEMENT INTÉRIEUR</strong><br />
                            Cinéworld - Masterclass "L'Art du Visuel"</p>

                        <p>
                            <strong>L'Organisme de Formation :</strong> CINÉWORLD (Représenté par Ali William)<br />
                            <strong>Le Participant :</strong> Toute personne inscrite à la formation.
                        </p>

                        <div>
                            <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 1 : OBJET DU CONTRAT</h3>
                            <p>Le présent contrat a pour objet l'inscription du Participant à la formation complète de 20 jours "L'Art du Visuel" (Scénario, Réalisation, Montage, Création Visuelle), incluant la participation au concours final de court-métrage.</p>
                        </div>

                        <div>
                            <h3 className="text-[#D4AF37] font-oswald text-xl md:text-2xl mt-8 mb-4 border-l-[3px] border-[#E50914] pl-2.5">ARTICLE 2 : ENGAGEMENT DE QUALITÉ</h3>
                            <p>Cinéworld s'engage formellement à :</p>
                            <ul className="list-disc ml-5 space-y-2 mt-2">
                                <li><strong>Moyens Techniques :</strong> Mettre à disposition tous les outils pédagogiques, logiciels et matériels nécessaires au bon déroulement de la formation.</li>
                                <li><strong>Qualité Pédagogique :</strong> Assurer un encadrement professionnel et garantir une qualité de formation à 100%, incluant la supervision des projets finaux.</li>
                                <li><strong>Accompagnement :</strong> Superviser la création, le montage et la diffusion du court-métrage du Participant lors du festival de clôture.</li>
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
                            <p><strong>Les Films :</strong> Le Participant reste l'auteur de son œuvre, mais autorise Cinéworld à diffuser son film lors du Festival de fin de formation et à des fins promotionnelles.<br />
                                <strong>Image du Participant :</strong> L'élève autorise Cinéworld à le filmer/photographier durant la formation pour le "Making-of" et la communication.</p>
                        </div>

                        <br />
                        <p className="text-center italic text-[#888]">Dernière mise à jour : 01 Décembre 2025</p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 text-center shrink-0">
                        <Link href="/inscription" className="inline-block bg-[#E50914] hover:bg-[#b2070f] text-white px-10 py-4 no-underline font-oswald uppercase font-bold tracking-[1px] rounded-[5px] transition-all shadow-[0_5px_15px_rgba(229,9,20,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(229,9,20,0.6)]">
                            J'AI LU LE RÈGLEMENT -&gt; S'INSCRIRE
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
}
