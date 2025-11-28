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
import { Smartphone, Camera, Video, Computer, Laptop, Clock, CheckCircle, Star, Clapperboard, PlayCircle } from 'lucide-react';
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
          COLONNE GAUCHE : L'AFFICHE (FIXE 40%)
         ========================================= */}
      <div className="relative w-full lg:w-[40%] h-[50vh] lg:h-screen lg:fixed lg:left-0 lg:top-0 z-10 overflow-hidden bg-black border-r border-white/5">

        {/* IMAGE DE FOND */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mentor.jpg"
            alt="Ali William"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* DÉGRADÉ NOIR (Overlay) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-transparent" />
        </div>

        {/* CONTENU SUR L'IMAGE */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 lg:p-12">

          {/* HAUT : LOGO / MARQUE */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-black text-lg">C</span>
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-sm">CINEWORLD STUDIO</span>
          </div>

          {/* MILIEU : NOM DU MENTOR */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-yellow-500 font-bold tracking-widest text-xs uppercase mb-2">
              <Star className="w-4 h-4 fill-yellow-500" />
              <span>Masterclass Exclusive</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter drop-shadow-2xl font-headline">
              Ali<br />William
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl font-light tracking-wide mt-4 max-w-md font-body">
              "Apprenez à voir le monde à travers l'objectif d'un réalisateur visionnaire."
            </p>
          </div>

          {/* BAS : PRIX & TIMER */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Offre Spéciale</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white font-headline">20 000 <span className="text-yellow-500 text-lg">FDJ</span></span>
                  <span className="text-sm text-gray-500 line-through decoration-red-500 font-medium font-body">40 000 FDJ</span>
                </div>
              </div>
              <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg shadow-red-600/20">
                -50%
              </div>
            </div>

            {/* TIMER */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { val: timeLeft.days, label: 'JOURS' },
                { val: timeLeft.hours, label: 'HEURES' },
                { val: timeLeft.minutes, label: 'MIN' },
                { val: timeLeft.seconds, label: 'SEC' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <span className="block text-xl font-bold text-white font-mono">{item.val.toString().padStart(2, '0')}</span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          COLONNE DROITE : LE FORMULAIRE (60%)
         ========================================= */}
      <div className="w-full lg:w-[60%] lg:ml-auto bg-[#0a0a0a] min-h-screen relative z-0">
        <div className="max-w-2xl mx-auto px-6 py-12 lg:px-20 lg:py-24">

          <header className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mb-4 tracking-tight font-headline">
              Inscription <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Formation Cinématographie</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed font-body">
              Remplissez ce formulaire pour valider votre pré-inscription. Les places sont limitées pour garantir un suivi personnalisé.
            </p>
          </header>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

              {/* SECTION 1: INFOS PERSONNELLES */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20">01</div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide font-headline">Vos Coordonnées</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="nom" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="VOTRE NOM" {...field} className="w-full bg-[#161616] border border-white/10 text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 font-medium" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="prenom" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="VOTRE PRÉNOM" {...field} className="w-full bg-[#161616] border border-white/10 text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 font-medium" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="exemple@email.com" {...field} className="w-full bg-[#161616] border border-white/10 text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 font-medium" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />

                  <FormField name="telephone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+253..." {...field} className="w-full bg-[#161616] border border-white/10 text-white p-6 h-auto rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 font-medium" />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* SECTION 2: EXPÉRIENCE */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20">02</div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide font-headline">Votre Expérience</h3>
                </div>

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
                              <div className={`p-6 rounded-xl bg-[#161616] border transition-all text-center h-full flex flex-col justify-center items-center gap-3 hover:border-gray-500 hover:bg-[#222] ${field.value === option.value ? 'border-yellow-500 bg-yellow-500/10 ring-1 ring-yellow-500' : 'border-white/10'}`}>
                                <span className="text-3xl">{option.icon}</span>
                                <span className={`font-bold uppercase text-sm tracking-wider ${field.value === option.value ? 'text-white' : 'text-gray-400'}`}>{option.label}</span>
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
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20">03</div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide font-headline">Matériel</h3>
                </div>

                <FormField
                  control={form.control}
                  name="materiel"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                                  <FormLabel className={`cursor-pointer block p-4 rounded-lg bg-[#161616] border text-xs font-bold uppercase tracking-wider text-center transition-all hover:bg-[#222] ${isChecked ? 'border-yellow-500 text-yellow-500 bg-yellow-500/5' : 'border-white/10 text-gray-500'}`}>
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
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-sm border border-yellow-500/20">04</div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide font-headline">Attentes</h3>
                </div>

                <FormField name="attentes" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full bg-[#161616] border border-white/10 text-white p-6 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 resize-none font-medium"
                        placeholder="Qu'espérez-vous apprendre durant cette formation ?"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )} />
              </div>

              {/* SECTION 5: ENGAGEMENT */}
              <div className="pt-8 border-t border-white/10">
                <FormField name="engagement1" control={form.control} render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-4 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-6 h-6 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500 border-gray-600 rounded-md" />
                    </FormControl>
                    <div className="space-y-1 leading-none pt-1">
                      <FormLabel className="text-sm text-gray-400 hover:text-gray-300 transition-colors font-normal leading-relaxed">
                        Je m'engage à participer activement à la formation et j'accepte les conditions générales de vente.
                      </FormLabel>
                      <FormMessage className="text-red-500 text-xs" />
                    </div>
                  </FormItem>
                )} />
              </div>

              {/* BOUTON SUBMIT */}
              <button
                type="submit"
                className="w-full py-6 px-8 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 text-black font-black text-xl uppercase tracking-widest rounded-lg shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] transform hover:-translate-y-1 transition-all duration-300 mt-8 flex items-center justify-center gap-3 group"
              >
                <span>Confirmer mon inscription</span>
                <PlayCircle className="w-6 h-6 fill-black text-transparent group-hover:scale-110 transition-transform" />
              </button>

              <p className="text-center text-gray-600 text-xs mt-6 font-medium tracking-wide">
                Paiement sécurisé via Waafi / D-Money à l'étape suivante.
              </p>

            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
