
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';
const imageUrl = `${siteUrl}/affiche.jpg`;

export const metadata: Metadata = {
  title: 'Formation Cinéma - Inscriptions Ouvertes',
  description: 'Apprenez à réaliser, jouer et monter comme des professionnels. Places limitées !',
  openGraph: {
    title: 'Formation Cinéma - Inscriptions Ouvertes',
    description: 'Apprenez à réaliser, jouer et monter comme des professionnels. Places limitées !',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Affiche de la Masterclass Cinéma Djibouti',
      },
    ],
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Cineworld Djibouti',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation Cinéma - Inscriptions Ouvertes',
    description: 'Apprenez à réaliser, jouer et monter comme des professionnels. Places limitées !',
    images: [imageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <div 
          className="fixed inset-0 pointer-events-none z-[100]"
          style={{
            background: 'radial-gradient(circle at center, transparent 60%, black 150%)'
          }}
        />
      </body>
    </html>
  );
}
