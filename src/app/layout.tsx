import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';
const imageUrl = `${siteUrl}/affiche.jpg`;

export const metadata: Metadata = {
  title: 'Masterclass Cinéma Djibouti - Inscriptions Ouvertes',
  description: 'Apprenez à réaliser vos propres films. Scénario, Tournage, Montage. Places limitées ! Cliquez ici pour vous inscrire.',
  openGraph: {
    title: 'Masterclass Cinéma Djibouti - Inscriptions Ouvertes',
    description: 'Apprenez à réaliser vos propres films. Scénario, Tournage, Montage. Places limitées ! Cliquez ici pour vous inscrire.',
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
    siteName: 'Masterclass Cinéma Djibouti',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masterclass Cinéma Djibouti - Inscriptions Ouvertes',
    description: 'Apprenez à réaliser vos propres films. Scénario, Tournage, Montage. Places limitées !',
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
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
