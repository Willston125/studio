'use server';

import { registrationSchema, type RegistrationSchema } from '@/lib/schema';

// This is no longer used, but we keep it to avoid breaking imports if it was used elsewhere.
// A better approach would be to remove it if we are sure it's not used.
let registrationCounter = 0;

export async function submitRegistrationAction(data: RegistrationSchema) {
  console.warn("submitRegistrationAction is deprecated and should not be used. Please use WhatsApp redirection.");
  return {
    success: false,
    message: 'This action is deprecated.',
  };
}
