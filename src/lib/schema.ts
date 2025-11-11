import { z } from 'zod';

const equipmentOptions = ["smartphone", "camera", "dslr", "professional"];

export const registrationSchema = z.object({
  nom: z.string().min(1, { message: "Le nom est obligatoire." }),
  prenom: z.string().min(1, { message: "Le prénom est obligatoire." }),
  date_naissance: z.string().min(1, { message: "La date de naissance est obligatoire." }),
  email: z.string().email({ message: "L'adresse e-mail n'est pas valide." }),
  telephone: z.string().min(1, { message: "Le numéro de téléphone est obligatoire." }),
  profession: z.string().min(1, { message: "La profession est obligatoire." }),
  
  niveau: z.enum(['debutant', 'intermediaire', 'avance'], { 
    required_error: "Veuillez sélectionner votre niveau." 
  }),
  
  materiel: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Vous devez sélectionner au moins un équipement.",
  }),

  logiciels: z.string().optional(),
  
  attentes: z.string().min(50, { message: "Veuillez détailler vos attentes (50 caractères minimum)." }),
  
  engagement1: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter cet engagement." }) }),
  engagement2: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter cet engagement." }) }),
  engagement3: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter cet engagement." }) }),
  
  date_jour: z.string().min(1, { message: "La date est obligatoire." }),
  signature: z.string().min(1, { message: "La signature est obligatoire." }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
