'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Clock, Star, Sparkles, Monitor, Palette, Video, TrendingUp, Check, Users, Award, BookOpen, ArrowRight, Play, GraduationCap, Target, Zap } from 'lucide-react';

const FORMATIONS = [
    {
        id: 1,
        icon: Monitor,
        module: "MODULE 1",
        titre: "Création de site internet avec l'IA",
        titreCourt: "Site Web IA",
        slogan: "De l'idée au site en ligne sans coder",
        duree: "5 Jours",
        dureeJours: 5,
        sessions: "Sessions de 1h30",
        tarif: "15.000 FDJ",
        tarifNum: 15000,
        hoverImage: "/hover-web.png",
        niveau: "Débutant",
        prerequis: "Aucun",
        livrable: "1 site web en ligne",
        debouche: "Freelance Web, Entrepreneur",
        outils: ["ChatGPT", "Wix/Framer", "Canva"],
        pratique: 70,
        color: "#3B82F6", // Blue
        bgGradient: "from-blue-500 to-cyan-400",
        programme: [
            "Jour 1 : L'art du prompting & structure",
            "Jour 2 : Design UI/UX par IA",
            "Jour 3 : Génération de contenu (copywriting + images)",
            "Jour 4 : Assemblage & Intégration No-Code",
            "Jour 5 : Mise en ligne & Optimisation SEO"
        ]
    },
    {
        id: 2,
        icon: Palette,
        module: "MODULE 2",
        titre: "Design graphique pro",
        titreCourt: "Design Graphique",
        slogan: "Maîtrisez la suite visuelle moderne",
        duree: "12 Jours",
        dureeJours: 12,
        sessions: "Sessions de 1h30",
        tarif: "10.000 FDJ",
        tarifNum: 10000,
        hoverImage: "/hover-design.png",
        niveau: "Débutant",
        prerequis: "Aucun",
        livrable: "Portfolio de 10+ créations",
        debouche: "Graphiste, DA Junior",
        outils: ["Canva", "Photoshop", "Figma"],
        pratique: 85,
        color: "#8B5CF6", // Purple
        bgGradient: "from-purple-500 to-pink-400",
        programme: [
            "Jours 1-3 : Canva Expert",
            "Jours 4-8 : Photoshop CC (détourage, retouche, affiches)",
            "Jours 9-12 : Figma & UI Design"
        ]
    },
    {
        id: 3,
        icon: Video,
        module: "MODULE 3",
        titre: "Réalisation & editing vidéo",
        titreCourt: "Vidéo & Montage",
        slogan: "Tournez, Montez, Publiez",
        duree: "15 Jours",
        dureeJours: 15,
        sessions: "Sessions de 1h30",
        tarif: "13.000 FDJ",
        tarifNum: 13000,
        hoverImage: "/hover-editing.png",
        isBestSeller: true,
        niveau: "Débutant à Intermédiaire",
        prerequis: "Aucun",
        livrable: "1 court-métrage complet",
        debouche: "Vidéaste, Monteur, Réalisateur",
        outils: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        pratique: 80,
        color: "#EF4444", // Red
        bgGradient: "from-red-500 to-orange-400",
        programme: [
            "Phase 1 (J1-3) : Pré-production — Script, Storyboard",
            "Phase 2 (J4-8) : Tournage — Cadrage, Son, Éclairage",
            "Phase 3 (J9-14) : Post-Production — Montage, Sound Design, Colorimétrie",
            "Phase 4 (J15) : Export multi-plateformes"
        ]
    },
    {
        id: 4,
        icon: TrendingUp,
        module: "MODULE 4",
        titre: "Marketing digital et gestion de projet",
        titreCourt: "Marketing Digital",
        slogan: "Transformez vos talents en business",
        duree: "8 Jours",
        dureeJours: 8,
        sessions: "Sessions de 1h30",
        tarif: "7.000 FDJ",
        tarifNum: 7000,
        hoverImage: "/hover-digital.png",
        niveau: "Débutant",
        prerequis: "Aucun",
        livrable: "1 stratégie marketing complète",
        debouche: "Community Manager, Chargé Marketing",
        outils: ["Meta Business", "Google Ads", "Notion"],
        pratique: 60,
        color: "#10B981", // Green
        bgGradient: "from-emerald-500 to-teal-400",
        programme: [
            "Jours 1-3 : Gestion de Projet (Cahier des charges, Devis, Planning)",
            "Jours 4-6 : Stratégie Marketing (Persona, Branding, Calendrier)",
            "Jours 7-8 : Publicité Facebook/Instagram Ads"
        ]
    }
];

