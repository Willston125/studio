'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar relative p-5 flex justify-center z-[9999] max-[900px]:justify-end max-[900px]:px-5 max-[900px]:py-[15px]">

      {/* LOGO (Optional / As per request) */}
      <div className="logo-container absolute left-[20px] top-[20px] max-[900px]:left-[20px]">
        <Link href="/">
          <Image
            src="/logo_cineworld.png"
            alt="Cinéworld"
            width={200}
            height={90}
            className="h-[90px] max-[900px]:h-[70px] w-auto object-contain transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>

      {/* MENU PC (PILULE) - Caché sur mobile (< 900px) */}
      <div className="desktop-menu max-[900px]:hidden inline-flex bg-black/60 px-[30px] py-[12px] rounded-[50px] border border-white/20 backdrop-blur-[10px] gap-[15px]">
        <Link href="/" className={`text-[#e0e0e0] no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black ${pathname === '/' ? 'bg-[#D4AF37] text-black' : ''}`}>ACCUEIL</Link>
        <Link href="/communication" className={`text-[#e0e0e0] no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black ${pathname === '/communication' ? 'bg-[#D4AF37] text-black' : ''}`}>COURS COM'</Link>
        <Link href="/inscription" className={`text-[#e0e0e0] no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black ${pathname === '/inscription' ? 'bg-[#D4AF37] text-black' : ''}`}>INSCRIPTION</Link>
        <Link href="/contact" className={`text-[#e0e0e0] no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black ${pathname === '/contact' ? 'bg-[#D4AF37] text-black' : ''}`}>CONTACT</Link>
        <Link href="/reglement" className={`text-[#e0e0e0] no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black ${pathname === '/reglement' ? 'bg-[#D4AF37] text-black' : ''}`}>RÈGLEMENT</Link>
      </div>

      {/* MENU MOBILE (BURGER) - Visible seulement sur mobile (< 900px) */}
      <div className="mobile-menu-container min-[901px]:hidden block">
        {/* Bouton Burger */}
        <div
          className={`fixed right-[20px] top-[20px] z-[10001] cursor-pointer p-[10px] bg-black border-2 border-[#D4AF37] rounded-[8px] ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        >
          <div className={`bar w-[25px] h-[3px] bg-[#D4AF37] my-[5px] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[8px]' : ''}`}></div>
          <div className={`bar w-[25px] h-[3px] bg-[#D4AF37] my-[5px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`bar w-[25px] h-[3px] bg-[#D4AF37] my-[5px] transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[8px]' : ''}`}></div>
        </div>

        {/* Overlay Plein Écran Noir Opaque */}
        <div
          className={`fixed inset-0 bg-black z-[10000] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={handleLinkClick}
        >
          {/* Menu Centré */}
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <Link href="/" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">ACCUEIL</Link>
            <Link href="/communication" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">COURS COM'</Link>
            <Link href="/inscription" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">INSCRIPTION</Link>
            <Link href="/contact" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">CONTACT</Link>
            <Link href="/reglement" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">RÈGLEMENT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
