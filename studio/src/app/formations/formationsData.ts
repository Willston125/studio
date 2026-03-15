import { Monitor, Palette, Video, TrendingUp } from 'lucide-react';

export const FORMATIONS = [
    {
        id: 1,
        anchorId: "module-web",
        icon: Monitor,
        module: "Module 1",
        titre: "Création de site internet avec l'IA",
        description: "Apprenez à concevoir et déployer un site web professionnel en utilisant les dernières technologies d'intelligence artificielle. Une approche révolutionnaire du développement web accessible à tous.",
        duree: "5 Jours / 35 heures de formation",
        tarif: "15.000 FDJ",
        niveau: "Débutant",
        livrable: "1 site web en ligne",
        outils: ["Gemini", "Canva", "Vercel"],
        pratique: 70,
        placesRestantes: 6,
        dateDebut: "15 Février 2026",
        horaires: "16h - 18h",
        lieu: "Saalam Tower, Djibouti",
        image: "/creation de site internet.jpg",
        objectPosition: "object-center",
        publicCible: ["Entrepreneurs", "Créateurs de contenu", "Freelances"],
        prerequis: ["Aucun prérequis technique", "Ordinateur portable recommandé"],
        objectifsPedagogiques: [
            "Maîtriser l'art du prompting avec les IA génératives",
            "Concevoir une interface UI/UX moderne",
            "Déployer un site web fonctionnel en ligne"
        ],
        competencesAcquises: [
            { nom: "Prompting IA", niveau: 85 },
            { nom: "UI/UX Design", niveau: 70 },
            { nom: "Déploiement Web", niveau: 75 }
        ],
        syllabus: [
            { jour: 1, titre: "Introduction à l'IA Générative", contenu: ["Prise en main de Gemini", "L'art du prompting", "Génération de contenu"] },
            { jour: 2, titre: "Design UI/UX par IA", contenu: ["Maquettes inspiration", "Palette de couleurs", "Typographie"] },
            { jour: 3, titre: "Découverte de l'outil IDE Antigravity", contenu: ["Prise en main de l'IDE", "Environnement de développement", "Premiers projets"] },
            { jour: 4, titre: "Génération de Code", contenu: ["HTML/CSS assisté IA", "Composants interactifs", "Responsive design"] },
            { jour: 5, titre: "Mise en Ligne", contenu: ["Déploiement Vercel", "Domaine personnalisé", "SEO basique"] }
        ],
        programme: [
            "Introduction à l'IA Générative",
            "Design UI/UX par IA",
            "Découverte de l'outil IDE Antigravity",
            "Génération de Code assisté IA",
            "Mise en ligne & SEO"
        ],
        certification: "Certificat Développeur Web IA"
    },
    {
        id: 2,
        anchorId: "module-design",
        icon: Palette,
        module: "Module 2",
        titre: "Design graphique professionnel",
        description: "Développez votre créativité et maîtrisez les outils de design graphique utilisés par les professionnels. Créez des visuels impactants pour tous types de supports.",
        duree: "12 Jours / 84 heures de formation",
        tarif: "10.000 FDJ",
        niveau: "Débutant",
        livrable: "Portfolio de 5+ créations",
        outils: ["Canva", "Photoshop"],
        pratique: 85,
        placesRestantes: 3,
        dateDebut: "1er Mars 2026",
        horaires: "9h - 17h",
        lieu: "Saalam Tower, Djibouti",
        image: "/creation graphique.jpg",
        objectPosition: "object-center",
        publicCible: ["Graphistes en devenir", "Community managers", "Entrepreneurs"],
        prerequis: ["Sensibilité visuelle", "Motivation créative"],
        objectifsPedagogiques: [
            "Maîtriser les principes fondamentaux du design",
            "Créer des visuels professionnels pour le digital",
            "Développer une identité visuelle cohérente"
        ],
        competencesAcquises: [
            { nom: "Canva Expert", niveau: 90 },
            { nom: "Photoshop", niveau: 75 },
            { nom: "Identité Visuelle", niveau: 80 }
        ],
        syllabus: [
            { jour: 1, titre: "Maîtrise de Canva — Jour 1", heures: 6, contenu: ["Interface et prise en main", "Templates et éléments graphiques", "Premiers visuels"] },
            { jour: 2, titre: "Maîtrise de Canva — Jour 2", heures: 6, contenu: ["Brand Kit", "Animations", "Présentations"] },
            { jour: 3, titre: "Maîtrise de Canva — Jour 3", heures: 6, contenu: ["Posts Instagram", "Stories", "Bannières"] },
            { jour: 4, titre: "Maîtrise de Canva — Jour 4", heures: 6, contenu: ["Canva niveau avancé", "Vidéo et motion", "Exports multiformats"] },
            { jour: 5, titre: "Maîtrise de Canva — Jour 5", heures: 6, contenu: ["Projet Canva complet", "Révision et perfectionnement", "Niveau expert"] },
            { jour: 6, titre: "Identité Visuelle & Print — Jour 1", heures: 6, contenu: ["Logo design", "Charte graphique", "Brand guidelines"] },
            { jour: 7, titre: "Identité Visuelle & Print — Jour 2", heures: 6, contenu: ["Cartes de visite", "Flyers", "Brochures"] },
            { jour: 8, titre: "Identité Visuelle & Print — Jour 3", heures: 6, contenu: ["Affiches", "Supports marketing", "Déclinaisons visuelles"] },
            { jour: 9, titre: "Identité Visuelle & Print — Jour 4", heures: 6, contenu: ["Mise en page professionnelle", "Typographie avancée", "Composition"] },
            { jour: 10, titre: "Identité Visuelle & Print — Jour 5", heures: 6, contenu: ["Portfolio final Canva", "Présentation des créations", "Compilation"] },
            { jour: 11, titre: "Photoshop — Jour 1", heures: 6, contenu: ["Retouche photo", "Photomontage", "Outils de sélection"] },
            { jour: 12, titre: "Photoshop — Jour 2", heures: 6, contenu: ["Masques et calques", "Effets avancés", "Export professionnel"] }
        ],
        programme: [
            "Maîtrise de Canva (Niveau expert)",
            "Identité Visuelle & Print (Logo, Flyer, Portfolio final)",
            "Photoshop (Retouche, Photomontage, Masques)"
        ],
        certification: "Certificat Designer Graphique"
    },
    {
        id: 3,
        anchorId: "module-video",
        icon: Video,
        module: "Module 3",
        titre: "Réalisation & montage vidéo",
        description: "De l'écriture du scénario à l'export final, maîtrisez toute la chaîne de production audiovisuelle. Créez des contenus vidéo professionnels qui captent l'attention.",
        duree: "15 Jours / 120 heures de formation",
        tarif: "13.000 FDJ",
        niveau: "Débutant à Intermédiaire",
        livrable: "1 court-métrage complet",
        outils: ["CapCut", "DaVinci Resolve"],
        pratique: 80,
        placesRestantes: 2,
        isPopular: true,
        dateDebut: "10 Mars 2026",
        horaires: "9h - 18h",
        lieu: "Saalam Tower, Djibouti",
        image: "/montagevidéo.jpg",
        objectPosition: "object-right",
        publicCible: ["Futurs vidéastes", "YouTubers", "Créateurs de contenu"],
        prerequis: ["Passion pour l'image", "Ordinateur portable puissant recommandé"],
        objectifsPedagogiques: [
            "Maîtriser le cadrage et la prise de vue",
            "Monter des vidéos dynamiques et rythmées",
            "Appliquer une colorimétrie professionnelle"
        ],
        competencesAcquises: [
            { nom: "Prise de vue", niveau: 80 },
            { nom: "Montage", niveau: 85 },
            { nom: "Colorimétrie", niveau: 70 },
            { nom: "Sound Design", niveau: 60 }
        ],
        syllabus: [
            { jour: 1, titre: "Pré-production & Technique", heures: 7, contenu: ["Écriture scénario", "Storyboard"] },
            { jour: 2, titre: "Pré-production & Technique", heures: 7, contenu: ["Découpage technique", "Cadrage et plans"] },
            { jour: 3, titre: "Pré-production & Technique", heures: 7, contenu: ["Éclairage cinéma", "3-points lighting"] },
            { jour: 4, titre: "Pré-production & Technique", heures: 7, contenu: ["Prise de son", "Micro-cravate", "Ambiance sonore"] },
            { jour: 5, titre: "Tournage Pratique", heures: 7, contenu: ["Exercices terrain", "Interviews"] },
            { jour: 6, titre: "Tournage Pratique", heures: 7, contenu: ["Court-métrage en plateau", "Direction acteurs"] },
            { jour: 7, titre: "CapCut — Montage", heures: 7, contenu: ["Interface CapCut", "Import médias", "Timeline"] },
            { jour: 8, titre: "CapCut — Montage", heures: 7, contenu: ["Transitions", "Effets vidéo", "Rythme narratif"] },
            { jour: 9, titre: "CapCut — Montage", heures: 7, contenu: ["Montage dynamique avancé", "Textes et sous-titres", "Export"] },
            { jour: 10, titre: "DaVinci Resolve & Son", heures: 7, contenu: ["Colorimétrie", "Correction primaire", "LUTs"] },
            { jour: 11, titre: "DaVinci Resolve & Son", heures: 7, contenu: ["Mixage audio", "Musique", "Son final"] },
            { jour: 12, titre: "Projet Final", heures: 7, contenu: ["Finalisation du court-métrage", "Retouches finales"] },
            { jour: 13, titre: "Projet Final", heures: 7, contenu: ["Export multi-formats", "Compression web", "Réseaux"] },
            { jour: 14, titre: "Projet Final", heures: 7, contenu: ["Présentation des projets", "Feedback collectif"] },
            { jour: 15, titre: "Projet Final", heures: 7, contenu: ["Projection finale", "Remise des certificats", "Feedback jury"] }
        ],
        programme: [
            "Pré-production & Technique (Scénario, Cadrage, Éclairage, Son)",
            "Tournage Pratique (Interviews, Court-métrage en plateau)",
            "CapCut (Montage dynamique, Rythme narratif)",
            "DaVinci Resolve & Son (Colorimétrie, Mixage audio)"
        ],
        certification: "Certificat Réalisateur Vidéo"
    },
    {
        id: 4,
        anchorId: "module-marketing",
        icon: TrendingUp,
        module: "Module 4",
        titre: "Marketing digital & gestion de projet",
        description: "Apprenez à promouvoir efficacement vos services et gérer vos projets comme un professionnel. Maîtrisez les stratégies qui font la différence sur les réseaux sociaux.",
        duree: "8 Jours / 40 heures de formation",
        tarif: "7.000 FDJ",
        niveau: "Débutant",
        livrable: "1 stratégie marketing complète",
        outils: ["Facebook", "WhatsApp Business", "TikTok", "Instagram"],
        pratique: 60,
        placesRestantes: 8,
        dateDebut: "20 Mars 2026",
        horaires: "14h - 19h",
        lieu: "Saalam Tower, Djibouti",
        image: "/marketingdigital.jpg",
        objectPosition: "object-center",
        publicCible: ["Entrepreneurs", "Community managers", "Freelances"],
        prerequis: ["Compte professionnel sur les réseaux", "Notions basiques du digital"],
        objectifsPedagogiques: [
            "Élaborer une stratégie marketing cohérente",
            "Créer et gérer des campagnes publicitaires",
            "Organiser et piloter des projets efficacement"
        ],
        competencesAcquises: [
            { nom: "Stratégie Marketing", niveau: 80 },
            { nom: "Réseaux Sociaux", niveau: 85 },
            { nom: "E-commerce", niveau: 70 }
        ],
        syllabus: [
            { jour: 1, titre: "Le digital à Djibouti — Jour 1", heures: 5, contenu: ["État des lieux du digital à Djibouti", "Stratégie digitale", "Connaissance du client djiboutien"] },
            { jour: 2, titre: "Le digital à Djibouti — Jour 2", heures: 5, contenu: ["Analyse du marché local", "Positionnement", "Proposition de valeur"] },
            { jour: 3, titre: "Facebook & WhatsApp Business — Jour 1", heures: 5, contenu: ["Facebook : les outils rois", "Création de pages", "Contenu adapté à la culture locale"] },
            { jour: 4, titre: "Facebook & WhatsApp Business — Jour 2", heures: 5, contenu: ["WhatsApp Business", "Catalogues produits", "Communication locale"] },
            { jour: 5, titre: "Facebook & WhatsApp Business — Jour 3", heures: 5, contenu: ["Publicité Facebook", "Audiences cibles", "Créatifs pub adaptés"] },
            { jour: 6, titre: "TikTok, Instagram & Opportunités", heures: 5, contenu: ["TikTok pour les jeunes", "Instagram Reels", "Opportunités pour les jeunes à Djibouti"] },
            { jour: 7, titre: "E-commerce & Vente en ligne", heures: 5, contenu: ["E-commerce à Djibouti", "Vente en ligne", "Entrepreneuriat digital"] },
            { jour: 8, titre: "Projet final", heures: 5, contenu: ["Lancer une campagne digitale djiboutienne", "Opportunités locales", "Présentation finale"] }
        ],
        programme: [
            "Le digital à Djibouti : état des lieux, Stratégie & Connaissance du client djiboutien",
            "Facebook & WhatsApp Business : les outils rois, Contenu & Communication adaptés à la culture locale",
            "TikTok, Instagram & Opportunités pour les jeunes",
            "E-commerce & Vente en ligne à Djibouti, Entrepreneuriat digital & Opportunités locales, Projet final"
        ],
        certification: "Certificat Marketing Digital"
    }
];

export type Formation = typeof FORMATIONS[0];
