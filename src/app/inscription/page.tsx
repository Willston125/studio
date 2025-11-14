
'use client';

import RegistrationForm from '@/components/cine-enroll/registration-form';
import Image from 'next/image';

export default function InscriptionPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#121212]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Ambiance cinéma"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <main id="registration-form" className="relative z-10 container mx-auto px-4 py-24 md:py-28">
        <div className="max-w-4xl mx-auto bg-[#1A1A1A]/80 border border-white/10 rounded-xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <RegistrationForm />
        </div>
      </main>
    </div>
  );
}
