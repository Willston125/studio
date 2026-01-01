"use client";

export default function CheckerboardSection() {
    return (
        <section className="checkerboard">
            {/* Row 1: Image Left, Text Right */}
            <div className="check-row flex flex-wrap min-h-[400px]">
                <div
                    className="check-img flex-1 min-w-[300px] bg-cover bg-center"
                    style={{ backgroundImage: "url('/camera-shot.jpg')" }}
                />
                <div className="check-text flex-1 min-w-[300px] bg-white text-black p-12 flex flex-col justify-center">
                    <h4 className="mini-title text-[#888] text-xs uppercase tracking-[3px] mb-2">
                        LE CENTRE DE FORMATION
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
                        LA TECH <span className="text-stroke-black">D'ABORD</span>
                    </h2>
                    <div className="separator w-16 h-1 bg-black mb-6" />
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Nous ne sommes pas une école théorique. Cineworld est un plateau de tournage permanent.
                        Vous apprenez sur BlackMagic, Sony et Premiere Pro dès le premier jour.
                    </p>
                    <ul className="check-list space-y-2">
                        <li className="flex items-center gap-2 text-black font-semibold">
                            <span className="text-[#FFD700]">✓</span> Certification Reconnue
                        </li>
                        <li className="flex items-center gap-2 text-black font-semibold">
                            <span className="text-[#FFD700]">✓</span> Matériel Cinéma Fourni
                        </li>
                    </ul>
                </div>
            </div>

            {/* Row 2: Text Left, Image Right (Reverse) */}
            <div className="check-row reverse flex flex-wrap flex-row-reverse min-h-[400px]">
                <div
                    className="check-img flex-1 min-w-[300px] bg-cover bg-center"
                    style={{ backgroundImage: "url('/groupeeleve.png')" }}
                />
                <div className="check-text theme-darker flex-1 min-w-[300px] bg-[#0a0a0a] text-white p-12 flex flex-col justify-center">
                    <h4 className="mini-title text-[#888] text-xs uppercase tracking-[3px] mb-2">
                        L'ESPRIT ASSOCIATIF
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
                        UNE <span className="text-[#FFD700]">FAMILLE</span>
                    </h2>
                    <div className="separator gold-sep w-16 h-1 bg-[#FFD700] mb-6" />
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Au-delà de la technique, Cineworld est une communauté. En tant qu'association, nous rendons
                        le cinéma accessible et créons un réseau solidaire pour vos futurs projets.
                    </p>
                    <ul className="check-list space-y-2">
                        <li className="flex items-center gap-2 text-white font-semibold">
                            <span className="text-[#FFD700]">✓</span> Réseau d'Alumni
                        </li>
                        <li className="flex items-center gap-2 text-white font-semibold">
                            <span className="text-[#FFD700]">✓</span> Projets Collectifs
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
