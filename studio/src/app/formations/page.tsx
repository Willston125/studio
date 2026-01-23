'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Monitor, Palette, Video, TrendingUp, Check, Users, Award, BookOpen, ArrowRight, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const FORMATIONS = [
    {
        id: 1,
        icon: Monitor,
        module: "Module 1",
        titre: "Création de site internet avec l'IA",
        duree: "5 Jours",
        tarif: "15.000 FDJ",
        niveau: "Débutant",
        livrable: "1 site web en ligne",
        outils: ["ChatGPT", "Wix/Framer", "Canva"],
        pratique: 70,
        placesRestantes: 6,
        programme: [
            "L'art du prompting & structure",
            "Design UI/UX par IA",
            "Génération de contenu",
            "Intégration No-Code",
            "Mise en ligne & SEO"
        ]
    },
    {
        id: 2,
        icon: Palette,
        module: "Module 2",
        titre: "Design graphique professionnel",
        duree: "12 Jours",
        tarif: "10.000 FDJ",
        niveau: "Débutant",
        livrable: "Portfolio de 10+ créations",
        outils: ["Canva", "Photoshop", "Figma"],
        pratique: 85,
        placesRestantes: 3,
        programme: [
            "Canva Expert",
            "Photoshop CC avancé",
            "Figma & UI Design"
        ]
    },
    {
        id: 3,
        icon: Video,
        module: "Module 3",
        titre: "Réalisation & montage vidéo",
        duree: "15 Jours",
        tarif: "13.000 FDJ",
        niveau: "Débutant à Intermédiaire",
        livrable: "1 court-métrage complet",
        outils: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        pratique: 80,
        placesRestantes: 2,
        isPopular: true,
        programme: [
            "Pré-production — Script, Storyboard",
            "Tournage — Cadrage, Son, Éclairage",
            "Post-Production — Montage, Colorimétrie",
            "Export multi-plateformes"
        ]
    },
    {
        id: 4,
        icon: TrendingUp,
        module: "Module 4",
        titre: "Marketing digital & gestion de projet",
        duree: "8 Jours",
        tarif: "7.000 FDJ",
        niveau: "Débutant",
        livrable: "1 stratégie marketing complète",
        outils: ["Meta Business", "Google Ads", "Notion"],
        pratique: 60,
        placesRestantes: 8,
        programme: [
            "Gestion de Projet",
            "Stratégie Marketing",
            "Publicité Facebook/Instagram"
        ]
    }
];

export default function FormationsPage() {
    const [activeModule, setActiveModule] = useState(0);

    return (
        <main className="bg-[#FAFAFA] min-h-screen">

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO - Design Académique Motivant */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[90vh] overflow-hidden">
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

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
                    <div className="max-w-2xl text-white">
                        {/* Urgency Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#C5A572] text-[#1a1a2e] rounded-full px-4 py-2 mb-8 font-semibold text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            🎬 Inscriptions ouvertes — Places limitées
                        </div>

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

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/inscription"
                                className="inline-flex items-center gap-2 bg-[#C5A572] text-[#1a1a2e] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d4b882] transition-all hover:scale-105 shadow-lg"
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
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
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

                    {/* Formation Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {FORMATIONS.map((formation) => {
                            const IconComponent = formation.icon;
                            return (
                                <div
                                    key={formation.id}
                                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all"
                                >
                                    {/* Header */}
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-[#8B2635]/10 rounded-xl flex items-center justify-center">
                                                    <IconComponent size={24} className="text-[#8B2635]" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-500 font-medium">{formation.module}</div>
                                                    <h3 className="text-lg font-bold text-gray-900">{formation.titre}</h3>
                                                </div>
                                            </div>
                                            {formation.placesRestantes <= 3 && (
                                                <span className={`text-xs font-semibold px-2 py-1 rounded ${formation.placesRestantes <= 2
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {formation.placesRestantes} places
                                                </span>
                                            )}
                                        </div>

                                        {/* Quick Info */}
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                <span>{formation.duree}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="font-semibold text-[#8B2635]">{formation.tarif}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Niveau:</span> {formation.niveau}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Programme */}
                                        <div className="mb-4">
                                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Programme</div>
                                            <ul className="space-y-1">
                                                {formation.programme.slice(0, 3).map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tools */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {formation.outils.map((outil, i) => (
                                                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                    {outil}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Livrable */}
                                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg mb-4">
                                            <Award className="text-green-600" size={18} />
                                            <span className="text-sm font-medium text-gray-900">Livrable: {formation.livrable}</span>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href={`/inscription?module=${formation.id}`}
                                            className="block w-full text-center py-3 px-4 rounded-lg font-semibold bg-[#8B2635] text-white hover:bg-[#6e1615] transition-colors"
                                        >
                                            S'inscrire à ce module
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
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
                                    Réserver ma place
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
                                src="/certificate-sample.jpg.png"
                                alt="Certificat Cineworld Académie"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
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
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/student-projects-grid.jpg"
                            alt="Projets étudiants Cineworld"
                            width={1200}
                            height={600}
                            className="w-full object-cover"
                        />
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
                            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
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

        </main>
    );
}
