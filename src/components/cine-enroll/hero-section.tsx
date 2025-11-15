
"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ProgramSection from "./program-section";

export default function HeroSection() {
  return (
    <section 
      aria-label="Section principale de la formation cinéma"
      className="relative min-h-screen w-full flex flex-col justify-center bg-background text-white overflow-hidden pt-24 md:pt-0"
    >
      <div className="container mx-auto px-4 flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          
          {/* Colonne de Gauche : Contenu Texte */}
          <div className="flex flex-col items-start space-y-4 md:space-y-6 max-w-lg z-10">
            <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-[0_0_20px_hsl(var(--primary-foreground))]">
              ACADÉMIE DE CINÉMA
            </div>

            <h1 
              tabIndex={0}
              className="text-8xl font-headline font-black tracking-wide text-white leading-tight" 
              style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
            >
              Devenez Réalisateur
            </h1>

            <p className="text-lg md:text-xl text-neutral-200 max-w-2xl font-body">
              Apprenez à écrire, tourner et monter votre propre court-métrage à Djibouti. Une formation intensive pour transformer votre passion en compétence.
            </p>

            <div className="flex items-center gap-4 text-sm text-neutral-300 font-body">
              <span>Action</span>
              <span className="h-1 w-1 bg-neutral-500 rounded-full" />
              <span>Drame</span>
              <span className="h-1 w-1 bg-neutral-500 rounded-full" />
              <span>Documentaire</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400/80 fill-amber-400/80" />
              </div>
              <span className="font-semibold text-lg font-body">4.8 (12 Avis)</span>
            </div>

            <Button 
              asChild
              className="btn-primary mt-4"
            >
              <Link href="/inscription">Découvrir nos formations</Link>
            </Button>
          </div>

          {/* Colonne de Droite : Image */}
          <div className="relative h-full w-full flex items-center justify-center order-first md:order-last">
            <div className="hero-image-container">
              <Image
                src="/hero-fond.png"
                alt="Un réalisateur de film concentré, cadrant une scène avec une caméra professionnelle sur un plateau de tournage."
                width={700}
                height={900}
                className="object-contain w-full h-auto max-h-[80vh] "
                data-ai-hint="filmmaker cinematic"
                priority
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Program Section Overlay */}
      <div className="relative z-20 w-full lg:w-3/5 p-4 self-center lg:self-end">
        <ProgramSection />
      </div>
    </section>
  );
}
