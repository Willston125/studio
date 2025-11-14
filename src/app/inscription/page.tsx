
'use client';

import Image from 'next/image';
import RegistrationForm from '@/components/cine-enroll/registration-form';

export default function InscriptionPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Ambiance cinéma"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-section-overlay" />
      </div>
      <main className="relative z-10 w-full max-w-4xl py-12">
        <RegistrationForm />
      </main>
    </div>
  );
}
