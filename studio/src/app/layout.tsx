import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Cineworld Académie',
  description: 'Formation Audiovisuelle à Djibouti',
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

