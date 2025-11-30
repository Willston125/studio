
'use client';

import { cn } from '@/lib/utils';
import { Clapperboard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function CtaBanner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative my-20 overflow-visible",
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

        {/* Prize Images - 3D Pop-up Effect */}
        {/* Laptop - Left Side */}
        <div className="absolute left-4 md:left-8 lg:left-16 -top-10 md:-top-16 hidden md:block z-30">
          <Image
            src="/laptop.png"
            alt="Ordinateur portable à gagner"
            width={280}
            height={200}
            className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Phone - Right Side */}
        <div className="absolute right-4 md:right-8 lg:right-16 -top-8 md:-top-12 hidden md:block z-30">
          <Image
            src="/phone.png"
            alt="Smartphone à gagner"
            width={140}
            height={240}
            className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h2
          className="font-headline text-4xl md:text-6xl lg:text-8xl text-white tracking-widest uppercase"
          style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
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
          <p className="font-body text-xl md:text-2xl text-amber-200 tracking-wide mt-2 font-semibold">
            + ORDINATEUR & SMARTPHONE
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
