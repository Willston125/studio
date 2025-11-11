'use server';
/**
 * @fileOverview This file defines a Genkit flow that generates personalized tips
 * for prospective students filling out the 'Expectations' section of the registration form.
 *
 * - generateExpectationsTip - A function that generates a personalized tip based on user input.
 * - GenerateExpectationsTipInput - The input type for the generateExpectationsTip function.
 * - GenerateExpectationsTipOutput - The return type for the generateExpectationsTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExpectationsTipInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  courseName: z.string().describe('The name of the course.'),
  previousExperience: z.string().describe('The student\'s previous experience in filmmaking.'),
});
export type GenerateExpectationsTipInput = z.infer<typeof GenerateExpectationsTipInputSchema>;

const GenerateExpectationsTipOutputSchema = z.object({
  tip: z.string().describe('A personalized tip to help the student articulate their expectations for the course.'),
});
export type GenerateExpectationsTipOutput = z.infer<typeof GenerateExpectationsTipOutputSchema>;

export async function generateExpectationsTip(input: GenerateExpectationsTipInput): Promise<GenerateExpectationsTipOutput> {
  return generateExpectationsTipFlow(input);
}

const expectationsTipPrompt = ai.definePrompt({
  name: 'expectationsTipPrompt',
  input: {schema: GenerateExpectationsTipInputSchema},
  output: {schema: GenerateExpectationsTipOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized tips to prospective students filling out a registration form for a filmmaking course.

  Your goal is to help them articulate their expectations for the course and increase their motivation.

  Based on the student's name, the course name, and their previous experience, generate a single, concise tip that will encourage them to think deeply about what they want to achieve in the course.

  Student Name: {{{studentName}}}
  Course Name: {{{courseName}}}
  Previous Experience: {{{previousExperience}}}

  Tip:`,
});

const generateExpectationsTipFlow = ai.defineFlow(
  {
    name: 'generateExpectationsTipFlow',
    inputSchema: GenerateExpectationsTipInputSchema,
    outputSchema: GenerateExpectationsTipOutputSchema,
  },
  async input => {
    const {output} = await expectationsTipPrompt(input);
    return output!;
  }
);
