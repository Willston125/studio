"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Video,
    Scissors,
    PenTool,
    Palette,
    ChevronDown,
    Clock,
    Target,
    Award,
    Laptop
} from "lucide-react";

interface Module {
    id: number;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    objectives: string[];
    skills: string[];
    tools: string[];
    color: string;
}

export default function CurriculumSection() {
    const [activeModule, setActiveModule] = useState<number | null>(null);

    const modules: Module[] = [
        {
            id: 1,
            icon: <Video className="w-8 h-8" />,
            title: "Réalisation Vidéo Professionnelle",
            subtitle: "Maîtrisez l'art de la prise de vue",
            duration: "40 heures",
            description: "Apprenez les fondamentaux de la réalisation vidéo, du cadrage à la direction artistique. Formation intensive axée sur la pratique terrain.",
            objectives: [
                "Maîtriser les techniques de cadrage et composition",
                "Comprendre et gérer la lumière naturelle et artificielle",
                "Diriger une équipe de tournage",
                "Planifier et organiser un shooting professionnel"
            ],
            skills: [
                "Cadrage professionnel",
                "Gestion de la lumière",
                "Direction artistique",
                "Production terrain"
            ],
            tools: [
                "Caméras professionnelles",
                "Stabilisateurs & Gimbal",
                "Éclairages LED",
                "Moniteurs de contrôle"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            icon: <Scissors className="w-8 h-8" />,
            title: "Montage Vidéo Professionnel",
            subtitle: "De la timeline au rendu final",
            duration: "35 heures",
            description: "Maîtrisez les logiciels de montage professionnels et créez des vidéos percutantes avec des effets visuels de qualité cinéma.",
            objectives: [
                "Maîtriser Adobe Premiere Pro et DaVinci Resolve",
                "Créer des transitions et effets visuels",
                "Optimiser le workflow de post-production",
                "Exporter pour différentes plateformes"
            ],
            skills: [
                "Montage multi-caméras",
                "Effets spéciaux",
                "Color grading",
                "Sound design"
            ],
            tools: [
                "Adobe Premiere Pro",
                "DaVinci Resolve",
                "After Effects",
                "Audition"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            icon: <PenTool className="w-8 h-8" />,
            title: "Écriture de Scénario",
            subtitle: "Racontez des histoires captivantes",
            duration: "25 heures",
            description: "Développez vos compétences en storytelling et apprenez à structurer des récits visuels qui captivent votre audience.",
            objectives: [
                "Structurer un récit en 3 actes",
                "Créer des personnages mémorables",
                "Écrire des dialogues authentiques",
                "Adapter le scénario au format vidéo"
            ],
            skills: [
                "Structure narrative",
                "Développement de personnages",
                "Dialogues",
                "Storytelling visuel"
            ],
            tools: [
                "Final Draft",
                "Celtx",
                "Storyboard Pro",
                "Notion"
            ],
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 4,
            icon: <Palette className="w-8 h-8" />,
            title: "Création Visuelle Professionnelle",
            subtitle: "Motion design & identité visuelle",
            duration: "30 heures",
            description: "Créez des visuels impactants, du motion design à la colorimétrie. Développez votre identité visuelle unique.",
            objectives: [
                "Maîtriser les principes du design graphique",
                "Créer des animations motion design",
                "Appliquer la théorie des couleurs",
                "Développer une identité visuelle cohérente"
            ],
            skills: [
                "Motion design",
                "Colorimétrie",
                "Design graphique",
                "Branding visuel"
            ],
            tools: [
                "Adobe After Effects",
                "Photoshop",
                "Illustrator",
                "DaVinci Resolve"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];

    const toggleModule = (id: number) => {
        setActiveModule(activeModule === id ? null : id);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        📚 CURRICULUM COMPLET
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Programme <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Détaillé</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Une formation intensive structurée en 4 modules complémentaires pour une maîtrise complète des métiers de l'image
                    </p>
                </motion.div>

                {/* Modules Grid */}
                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Module Header - Clickable */}
                            <div
                                onClick={() => toggleModule(module.id)}
                                className="accordion-item bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-yellow-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 flex-1">
                                        {/* Icon */}
                                        <div className="accordion-icon p-4 rounded-lg text-white">
                                            {module.icon}
                                        </div>

                                        {/* Title & Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                                    {module.title}
                                                </h3>
                                                <span className="hidden md:inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                                                    Module {module.id}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm md:text-base">{module.subtitle}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Clock className="w-4 h-4 text-yellow-400" />
                                                <span className="text-yellow-400 text-sm font-semibold">{module.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chevron */}
                                    <ChevronDown
                                        className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ${activeModule === module.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Module Details - Expandable */}
                            <AnimatePresence>
                                {activeModule === module.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-black/40 border border-gray-800 border-t-0 rounded-b-xl p-6 space-y-6">
                                            {/* Description */}
                                            <p className="text-gray-300 leading-relaxed">{module.description}</p>

                                            {/* Grid Layout */}
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Objectives */}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Target className="w-5 h-5 text-yellow-400" />
                                                        <h4 className="font-bold text-white">Objectifs</h4>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {module.objectives.map((obj, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                                <span className="text-yellow-400 mt-1">•</span>
                                                                <span>{obj}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Skills */}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Award className="w-5 h-5 text-yellow-400" />
                                                        <h4 className="font-bold text-white">Compétences</h4>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {module.skills.map((skill, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/20"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Tools */}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Laptop className="w-5 h-5 text-yellow-400" />
                                                        <h4 className="font-bold text-white">Outils</h4>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {module.tools.map((tool, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                                                <span>{tool}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                        <div className="text-gray-400 text-sm">Modules</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">130h</div>
                        <div className="text-gray-400 text-sm">Formation totale</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">80%</div>
                        <div className="text-gray-400 text-sm">Pratique</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                        <div className="text-gray-400 text-sm">Certifié</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
