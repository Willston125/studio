import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import StatusBanner from '@/components/StatusBanner';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  // === BASE URL (pour les images OG) ===
  metadataBase: new URL('https://cineworldacademie.com'),

  // === TITRE & DESCRIPTION ===
  title: {
    default: 'Cineworld Académie | Formation Audiovisuelle à Djibouti',
    template: '%s | Cineworld Académie',
  },
  description: 'Première académie audiovisuelle de Djibouti. Formations pratiques en réalisation vidéo, Editing, Design Graphique et Marketing digital depuis 2025.',

  // === KEYWORDS ===
  keywords: [
    'formation professionnelle',
    'école audiovisuelle',
    'réalisation vidéo',
    'Cineworld',
    'Formation vidéo Djibouti',
    'École Cinéma Djibouti',
    'Montage vidéo professionnel',
    'Editing vidéo',
    'Graphic Design Djibouti',
    'Design graphique formation',
    'Photoshop Djibouti',
    'Canva formation',
    'Marketing Digital Djibouti',
    'Community Manager formation',
    'Facebook Ads Djibouti',
    'Formation audiovisuelle',
    'Création site web IA',
    'ChatGPT formation',
    'Formation créative Djibouti',
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

  // === CANONICAL URL (version officielle HTTPS) ===
  alternates: {
    canonical: 'https://cineworldacademie.com',
  },

  // === OPEN GRAPH (Facebook, WhatsApp) ===
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cineworldacademie.com',
    siteName: 'Cineworld Académie',
    title: 'Cineworld Académie',
    description: 'Formez-vous aux métiers du digital à Djibouti',
    images: [
      {
        url: '/opengraph.png',
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
    description: 'Formez-vous aux métiers du digital à Djibouti',
    images: ['/opengraph.png'],
  },

  // === FAVICONS ===
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          {process.env.NEXT_PUBLIC_SITE_STATUS && (
            <StatusBanner
              message={process.env.NEXT_PUBLIC_SITE_STATUS}
              type="warning"
            />
          )}
          <Navbar />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

