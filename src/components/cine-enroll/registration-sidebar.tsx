
'use client';

import { Button } from '@/components/ui/button';
import { Check, Lock } from 'lucide-react';
import CountdownTimer from './countdown-timer';

interface RegistrationSidebarProps {
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    isSubmitDisabled: boolean;
}

export default function RegistrationSidebar({ onSubmit, isSubmitting, isSubmitDisabled }: RegistrationSidebarProps) {
    return (
        <div className="bg-black/70 backdrop-blur-md text-gray-300 rounded-3xl shadow-2xl overflow-hidden border border-white/20 divide-y divide-white/20">
            {/* Countdown */}
            <div className="p-6 text-center">
                <h3 className="font-headline text-lg uppercase tracking-wider text-gray-300">L'offre expire dans :</h3>
                <div className="mt-4">
                    <CountdownTimer />
                </div>
            </div>

            {/* Grand Prix */}
            <div className="p-8 text-center space-y-4 bg-amber-900/10">
                 <h3 className="font-headline text-5xl md:text-6xl uppercase tracking-wider text-amber-400">
                    Le Grand Prix
                </h3>
                <p className="font-headline text-7xl font-bold text-white">
                    200 000 FDJ
                </p>
                <p className="font-body text-gray-300 !mt-2">
                    ET AUSSI : Un Ordinateur Portable (2e Prix) &amp; Un Smartphone (3e Prix)
                </p>
            </div>

            {/* Tarif */}
            <div className="special-price p-8 text-center">
                <p className="text-md font-medium text-gray-400 line-through">Tarif normal : 40 000 FDJ</p>
                <div className="flex items-baseline justify-center gap-3 my-1">
                    <p className="font-headline text-6xl font-extrabold text-primary">30 000 FDJ</p>
                    <div className="bg-primary text-primary-foreground font-bold text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                        -25%
                    </div>
                </div>
                <p className="font-body font-bold text-primary">ÉCONOMISEZ 10 000 FDJ !</p>
            </div>

            {/* Garantie */}
            <div className="p-6 space-y-2 text-sm text-gray-300 bg-black/20">
                <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">Garantie de Satisfaction</span>
                </div>
                <p className="text-xs text-gray-400 pl-7">
                    Si la formation ne répond pas à vos attentes après le premier jour, nous vous remboursons intégralement.
                </p>
            </div>

            {/* Submit Button & Security Note */}
            <div className="p-6 space-y-4">
                <Button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitDisabled}
                    onClick={onSubmit}
                    >
                    {isSubmitting ? 'Redirection...' : "🎬 Rejoindre la Masterclass"}
                </Button>
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Vos informations sont utilisées uniquement pour l'inscription.
                </p>
                 <p className="text-sm text-gray-500 text-center">
                    Déjà inscrit ? <a href="#" className="font-semibold text-amber-500 hover:underline">Connectez-vous</a>
                </p>
            </div>
        </div>
    );
}
