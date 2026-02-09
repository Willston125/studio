'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Gift, Handshake, Banknote, Download, MessageCircle, Camera, Laptop, HardDrive, Mic, Lightbulb } from 'lucide-react';

interface SponsorshipModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MATERIAL_NEEDS = [
    { icon: Camera, label: 'Caméras professionnelles' },
    { icon: Laptop, label: 'MacBooks / Ordinateurs' },
    { icon: HardDrive, label: 'Disques durs de stockage' },
    { icon: Mic, label: 'Microphones' },
    { icon: Lightbulb, label: 'Équipements d\'éclairage' },
];

export default function SponsorshipModal({ isOpen, onClose }: SponsorshipModalProps) {
    const [copied, setCopied] = useState(false);
    const IBAN = 'DJ89 1000 0001 0000 0001 2345 678';
    const whatsappNumber = '25377010410';

    const handleCopyIBAN = () => {
        navigator.clipboard.writeText(IBAN.replace(/\s/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleMaterialDonation = () => {
        const message = `Bonjour l'équipe Cinéworld ! 🎬

Je souhaite faire un DON DE MATÉRIEL à l'association.

📦 Type de matériel : [À préciser]
👤 Nom / Entreprise : [Votre nom]
📞 Contact : [Votre numéro]

Merci pour votre mission ! 🙏`;

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleDownloadPDF = () => {
        // Simulate PDF download - replace with actual file later
        window.open('/dossier-sponsoring.pdf', '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        <div className="relative w-full max-w-4xl my-8 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] rounded-2xl border border-[#D4AF37]/40 shadow-2xl shadow-[#D4AF37]/10 overflow-hidden">

                            {/* Golden accent line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="relative px-8 pt-10 pb-6 text-center">
                                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1 rounded-full text-sm font-medium mb-4">
                                    <Handshake size={16} />
                                    Mécénat & Partenariats
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                                    Devenez un <span className="text-[#D4AF37]">Pilier</span> de la Culture Djiboutienne
                                </h2>
                                <p className="text-white/60 text-sm md:text-base">
                                    Défiscalisation & Impact Social (RSE)
                                </p>
                            </div>

                            {/* 3 Options Grid */}
                            <div className="px-6 md:px-8 pb-6 grid md:grid-cols-3 gap-4 md:gap-6">

                                {/* Option A: Don Financier */}
                                <div className="group relative bg-white/5 hover:bg-white/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                    <div className="relative">
                                        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4">
                                            <Banknote className="text-[#D4AF37]" size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">Don Financier</h3>
                                        <p className="text-white/50 text-sm mb-4">Virement bancaire direct</p>

                                        <div className="bg-black/40 rounded-lg p-3 mb-4">
                                            <p className="text-xs text-white/40 mb-1">IBAN</p>
                                            <p className="text-sm text-white font-mono break-all">{IBAN}</p>
                                        </div>

                                        <button
                                            onClick={handleCopyIBAN}
                                            className="w-full flex items-center justify-center gap-2 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#D4AF37] font-semibold py-3 px-4 rounded-lg transition-all"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check size={18} />
                                                    IBAN Copié !
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={18} />
                                                    Copier l'IBAN
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Option B: Don Matériel */}
                                <div className="group relative bg-white/5 hover:bg-white/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                    <div className="relative">
                                        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4">
                                            <Gift className="text-[#D4AF37]" size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">Don de Matériel</h3>
                                        <p className="text-white/50 text-sm mb-4">Recyclage & Réemploi</p>

                                        <ul className="space-y-2 mb-4">
                                            {MATERIAL_NEEDS.map((item, index) => (
                                                <li key={index} className="flex items-center gap-2 text-white/70 text-sm">
                                                    <item.icon size={14} className="text-[#D4AF37]" />
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={handleMaterialDonation}
                                            className="w-full flex items-center justify-center gap-2 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#D4AF37] font-semibold py-3 px-4 rounded-lg transition-all"
                                        >
                                            <MessageCircle size={18} />
                                            J'ai du matériel
                                        </button>
                                    </div>
                                </div>

                                {/* Option C: Partenariat Annuel */}
                                <div className="group relative bg-white/5 hover:bg-white/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                    <div className="relative">
                                        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4">
                                            <Handshake className="text-[#D4AF37]" size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">Partenariat Annuel</h3>
                                        <p className="text-white/50 text-sm mb-4">Sponsoring & Mécénat</p>

                                        <div className="bg-black/40 rounded-lg p-3 mb-4">
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                Recevez notre dossier complet avec les différentes formules de sponsoring et leurs avantages.
                                            </p>
                                        </div>

                                        <button
                                            onClick={handleDownloadPDF}
                                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-black font-bold py-3 px-4 rounded-lg transition-all"
                                        >
                                            <Download size={18} />
                                            Télécharger le Dossier
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Footer - Trust badges */}
                            <div className="px-8 py-6 border-t border-white/10 bg-black/20">
                                <div className="flex flex-wrap justify-center gap-6 text-xs text-white/50">
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-[#D4AF37]" />
                                        Association agréée
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-[#D4AF37]" />
                                        Reçu fiscal délivré
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-[#D4AF37]" />
                                        100% réinvesti dans la formation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
