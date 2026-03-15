'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    ChevronDown, ChevronUp, ArrowUp,
    MapPin, Phone, Mail, Check, Award
} from 'lucide-react';
import { FORMATIONS } from './formationsData';

// ─── Composant animation au scroll ───────────────────────────────────────────
const AnimatedSection = ({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ─── Page principale ──────────────────────────────────────────────────────────
export default function FormationsPage() {
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setShowScrollTop(window.scrollY > 500);
            const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setScrollProgress(Math.min(pct, 100));
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── FAQ data ──────────────────────────────────────────────────────────────
    const FAQ = [
        {
            q: 'Dois-je avoir du matériel pour suivre la formation ?',
            a: 'Non, tous les logiciels et équipements professionnels sont fournis sur place. Vous venez juste avec votre motivation.',
        },
        {
            q: 'Quelle est la durée quotidienne des sessions ?',
            a: "Sessions de 1h30, flexibles selon votre emploi du temps. Vous pouvez venir le matin ou l'après-midi.",
        },
        {
            q: 'Y a-t-il un certificat à la fin de la formation ?',
            a: 'Oui, vous recevez un certificat officiel Cineworld Académie reconnu par les professionnels du secteur.',
        },
        {
            q: 'Comment puis-je payer ma formation ?',
            a: 'Paiement en espèces, virement, ou en 2 fois pour le Pack Complet. Contactez-nous pour plus de détails.',
        },
    ];

    return (
        <main className="bg-[#0a0a0a] text-white antialiased font-sans">
            {/* ── Barre de progression ──────────────────────────────────────── */}
            <div
                className="fixed top-0 left-0 right-0 h-0.5 bg-[#C5A572] z-[999] origin-left transition-transform duration-100"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* HERO — Image plein écran, titre empilé style lafilmfactory      */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                {/* Vidéo de fond */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/cinema-bg.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Contenu */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] mb-6 tracking-tight uppercase">
                            École
                            <br />
                            <span className="text-white/90">de l'image</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            {"Cineworld Académie"}
                        </h2>
                        <p className="text-base text-gray-300 font-medium max-w-sm">
                            Formations vidéo, photo &amp; digital média.
                        </p>
                    </div>
                </div>

                {/* Flèche scroll */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:flex flex-col items-center gap-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Découvrir</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* BLOCS D'OFFRES — Cartes 3D Flip au survol                       */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section id="modules" className="bg-[#0a0a0a] py-12 scroll-mt-24">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 -mt-24 relative z-20">

                    {/* ── CARTE 1 : PAR MODULES ─────────────────────────────── */}
                    <AnimatedSection delay={0.1}>
                        <div className="group relative aspect-[4/5] md:aspect-square [perspective:1000px] cursor-pointer">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* Face Avant */}
                                <div className="absolute inset-0 [backface-visibility:hidden] bg-zinc-900 p-8 md:p-10 flex flex-col justify-center items-center text-center">
                                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#D4AF37] mb-4">
                                        Formation
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
                                        Par<br />Modules
                                    </h3>
                                    <div className="w-12 h-px bg-[#D4AF37] mb-6" />
                                    <p className="text-white/50 text-xs leading-relaxed font-medium max-w-xs mb-6">
                                        Formations courtes et intensives pour acquérir rapidement des compétences
                                        ciblées en vidéo, photographie, design graphique ou digital média.
                                        Choisissez à la carte.
                                    </p>
                                    <span className="text-[9px] text-white/20 font-bold tracking-widest uppercase">
                                        Survolez pour lire →
                                    </span>
                                </div>

                                {/* Face Arrière */}
                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#D4AF37] p-8 md:p-10 flex flex-col justify-center items-start text-left overflow-y-auto">
                                    {/* Section 1 */}
                                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-black/50 mb-2">
                                        Pour qui ?
                                    </h4>
                                    <p className="text-black/80 text-sm leading-relaxed font-medium mb-6">
                                        Les créateurs de contenu, les entrepreneurs, les chargés de communication
                                        et les passionnés de l&apos;image souhaitant maîtriser une compétence précise.
                                    </p>

                                    {/* Séparateur */}
                                    <div className="w-full h-px bg-black/10 mb-6" />

                                    {/* Section 2 */}
                                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-black/50 mb-2">
                                        Le concept
                                    </h4>
                                    <p className="text-black/80 text-sm leading-relaxed font-medium mb-8">
                                        Des sessions allant de 5 à 15 jours en immersion totale à Cinéworld Académie.
                                        Choisissez un module unique ou combinez-les selon vos objectifs professionnels.
                                    </p>

                                    {/* Bouton */}
                                    <Link
                                        href="#formations"
                                        className="self-center bg-black text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                                    >
                                        ↗ Découvrir les modules
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── CARTE 2 : CREATOR 360° (MISE EN AVANT) ────────────── */}
                    <AnimatedSection delay={0.2}>
                        <div className="group relative aspect-[4/5] md:aspect-square [perspective:1000px] cursor-pointer">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* Face Avant */}
                                <div className="absolute inset-0 [backface-visibility:hidden] bg-zinc-900 ring-2 ring-[#D4AF37] ring-inset p-8 md:p-10 flex flex-col justify-center items-center text-center">
                                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#D4AF37] mb-4">
                                        Offre spéciale
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
                                        Creator<br />360°
                                    </h3>
                                    <div className="w-12 h-px bg-[#D4AF37] mb-6" />
                                    <p className="text-white/50 text-xs leading-relaxed font-medium max-w-xs mb-6">
                                        Le cursus complet en un mois intensif. Devenez un expert polyvalent en
                                        maîtrisant l&apos;ensemble de la chaîne de production audiovisuelle et digitale.
                                    </p>
                                    <span className="text-[9px] text-white/20 font-bold tracking-widest uppercase">
                                        Survolez pour lire →
                                    </span>
                                </div>

                                {/* Face Arrière */}
                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#D4AF37] p-8 md:p-10 flex flex-col justify-center items-start text-left overflow-y-auto">
                                    {/* Section 1 */}
                                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-black/50 mb-2">
                                        L&apos;avantage
                                    </h4>
                                    <p className="text-black/80 text-sm leading-relaxed font-medium mb-6">
                                        Ce pack inclut nos 4 modules (Site IA, Design Graphique, Réalisation/Montage,
                                        Marketing Digital) avec un accompagnement prioritaire sur vos projets personnels.
                                    </p>

                                    {/* Séparateur */}
                                    <div className="w-full h-px bg-black/10 mb-6" />

                                    {/* Section 2 */}
                                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-black/50 mb-2">
                                        Tarif préférentiel
                                    </h4>
                                    <p className="text-black/80 text-sm leading-relaxed font-medium mb-2">
                                        <span className="text-2xl md:text-3xl font-black text-black">45.000 FDJ</span>
                                    </p>
                                    <p className="text-black/40 text-xs font-bold line-through mb-1">au lieu de 55.000 FDJ</p>
                                    <p className="text-black/60 text-xs font-medium mb-8">
                                        Économisez 10.000 FDJ par rapport à la prise des modules séparés.
                                    </p>

                                    {/* Bouton */}
                                    <Link
                                        href="/inscription?module=5"
                                        className="self-center bg-black text-white px-8 py-3.5 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                                    >
                                        ↗ S&apos;inscrire au Pack
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>


                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* STATSCORE — Indicateurs clés style satisfaction score           */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#0a0a0a] py-16 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
                    {/* Cercle SVG */}
                    <div className="relative flex items-center justify-center w-32 h-32 flex-shrink-0">
                        <svg className="w-full h-full -rotate-90">
                            <circle className="text-white/10" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8" />
                            <circle
                                className="text-[#C5A572]"
                                cx="64" cy="64"
                                fill="transparent"
                                r="58"
                                stroke="currentColor"
                                strokeDasharray="364.4"
                                strokeDashoffset="18"
                                strokeWidth="8"
                            />
                        </svg>
                        <span className="absolute text-3xl font-black">+150</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-black uppercase tracking-widest">Diplômés depuis 2025</h4>
                        <p className="text-gray-400 max-w-xs mt-2 text-sm">
                            Nos étudiants sont <strong className="text-white">très satisfaits</strong> et
                            recommandent Cineworld Académie à leur entourage.
                        </p>
                        <div className="flex gap-6 mt-6 justify-center md:justify-start">
                            {[
                                { val: '80%', label: 'Pratique' },
                                { val: '10', label: 'Étudiants max' },
                                { val: '4', label: 'Modules' },
                            ].map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="text-2xl font-black text-[#C5A572]">{s.val}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* CATEGORIES GRID — Grille noire, grayscale → couleur au hover   */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section id="continues" className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* En-tête */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                            Nos formations <span className="text-[#C5A572]">continues</span>
                        </h2>
                        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 mt-2 uppercase">
                            Catalogue
                        </p>
                    </div>

                    {/* Grille 4 colonnes — Style Affiche de Cinéma */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FORMATIONS.map((formation, index) => {
                            const isPopular = 'isPopular' in formation && formation.isPopular;
                            return (
                                <AnimatedSection key={formation.id} delay={index * 0.08}>
                                    <Link
                                        href={`/formations/${formation.id}`}
                                        className={`relative group aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-black cursor-pointer block ${isPopular ? 'ring-2 ring-[#D4AF37] ring-inset' : ''}`}
                                    >
                                        {/* Image de fond */}
                                        <Image
                                            src={formation.image}
                                            alt={formation.titre}
                                            fill
                                            className={`object-cover ${formation.objectPosition} transition-transform duration-700 group-hover:scale-105`}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />

                                        {/* Filtre sombre par défaut */}
                                        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />

                                        {/* Dégradé Gold au survol */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/90 via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Badge Populaire (fixe) */}
                                        {isPopular && (
                                            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
                                                <span className="bg-[#D4AF37] text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-widest whitespace-nowrap">
                                                    🔥 Populaire
                                                </span>
                                            </div>
                                        )}

                                        {/* Prix + Durée — glissent depuis le haut au survol */}
                                        <div className={`absolute left-5 right-5 flex justify-between items-start z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 ${isPopular ? 'top-14' : 'top-5'}`}>
                                            <span className="text-white text-xs font-black tracking-widest uppercase drop-shadow-md">
                                                {formation.tarif}
                                            </span>
                                            <span className="text-white text-xs font-black tracking-widest uppercase drop-shadow-md">
                                                {formation.duree}
                                            </span>
                                        </div>

                                        {/* Titre centré */}
                                        <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                                            <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-snug drop-shadow-md uppercase tracking-wide">
                                                {formation.titre}
                                            </h3>
                                        </div>

                                        {/* Bouton Détails en bas */}
                                        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                                            <span className="border border-white text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 group-hover:bg-white group-hover:text-black transition-colors duration-300 drop-shadow-md">
                                                Détails →
                                            </span>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>




            {/* ════════════════════════════════════════════════════════════════ */}
            {/* TÉMOIGNAGES                                                     */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#111] py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tight">
                            Ils ont transformé <span className="text-[#C5A572]">leur vie</span>
                        </h2>
                        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 mt-2 uppercase">
                            Témoignages
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Ahmed M.', role: 'Vidéaste Freelance', avatar: 'A',
                                quote: "Grâce à Cineworld, j'ai décroché mes premiers clients en freelance. La formation pratique m'a donné la confiance dont j'avais besoin.",
                            },
                            {
                                name: 'Houda S.', role: 'Community Manager', avatar: 'H',
                                quote: 'Je suis passée de stagiaire à responsable marketing en 6 mois. Les compétences acquises ici sont ultra demandées à Djibouti.',
                            },
                            {
                                name: 'Mohamed K.', role: 'Entrepreneur', avatar: 'M',
                                quote: "J'ai créé mon agence de production vidéo après la formation. Meilleur investissement de ma vie professionnelle.",
                            },
                        ].map((t, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="border border-white/10 p-8 hover:border-[#C5A572]/30 transition-colors">
                                    <div className="text-[#C5A572] mb-4 text-lg tracking-widest">★★★★★</div>
                                    <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#C5A572] flex items-center justify-center font-black text-black text-sm">
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <div className="font-black text-sm text-white">{t.name}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* CERTIFICAT                                                      */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section id="certificat" className="bg-white text-black py-20 border-t border-gray-100 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection delay={0.1}>
                            <div className="relative">
                                <div className="relative rounded-sm overflow-hidden">
                                    <Image
                                        src="/equipe.jpg"
                                        alt="L'équipe Cineworld Académie"
                                        width={700}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 bg-[#8B2635] text-white px-4 py-2 text-sm font-black uppercase tracking-widest hidden lg:block">
                                    Reconnu ✓
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div>
                                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B2635] mb-6">
                                    <Award size={14} />
                                    Certification Officielle
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                                    Un certificat qui ouvre des portes
                                </h2>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    {`À l'issue de votre formation, recevez votre certificat officiel Cineworld Académie.
                                    Ce document atteste de vos compétences et est reconnu par les entreprises
                                    de Djibouti et de la région.`}
                                </p>
                                <div className="space-y-3 mb-10">
                                    {[
                                        'Certificat nominatif personnalisé',
                                        'Détail des compétences maîtrisées',
                                        'Reconnu par les entreprises locales',
                                        'Accès au réseau Cineworld Alumni',
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <Check size={16} className="text-[#8B2635] flex-shrink-0" />
                                            <span className="text-sm font-medium text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/inscription"
                                    className="inline-block bg-[#8B2635] text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#6e1c29] transition-colors"
                                >
                                    Obtenir mon certificat →
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                             */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section id="faq" className="bg-[#0a0a0a] py-20 border-t border-white/5 scroll-mt-24">
                <div className="max-w-3xl mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tight">
                            Questions <span className="text-[#C5A572]">fréquentes</span>
                        </h2>
                    </div>
                    <div className="space-y-px">
                        {FAQ.map((faq, i) => (
                            <div key={i} className="border-b border-white/10">
                                <button
                                    onClick={() => setOpenFAQIndex(openFAQIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between py-6 text-left"
                                >
                                    <span className="font-black text-sm pr-4">{faq.q}</span>
                                    {openFAQIndex === i
                                        ? <ChevronUp size={18} className="text-[#C5A572] flex-shrink-0" />
                                        : <ChevronDown size={18} className="text-white/30 flex-shrink-0" />
                                    }
                                </button>
                                {openFAQIndex === i && (
                                    <div className="pb-6 text-sm text-gray-400 leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════ */}
            {/* CTA FINAL                                                       */}
            {/* ════════════════════════════════════════════════════════════════ */}
            <section className="bg-[#8B2635] py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                        Prêt à développer vos compétences ?
                    </h2>
                    <p className="text-white/70 text-sm mb-10 max-w-xl mx-auto">
                        Rejoignez la première académie audiovisuelle de Djibouti et lancez votre carrière créative.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/inscription"
                            className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-yellow-300 transition-colors"
                        >
                            {"S'inscrire maintenant"}
                        </Link>
                        <a
                            href="https://wa.me/25377145306"
                            className="inline-block border border-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#8B2635] transition-colors"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </section>



            {/* ═══ Bouton retour haut ═══════════════════════════════════════ */}
            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 bg-[#C5A572] text-black p-4 shadow-lg hover:bg-yellow-300 transition-colors z-50"
                    aria-label="Retour en haut"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </main>
    );
}
