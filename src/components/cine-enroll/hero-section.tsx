
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ProgramSection from "./program-section";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/filmmaker/1920/1080"
          alt="Filmmaker composing a shot"
          fill
          className="object-cover"
          data-ai-hint="filmmaker cinematic"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col items-start space-y-4 md:space-y-6 max-w-lg">
          
          <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-[0_0_15px_hsl(var(--primary)_/_0.4)]">
            Masterclass Exclusive
          </div>

          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tight text-white leading-tight" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
            Devenez Réalisateur
          </h1>

          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl">
            Apprenez à écrire, tourner et monter votre propre court-métrage à Djibouti. Une formation intensive pour transformer votre passion en compétence.
          </p>

          <div className="flex items-center gap-4 text-sm text-neutral-300">
            <span>Action</span>
            <span className="h-1 w-1 bg-neutral-500 rounded-full" />
            <span>Drame</span>
            <span className="h-1 w-1 bg-neutral-500 rounded-full" />
            <span>Documentaire</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400/80 fill-yellow-400/80" />
            </div>
            <span className="font-semibold text-lg">4.8 (12 Avis)</span>
          </div>

          <Button 
            onClick={onScrollToForm}
            size="lg"
            className="mt-4 bg-primary text-primary-foreground h-14 px-8 text-lg font-bold rounded-md hover:bg-primary/90 transition-transform duration-200 hover:scale-105 shadow-lg shadow-primary/30"
          >
            Commencer l'aventure
          </Button>
        </div>
      </div>
      
      {/* Program Section Overlay */}
      <div className="absolute bottom-0 right-0 z-20 w-full lg:w-3/5 p-4">
        <ProgramSection />
      </div>
    </section>
  );
}
