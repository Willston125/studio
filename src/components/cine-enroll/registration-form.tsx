"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Award, Film, RadioTower, User, PenSquare, BookOpen, Camera, Users, Scissors } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import type { RegistrationSchema } from "@/lib/schema";
import { registrationSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

import CountdownTimer from "./countdown-timer";
import ExpectationsField from "./expectations-field";
import FilmStripProgressBar from "./film-strip-progress-bar";

const equipmentOptions = [
  { id: "smartphone", label: "Smartphone" },
  { id: "camera", label: "Appareil photo / Caméra simple" },
  { id: "dslr", label: "DSLR / Mirrorless" },
  { id: "professional", label: "Matériel professionnel" },
];

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

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
      date_jour: new Date().toLocaleDateString("fr-FR"),
      signature: "",
    },
    mode: 'onChange'
  });
  
  React.useEffect(() => {
    const calculateProgress = () => {
      const data = form.getValues();
      const totalFields = 11; // Adjusted total number of fields to check for a more granular progress
      let completedFields = 0;
      
      if (data.nom) completedFields++;
      if (data.prenom) completedFields++;
      if (data.date_naissance) completedFields++;
      if (data.email && registrationSchema.shape.email.safeParse(data.email).success) completedFields++;
      if (data.telephone) completedFields++;
      if (data.profession) completedFields++;
      if (data.niveau) completedFields++;
      if (data.materiel.length > 0) completedFields++;
      if (data.attentes.length > 10) completedFields++; // Partial progress for expectations
      if (data.signature) completedFields++;
      if (data.engagement1 && data.engagement2 && data.engagement3) completedFields++;
      
      setProgress((completedFields / totalFields) * 100);
    };

    const subscription = form.watch(calculateProgress);
    return () => subscription.unsubscribe();
  }, [form]);


  const watchEngagements = form.watch(["engagement1", "engagement2", "engagement3"]);
  const isSubmitDisabled = !watchEngagements.every(Boolean) || isSubmitting;

  function onSubmit(data: RegistrationSchema) {
    setIsSubmitting(true);
    try {
      const { nom, prenom, date_naissance, email, telephone, profession, niveau, materiel, logiciels, attentes } = data;
      
      const intro = `Bonjour, je m'appelle ${prenom} ${nom}. Je souhaite m'inscrire à cette formation au prix actuel de 30 000 FDJ, merci de me garder une place.`;

      const details = [
        `\n\n--- RÉSUMÉ DE L'INSCRIPTION ---`,
        `- Date de naissance: ${date_naissance}`,
        `- Email: ${email}`,
        `- Téléphone: ${telephone}`,
        `- Profession: ${profession}`,
        `- Niveau: ${niveau}`,
        `- Matériel: ${materiel.join(', ') || 'Non spécifié'}`,
        `- Logiciels: ${logiciels || 'Non spécifié'}`,
        `- Attentes: ${attentes}`
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
    <>
      <header className="text-center pt-8 md:pt-12 px-4">
        <FilmStripProgressBar progress={progress} />
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white mt-8" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Fiche d’Inscription
        </h1>
        <p className="font-headline text-2xl text-primary mt-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            Masterclass Cinéma
        </p>
        <div className="mt-4 text-sm text-white/80 space-y-1 max-w-lg mx-auto">
            <p>Session: 1 mois - 2 fois / semaine - 4h par session.</p>
            <p>Écriture de scénario – Découpage technique – Réalisation – Montage.</p>
        </div>
      </header>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 p-8 md:p-12">
            
          {/* Section 1: Informations Personnelles */}
          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-2xl font-headline">
              <User className="text-primary" />
              Partie 1 : Informations Personnelles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="nom" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Nom</FormLabel><FormControl><Input placeholder="Votre nom" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="prenom" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Prénom</FormLabel><FormControl><Input placeholder="Votre prénom" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="date_naissance" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Date de naissance</FormLabel><FormControl><Input placeholder="JJ/MM/AAAA" type="date" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="votre@email.com" type="email" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="telephone" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Téléphone</FormLabel><FormControl><Input placeholder="+253 XX XX XX XX" type="tel" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="profession" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Profession</FormLabel><FormControl><Input placeholder="Ex: Étudiant, Cadreur, ..." {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
          </section>

          {/* Section 2: Votre Expérience */}
          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-2xl font-headline">
              <Film className="text-primary" />
              Partie 2 : Votre Expérience
            </h2>
            <FormField name="niveau" control={form.control} render={({ field }) => (
              <FormItem className="space-y-3"><FormLabel>Votre niveau en réalisation</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col md:flex-row gap-4">
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="debutant" /></FormControl><FormLabel className="font-normal">Débutant(e)</FormLabel></FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="intermediaire" /></FormControl><FormLabel className="font-normal">Intermédiaire</FormLabel></FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="avance" /></FormControl><FormLabel className="font-normal">Avancé(e)</FormLabel></FormItem>
                  </RadioGroup>
                </FormControl><FormMessage />
              </FormItem>
            )} />
            <FormField name="materiel" control={form.control} render={() => (
              <FormItem><FormLabel>De quel matériel disposez-vous ?</FormLabel>
                <FormDescription>Cochez tout ce qui s'applique.</FormDescription>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {equipmentOptions.map((item) => (
                    <FormField key={item.id} control={form.control} name="materiel" render={({ field }) => (
                      <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent/50 transition-colors">
                        <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                          return checked ? field.onChange([...(field.value || []), item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                        }} /></FormControl>
                        <FormLabel className="font-normal text-sm">{item.label}</FormLabel>
                      </FormItem>
                    )} />
                  ))}
                </div><FormMessage />
              </FormItem>
            )} />
            <FormField name="logiciels" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Quels logiciels de montage utilisez-vous ? (Optionnel)</FormLabel><FormControl><Textarea placeholder="Listez les logiciels que vous connaissez (ex: DaVinci Resolve, Adobe Premiere Pro...)" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </section>

          {/* Section 3: Modalités et Urgence */}
          <section className="space-y-6 bg-card/80 p-6 rounded-lg border border-primary/50 shadow-lg shadow-primary/10">
             <h2 className="flex items-center justify-center gap-3 text-2xl font-headline">
              <RadioTower className="text-primary animate-pulse" />
              Offre à Durée Limitée
            </h2>
            <div className="text-center space-y-4">
              <p className="text-lg">Tarif préférentiel : <strong className="font-bold text-primary text-xl line-through">40 000 FDJ</strong> <strong className="font-bold text-yellow-400 text-2xl">30 000 FDJ</strong></p>
              <p className="text-sm text-muted-foreground">Fin des inscriptions dans :</p>
              <CountdownTimer />
            </div>
          </section>

          {/* Section 4: Le Défi Final + Engagement */}
          <section className="space-y-8 pt-6">
            <h2 className="flex items-center gap-3 text-2xl font-headline">
              <Award className="text-primary" />
              Partie 3 : Le Défi Final
            </h2>
            <div className="text-center py-8 prize-section rounded-lg my-6">
              <div className="font-headline text-5xl md:text-6xl font-black flex flex-col items-center prize-text">
                <span>Le meilleur film gagne</span>
                <span className="mt-2">200 000 FDJ !</span>
              </div>
            </div>
            <ExpectationsField />

            <div className="space-y-6 pt-6 border-t border-border/50">
              <h3 className="flex items-center gap-3 text-xl font-headline">
                <PenSquare className="text-primary"/>
                Engagement et Signature
              </h3>
              <FormField name="engagement1" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm">Je confirme avoir lu et accepté les conditions de participation.</FormLabel><FormMessage /></div></FormItem>
              )} />
              <FormField name="engagement2" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm">Je m'engage à être présent(e) à toutes les sessions du cours.</FormLabel><FormMessage /></div></FormItem>
              )} />
              <FormField name="engagement3" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm">Je comprends que le paiement est non-remboursable.</FormLabel><FormMessage /></div></FormItem>
              )} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <FormField name="date_jour" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Date du jour</FormLabel><FormControl><Input {...field} readOnly /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="signature" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Signature (Écrivez votre nom complet)</FormLabel><FormControl><Input placeholder="Votre nom complet" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
            </div>
          </section>

          <div className="flex justify-center pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto font-bold text-lg tracking-wider transition-all duration-300 transform hover:scale-105 bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50"
              disabled={isSubmitDisabled}
            >
              {isSubmitting ? 'Redirection...' : 'Pré-inscrire via WhatsApp'}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="text-center p-8 border-t border-border/50 text-sm text-muted-foreground space-y-2">
          <p>Formateur: Ali William</p>
          <p>Contact: <a href="mailto:cineworlddjibouti@outlook.fr" className="hover:text-primary">cineworlddjibouti@outlook.fr</a></p>
          <p className="font-headline text-base text-foreground/80 mt-4 italic">"LE CINEMA C'EST #QUEDUBON"</p>
      </footer>
    </>
  );
}

    