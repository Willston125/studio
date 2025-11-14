"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Award, Film, RadioTower, User, PenSquare, Smartphone, Camera, Video, Monitor } from "lucide-react";
import Image from "next/image";
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

import ExpectationsField from "./expectations-field";
import FilmStripProgressBar from "./film-strip-progress-bar";

const equipmentOptions = [
  { id: "smartphone", label: "Smartphone", icon: <Smartphone className="mr-3 text-primary" /> },
  { id: "camera", label: "Appareil photo / Caméra simple", icon: <Camera className="mr-3 text-primary" /> },
  { id: "dslr", label: "DSLR / Mirrorless", icon: <Video className="mr-3 text-primary" /> },
  { id: "professional", label: "Matériel professionnel", icon: <Monitor className="mr-3 text-primary" /> },
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
      date_jour: new Date().toLocaleDateString("fr-FR", { year: 'numeric', month: '2-digit', day: '2-digit' }),
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
      
      const intro = `Bonjour, je m'appelle ${prenom} ${nom}. Je souhaite m'inscrire à l'Académie Cineworld au prix actuel de 30 000 FDJ, merci de me garder une place.`;

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
      <header className="text-center pt-8 md:pt-12 px-8">
        <FilmStripProgressBar progress={progress} />
        <div className="flex justify-center my-8">
            <Image 
              src="/logo_cineworld.png"
              alt="Cineworld Logo"
              width={200}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
        </div>
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-white/90" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Fiche d’Inscription
        </h1>
        <p className="font-body text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Rejoignez l'Académie Cineworld et donnez vie à vos projets cinématographiques.
        </p>
      </header>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16 p-8 md:p-16">
            
          {/* Section 1: Informations Personnelles */}
          <section className="space-y-8">
            <h2 className="flex items-center gap-3 text-2xl font-headline text-amber-500">
              <User />
              Partie 1 : Informations Personnelles
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <FormField name="nom" control={form.control} render={({ field }) => (
                <FormItem><FormLabel className="text-gray-300">Nom</FormLabel><FormControl><Input placeholder="Votre nom" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="prenom" control={form.control} render={({ field }) => (
                <FormItem><FormLabel className="text-gray-300">Prénom</FormLabel><FormControl><Input placeholder="Votre prénom" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="date_naissance" control={form.control} render={({ field }) => (
                <FormItem><FormLabel className="text-gray-300">Date de naissance</FormLabel><FormControl><Input placeholder="JJ/MM/AAAA" type="date" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem><FormLabel className="text-gray-300">Email</FormLabel><FormControl><Input placeholder="votre@email.com" type="email" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="telephone" control={form.control} render={({ field }) => (
                <FormItem><FormLabel className="text-gray-300">Téléphone</FormLabel><FormControl><Input placeholder="+253 XX XX XX XX" type="tel" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="profession" control={form.control} render={({ field }) => (
                <FormItem><FormLabel className="text-gray-300">Profession</FormLabel><FormControl><Input placeholder="Ex: Étudiant, Cadreur, ..." {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
          </section>

          {/* Section 2: Votre Expérience */}
          <section className="space-y-8">
            <h2 className="flex items-center gap-3 text-2xl font-headline text-amber-500">
              <Film />
              Partie 2 : Votre Expérience
            </h2>
            <FormField name="niveau" control={form.control} render={({ field }) => (
              <FormItem className="space-y-3"><FormLabel className="text-gray-300">Votre niveau en réalisation</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col md:flex-row gap-4 pt-2">
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="debutant" /></FormControl><FormLabel className="font-normal text-gray-300">Débutant(e)</FormLabel></FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="intermediaire" /></FormControl><FormLabel className="font-normal text-gray-300">Intermédiaire</FormLabel></FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="avance" /></FormControl><FormLabel className="font-normal text-gray-300">Avancé(e)</FormLabel></FormItem>
                  </RadioGroup>
                </FormControl><FormMessage />
              </FormItem>
            )} />
            <FormField name="materiel" control={form.control} render={() => (
              <FormItem>
                  <div className="mb-4">
                      <FormLabel className="text-gray-300">De quel matériel disposez-vous ?</FormLabel>
                      <FormDescription>Cochez tout ce qui s'applique.</FormDescription>
                  </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {equipmentOptions.map((item) => (
                    <FormField key={item.id} control={form.control} name="materiel" render={({ field }) => (
                      <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent/50 transition-colors bg-white/5 border-white/10">
                          {React.cloneElement(item.icon, { className: "mr-3 text-amber-500" })}
                          <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                            return checked ? field.onChange([...(field.value || []), item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                          }} /></FormControl>
                          <FormLabel className="font-normal text-sm text-gray-300">{item.label}</FormLabel>
                      </FormItem>
                    )} />
                  ))}
                </div><FormMessage />
              </FormItem>
            )} />
            <FormField name="logiciels" control={form.control} render={({ field }) => (
              <FormItem><FormLabel className="text-gray-300">Quels logiciels de montage utilisez-vous ? (Optionnel)</FormLabel><FormControl><Textarea placeholder="Listez les logiciels que vous connaissez (ex: DaVinci Resolve, Adobe Premiere Pro...)" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </section>

          {/* Section 3: Modalités */}
          <section className="space-y-6 bg-black/30 p-6 rounded-lg border border-amber-500/30 shadow-lg shadow-amber-500/10">
             <h2 className="flex items-center justify-center gap-3 text-2xl font-headline text-amber-500">
              <RadioTower className="animate-pulse" />
              Offre de Formation
            </h2>
            <div className="text-center space-y-2">
              <p className="text-lg text-gray-300">Tarif Session 2025</p>
              <div>
                <span className="text-xl text-muted-foreground line-through mr-4">40 000 FDJ</span>
                <strong className="font-bold text-amber-500 text-3xl font-headline">30 000 FDJ</strong>
              </div>
            </div>
          </section>

          {/* Section 4: Le Défi Final + Engagement */}
          <section className="space-y-8 pt-6">
            <h2 className="flex items-center gap-3 text-2xl font-headline text-amber-500">
              <Award />
              Partie 3 : Le Défi Final
            </h2>
            <div className="text-center py-8 prize-section rounded-lg my-6">
              <div className="font-headline text-5xl md:text-6xl font-black flex flex-col items-center prize-text">
                <span>Le meilleur film gagne</span>
                <span className="mt-2">200 000 FDJ !</span>
              </div>
            </div>
            <ExpectationsField />

            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="flex items-center gap-3 text-xl font-headline text-amber-500">
                <PenSquare />
                Engagement et Signature
              </h3>
              <FormField name="engagement1" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm font-normal text-gray-300">Je confirme avoir lu et accepté les conditions de participation.</FormLabel><FormMessage /></div></FormItem>
              )} />
              <FormField name="engagement2" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm font-normal text-gray-300">Je m'engage à être présent(e) à toutes les sessions du cours.</FormLabel><FormMessage /></div></FormItem>
              )} />
              <FormField name="engagement3" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="text-sm font-normal text-gray-300">Je comprends que le paiement est non-remboursable.</FormLabel><FormMessage /></div></FormItem>
              )} />
              
              <div className="grid grid-cols-1 gap-8 pt-4">
                <FormField name="date_jour" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel className="text-gray-300">Date du jour</FormLabel><FormControl><Input {...field} readOnly /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="signature" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel className="text-gray-300">Signature (Écrivez votre nom complet)</FormLabel><FormControl><Input placeholder="Votre nom complet" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
            </div>
          </section>

          <div className="flex justify-center pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-headline text-2xl tracking-wider transition-all duration-300 transform hover:scale-105 bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:brightness-110"
              disabled={isSubmitDisabled}
            >
              {isSubmitting ? 'Redirection...' : 'Pré-inscrire via WhatsApp'}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="text-center p-8 border-t border-white/10 text-sm text-muted-foreground space-y-2">
          <p>Formateur: Ali William</p>
          <p>Contact: <a href="mailto:cineworlddjibouti@outlook.fr" className="hover:text-amber-500">cineworlddjibouti@outlook.fr</a></p>
          <p className="font-headline text-base text-foreground/80 mt-4 italic">"LE CINEMA C'EST #QUEDUBON"</p>
      </footer>
    </>
  );
}
