'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { GraduationCap, Camera, Users, Heart, ArrowRight, AlertTriangle, Target, TrendingUp, Shield, Award, Building2, CheckCircle2 } from 'lucide-react';
import MembershipModal from '@/components/MembershipModal';
import SponsorshipModal from '@/components/SponsorshipModal';

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

const MISSIONS = [
    {
        icon: GraduationCap,
        title: "Formation Cinéma",
        desc: "Ateliers pratiques en écriture scénaristique, cadrage, montage et réalisation pour les jeunes Djiboutiens.",
        image: "/equipe-formation.jpg",
        badge: "Programme Phare"
    },
    {
        icon: Camera,
        title: "Soutien Production",
        desc: "Mise à disposition de matériel professionnel et accompagnement des projets de courts-métrages.",
        image: "/formationgroupecom.jpg",
        badge: "Équipements"
    },
    {
        icon: Users,
        title: "Cohésion Sociale",
        desc: "Projections communautaires, festivals et événements culturels dans les quartiers de Djibouti.",
        image: "/festivaldecinemacom.jpg",
        badge: "Événements"
    },
    {
        icon: Heart,
        title: "Programme Mentorat",
        desc: "Les anciens formés encadrent les nouveaux venus dans un esprit de transmission et de solidarité.",
        image: "/formationgroupecom02.jpg",
        badge: "Accompagnement"
    }
];

const TIMELINE_EVENTS = [
    { year: "2014", title: "La Genèse", desc: "Naissance du rêve de former la jeunesse aux métiers de l'image.", image: "/cinema-nomade.png" },
    { year: "2018", title: "Premières Formations", desc: "Lancement des premiers ateliers avec une poignée de passionnés.", image: "/equipe-formation.jpg" },
    { year: "2022", title: "Premier Festival", desc: "Festival du Cinéma Djiboutien, 500 spectateurs.", image: "/festivaldecinemacom.jpg" },
    { year: "2024", title: "L'Académie", desc: "Structuration officielle : 4 modules, 150+ diplômés.", image: "/formationgroupecom.jpg" },
    { year: "2025", title: "L'Expansion", desc: "Partenariats internationaux et équipements professionnels.", image: "/formationgroupecom02.jpg" },
];

const PARTNERS = [
    { src: "/ambassa-de-france.png", alt: "Ambassade de France" },
    { src: "/american-corner.png", alt: "American Corner" },
    { src: "/catmoon-production.jpg", alt: "Catmoon Production" },
    { src: "/logo_bdc.png", alt: "BDC" },
    { src: "/unicef.png", alt: "UNICEF" },
];

const IMPACT_STATS = [
    { value: "150+", label: "Jeunes Formés" },
    { value: "50+", label: "Productions" },
    { value: "10", label: "CDC Partenaires" },
    { value: "100%", label: "Réinvestissement" },
];

const EXECUTIVE_BOARD = [
    { name: "À définir", position: "Président", photo: "/placeholder-avatar.jpg" },
    { name: "À définir", position: "Secrétaire Générale", photo: "/placeholder-avatar.jpg" },
    { name: "À définir", position: "Trésorier", photo: "/placeholder-avatar.jpg" },
    { name: "À définir", position: "Contrôleur", photo: "/placeholder-avatar.jpg" },
];

// NEW: Le Défi - Statistics about youth challenges
const CHALLENGE_STATS = [
    { value: "60%", label: "Des jeunes sans emploi stable", icon: AlertTriangle },
    { value: "0", label: "École de cinéma à Djibouti", icon: Building2 },
    { value: "85%", label: "N'ont jamais touché une caméra pro", icon: Camera },
];

// NEW: 3 Axes d'Action (replaces Missions concept) - Magazine Style
const THREE_AXES = [
    {
        icon: GraduationCap,
        number: "01",
        title: "FORMER",
        subtitle: "Formation Professionnelle",
        desc: "Ateliers pratiques en écriture, cadrage, montage et réalisation. 4 modules certifiants adaptés aux réalités locales.",
        stats: "150+ diplômés",
        image: "/equipe-formation.jpg",
        quote: "L'éducation est l'arme la plus puissante pour changer le monde."
    },
    {
        icon: Camera,
        number: "02",
        title: "PRODUIRE",
        subtitle: "Accompagnement Production",
        desc: "Mise à disposition de matériel professionnel et encadrement des projets de courts-métrages et documentaires.",
        stats: "50+ productions",
        image: "/formationgroupecom.jpg",
        quote: "Créer, c'est résister. Résister, c'est créer."
    },
    {
        icon: Users,
        number: "03",
        title: "SENSIBILISER",
        subtitle: "Cohésion Sociale",
        desc: "Projections communautaires, festivals et événements culturels dans les quartiers de Djibouti.",
        stats: "10 CDC partenaires",
        image: "/festivaldecinemacom.jpg",
        quote: "Le cinéma rassemble les cœurs."
    }
];

