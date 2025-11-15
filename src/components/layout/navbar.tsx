'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clapperboard, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/inscription', label: 'Inscription formation' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/70 backdrop-blur-md',
        isScrolled ? 'border-b border-neutral-800' : 'border-b border-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Left: Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo_cineworld.png"
              alt="Cineworld Logo"
              width={360}
              height={90}
              className="h-[90px] w-auto"
              priority
            />
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-2 rounded-full bg-black/30 p-1 border border-white/10">
            {navLinks.map((link, index) => (
              <Link key={`${link.label}-${index}`} href={link.href} className={cn(
                "text-sm font-medium text-neutral-300 hover:text-white transition-colors px-4 py-1.5 rounded-full font-body",
                link.href === '/' ? "bg-neutral-700/80 text-white" : ""
              )}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white hover:bg-white/10 rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Rechercher</span>
            </Button>
            <Button asChild className="btn-primary">
              <Link href="/inscription">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl absolute top-24 left-0 w-full">
          <nav className="flex flex-col items-center gap-4 p-8">
            {navLinks.map((link, index) => (
              <Link key={`${link.label}-${index}-mobile`} href={link.href} className="text-lg font-medium text-neutral-200 hover:text-white transition-colors font-body" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4">
               <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-white hover:bg-white/10 rounded-full">
                <Search className="h-5 w-5" />
                <span className="sr-only">Rechercher</span>
              </Button>
              <Button asChild className="btn-primary">
                <Link href="/inscription">S'inscrire</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
