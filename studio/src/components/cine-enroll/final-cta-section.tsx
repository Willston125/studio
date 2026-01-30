"use client";

export default function FinalCTASection() {
    return (
        <section className="final-cta-bar bg-white py-24 px-4">
            <div className="cta-content max-w-4xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black text-black uppercase leading-tight mb-6">
                    LES INSCRIPTIONS 2026 SONT <span className="text-outline-black">OUVERTES</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 mb-10">
                    Ne regardez plus les films. Commencez à les faire.
                </p>

                {/* CTA Actions */}
                <div className="cta-actions flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://wa.me/25377556344?text=Bonjour%2C%20je%20souhaite%20candidater%20pour%20la%20session%202026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-solid-black bg-black text-white px-10 py-5 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFD700] hover:text-black w-full sm:w-auto"
                    >
                        CANDIDATER MAINTENANT
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline-black bg-transparent border-2 border-black text-black px-10 py-5 font-black uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white w-full sm:w-auto"
                    >
                        NOUS CONTACTER
                    </a>
                </div>
            </div>
        </section>
    );
}
