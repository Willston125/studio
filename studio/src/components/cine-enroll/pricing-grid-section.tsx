"use client";

import React from 'react';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingGridSection() {
    const packages = [
        {
            name: "Pack Initié",
            duration: "8 jours",
            price: "5 000",
            description: "Découverte des fondamentaux",
            features: [
                "Introduction à la réalisation",
                "Bases du cadrage",
                "Initiation au montage",
                "1 projet court finalisé"
            ],
            highlighted: false
        },
        {
            name: "Pack Maîtrise",
            duration: "12 jours",
            price: "10 000",
            description: "Apprentissage complet",
            features: [
                "Tout du Pack Initié",
                "Techniques de storytelling",
                "Montage avancé (Premiere Pro)",
                "Étalonnage de base",
                "2 projets professionnels"
            ],
            highlighted: true,
            badge: "POPULAIRE"
        },
        {
            name: "Pack Expert",
            duration: "23 jours",
            price: "20 000",
            description: "Formation intensive complète",
            features: [
                "Tout du Pack Maîtrise",
                "Direction d'acteurs",
                "Sound design & mixage",
                "Étalonnage professionnel",
                "Gestion de production",
                "Portfolio de 4+ projets"
            ],
            highlighted: false
        }
    ];

    return (
        <section className="section-container bg-gray-50">

            {/* En-tête */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4"
                >
                    Nos Programmes
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-title"
                >
                    Choisissez Votre Parcours
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="section-subtitle"
                >
                    Formations adaptées à tous les niveaux, du débutant au perfectionnement professionnel.
                </motion.p>
            </div>

            {/* Grille de Cartes */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              relative bg-white rounded-xl shadow-lg overflow-hidden
              ${pkg.highlighted ? 'ring-4 ring-yellow-500 scale-105' : 'border border-gray-200'}
              transition-all duration-300 hover:shadow-2xl
            `}
                    >
                        {/* Badge Populaire */}
                        {pkg.badge && (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase">
                                {pkg.badge}
                            </div>
                        )}

                        <div className="p-8">
                            {/* En-tête Package */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-black mb-2">{pkg.name}</h3>
                                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
                                <div className="text-sm text-gray-600 bg-gray-100 inline-block px-3 py-1 rounded-full">
                                    {pkg.duration}
                                </div>
                            </div>

                            {/* Prix */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-black">{pkg.price}</span>
                                    <span className="text-gray-500 font-medium">FDJ</span>
                                </div>
                            </div>

                            {/* Fonctionnalités */}
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href="/inscription"
                                className={`
                  w-full block text-center py-4 rounded-lg font-bold uppercase text-sm tracking-wider
                  transition-all duration-300
                  ${pkg.highlighted
                                        ? 'bg-black text-white hover:bg-gray-800'
                                        : 'bg-gray-100 text-black hover:bg-gray-200'
                                    }
                `}
                            >
                                Candidater
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Note juridique */}
            <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
                Tous nos programmes incluent l'accès à notre matériel professionnel (caméras, micros, logiciels)
                et un suivi personnalisé par nos formateurs.
            </p>
        </section>
    );
}
