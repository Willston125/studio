'use client';

import * as React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/20">
      <div className="container mx-auto px-4 py-8 text-center">
        <h3 className="font-headline text-2xl uppercase text-amber-500">
          LE CINEMA C'EST #QUEDUBON
        </h3>
        <div className="mt-3 flex flex-col items-center gap-1">
          <p className="font-body text-sm text-gray-400">+253 77 55 63 44</p>
          <p className="font-body text-sm text-gray-400">cineworld@cineworldacademie.com</p>
        </div>
        <p className="font-body text-sm text-gray-400 mt-2">
          Cineworld Djibouti - DJIBOUTI
        </p>
      </div>
    </footer>
  );
}
