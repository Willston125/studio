
"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import TestimonialsSection from '@/components/cine-enroll/testimonials-section';
import WhyChooseUsSection from '@/components/cine-enroll/why-choose-us-section';

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <main>
        <div className="my-24">
          <WhyChooseUsSection />
        </div>
        <div className="container mx-auto px-4 my-24">
            <PhotoGallery />
        </div>
        <div className="my-24">
          <TestimonialsSection />
        </div>
      </main>
    </div>
  );
}
