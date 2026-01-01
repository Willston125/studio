import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import BackToTopButton from '@/components/layout/back-to-top-button';

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
  verification: {
    google: '8VrUaQ3Tj84cNZi5zfm4u2b-ZUZxpXu7T0Wuwc3kBOg',
  },
  icons: {
    icon: '/favicon.ico.png',
    apple: '/favicon.ico.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,400;0,700;1,400&family=Oswald:wght@400;700&family=Playfair+Display:wght@700&family=Garamond:wght@400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* 🎓 SEO: Structured Data - Tell Google we're an Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Cineworld Académie Djibouti",
              "alternateName": "Cineworld Academy",
              "description": "Première académie dédiée aux métiers de l'image à Djibouti. Formation professionnelle en réalisation cinéma, montage vidéo, étalonnage et storytelling.",
              "url": "https://cineworld-djibouti.vercel.app",
              "telephone": "+253-77-55-63-44",
              "email": "cineworld@cineworldacademie.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Djibouti",
                "addressRegion": "Djibouti",
                "addressCountry": "DJ"
              },
              "founder": {
                "@type": "Person",
                "name": "Ali William",
                "jobTitle": "Formateur et Réalisateur"
              },
              "offers": {
                "@type": "Offer",
                "category": "Formation Audiovisuelle",
                "priceCurrency": "DJF",
                "price": "5000",
                "priceValidUntil": "2025-12-20",
                "availability": "https://schema.org/InStock"
              },
              "courseMode": "In-person",
              "educationalLevel": "Débutant à Avancé",
              "availableLanguage": ["fr"]
            })
          }}
        />
      </head>
      <body className="font-body antialiased bg-background">
        <Navbar />
        {children}
        <Toaster />
        <BackToTopButton />
      </body>
    </html>
  );
}

