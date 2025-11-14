
'use client';

import RegistrationForm from '@/components/cine-enroll/registration-form';

export default function InscriptionPage() {
  return (
    <main id="registration-form" className="min-h-screen container mx-auto px-4 py-24 md:py-28">
      <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-xl shadow-2xl shadow-primary/10 backdrop-blur-sm">
        <RegistrationForm />
      </div>
    </main>
  );
}
