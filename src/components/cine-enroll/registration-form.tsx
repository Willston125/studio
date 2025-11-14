
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

import type { RegistrationSchema } from '@/lib/schema';
import { registrationSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Smartphone, Camera, Video, Computer, Award, Laptop } from 'lucide-react';
import ExpectationsField from './expectations-field';
import { Separator } from '@/components/ui/separator';
import CountdownTimer from './countdown-timer';
import ShimmerProgressBar from './shimmer-progress-bar';

const materialOptions = [
    { id: 'smartphone', label: 'Smartphone', icon: Smartphone },
    { id: 'dslr', label: 'Appareil Photo (DSLR/Mirrorless)', icon: Camera },
    { id: 'camera', label: 'Caméra Vidéo', icon: Video },
    { id: 'ordinateur', label: 'Ordinateur pour montage', icon: Computer },
];

const totalFields = 11; // nom, prenom, email, telephone, niveau, materiel, attentes, engagement1, engagement2, engagement3, date_jour

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

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

  const formValues = form.watch();

  React.useEffect(() => {
    const calculateProgress = () => {
      const filledFields = Object.values(form.getValues()).filter(value => {
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'boolean') return value === true;
        return value !== "" && value !== undefined && value !== null;
      }).length;
      
      // We manually check engagements because they are grouped.
      const engagementCount = (form.getValues().engagement1 ? 1 : 0) + (form.getValues().engagement2 ? 1 : 0) + (form.getValues().engagement3 ? 1 : 0);
      
      // Refined count:
      let validFields = 0;
      if (form.getValues().nom) validFields++;
      if (form.getValues().prenom) validFields++;
      if (form.getValues().email && !form.formState.errors.email) validFields++;
      if (form.getValues().telephone) validFields++;
      if (form.getValues().niveau) validFields++;
      if (form.getValues().materiel && form.getValues().materiel.length > 0) validFields++;
      if (form.getValues().attentes && form.getValues().attentes.length >= 50) validFields++;
      validFields += engagementCount;
       if (form.getValues().date_jour) validFields++;


      // We count the 3 engagements as 3 fields, and the rest as individual fields
      const totalRequiredFields = 7 + 3; // 7 main fields + 3 engagements
      setProgress((validFields / totalRequiredFields) * 100);
    };

    const subscription = form.watch(calculateProgress);
    return () => subscription.unsubscribe();
  }, [form]);


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
      const whatsappUrl = `https://wa.me/2537755556344?text=${encodeURIComponent(message)}`;
      
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
    <div className="bg-black/70 backdrop-blur-md text-gray-300 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
      <header className="text-center p-8 md:p-12 border-b border-white/20">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-amber-500 uppercase tracking-wider">Inscription - Masterclass Cinéma Djibouti</h1>
        <p className="font-body text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Rejoignez notre formation exclusive
        </p>
      </header>

      <ShimmerProgressBar progress={progress} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 p-8 md:p-12">
            
          {/* Section 1: Informations Personnelles */}
          <div className="space-y-8 form-section">
              <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase">Vos Informations Personnelles</h2>
              <div className="grid grid-cols-1 gap-8">
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
                  <FormField name="adresse" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Adresse (Optionnel)</FormLabel><FormControl><Input placeholder="Ex: 123 Rue de la République" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="ville" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Ville (Optionnel)</FormLabel><FormControl><Input placeholder="Djibouti" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="quartier" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Quartier (Optionnel)</FormLabel><FormControl><Input placeholder="Héron" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
              </div>
          </div>
          
          <Separator className="bg-white/20" />
          
          {/* Section 2: Expérience */}
          <div className="space-y-8 form-section">
              <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase">Votre Expérience</h2>
              <FormField name="niveau" control={form.control} render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel>Votre niveau en réalisation</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col sm:flex-row gap-4 pt-2">
                        <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="debutant" /></FormControl><FormLabel className="font-normal">Débutant(e)</FormLabel></FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="intermediaire" /></FormControl><FormLabel className="font-normal">Intermédiaire</FormLabel></FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="avance" /></FormControl><FormLabel className="font-normal">Avancé(e)</FormLabel></FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

              <FormField
                control={form.control}
                name="materiel"
                render={() => (
                    <FormItem>
                        <div className="mb-4">
                            <FormLabel>Matériel que vous possédez</FormLabel>
                            <FormMessage />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {materialOptions.map((item) => (
                            <FormField
                            key={item.id}
                            control={form.control}
                            name="materiel"
                            render={({ field }) => {
                                const Icon = item.icon;
                                const isChecked = field.value?.includes(item.id) ?? false;
                                return (
                                <FormItem
                                    key={item.id}
                                >
                                  <FormControl>
                                    <Checkbox
                                        id={item.id}
                                        checked={isChecked}
                                        onCheckedChange={(checked) => {
                                          const newValue = field.value ? [...field.value] : [];
                                          if (checked) {
                                            newValue.push(item.id);
                                          } else {
                                            const index = newValue.indexOf(item.id);
                                            if (index > -1) {
                                              newValue.splice(index, 1);
                                            }
                                          }
                                          field.onChange(newValue);
                                        }}
                                        className="sr-only"
                                    />
                                    </FormControl>
                                  <FormLabel htmlFor={item.id} className={cn(
                                        "border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300",
                                        isChecked && "bg-amber-500/10 border-amber-500"
                                    )}>
                                    <Icon className="w-8 h-8 text-amber-500" />
                                    <span className="font-normal text-center text-xs">
                                        {item.label}
                                    </span>
                                  </FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                        </div>
                    </FormItem>
                )}
                />
          </div>

          <Separator className="bg-white/20" />

           {/* Section 3: Attentes */}
           <div className="space-y-8 form-section">
                <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase">Vos Attentes</h2>
                <ExpectationsField />
           </div>
           
           <Separator className="bg-white/20" />

            {/* Golden Ticket Section */}
            <div className="space-y-6 rounded-2xl border-2 border-amber-500/50 bg-amber-500/5 p-8 text-center shadow-lg shadow-amber-500/10 form-section">
                <h3 className="font-headline text-7xl uppercase tracking-wider text-amber-500">
                    LE GRAND PRIX :<br/>200 000 FDJ !
                </h3>
                <p className="font-body text-gray-300">
                    ET AUSSI : Un Ordinateur Portable (2e Prix) &amp; Un Téléphone Portable (3e Prix)
                </p>
            </div>

            <div className="space-y-6 rounded-2xl bg-black/20 p-6 text-center form-section">
                <h3 className="font-headline text-lg uppercase tracking-wider text-gray-300">L'offre à 30 000 FDJ expire dans :</h3>
                <CountdownTimer />
            </div>

           {/* Section 4: Tarifs et Engagement */}
            <div className="space-y-8 rounded-2xl bg-black/20 p-6 form-section">
                <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase text-center">Tarif &amp; Engagement</h2>
                <div className="text-center bg-black/30 rounded-lg p-6 flex flex-col items-center">
                    <p className="text-md font-medium text-gray-400 line-through">Tarif normal : 40 000 FDJ</p>
                    <div className="flex items-baseline gap-3 my-1">
                        <p className="font-headline text-5xl font-extrabold text-primary">30 000 FDJ</p>
                        <div className="bg-primary text-primary-foreground font-bold text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                            VOUS ÉCONOMISEZ 10 000 FDJ !
                        </div>
                    </div>
                </div>
                <div className="space-y-4 pt-4">
                    <FormField name="engagement1" control={form.control} render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="font-normal">Je confirme avoir lu et accepté les conditions de participation.</FormLabel><FormMessage /></div></FormItem>
                    )} />
                    <FormField name="engagement2" control={form.control} render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="font-normal">Je m'engage à être présent(e) à toutes les sessions du cours.</FormLabel><FormMessage /></div></FormItem>
                    )} />
                    <FormField name="engagement3" control={form.control} render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="grid gap-1.5 leading-none"><FormLabel className="font-normal">Je comprends que le paiement est non-remboursable.</FormLabel><FormMessage /></div></FormItem>
                    )} />
                </div>
            </div>

            <Separator className="bg-white/20" />
            
            {/* Section 5: Soumission */}
            <div className="space-y-4 form-section">
                 <FormField name="date_jour" control={form.control} render={({ field }) => (
                    <FormItem className="flex items-center gap-4">
                        <FormLabel className="whitespace-nowrap">Fait à Djibouti, le :</FormLabel>
                        <FormControl>
                            <Input {...field} readOnly className="font-bold text-center bg-black/20 border-none" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <div className="flex flex-col items-center pt-6 space-y-4">
                    <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-headline text-2xl tracking-wider rounded-md text-primary-foreground h-16 bg-primary text-primary-foreground hover:bg-primary/90 btn-inscription"
                    disabled={isSubmitDisabled}
                    >
                    {isSubmitting ? 'Redirection...' : "S'inscrire via WhatsApp"}
                    </Button>
                    <p className="text-sm text-gray-500">
                        Vous avez déjà un compte ? <a href="#" className="font-semibold text-amber-500 hover:underline">Connectez-vous !</a>
                    </p>
                </div>
            </div>
        </form>
      </Form>
    </div>
  );
}

    