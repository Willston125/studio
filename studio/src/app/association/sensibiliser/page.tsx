'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function SensibiliserPage() {
    const stats = [
        { value: "Nomade", label: "Projections itinérantes" },
        { value: "Débats", label: "Échanges citoyens" },
        { value: "Festivals", label: "Culture partagée" },
        { value: "Impact", label: "Sensibilisation" },
    ];

    const actions = [
        { title: "Cinéma Nomade", desc: "Installation d'écrans dans les quartiers et localités éloignées pour des soirées de projection gratuites." },
        { title: "Ciné-Débats", desc: "Organisation d'échanges après les projections pour discuter des thématiques sociales abordées dans les films." },
        { title: "Éducation à l'Image", desc: "Interventions dans les écoles pour apprendre aux plus jeunes à décrypter les médias et l'information." },
        { title: "Impulsion de Festivals", desc: "Création d'événements rassembleurs pour célébrer le cinéma et mettre la lumière sur les créateurs de la région." },
        { title: "Campagnes Citoyennes", desc: "Réalisation et diffusion de vidéos de sensibilisation pour soutenir les causes d'intérêt public." },
        { title: "Plaidoyer Culturel", desc: "Collaborer avec les institutions pour souligner l'importance de l'art dans le développement de la jeunesse." },
    ];

    return (
        <main className="font-sans text-[#1F252D] bg-white">

            {/* Hero */}
            <section className="relative min-h-[520px] flex items-end overflow-hidden">
                <Image src="/eleve-classe.png" alt="Sensibiliser" fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="relative z-10 max-w-[1200px] mx-auto px-4 pb-16 w-full">
                    <Link href="/association" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6 text-sm font-medium">
                        <ArrowLeft size={16} />
                        Retour à l&apos;Association
                    </Link>
                    <div className="inline-block bg-[#1F252D] border border-[#D4AF37] text-[#D4AF37] text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
                        Axe d&apos;Action N°3
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-none mb-4">
                        Sensibiliser
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Créer une culture de l&apos;image et recréer du lien social par le cinéma nomade.
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
                                Le cinéma comme vecteur de citoyenneté
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                L&apos;art doit aller à la rencontre de son public. Forts de notre expérience dans l&apos;organisation d&apos;événements culturels majeurs, nous voulons faire de Djibouti un carrefour d&apos;échanges. À travers des projections itinérantes et des ciné-débats dans les espaces publics et les écoles, nous utilisons l&apos;impact émotionnel du film pour éveiller les consciences, débattre des enjeux sociétaux et inspirer la jeune génération. Le cinéma n&apos;est plus un simple divertissement, il devient un outil de cohésion sociale.
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
                    <h2 className="text-3xl font-extrabold text-white mb-4">Rejoignez notre mouvement</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Que vous soyez particulier, école ou institution, vous pouvez contribuer à notre mission de sensibilisation.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/inscription" className="bg-[#D4AF37] text-white font-bold px-8 py-3 hover:bg-yellow-500 transition">
                            Nous rejoindre
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
