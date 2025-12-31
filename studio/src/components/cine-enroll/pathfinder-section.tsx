"use client";

import Link from 'next/link';

export default function PathfinderSection() {
    const blocks = [
        {
            id: "initie",
            icon: "📱",
            title: "CRÉATEUR",
            subtitle: "Réseaux & Mobile",
            link: "#tarifs",
            colorClass: "block-white"
        },
        {
            id: "pro",
            icon: "🎥",
            title: "PROFESSIONNEL",
            subtitle: "Vidéaste & Freelance",
            link: "#tarifs",
            colorClass: "block-gold"
        },
        {
            id: "expert",
            icon: "🎬",
            title: "RÉALISATEUR",
            subtitle: "Cinéma & Fiction",
            link: "#tarifs",
            colorClass: "block-black"
        }
    ];

    return (
        <section className="nyfa-full-bar w-full m-0 p-0 border-b border-black">
            <div className="nyfa-cols-container grid grid-cols-1 md:grid-cols-3 h-auto md:h-[140px]">
                {blocks.map((block, index) => (
                    <Link
                        key={index}
                        href={block.link}
                        className={`nyfa-block ${block.colorClass} flex items-center justify-center gap-4 no-underline transition-all duration-300 px-5 py-8 md:py-0`}
                    >
                        <span className="block-icon text-4xl">{block.icon}</span>
                        <div className="block-text">
                            <h3 className="m-0 text-xl font-extrabold tracking-wider uppercase">
                                {block.title}
                            </h3>
                            <p className="m-0 mt-1 text-sm uppercase opacity-70">
                                {block.subtitle}
                            </p>
                        </div>
                        <span className="block-arrow text-2xl transition-transform duration-300">➔</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
