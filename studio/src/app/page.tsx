"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import TestimonialsSection from '@/components/cine-enroll/testimonials-section';
import ProgramPackagesSection from '@/components/cine-enroll/program-packages-section';
import CurriculumSection from '@/components/cine-enroll/curriculum-section';

import WhyChooseUsSection from '@/components/cine-enroll/why-choose-us-section';
import { Divider } from '@/components/ui/divider';
import { FilmGrainOverlay } from '@/components/ui/cinema-effects';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Cinema Film Grain Overlay */}
      <FilmGrainOverlay />

      <div className="mt-32 mb-20">
        <HeroSection />
      </div>

      <Divider variant="gold" />

      <ProgramPackagesSection />

      <Divider variant="gold" />

      <CurriculumSection />

      <Divider variant="gold" />

      <main>
        <WhyChooseUsSection />

        <Divider variant="gold" />

        <div className="container mx-auto px-4">
          <PhotoGallery />
        </div>



        <TestimonialsSection />
      </main>
    </div>
  );
}
