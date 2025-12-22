"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ProgramSection from "./program-section";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    const particleContainer = document.querySelector('.hero-particles');
    if (!particleContainer) return;

    // Clear existing particles
    particleContainer.innerHTML = '';

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 5 + 5;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      // Custom property for horizontal drift
      const xEnd = (Math.random() - 0.5) * 100;
      particle.style.setProperty('--x-end', `${xEnd}px`);

      particleContainer.appendChild(particle);
    }
  }, []);

  return (
    <section
      aria-label="Section principale de la formation cinéma"
      className="relative w-full flex flex-col justify-center text-white overflow-hidden"
    >
      {/* Video for Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover hidden md:block"
        src="/cinema-bg.mp4"
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Image for Mobile */}
      <Image
        src="/hero-fond.png"
        alt="Arrière-plan cinéma"
        fill
        className="absolute z-0 w-full h-full object-cover object-center block md:hidden"
        priority
      />

      {/* Overlay - Lighter for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>

      {/* Festival Effects */}
      <div className="hero-spotlight left"></div>
      <div className="hero-spotlight right"></div>
      <div className="hero-particles"></div>


      <div className="container mx-auto px-4 flex-grow flex items-center relative z-20 pt-24 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6 w-full">

          {/* Colonne de Gauche : Contenu Texte */}
          <div className="flex flex-col h-full items-start space-y-4 md:space-y-6 max-w-lg">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="laurel-badge"
            >
              <span>🏆 Académie Cineworld</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              tabIndex={0}
              className="text-5xl md:text-6xl font-headline font-black tracking-wide text-white leading-tight drop-shadow-2xl"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
            >
              MAÎTRISEZ LE POUVOIR <br /> DE L'IMAGE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl text-neutral-200 max-w-2xl font-body"
            >
              Apprenez à créer des vidéos impactantes, du scénario au montage final. Une formation intensive pour transformer votre passion en compétence professionnelle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-0.5">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <Star className="w-5 h-5 text-amber-400/80 fill-amber-400/80" />
              </div>
              <span className="font-semibold text-lg font-body">4.8 (12 Avis)</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-auto"
            >
              <Button
                asChild
                className="btn-primary lg:text-xl px-10 py-6"
              >
                <Link href="/inscription">Découvrir nos formations</Link>
              </Button>
            </motion.div>
          </div>

          {/* Colonne de Droite : Vide pour l'équilibre */}
          <div className="relative h-full w-full hidden md:flex flex-col lg:mt-20">
            {/* Program Section Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="w-full lg:w-full p-4 mt-auto overflow-visible"
            >
              <ProgramSection />
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}