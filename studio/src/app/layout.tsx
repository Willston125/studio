import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
