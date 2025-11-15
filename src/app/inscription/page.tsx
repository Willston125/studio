
'use client';

import Image from 'next/image';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

import type { RegistrationSchema } from '@/lib/schema';
import { registrationSchema } from '@/lib/schema';

import RegistrationForm from '@/components/cine-enroll/registration-form';
import RegistrationSidebar from '@/components/cine-enroll/registration-sidebar';

export default function InscriptionPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      adresse: "",
      ville: "",
      quartier: "",
      materiel: [],
      logiciels: "",
      attentes: "",
      engagement1: false,
      engagement2: false,
      engagement3: false,
      date_jour: new Date().toLocaleDateString("fr-FR", { year: 'numeric', month: '2-digit', day: '2-digit' }),
    },
    mode: 'onChange'
  });

  const watchEngagements = form.watch(["engagement1", "engagement2", "engagement3"]);
  const isSubmitDisabled = !watchEngagements.every(Boolean) || isSubmitting || !form.formState.isValid;

  function onSubmit(data: RegistrationSchema) {
    setIsSubmitting(true);
    try {
      const { nom, prenom, email, niveau } = data;
      
      const intro = `Bonjour, je m'appelle ${prenom} ${nom}. Je souhaite m'inscrire à l'Académie Cineworld.`;

      const details = [
        `\n\n--- RÉSUMÉ ---`,
        `- Email: ${email}`,
        `- Niveau: ${niveau || 'Non spécifié'}`,
      ].join('\n');

      const message = intro + details;
      const whatsappUrl = `https://wa.me/25377556344?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirection vers WhatsApp",
        description: "Veuillez envoyer le message pré-rempli pour finaliser votre pré-inscription.",
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <div className="relative min-h-screen w-full flex items-start justify-center p-4 pt-28 md:p-8 overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Ambiance cinéma"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-section-overlay" />
      </div>
      <main className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-12">
            
            {/* Colonne de Gauche : Formulaire */}
            <div className="lg:col-span-6">
                <RegistrationForm form={form} onSubmit={onSubmit} />
            </div>

            {/* Colonne de Droite : Sidebar de Conversion */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="sticky top-28 space-y-8">
                    <RegistrationSidebar
                      isSubmitDisabled={isSubmitDisabled}
                      isSubmitting={isSubmitting}
                      onSubmit={form.handleSubmit(onSubmit)}
                    />
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
