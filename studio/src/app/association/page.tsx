'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { GraduationCap, Camera, Users, Heart, ArrowRight } from 'lucide-react';

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
    return (
        <main className="bg-gray-50 text-gray-900 min-h-screen">

            {/* ═══════════════════════════════════════════════════════════════════ */}
            {/* HERO - Full Width Image with Title */}
            {/* ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image src="/ultime.jpg" alt="Cinéworld Académie" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6"
                    >
                        L'IMAGE AU SERVICE<br />
                        <span className="text-[#D4AF37]">DE LA JEUNESSE</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
                    >
                        Association Cinéworld Académie — Djibouti
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link
                            href="/inscription"
                            className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#6e1e2a] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                        >
                            Nous Rejoindre
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
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
                <Link href="/inscription" className="group relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#D4AF37]">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-black mb-2 group-hover:scale-105 transition-transform">
                            REJOINDRE LE MOUVEMENT
                        </h3>
                        <p className="text-black/70 text-lg">Inscription aux formations →</p>
                    </div>
                </Link>

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
