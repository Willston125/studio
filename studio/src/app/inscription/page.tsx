'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    CheckCircle2,
    Send,
    User,
    Mail,
    Phone,
    GraduationCap,
    Shield,
    AlertCircle,
    ChevronRight,
    Clock,
    Calendar,
    Sparkles,
    MessageCircle,
    MapPin
} from 'lucide-react';
import { saveInscriptionToSheets } from '@/lib/googleSheets';

// ─── Données des modules ────────────────────────────────────────────────────
const MODULES_DATA = [
    {
        id: 1,
        titre: "Création de Site Web avec l'IA",
        shortTitle: "Web IA",
        tarif: "15.000 FDJ",
        duree: "5 Jours",
        sessions: "Sessions de 1h30",
        icon: "💻",
        couleur: "from-blue-600 to-blue-800"
    },
    {
        id: 2,
        titre: "Design Graphique Pro",
        shortTitle: "Design",
        tarif: "10.000 FDJ",
        duree: "12 Jours",
        sessions: "Sessions de 1h30",
        icon: "🎨",
        couleur: "from-purple-600 to-purple-800"
    },
    {
        id: 3,
        titre: "Réalisation & Editing Vidéo",
        shortTitle: "Vidéo",
        tarif: "13.000 FDJ",
        duree: "15 Jours",
        sessions: "Sessions de 1h30",
        icon: "🎬",
        couleur: "from-red-600 to-red-800"
    },
    {
        id: 4,
        titre: "Marketing Digital & Gestion de Projet",
        shortTitle: "Marketing",
        tarif: "7.000 FDJ",
        duree: "8 Jours",
        sessions: "Sessions de 1h30",
        icon: "📈",
        couleur: "from-green-600 to-green-800"
    },
    {
        id: 5,
        titre: "Pack Creator 360°",
        shortTitle: "Pack Complet",
        tarif: "45.000 FDJ",
        duree: "1 Mois",
        sessions: "Parcours intensif complet",
        icon: "⭐",
        couleur: "from-amber-500 to-orange-600",
        popular: true
    },
];

type FormData = {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    niveau: string;
    attentes: string;
    condition_prix: boolean;
    condition_remboursement: boolean;
};

// ─── Labels des étapes ───────────────────────────────────────────────────────
const STEP_LABELS = [
    { id: 1, label: "Informations Personnelles" },
    { id: 2, label: "Coordonnées & Niveau" },
    { id: 3, label: "Validation Finale" },
];

