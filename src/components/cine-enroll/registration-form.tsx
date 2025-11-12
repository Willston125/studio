"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Award, Film, RadioTower, User, PenSquare, BookOpen, Camera, Users, Scissors } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

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
import PhotoGallery from "./photo-gallery";
import FilmStripProgressBar from "./film-strip-progress-bar";

const equipmentOptions = [
  { id: "smartphone", label: "Smartphone" },
  { id: "camera", label: "Appareil photo / Caméra simple" },
  { id: "dslr", label: "DSLR / Mirrorless" },
  { id: "professional", label: "Matériel professionnel" },
];

const programItems = [
    {
        icon: BookOpen,
        title: "Scénario & Storyboard",
        description: "Apprenez à structurer vos idées, écrire un script captivant et le visualiser plan par plan.",
    },
    {
        icon: Camera,
        title: "Techniques de Caméra & Lumière",
        description: "Maîtrisez les angles, les mouvements de caméra et l'art de sculpter la lumière pour créer l'ambiance parfaite.",
    },
    {
        icon: Users,
        title: "Direction d'Acteurs",
        description: "Sachez communiquer votre vision aux comédiens et en tirer des performances authentiques et puissantes.",
    },
    {
        icon: Scissors,
        title: "Montage Pro & Colorimétrie",
        description: "Donnez du rythme à votre film et sublimez vos images grâce au montage et à l'étalonnage des couleurs.",
    },
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
  
  const watchedFields = form.watch();

  React.useEffect(() => {
    const calculateProgress = () => {
      const data = form.getValues();
      let completedSections = 0;
      const totalSections = 4;

      // Section 1: Informations Personnelles
      const section1Fields: (keyof RegistrationSchema)[] = ['nom', 'prenom', 'date_naissance', 'email', 'telephone', 'profession'];
      const isSection1Complete = section1Fields.every(field => {
        const fieldSchema = registrationSchema.shape[field];
        return fieldSchema.safeParse(data[field]).success;
      });
      if (isSection1Complete) completedSections++;
      
      // Section 2: Votre Expérience
      const section2Fields: (keyof RegistrationSchema)[] = ['niveau', 'materiel'];
      const isSection2Complete = section2Fields.every(field => {
        const fieldSchema = registrationSchema.shape[field];
        return fieldSchema.safeParse(data[field]).success;
      });
      if (isSection2Complete) completedSections++;

      // Section 3: Modalités (considérée complète après la section 2, car elle ne contient pas de champs)
      if (isSection2Complete) {
          // This section is considered complete when section 2 is, as it has no inputs itself.
          completedSections++;
      }

      // Section 4: Engagement
      const section4Fields: (keyof RegistrationSchema)[] = ['attentes', 'engagement1', 'engagement2', 'engagement3', 'date_jour', 'signature'];
      const isSection4Complete = section4Fields.every(field => {
        // For checkboxes, just check they are true.
        if (['engagement1', 'engagement2', 'engagement3'].includes(field)) {
          return data[field] === true;
        }
        const fieldSchema = registrationSchema.shape[field];
        return fieldSchema.safeParse(data[field]).success;
      });
      if (isSection4Complete) completedSections++;
      
      setProgress((completedSections / totalSections) * 100);
    };

    const subscription = form.watch(() => calculateProgress());
    return () => subscription.unsubscribe();
  }, [form]);


  const watchEngagements = form.watch(["engagement1", "engagement2", "engagement3"]);
  const isSubmitDisabled = !watchEngagements.every(Boolean) || isSubmitting;

  function onSubmit(data: RegistrationSchema) {
    setIsSubmitting(true);
    try {
      const nom = data.nom;
      const prenom = data.prenom;
      const message = `Bonjour, je m'appelle ${prenom} ${nom}. Je souhaite m'inscrire à cette formation au prix actuel de 30 000 FDJ, merci de me garder une place`;
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
      <header className="group relative w-full h-64 md:h-80 border-b border-border/50 flex items-center justify-center overflow-hidden">
        <Image
          src="/galerie1.png"
          alt="Bannière de la masterclass de cinéma"
          fill
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          data-ai-hint="film training"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/logo_cineworld.png"
            alt="Logo Cineworld"
            fill
            className="object-contain"
          />
        </div>
      </header>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 p-8 md:p-12">
            <div className="text-center relative">
                <FilmStripProgressBar progress={progress} />
                <div className="flex justify-center gap-4 mb-4 mt-8">
                    <div className="bg-yellow-500/10 border border-yellow-400 text-yellow-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                        Premium
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-400 text-yellow-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                        Exclusif
                    </div>
                </div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    FICHE D’INSCRIPTION
                </h1>
                <p className="font-headline text-2xl text-primary mt-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                    COURS DE CINÉMA
                </p>
                <div className="mt-4 text-sm text-white/80 space-y-1">
                    <p>Session: 1 mois - 2 fois / semaine - 4h</p>
                    <p>Écriture de scénario – Découpage technique – Réalisation – Montage</p>
                </div>
            </div>

          {/* Section 1: Informations Personnelles */}
          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-2xl font-headline text-foreground">
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
                <FormItem><FormLabel>Date de naissance</FormLabel><FormControl><Input placeholder="JJ/MM/AAAA" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="votre@email.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="telephone" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Téléphone</FormLabel><FormControl><Input placeholder="+XXX XX XX XX XX" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField name="profession" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Profession</FormLabel><FormControl><Input placeholder="Votre profession" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
          </section>

          <PhotoGallery />
          
          {/* Section: Programme de la Formation */}
          <section className="space-y-8 bg-card/80 p-6 md:p-8 rounded-xl border border-border/50">
            <h2 className="text-center text-2xl md:text-3xl font-headline text-foreground">
              Programme de la Formation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 transition-all duration-300 hover:bg-background hover:shadow-lg hover:shadow-primary/10">
                            <div className="p-4 bg-primary/10 rounded-full mb-4 border border-primary/20">
                                <Icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    );
                })}
            </div>
          </section>

          {/* Section 2: Votre Expérience */}
          <section className="space-y-6">
            <h2 className="flex items-center gap-3 text-2xl font-headline text-foreground">
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
                <div className="grid grid-cols-2 gap-4">
                  {equipmentOptions.map((item) => (
                    <FormField key={item.id} control={form.control} name="materiel" render={({ field }) => (
                      <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                          return checked ? field.onChange([...(field.value || []), item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                        }} /></FormControl>
                        <FormLabel className="font-normal">{item.label}</FormLabel>
                      </FormItem>
                    )} />
                  ))}
                </div><FormMessage />
              </FormItem>
            )} />
            <FormField name="logiciels" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>Quels logiciels de montage utilisez-vous ?</FormLabel><FormControl><Textarea placeholder="Listez les logiciels que vous connaissez (ex: DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro...)" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </section>

          {/* Section 3: Modalités et Urgence */}
          <section className="space-y-6 bg-card p-6 rounded-lg border border-primary/50 shadow-lg">
             <h2 className="flex items-center gap-3 text-2xl font-headline text-foreground">
              <RadioTower className="text-primary" />
              Partie 3 : Modalités et Urgence
            </h2>
            <div className="text-center space-y-4">
              <p className="text-lg">Offre limitée : <strong className="font-bold text-primary text-xl">30 000 FDJ</strong> au lieu de 40 000 FDJ — Fin des inscriptions dans :</p>
              <CountdownTimer />
            </div>
          </section>

          {/* Section 4: Le Défi Final + Engagement */}
          <section className="space-y-8 pt-12">
            <h2 className="flex items-center gap-3 text-2xl font-headline textforeground">
              <Award className="text-primary" />
              Partie 4 : Le Défi Final
            </h2>
            <div className="text-center py-8 prize-section rounded-lg">
              <div className="font-headline text-5xl md:text-6xl font-black flex flex-col items-center prize-text">
                <span>Le meilleur film gagne</span>
                <span className="mt-2">200 000 FDJ !</span>
              </div>
            </div>
            <ExpectationsField />

            <div className="space-y-6 pt-6 border-t border-border/50">
              <h3 className="flex items-center gap-3 text-xl font-headline text-foreground">
                <PenSquare className="text-primary"/>
                Engagement et Signature
              </h3>
              <FormField name="engagement1" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel>Je confirme avoir lu et accepté les conditions de participation.</FormLabel><FormMessage /></div></FormItem>
              )} />
              <FormField name="engagement2" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel>Je m'engage à être présent(e) à toutes les sessions du cours.</FormLabel><FormMessage /></div></FormItem>
              )} />
              <FormField name="engagement3" control={form.control} render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel>Je comprends que le paiement est non-remboursable.</FormLabel><FormMessage /></div></FormItem>
              )} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <FormField name="date_jour" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Date du jour</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField name="signature" control={form.control} render={({ field }) => (
                  <FormItem><FormLabel>Signature (Nom complet)</FormLabel><FormControl><Input placeholder="Votre nom complet" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
            </div>
          </section>

          <div className="flex justify-center pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto font-bold text-lg tracking-wider transition-all duration-300 transform hover:scale-105 bg-[linear-gradient(90deg,#b30000,#ff1a1a)] text-white shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
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
