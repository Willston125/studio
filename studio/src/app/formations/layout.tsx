import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Formations Professionnelles à Djibouti | Cineworld Académie',
    description: 'Développez les compétences les plus demandées à Djibouti : Montage Vidéo professionnel, Création de sites web avec l\'IA, Marketing Digital et Design Graphique. Formation certifiante 80% pratique, projets réels, formateurs experts. Lancez votre carrière créative dès maintenant !',
    keywords: [
        'Formation montage vidéo Djibouti',
        'Création site web IA Djibouti',
        'Marketing digital formation Djibouti',
        'Design graphique Djibouti',
        'École audiovisuelle Djibouti',
        'Premiere Pro DaVinci Resolve',
        'ChatGPT site web',
        'Formation professionnelle Djibouti',
        'Compétences numériques Afrique',
    ],
    openGraph: {
        title: 'Développez vos Compétences professionnelles | Cineworld Académie',
        description: '4 formations essentielles pour réussir : Montage Vidéo • Création de Sites Web avec l\'IA • Marketing Digital • Design Graphique | 80% Pratique • Certification Professionnelle • Formateur Expert | Inscrivez-vous maintenant !',
        url: 'https://cineworldacademie.com/formations',
        type: 'website',
        locale: 'fr_FR',
        siteName: 'Cineworld Académie',
        images: [
            {
                url: '/opengraph.png',
                width: 1200,
                height: 630,
                alt: 'Cineworld Académie Djibouti - Formations Montage Vidéo, Création Web IA, Marketing Digital & Design',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Formations professionnelles à Djibouti | Cineworld Académie',
        description: 'Montage Vidéo • Site Web avec IA • Marketing Digital • Design | 80% Pratique • Certifiant',
        images: ['/opengraph.png'],
    },
};

export default function FormationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
