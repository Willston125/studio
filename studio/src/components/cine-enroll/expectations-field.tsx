"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { generateExpectationsTip } from "@/ai/flows/ai-powered-expectations-tip";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExpectationsField() {
  const form = useFormContext();
  const [tip, setTip] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { prenom, nom, niveau } = form.watch();

  const handleGenerateTip = async () => {
    setIsLoading(true);
    setError(null);
    setTip(null);
    try {
      const result = await generateExpectationsTip({
        studentName: `${prenom || 'Le/La passionné(e)'} ${nom || 'de cinéma'}`,
        courseName: "La Magie du Cinéma",
        previousExperience: niveau || "aucune",
      });
      setTip(result.tip);
    } catch (e) {
      setError("Impossible de générer un conseil pour le moment. Veuillez réessayer.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="attentes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Quelles sont vos attentes pour ce cours ?
            </FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                placeholder="Décrivez ce que vous espérez apprendre, les compétences que vous souhaitez développer, ou un projet que vous aimeriez réaliser..."
                {...field}
              />
            </FormControl>
            <FormDescription>
              Soyez aussi précis que possible, cela nous aidera à personnaliser votre expérience. (50 caractères min.)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col items-start gap-4">
        <Button type="button" variant="outline" size="sm" onClick={handleGenerateTip} disabled={isLoading}>
            {isLoading ? (
                <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Génération en cours...
                </>
            ) : (
                <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Besoin d'inspiration ?
                </>
            )}
        </Button>

        <div className={cn("w-full transition-opacity duration-500", (isLoading || tip || error) ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden')}>
          {isLoading && <p className="text-sm text-muted-foreground flex items-center"><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Un instant...</p>}
          {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
          {tip && (
            <Alert className="border-primary/30 bg-primary/10">
              <Lightbulb className="h-4 w-4 text-primary" />
              <AlertTitle className="font-bold text-primary">Conseil de l'IA</AlertTitle>
              <AlertDescription className="text-foreground/80">{tip}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
