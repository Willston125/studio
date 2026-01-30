
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth' is handled by CSS in globals.css
    });
  };

  return (
    <Button
      variant="default"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-amber-400',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      )}
      aria-label="Retour en haut"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}

    