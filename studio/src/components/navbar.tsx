'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#F9FAFB] dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 h-[90px] flex items-center justify-between px-6 md:px-12 transition-colors duration-300">

            {/* PARTIE GAUCHE - Navigation Principale */}
            <div className="hidden md:flex items-center gap-8 flex-1">
                <Link
                    href="/formations"
                    className="text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] transition-colors"
                >
                    NOS FORMATIONS
                </Link>
                <Link
                    href="/association"
                    className="text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] transition-colors"
                >
                    L'ASSOCIATION
                </Link>
                <Link
                    href="/production"
                    className="text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] transition-colors"
                >
                    PRODUCTION
                </Link>
            </div>

            {/* PARTIE CENTRE - Logo */}
            <div className="flex-1 flex justify-center md:justify-center">
                <Link href="/">
                    <Image
                        src="/logo_cineworld.png"
                        alt="Cineworld Académie"
                        width={140}
                        height={60}
                        className="h-16 w-auto object-contain dark:brightness-110"
                        priority
                    />
                </Link>
            </div>

            {/* PARTIE DROITE - Actions */}
            <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
                {/* Theme Toggle */}
                <ThemeToggle />

                <Link
                    href="/contact"
                    className="text-gray-700 dark:text-gray-300 font-medium text-sm hover:text-black dark:hover:text-white transition-colors"
                >
                    Nous contacter
                </Link>

                <Link
                    href="/inscription"
                    className="bg-[#6e1615] text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#8b1c1b] transition-all shadow-md"
                >
                    CANDIDATER
                </Link>
            </div>

            {/* MOBILE - Menu Burger */}
            <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-900 dark:text-white p-2"
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE - Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[90px] left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-lg md:hidden z-40">
                    <div className="flex flex-col p-6 space-y-4">
                        <Link
                            href="/formations"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] py-2"
                        >
                            NOS FORMATIONS
                        </Link>
                        <Link
                            href="/association"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] py-2"
                        >
                            L'ASSOCIATION
                        </Link>
                        <Link
                            href="/production"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] py-2"
                        >
                            PRODUCTION
                        </Link>

                        <hr className="border-gray-200 dark:border-slate-700" />

                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-700 dark:text-gray-300 font-medium text-sm hover:text-black dark:hover:text-white py-2"
                        >
                            Nous contacter
                        </Link>

                        <Link
                            href="/inscription"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-[#6e1615] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider text-center hover:bg-[#8b1c1b] transition-all shadow-md"
                        >
                            CANDIDATER
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