function InscriptionContent() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm<FormData>({
        defaultValues: { niveau: 'Débutant' },
        mode: 'onChange'
    });

    const searchParams = useSearchParams();
    const moduleId = searchParams.get('module');

    const selectedModule = useMemo(() => {
        if (!moduleId) return null;
        return MODULES_DATA.find(m => m.id === parseInt(moduleId));
    }, [moduleId]);

    // Auto-save dans localStorage
    const formValues = watch();
    useEffect(() => {
        const saved = localStorage.getItem('cineworld_inscription_draft');
        if (saved) {
            const data = JSON.parse(saved);
            Object.keys(data).forEach(key => {
                setValue(key as keyof FormData, data[key]);
            });
        }
    }, [setValue]);

    useEffect(() => {
        if (formValues.nom || formValues.prenom || formValues.email) {
            localStorage.setItem('cineworld_inscription_draft', JSON.stringify(formValues));
        }
    }, [formValues]);

    // Formatage automatique du téléphone
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);
        setValue('telephone', value);
    };

    const validateStep = async () => {
        let fields: (keyof FormData)[] = [];
        if (currentStep === 1) fields = ['nom', 'prenom'];
        if (currentStep === 2) fields = ['email', 'telephone'];
        if (currentStep === 3) fields = ['condition_prix', 'condition_remboursement'];

        const isValid = await trigger(fields);
        if (isValid && currentStep < 3) {
            setCurrentStep(curr => curr + 1);
        }
    };

    // Envoi final via WhatsApp
    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccessModal(true);
            localStorage.removeItem('cineworld_inscription_draft');

            setTimeout(async () => {
                // Sauvegarde dans Google Sheets (non bloquant)
                await saveInscriptionToSheets({
                    prenom: data.prenom,
                    nom: data.nom,
                    email: data.email,
                    telephone: data.telephone,
                    module: selectedModule ? selectedModule.titre : 'Non sélectionné',
                    duree: selectedModule ? selectedModule.duree : '-',
                    tarif: selectedModule ? selectedModule.tarif : '-',
                    niveau: data.niveau,
                    attentes: data.attentes,
                });

                let message = `*🎬 NOUVELLE INSCRIPTION - CINEWORLD ACADÉMIE*\n\n`;
                message += `━━━━━━━━━━━━━━━━━━━━\n`;
                message += `*👤 IDENTITÉ*\n`;
                message += `Nom: ${data.nom} ${data.prenom}\n`;
                message += `Tel: +253 ${data.telephone}\n`;
                message += `Email: ${data.email}\n`;
                message += `Niveau: ${data.niveau}\n\n`;

                if (selectedModule) {
                    message += `━━━━━━━━━━━━━━━━━━━━\n`;
                    message += `*📚 FORMATION CHOISIE*\n`;
                    message += `${selectedModule.icon} ${selectedModule.titre}\n`;
                    message += `💰 Tarif: ${selectedModule.tarif}\n`;
                    message += `⏱️ Durée: ${selectedModule.duree}\n`;
                    message += `📅 ${selectedModule.sessions}\n\n`;
                } else {
                    message += `━━━━━━━━━━━━━━━━━━━━\n`;
                    message += `*📚 FORMATION*\n`;
                    message += `Aucune formation sélectionnée - À discuter\n\n`;
                }

                if (data.attentes) {
                    message += `━━━━━━━━━━━━━━━━━━━━\n`;
                    message += `*🎯 ATTENTES/QUESTIONS:*\n${data.attentes}\n\n`;
                }

                message += `━━━━━━━━━━━━━━━━━━━━\n`;
                message += `*✅ ENGAGEMENTS ACCEPTÉS*\n`;
                message += `▸ Paiement acompte 30% sous 48h\n`;
                message += `▸ Non remboursable après 3 jours\n`;
                message += `📅 Date: ${new Date().toLocaleDateString('fr-FR')}`;

                const url = `https://wa.me/25377145306?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }, 1500);
        }, 1000);
    };

    const completedPct = Math.round((currentStep / 3) * 100);
    const stepLabel = STEP_LABELS[currentStep - 1];

    // ─── Champs visuels (new design style) ──────────────────────────────────
    const inputClass = (hasError: boolean) =>
        `w-full px-4 py-3 rounded-lg border transition-all outline-none text-slate-900 bg-white ${hasError
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-slate-300 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20'
        }`;

    return (
        <div className="min-h-screen text-slate-900" style={{ background: '#f8f6f6', fontFamily: "'Public Sans', sans-serif" }}>

            {/* ─── Header ─────────────────────────────────────────────────── */}
            <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-[#800020] p-1.5 rounded-lg text-white">
                        {/* Film icon SVG */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-[#800020] text-lg font-bold leading-tight tracking-tight">Cinéworld Académie</h2>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Excellence en Cinéma</p>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-1 text-sm text-slate-500">
                        <Link href="/" className="hover:text-[#800020] transition-colors">Accueil</Link>
                        <ChevronRight size={14} />
                        <Link href="/formations" className="hover:text-[#800020] transition-colors">Formations</Link>
                        <ChevronRight size={14} />
                        <span className="text-[#800020] font-medium">Inscription</span>
                    </nav>
                    <Link href="/formations" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#800020] transition-colors">
                        <span>Quitter</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </Link>
                </div>
            </header>

            {/* ─── Main ───────────────────────────────────────────────────── */}
            <main className="max-w-4xl mx-auto w-full px-4 py-8 md:py-12">

                {/* Progress */}
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-3">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-1 block">
                                Étape {String(currentStep).padStart(2, '0')} sur 03
                            </span>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{stepLabel.label}</h1>
                        </div>
                        <span className="text-sm font-semibold text-slate-500">{completedPct}% complété</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#800020] rounded-full transition-all duration-500"
                            style={{ width: `${completedPct}%` }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ─── Form Section ─────────────────────────────────────── */}
                    <div className="lg:col-span-2 space-y-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100">

                                <AnimatePresence mode="wait">

                                    {/* ÉTAPE 1 : Identité */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-5"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                {/* Prénom */}
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                                        <User size={14} className="text-slate-400" /> Prénom *
                                                    </label>
                                                    <input
                                                        {...register("prenom", { required: "Le prénom est requis" })}
                                                        placeholder="Ex: Jean"
                                                        className={inputClass(!!errors.prenom)}
                                                    />
                                                    {errors.prenom && (
                                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                            <AlertCircle size={12} /> {errors.prenom.message}
                                                        </p>
                                                    )}
                                                </div>
                                                {/* Nom */}
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                                        <User size={14} className="text-slate-400" /> Nom *
                                                    </label>
                                                    <input
                                                        {...register("nom", { required: "Le nom est requis" })}
                                                        placeholder="Ex: Dupont"
                                                        className={inputClass(!!errors.nom)}
                                                    />
                                                    {errors.nom && (
                                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                            <AlertCircle size={12} /> {errors.nom.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* ÉTAPE 2 : Contact */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-5"
                                        >
                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                                    <Mail size={14} className="text-slate-400" /> Adresse Email *
                                                </label>
                                                <div className="relative">
                                                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                    <input
                                                        type="email"
                                                        {...register("email", {
                                                            required: "L'email est requis",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "Format d'email invalide"
                                                            }
                                                        })}
                                                        placeholder="nom@exemple.com"
                                                        className={`${inputClass(!!errors.email)} pl-10`}
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                        <AlertCircle size={12} /> {errors.email.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Téléphone */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                                    <Phone size={14} className="text-slate-400" /> Numéro WhatsApp (+253) *
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-sm pointer-events-none">+253</span>
                                                    <input
                                                        {...register("telephone", {
                                                            required: "Le numéro est requis",
                                                            pattern: {
                                                                value: /^[0-9]{8}$/,
                                                                message: "8 chiffres requis"
                                                            }
                                                        })}
                                                        onChange={handlePhoneChange}
                                                        placeholder="77 XX XX XX"
                                                        maxLength={8}
                                                        className={`${inputClass(!!errors.telephone)} pl-16`}
                                                    />
                                                </div>
                                                {errors.telephone && (
                                                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                        <AlertCircle size={12} /> {errors.telephone.message}
                                                    </p>
                                                )}
                                                <p className="text-xs text-slate-400 mt-1">Format: 77145306 (8 chiffres sans espaces)</p>
                                            </div>

                                            {/* Niveau */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                                    <GraduationCap size={14} className="text-slate-400" /> Votre niveau actuel
                                                </label>
                                                <select
                                                    {...register("niveau")}
                                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none bg-white text-slate-900"
                                                >
                                                    <option value="Débutant">🌱 Débutant complet</option>
                                                    <option value="Intermédiaire">📚 Quelques bases (autodidacte)</option>
                                                    <option value="Avancé">🎯 Niveau avancé (perfectionnement)</option>
                                                </select>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* ÉTAPE 3 : Validation */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-5"
                                        >
                                            {/* Condition prix */}
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                                <label className="flex items-start gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        {...register("condition_prix", { required: "Vous devez accepter les conditions" })}
                                                        className="mt-1 w-5 h-5 rounded border-2 border-slate-300 accent-[#800020] focus:ring-[#800020]"
                                                    />
                                                    <div className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                                                        <span className="font-semibold">J'accepte les tarifs affichés.</span> Je comprends que je devrai régler l'acompte (30%) sous 48h pour confirmer ma place.
                                                    </div>
                                                </label>
                                                {errors.condition_prix && (
                                                    <p className="text-red-500 text-xs mt-2 ml-8">{errors.condition_prix.message}</p>
                                                )}
                                            </div>

                                            {/* Condition remboursement */}
                                            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                                                <label className="flex items-start gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        {...register("condition_remboursement", { required: "Vous devez accepter cette condition" })}
                                                        className="mt-1 w-5 h-5 rounded border-2 border-amber-300 accent-[#800020] focus:ring-[#800020]"
                                                    />
                                                    <div className="text-sm text-amber-900 group-hover:text-amber-950 transition-colors">
                                                        <span className="font-semibold">Politique d'annulation.</span> J'ai lu et j'accepte que les frais ne sont pas remboursables après le début de la formation (3 jours de rétractation).
                                                    </div>
                                                </label>
                                                {errors.condition_remboursement && (
                                                    <p className="text-red-500 text-xs mt-2 ml-8">{errors.condition_remboursement.message}</p>
                                                )}
                                            </div>

                                            {/* Message optionnel */}
                                            <div className="space-y-2 pt-2">
                                                <label className="text-sm font-semibold text-slate-700">Message optionnel</label>
                                                <textarea
                                                    {...register("attentes")}
                                                    rows={3}
                                                    placeholder="Décrivez brièvement vos objectifs ou posez vos questions..."
                                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none resize-none bg-white text-slate-900"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Navigation Buttons */}
                                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col md:flex-row gap-4">
                                    {currentStep < 3 ? (
                                        <button
                                            type="button"
                                            onClick={validateStep}
                                            className="flex-1 bg-[#800020] hover:bg-[#6a001a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#800020]/20 flex items-center justify-center gap-2"
                                        >
                                            Suivant
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 bg-[#800020] hover:bg-[#6a001a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#800020]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Envoi...
                                                </>
                                            ) : (
                                                <>
                                                    Confirmer l&apos;inscription
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    )}

                                    {currentStep > 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(currentStep - 1)}
                                            className="px-6 py-3 font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                                        >
                                            ← Retour
                                        </button>
                                    ) : (
                                        <button type="button" className="px-6 py-3 font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                                            Enregistrer pour plus tard
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>

                        {/* Notice sécurité */}
                        <div className="flex items-center gap-3 p-4 bg-[#800020]/5 rounded-xl border border-[#800020]/10">
                            <Shield size={20} className="text-[#800020] shrink-0" />
                            <p className="text-sm text-slate-600">Vos données sont protégées et cryptées. Cinéworld Académie respecte votre vie privée.</p>
                        </div>
                    </div>

                    {/* ─── Summary Sidebar ──────────────────────────────────── */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 sticky top-24">
                            {/* Header card image */}
                            <div className="h-32 w-full bg-[#800020] relative overflow-hidden">
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    {selectedModule?.popular && (
                                        <span className="bg-[#E1AD01] text-[#800020] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mr-2">
                                            Populaire
                                        </span>
                                    )}
                                    <span className="bg-[#E1AD01] text-[#800020] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                        Formation intensive
                                    </span>
                                    <h3 className="text-white font-bold text-lg mt-1">
                                        {selectedModule ? selectedModule.shortTitle : 'Cours de Cinéma'}
                                    </h3>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6 space-y-4">
                                {selectedModule ? (
                                    <>
                                        <div className="flex items-center justify-between py-2 border-b border-slate-50">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="text-slate-400" />
                                                <span className="text-sm text-slate-600">Durée</span>
                                            </div>
                                            <span className="text-sm font-bold">{selectedModule.duree}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-slate-50">
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} className="text-slate-400" />
                                                <span className="text-sm text-slate-600">Frais</span>
                                            </div>
                                            <span className="text-sm font-bold text-[#800020]">{selectedModule.tarif}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} className="text-slate-400" />
                                                <span className="text-sm text-slate-600">Lieu</span>
                                            </div>
                                            <span className="text-sm font-bold">Campus Cinéworld</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-4">
                                        <AlertCircle size={24} className="text-amber-500 mx-auto mb-2" />
                                        <p className="text-sm text-slate-500 mb-3">Aucune formation sélectionnée</p>
                                        <Link href="/formations" className="text-sm font-bold text-[#800020] underline">
                                            Voir les formations →
                                        </Link>
                                    </div>
                                )}

                                {selectedModule && (
                                    <div className="mt-4">
                                        <Link
                                            href="/formations"
                                            className="w-full text-xs font-bold text-[#800020] uppercase tracking-widest hover:underline flex items-center justify-center gap-1"
                                        >
                                            Modifier le cours
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Info box */}
                            <div className="bg-slate-50 p-6">
                                <div className="flex items-start gap-3">
                                    <div className="bg-[#E1AD01]/20 p-2 rounded-lg">
                                        <Sparkles size={18} className="text-[#E1AD01]" />
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Une fois le formulaire soumis, vous recevrez une confirmation par mail avec les instructions de paiement.
                                    </p>
                                </div>
                            </div>

                            {/* Processus d'admission */}
                            <div className="p-6 border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm">
                                    <Sparkles size={16} className="text-[#E1AD01]" />
                                    Processus d&apos;admission
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { step: 1, title: "Formulaire", desc: "Remplir ce formulaire" },
                                        { step: 2, title: "WhatsApp", desc: "Envoi automatique des détails" },
                                        { step: 3, title: "Entretien", desc: "15 min par téléphone" },
                                        { step: 4, title: "Inscription", desc: "Paiement et début" }
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-3">
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${item.step <= currentStep ? 'bg-[#800020] text-white' : 'bg-slate-100 text-slate-400'}`}>
                                                {item.step}
                                            </div>
                                            <div>
                                                <p className={`font-medium text-sm ${item.step <= currentStep ? 'text-slate-900' : 'text-slate-400'}`}>{item.title}</p>
                                                <p className="text-xs text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ─── Footer ─────────────────────────────────────────────────── */}
            <footer className="bg-white border-t border-slate-200 py-8 px-6 text-center mt-8">
                <p className="text-sm text-slate-500">© 2024 Cinéworld Académie. Association pour le développement cinématographique.</p>
            </footer>

            {/* ─── Modal de Succès ──────────────────────────────────────────── */}
            <AnimatePresence>
                {showSuccessModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3">Candidature envoyée !</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                WhatsApp s'ouvre pour finaliser votre inscription avec notre équipe.
                                <br /><br />
                                <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">Réponse sous 2h</span>
                            </p>
                            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                                <MessageCircle size={20} />
                                Ouverture de WhatsApp...
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function InscriptionPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#f8f6f6]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#800020]"></div>
            </div>
        }>
            <InscriptionContent />
        </Suspense>
    );
}
