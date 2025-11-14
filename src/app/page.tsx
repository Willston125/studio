"use client";

import { useRef } from 'react';
import RegistrationForm from '@/components/cine-enroll/registration-form';
import HeroSection from '@/components/cine-enroll/hero-section';

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onScrollToForm={handleScrollToForm} />
      <main ref={formRef} id="registration-form" className="min-h-screen container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-xl shadow-2xl shadow-primary/10">
          <RegistrationForm />
        </div>
      </main>
    </>
  );
}
