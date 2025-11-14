import RegistrationForm from '@/components/cine-enroll/registration-form';

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-8 md:py-16 animate-in fade-in duration-1000 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto bg-card/50 border border-border/50 rounded-xl shadow-2xl shadow-primary/10">
        <RegistrationForm />
      </div>
    </main>
  );
}
