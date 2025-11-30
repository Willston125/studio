'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function CtaBanner({ className }: { className?: string }) {
  return (
    <section className={cn("container mx-auto px-4 my-16", className)}>
      <Link href="/inscription" className="block relative group">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
          {/* Desktop Banner */}
          <Image
            src="/banniere-fond.png"
            alt="Bannière Festival - Gagnez 200 000 FDJ"
            width={1200}
            height={400}
            className="hidden md:block w-full h-auto object-cover"
            priority
          />
          {/* Mobile Banner */}
          <Image
            src="/banniere-mobile.png"
            alt="Bannière Festival - Gagnez 200 000 FDJ"
            width={600}
            height={600}
            className="block md:hidden w-full h-auto object-cover"
            priority
          />
          {/* Optional: Add a subtle overlay on hover to indicate clickability */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      </Link>
    </section>
  );
}
