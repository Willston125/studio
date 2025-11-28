'use client';

import * as React from 'react';
import Image from 'next/image';
import type { UseFormReturn } from 'react-hook-form';

import type { RegistrationSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

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
import { Smartphone, Camera, Video, Computer, Laptop } from 'lucide-react';
import ExpectationsField from './expectations-field';
import { Separator } from '@/components/ui/separator';
import ShimmerProgressBar from './shimmer-progress-bar';
import CountdownTimer from './countdown-timer';

const materialOptions = [
  { id: 'smartphone', label: 'Smartphone', icon: Smartphone },
  { id: 'dslr', label: 'Appareil Photo (DSLR/Mirrorless)', icon: Camera },
  { id: 'camera', label: 'Caméra Vidéo', icon: Video },
  { id: 'ordinateur', label: 'Ordinateur pour montage', icon: Computer },
];

interface RegistrationFormProps {
  form: UseFormReturn<RegistrationSchema>;
  onSubmit: (data: RegistrationSchema) => void;
}

export default function RegistrationForm({ form, onSubmit }: RegistrationFormProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const calculateProgress = (values: RegistrationSchema) => {
      let validFields = 0;
      const totalRequiredFields = 7 + 3; // 7 main fields + 3 engagements

      if (values.nom) validFields++;
      if (values.prenom) validFields++;
      if (values.email && !form.formState.errors.email) validFields++;
      if (values.telephone) validFields++;
      if (values.niveau) validFields++;
      if (values.materiel && values.materiel.length > 0) validFields++;
      if (values.attentes && values.attentes.length >= 50) validFields++;
      if (values.engagement1) validFields++;
      if (values.engagement2) validFields++;
      if (values.engagement3) validFields++;

      // We don't count date_jour as it's pre-filled

      const calculatedProgress = (validFields / totalRequiredFields) * 100;
      setProgress(calculatedProgress);
    };

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    // 1. CONTENEUR PRINCIPAL (Layout Split Screen)
    <div className="min-h-screen bg-[#050505] text-white flex flex-col lg:flex-row font-sans">

      {/* 2. COLONNE GAUCHE (Le Mentor & Infos - Style Affiche) */}
      <div className="relative w-full lg:w-5/12 lg:fixed lg:h-full lg:left-0 lg:top-0 z-10 bg-black overflow-hidden border-r border-white/10 flex flex-col justify-between">

        {/* Image de Fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mentor.jpg"
            alt="Ali William Mentor"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* Overlay Dégradé (Cinéma) - Plus sombre en bas pour le texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        {/* CONTENU HAUT : Mentor */}
        <div className="relative z-20 p-8 lg:p-12 pt-12 lg:pt-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-2 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full border border-yellow-500/30">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase">Votre Formateur</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white uppercase leading-[0.85] tracking-tight mb-3 drop-shadow-2xl font-headline">
            Ali <br /> William
          </h1>
          <p className="text-gray-300 italic text-lg font-light tracking-wide font-body">
            Réalisateur & Visionnaire
          </p>
        </div>

        {/* CONTENU BAS : Offre & Prix */}
        <div className="relative z-20 p-8 lg:p-12 space-y-8 bg-gradient-to-t from-black via-black/90 to-transparent">

          {/* Grand Prix & Lots (Clean Style) */}
          <div className="space-y-4">
            <h3 className="text-yellow-500 font-bold tracking-widest uppercase text-xs text-center lg:text-left opacity-80">
              À Gagner
            </h3>
            <div className="flex justify-center lg:justify-start gap-8">
              <div className="flex flex-col items-center gap-2 group">
                <Laptop className="w-8 h-8 text-white group-hover:text-yellow-500 transition-colors" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">PC Portable</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <Smartphone className="w-8 h-8 text-white group-hover:text-yellow-500 transition-colors" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Smartphone</span>
              </div>
            </div>
          </div>

          {/* Compte à Rebours */}
          <div>
            <h3 className="text-gray-400 font-bold tracking-widest uppercase text-[10px] mb-2 text-center lg:text-left">
              L'offre expire dans :
            </h3>
            <CountdownTimer />
          </div>

          {/* Prix */}
          <div className="flex items-end gap-4 relative">
            <div>
              <span className="block text-gray-500 text-sm line-through mb-1 font-medium">40 000 FDJ</span>
              <span className="block text-5xl lg:text-6xl font-black text-white font-headline tracking-tighter">
                20 000 <span className="text-yellow-500 text-2xl align-top">FDJ</span>
              </span>
            </div>
            {/* Sticker - Positionné pour ne pas gêner */}
            <div className="mb-4 bg-red-600 text-white text-xs font-black py-1 px-2 rounded transform rotate-3 shadow-lg border border-red-400 animate-pulse">
              -50%
            </div>
          </div>

        </div>
      </div>

      {/* 3. COLONNE DROITE (Le Formulaire - Scrollable) */}
      <div className="w-full lg:w-7/12 lg:ml-auto bg-[#0a0a0a] min-h-screen relative z-20">
        <div className="max-w-3xl mx-auto px-6 py-12 lg:px-20 lg:py-24">

          {/* En-tête Formulaire */}
          <div className="mb-12 border-b border-gray-800 pb-8">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase text-white mb-4 font-headline">
              Inscription <span className="text-yellow-500">Formation</span>
            </h2>
            <p className="text-gray-400 font-body">
              Réservez votre place pour l'aventure cinématographique. Remplissez les champs ci-dessous.
            </p>
          </div>

          {/* DÉBUT DU FORMULAIRE */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

              {/* SECTION 1: INFORMATIONS PERSONNELLES */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-headline">
                  <span className="text-yellow-500">01.</span> VOS COORDONNÉES
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="nom" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} className="w-full bg-[#161616] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-600" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="prenom" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider">Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre prénom" {...field} className="w-full bg-[#161616] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-600" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="exemple@email.com" {...field} className="w-full bg-[#161616] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-600" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="telephone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider">Téléphone (WhatsApp)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+253..." {...field} className="w-full bg-[#161616] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-600" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* SECTION 2: NIVEAU */}
              <div className="space-y-6 pt-6 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-headline">
                  <span className="text-yellow-500">02.</span> VOTRE EXPÉRIENCE
                </h3>

                <FormField name="niveau" control={form.control} render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-4">Niveau en réalisation</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { value: 'debutant', label: 'Débutant', icon: '🌱' },
                          { value: 'intermediaire', label: 'Intermédiaire', icon: '🎬' },
                          { value: 'avance', label: 'Avancé', icon: '🚀' }
                        ].map((option) => (
                          <FormItem key={option.value} className="space-y-0">
                            <FormControl>
                              <RadioGroupItem value={option.value} className="peer sr-only" />
                            </FormControl>
                            <FormLabel className="cursor-pointer block">
                              <div className={`p-4 rounded-xl bg-[#161616] border transition-all text-center h-full flex flex-col justify-center items-center gap-2 hover:border-gray-500 ${field.value === option.value ? 'border-yellow-500 bg-yellow-500/10' : 'border-[#333]'}`}>
                                <span className="text-2xl">{option.icon}</span>
                                <span className={`font-bold ${field.value === option.value ? 'text-white' : 'text-gray-300'}`}>{option.label}</span>
                              </div>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )} />
              </div>

              {/* SECTION 3: MATÉRIEL */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="materiel"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Matériel possédé</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {materialOptions.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="materiel"
                            render={({ field }) => {
                              const isChecked = field.value?.includes(item.id) ?? false;
                              return (
                                <FormItem key={item.id} className="space-y-0">
                                  <FormControl>
                                    <Checkbox
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
                                      className="peer sr-only"
                                    />
                                  </FormControl>
                                  <FormLabel className={`cursor-pointer block p-3 rounded-lg bg-[#161616] border text-sm font-medium text-center transition-all hover:bg-[#222] ${isChecked ? 'border-yellow-500 text-yellow-500' : 'border-[#333] text-gray-400'}`}>
                                    {item.label}
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

              {/* SECTION 4: ATTENTES */}
              <div className="space-y-2">
                <FormField name="attentes" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider">Vos attentes</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full bg-[#161616] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-600 resize-none"
                        placeholder="Qu'espérez-vous apprendre durant cette formation ?"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )} />
              </div>

              {/* SECTION 5: ENGAGEMENT */}
              <div className="pt-6 border-t border-gray-800">
                <FormField name="engagement1" control={form.control} render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500 border-gray-600" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-400 hover:text-gray-300 transition-colors font-normal">
                        Je m'engage à participer activement à la formation et j'accepte les conditions.
                      </FormLabel>
                      <FormMessage className="text-red-500 text-xs" />
                    </div>
                  </FormItem>
                )} />
              </div>

              {/* BOUTON DE SOUMISSION */}
              <button
                type="submit"
                className="w-full py-5 px-8 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-extrabold text-lg uppercase tracking-widest rounded-full shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1 transition-all duration-300 mt-8"
              >
                Confirmer mon inscription
              </button>

              <p className="text-center text-gray-600 text-xs mt-4">
                Paiement sécurisé via Waafi / D-Money à l'étape suivante.
              </p>

            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