// NEW: Modèle Solidaire features
const SOLIDAIRE_FEATURES = [
    { icon: Shield, title: "100% Non-Lucratif", desc: "Chaque franc collecté finance directement la formation" },
    { icon: Award, title: "Association Agréée", desc: "Enregistrée officiellement, reçu fiscal délivré" },
    { icon: CheckCircle2, title: "Transparence Totale", desc: "Rapports annuels et audits disponibles" },
];

// NEW: Vision 2030 goals
const VISION_2030 = [
    { current: "150+", target: "500", label: "Jeunes formés", unit: "diplômés" },
    { current: "50+", target: "200", label: "Productions", unit: "films" },
    { current: "10", target: "25", label: "Partenaires", unit: "CDC" },
    { current: "1", target: "3", label: "Centres", unit: "régions" },
];

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className={className}>
            {children}
        </motion.div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════

export default function AssociationPage() {
    const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
    const [isSponsorshipModalOpen, setIsSponsorshipModalOpen] = useState(false);

    return (
        <main className="bg-gray-50 text-gray-900 min-h-screen">

            {/* Membership Modal */}
            <MembershipModal isOpen={isMembershipModalOpen} onClose={() => setIsMembershipModalOpen(false)} />

            {/* Sponsorship Modal */}
            <SponsorshipModal isOpen={isSponsorshipModalOpen} onClose={() => setIsSponsorshipModalOpen(false)} />

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO - Immersive Magazine Style */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
                {/* Background Image - Full Screen */}
                <div className="absolute inset-0">
                    <Image
                        src="/ultime.jpg"
                        alt="Cinéworld Académie"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                </div>

                {/* Content Grid */}
                <div className="relative z-10 min-h-screen flex flex-col">

                    {/* Top Bar - Marquee Style */}
                    <div className="bg-[#D4AF37] text-black py-2 overflow-hidden">
                        <div className="flex gap-8 animate-marquee whitespace-nowrap">
                            {[...Array(10)].map((_, i) => (
                                <span key={i} className="text-sm font-bold uppercase tracking-wider">
                                    CINÉWORLD ACADÉMIE • FORMATION CINÉMA • DJIBOUTI 2025 • INSCRIPTIONS OUVERTES •
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex items-center">
                        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                                {/* Left - Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                                        Association Cinéworld Académie
                                    </div>

                                    {/* Main Title */}
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6">
                                        L'IMAGE
                                        <br />
                                        <span className="text-[#D4AF37]">AU SERVICE</span>
                                        <br />
                                        DE LA JEUNESSE
                                    </h1>

                                    {/* Subtitle */}
                                    <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-lg leading-relaxed">
                                        Former, accompagner et inspirer les jeunes Djiboutiens aux métiers du cinéma.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            onClick={() => setIsMembershipModalOpen(true)}
                                            className="group inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                                        >
                                            Devenir membre
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <Link
                                            href="/formations"
                                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
                                        >
                                            Voir les Formations
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Right - Floating Mini Cards */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="hidden lg:block relative h-[500px]"
                                >
                                    {/* Card 1 - Top Right */}
                                    <div className="absolute top-0 right-0 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform">
                                        <Image src="/formationgroupecom.jpg" alt="Formation" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-white text-sm font-bold">FORMATION</p>
                                            <p className="text-[#D4AF37] text-xs">150+ diplômés</p>
                                        </div>
                                    </div>

                                    {/* Card 2 - Middle */}
                                    <div className="absolute top-1/4 left-0 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl -rotate-6 hover:rotate-0 transition-transform">
                                        <Image src="/equipe-formation.jpg" alt="Production" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-white text-sm font-bold">PRODUCTION</p>
                                            <p className="text-[#D4AF37] text-xs">50+ productions</p>
                                        </div>
                                    </div>

                                    {/* Card 3 - Bottom Right */}
                                    <div className="absolute bottom-0 right-8 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl rotate-6 hover:rotate-0 transition-transform">
                                        <Image src="/festivaldecinemacom.jpg" alt="Festival" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-white text-sm font-bold">FESTIVAL</p>
                                            <p className="text-[#D4AF37] text-xs">10 CDC partenaires</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-black/50 backdrop-blur-md border-t border-white/10"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-6">
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-12">
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-black text-[#D4AF37]">150+</div>
                                    <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">Jeunes Formés</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-black text-[#D4AF37]">50+</div>
                                    <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">Productions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-black text-[#D4AF37]">10</div>
                                    <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">CDC Partenaires</div>
                                </div>
                                <div className="text-center hidden md:block">
                                    <div className="text-3xl md:text-5xl font-black text-white">2014</div>
                                    <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">Fondation</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* LE DÉFI - Youth Challenges (Dark Section) */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#0a0a0a] py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#8B2635]/20 text-[#ff6b6b] px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <AlertTriangle size={16} />
                            Le Défi
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Une Jeunesse en <span className="text-[#ff6b6b]">Attente d'Opportunités</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            À Djibouti, les jeunes talent n'ont pas accès aux métiers créatifs. Aucune structure ne leur offre de formation audiovisuelle professionnelle.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {CHALLENGE_STATS.map((stat, index) => (
                            <AnimatedSection key={index}>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-[#ff6b6b]/50 transition-all">
                                    <stat.icon className="w-10 h-10 text-[#ff6b6b] mx-auto mb-4" />
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                                    <div className="text-white/60 text-sm">{stat.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center mt-12">
                        <div className="inline-flex items-center gap-2 text-[#D4AF37] font-medium">
                            <Target size={20} />
                            <span>Cinéworld apporte la solution</span>
                            <ArrowRight size={20} />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* MODÈLE SOLIDAIRE - Film Strip Style on White */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="bg-white py-16 md:py-24 relative overflow-hidden">

                {/* Film Strip Decorative Elements */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-[#1a1a1a] flex flex-col justify-between py-4">
                    {/* Film Perforations Left */}
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-6 h-4 bg-white/90 rounded-sm mx-auto" />
                    ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-[#1a1a1a] flex flex-col justify-between py-4">
                    {/* Film Perforations Right */}
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-6 h-4 bg-white/90 rounded-sm mx-auto" />
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-16 md:px-24 relative z-10">
                    <AnimatedSection className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Shield size={16} />
                            Notre Différence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#0a0a0a] mb-4">
                            Un Modèle <span className="text-[#8B2635]">100% Solidaire</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            "Chaque franc collecté forme un jeune de plus aux métiers du cinéma."
                        </p>
                    </AnimatedSection>

                    {/* Film Frames Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {SOLIDAIRE_FEATURES.map((feature, index) => (
                            <AnimatedSection key={index}>
                                <div className="relative group">
                                    {/* Film Frame Border */}
                                    <div className="absolute -inset-2 bg-[#1a1a1a] rounded-lg" />

                                    {/* Film Frame Content */}
                                    <div className="relative bg-white border-4 border-[#1a1a1a] rounded-lg p-8 text-center hover:bg-[#f5f0eb] transition-all">
                                        {/* Frame Number */}
                                        <div className="absolute -top-1 -left-1 bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded-br-lg">
                                            0{index + 1}
                                        </div>

                                        <div className="w-16 h-16 bg-[#8B2635]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8B2635]/20 transition-colors">
                                            <feature.icon className="w-8 h-8 text-[#8B2635]" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Bottom Film Strip Detail */}
                    <AnimatedSection className="mt-12 text-center">
                        <div className="inline-flex items-center gap-4 bg-[#1a1a1a] text-white px-6 py-3 rounded-full">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-3 bg-white/80 rounded-sm" />
                                ))}
                            </div>
                            <span className="text-sm font-semibold uppercase tracking-wider">Association Agréée • Loi 1901</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-3 bg-white/80 rounded-sm" />
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <section className="bg-[#f5f0eb]">
                {/* Banner */}
                <div className="section-banner section-banner-bordeaux">
                    <div className="max-w-7xl mx-auto">
                        Nos 3 Axes d'Action
                    </div>
                </div>

                {/* Magazine-Style Bento Grid */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">

                    {/* First Row: Hero Card + 2 Smaller Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">

                        {/* AXE 01 - Hero Card (Large) */}
                        <AnimatedSection className="md:row-span-2">
                            <div className="relative h-full min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden group cursor-pointer">
                                {/* Background Image */}
                                <Image
                                    src={THREE_AXES[0].image}
                                    alt={THREE_AXES[0].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    {/* Top: Badge + Number */}
                                    <div className="flex items-start justify-between">
                                        <div className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                            Axe Principal
                                        </div>
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-black text-white border border-white/30">
                                            {THREE_AXES[0].number}
                                        </div>
                                    </div>

                                    {/* Bottom: Title, Description, Stats */}
                                    <div>
                                        <h3 className="text-5xl md:text-6xl font-black text-white mb-2">{THREE_AXES[0].title}</h3>
                                        <p className="text-[#D4AF37] text-lg font-semibold uppercase tracking-wider mb-4">{THREE_AXES[0].subtitle}</p>
                                        <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">{THREE_AXES[0].desc}</p>

                                        <div className="flex items-center gap-4">
                                            <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-5 py-3 rounded-full font-bold">
                                                <TrendingUp size={18} />
                                                {THREE_AXES[0].stats}
                                            </div>
                                            <button
                                                onClick={() => setIsMembershipModalOpen(true)}
                                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-5 py-3 rounded-full font-semibold transition-all border border-white/30"
                                            >
                                                Rejoindre
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* AXE 02 - Medium Card */}
                        <AnimatedSection>
                            <div className="relative h-[280px] md:h-[290px] rounded-3xl overflow-hidden group cursor-pointer">
                                {/* Background Image */}
                                <Image
                                    src={THREE_AXES[1].image}
                                    alt={THREE_AXES[1].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="w-12 h-12 bg-[#8B2635] rounded-xl flex items-center justify-center text-xl font-black text-white">
                                        {THREE_AXES[1].number}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-1">{THREE_AXES[1].title}</h3>
                                        <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-2">{THREE_AXES[1].subtitle}</p>
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-3">{THREE_AXES[1].desc}</p>
                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            <TrendingUp size={14} />
                                            {THREE_AXES[1].stats}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* AXE 03 - Medium Card */}
                        <AnimatedSection>
                            <div className="relative h-[280px] md:h-[290px] rounded-3xl overflow-hidden group cursor-pointer">
                                {/* Background Image */}
                                <Image
                                    src={THREE_AXES[2].image}
                                    alt={THREE_AXES[2].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="w-12 h-12 bg-[#8B2635] rounded-xl flex items-center justify-center text-xl font-black text-white">
                                        {THREE_AXES[2].number}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-white mb-1">{THREE_AXES[2].title}</h3>
                                        <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-2">{THREE_AXES[2].subtitle}</p>
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-3">{THREE_AXES[2].desc}</p>
                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            <TrendingUp size={14} />
                                            {THREE_AXES[2].stats}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Quote Section */}
                    <AnimatedSection>
                        <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 text-center">
                            <p className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                                "L'éducation est l'arme la plus puissante
                                <span className="text-[#D4AF37]"> pour changer le monde.</span>"
                            </p>
                            <p className="text-white/50 text-sm uppercase tracking-widest">— Nelson Mandela</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* TIMELINE - Magazine Style Horizontal Cards */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#0a0a0a] overflow-hidden">
                {/* Banner */}
                <div className="section-banner section-banner-gold">
                    <div className="max-w-7xl mx-auto">
                        Notre Parcours
                    </div>
                </div>

                {/* Magazine Cards Timeline */}
                <div className="py-16 md:py-24">
                    {/* Intro Text */}
                    <AnimatedSection className="text-center mb-16 px-6">
                        <p className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl mx-auto">
                            De l'idée à l'académie :
                            <span className="text-[#D4AF37]"> une décennie de passion.</span>
                        </p>
                    </AnimatedSection>

                    {/* Horizontal Scroll Cards */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#D4AF37]/30 hidden md:block" />

                        {/* Cards Container - Horizontal Scroll on Mobile */}
                        <div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-6 md:grid md:grid-cols-5 md:gap-4 md:max-w-7xl md:mx-auto snap-x snap-mandatory scrollbar-hide">
                            {TIMELINE_EVENTS.map((event, index) => (
                                <AnimatedSection key={index} className="snap-center flex-shrink-0 w-[280px] md:w-auto">
                                    <div className="group relative">
                                        {/* Year Floating Badge */}
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                            <div className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-lg font-black shadow-lg">
                                                {event.year}
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden mt-6">
                                            {/* Background Image */}
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                                <h4 className="text-xl font-black text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                                                    {event.title}
                                                </h4>
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    {event.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Timeline Dot (Desktop Only) */}
                                        <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2">
                                            <div className="w-4 h-4 bg-[#D4AF37] rounded-full ring-4 ring-[#0a0a0a] ring-offset-2 ring-offset-[#D4AF37]/20" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Scroll Hint */}
                    <div className="md:hidden text-center mt-6 text-white/40 text-sm">
                        ← Glissez pour découvrir →
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* VISION 2030 - Bordeaux Banner + Goals */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section>
                {/* Banner */}
                <div className="section-banner section-banner-bordeaux">
                    <div className="max-w-7xl mx-auto flex items-center gap-3">
                        <TrendingUp size={24} />
                        Notre Impact & Vision 2030
                    </div>
                </div>

                {/* Vision Grid */}
                <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
                    <AnimatedSection className="text-center mb-12">
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Aujourd'hui et demain : nos objectifs ambitieux pour transformer le paysage audiovisuel djiboutien.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {VISION_2030.map((goal, index) => (
                            <AnimatedSection key={index}>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                                    {/* Current */}
                                    <div className="text-4xl md:text-5xl font-black text-[#8B2635] mb-1">{goal.current}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-4">Aujourd'hui</div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-4">
                                        <div className="h-px w-8 bg-[#D4AF37]/50" />
                                        <ArrowRight size={16} />
                                        <div className="h-px w-8 bg-[#D4AF37]/50" />
                                    </div>

                                    {/* Target */}
                                    <div className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-1">{goal.target}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Objectif 2030</div>

                                    {/* Label */}
                                    <div className="text-sm font-semibold text-gray-700">{goal.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* GOUVERNANCE - Dark Banner + Team + Trust Badges */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section>
                {/* Banner */}
                <div className="section-banner section-banner-dark">
                    <div className="max-w-7xl mx-auto flex items-center gap-3">
                        <Building2 size={24} />
                        Gouvernance & Crédibilité
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-12">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 text-center">
                                <Award className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
                                <h4 className="text-white font-bold mb-1">Association Agréée</h4>
                                <p className="text-white/50 text-sm">Enregistrée officiellement N°...</p>
                            </div>
                            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 text-center">
                                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
                                <h4 className="text-white font-bold mb-1">Reçu Fiscal</h4>
                                <p className="text-white/50 text-sm">Délivré pour tous les dons</p>
                            </div>
                            <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 text-center">
                                <Shield className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
                                <h4 className="text-white font-bold mb-1">Audits Annuels</h4>
                                <p className="text-white/50 text-sm">Rapports disponibles sur demande</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
                    <AnimatedSection className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Notre Bureau Exécutif</h3>
                        <p className="text-gray-500">L'équipe dirigeante de l'association</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {EXECUTIVE_BOARD.map((member, index) => (
                            <AnimatedSection key={index}>
                                <div className="text-center group">
                                    {/* Avatar Circle */}
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#D4AF37] transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                            <div className="text-4xl md:text-5xl font-black text-gray-400">
                                                {member.position.charAt(0)}
                                            </div>
                                        </div>
                                        {/* When photo is added, replace with: */}
                                        {/* <Image src={member.photo} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" /> */}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>

                                    {/* Position */}
                                    <p className="text-sm md:text-base text-[#D4AF37] font-semibold uppercase tracking-wide">
                                        {member.position}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* PARTNERS - White Background */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Nos Partenaires
                        </h2>
                    </AnimatedSection>

                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {PARTNERS.map((partner, index) => (
                            <AnimatedSection key={index}>
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    width={120}
                                    height={60}
                                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* QUOTE SECTION */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <AnimatedSection>
                        <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-6">
                            "Chaque franc perçu lors des formations est{' '}
                            <span className="text-[#8B2635] font-semibold not-italic">intégralement réinvesti</span>
                            {' '}dans nos actions sociales."
                        </blockquote>
                        <cite className="text-[#D4AF37] font-bold text-lg not-italic">
                            — L'équipe Cinéworld Académie
                        </cite>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* FOOTER CTA - Split */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="grid md:grid-cols-2">
                {/* Left - Rejoindre */}
                <button onClick={() => setIsMembershipModalOpen(true)} className="group relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#D4AF37] cursor-pointer">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-black mb-2 group-hover:scale-105 transition-transform">
                            DEVENIR MEMBRE
                        </h3>
                        <p className="text-black/70 text-lg">Adhérents →</p>
                    </div>
                </button>

                {/* Right - Soutenir */}
                <button onClick={() => setIsSponsorshipModalOpen(true)} className="group relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#8B2635] cursor-pointer">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-105 transition-transform">
                            SOUTENIR L'ASSOCIATION
                        </h3>
                        <p className="text-white/70 text-lg">Devenir partenaire →</p>
                    </div>
                </button>
            </section>
        </main>
    );
}
