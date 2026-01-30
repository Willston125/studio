"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstitutionSection() {
    const highlights = [
        { icon: Target, text: "Formation certifiante reconnue" },
        { icon: Users, text: "Classes à effectif réduit (max 15)" },
        { icon: Award, text: "Matériel professionnel fourni" }
    ];

    return (
        <section className="section-container bg-white">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* GAUCHE : Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/groupeeleve.png"
                            alt="Étudiants Cineworld en formation"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Badge flottant */}
                    <div className="absolute -bottom-6 -right-6 bg-black text-white px-8 py-4 rounded-lg shadow-2xl">
                        <div className="text-3xl font-black">+100</div>
                        <div className="text-sm opacity-90">Projets Réalisés</div>
                    </div>
                </motion.div>

                {/* DROITE : Contenu */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Surtitre */}
                    <div className="inline-block bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                        Notre Académie
                    </div>

                    {/* Titre */}
                    <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                        Formez-vous aux<br />
                        Métiers de l'Image
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Cineworld Academy est la première institution djiboutienne dédiée exclusivement
                        à la formation audiovisuelle. Nos programmes allient théorie académique et pratique
                        intensive pour transformer votre passion en compétence professionnelle.
                    </p>

                    {/* Points clés */}
                    <div className="space-y-4 pt-4">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-yellow-800" />
                                </div>
                                <span className="text-gray-700 font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                        <a href="/a-propos" className="btn-primary">
                            En Savoir Plus
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
