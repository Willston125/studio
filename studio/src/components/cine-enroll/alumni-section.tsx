"use client";

import Image from 'next/image';

export default function AlumniSection() {
    const alumni = [
        {
            name: "Ahmed M.",
            role: "Vidéaste Freelance",
            pack: "Pack Professionnel",
            project: "Clip Musical",
            image: "/alumni1.jpg",
            quote: "Grâce à Cineworld, j'ai décroché mes premiers clients dès la fin de la formation."
        },
        {
            name: "Fatima A.",
            role: "Community Manager",
            pack: "Pack Creator",
            project: "Contenu Réseaux",
            image: "/alumni2.jpg",
            quote: "Le montage Reels n'a plus de secret pour moi. Mes vidéos ont explosé !"
        },
        {
            name: "Hassan O.",
            role: "Réalisateur Indépendant",
            pack: "Pack Réalisateur",
            project: "Court-métrage",
            image: "/alumni3.jpg",
            quote: "Mon court-métrage a été sélectionné dans un festival régional."
        }
    ];

    const stats = [
        { value: "50+", label: "Élèves Formés" },
        { value: "95%", label: "Taux de Satisfaction" },
        { value: "80%", label: "Ont Trouvé un Emploi" },
        { value: "12", label: "Projets Réalisés" }
    ];

    return (
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-light block mb-4">
                        SUCCESS STORIES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
                        NOS <span className="text-[#D4AF37]">ANCIENS ÉLÈVES</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 border border-white/10">
                            <p className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2">
                                {stat.value}
                            </p>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Alumni Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {alumni.map((person, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/10"
                        >
                            {/* Avatar placeholder */}
                            <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8960C] rounded-full flex items-center justify-center text-black text-2xl font-bold mb-4">
                                {person.name.split(' ').map(n => n[0]).join('')}
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold text-white mb-1">
                                {person.name}
                            </h3>
                            <p className="text-[#D4AF37] text-sm font-semibold mb-2">
                                {person.role}
                            </p>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                                {person.pack}
                            </p>

                            {/* Quote */}
                            <p className="text-gray-400 text-sm italic leading-relaxed mb-4">
                                "{person.quote}"
                            </p>

                            {/* Project Tag */}
                            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 text-[#D4AF37] text-xs uppercase tracking-wider">
                                🎬 {person.project}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Vous aussi, rejoignez notre communauté de créateurs
                    </p>
                    <a
                        href="/inscription"
                        className="inline-block px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white"
                    >
                        Rejoindre l'Académie
                    </a>
                </div>
            </div>
        </section>
    );
}
