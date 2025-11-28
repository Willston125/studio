'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

import type { RegistrationSchema } from '@/lib/schema';
import { registrationSchema } from '@/lib/schema';

import RegistrationForm from '@/components/cine-enroll/registration-form';

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
    <RegistrationForm form={form} onSubmit={onSubmit} />
  );
}
