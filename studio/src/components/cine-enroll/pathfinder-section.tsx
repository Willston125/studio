"use client";

import Link from 'next/link';

export default function PathfinderSection() {
    const paths = [
        {
            id: "initie",
            icon: "📱",
            title: "JE VEUX CRÉER",
            subtitle: "Contenu Réseaux & Mobile",
            link: "#tarifs",
            bgClass: "bg-[#f0f0f0]",
            textClass: "text-black"
        },
        {
            id: "pro",
            icon: "🎥",
            title: "JE VEUX EN VIVRE",
            subtitle: "Métier Vidéaste & Freelance",
            link: "#tarifs",
            bgClass: "bg-[#FFD700]",
            textClass: "text-black"
        },
        {
            id: "expert",
            icon: "🎬",
            title: "JE VEUX RÉALISER",
            subtitle: "Cinéma & Fiction",
            link: "#tarifs",
            bgClass: "bg-[#1a1a1a]",
            textClass: "text-white"
        }
    ];

    return (
        <section className="nyfa-nav-bar w-full border-b-4 border-black">
            <div className="flex flex-wrap">
                {paths.map((path, index) => (
                    <Link
                        key={index}
                        href={path.link}
                        className={`nyfa-col flex-1 min-w-[300px] py-10 px-5 flex items-center justify-center gap-5 transition-all duration-300 hover:pl-8 ${path.bgClass} ${path.textClass}`}
                    >
                        {/* Icon */}
                        <span className="text-4xl">{path.icon}</span>

                        {/* Text */}
                        <div className="nav-text">
                            <h3 className="text-xl font-extrabold uppercase tracking-wider m-0">
                                {path.title}
                            </h3>
                            <p className="text-sm opacity-80 m-0">
                                {path.subtitle}
                            </p>
                        </div>

                        {/* Arrow */}
                        <span className="text-2xl font-bold">➜</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
