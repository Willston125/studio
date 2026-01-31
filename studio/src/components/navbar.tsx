'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Monitor, Palette, Video, TrendingUp, Sparkles, Play, Film, Users, Heart, Handshake } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// Données des menus déroulants
const MENU_ITEMS = {
    formations: {
        label: 'NOS FORMATIONS',
        href: '/formations',
        items: [
            { icon: Monitor, label: 'Site Web avec l\'IA', href: '/formations', description: 'Créez des sites modernes' },
            { icon: Palette, label: 'Design Graphique', href: '/formations', description: 'Maîtrisez Canva & Photoshop' },
            { icon: Video, label: 'Réalisation Vidéo', href: '/formations', description: 'Tournage & montage pro' },
            { icon: TrendingUp, label: 'Marketing Digital', href: '/formations', description: 'Boostez votre visibilité' },
            { icon: Sparkles, label: 'Pack Creator 360°', href: '/formations', description: 'Les 4 modules • -10.000 FDJ', highlight: true },
        ]
    },
    production: {
        label: 'PRODUCTION',
        href: '/production',
        items: [
            { icon: Play, label: 'Nos Réalisations', href: '/production', description: 'Découvrez nos projets' },
            { icon: Film, label: 'Doute Forcé', href: '/production', description: 'Fiction dramatique' },
            { icon: Video, label: 'La Boussole Digitale', href: '/production', description: 'Série documentaire' },
        ]
    },
    association: {
        label: 'L\'ASSOCIATION',
        href: '/association',
        items: [
            { icon: Heart, label: 'Notre Mission', href: '/association', description: 'Ce qui nous anime' },
            { icon: Users, label: 'L\'Équipe', href: '/association', description: 'Les visages de Cineworld' },
            { icon: Handshake, label: 'Devenir Partenaire', href: '/association', description: 'Collaborons ensemble' },
        ]
    }
};

// Composant Dropdown pour Desktop
function NavDropdown({ menu }: { menu: typeof MENU_ITEMS.formations }) {
    return (
        <div className="relative group">
            {/* Bouton parent */}
            <Link
                href={menu.href}
                className="flex items-center gap-1 text-black dark:text-white font-black text-sm uppercase tracking-wide hover:text-[#6e1615] dark:hover:text-[#C5A572] transition-colors py-2"
            >
                {menu.label}
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            {/* Dropdown Panel */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 p-2 min-w-[280px]">
                    {menu.items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.highlight
                                    ? 'bg-[#6e1615]/10 dark:bg-[#C5A572]/10 hover:bg-[#6e1615]/20 dark:hover:bg-[#C5A572]/20'
                                    : 'hover:bg-gray-100 dark:hover:bg-slate-700'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.highlight
                                    ? 'bg-[#6e1615] dark:bg-[#C5A572] text-white dark:text-slate-900'
                                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300'
                                }`}>
                                <item.icon size={20} />
                            </div>
                            <div>
                                <div className={`font-semibold text-sm ${item.highlight
                                        ? 'text-[#6e1615] dark:text-[#C5A572]'
                                        : 'text-gray-900 dark:text-white'
                                    }`}>
                                    {item.label}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Composant Accordéon pour Mobile
function MobileAccordion({ menu, isOpen, onToggle, onClose }: {
    menu: typeof MENU_ITEMS.formations;
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}) {
    return (
        <div className="border-b border-gray-100 dark:border-slate-800 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-3 text-black dark:text-white font-black text-sm uppercase tracking-wide"
            >
                {menu.label}
                <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="pb-3 pl-4 space-y-1">
                    {menu.items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${item.highlight
                                    ? 'bg-[#6e1615]/10 dark:bg-[#C5A572]/10'
                                    : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                                }`}
                        >
                            <item.icon size={18} className={item.highlight ? 'text-[#6e1615] dark:text-[#C5A572]' : 'text-gray-500'} />
                            <span className={`text-sm ${item.highlight ? 'font-bold text-[#6e1615] dark:text-[#C5A572]' : 'text-gray-700 dark:text-gray-300'}`}>
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (key: string) => {
        setOpenAccordion(openAccordion === key ? null : key);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenAccordion(null);
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#F9FAFB] dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 h-[90px] flex items-center justify-between px-6 md:px-12 transition-colors duration-300">

            {/* PARTIE GAUCHE - Navigation Principale avec Dropdowns */}
            <div className="hidden md:flex items-center gap-8 flex-1">
                <NavDropdown menu={MENU_ITEMS.formations} />
                <NavDropdown menu={MENU_ITEMS.association} />
                <NavDropdown menu={MENU_ITEMS.production} />
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
                <div className="absolute top-[90px] left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-lg md:hidden z-40 max-h-[calc(100vh-90px)] overflow-y-auto">
                    <div className="p-6">
                        {/* Accordéons pour les menus */}
                        <MobileAccordion
                            menu={MENU_ITEMS.formations}
                            isOpen={openAccordion === 'formations'}
                            onToggle={() => toggleAccordion('formations')}
                            onClose={closeMobileMenu}
                        />
                        <MobileAccordion
                            menu={MENU_ITEMS.association}
                            isOpen={openAccordion === 'association'}
                            onToggle={() => toggleAccordion('association')}
                            onClose={closeMobileMenu}
                        />
                        <MobileAccordion
                            menu={MENU_ITEMS.production}
                            isOpen={openAccordion === 'production'}
                            onToggle={() => toggleAccordion('production')}
                            onClose={closeMobileMenu}
                        />

                        <hr className="border-gray-200 dark:border-slate-700 my-4" />

                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="block text-gray-700 dark:text-gray-300 font-medium text-sm hover:text-black dark:hover:text-white py-3"
                        >
                            Nous contacter
                        </Link>

                        <Link
                            href="/inscription"
                            onClick={closeMobileMenu}
                            className="block mt-4 bg-[#6e1615] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider text-center hover:bg-[#8b1c1b] transition-all shadow-md"
                        >
                            CANDIDATER
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

