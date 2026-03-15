'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Monitor, Palette, Video, TrendingUp, Sparkles, Play, Film, Users, Heart, Handshake, Target, BarChart3, Eye, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// Données des menus déroulants
const MENU_ITEMS = {
    formations: {
        label: 'NOS FORMATIONS',
        href: '/formations',
        items: [
            { icon: Monitor, label: 'Site Web avec l\'IA', href: '/formations/1', description: 'Module 1 • 5 jours • 15.000 FDJ' },
            { icon: Palette, label: 'Design Graphique Pro', href: '/formations/2', description: 'Module 2 • 12 jours • 10.000 FDJ' },
            { icon: Video, label: 'Réalisation & Montage Vidéo', href: '/formations/3', description: 'Module 3 • 15 jours • 13.000 FDJ' },
            { icon: TrendingUp, label: 'Marketing Digital', href: '/formations/4', description: 'Module 4 • 8 jours • 7.000 FDJ' },
            { icon: Sparkles, label: 'Pack Creator 360°', href: '/inscription?module=5', description: 'Les 4 modules • 45.000 FDJ (−10.000)', highlight: true },
        ]
    },
    production: {
        label: 'PRODUCTION',
        href: '/production',
        items: [
            { icon: Play, label: 'Nos Réalisations', href: '/production', description: 'Découvrez nos projets' },
            { icon: Film, label: 'Doute Forcé', href: '/production#featured', description: 'Fiction dramatique • Saison 1' },
            { icon: Video, label: 'Tous les Projets', href: '/production#all-projects', description: 'Série, film, documentaire' },
        ]
    },
    association: {
        label: 'L\'ASSOCIATION',
        href: '/association',
        items: [
            { icon: Target, label: 'Le Défi', href: '/association#defi', description: 'Une jeunesse en attente' },
            { icon: Heart, label: 'Notre Différence', href: '/association#difference', description: 'Un modèle 100% solidaire' },
            { icon: Eye, label: 'Nos 3 Axes d\'Action', href: '/association#axes', description: 'Former, Produire, Sensibiliser' },
            { icon: MapPin, label: 'Notre Parcours', href: '/association#parcours', description: 'La genèse et l\'expansion' },
            { icon: BarChart3, label: 'Vision 2030', href: '/association#vision', description: 'Nos objectifs ambitieux' },
            { icon: Handshake, label: 'Nos Partenaires', href: '/association#partenaires', description: 'Ils nous font confiance' },
        ]
    }
};

// ─── Helper: scroll vers l'ancre, avec retry pour navigation cross-page ──
function scrollToHash(hash: string, retries = 15) {
    const el = document.getElementById(hash);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }
    // Si l'élément n'existe pas encore (page en cours de chargement), retry
    if (retries > 0) {
        setTimeout(() => scrollToHash(hash, retries - 1), 200);
    }
}

// Composant Dropdown pour Desktop
function NavDropdown({ menu, pathname, router }: {
    menu: typeof MENU_ITEMS.formations;
    pathname: string;
    router: ReturnType<typeof useRouter>;
}) {
    const handleClick = useCallback((e: React.MouseEvent, href: string) => {
        const [path, hash] = href.split('#');
        if (!hash) return; // pas d'ancre → navigation normale via Link

        e.preventDefault();

        if (pathname === path) {
            // Déjà sur la page → scroll direct
            scrollToHash(hash);
        } else {
            // Autre page → naviguer puis scroll après chargement
            router.push(href);
            setTimeout(() => scrollToHash(hash), 600);
        }
    }, [pathname, router]);

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
                            onClick={(e) => handleClick(e, item.href)}
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
function MobileAccordion({ menu, isOpen, onToggle, onClose, pathname, router }: {
    menu: typeof MENU_ITEMS.formations;
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
    pathname: string;
    router: ReturnType<typeof useRouter>;
}) {
    const handleClick = useCallback((e: React.MouseEvent, href: string) => {
        const [path, hash] = href.split('#');
        onClose();
        if (!hash) return;

        e.preventDefault();

        if (pathname === path) {
            scrollToHash(hash);
        } else {
            router.push(href);
            setTimeout(() => scrollToHash(hash), 600);
        }
    }, [pathname, router, onClose]);

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
                            onClick={(e) => handleClick(e, item.href)}
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
    const pathname = usePathname();
    const router = useRouter();

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
                <NavDropdown menu={MENU_ITEMS.formations} pathname={pathname} router={router} />
                <NavDropdown menu={MENU_ITEMS.association} pathname={pathname} router={router} />
                <NavDropdown menu={MENU_ITEMS.production} pathname={pathname} router={router} />
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
                            pathname={pathname}
                            router={router}
                        />
                        <MobileAccordion
                            menu={MENU_ITEMS.association}
                            isOpen={openAccordion === 'association'}
                            onToggle={() => toggleAccordion('association')}
                            onClose={closeMobileMenu}
                            pathname={pathname}
                            router={router}
                        />
                        <MobileAccordion
                            menu={MENU_ITEMS.production}
                            isOpen={openAccordion === 'production'}
                            onToggle={() => toggleAccordion('production')}
                            onClose={closeMobileMenu}
                            pathname={pathname}
                            router={router}
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

