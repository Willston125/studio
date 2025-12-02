'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/communication', label: 'Communication' },
  { href: '/inscription', label: 'Inscription' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

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
        <div className="flex items-center justify-between navbar">
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

          {/* Center: Navigation Links (Desktop & Mobile) */}
          <nav className="nav-links">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reglement"
              className={pathname === '/reglement' ? "active" : ""}
            >
              Règlement
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
