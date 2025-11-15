
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ProgramSection from "./program-section";

export default function HeroSection() {
  return (
    <section 
      aria-label="Section principale de la formation cinéma"
      className="relative min-h-screen w-full flex flex-col justify-center bg-background text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-fond.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto px-4 flex-grow flex items-center relative z-10 pt-32">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          
          {/* Colonne de Gauche : Contenu Texte */}
          <div className="flex flex-col h-full items-start space-y-4 md:space-y-6 max-w-lg">
            
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

            <div className="font-body font-bold uppercase tracking-wider text-amber-400">
              100% PRATIQUE
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
              className="btn-primary mt-auto lg:text-xl px-10 py-6"
            >
              <Link href="/inscription">Découvrir nos formations</Link>
            </Button>
          </div>

          {/* Colonne de Droite : Vide pour l'équilibre */}
          <div className="relative h-full w-full hidden md:flex flex-col">
             {/* Program Section Overlay */}
            <div className="w-full lg:w-full p-4 mt-auto">
                <ProgramSection />
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
