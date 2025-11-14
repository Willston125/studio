"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import ProgramSection from "./program-section";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/director/1920/1080"
          alt="Person directing a film"
          fill
          className="object-cover"
          data-ai-hint="film director cinematic"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-white max-w-2xl flex-grow flex flex-col justify-center">
        <div className="flex flex-col items-start space-y-4 md:space-y-6">
          <div className="bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
            Masterclass
          </div>

          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-white leading-tight" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
            Devenez Réalisateur
          </h1>

          <p className="text-lg md:text-xl text-neutral-200 max-w-lg">
            Apprenez à écrire, tourner et monter votre propre court-métrage à Djibouti.
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
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="font-bold text-lg">5.0</span>
            <span className="text-neutral-400 text-sm">(Djibouti)</span>
          </div>

          <Button 
            onClick={onScrollToForm}
            size="lg"
            className="mt-4 bg-primary text-primary-foreground h-14 px-8 text-lg font-bold rounded-md hover:bg-primary/90 transition-transform duration-200 hover:scale-105 shadow-lg shadow-primary/30"
          >
            <Play className="w-6 h-6 mr-3 fill-white" />
            Commencer l'aventure
          </Button>
        </div>
      </div>

      {/* Program Section Overlay */}
      <div className="relative z-10 w-full pb-8 md:pb-12">
        <ProgramSection />
      </div>
    </section>
  );
}
