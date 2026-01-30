'use client';

// Types pour les formations
interface Formation {
    id: number;
    titre: string;
    description?: string;
    duree: string;
    tarif: string;
    niveau: string;
    dateDebut: string;
    lieu: string;
    programme?: string[];
}

// Composant pour générer le Schema.org JSON-LD
export default function CourseSchema({ formations }: { formations: Formation[] }) {
    // Convertir le tarif en nombre (ex: "15.000 FDJ" → 15000)
    const parseTarif = (tarif: string): number => {
        return parseInt(tarif.replace(/[^\d]/g, '')) || 0;
    };

    // Convertir la date en format ISO (ex: "15 Février 2026" → "2026-02-15")
    const parseDate = (dateStr: string): string => {
        const mois: { [key: string]: string } = {
            'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04',
            'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08',
            'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12'
        };

        const parts = dateStr.toLowerCase().match(/(\d+)\s+(\w+)\s+(\d+)/);
        if (parts) {
            const jour = parts[1].padStart(2, '0');
            const moisNum = mois[parts[2]] || '01';
            const annee = parts[3];
            return `${annee}-${moisNum}-${jour}`;
        }
        return '2026-02-15'; // Date par défaut
    };

    // Générer le schema pour chaque formation
    const coursesSchema = formations.map(formation => ({
        "@type": "Course",
        "name": formation.titre,
        "description": formation.description || `Formation professionnelle: ${formation.titre}`,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Cineworld Académie",
            "url": "https://cineworldacademie.com",
            "logo": "https://cineworldacademie.com/logo_cineworld.png",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aviation, Institut DHIM",
                "addressLocality": "Djibouti",
                "addressCountry": "DJ"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+253-77-14-53-06",
                "contactType": "customer service",
                "availableLanguage": ["French", "Arabic"]
            }
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "startDate": parseDate(formation.dateDebut),
            "duration": formation.duree,
            "courseMode": "onsite",
            "inLanguage": "fr",
            "location": {
                "@type": "Place",
                "name": formation.lieu,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Djibouti",
                    "addressCountry": "DJ"
                }
            }
        },
        "offers": {
            "@type": "Offer",
            "price": parseTarif(formation.tarif),
            "priceCurrency": "DJF",
            "availability": "https://schema.org/InStock",
            "url": `https://cineworldacademie.com/inscription?module=${formation.id}`,
            "validFrom": "2025-01-01"
        },
        "educationalLevel": formation.niveau,
        "occupationalCategory": "Media and Communication",
        "teaches": formation.programme?.slice(0, 3).join(", ") || formation.titre
    }));

    // Schema global de l'organisation
    const organizationSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EducationalOrganization",
                "@id": "https://cineworldacademie.com/#organization",
                "name": "Cineworld Académie",
                "alternateName": "CWA",
                "url": "https://cineworldacademie.com",
                "logo": "https://cineworldacademie.com/logo_cineworld.png",
                "description": "Première académie audiovisuelle de Djibouti. Formations pratiques en réalisation vidéo, Design Graphique et Marketing digital.",
                "foundingDate": "2025",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Aviation, Institut DHIM",
                    "addressLocality": "Djibouti",
                    "addressCountry": "DJ"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+253-77-14-53-06",
                    "contactType": "customer service",
                    "availableLanguage": ["French", "Arabic"]
                },
                "sameAs": [
                    "https://www.facebook.com/cineworldacademie",
                    "https://www.instagram.com/cineworldacademie"
                ]
            },
            ...coursesSchema.map(course => ({ ...course, "@context": undefined }))
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
