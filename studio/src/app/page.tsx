"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PathfinderSection from '@/components/cine-enroll/pathfinder-section';
import CheckerboardSection from '@/components/cine-enroll/checkerboard-section';
import PricingGridSection from '@/components/cine-enroll/pricing-grid-section';
import AlumniWallSection from '@/components/cine-enroll/alumni-wall-section';
import FinalCTASection from '@/components/cine-enroll/final-cta-section';
import CurriculumSection from '@/components/cine-enroll/curriculum-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
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

      {/* QUEL EST VOTRE BUT ? - Nouveau solid-nav-bar */}
      <PathfinderSection />

      {/* CHECKERBOARD - Tech d'abord & Une Famille */}
      <CheckerboardSection />

      {/* TARIFS - Nouveau pricing-grid-section */}
      <PricingGridSection />

      {/* ALUMNI WALL - Nos Anciens Élèves / Films */}
      <AlumniWallSection />

      {/* FINAL CTA - Inscriptions 2026 */}
      <FinalCTASection />

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
