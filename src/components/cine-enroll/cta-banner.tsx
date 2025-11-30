'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function CtaBanner({ className }: { className?: string }) {
  return (
    <section className={cn("max-w-[1200px] mx-auto my-20 px-4", className)}>
      <div className="group relative bg-[#E30613] rounded-xl p-[30px_20px] overflow-visible shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center min-h-[200px] md:min-h-[200px] sm:min-h-[160px] xs:min-h-[140px]">

        {/* Effet de brillance animé (Shine) */}
        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 z-10 group-hover:left-full pointer-events-none"></div>

        {/* Image Laptop - Gauche */}
        <div className="absolute left-[2%] sm:left-[5%] -top-[20px] sm:-top-[30px] z-30 w-[120px] sm:w-[180px] hidden xs:block transition-transform duration-300 hover:-translate-y-[5px]">
          <Image
            src="/laptop.png"
            alt="Ordinateur portable à gagner"
            width={180}
            height={120}
            className="w-full h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Contenu Central */}
        <div className="relative z-20 text-center text-white">
          <div className="text-[16px] sm:text-[18px] md:text-[24px] font-bold mb-[10px] uppercase tracking-[1px]">
            LE FESTIVAL ARRIVE
          </div>

          <div className="text-[22px] sm:text-[28px] md:text-[36px] font-black mb-[5px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            GAGNEZ 200 000 FDJ
          </div>

          <div className="text-[12px] sm:text-[14px] md:text-[16px] font-medium opacity-90 mb-6">
            + ORDINATEUR & SMARTPHONE
          </div>

          <Button
            asChild
            className="bg-white text-[#E30613] hover:bg-gray-100 font-bold text-lg px-8 py-2 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <Link href="/inscription">
              Je participe !
            </Link>
          </Button>
        </div>

        {/* Image Phone - Droite */}
        <div className="absolute right-[2%] sm:right-[5%] -top-[10px] sm:-top-[15px] z-30 w-[80px] sm:w-[120px] hidden xs:block transition-transform duration-300 hover:-translate-y-[5px]">
          <Image
            src="/phone.png"
            alt="Smartphone à gagner"
            width={120}
            height={200}
            className="w-full h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
          />
        </div>

      </div>
    </section>
  );
}
