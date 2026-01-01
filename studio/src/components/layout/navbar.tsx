'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Film, Award, Crown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  const programs = [
    { name: "Pack Initié", duration: "8 jours", price: "5 000 FDJ", icon: <Film className="w-4 h-4" /> },
    { name: "Pack Maîtrise", duration: "12 jours", price: "10 000 FDJ", icon: <Award className="w-4 h-4" />, popular: true },
    { name: "Pack Expert", duration: "23 jours", price: "20 000 FDJ", icon: <Crown className="w-4 h-4" /> },
  ];

  const scrollToPackages = () => {
    handleLinkClick();
    if (pathname === '/') {
      const element = document.querySelector('h2');
      const packagesSection = Array.from(document.querySelectorAll('h2')).find(
        el => el.textContent?.includes('NOS PACKS CINÉMATOGRAPHIQUES')
      );
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = '/#programmes';
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 p-5 flex justify-center z-[9999] max-[900px]:justify-end max-[900px]:px-5 max-[900px]:py-[15px] bg-white/95 border-b border-gray-100 shadow-sm backdrop-blur-md">

      {/* LOGO */}
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

      {/* MENU PC (PILULE) */}
      <div className="desktop-menu max-[900px]:hidden inline-flex bg-gray-50/80 px-[30px] py-[12px] rounded-[50px] border border-gray-200 backdrop-blur-[10px] gap-[15px] items-center">

        {/* ACCUEIL */}
        <Link
          href="/"
          className={`text-gray-700 no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#FFD700] hover:text-black ${pathname === '/' ? 'bg-[#FFD700] text-black' : ''}`}
        >
          ACCUEIL
        </Link>

        {/* PROGRAMMES DROPDOWN */}
        <div
          className="relative group"
          onMouseEnter={() => setIsProgramsOpen(true)}
          onMouseLeave={() => setIsProgramsOpen(false)}
        >
          <button
            className={`flex items-center gap-1 text-gray-700 no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#FFD700] hover:text-black ${isProgramsOpen ? 'bg-[#FFD700]/50 text-black' : ''}`}
          >
            PROGRAMMES
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${isProgramsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
          >
            <div className="p-2">
              {programs.map((program, index) => (
                <button
                  key={index}
                  onClick={scrollToPackages}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-500/20 transition-colors text-left group"
                >
                  <div className="text-yellow-400">{program.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-semibold text-sm">{program.name}</span>
                      {program.popular && (
                        <span className="bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full font-bold">
                          POPULAIRE
                        </span>
                      )}
                    </div>
                    <span className="text-gray-500 text-xs">{program.duration} • {program.price}</span>
                  </div>
                </button>
              ))}

              <div className="border-t border-white/10 mt-2 pt-2">
                <button
                  onClick={scrollToPackages}
                  className="w-full text-center py-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
                >
                  Voir tous les programmes →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* À PROPOS */}
        <Link
          href="/a-propos"
          className={`text-gray-700 no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#FFD700] hover:text-black ${pathname === '/a-propos' ? 'bg-[#FFD700] text-black' : ''}`}
        >
          À PROPOS
        </Link>

        {/* CONTACT */}
        <Link
          href="/contact"
          className={`text-gray-700 no-underline font-oswald uppercase text-[0.9rem] px-[15px] py-[8px] rounded-[20px] transition-all duration-300 hover:bg-[#FFD700] hover:text-black ${pathname === '/contact' ? 'bg-[#FFD700] text-black' : ''}`}
        >
          CONTACT
        </Link>

        {/* INSCRIPTION - CTA BUTTON */}
        <Link
          href="/inscription"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black no-underline font-oswald uppercase text-[0.9rem] px-[20px] py-[10px] rounded-[25px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] ml-2"
        >
          INSCRIPTION
        </Link>
      </div>

      {/* MENU MOBILE (BURGER) */}
      <div className="mobile-menu-container min-[901px]:hidden block">
        {/* Bouton Burger */}
        <div
          className={`fixed right-[20px] top-[20px] z-[10001] cursor-pointer p-[10px] bg-white border-2 border-[#FFD700] rounded-[8px] ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        >
          <div className={`bar w-[25px] h-[3px] bg-black my-[5px] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[8px]' : ''}`}></div>
          <div className={`bar w-[25px] h-[3px] bg-black my-[5px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`bar w-[25px] h-[3px] bg-black my-[5px] transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[8px]' : ''}`}></div>
        </div>

        {/* Overlay Plein Écran */}
        <div
          className={`fixed inset-0 bg-white z-[10000] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          {/* Menu Centré */}
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <Link href="/" onClick={handleLinkClick} className="text-black no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#FFD700] hover:scale-110">
              ACCUEIL
            </Link>

            {/* Programmes Section Mobile */}
            <div className="flex flex-col items-center">
              <span className="text-yellow-400 font-oswald text-xl uppercase tracking-widest py-2">
                PROGRAMMES
              </span>
              <div className="flex flex-col items-center gap-2 mt-2">
                {programs.map((program, index) => (
                  <button
                    key={index}
                    onClick={scrollToPackages}
                    className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                  >
                    {program.name} ({program.duration})
                  </button>
                ))}
              </div>
            </div>

            <Link href="/a-propos" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">
              À PROPOS
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="text-white no-underline font-oswald text-2xl uppercase tracking-widest py-3 px-6 transition-all duration-300 hover:text-[#D4AF37] hover:scale-110">
              CONTACT
            </Link>

            {/* CTA Mobile */}
            <Link
              href="/inscription"
              onClick={handleLinkClick}
              className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-oswald text-xl uppercase tracking-widest py-4 px-8 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              INSCRIPTION
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
