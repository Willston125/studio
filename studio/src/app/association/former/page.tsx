'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function FormerPage() {
    const stats = [
        { value: "CDC", label: "Actions de proximité" },
        { value: "100%", label: "Bénévolat et solidarité" },
        { value: "Ateliers", label: "Initiations gratuites" },
        { value: "Jeunesse", label: "Public cible prioritaire" },
    ];

    const actions = [
        { title: "Immersion dans les CDC", desc: "Déplacement de nos équipes dans les quartiers pour des sessions d'initiation au plus près des jeunes." },
        { title: "Masterclasses Solidaires", desc: "Des professionnels partagent gratuitement leur expertise (cadrage, montage) pour éveiller des vocations." },
        { title: "Mentorat de Terrain", desc: "Un accompagnement humain pour redonner confiance et prouver que les métiers créatifs sont accessibles." },
        { title: "Prêt de Matériel", desc: "Mise à disposition de nos caméras et équipements pour ceux qui n'ont pas les moyens de s'équiper." },
        { title: "Détection de Talents", desc: "Repérage des jeunes les plus motivés pour les intégrer à des parcours de formation plus poussés." },
        { title: "Ateliers d'Écriture", desc: "Aider les jeunes à structurer leurs idées et à transformer leur vécu en scénarios percutants." },
    ];

    return (
        <main className="font-sans text-[#1F252D] bg-white">

            {/* Hero */}
            <section className="relative min-h-[520px] flex items-end overflow-hidden">
                <Image src="/ultime.jpg" alt="Former" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="relative z-10 max-w-[1200px] mx-auto px-4 pb-16 w-full">
                    <Link href="/association" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6 text-sm font-medium">
                        <ArrowLeft size={16} />
                        Retour à l&apos;Association
                    </Link>
                    <div className="inline-block bg-[#7A1C38] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
                        Axe d&apos;Action N°1
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none mb-4">
                        Former
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Tendre la main aux talents bruts des quartiers et révéler les créateurs de demain.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-white py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="bg-[#7A1C38] py-2 px-4 inline-block mb-6">
                                <h2 className="text-white text-sm font-bold uppercase tracking-widest">Notre Mission</h2>
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#1F252D] leading-tight mb-6">
                                L&apos;égalité des chances face à l&apos;image
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Le talent ne dépend ni de la géographie, ni des moyens financiers. Notre mission associative est d&apos;aller chercher la créativité là où elle se trouve : au cœur des quartiers et des Centres de Développement Communautaire (CDC) de Djibouti. Nous déployons des actions de bénévolat pour offrir aux jeunes issus de milieux défavorisés un accès gratuit à l&apos;apprentissage des métiers de l&apos;audiovisuel et du digital. Nous leur donnons les outils pour qu&apos;ils puissent devenir les propres narrateurs de leur histoire.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map(({ value, label }) => (
                                <div key={label} className="bg-[#F4F4F4] p-6 rounded-lg flex flex-col items-center text-center">
                                    <span className="font-extrabold text-[#7A1C38] text-2xl mb-2">{value}</span>
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
                    <div className="bg-[#7A1C38] py-3 px-4 mb-10">
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
                    <h2 className="text-3xl font-extrabold text-white mb-4">Tu veux rejoindre une formation ?</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Découvre nos modules de formation disponibles et inscris-toi dès aujourd&apos;hui.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/formations" className="bg-[#D4AF37] text-white font-bold px-8 py-3 hover:bg-yellow-500 transition">
                            Voir les formations
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
