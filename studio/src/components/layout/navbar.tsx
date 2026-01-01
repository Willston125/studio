'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F9FAFB] border-b border-gray-200 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* 1. GAUCHE : LES CIBLES (Navigation Stratégique) */}
      <div className="hidden md:flex gap-8 items-center flex-1">
        <Link href="/inscription" className="text-black font-extrabold text-sm uppercase tracking-wide hover:text-[#D4AF37] transition-colors">
          FUTURS ÉLÈVES
        </Link>
        <Link href="/a-propos" className="text-black font-extrabold text-sm uppercase tracking-wide hover:text-[#D4AF37] transition-colors">
          L'ASSOCIATION
        </Link>
        <Link href="#entreprises" className="text-black font-extrabold text-sm uppercase tracking-wide hover:text-[#D4AF37] transition-colors">
          ENTREPRISES
        </Link>
      </div>

      {/* 2. CENTRE : LE LOGO (Autorité) */}
      <div className="flex-1 flex justify-center">
        <Link href="/">
          <Image
            src="/logo_cineworld.png"
            alt="Cineworld Académie"
            width={160}
            height={64}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* 3. DROITE : RASSURANCE & ACTION */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-8">
        <Link href="/a-propos" className="text-gray-600 font-medium text-sm hover:text-black transition-colors">
          À propos
        </Link>
        <Link href="/contact" className="text-gray-600 font-medium text-sm hover:text-black transition-colors">
          Contact
        </Link>

        {/* BOUTON NOIR D'ACTION */}
        <Link
          href="/inscription"
          className="bg-black text-white px-6 py-3 font-bold text-sm uppercase flex items-center gap-3 hover:bg-gray-800 transition-all rounded-sm"
        >
          <span className="text-lg">👤</span>
          CANDIDATER
        </Link>
      </div>

      {/* MENU MOBILE (Burger) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-black p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            <Link
              href="/inscription"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black font-extrabold text-sm uppercase tracking-wide hover:text-[#D4AF37]"
            >
              FUTURS ÉLÈVES
            </Link>
            <Link
              href="/a-propos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black font-extrabold text-sm uppercase tracking-wide hover:text-[#D4AF37]"
            >
              L'ASSOCIATION
            </Link>
            <Link
              href="#entreprises"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black font-extrabold text-sm uppercase tracking-wide hover:text-[#D4AF37]"
            >
              ENTREPRISES
            </Link>
            <hr className="border-gray-200" />
            <Link
              href="/a-propos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 font-medium text-sm hover:text-black"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 font-medium text-sm hover:text-black"
            >
              Contact
            </Link>
            <Link
              href="/inscription"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-black text-white px-6 py-3 font-bold text-sm uppercase flex items-center justify-center gap-3 hover:bg-gray-800 rounded-sm mt-4"
            >
              <span className="text-lg">👤</span>
              CANDIDATER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
