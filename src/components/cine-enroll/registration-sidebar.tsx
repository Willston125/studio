'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, Lock, Laptop, Smartphone } from 'lucide-react';
import CountdownTimer from './countdown-timer';

interface RegistrationSidebarProps {
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    isSubmitDisabled: boolean;
}

export default function RegistrationSidebar({ onSubmit, isSubmitting, isSubmitDisabled }: RegistrationSidebarProps) {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900/50 to-black text-gray-300 rounded-3xl shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden border border-amber-500/50 divide-y divide-amber-500/20">

            {/* Countdown */}
            <div className="p-6 text-center">
                <h3 className="font-headline text-lg uppercase tracking-wider text-gray-300">L'offre expire dans :</h3>
                <div className="mt-4">
                    <CountdownTimer />
                </div>
            </div>




            {/* Tarif */}
            <div className="special-price p-8 text-center">
                <p className="text-md font-medium text-gray-400 line-through">Tarif normal : 10 000 FDJ</p>
                <div className="relative inline-block my-2">
                    <div className="font-headline text-5xl font-bold text-primary relative z-10">
                        5 000 FDJ
                    </div>
                    <div
                        className="
                      absolute -top-4 -right-9 z-20 
                      bg-red-600 text-white text-xs font-black
                      py-1.5 px-3 rounded-full 
                      uppercase tracking-wider
                      border-4 border-red-200
                      "
                        style={{
                            transform: 'rotate(12deg)',
                            animation: 'attentionGrabber 2s infinite',
                            boxShadow: '0 6px 15px rgba(220, 38, 38, 0.5)'
                        }}
                    >
                        -50% 🔥
                    </div>
                </div>
                <p className="font-body font-bold text-primary">ÉCONOMISEZ 5 000 FDJ !</p>
            </div>

            {/* Garantie */}
            <div className="p-6 space-y-2 text-sm text-gray-300 bg-black/20">
                <div className="flex items-center gap-2 font-bold text-amber-500">
                    <Check className="w-5 h-5" />
                    <span>GARANTIE DE SATISFACTION</span>
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
                    🎬 {isSubmitting ? 'Redirection...' : "M'inscrire à la formation"}
                </Button>
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Vos informations sont utilisées uniquement pour l'inscription.
                </p>
            </div>
        </div>
    );
}
