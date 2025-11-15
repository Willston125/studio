
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
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Ambiance cinéma"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-section-overlay" />
      </div>
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 sm:py-32">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 lg:items-start">
            
            {/* Colonne de Droite (devient la 2e sur mobile): Sidebar de Conversion */}
            <div className="w-full lg:w-4/12 mt-12 lg:mt-0">
                <div className="space-y-8">
                    <RegistrationSidebar
                      isSubmitDisabled={isSubmitDisabled}
                      isSubmitting={isSubmitting}
                      onSubmit={form.handleSubmit(onSubmit)}
                    />
                </div>
            </div>

            {/* Colonne de Gauche (devient la 1ere sur mobile): Formulaire */}
            <div className="w-full lg:w-8/12">
                <RegistrationForm form={form} onSubmit={onSubmit} />
            </div>

        </div>
      </main>
    </div>
  );
}
