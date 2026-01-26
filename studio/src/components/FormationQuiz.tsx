'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    ChevronRight,
    RotateCcw,
    CheckCircle2,
    Target,
    Video,
    Globe,
    TrendingUp,
    Palette,
    ArrowRight,
    Star,
    Trophy,
    Zap
} from 'lucide-react';
import ReactConfetti from 'react-confetti';
import Link from 'next/link';

interface Question {
    id: number;
    question: string;
    options: {
        text: string;
        points: {
            video: number;
            web: number;
            marketing: number;
            design: number;
        };
    }[];
}

interface FormationResult {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    gradient: string;
    benefits: string[];
    ctaText: string;
}

const questions: Question[] = [
    {
        id: 1,
        question: "Qu'est-ce qui vous passionne le plus ? 🎯",
        options: [
            {
                text: "Raconter des histoires visuellement captivantes",
                points: { video: 3, web: 0, marketing: 1, design: 1 }
            },
            {
                text: "Créer des expériences interactives sur internet",
                points: { video: 0, web: 3, marketing: 1, design: 1 }
            },
            {
                text: "Comprendre comment atteindre et convaincre les clients",
                points: { video: 1, web: 1, marketing: 3, design: 0 }
            },
            {
                text: "Donner vie à des idées créatives visuellement",
                points: { video: 1, web: 0, marketing: 0, design: 3 }
            }
        ]
    },
    {
        id: 2,
        question: "Quel outil vous attire le plus ? 🛠️",
        options: [
            {
                text: "Adobe Premiere Pro / CapCut",
                points: { video: 3, web: 0, marketing: 0, design: 1 }
            },
            {
                text: "Intelligence Artificielle (ChatGPT, Bolt.new)",
                points: { video: 0, web: 3, marketing: 1, design: 0 }
            },
            {
                text: "Réseaux sociaux et Analytics",
                points: { video: 0, web: 1, marketing: 3, design: 0 }
            },
            {
                text: "Canva / Photoshop / Illustrator",
                points: { video: 0, web: 0, marketing: 0, design: 3 }
            }
        ]
    },
    {
        id: 3,
        question: "Quel type de projet vous inspire le plus ? 💡",
        options: [
            {
                text: "Créer un court-métrage ou une publicité vidéo",
                points: { video: 3, web: 0, marketing: 1, design: 1 }
            },
            {
                text: "Lancer un site web professionnel ou une application",
                points: { video: 0, web: 3, marketing: 1, design: 1 }
            },
            {
                text: "Développer une stratégie pour booster une marque",
                points: { video: 0, web: 0, marketing: 3, design: 1 }
            },
            {
                text: "Concevoir des logos et identités visuelles",
                points: { video: 0, web: 0, marketing: 1, design: 3 }
            }
        ]
    },
    {
        id: 4,
        question: "Comment préférez-vous travailler ? 🧠",
        options: [
            {
                text: "Avec de la musique et des séquences dynamiques",
                points: { video: 3, web: 0, marketing: 0, design: 1 }
            },
            {
                text: "En résolvant des problèmes techniques avec l'IA",
                points: { video: 0, web: 3, marketing: 0, design: 0 }
            },
            {
                text: "En analysant des données et tendances du marché",
                points: { video: 0, web: 0, marketing: 3, design: 0 }
            },
            {
                text: "En expérimentant couleurs, formes et compositions",
                points: { video: 0, web: 0, marketing: 0, design: 3 }
            }
        ]
    },
    {
        id: 5,
        question: "Quel serait votre métier de rêve ? ✨",
        options: [
            {
                text: "Monteur vidéo / Réalisateur",
                points: { video: 3, web: 0, marketing: 0, design: 0 }
            },
            {
                text: "Développeur Web / Créateur de sites",
                points: { video: 0, web: 3, marketing: 0, design: 0 }
            },
            {
                text: "Community Manager / Responsable Marketing",
                points: { video: 0, web: 0, marketing: 3, design: 0 }
            },
            {
                text: "Designer Graphique / Directeur Artistique",
                points: { video: 0, web: 0, marketing: 0, design: 3 }
            }
        ]
    }
];

const formationResults: Record<string, FormationResult> = {
    video: {
        id: 'video',
        title: 'Montage Vidéo',
        description: 'Vous avez l\'âme d\'un storyteller visuel ! Transformez vos idées en vidéos captivantes avec Adobe Premiere Pro et CapCut.',
        icon: Video,
        color: 'text-red-500',
        gradient: 'from-red-500 to-orange-500',
        benefits: ['Maîtrisez le montage professionnel', 'Apprenez les effets spéciaux', 'Créez des contenus viraux'],
        ctaText: 'Commencer le Montage Vidéo'
    },
    web: {
        id: 'web',
        title: 'Création de Site avec IA',
        description: 'L\'innovation est dans votre ADN ! Créez des sites web modernes en utilisant l\'Intelligence Artificielle comme allié.',
        icon: Globe,
        color: 'text-blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        benefits: ['Créez sans coder grâce à l\'IA', 'Maîtrisez les outils modernes', 'Lancez votre business en ligne'],
        ctaText: 'Explorer la Création Web IA'
    },
    marketing: {
        id: 'marketing',
        title: 'Marketing Digital',
        description: 'Vous avez le sens des affaires ! Apprenez à développer des stratégies digitales qui génèrent des résultats.',
        icon: TrendingUp,
        color: 'text-green-500',
        gradient: 'from-green-500 to-emerald-500',
        benefits: ['Maîtrisez les réseaux sociaux', 'Apprenez la publicité en ligne', 'Développez votre audience'],
        ctaText: 'Découvrir le Marketing Digital'
    },
    design: {
        id: 'design',
        title: 'Design & Création Graphique',
        description: 'Vous êtes un artiste dans l\'âme ! Donnez vie à vos idées avec des designs qui marquent les esprits.',
        icon: Palette,
        color: 'text-purple-500',
        gradient: 'from-purple-500 to-pink-500',
        benefits: ['Maîtrisez Canva Pro', 'Créez des identités visuelles', 'Développez votre style unique'],
        ctaText: 'Débuter en Design Graphique'
    }
};

