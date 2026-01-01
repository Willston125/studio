"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PathfinderSection from '@/components/cine-enroll/pathfinder-section';
import SolidPricingSection from '@/components/cine-enroll/solid-pricing-section';
import ExperienceSection from '@/components/cine-enroll/experience-section';
import CurriculumSection from '@/components/cine-enroll/curriculum-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import AlumniSection from '@/components/cine-enroll/alumni-section';
import NextStepsSection from '@/components/cine-enroll/next-steps-section';
import PremiumFooter from '@/components/cine-enroll/premium-footer';
import { FilmGrainOverlay } from '@/components/ui/cinema-effects';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Cinema Film Grain Overlay */}
      <FilmGrainOverlay />

      {/* HERO - Conservé */}
      <div className="mt-32 mb-20">
        <HeroSection />
      </div>

      {/* QUEL PARCOURS POUR VOUS ? - Nouveau (style NYFA jaune) */}
      <PathfinderSection />

      {/* L'EXPÉRIENCE CINEWORLD - Nouveau */}
      <ExperienceSection />

      {/* TARIFS - Nouveau design solide minimaliste */}
      <SolidPricingSection />

      {/* CURRICULUM - Conservé mais intégré */}
      <CurriculumSection />

      {/* PHOTO GALLERY - Conservé (En Immersion sur les Tournages) */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <PhotoGallery />
        </div>
      </div>

      {/* NOS ANCIENS ÉLÈVES - Nouveau (remplace Testimonials) */}
      <AlumniSection />

      {/* PROCHAINE ÉTAPE - Nouveau CTA final */}
      <NextStepsSection />

      {/* FOOTER PREMIUM - Nouveau */}
      <PremiumFooter />
    </div>
  );
}
