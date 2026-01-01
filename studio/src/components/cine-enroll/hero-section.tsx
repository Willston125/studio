"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ProgramSection from "./program-section";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ViewfinderFrame } from "@/components/ui/viewfinder-frame";
import { Timecode } from "@/components/ui/timecode";
import { RecIndicator } from "@/components/ui/rec-indicator";

export default function HeroSection() {
  useEffect(() => {
    // ⚡ OPTIMIZATION: Disable particles on mobile for better performance
    // Old Android phones can struggle with 30 animated particles
    const isMobile = window.innerWidth < 768; // md breakpoint
    if (isMobile) return; // Skip particle generation on mobile

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
      {/* White background with subtle pattern */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Hero Content Image - Optional or more subtle */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block z-0">
        <Image
          src="/hero-fond.png"
          alt=""
          fill
          className="object-cover grayscale"
        />
      </div>

      {/* Removed dark effects */}

      {/* Removed dark effects */}

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
              className="text-5xl md:text-7xl font-headline font-black tracking-tight text-black leading-[0.9] mb-4"
            >
              MAÎTRISEZ LE POUVOIR <br /> DE L'IMAGE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 max-w-xl font-body leading-relaxed"
            >
              La première académie audiovisuelle de Djibouti. Apprenez à créer des contenus qui marquent les esprits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-0.5">
                <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                <Star className="w-5 h-5 text-[#FFD700]/50 fill-[#FFD700]/50" />
              </div>
              <span className="font-bold text-lg font-body text-black">4.8/5 (Session 2026)</span>
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