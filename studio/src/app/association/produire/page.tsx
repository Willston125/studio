'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function ProduirePage() {
    const stats = [
        { value: "Courts", label: "Accompagnement" },
        { value: "Plateaux", label: "Expérience réelle" },
        { value: "Récits", label: "Histoires locales" },
        { value: "Matériel", label: "Soutien technique" },
    ];

    const actions = [
        { title: "Incubateur de Projets", desc: "Soutien logistique et technique pour les jeunes auteurs souhaitant réaliser leur première œuvre." },
        { title: "Coaching Réalisation", desc: "Un encadrement sur le plateau par des réalisateurs confirmés pour guider les premiers pas." },
        { title: "Post-Production Solidaire", desc: "Accès gratuit à nos stations de montage et d'étalonnage pour finaliser les projets associatifs." },
        { title: "Séries à Impact Social", desc: "Production de contenus mettant en lumière les réalités et les défis de notre société." },
        { title: "Création de Portfolios", desc: "Aider les jeunes techniciens à se bâtir des références solides (bande-démo) pour lancer leur carrière." },
        { title: "Accompagnement Festivals", desc: "Orienter et inscrire les œuvres produites dans les circuits de festivals panafricains et internationaux." },
    ];

    return (
        <main className="font-sans text-[#1F252D] bg-white">

            {/* Hero */}
            <section className="relative min-h-[520px] flex items-end overflow-hidden">
                <Image src="/studio-production.png" alt="Produire" fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="relative z-10 max-w-[1200px] mx-auto px-4 pb-16 w-full">
                    <Link href="/association" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6 text-sm font-medium">
                        <ArrowLeft size={16} />
                        Retour à l&apos;Association
                    </Link>
                    <div className="inline-block bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
                        Axe d&apos;Action N°2
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none mb-4">
                        Produire
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Briser le plafond de verre de la production locale et donner vie aux récits djiboutiens.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-white py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="bg-[#D4AF37] py-2 px-4 inline-block mb-6">
                                <h2 className="text-white text-sm font-bold uppercase tracking-widest">Notre Mission</h2>
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#1F252D] leading-tight mb-6">
                                De la rue à l&apos;écran : réaliser le premier film
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Avoir une idée de court-métrage est une chose, réussir à le produire en est une autre. Nous savons d&apos;expérience combien le chemin est rude pour un jeune réalisateur. Cet axe vise à soutenir matériellement et techniquement la création d&apos;œuvres locales (courts-métrages, reportages, web-séries) portées par la jeunesse. Nous agissons comme un incubateur solidaire, encadrant les tournages avec une exigence professionnelle pour que les histoires djiboutiennes puissent enfin voyager et être vues.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map(({ value, label }) => (
                                <div key={label} className="bg-[#F4F4F4] p-6 rounded-lg flex flex-col items-center text-center">
                                    <span className="font-extrabold text-[#D4AF37] text-2xl mb-2">{value}</span>
                                    <span className="text-xs text-gray-600 font-medium leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Actions concrètes */}
            <section className="bg-[#F4F4F4] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="bg-[#D4AF37] py-3 px-4 mb-10">
                        <h2 className="text-white text-xl font-bold uppercase tracking-wide">Ce Que Nous Faisons</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {actions.map(({ title, desc }) => (
                            <div key={title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircle size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                    <h4 className="font-bold text-[#1F252D]">{title}</h4>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed pl-8">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#1F252D] py-16">
                <div className="max-w-[1200px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Découvrez nos productions</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Explorez les œuvres audiovisuelles créées par CineWorld Djibouti et ses apprenants.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/production" className="bg-[#D4AF37] text-white font-bold px-8 py-3 hover:bg-yellow-500 transition">
                            Voir les productions
                        </Link>
                        <Link href="/association" className="border border-white/30 text-white font-bold px-8 py-3 hover:border-white transition">
                            Retour à l&apos;association
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
