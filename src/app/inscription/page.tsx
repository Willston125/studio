
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
      const {
        nom,
        prenom,
        email,
        telephone,
        adresse,
        ville,
        quartier,
        niveau,
        materiel,
        attentes
      } = data;

      const intro = `Bonjour, je m'appelle ${prenom} ${nom}. Je souhaite m'inscrire à cette formation au prix actuel de 20 000 FDJ, merci de me garder une place.`;

      const details = [
        `\n\n--- RÉSUMÉ DE MON INSCRIPTION ---`,
        `\n*VOS INFORMATIONS :*`,
        `- Nom : ${nom}`,
        `- Prénom : ${prenom}`,
        `- Email : ${email}`,
        `- Téléphone : ${telephone}`,
        adresse ? `- Adresse : ${adresse}` : null,
        ville ? `- Ville : ${ville}` : null,
        quartier ? `- Quartier : ${quartier}` : null,
        `\n*VOTRE EXPÉRIENCE :*`,
        `- Niveau : ${niveau || 'Non spécifié'}`,
        `- Matériel : ${materiel.join(', ') || 'Aucun'}`,
        `\n*VOS ATTENTES :*`,
        `- ${attentes}`,
        `\n\n---`,
        `\nNote: J'ai bien rempli le formulaire. J'enverrai ma photo d'identité immédiatement dans ce fil de discussion.`
      ].filter(Boolean).join('\n');

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
            const {
              nom,
              prenom,
              email,
              telephone,
              adresse,
              ville,
              quartier,
              niveau,
              materiel,
              attentes
            } = data;

            const intro = `Bonjour, je m'appelle ${prenom} ${nom}. Je souhaite m'inscrire à cette formation au prix actuel de 20 000 FDJ, merci de me garder une place.`;

            const details = [
              `\n\n--- RÉSUMÉ DE MON INSCRIPTION ---`,
              `\n*VOS INFORMATIONS :*`,
              `- Nom : ${nom}`,
              `- Prénom : ${prenom}`,
              `- Email : ${email}`,
              `- Téléphone : ${telephone}`,
              adresse ? `- Adresse : ${adresse}` : null,
              ville ? `- Ville : ${ville}` : null,
              quartier ? `- Quartier : ${quartier}` : null,
              `\n*VOTRE EXPÉRIENCE :*`,
              `- Niveau : ${niveau || 'Non spécifié'}`,
              `- Matériel : ${materiel.join(', ') || 'Aucun'}`,
              `\n*VOS ATTENTES :*`,
              `- ${attentes}`,
              `\n\n---`,
              `\nNote: J'ai bien rempli le formulaire. J'enverrai ma photo d'identité immédiatement dans ce fil de discussion.`
            ].filter(Boolean).join('\n');

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
          <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

            {/* 1. COLONNE GAUCHE (MENTOR) - 40% */}
            <div className="relative w-full lg:w-5/12 h-[40vh] lg:h-screen lg:fixed lg:left-0 lg:top-0 z-0 border-r border-white/10">
              <Image
                src="/formateur.png"
                alt="Ali William - Formateur"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent lg:via-black/30" />

              {/* Text Content (Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 z-10 pb-12 space-y-2">
                <div className="inline-block bg-amber-500 text-black font-bold px-3 py-1 text-xs tracking-widest uppercase rounded-sm mb-2">
                  Votre Mentor
                </div>
                <h2 className="text-5xl lg:text-7xl font-headline font-black text-white leading-[0.85] drop-shadow-2xl">
                  ALI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">WILLIAM</span>
                </h2>
                <p className="text-gray-300 font-body italic text-lg lg:text-xl font-light border-l-4 border-amber-500 pl-4 mt-4">
                  "Le cinéma n'est pas un métier, c'est une urgence."
                </p>
              </div>
            </div>

            {/* 2. COLONNE DROITE (FORMULAIRE) - 60% */}
            <div className="w-full lg:w-7/12 lg:ml-auto relative z-10 bg-[#0a0a0a]">
              <div className="px-4 py-12 md:px-12 lg:px-20 lg:py-24 max-w-3xl mx-auto space-y-12">

                {/* Header Mobile Only (if needed) */}

                {/* Formulaire */}
                <div className="w-full">
                  <RegistrationForm form={form} onSubmit={onSubmit} />
                </div>

                {/* Sidebar (Conversion & Validation) - Stacked Below */}
                <div className="w-full">
                  <div className="bg-neutral-900/50 rounded-3xl p-1 border border-white/10">
                    <RegistrationSidebar
                      isSubmitDisabled={isSubmitDisabled}
                      isSubmitting={isSubmitting}
                      onSubmit={form.handleSubmit(onSubmit)}
                    />
                  </div>
                  <p className="text-center text-gray-500 text-xs mt-6">
                    Cineworld Djibouti Studio • Tous droits réservés
                  </p>
                </div>

              </div>
            </div>

          </div>
        );
      }