export default function FormationsPage() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="bg-white min-h-screen">

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO - Style Académique Lumineux */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl" />

                {/* Film Strip Decoration */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#6e1615] via-yellow-500 to-[#6e1615]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left - Text Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-5 py-2 border border-gray-100">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-gray-700">Inscriptions ouvertes — Rentrée 2026</span>
                            </div>

                            {/* Main Title - Screenplay Style */}
                            <div className="space-y-4">
                                <div className="font-mono text-sm text-gray-400 tracking-wider">
                                    SCÈNE 01 — INT. ACADÉMIE CINEWORLD — JOUR
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                                    Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6e1615] to-red-400">Carrière</span>
                                    <br />
                                    Commence <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">Ici</span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Rejoignez la <strong className="text-gray-900">première académie audiovisuelle de Djibouti</strong>.
                                Des formations pratiques, des projets concrets, et un certificat reconnu.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 py-4">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-[#6e1615]">4</div>
                                    <div className="text-sm text-gray-500">Modules</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-[#6e1615]">80%</div>
                                    <div className="text-sm text-gray-500">Pratique</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-[#6e1615]">100%</div>
                                    <div className="text-sm text-gray-500">Encadré</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#catalogue"
                                    className="inline-flex items-center gap-2 bg-[#6e1615] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8b1c1b] transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
                                >
                                    <BookOpen size={20} />
                                    Voir les formations
                                </Link>
                                <Link
                                    href="/inscription"
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-[#6e1615] hover:text-[#6e1615] transition-all"
                                >
                                    S'inscrire maintenant
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* Right - Image with Decorations */}
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/groupeeleve.png"
                                    alt="Étudiants Cineworld"
                                    width={600}
                                    height={500}
                                    className="object-cover w-full h-[500px]"
                                    priority
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                                    <Award className="text-yellow-600" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Certifié</div>
                                    <div className="text-xs text-gray-500">Reconnu pro</div>
                                </div>
                            </div>

                            <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Users className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Petits groupes</div>
                                    <div className="text-xs text-gray-500">10 max / session</div>
                                </div>
                            </div>

                            {/* Clap Decoration */}
                            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#6e1615] to-red-600 text-white rounded-2xl p-4 shadow-xl rotate-12">
                                <div className="font-mono text-xs">TAKE</div>
                                <div className="text-3xl font-black">01</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
                    <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
                    <ChevronDown size={24} />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* SECTION "CASTING" - Pourquoi nous rejoindre */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Header - Screenplay Style */}
                    <div className="text-center mb-16">
                        <div className="font-mono text-sm text-gray-400 tracking-wider mb-4">
                            SCÈNE 02 — POURQUOI CINEWORLD ?
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Votre <span className="text-[#6e1615]">Feuille de Casting</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Les compétences que vous allez développer pour décrocher le rôle principal de votre carrière
                        </p>
                    </div>

                    {/* Casting Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: "Objectifs Clairs", desc: "Un projet concret à la fin de chaque module", color: "blue" },
                            { icon: Zap, title: "Apprentissage Rapide", desc: "80% de pratique, résultats visibles dès J1", color: "yellow" },
                            { icon: GraduationCap, title: "Certificat Pro", desc: "Reconnu par les entreprises locales", color: "green" },
                            { icon: Users, title: "Réseau Alumni", desc: "Rejoignez une communauté de créatifs", color: "purple" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${item.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                    item.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                                        item.color === 'green' ? 'bg-green-100 text-green-600' :
                                            'bg-purple-100 text-purple-600'
                                    }`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* CATALOGUE DES FORMATIONS - Style Scénario */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section id="catalogue" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="font-mono text-sm text-gray-400 tracking-wider mb-4">
                            SCÈNE 03 — CHOISISSEZ VOTRE PARCOURS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Nos <span className="text-[#6e1615]">Formations</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Chaque module est conçu comme un acte de votre histoire professionnelle
                        </p>
                    </div>

                    {/* Formation Cards */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {FORMATIONS.map((formation, index) => {
                            const IconComponent = formation.icon;
                            return (
                                <div
                                    key={formation.id}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                >
                                    {/* Header with gradient */}
                                    <div className={`relative h-40 bg-gradient-to-r ${formation.bgGradient} p-4 flex flex-col justify-between`}>
                                        {/* Background Image (subtle) */}
                                        <div className="absolute inset-0 opacity-20">
                                            <Image
                                                src={formation.hoverImage}
                                                alt=""
                                                fill
                                                className="object-cover"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Top Row */}
                                        <div className="relative z-10 flex justify-between items-start">
                                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                                                <span className="font-mono text-white text-sm font-bold tracking-wider">{formation.module}</span>
                                            </div>
                                            {formation.isBestSeller && (
                                                <div className="flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                    <Star size={12} fill="currentColor" />
                                                    Best-Seller
                                                </div>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <div className="relative z-10">
                                            <h3 className="text-lg md:text-xl font-black text-white leading-tight">
                                                {formation.titre}
                                            </h3>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                            <IconComponent size={32} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-3 space-y-3">
                                        {/* Slogan */}
                                        <p className="text-gray-600 italic text-base">"{formation.slogan}"</p>

                                        {/* Quick Info */}
                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Clock size={18} className="text-[#6e1615]" />
                                                <span className="font-medium">{formation.duree}</span>
                                            </div>
                                            <div className="text-2xl font-black" style={{ color: formation.color }}>
                                                {formation.tarif}
                                            </div>
                                        </div>

                                        {/* Programme Accordion */}
                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <div className="font-mono text-xs text-gray-400 mb-3 tracking-wider">PROGRAMME — {formation.dureeJours} JOURS</div>
                                            <ul className="space-y-2">
                                                {formation.programme.slice(0, 3).map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                                {formation.programme.length > 3 && (
                                                    <li className="text-sm text-gray-400 pl-6">
                                                        + {formation.programme.length - 3} autres phases...
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        {/* Tools */}
                                        <div className="flex flex-wrap gap-2">
                                            {formation.outils.map((outil, i) => (
                                                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                                                    {outil}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Livrable */}
                                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                <Award className="text-green-600" size={20} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-green-600 font-medium">LIVRABLE FINAL</div>
                                                <div className="font-bold text-gray-900">{formation.livrable}</div>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href={`/inscription?module=${formation.id}`}
                                            className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${formation.isBestSeller
                                                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900'
                                                : 'bg-[#6e1615] text-white hover:bg-[#8b1c1b]'
                                                }`}
                                        >
                                            S'inscrire à ce module
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* PACK CREATOR 360° */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-8 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative bg-gradient-to-br from-[#6e1615] to-red-700 rounded-3xl overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                        </div>

                        <div className="relative z-10 p-4 md:p-8 text-center text-white">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm mb-8 shadow-lg">
                                <Sparkles size={16} />
                                OFFRE ULTIME
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-4xl font-black mb-4">
                                PACK "CREATOR 360°"
                            </h2>
                            <p className="text-xl text-white/80 mb-8">
                                Maîtrisez TOUTES les compétences en 1 mois intensif
                            </p>

                            {/* Price & Duration */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-yellow-400">45.000 FDJ</div>
                                    <div className="text-sm text-white/60">au lieu de 55.000 FDJ</div>
                                </div>
                                <div className="hidden md:block w-px h-16 bg-white/20" />
                                <div className="text-center">
                                    <div className="flex items-center gap-2 text-xl">
                                        <Clock size={24} />
                                        <span className="font-bold">1 Mois</span>
                                    </div>
                                    <div className="text-sm text-white/60">Paiement en 2x possible</div>
                                </div>
                            </div>

                            {/* What's Included */}
                            <div className="grid md:grid-cols-2 gap-3 mb-8">
                                {FORMATIONS.map((f) => (
                                    <div key={f.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                                        <div className="text-2xl mb-2">{f.module === "MODULE 1" ? "💻" : f.module === "MODULE 2" ? "🎨" : f.module === "MODULE 3" ? "🎬" : "📈"}</div>
                                        <div className="font-bold text-sm">{f.titreCourt}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                href="/inscription?module=5"
                                className="inline-flex items-center gap-3 bg-yellow-400 text-yellow-900 px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <Play size={24} fill="currentColor" />
                                Réserver ma place
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* COMPARATEUR SIMPLIFIÉ */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="font-mono text-sm text-gray-400 tracking-wider mb-4">
                            SCÈNE 04 — AIDE AU CHOIX
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Quel parcours pour <span className="text-[#6e1615]">vous</span> ?
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {FORMATIONS.map((f, i) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveTab(i)}
                                role="tab"
                                aria-selected={activeTab === i}
                                className={`px-6 py-3 rounded-full font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#6e1615] focus:ring-offset-2 ${activeTab === i
                                    ? `bg-gradient-to-r ${f.bgGradient} text-white shadow-lg`
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {f.titreCourt}
                            </button>
                        ))}
                    </div>

                    {/* Active Module Details */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        {(() => {
                            const f = FORMATIONS[activeTab];
                            const IconComponent = f.icon;
                            return (
                                <div className="grid md:grid-cols-2 gap-10">
                                    {/* Left - Info */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${f.bgGradient} flex items-center justify-center`}>
                                                <IconComponent size={32} className="text-white" />
                                            </div>
                                            <div>
                                                <div className="font-mono text-sm text-gray-400">{f.module}</div>
                                                <h3 className="text-2xl font-black text-gray-900">{f.titre}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-lg italic">"{f.slogan}"</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <div className="text-sm text-gray-500">Durée</div>
                                                <div className="text-xl font-bold text-gray-900">{f.duree}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <div className="text-sm text-gray-500">Tarif</div>
                                                <div className="text-xl font-bold" style={{ color: f.color }}>{f.tarif}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <div className="text-sm text-gray-500">Niveau requis</div>
                                                <div className="text-lg font-bold text-gray-900">{f.niveau}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <div className="text-sm text-gray-500">Pratique</div>
                                                <div className="text-xl font-bold text-green-600">{f.pratique}%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - Details */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-3">🎯 Ce que vous créerez</h4>
                                            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                                                <div className="font-bold text-green-700">{f.livrable}</div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-3">🚀 Débouchés</h4>
                                            <p className="text-gray-600">{f.debouche}</p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-3">🛠️ Outils maîtrisés</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {f.outils.map((outil, i) => (
                                                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {outil}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Link
                                            href={`/inscription?module=${f.id}`}
                                            className={`block w-full text-center py-4 rounded-xl font-bold text-lg bg-gradient-to-r ${f.bgGradient} text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all`}
                                        >
                                            Choisir ce parcours →
                                        </Link>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* MENTOR SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/formateur-mentor.png"
                                    alt="Votre Mentor"
                                    width={500}
                                    height={600}
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-200 rounded-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#6e1615]/10 rounded-3xl -z-10" />
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6">
                            <div className="font-mono text-sm text-gray-400 tracking-wider">
                                VOTRE MENTOR
                            </div>
                            <h2 className="text-4xl font-black text-gray-900">
                                Apprenez avec un <span className="text-[#6e1615]">Expert du Terrain</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                "La théorie ne suffit pas. Je partage avec vous <strong>10 ans d'expérience</strong> sur les plateaux de tournage et dans les studios de post-production."
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                        <Video className="text-[#6e1615]" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">50+ Projets Majeurs</div>
                                        <div className="text-sm text-gray-500">Documentaires, Pubs, Courts-métrages</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                                        <GraduationCap className="text-yellow-600" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Pédagogie Active</div>
                                        <div className="text-sm text-gray-500">80% pratique, feedback personnalisé</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* FAQ - Style Scénario */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="font-mono text-sm text-gray-400 tracking-wider mb-4">
                            SCÈNE BONUS — QUESTIONS FRÉQUENTES
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            Le <span className="text-[#6e1615]">Scénario</span> de vos Questions
                        </h2>
                    </div>

                    {/* FAQ Cards - Screenplay Style */}
                    <div className="space-y-6">
                        {[
                            {
                                scene: "INT. STUDIO CINEWORLD — JOUR",
                                question: "Dois-je avoir du matériel pour suivre la formation ?",
                                answer: "Non ! Tous les logiciels professionnels sont fournis sur place. Vous venez juste avec votre motivation et votre créativité !"
                            },
                            {
                                scene: "INT. SALLE DE MONTAGE — APRÈS-MIDI",
                                question: "Quelle est la durée quotidienne des sessions ?",
                                answer: "Sessions de 1h30, flexibles selon votre emploi du temps. Vous pouvez venir le matin ou l'après-midi en sessions de groupes (10 personnes max)."
                            },
                            {
                                scene: "INT. BUREAU ADMINISTRATION — SOIR",
                                question: "Y a-t-il un certificat à la fin de la formation ?",
                                answer: "Absolument ! Certificat officiel Cineworld Académie reconnu par les professionnels du secteur à Djibouti et dans la région."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="font-mono text-xs text-gray-400 mb-4">{faq.scene}</div>

                                <div className="flex gap-4 mb-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🎬</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-500 text-sm mb-1">ÉTUDIANT</div>
                                        <p className="text-gray-900 font-medium">{faq.question}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pl-4 border-l-4 border-[#6e1615]">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🎓</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#6e1615] text-sm mb-1">FORMATEUR</div>
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* CTA FINAL */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gradient-to-r from-[#6e1615] to-red-700">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <div className="font-mono text-sm text-white/60 tracking-wider mb-4">
                        FIN DU SCÉNARIO — VOTRE TOUR D'AGIR
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Prêt à écrire votre propre histoire ?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Rejoignez la première académie audiovisuelle de Djibouti et transformez votre passion en carrière.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/inscription"
                            className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-300 transition-all shadow-xl"
                        >
                            <GraduationCap size={24} />
                            S'inscrire maintenant
                        </Link>
                        <a
                            href="https://wa.me/25377145306"
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                        >
                            💬 Nous contacter
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
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Formations</h3>
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
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span>📍</span>
                                    <span>Djibouti, Aviation<br />Institut "DIHM"</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span>📧</span>
                                    <a href="mailto:cineworld@cineworldacademie.com" className="hover:text-white transition-colors">cineworld@cineworldacademie.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span>📱</span>
                                    <a href="https://wa.me/25377145306" className="hover:text-white transition-colors">+253 77 14 53 06</a>
                                </li>
                            </ul>
                        </div>

                        {/* Réseaux */}
                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Réseaux Sociaux</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors text-xl">
                                    📘
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors text-xl">
                                    📷
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors text-xl">
                                    📺
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                        © 2026 Cineworld Académie — Tous droits réservés — #quedubon
                    </div>
                </div>
            </footer>

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

        </main>
    );
}
