"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import TestimonialsSection from '@/components/cine-enroll/testimonials-section';
import WhyChooseUsSection from '@/components/cine-enroll/why-choose-us-section';
import FestivalSection from '@/components/cine-enroll/festival-section';
import { Divider } from '@/components/ui/divider';

export default function Home() {
  return (
    <div className="bg-background">
      <div className="mt-32 mb-20">
        <HeroSection />
      </div>

      <Divider variant="gold" />

      <Divider />

      <main>
        <WhyChooseUsSection />

        <Divider variant="gold" />

        <div className="container mx-auto px-4">
          <PhotoGallery />
        </div>

        <Divider />

        <FestivalSection />

        <Divider />

        <TestimonialsSection />
      </main>
    </div>
  );
}
