"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Star, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden">

      {/* Motif subtil de fond */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* GAUCHE : Contenu Textuel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge Académique */}
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
              <span className="text-yellow-800 font-semibold text-sm">🏆 Académie Cineworld</span>
            </div>

            {/* Titre Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-black">
              Maîtrisez<br />
              le Pouvoir<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
                de l'Image
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              La première académie audiovisuelle de Djibouti. Apprenez la réalisation, le montage et la production avec du matériel professionnel.
            </p>

            {/* Étoiles & Avis */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5"
                    fill="#FFD700"
                    color="#FFD700"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                <strong className="font-black text-black">4,9/5</strong> • 127 avis
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/inscription"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Candidater Maintenant
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=example"
                target="_blank"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Voir la Démo
              </Link>
            </div>

            {/* Statistiques Clés */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-black text-black">127+</div>
                <div className="text-sm text-gray-600">Élèves Formés</div>
              </div>
              <div>
                <div className="text-3xl font-black text-black">23j</div>
                <div className="text-sm text-gray-600">Programme Complet</div>
              </div>
              <div>
                <div className="text-3xl font-black text-black">100%</div>
                <div className="text-sm text-gray-600">Pratique</div>
              </div>
            </div>
          </motion.div>

          {/* DROITE : Visuel Principal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Badge Circulaire de Preuve Sociale (Style Edule) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              className="absolute -top-8 -right-8 z-20 w-28 h-28 bg-[#4CAF50] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white"
            >
              <div className="text-white text-3xl font-black">127+</div>
              <div className="text-white text-[10px] font-bold uppercase tracking-wide">Élèves</div>
              <div className="text-white text-[10px] font-bold uppercase">Formés</div>
            </motion.div>

            {/* Image Principale avec bordure dorée */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-600 shadow-2xl">
              <Image
                src="/hero-fond.png"
                alt="Formation Cinéma Cineworld"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Badge Overlay sur l'image */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-lg">Ali William</div>
                    <div className="text-sm text-gray-600">Formateur & Réalisateur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs flottants */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-600 rounded-full blur-3xl opacity-20" />

            {/* Doodles Décoratifs (Style Edule) */}
            {/* Flèche montante à droite */}
            <svg className="absolute -right-12 top-20 w-16 h-16 text-yellow-400 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>

            {/* Étoiles dorées */}
            <svg className="absolute -left-8 top-32 w-8 h-8 text-yellow-500 opacity-40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Points décoratifs */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-500 rounded-full opacity-50" />
            <div className="absolute bottom-16 right-4 w-2 h-2 bg-yellow-600 rounded-full opacity-60" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}