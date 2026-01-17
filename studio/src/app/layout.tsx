import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  // === TITRE & DESCRIPTION ===
  title: {
    default: 'Cineworld Académie | Formation Audiovisuelle à Djibouti',
    template: '%s | Cineworld Académie',
  },
  description: 'La première académie audiovisuelle à Djibouti. Formation professionnelle en vidéo, montage, design graphique et marketing digital.',

  // === KEYWORDS ===
  keywords: [
    'Formation vidéo Djibouti',
    'École Cinéma Djibouti',
    'Montage vidéo',
    'Graphic Design Djibouti',
    'Cinéworld',
    'Marketing Digital Djibouti',
    'Formation audiovisuelle',
  ],

  // === ROBOTS (INDEXATION GOOGLE) ===
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // === FAVICON & ICONS ===
  icons: {
    icon: '/logo_cineworld.png',
    shortcut: '/logo_cineworld.png',
    apple: '/logo_cineworld.png',
  },

  // === OPEN GRAPH (Facebook, WhatsApp) ===
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cineworldacademie.com',
    siteName: 'Cineworld Académie',
    title: 'Cineworld Académie | Formation Audiovisuelle à Djibouti',
    description: 'La première académie audiovisuelle à Djibouti. Formation professionnelle en vidéo, montage, design graphique et marketing digital.',
    images: [
      {
        url: '/logo_cineworld.png',
        width: 1200,
        height: 630,
        alt: 'Cineworld Académie - Formation Audiovisuelle',
      },
    ],
  },

  // === TWITTER CARD ===
  twitter: {
    card: 'summary_large_image',
    title: 'Cineworld Académie | Formation Audiovisuelle à Djibouti',
    description: 'La première académie audiovisuelle à Djibouti.',
    images: ['/logo_cineworld.png'],
  },

  // === AUTRES ===
  authors: [{ name: 'Cineworld Académie' }],
  creator: 'Cineworld Académie',
  publisher: 'Cineworld Académie',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

