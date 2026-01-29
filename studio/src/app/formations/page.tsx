'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Monitor, Palette, Video, TrendingUp, Check, Users, Award, BookOpen, ArrowRight, GraduationCap, MapPin, Phone, Mail, Calendar, ChevronDown, ChevronUp, X, ZoomIn, ArrowUp, Eye, Sparkles } from 'lucide-react';
import FormationQuiz from '@/components/FormationQuiz';

const FORMATIONS = [
    {
        id: 1,
        icon: Monitor,
        module: "Module 1",
        titre: "Création de site internet avec l'IA",
        description: "Apprenez à concevoir et déployer un site web professionnel en utilisant les dernières technologies d'intelligence artificielle. Une approche révolutionnaire du développement web accessible à tous.",
        duree: "5 Jours",
        tarif: "15.000 FDJ",
        niveau: "Débutant",
        livrable: "1 site web en ligne",
        outils: ["Gemini", "Canva", "Vercel"],
        pratique: 70,
        placesRestantes: 6,
        dateDebut: "15 Février 2026",
        horaires: "9h - 17h",
        lieu: "Aviation, institut DHIM, Djibouti",
        publicCible: ["Entrepreneurs", "Créateurs de contenu", "Freelances"],
        prerequis: ["Aucun prérequis technique", "Ordinateur portable recommandé"],
        objectifsPedagogiques: [
            "Maîtriser l'art du prompting avec les IA génératives",
            "Concevoir une interface UI/UX moderne",
            "Déployer un site web fonctionnel en ligne"
        ],
        competencesAcquises: [
            { nom: "Prompting IA", niveau: 85 },
            { nom: "UI/UX Design", niveau: 70 },
            { nom: "Déploiement Web", niveau: 75 }
        ],
        syllabus: [
            { jour: 1, titre: "Introduction à l'IA Générative", heures: 6, contenu: ["Prise en main de Gemini", "L'art du prompting", "Génération de contenu"] },
            { jour: 2, titre: "Design UI/UX par IA", heures: 6, contenu: ["Création de maquettes", "Palette de couleurs", "Typographie"] },
            { jour: 3, titre: "Génération de Code", heures: 6, contenu: ["HTML/CSS assisté", "Composants interactifs", "Responsive design"] },
            { jour: 4, titre: "Intégration No-Code", heures: 6, contenu: ["Plateformes no-code", "CMS et formulaires", "Optimisation"] },
            { jour: 5, titre: "Mise en Ligne", heures: 6, contenu: ["Déploiement Vercel", "Domaine personnalisé", "SEO basique"] }
        ],
        programme: [
            "L'art du prompting & structure",
            "Design UI/UX par IA",
            "Génération de contenu",
            "Intégration No-Code",
            "Mise en ligne & SEO"
        ],
        certification: "Certificat Développeur Web IA"
    },
    {
        id: 2,
        icon: Palette,
        module: "Module 2",
        titre: "Design graphique professionnel",
        description: "Développez votre créativité et maîtrisez les outils de design graphique utilisés par les professionnels. Créez des visuels impactants pour tous types de supports.",
        duree: "12 Jours",
        tarif: "10.000 FDJ",
        niveau: "Débutant",
        livrable: "Portfolio de 10+ créations",
        outils: ["Canva", "Photoshop", "Figma"],
        pratique: 85,
        placesRestantes: 3,
        dateDebut: "1er Mars 2026",
        horaires: "9h - 17h",
        lieu: "Aviation, institut DHIM, Djibouti",
        publicCible: ["Graphistes en devenir", "Community managers", "Entrepreneurs"],
        prerequis: ["Sensibilité visuelle", "Motivation créative"],
        objectifsPedagogiques: [
            "Maîtriser les principes fondamentaux du design",
            "Créer des visuels professionnels pour le digital",
            "Développer une identité visuelle cohérente"
        ],
        competencesAcquises: [
            { nom: "Canva Expert", niveau: 90 },
            { nom: "Photoshop", niveau: 75 },
            { nom: "Figma", niveau: 70 }
        ],
        syllabus: [
            { jour: 1, titre: "Fondamentaux du Design", heures: 6, contenu: ["Théorie des couleurs", "Typographie", "Composition"] },
            { jour: 2, titre: "Canva - Niveau Débutant", heures: 6, contenu: ["Interface", "Templates", "Éléments"] },
            { jour: 3, titre: "Canva - Niveau Avancé", heures: 6, contenu: ["Brand Kit", "Animations", "Présentations"] },
            { jour: 4, titre: "Photoshop - Bases", heures: 6, contenu: ["Interface", "Calques", "Outils de sélection"] },
            { jour: 5, titre: "Photoshop - Retouche", heures: 6, contenu: ["Retouche photo", "Filtres", "Masques"] }
        ],
        programme: [
            "Canva Expert",
            "Photoshop CC avancé",
            "Figma & UI Design"
        ],
        certification: "Certificat Designer Graphique"
    },
    {
        id: 3,
        icon: Video,
        module: "Module 3",
        titre: "Réalisation & montage vidéo",
        description: "De l'écriture du scénario à l'export final, maîtrisez toute la chaîne de production audiovisuelle. Créez des contenus vidéo professionnels qui captent l'attention.",
        duree: "15 Jours",
        tarif: "13.000 FDJ",
        niveau: "Débutant à Intermédiaire",
        livrable: "1 court-métrage complet",
        outils: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        pratique: 80,
        placesRestantes: 2,
        isPopular: true,
        dateDebut: "10 Mars 2026",
        horaires: "9h - 18h",
        lieu: "Aviation, institut DHIM, Djibouti",
        publicCible: ["Futurs vidéastes", "YouTubers", "Créateurs de contenu"],
        prerequis: ["Passion pour l'image", "Ordinateur portable puissant recommandé"],
        objectifsPedagogiques: [
            "Maîtriser le cadrage et la prise de vue",
            "Monter des vidéos dynamiques et rythmées",
            "Appliquer une colorimétrie professionnelle"
        ],
        competencesAcquises: [
            { nom: "Prise de vue", niveau: 80 },
            { nom: "Montage", niveau: 85 },
            { nom: "Colorimétrie", niveau: 70 },
            { nom: "Sound Design", niveau: 60 }
        ],
        syllabus: [
            { jour: 1, titre: "Pré-production", heures: 7, contenu: ["Écriture scénario", "Storyboard", "Découpage technique"] },
            { jour: 2, titre: "Techniques de Tournage", heures: 7, contenu: ["Cadrage", "Mouvements caméra", "Éclairage"] },
            { jour: 3, titre: "Prise de Son", heures: 7, contenu: ["Micro-cravate", "Perche", "Ambiance sonore"] },
            { jour: 4, titre: "Premiere Pro - Bases", heures: 7, contenu: ["Interface", "Import", "Timeline"] },
            { jour: 5, titre: "Montage Avancé", heures: 7, contenu: ["Transitions", "Effets", "Rythme"] }
        ],
        programme: [
            "Pré-production — Script, Storyboard",
            "Tournage — Cadrage, Son, Éclairage",
            "Post-Production — Montage, Colorimétrie",
            "Export multi-plateformes"
        ],
        certification: "Certificat Réalisateur Vidéo"
    },
    {
        id: 4,
        icon: TrendingUp,
        module: "Module 4",
        titre: "Marketing digital & gestion de projet",
        description: "Apprenez à promouvoir efficacement vos services et gérer vos projets comme un professionnel. Maîtrisez les stratégies qui font la différence sur les réseaux sociaux.",
        duree: "8 Jours",
        tarif: "7.000 FDJ",
        niveau: "Débutant",
        livrable: "1 stratégie marketing complète",
        outils: ["Meta Business", "Google Ads", "Notion", "Canva"],
        pratique: 60,
        placesRestantes: 8,
        dateDebut: "20 Mars 2026",
        horaires: "14h - 19h",
        lieu: "Aviation, institut DHIM, Djibouti",
        publicCible: ["Entrepreneurs", "Community managers", "Freelances"],
        prerequis: ["Compte professionnel sur les réseaux", "Notions basiques du digital"],
        objectifsPedagogiques: [
            "Élaborer une stratégie marketing cohérente",
            "Créer et gérer des campagnes publicitaires",
            "Organiser et piloter des projets efficacement"
        ],
        competencesAcquises: [
            { nom: "Stratégie Marketing", niveau: 80 },
            { nom: "Meta Ads", niveau: 75 },
            { nom: "Gestion de Projet", niveau: 70 }
        ],
        syllabus: [
            { jour: 1, titre: "Fondamentaux du Marketing", heures: 5, contenu: ["Persona client", "Positionnement", "Proposition de valeur"] },
            { jour: 2, titre: "Stratégie Réseaux Sociaux", heures: 5, contenu: ["Calendrier éditorial", "Types de contenu", "Engagement"] },
            { jour: 3, titre: "Meta Business Suite", heures: 5, contenu: ["Création de pages", "Insights", "Planification"] },
            { jour: 4, titre: "Publicité Facebook/Instagram", heures: 5, contenu: ["Objectifs campagnes", "Audiences", "Créatifs"] }
        ],
        programme: [
            "Gestion de Projet",
            "Stratégie Marketing",
            "Publicité Facebook/Instagram"
        ],
        certification: "Certificat Marketing Digital"
    }
];

