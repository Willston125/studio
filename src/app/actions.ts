'use server';

import { registrationSchema, type RegistrationSchema } from '@/lib/schema';

let registrationCounter = 0;

export async function submitRegistrationAction(data: RegistrationSchema) {
  const validatedFields = registrationSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Validation échouée. Veuillez vérifier les champs.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    registrationCounter++;
    const registrationNumber = `CIN-2025-${String(registrationCounter).padStart(3, '0')}`;
    const finalData = { ...validatedFields.data, registrationNumber };

    // Simulate saving to database
    console.log("Saving to database:", finalData);

    // Simulate sending emails
    console.log(`Sending confirmation email to ${finalData.email}`);
    console.log("Sending notification email to impactali@gmail.com");

    return {
      success: true,
      message: `Inscription réussie ! Votre numéro d'inscription est ${registrationNumber}.`,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de la soumission. Veuillez réessayer.',
    };
  }
}
