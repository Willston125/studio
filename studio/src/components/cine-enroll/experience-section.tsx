"use client";

import { CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
    const features = [
        "Matériel Cinéma (BlackMagic, Sony)",
        "Groupes limités (10 élèves max)",
        "Projets réels diffusés"
    ];

    return (
        <section className="experience-section bg-black border-t border-[#333]">
            <div className="split-container flex flex-wrap min-h-[500px]">

                {/* Left: Image Split */}
                <div
                    className="split-image flex-1 min-w-[400px] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: "url('/groupeeleve.png')" }}
                />

                {/* Right: Content Split */}
                <div className="split-content flex-1 min-w-[400px] p-20 flex flex-col justify-center bg-[#080808] text-white">

                    {/* Tag */}
                    <span className="text-[#FFD700] font-bold tracking-[2px] text-sm mb-3 block">
                        PÉDAGOGIE
                    </span>

                    {/* Title with Stroke Effect */}
                    <h2 className="text-5xl lg:text-6xl font-black uppercase leading-none mb-8">
                        APPRENDRE EN <br />
                        <span className="text-stroke">FAISANT</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        À Cineworld, pas d'amphithéâtres poussiéreux. Dès le Jour 1, vous avez une caméra en main.
                        Nous appliquons la méthode <strong className="text-white">"On-Set Learning"</strong> utilisée sur les plateaux internationaux.
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg text-gray-400">
                                <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