export default function FormationQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({ video: 0, web: 0, marketing: 0, design: 0 });
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAnswer = useCallback((optionIndex: number) => {
        if (isAnimating) return;

        setSelectedAnswer(optionIndex);
        setIsAnimating(true);

        const points = questions[currentQuestion].options[optionIndex].points;
        setScores(prev => ({
            video: prev.video + points.video,
            web: prev.web + points.web,
            marketing: prev.marketing + points.marketing,
            design: prev.design + points.design
        }));

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
            }
            setIsAnimating(false);
        }, 600);
    }, [currentQuestion, isAnimating]);

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScores({ video: 0, web: 0, marketing: 0, design: 0 });
        setShowResult(false);
        setSelectedAnswer(null);
        setShowConfetti(false);
    };

    const getResult = (): FormationResult => {
        const maxScore = Math.max(scores.video, scores.web, scores.marketing, scores.design);
        if (scores.video === maxScore) return formationResults.video;
        if (scores.web === maxScore) return formationResults.web;
        if (scores.marketing === maxScore) return formationResults.marketing;
        return formationResults.design;
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="relative">
            {/* Confetti Effect */}
            {showConfetti && (
                <ReactConfetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.3}
                />
            )}

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 md:p-10 border border-gray-700/50 shadow-2xl overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key={`question-${currentQuestion}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Quiz d'Orientation</h3>
                                        <p className="text-gray-400 text-sm">Trouvez votre formation idéale</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
                                    <Target className="w-4 h-4 text-red-400" />
                                    <span className="text-white font-semibold">{currentQuestion + 1}/{questions.length}</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"
                                        initial={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    />
                                </div>
                            </div>

                            {/* Question */}
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    {questions[currentQuestion].question}
                                </h2>
                            </div>

                            {/* Options */}
                            <div className="grid gap-4">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        disabled={isAnimating}
                                        className={`group relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${selectedAnswer === index
                                                ? 'border-red-500 bg-red-500/20 scale-[1.02]'
                                                : 'border-gray-600 bg-gray-800/50 hover:border-gray-400 hover:bg-gray-700/50'
                                            }`}
                                        whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className={`text-lg font-medium transition-colors ${selectedAnswer === index ? 'text-red-300' : 'text-gray-200 group-hover:text-white'
                                                }`}>
                                                {option.text}
                                            </span>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{
                                                    opacity: selectedAnswer === index ? 1 : 0,
                                                    scale: selectedAnswer === index ? 1 : 0
                                                }}
                                                className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-white" />
                                            </motion.div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10"
                        >
                            {/* Result Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-2 rounded-full mb-4"
                                >
                                    <Trophy className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 font-semibold">Votre Résultat</span>
                                </motion.div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    Félicitations ! 🎉
                                </h2>
                                <p className="text-gray-400">Voici la formation faite pour vous</p>
                            </div>

                            {/* Result Card */}
                            {(() => {
                                const result = getResult();
                                const ResultIcon = result.icon;
                                return (
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 mb-8"
                                    >
                                        <div className="flex flex-col md:flex-row items-center gap-6">
                                            <motion.div
                                                initial={{ rotate: -180, scale: 0 }}
                                                animate={{ rotate: 0, scale: 1 }}
                                                transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
                                                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${result.gradient} flex items-center justify-center shadow-2xl`}
                                            >
                                                <ResultIcon className="w-12 h-12 text-white" />
                                            </motion.div>
                                            <div className="flex-1 text-center md:text-left">
                                                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-3`}>
                                                    {result.title}
                                                </h3>
                                                <p className="text-gray-300 text-lg leading-relaxed">
                                                    {result.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="mt-8 grid md:grid-cols-3 gap-4">
                                            {result.benefits.map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                    className="flex items-center gap-3 bg-gray-700/50 px-4 py-3 rounded-xl"
                                                >
                                                    <Star className={`w-5 h-5 ${result.color} flex-shrink-0`} />
                                                    <span className="text-gray-200 text-sm">{benefit}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })()}

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/inscription"
                                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all hover:scale-105"
                                >
                                    <Zap className="w-5 h-5" />
                                    S'inscrire Maintenant
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={resetQuiz}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 text-gray-200 font-semibold rounded-xl hover:bg-gray-600 transition-all"
                                >
                                    <RotateCcw className="w-5 h-5" />
                                    Recommencer le Quiz
                                </button>
                            </div>

                            {/* Score Breakdown (optional - shows all scores) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-8 pt-8 border-t border-gray-700"
                            >
                                <p className="text-gray-500 text-sm text-center mb-4">Vos affinités avec chaque formation</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { key: 'video', label: 'Montage Vidéo', color: 'from-red-500 to-orange-500' },
                                        { key: 'web', label: 'Création Web', color: 'from-blue-500 to-cyan-500' },
                                        { key: 'marketing', label: 'Marketing', color: 'from-green-500 to-emerald-500' },
                                        { key: 'design', label: 'Design', color: 'from-purple-500 to-pink-500' }
                                    ].map(item => (
                                        <div key={item.key} className="text-center">
                                            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(scores[item.key as keyof typeof scores] / 15) * 100}%` }}
                                                    transition={{ delay: 0.9, duration: 0.8 }}
                                                />
                                            </div>
                                            <span className="text-gray-400 text-xs">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
