
'use client';

import Link from 'next/link';

export default function CtaBanner() {
  return (
    <Link href="/inscription" className="block bg-destructive hover:bg-destructive/90 transition-colors">
      <div className="container mx-auto px-4 py-6 text-center animate-pulse">
        <div className="font-headline text-primary uppercase">
          <h2 className="text-2xl md:text-4xl tracking-wider">
            Le festival arrive ! Gagnez le grand prix de 200 000 FDJ !
          </h2>
          <p className="text-md md:text-xl font-body text-primary/80 mt-1">
            Formez-vous du 1er au 20 Décembre 2025 et faites votre film.
          </p>
        </div>
      </div>
    </Link>
  );
}
