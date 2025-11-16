
'use client';

import * as React from 'react';
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
import { Smartphone, Camera, Video, Computer } from 'lucide-react';
import ExpectationsField from './expectations-field';
import { Separator } from '@/components/ui/separator';
import ShimmerProgressBar from './shimmer-progress-bar';

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

    const subscription = form.watch(calculateProgress);
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className="bg-black/70 backdrop-blur-md text-gray-300 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
      <header className="text-center p-8 md:p-12 border-b border-white/20">
        <h1 className="text-4xl font-headline font-bold text-amber-500 uppercase tracking-wider">INSCRIPTION - FORMATION CINEMATOGRAPHIE</h1>
        <p className="font-body text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            Remplissez les champs ci-dessous pour réserver votre place.
        </p>
      </header>

      <ShimmerProgressBar progress={progress} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 p-8 md:p-12">
            
          <div className="form-section space-y-8">
              <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase">Vos Informations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
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
                   <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Photo d'identité (Pour Dossier)</FormLabel>
                        <FormControl>
                           <Input 
                              type="file" 
                              accept="image/*"
                              className="pt-3"
                              onChange={(e) => field.onChange(e.target.files)} // react-hook-form needs this for file inputs
                           />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
          </div>
          
          <Separator className="bg-white/20" />
          
          <div className="form-section space-y-8">
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
                                <FormItem key={item.id} >
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
                                        "border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 h-full",
                                        isChecked && "bg-amber-500/10 border-amber-500 ring-2 ring-amber-500"
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

           <div className="form-section space-y-8">
                <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase">Vos Attentes</h2>
                <ExpectationsField />
           </div>
           
           <Separator className="bg-white/20" />

           <div className="form-section space-y-8 rounded-2xl bg-black/20 p-6">
                <h2 className="text-3xl font-bold text-amber-500 font-headline tracking-wider uppercase text-center">Engagement</h2>
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
            
            <div className="form-section space-y-4">
                 <FormField name="date_jour" control={form.control} render={({ field }) => (
                    <FormItem className="flex items-center gap-4">
                        <FormLabel className="whitespace-nowrap">Fait à Djibouti, le :</FormLabel>
                        <FormControl>
                            <Input {...field} readOnly className="font-bold text-center bg-black/20 border-none" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            
            {/* The submit button is now in the sidebar */}
            <button type="submit" className="hidden" />

        </form>
      </Form>
    </div>
  );
}
