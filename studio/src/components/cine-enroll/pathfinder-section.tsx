"use client";

import Link from 'next/link';

export default function PathfinderSection() {
    const options = [
        {
            id: "initie",
            icon: "📱",
            title: "CRÉER",
            subtitle: "Réseaux & Passion",
            link: "#tarifs",
            colorClass: "item-light"
        },
        {
            id: "pro",
            icon: "🎥",
            title: "EN VIVRE",
            subtitle: "Carrière Pro",
            link: "#tarifs",
            colorClass: "item-gold"
        },
        {
            id: "expert",
            icon: "🎬",
            title: "RÉALISER",
            subtitle: "Cinéma & Art",
            link: "#tarifs",
            colorClass: "item-dark"
        }
    ];

    return (
        <section className="solid-nav-bar flex flex-wrap">
            {/* Left Label */}
            <div className="nav-label bg-[#111] text-white py-10 px-8 flex items-center min-w-[200px]">
                <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight m-0">
                    QUEL EST<br />VOTRE<br /><span className="text-[#FFD700]">BUT ?</span>
                </h3>
            </div>

            {/* Options */}
            <div className="nav-options flex flex-1 flex-wrap">
                {options.map((option, index) => (
                    <Link
                        key={index}
                        href={option.link}
                        className={`nav-item ${option.colorClass} flex-1 min-w-[200px] flex items-center justify-center gap-4 py-8 px-6 no-underline transition-all duration-300`}
                    >
                        <span className="nav-icon text-3xl">{option.icon}</span>
                        <div className="nav-content">
                            <span className="nav-title block text-lg font-black uppercase tracking-wider">
                                {option.title}
                            </span>
                            <span className="nav-sub block text-sm opacity-70">
                                {option.subtitle}
                            </span>
                        </div>
                        <span className="nav-arrow text-xl font-bold">→</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
