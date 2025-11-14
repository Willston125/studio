"use client";

import { useRef } from 'react';
import RegistrationForm from '@/components/cine-enroll/registration-form';
import HeroSection from '@/components/cine-enroll/hero-section';
import ProgramSection from '@/components/cine-enroll/program-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onScrollToForm={handleScrollToForm} />
      <ProgramSection />
      <PhotoGallery />
      <main ref={formRef} id="registration-form" className="min-h-screen container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <RegistrationForm />
        </div>
      </main>
    </>
  );
}
