'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Sparkles, MessageCircle } from 'lucide-react';

interface MembershipModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TALENTS = [
    { value: 'video', label: '🎬 Vidéo / Réalisation' },
    { value: 'photo', label: '📷 Photographie' },
    { value: 'writing', label: '✍️ Écriture / Scénario' },
    { value: 'organization', label: '📋 Organisation / Logistique' },
    { value: 'sound', label: '🎧 Son / Musique' },
    { value: 'other', label: '✨ Autre' },
];

export default function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        whatsapp: '',
        talent: '',
        motivation: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build WhatsApp message
        const talentLabel = TALENTS.find(t => t.value === formData.talent)?.label || formData.talent;
        const message = `Bonjour l'équipe Asso ! 🎬

Je souhaite devenir MEMBRE de Cinéworld.

👤 Nom : ${formData.fullName}
📞 WhatsApp : ${formData.whatsapp}
✨ Talent : ${talentLabel}
💬 Motivation : ${formData.motivation}

En attente de validation ! 🙏`;

        // Open WhatsApp with pre-filled message
        const whatsappNumber = '25377010410'; // Replace with actual number
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');

        // Reset and close
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ fullName: '', whatsapp: '', talent: '', motivation: '' });
            onClose();
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="relative w-full max-w-lg bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl shadow-[#D4AF37]/20 overflow-hidden">

                            {/* Golden glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 pointer-events-none" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="relative px-8 pt-8 pb-4 text-center border-b border-[#D4AF37]/30">
                                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-1 rounded-full text-sm font-medium mb-4">
                                    <Sparkles size={16} />
                                    Rejoindre le mouvement
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white">
                                    Devenir <span className="text-[#D4AF37]">Adhérent</span>
                                </h2>
                                <p className="text-white/60 mt-2 text-sm">
                                    Rejoignez la famille Cinéworld Académie
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="relative p-8 space-y-5">

                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                                        <User size={16} className="text-[#D4AF37]" />
                                        Nom & Prénom
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Votre nom complet"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                                    />
                                </div>

                                {/* WhatsApp */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                                        <Phone size={16} className="text-[#D4AF37]" />
                                        Numéro WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        required
                                        placeholder="+253 77 XX XX XX"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all"
                                    />
                                </div>

                                {/* Talent */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                                        <Sparkles size={16} className="text-[#D4AF37]" />
                                        Ton Talent
                                    </label>
                                    <select
                                        name="talent"
                                        value={formData.talent}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-[#1a1a1a]">Choisis ton domaine...</option>
                                        {TALENTS.map((talent) => (
                                            <option key={talent.value} value={talent.value} className="bg-[#1a1a1a]">
                                                {talent.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Motivation */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-white/80">
                                        <MessageCircle size={16} className="text-[#D4AF37]" />
                                        Pourquoi rejoindre Cinéworld ?
                                    </label>
                                    <textarea
                                        name="motivation"
                                        value={formData.motivation}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="Dis-nous ce qui te motive..."
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-black font-bold py-4 px-6 rounded-full transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Envoyer ma candidature
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-white/40">
                                    Votre candidature sera envoyée via WhatsApp
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
