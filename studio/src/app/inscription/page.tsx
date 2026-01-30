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
    MessageCircle
} from 'lucide-react';

// Données des modules
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

function InscriptionContent() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm<FormData>({
        defaultValues: {
            niveau: 'Débutant'
        },
        mode: 'onChange'
    });

    const searchParams = useSearchParams();
    const moduleId = searchParams.get('module');

    // Récupérer les infos du module
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
    const onSubmit = (data: FormData) => {
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccessModal(true);
            localStorage.removeItem('cineworld_inscription_draft');

            setTimeout(() => {
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

    const steps = [
        { id: 1, title: 'Identité', icon: User },
        { id: 2, title: 'Contact', icon: Mail },
        { id: 3, title: 'Validation', icon: Shield },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 font-sans">
            {/* Header Institutionnel */}
            <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-[#6e1615] rounded flex items-center justify-center text-white font-serif font-bold">
                            C
                        </div>
                        <span className="font-serif font-bold text-slate-900 dark:text-white hidden sm:block">CINEWORLD</span>
                    </Link>

                    <nav className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-[#6e1615] dark:hover:text-[#C5A572] transition-colors">Accueil</Link>
                        <ChevronRight size={14} />
                        <Link href="/formations" className="hover:text-[#6e1615] dark:hover:text-[#C5A572] transition-colors">Formations</Link>
                        <ChevronRight size={14} />
                        <span className="text-[#6e1615] dark:text-[#C5A572] font-medium">Inscription</span>
                    </nav>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                {/* En-tête */}
                <div className="text-center mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3"
                    >
                        Finalisez votre inscription
                    </motion.h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Rejoignez la première académie audiovisuelle de Djibouti.
                        Programmez votre entretien d'admission en 3 étapes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Colonne Gauche : Carte Formation (Sticky) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                        {selectedModule ? (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
                            >
                                {selectedModule.popular && (
                                    <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                                        POPULAIRE
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{selectedModule.icon}</span>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider">Formation sélectionnée</p>
                                        <h2 className="font-bold text-lg leading-tight">{selectedModule.shortTitle}</h2>
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-4 space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Tarif</span>
                                        <span className="text-2xl font-bold text-amber-400">{selectedModule.tarif}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400 flex items-center gap-2">
                                            <Clock size={14} /> Durée
                                        </span>
                                        <span>{selectedModule.duree}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400 flex items-center gap-2">
                                            <Calendar size={14} /> Sessions
                                        </span>
                                        <span>{selectedModule.sessions}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-green-400" />
                                        <span>Certificat reconnu</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-green-400" />
                                        <span>Groupes de 10 max</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-green-400" />
                                        <span>80% pratique</span>
                                    </div>
                                </div>

                                <Link
                                    href="/formations"
                                    className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    <ArrowLeft size={14} /> Changer de formation
                                </Link>
                            </motion.div>
                        ) : (
                            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 text-amber-900 dark:text-amber-200">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h3 className="font-bold mb-1">Aucune formation sélectionnée</h3>
                                        <p className="text-sm mb-3 opacity-80">Vous pouvez tout de même candidater, nous vous aiderons à choisir.</p>
                                        <Link href="/formations" className="text-sm font-bold underline">
                                            Voir les formations
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Processus */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Sparkles size={18} className="text-amber-500" />
                                Processus d'admission
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { step: 1, title: "Formulaire", desc: "Remplir ce formulaire" },
                                    { step: 2, title: "WhatsApp", desc: "Envoi automatique des détails" },
                                    { step: 3, title: "Entretien", desc: "15 min par téléphone" },
                                    { step: 4, title: "Inscription", desc: "Paiement et début" }
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${item.step <= currentStep ? 'bg-[#6e1615] text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
                                            }`}>
                                            {item.step}
                                        </div>
                                        <div>
                                            <p className={`font-medium text-sm ${item.step <= currentStep ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne Droite : Formulaire */}
                    <div className="lg:col-span-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                {/* Stepper */}
                                <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-6">
                                    <div className="flex items-center justify-between relative">
                                        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />
                                        {steps.map((step) => {
                                            const Icon = step.icon;
                                            const isActive = currentStep === step.id;
                                            const isCompleted = currentStep > step.id;

                                            return (
                                                <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-slate-50 dark:bg-slate-900 px-2">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isCompleted ? 'bg-green-500 text-white' :
                                                            isActive ? 'bg-[#6e1615] text-white ring-4 ring-[#6e1615]/20' :
                                                                'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-400'
                                                        }`}>
                                                        {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                                                    </div>
                                                    <span className={`text-xs font-medium hidden sm:block ${isActive ? 'text-[#6e1615] dark:text-[#C5A572]' : isCompleted ? 'text-green-600' : 'text-slate-400'
                                                        }`}>
                                                        {step.title}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Contenu du formulaire */}
                                <div className="p-6 md:p-8">
                                    <AnimatePresence mode="wait">
                                        {/* Étape 1: Identité */}
                                        {currentStep === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="text-center mb-8">
                                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Qui êtes-vous ?</h2>
                                                    <p className="text-slate-500 dark:text-slate-400">Commençons par les informations essentielles</p>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                            <User size={14} className="text-slate-400" /> Nom *
                                                        </label>
                                                        <input
                                                            {...register("nom", { required: "Le nom est requis" })}
                                                            placeholder="Votre nom de famille"
                                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white ${errors.nom ? 'border-red-300 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-4 focus:ring-[#6e1615]/10'
                                                                }`}
                                                        />
                                                        {errors.nom && (
                                                            <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                                <AlertCircle size={12} /> {errors.nom.message}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                            <User size={14} className="text-slate-400" /> Prénom *
                                                        </label>
                                                        <input
                                                            {...register("prenom", { required: "Le prénom est requis" })}
                                                            placeholder="Votre prénom"
                                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white ${errors.prenom ? 'border-red-300 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-4 focus:ring-[#6e1615]/10'
                                                                }`}
                                                        />
                                                        {errors.prenom && (
                                                            <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                                <AlertCircle size={12} /> {errors.prenom.message}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Étape 2: Contact */}
                                        {currentStep === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="text-center mb-8">
                                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Comment vous joindre ?</h2>
                                                    <p className="text-slate-500 dark:text-slate-400">Nous utiliserons WhatsApp pour la suite du processus</p>
                                                </div>

                                                <div className="space-y-6">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                            <Mail size={14} className="text-slate-400" /> Email *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            {...register("email", {
                                                                required: "L'email est requis",
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: "Format d'email invalide"
                                                                }
                                                            })}
                                                            placeholder="exemple@email.com"
                                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-4 focus:ring-[#6e1615]/10'
                                                                }`}
                                                        />
                                                        {errors.email && (
                                                            <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                                <AlertCircle size={12} /> {errors.email.message}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                            <Phone size={14} className="text-slate-400" /> WhatsApp (+253) *
                                                        </label>
                                                        <div className="relative">
                                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">+253</span>
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
                                                                className={`w-full pl-16 pr-4 py-3 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white ${errors.telephone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-4 focus:ring-[#6e1615]/10'
                                                                    }`}
                                                            />
                                                        </div>
                                                        {errors.telephone && (
                                                            <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                                <AlertCircle size={12} /> {errors.telephone.message}
                                                            </p>
                                                        )}
                                                        <p className="text-xs text-slate-400 mt-1">
                                                            Format: 77145306 (8 chiffres sans espaces)
                                                        </p>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                            <GraduationCap size={14} className="text-slate-400" /> Votre niveau actuel
                                                        </label>
                                                        <select
                                                            {...register("niveau")}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-4 focus:ring-[#6e1615]/10 outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                                        >
                                                            <option value="Débutant">🌱 Débutant complet</option>
                                                            <option value="Intermédiaire">📚 Quelques bases (autodidacte)</option>
                                                            <option value="Avancé">🎯 Niveau avancé (perfectionnement)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Étape 3: Validation */}
                                        {currentStep === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="text-center mb-8">
                                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Dernière étape</h2>
                                                    <p className="text-slate-500 dark:text-slate-400">Validez les conditions et envoyez votre candidature</p>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                                                        <label className="flex items-start gap-3 cursor-pointer group">
                                                            <input
                                                                type="checkbox"
                                                                {...register("condition_prix", { required: "Vous devez accepter les conditions" })}
                                                                className="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-[#6e1615] focus:ring-[#6e1615]"
                                                            />
                                                            <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                                                <span className="font-semibold">J'accepte les tarifs affichés.</span> Je comprends que je devrai régler l'acompte (30%) sous 48h pour confirmer ma place.
                                                            </div>
                                                        </label>
                                                        {errors.condition_prix && (
                                                            <p className="text-red-500 text-xs mt-2 ml-8">{errors.condition_prix.message}</p>
                                                        )}
                                                    </div>

                                                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                                                        <label className="flex items-start gap-3 cursor-pointer group">
                                                            <input
                                                                type="checkbox"
                                                                {...register("condition_remboursement", { required: "Vous devez accepter cette condition" })}
                                                                className="mt-1 w-5 h-5 rounded border-2 border-amber-300 text-[#6e1615] focus:ring-[#6e1615]"
                                                            />
                                                            <div className="text-sm text-amber-900 dark:text-amber-200 group-hover:text-amber-950 dark:group-hover:text-white transition-colors">
                                                                <span className="font-semibold">Politique d'annulation.</span> J'ai lu et j'accepte que les frais ne sont pas remboursables après le début de la formation (3 jours de rétractation).
                                                            </div>
                                                        </label>
                                                        {errors.condition_remboursement && (
                                                            <p className="text-red-500 text-xs mt-2 ml-8">{errors.condition_remboursement.message}</p>
                                                        )}
                                                    </div>

                                                    <div className="space-y-2 pt-4">
                                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message optionnel</label>
                                                        <textarea
                                                            {...register("attentes")}
                                                            rows={3}
                                                            placeholder="Décrivez brièvement vos objectifs ou posez vos questions..."
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-4 focus:ring-[#6e1615]/10 outline-none resize-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Boutons Navigation */}
                                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100 dark:border-slate-700">
                                        {currentStep > 1 ? (
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(currentStep - 1)}
                                                className="px-6 py-3 text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
                                            >
                                                ← Retour
                                            </button>
                                        ) : (
                                            <div />
                                        )}

                                        {currentStep < 3 ? (
                                            <button
                                                type="button"
                                                onClick={validateStep}
                                                className="px-8 py-3 bg-[#6e1615] text-white font-bold rounded-xl hover:bg-[#8b1c1b] transition-all flex items-center gap-2 shadow-lg shadow-[#6e1615]/20"
                                            >
                                                Continuer
                                                <ChevronRight size={18} />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="px-8 py-3 bg-[#6e1615] text-white font-bold rounded-xl hover:bg-[#8b1c1b] transition-all flex items-center gap-2 shadow-lg shadow-[#6e1615]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Envoi...
                                                    </>
                                                ) : (
                                                    <>
                                                        Confirmer l'inscription
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Astuce */}
                        <div className="mt-6 flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                            <div className="p-1 bg-blue-100 dark:bg-blue-800 rounded text-blue-600 dark:text-blue-300">
                                <Shield size={16} />
                            </div>
                            <div>
                                <span className="font-bold text-blue-900 dark:text-blue-200">Sauvegarde automatique</span>
                                <p className="mt-1">Vos informations sont sauvegardées localement. Vous pouvez revenir plus tard si nécessaire.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal de Succès */}
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
                            className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} className="text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                                Candidature envoyée !
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                WhatsApp s'ouvre pour finaliser votre inscription avec notre équipe.
                                <br /><br />
                                <span className="text-sm bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">Réponse sous 2h</span>
                            </p>
                            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-medium">
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
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6e1615]"></div>
            </div>
        }>
            <InscriptionContent />
        </Suspense>
    );
}
