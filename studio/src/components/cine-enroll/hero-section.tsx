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
          </motion.div>

        </div>
      </div>
    </section>
  );
}