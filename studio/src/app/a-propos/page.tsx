"use client";

import { motion } from "framer-motion";
import { Film, Users, Lightbulb, Target, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AProposPage() {
    const pillars = [
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "L'Académie",
            subtitle: "Direction & Ingénierie pédagogique",
            points: [
                "Première académie 100% pratique dédiée aux métiers de l'image à Djibouti",
                "Cursus intensifs et masterclass : réalisation cinéma, montage vidéo, étalonnage et storytelling",
                "Formation de la nouvelle génération de créateurs de contenu",
            ],
        },
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: "L'Expertise",
            subtitle: "Consulting & Stratégie audiovisuelle",
            points: [
                "Accompagnement des institutions, entreprises et ONG dans leur stratégie vidéo",
                "Conseil en production exécutive : du scénario à la diffusion",
                "Direction artistique et supervision de projets visuels à fort impact",
            ],
        },
        {
            icon: <Sparkles className="w-10 h-10" />,
            title: "L'Innovation",
            subtitle: "Développement & Mentorat",
            points: [
                "Intégration des outils modernes (IA générative, workflows innovants)",
                "Mentorat de jeunes talents djiboutiens",
                "Organisation d'ateliers découverte et formations continues",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
                <Image
                    src="/groupeeleve.png"
                    alt="Équipe Cineworld"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-bold text-sm mb-6"
                    >
                        🎬 CINEWORLD DJIBOUTI
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        À PROPOS DE NOUS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        La première académie dédiée aux métiers de l'image à Djibouti
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                Notre Mission
                            </span>
                        </h2>
                        <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 md:p-12">
                            <Target className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                                <strong className="text-yellow-400">Professionnaliser le secteur audiovisuel djiboutien</strong> pour atteindre les standards internationaux et offrir aux talents locaux les outils techniques pour <strong className="text-yellow-400">raconter leurs propres histoires</strong>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                Notre Vision
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Faire de Djibouti un hub créatif reconnu en Afrique de l'Est, où chaque talent peut accéder à une formation de qualité internationale et contribuer à l'essor d'une industrie audiovisuelle locale dynamique et innovante.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-20 px-4 bg-gray-900">
                <div className="container mx-auto max-w-7xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        Nos <span className="text-yellow-400">3 Piliers</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-black/50 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-yellow-400 mb-6">{pillar.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-yellow-400/80 text-sm mb-6">{pillar.subtitle}</p>
                                <ul className="space-y-3">
                                    {pillar.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-yellow-400 mt-1">•</span>
                                            <span className="text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-t from-black to-gray-900">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 rounded-3xl p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Prêt à rejoindre l'aventure ?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Découvrez nos formations et lancez votre carrière dans l'audiovisuel.
                        </p>
                        <Link
                            href="/inscription"
                            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                        >
                            S'inscrire maintenant
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
