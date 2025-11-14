"use client";

import HeroSection from '@/components/cine-enroll/hero-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <PhotoGallery />
      </main>
    </>
  );
}
