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
import { Smartphone, Camera, Video, Computer, Laptop, Clock, CheckCircle, Star, Clapperboard } from 'lucide-react';
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
  // --- LOGIQUE COMPTE À REBOURS (User Logic) ---
  const [timeLeft, setTimeLeft] = React.useState({ days: 21, hours: 5, minutes: 46, seconds: 50 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col lg:flex-row font-sans selection:bg-yellow-500 selection:text-black">

      {/* =========================================
          COLONNE GAUCHE : L'AFFICHE DE FILM (FIXE)
         ========================================= */}
      <div className="relative w-full lg:w-[45%] h-[60vh] lg:h-screen lg:fixed lg:left-0 lg:top-0 z-10 overflow-hidden bg-black border-r border-white/10">

        {/* IMAGE DE FOND */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mentor.jpg"
            alt="Ali William"
            fill
            className="object-cover object-top opacity-90 transition-transform duration-[10s] hover:scale-105"
            priority
          />
          {/* DÉGRADÉ NOIR (Pour lisibilité) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        {/* CONTENU SUR L'IMAGE (En bas) */}
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-20">

          {/* BADGE FORMATEUR */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 font-bold tracking-[0.3em] text-xs uppercase glow-text">Masterclass Cinéma</span>
          </div>

          {/* TITRE GEANT */}
          <h1 className="text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] mb-2 tracking-tighter font-headline">
            Ali<br />William
          </h1>
          <p className="text-gray-300 text-xl font-light tracking-widest border-l-4 border-yellow-500 pl-4 mb-8 font-body">
            Réalisateur & Visionnaire
          </p>

          {/* BLOC PRIX & COMPTEUR (Style Verre dépoli) */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Prix Lancement</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-white font-headline">20.000 <span className="text-yellow-500 text-xl">FDJ</span></span>
                  <span className="text-lg text-gray-500 line-through decoration-red-500 font-body">40.000</span>
                </div>
              </div>
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded animate-pulse">
                -50% OFF
              </div>
            </div>

            {/* TIMER */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { val: timeLeft.days, label: 'JRS' },
                { val: timeLeft.hours, label: 'HRS' },
                { val: timeLeft.minutes, label: 'MIN' },
                { val: timeLeft.seconds, label: 'SEC' }
              ].map((item, i) => (
                <div key={i} className="bg-black/40 rounded p-2 border border-white/5">
                  <span className="block text-xl font-bold text-yellow-500 font-mono">{item.val}</span>
                  <span className="text-[9px] text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          COLONNE DROITE : LE FORMULAIRE (SCROLL)
         ========================================= */}
      <div className="w-full lg:w-[55%] lg:ml-auto bg-[#0a0a0a] min-h-screen relative z-0">
        <div className="max-w-xl mx-auto px-6 py-12 lg:px-16 lg:py-20">

          <header className="mb-12">
            <h2 className="text-4xl font-bold uppercase text-white mb-2 font-headline">Inscription <span className="text-yellow-500">Formation</span></h2>
            <p className="text-gray-500 font-body">Rejoignez l'élite du cinéma djiboutien.</p>
          </header>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

              {/* ETAPE 1 : IDENTITÉ */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2 font-headline">
                  <span className="text-yellow-500">01.</span> Vos Coordonnées
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField name="nom" control={form.control} render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase mb-2 block">Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} className="w-full bg-[#111] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="prenom" control={form.control} render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase mb-2 block">Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre prénom" {...field} className="w-full bg-[#111] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="exemple@email.com" {...field} className="w-full bg-[#111] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="telephone" control={form.control} render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase mb-2 block">Téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+253..." {...field} className="w-full bg-[#111] border border-[#333] text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />
                </div>
              </section>

              {/* ETAPE 2 : NIVEAU */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2 font-headline">
                  <span className="text-yellow-500">02.</span> Votre Niveau
                </h3>
                <FormField name="niveau" control={form.control} render={({ field }) => (
                  <FormItem className="space-y-4">
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
                              <div className={`p-4 rounded-xl bg-[#111] border transition-all text-center h-full flex flex-col justify-center items-center gap-2 hover:border-gray-500 ${field.value === option.value ? 'border-yellow-500 bg-yellow-500/10' : 'border-[#333]'}`}>
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
              </section>

              {/* ETAPE 3 : MATERIEL */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2 font-headline">
                  <span className="text-yellow-500">03.</span> Matériel
                </h3>
                <FormField
                  control={form.control}
                  name="materiel"
                  render={() => (
                    <FormItem>
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
                                  <FormLabel className={`cursor-pointer block p-3 rounded-lg bg-[#111] border text-sm font-medium text-center transition-all hover:bg-[#222] ${isChecked ? 'border-yellow-500 text-yellow-500' : 'border-[#333] text-gray-400'}`}>
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
              </section>

              {/* ETAPE 4 : ATTENTES */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2 font-headline">
                  <span className="text-yellow-500">04.</span> Attentes
                </h3>
                <FormField name="attentes" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full bg-[#111] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 resize-none"
                        placeholder="Qu'espérez-vous apprendre durant cette formation ?"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )} />
              </section>

              {/* ETAPE 5 : ENGAGEMENT */}
              <section className="pt-6 border-t border-gray-800">
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
              </section>

              {/* BOUTON SUBMIT */}
              <button
                type="submit"
                className="w-full py-5 px-8 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-extrabold text-lg uppercase tracking-widest rounded-full shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1 transition-all duration-300 mt-8"
              >
                Confirmer mon inscription
              </button>

            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
