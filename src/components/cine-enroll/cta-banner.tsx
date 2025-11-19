
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function CtaBanner({ className }: { className?: string }) {
  
  return (
    <section className={cn("relative my-20 py-10", className)}>
       <Link href="/inscription" className="block group">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative">
            
            {/* --- Decorative Clap Image --- */}
            <div className="absolute -top-16 -right-0 z-20 group-hover:scale-105 transition-transform duration-300 transform rotate-12">
               <Image 
                src="/clap.png"
                alt="Clap de cinéma"
                width={256}
                height={256}
                className="w-40 h-40 md:w-64 md:h-64 drop-shadow-2xl"
               />
            </div>

            {/* --- Main Red Banner --- */}
            <div className="bg-red-700/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-visible border-2 border-red-500 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.7)]">
              <div 
                className="absolute inset-0 bg-repeat" 
                style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, zIndex: 1}}
              />
              <div className="relative text-center text-white py-12 px-6 z-10">
                <h2 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-wider text-shadow-lg">
                  LE FESTIVAL ARRIVE !
                </h2>
                <p className="font-headline text-4xl md:text-5xl text-amber-300 tracking-wider mt-2" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
                  GAGNEZ 200 000 FDJ
                </p>
              </div>
            </div>
            
            {/* --- Bottom film strip element --- */}
            <div className="absolute -bottom-4 left-0 right-0 h-8 bg-zinc-800 flex items-center justify-between px-2 rounded-b-lg shadow-inner-strong z-0">
                <div className="flex h-4 w-full bg-zinc-900/50 rounded-sm">
                    <div className="film-perforations"></div>
                </div>
            </div>

          </div>
        </div>
      </Link>
    </section>
  );
}

