
"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import TestimonialsSection from '@/components/cine-enroll/testimonials-section';
import WhyChooseUsSection from '@/components/cine-enroll/why-choose-us-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <WhyChooseUsSection />
        <PhotoGallery />
        <TestimonialsSection />
      </main>
    </>
  );
}
