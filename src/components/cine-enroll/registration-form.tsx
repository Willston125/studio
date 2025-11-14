"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import type { RegistrationSchema } from "@/lib/schema";
import { registrationSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      date_naissance: "",
      email: "",
      telephone: "",
      profession: "",
      materiel: [],
      logiciels: "",
      attentes: "",
      engagement1: false,
      engagement2: false,
      engagement3: false,
      date_jour: new Date().toLocaleDateString("fr-FR", { year: 'numeric', month: '2-digit', day: '2-digit' }),
      signature: "",
    },
    mode: 'onChange'
  });

  const watchEngagements = form.watch(["engagement1", "engagement2", "engagement3"]);
  const isSubmitDisabled = !watchEngagements.every(Boolean) || isSubmitting;

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
    <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12">
      <header className="text-center mb-10">
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight">
            Bienvenue !
        </h1>
        <p className="font-body text-lg text-gray-600 mt-2">
            Créez votre compte pour rejoindre l'Académie.
        </p>
      </header>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
          <div className="grid grid-cols-1 gap-6">
            <FormField name="nom" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Nom</FormLabel><FormControl><Input placeholder="Dupont" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField name="prenom" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Prénom</FormLabel><FormControl><Input placeholder="Arnaud" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
             <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Adresse mail</FormLabel><FormControl><Input placeholder="votre@email.com" type="email" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
             <FormField name="telephone" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Téléphone</FormLabel><FormControl><Input placeholder="+253 XX XX XX XX" type="tel" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>

          <FormField name="niveau" control={form.control} render={({ field }) => (
              <FormItem className="space-y-3 pt-4">
                <FormLabel>Votre niveau en réalisation</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col sm:flex-row gap-4 pt-2">
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="debutant" /></FormControl><FormLabel className="font-normal text-gray-700">Débutant(e)</FormLabel></FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="intermediaire" /></FormControl><FormLabel className="font-normal text-gray-700">Intermédiaire</FormLabel></FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="avance" /></FormControl><FormLabel className="font-normal text-gray-700">Avancé(e)</FormLabel></FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-medium text-gray-800">Engagement</h3>
            <FormField name="engagement1" control={form.control} render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm font-normal text-gray-600">Je confirme avoir lu et accepté les conditions de participation.</FormLabel><FormMessage /></div></FormItem>
            )} />
            <FormField name="engagement2" control={form.control} render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm font-normal text-gray-600">Je m'engage à être présent(e) à toutes les sessions du cours.</FormLabel><FormMessage /></div></FormItem>
            )} />
             <FormField name="engagement3" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm font-normal text-gray-600">Je comprends que le paiement est non-remboursable.</FormLabel><FormMessage /></div></FormItem>
              )} />
          </div>

          <div className="flex flex-col items-center pt-6 space-y-4">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-bold text-lg rounded-full bg-primary text-primary-foreground h-14"
              disabled={isSubmitDisabled}
            >
              {isSubmitting ? 'Redirection...' : "S'inscrire via WhatsApp"}
            </Button>
            <p className="text-sm text-gray-500">
                Vous avez déjà un compte ? <a href="#" className="font-semibold text-primary hover:underline">Connectez-vous !</a>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
