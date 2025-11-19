
'use client';

import { cn } from '@/lib/utils';
import { Clapperboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function CtaBanner({ className }: { className?: string }) {
  return (
    <section 
      className={cn(
        "relative my-20 overflow-hidden", 
        "bg-gradient-to-br from-red-600 via-red-800 to-black",
        "border-y-4 border-yellow-400",
        className
      )}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-20 text-center py-12 md:py-16">
        
        <h2 
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-white tracking-widest uppercase"
          style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)'}}
        >
          Le Festival Arrive
        </h2>

        <div className="my-4">
          <p 
            className="font-headline text-3xl md:text-4xl lg:text-5xl text-amber-300 tracking-wider"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            Gagnez 200 000 FDJ
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <p className="font-body font-bold text-white text-lg">
              📅 Date limite d'inscription : 15 Décembre 2025
            </p>
            <p className="font-body italic text-amber-200/90 text-sm mt-2">
              ⚠️ Concours réservé exclusivement aux participants de la formation.
            </p>
          </div>

          <Button asChild size="lg" className="btn-primary font-headline text-2xl px-12 py-8 rounded-xl">
             <Link href="/inscription">
                Je veux participer
             </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