// Animated Section Component for scroll-triggered animations
const AnimatedSection = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Type for Formation
type Formation = typeof FORMATIONS[0];

// Composant Barre de Compétence
const SkillBar = ({ nom, niveau }: { nom: string; niveau: number }) => (
    <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700 font-medium">{nom}</span>
            <span className="text-gray-500">{niveau}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${niveau}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#8B2635] to-[#C5A572] rounded-full"
            />
        </div>
    </div>
);

// Composant Carte de Formation Professionnelle avec Onglets
const FormationCard = ({ formation, index }: { formation: Formation; index: number }) => {
    const [activeTab, setActiveTab] = useState<'apercu' | 'programme' | 'competences' | 'infos'>('apercu');
    const IconComponent = formation.icon;

    const tabs = [
        { id: 'apercu', label: 'Aperçu', icon: BookOpen },
        { id: 'programme', label: 'Programme', icon: Calendar },
        { id: 'competences', label: 'Compétences', icon: Award },
        { id: 'infos', label: 'Infos', icon: MapPin },
    ];

    return (
        <AnimatedSection delay={index * 0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Header avec gradient */}
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                    {/* Badge Populaire */}
                    {formation.isPopular && (
                        <div className="absolute top-4 right-4">
                            <span className="bg-gradient-to-r from-[#8B2635] to-[#6e1615] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                🔥 POPULAIRE
                            </span>
                        </div>
                    )}

                    {/* Places restantes */}
                    {formation.placesRestantes <= 5 && (
                        <div className="absolute top-4 right-4">
                            <span className={`text-xs px-3 py-1.5 rounded-full font-bold ${formation.placesRestantes <= 2
                                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse'
                                : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                                }`}>
                                ⚡ {formation.placesRestantes} places
                            </span>
                        </div>
                    )}

                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#6e1615] rounded-xl flex items-center justify-center shadow-lg">
                            <IconComponent size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-semibold text-[#8B2635] uppercase tracking-wider mb-1">
                                {formation.module}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                {formation.titre}
                            </h3>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                        <div className="flex items-center gap-1.5 text-gray-600">
                            <Clock size={14} className="text-[#8B2635]" />
                            <span className="font-medium">{formation.duree}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#8B2635] text-lg">{formation.tarif}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                            <GraduationCap size={14} className="text-[#8B2635]" />
                            <span>{formation.niveau}</span>
                        </div>
                    </div>

                    {/* Barre de pratique */}
                    <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Pratique</span>
                            <span className="font-bold text-[#8B2635]">{formation.pratique}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#8B2635] to-[#C5A572] rounded-full transition-all duration-500"
                                style={{ width: `${formation.pratique}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Onglets Navigation */}
                <div className="flex border-b border-gray-100">
                    {tabs.map((tab) => {
                        const TabIcon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex-1 py-3 px-2 text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${activeTab === tab.id
                                    ? 'text-[#8B2635] border-b-2 border-[#8B2635] bg-red-50/50'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <TabIcon size={14} />
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Contenu des Onglets */}
                <div className="p-6 flex-1">
                    {/* Onglet Aperçu */}
                    {activeTab === 'apercu' && (
                        <div className="space-y-4">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {formation.description}
                            </p>

                            {/* Public Cible */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Pour qui ?</h4>
                                <div className="flex flex-wrap gap-2">
                                    {formation.publicCible.map((cible, i) => (
                                        <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                            {cible}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Prérequis */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prérequis</h4>
                                <ul className="space-y-1">
                                    {formation.prerequis.map((prereq, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check size={12} className="text-green-500" />
                                            {prereq}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Livrable */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-lg p-3">
                                <div className="flex items-center gap-2">
                                    <Award className="text-green-600" size={18} />
                                    <span className="text-sm font-semibold text-gray-900">
                                        Livrable : {formation.livrable}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Onglet Programme */}
                    {activeTab === 'programme' && (
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Syllabus Détaillé</h4>
                            {formation.syllabus.slice(0, 5).map((jour, i) => (
                                <div key={i} className="border border-gray-100 rounded-lg p-3 hover:border-[#8B2635]/30 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-[#8B2635] bg-red-50 px-2 py-0.5 rounded">
                                            JOUR {jour.jour}
                                        </span>
                                        <span className="text-xs text-gray-500">{jour.heures}h</span>
                                    </div>
                                    <h5 className="font-semibold text-gray-900 text-sm mb-1">{jour.titre}</h5>
                                    <div className="flex flex-wrap gap-1">
                                        {jour.contenu.map((item, j) => (
                                            <span key={j} className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Onglet Compétences */}
                    {activeTab === 'competences' && (
                        <div className="space-y-4">
                            {/* Objectifs Pédagogiques */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Objectifs Pédagogiques</h4>
                                <ul className="space-y-2">
                                    {formation.objectifsPedagogiques.map((obj, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="w-5 h-5 bg-[#8B2635] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                {i + 1}
                                            </div>
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Barres de Compétences */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Compétences Acquises</h4>
                                {formation.competencesAcquises.map((comp, i) => (
                                    <SkillBar key={i} nom={comp.nom} niveau={comp.niveau} />
                                ))}
                            </div>

                            {/* Outils */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Outils Maîtrisés</h4>
                                <div className="flex flex-wrap gap-2">
                                    {formation.outils.map((outil, i) => (
                                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                                            {outil}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Onglet Infos Pratiques */}
                    {activeTab === 'infos' && (
                        <div className="space-y-4">
                            {/* Détails Session */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Calendar size={18} className="text-[#8B2635]" />
                                    <div>
                                        <div className="text-xs text-gray-500">Prochaine session</div>
                                        <div className="font-semibold text-gray-900">{formation.dateDebut}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Clock size={18} className="text-[#8B2635]" />
                                    <div>
                                        <div className="text-xs text-gray-500">Horaires</div>
                                        <div className="font-semibold text-gray-900">{formation.horaires}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <MapPin size={18} className="text-[#8B2635]" />
                                    <div>
                                        <div className="text-xs text-gray-500">Lieu</div>
                                        <div className="font-semibold text-gray-900">{formation.lieu}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Certification */}
                            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                                        <GraduationCap size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-amber-700 font-medium uppercase">Certification</div>
                                        <div className="font-bold text-gray-900">{formation.certification}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Footer */}
                <div className="p-6 pt-0 mt-auto">
                    <Link
                        href={`/inscription?module=${formation.id}`}
                        className="block w-full text-center py-4 px-6 rounded-xl font-bold bg-gradient-to-r from-[#8B2635] to-[#6e1615] text-white hover:from-[#6e1615] hover:to-[#8B2635] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        S'inscrire à {formation.tarif}
                        <ArrowRight className="inline-block ml-2" size={18} />
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default function FormationsPage() {
    const [activeModule, setActiveModule] = useState(0);
    const [showStickyCTA, setShowStickyCTA] = useState(false);
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
    const [showLightbox, setShowLightbox] = useState(false);
    const [activeMobileTab, setActiveMobileTab] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    // Removed fake visitor counter - replaced with authentic social proof
    const [scrollProgress, setScrollProgress] = useState(0); // Scroll progress percentage



    // Scroll listener for sticky CTA, scroll-to-top button, and progress bar
    useEffect(() => {
        const handleScroll = () => {
            // Show sticky CTA after scrolling 800px
            setShowStickyCTA(window.scrollY > 800);
            // Show scroll-to-top after scrolling 400px
            setShowScrollTop(window.scrollY > 400);

            // Calculate scroll progress percentage
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
            setScrollProgress(Math.min(scrollPercentage, 100));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    // Conversion Tracking Helpers
    const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
        // Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', eventName, eventData);
        }

        // Facebook Pixel
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', eventName, eventData);
        }

        console.log('📊 Tracking:', eventName, eventData);
    };

    const handleCTAClick = (source: string, moduleId?: number) => {
        trackEvent('inscription_click', {
            source,
            module_id: moduleId,
            page: 'formations',
            timestamp: new Date().toISOString()
        });
    };

    // Schema.org Structured Data for SEO
    const generateCourseSchema = (formation: typeof FORMATIONS[0]) => ({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": formation.titre,
        "description": formation.programme.join(", "),
        "provider": {
            "@type": "Organization",
            "name": "Cineworld Académie",
            "sameAs": "https://cineworld-djibouti.vercel.app"
        },
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "price": formation.tarif.replace(/[^\d]/g, ''),
            "priceCurrency": "DJF",
            "availability": formation.placesRestantes > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        },
        "educationalLevel": formation.niveau,
        "coursePrerequisites": "Aucun prérequis",
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Onsite",
            "startDate": formation.dateDebut,
            "courseSchedule": {
                "@type": "Schedule",
                "repeatFrequency": "Daily",
                "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
            },
            "location": {
                "@type": "Place",
                "name": formation.lieu,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Djibouti",
                    "addressCountry": "DJ"
                }
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    });

    return (
        <main className="bg-[#FAFAFA] min-h-screen">
            {/* Scroll Progress Bar */}
            <div
                className="scroll-progress"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            {/* Schema.org Structured Data */}
            {FORMATIONS.map((formation) => (
                <script
                    key={`schema-${formation.id}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCourseSchema(formation)) }}
                />
            ))}

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO - Design Académique Motivant */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/hero-classroom.jpg"
                        alt="Salle de classe Cineworld Académie"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/80 to-transparent" />
                </div>

                {/* Bande défilante en haut */}
                <div className="absolute top-0 left-0 w-full bg-[#C5A572] overflow-hidden py-2 z-20">
                    <div className="animate-marquee whitespace-nowrap">
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ INSCRIPTIONS OUVERTES</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ #C'EST QUE DU BON</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ VIDÉO</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ PRODUCTION</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ MONTAGE</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ DESIGN GRAPHIQUE</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ MARKETING DIGITAL</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ INSCRIPTIONS OUVERTES</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ #C'EST QUE DU BON</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ VIDÉO</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ PRODUCTION</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ MONTAGE</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ DESIGN GRAPHIQUE</span>
                        <span className="mx-8 text-sm font-bold text-[#1a1a2e]">✦ MARKETING DIGITAL</span>
                    </div>
                </div>

                {/* Authentic Social Proof Badge */}
                <div className="absolute top-24 right-6 z-20 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm text-gray-700">
                        <strong className="text-[#8B2635]">+150</strong> étudiants formés depuis 2014
                    </span>
                </div>


                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
                    <div className="max-w-2xl text-white">
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Transformez votre passion en
                            <span className="text-[#C5A572]"> carrière créative</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                            Rejoignez <strong className="text-white">la première académie audiovisuelle de Djibouti</strong>.
                            En moins d'un mois, maîtrisez la vidéo, le design et le marketing digital
                            avec 80% de pratique sur projets réels.
                        </p>

                        {/* Social Proof */}
                        <div className="flex flex-wrap gap-6 mb-10 text-white/90">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-[#C5A572] flex items-center justify-center text-xs font-bold text-[#1a1a2e]">H</div>
                                    <div className="w-8 h-8 rounded-full bg-[#8B2635] flex items-center justify-center text-xs font-bold">A</div>
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">M</div>
                                </div>
                                <span className="text-sm">+150 étudiants formés</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#C5A572]">★★★★★</span>
                                <span className="text-sm">4.9/5 satisfaction</span>
                            </div>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#C5A572]">4</div>
                                <div className="text-sm text-white/70">Modules experts</div>
                            </div>
                            <div className="text-center border-x border-white/20">
                                <div className="text-3xl font-bold text-[#C5A572]">80%</div>
                                <div className="text-sm text-white/70">Pratique</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#C5A572]">10</div>
                                <div className="text-sm text-white/70">Max par groupe</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/inscription"
                                onClick={() => handleCTAClick('hero_primary')}
                                className="inline-flex items-center gap-2 bg-[#C5A572] text-[#1a1a2e] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d4b882] transition-all hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#C5A572]/50"
                            >
                                🎓 Commencer ma formation
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="#formations"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-colors"
                            >
                                Voir les programmes
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:flex">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs">Découvrir</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* POURQUOI NOUS CHOISIR */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi choisir Cineworld Académie ?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Une formation pensée pour vous propulser vers le succès
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: "Apprentissage par la pratique",
                                desc: "80% de travaux pratiques. Vous créez de vrais projets dès le premier jour.",
                                highlight: "80%"
                            },
                            {
                                icon: Users,
                                title: "Groupes réduits",
                                desc: "Maximum 10 étudiants par session pour un suivi personnalisé et efficace.",
                                highlight: "10 max"
                            },
                            {
                                icon: Award,
                                title: "Certificat reconnu",
                                desc: "Un diplôme qui ouvre les portes des entreprises à Djibouti et dans la région.",
                                highlight: "Certifié"
                            },
                            {
                                icon: GraduationCap,
                                title: "Mentorat continu",
                                desc: "Accompagnement même après la formation. Votre succès est notre priorité.",
                                highlight: "Suivi"
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#8B2635] rounded-xl flex items-center justify-center">
                                        <item.icon size={24} className="text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-[#C5A572] bg-[#C5A572]/10 px-2 py-1 rounded">{item.highlight}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* CATALOGUE DES FORMATIONS */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="formations" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nos Formations
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choisissez le module adapté à vos objectifs ou optez pour le Pack Complet
                            pour maîtriser l'ensemble des compétences audiovisuelles.
                        </p>
                    </div>

                    {/* Mobile Tabs - One formation at a time */}
                    <div className="md:hidden mb-8">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {FORMATIONS.map((formation, idx) => (
                                <button
                                    key={formation.id}
                                    onClick={() => setActiveMobileTab(idx)}
                                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeMobileTab === idx
                                        ? 'bg-[#8B2635] text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {formation.module}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Formation Cards - Grid on desktop, single on mobile */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
                        {FORMATIONS.map((formation, index) => (
                            <FormationCard key={formation.id} formation={formation} index={index} />
                        ))}
                    </div>

                    {/* Mobile - Single Card View */}
                    <div className="md:hidden mb-12">
                        <FormationCard
                            formation={FORMATIONS[activeMobileTab]}
                            index={0}
                        />
                    </div>

                    {/* Pack Complet */}
                    <div className="bg-[#8B2635] rounded-2xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-block bg-[#C5A572] text-[#8B2635] px-3 py-1 rounded-lg text-sm font-semibold mb-4">
                                    Meilleure offre
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Pack Complet "Creator 360°"</h3>
                                <p className="text-white/80 mb-6">
                                    Maîtrisez toutes les compétences en un mois intensif.
                                    Inclut les 4 modules + accompagnement prioritaire.
                                </p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-4xl font-bold text-[#C5A572]">45.000 FDJ</span>
                                    <span className="text-white/60 line-through">55.000 FDJ</span>
                                </div>
                                <Link
                                    href="/inscription?module=5"
                                    className="inline-flex items-center gap-2 bg-[#C5A572] text-[#8B2635] px-8 py-4 rounded-lg font-bold hover:bg-[#d4b882] transition-colors"
                                >
                                    Économiser 10.000 FDJ
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {FORMATIONS.map((f) => (
                                    <div key={f.id} className="bg-white/10 rounded-xl p-4">
                                        <f.icon size={24} className="text-[#C5A572] mb-2" />
                                        <div className="text-sm font-medium">{f.module}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* QUIZ D'ORIENTATION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="quiz" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-4 py-2 rounded-full mb-4">
                            <Sparkles className="w-5 h-5 text-red-400" />
                            <span className="text-red-400 font-semibold text-sm">Besoin d'aide pour choisir ?</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Quelle formation est faite pour vous ?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Répondez à 5 questions rapides et découvrez le parcours qui correspond
                            le mieux à vos aspirations professionnelles.
                        </p>
                    </div>
                    <FormationQuiz />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* TÉMOIGNAGES */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-[#1a1a2e]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ils ont transformé leur vie
                        </h2>
                        <p className="text-white/70">
                            Découvrez les témoignages de nos anciens étudiants
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Ahmed M.",
                                role: "Vidéaste Freelance",
                                quote: "Grâce à Cineworld, j'ai décroché mes premiers clients en freelance. La formation pratique m'a donné la confiance dont j'avais besoin.",
                                avatar: "A"
                            },
                            {
                                name: "Houda S.",
                                role: "Community Manager",
                                quote: "Je suis passée de stagiaire à responsable marketing en 6 mois. Les compétences acquises ici sont ultra demandées à Djibouti.",
                                avatar: "H"
                            },
                            {
                                name: "Mohamed K.",
                                role: "Entrepreneur",
                                quote: "J'ai créé mon agence de production vidéo après la formation. Meilleur investissement de ma vie professionnelle.",
                                avatar: "M"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-1 text-[#C5A572] mb-4">
                                    {"★★★★★".split("").map((star, idx) => (
                                        <span key={idx}>{star}</span>
                                    ))}
                                </div>
                                <p className="text-white/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#C5A572] rounded-full flex items-center justify-center font-bold text-[#1a1a2e]">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-white/60">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION MENTOR */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/mentor-portrait-pro.jpg"
                                    alt="Formateur Cineworld Académie"
                                    width={500}
                                    height={600}
                                    className="object-cover w-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Apprenez avec un professionnel expérimenté
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Notre équipe pédagogique combine expertise technique et expérience terrain.
                                Formé aux techniques modernes de production audiovisuelle, votre formateur
                                vous accompagne de la théorie à la pratique.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-10 h-10 bg-[#8B2635]/10 rounded-lg flex items-center justify-center">
                                        <Video className="text-[#8B2635]" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">+50 projets majeurs</div>
                                        <div className="text-sm text-gray-500">Documentaires, publicités, courts-métrages</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-10 h-10 bg-[#8B2635]/10 rounded-lg flex items-center justify-center">
                                        <GraduationCap className="text-[#8B2635]" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Pédagogie active</div>
                                        <div className="text-sm text-gray-500">80% pratique, feedback personnalisé</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION CERTIFICAT */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Certificat de formation professionnelle
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                À l'issue de votre formation, vous recevez un certificat officiel
                                Cineworld Académie attestant de vos compétences. Ce document est
                                reconnu par les professionnels du secteur à Djibouti et dans la région.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Check size={18} className="text-green-500" />
                                    <span>Certificat nominatif officiel</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Check size={18} className="text-green-500" />
                                    <span>Détail des compétences acquises</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Check size={18} className="text-green-500" />
                                    <span>Reconnu par les entreprises locales</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <Image
                                src="/certificate-sample.jpg"
                                alt="Certificat Cineworld Académie"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* PROJETS ÉTUDIANTS */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Réalisations de nos étudiants
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez quelques exemples de projets réalisés par nos étudiants
                            pendant leur formation.
                        </p>
                    </div>
                    <div
                        className="relative rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => setShowLightbox(true)}
                    >
                        <Image
                            src="/student-projects-grid.jpg"
                            alt="Projets étudiants Cineworld"
                            width={1200}
                            height={600}
                            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Overlay with zoom icon */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-4">
                                <ZoomIn size={32} className="text-[#8B2635]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* FAQ */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Dois-je avoir du matériel pour suivre la formation ?",
                                a: "Non, tous les logiciels et équipements professionnels sont fournis sur place. Vous venez juste avec votre motivation."
                            },
                            {
                                q: "Quelle est la durée quotidienne des sessions ?",
                                a: "Sessions de 1h30, flexibles selon votre emploi du temps. Vous pouvez venir le matin ou l'après-midi."
                            },
                            {
                                q: "Y a-t-il un certificat à la fin de la formation ?",
                                a: "Oui, vous recevez un certificat officiel Cineworld Académie reconnu par les professionnels du secteur."
                            },
                            {
                                q: "Comment puis-je payer ma formation ?",
                                a: "Paiement en espèces, virement, ou en 2 fois pour le Pack Complet. Contactez-nous pour plus de détails."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQIndex(openFAQIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                                    {openFAQIndex === i ? (
                                        <ChevronUp className="text-[#8B2635] flex-shrink-0" size={20} />
                                    ) : (
                                        <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                                    )}
                                </button>
                                {openFAQIndex === i && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* CTA FINAL */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-[#8B2635]">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Prêt à développer vos compétences ?
                    </h2>
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Rejoignez la première académie audiovisuelle de Djibouti
                        et lancez votre carrière créative.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/inscription"
                            className="inline-flex items-center gap-2 bg-[#C5A572] text-[#8B2635] px-8 py-4 rounded-lg font-bold hover:bg-[#d4b882] transition-colors"
                        >
                            <GraduationCap size={20} />
                            S'inscrire maintenant
                        </Link>
                        <a
                            href="https://wa.me/25377145306"
                            className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-colors"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* FOOTER */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Formations */}
                        <div>
                            <h3 className="font-semibold mb-6 text-[#C5A572]">Formations</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><Link href="/formations" className="hover:text-white transition-colors">Site Web avec l'IA</Link></li>
                                <li><Link href="/formations" className="hover:text-white transition-colors">Design Graphique</Link></li>
                                <li><Link href="/formations" className="hover:text-white transition-colors">Réalisation Vidéo</Link></li>
                                <li><Link href="/formations" className="hover:text-white transition-colors">Marketing Digital</Link></li>
                                <li><Link href="/formations" className="hover:text-white transition-colors">Pack Creator 360°</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold mb-6 text-[#C5A572]">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-0.5" />
                                    <span>Djibouti, Aviation<br />Institut "DIHM"</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={18} />
                                    <a href="mailto:cineworld@cineworldacademie.com" className="hover:text-white transition-colors">cineworld@cineworldacademie.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={18} />
                                    <a href="https://wa.me/25377145306" className="hover:text-white transition-colors">+253 77 14 53 06</a>
                                </li>
                            </ul>
                        </div>

                        {/* À propos */}
                        <div>
                            <h3 className="font-semibold mb-6 text-[#C5A572]">Cineworld Académie</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Première académie audiovisuelle de Djibouti.
                                Nous formons les créatifs de demain avec une pédagogie
                                pratique et un accompagnement personnalisé.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                        © 2026 Cineworld Académie — Tous droits réservés
                    </div>
                </div>
            </footer>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* STICKY CTA BAR MOBILE */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            {
                showStickyCTA && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-lg animate-slide-up">
                        <Link
                            href="/inscription"
                            onClick={() => handleCTAClick('sticky_mobile')}
                            className="block w-full text-center py-4 px-6 rounded-lg font-bold bg-[#8B2635] text-white hover:bg-[#6e1615] transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-[#8B2635]/50 touch-action-manipulation"
                        >
                            S'inscrire maintenant
                        </Link>
                    </div>
                )
            }

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* LIGHTBOX MODAL - Student Projects */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            {showLightbox && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setShowLightbox(false)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setShowLightbox(false)}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                        aria-label="Fermer"
                    >
                        <X size={24} className="text-white" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src="/student-projects-grid.jpg"
                            alt="Projets étudiants Cineworld - Vue détaillée"
                            width={1200}
                            height={600}
                            className="w-full rounded-lg"
                        />
                        <p className="text-white text-center mt-4 text-sm">
                            Cliquez en dehors de l'image pour fermer
                        </p>
                    </div>
                </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SCROLL TO TOP BUTTON */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-20 md:bottom-6 right-6 bg-[#8B2635] text-white p-4 rounded-full shadow-lg hover:bg-[#6e1615] transition-all hover:scale-110 z-40 animate-fade-in"
                    aria-label="Retour en haut"
                >
                    <ArrowUp size={24} />
                </button>
            )}

        </main>
    );
}
