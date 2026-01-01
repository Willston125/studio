'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="inst-navbar">

      {/* GAUCHE : LIENS GRAS */}
      <div className="nav-left">
        <Link href="/#students" className="nav-link-bold">Futurs Élèves</Link>
        <Link href="/#parents" className="nav-link-bold">Parents</Link>
        <Link href="/#partenaires" className="nav-link-bold">Entreprises</Link>
      </div>

      {/* CENTRE : LOGO */}
      <div className="nav-center">
        <Link href="/">
          <Image
            src="/logo_cineworld.png"
            alt="Cineworld Djibouti"
            width={180}
            height={60}
            className="nav-logo"
            priority
          />
        </Link>
      </div>

      {/* DROITE : LIENS FINS + BOUTON */}
      <div className="nav-right">
        <Link href="/contact" className="nav-link-light">Nous contacter</Link>
        <Link href="/reglement" className="nav-link-light">FAQ</Link>
        <span className="search-icon">
          <Search className="w-5 h-5" />
        </span>

        <a
          href="https://wa.me/25377556344"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inst-black"
        >
          <User className="w-4 h-4" />
          CANDIDATER
        </a>
      </div>

    </nav>
  );
}
