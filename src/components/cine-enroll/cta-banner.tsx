'use client';

import { cn } from '@/lib/utils';
import { Clapperboard, Banknote, Laptop, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function CtaBanner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative my-24 overflow-visible",
        // Nouveau fond dégradé profond (Style Net+)
        "bg-gradient-to-b from-[#2a0a18] via-[#590d22] to-[#800f2f]",
        "rounded-3xl shadow-2xl mx-4 md:mx-0", // Arrondi pour faire "carte"
        className
      )}
    >
      {/* Price Tag Flottant (Haut Droite) */}
      <div className="absolute -top-6 -right-2 md:top-8 md:-right-8 z-40 rotate-12 animate-bounce-slow">
        <div className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-xl border-2 border-white border-dashed transform hover:scale-110 transition-transform">
          <p className="font-headline text-xl md:text-2xl font-bold tracking-wider">
            GAGNEZ <br />
            <span className="text-yellow-300 text-3xl md:text-4xl">200 000 FDJ</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center py-12 md:py-16">

        {/* En-tête */}
        <div className="mb-10">
          <h2
            className="font-headline text-4xl md:text-6xl lg:text-7xl text-white tracking-widest uppercase mb-2"
            style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
          >
            Le Festival Arrive
          </h2>
          <p className="text-amber-200/80 font-body tracking-widest text-sm md:text-base uppercase">
            Préparez vos caméras • Racontez vos histoires
          </p>
        </div>

        {/* Zone Centrale : Images (Style Posters) */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 my-12">

          {/* Laptop */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all"></div>
            <Image
              src="/laptop.png"
              alt="Ordinateur à gagner"
              width={320}
              height={220}
              className="relative z-10 drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
            />
          </div>

          {/* Phone */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/30 transition-all"></div>
            <Image
              src="/phone.png"
              alt="Smartphone à gagner"
              width={160}
              height={280}
              className="relative z-10 drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Feature Box (Bas) - Style "Net+" */}
        <div className="max-w-4xl mx-auto mt-16 mb-10">
          <div className="border-2 border-white/30 rounded-3xl bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/20">

              {/* Item 1: Cash */}
              <div className="flex flex-col items-center gap-3 pt-4 md:pt-0">
                <Banknote className="w-10 h-10 text-yellow-400" />
                <div className="text-center">
                  <p className="font-headline text-3xl text-white">200 000</p>
                  <p className="font-body text-sm text-white/70 uppercase tracking-widest">Francs Djibouti</p>
                </div>
              </div>

              {/* Item 2: Laptop */}
              <div className="flex flex-col items-center gap-3 pt-4 md:pt-0">
                <Laptop className="w-10 h-10 text-blue-400" />
                <div className="text-center">
                  <p className="font-headline text-3xl text-white">ORDINATEUR</p>
                  <p className="font-body text-sm text-white/70 uppercase tracking-widest">Portable Offert</p>
                </div>
              </div>

              {/* Item 3: Phone */}
              <div className="flex flex-col items-center gap-3 pt-4 md:pt-0">
                <Smartphone className="w-10 h-10 text-purple-400" />
                <div className="text-center">
                  <p className="font-headline text-3xl text-white">SMARTPHONE</p>
                  <p className="font-body text-sm text-white/70 uppercase tracking-widest">Dernière Génération</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-4">
          <Button asChild size="lg" className="btn-primary font-headline text-2xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            <Link href="/inscription">
              Je veux participer
            </Link>
          </Button>
          <p className="font-body text-white/60 text-sm">
            📅 Date limite : 15 Décembre 2025
          </p>
        </div>

      </div>
    </section>
  );
}
