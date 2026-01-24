import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Formations Audiovisuelles Professionnelles',
    description: 'Maîtrisez le montage vidéo, le design graphique et le marketing digital en moins de 30 jours. 80% de pratique, formateurs experts, projets réels. Certification professionnelle.',
    keywords: [
        'Formation montage vidéo Djibouti',
        'École audiovisuelle Djibouti',
        'Design graphique formation',
        'Marketing digital Djibouti',
        'Premiere Pro formation',
        'Photoshop Canva formation',
        'DaVinci Resolve Djibouti',
        'Formation création vidéo',
    ],
    openGraph: {
        title: '🎬 Formations Audiovisuelles | Devenez Créateur Pro en 30 Jours',
        description: '📹 Montage Vidéo • 🎨 Design Graphique • 📱 Marketing Digital | 80% Pratique • Projets Réels • Certification Professionnelle',
        url: 'https://cineworldacademie.com/formations',
        type: 'website',
        locale: 'fr_FR',
        siteName: 'Cineworld Académie',
        images: [
            {
                url: '/og-formations.png',
                width: 1200,
                height: 630,
                alt: 'Cineworld Académie - Formations Vidéo, Design & Marketing Digital',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '🎬 Formations Audiovisuelles | Cineworld Académie',
        description: 'Montage Vidéo • Design Graphique • Marketing Digital | 80% Pratique • Certification',
        images: ['/og-formations.png'],
    },
};

export default function FormationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
