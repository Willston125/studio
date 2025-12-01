'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/inscription', label: 'Inscription' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled for background styling
      setIsScrolled(currentScrollY > 10);

      // Smart Navbar Logic: Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down & past 100px -> Hide
      } else {
        setIsVisible(true);  // Scrolling up or at top -> Show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Hide Navbar on Inscription page for distraction-free layout
  if (pathname === '/inscription') return null;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8',
        !isVisible && '-translate-y-full'
      )}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_cineworld.png"
              alt="Cineworld Logo"
              width={240}
              height={60}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link key={`${link.label}-${index}`} href={link.href} className={cn(
                "text-base font-medium text-neutral-300 hover:text-[#FFD700] transition-colors font-body tracking-wide",
                link.href === '/' ? "text-white" : ""
              )}>
                {link.label}
              </Link>
            ))}
            <Link href="/reglement" className="text-base font-medium text-[#D4AF37] hover:text-white transition-colors font-body tracking-wide uppercase">
              Règlement
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="text-white">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-white/10">
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link, index) => (
              <Link key={`${link.label}-${index}-mobile`} href={link.href} className="text-xl font-medium text-neutral-200 hover:text-[#FFD700] transition-colors font-body" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/reglement" className="text-xl font-medium text-[#D4AF37] hover:text-white transition-colors font-body uppercase" onClick={() => setIsMenuOpen(false)}>
              Règlement
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
