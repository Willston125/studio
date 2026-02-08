'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { GraduationCap, Camera, Users, Heart, ArrowRight } from 'lucide-react';
import MembershipModal from '@/components/MembershipModal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="bg-gray-50 text-gray-900 min-h-screen">

            {/* Membership Modal */}
            <MembershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO - Split Layout (Text Left, Image Right with Stats) */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="p-4 md:p-8 bg-gray-50">
                <div className="min-h-[85vh] grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Left Side - Dark Background with Text */}
                    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center px-8 md:px-16 py-20 md:py-0">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-6"
                            >
                                <span className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-medium">
                                    Association Cinéworld Académie
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
                            >
                                L'Image au Service<br />
                                <span className="text-[#D4AF37]">de la Jeunesse</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-lg text-white/60 mb-10 leading-relaxed"
                            >
                                Former, accompagner et inspirer les jeunes Djiboutiens aux métiers du cinéma et de l'audiovisuel.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B8860B] text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                                >
                                    Devenir membre adhérent
                                    <ArrowRight size={20} />
                                </button>
                                <Link
                                    href="/formations"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all"
                                >
                                    Voir les Formations
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side - Image with Stats Overlay */}
                    <div className="relative min-h-[50vh] md:min-h-full">
                        <Image
                            src="/ultime.jpg"
                            alt="Cinéworld Académie"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient overlay for stats visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Stats at bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                        >
                            <div className="grid grid-cols-3 gap-4 md:gap-8">
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-black text-[#D4AF37]">150+</div>
                                    <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Formés</div>
                                </div>
                                <div className="text-center border-x border-white/20">
                                    <div className="text-3xl md:text-4xl font-black text-[#D4AF37]">50+</div>
                                    <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Productions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl md:text-4xl font-black text-[#D4AF37]">10</div>
                                    <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">CDC Partenaires</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* MISSIONS - Colored Banner + Card Grid */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section>
                {/* Banner */}
                <div className="section-banner section-banner-bordeaux">
                    <div className="max-w-7xl mx-auto">
                        Nos Missions
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MISSIONS.map((mission, index) => (
                            <AnimatedSection key={index}>
                                <div className="institutional-card h-full">
                                    <div className="institutional-card-image">
                                        <Image src={mission.image} alt={mission.title} fill className="object-cover" />
                                    </div>
                                    <div className="institutional-card-body">
                                        <div className="institutional-card-badge">
                                            <mission.icon size={14} />
                                            {mission.badge}
                                        </div>
                                        <h3 className="institutional-card-title">{mission.title}</h3>
                                        <p className="institutional-card-desc">{mission.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* TIMELINE - Gold Banner + Simple List */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section>
                {/* Banner */}
                <div className="section-banner section-banner-gold">
                    <div className="max-w-7xl mx-auto">
                        Notre Parcours
                    </div>
                </div>

                {/* Timeline List */}
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <div className="timeline-simple">
                        {TIMELINE_EVENTS.map((event, index) => (
                            <AnimatedSection key={index}>
                                <div className="timeline-item">
                                    <div className="timeline-year">{event.year}</div>
                                    <div className="timeline-image">
                                        <Image src={event.image} alt={event.title} fill className="object-cover" />
                                    </div>
                                    <div className="timeline-content">
                                        <h4>{event.title}</h4>
                                        <p>{event.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* IMPACT - Bordeaux Banner + Stats */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section>
                {/* Banner */}
                <div className="section-banner section-banner-bordeaux">
                    <div className="max-w-7xl mx-auto">
                        Notre Impact
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="stats-grid">
                        {IMPACT_STATS.map((stat, index) => (
                            <AnimatedSection key={index}>
                                <div className="stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* EXECUTIVE BOARD - Dark Banner + Avatar Grid */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section>
                {/* Banner */}
                <div className="section-banner section-banner-dark">
                    <div className="max-w-7xl mx-auto">
                        Notre Bureau Exécutif
                    </div>
                </div>

                {/* Team Grid */}
                <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
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
                <button onClick={() => setIsModalOpen(true)} className="group relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#D4AF37] cursor-pointer">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-black mb-2 group-hover:scale-105 transition-transform">
                            DEVENIR MEMBRE
                        </h3>
                        <p className="text-black/70 text-lg">Adhérents →</p>
                    </div>
                </button>

                {/* Right - Soutenir */}
                <Link href="/contact" className="group relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#8B2635]">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-105 transition-transform">
                            SOUTENIR L'ASSOCIATION
                        </h3>
                        <p className="text-white/70 text-lg">Devenir partenaire →</p>
                    </div>
                </Link>
            </section>
        </main>
    );
}
