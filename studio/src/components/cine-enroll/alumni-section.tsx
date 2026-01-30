"use client";

export default function AlumniSection() {
    const movies = [
        {
            title: "L'AUBE DES DJIBOUTIENS",
            director: "Réal. par Ahmed K.",
            poster: "/poster1.jpg"
        },
        {
            title: "RUE DE MOUSSA",
            director: "Réal. par Sarah M.",
            poster: "/poster2.jpg"
        },
        {
            title: "LE DERNIER PLAN",
            director: "Réal. par Mohamed Y.",
            poster: "/poster3.jpg"
        },
        {
            title: "VIVRE L'IMAGE",
            director: "Réal. par Fatouma A.",
            poster: "/poster4.jpg"
        }
    ];

    return (
        <section className="alumni-section py-20 px-5 bg-[#050505]">
            {/* Header */}
            <div className="text-center mb-12 text-white">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
                    NOS TALENTS <span className="text-[#FFD700]">EN ACTION</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Ils ont réalisé leurs premiers films chez nous.
                </p>
            </div>

            {/* Poster Grid */}
            <div className="poster-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card text-left group cursor-pointer">
                        {/* Poster Image - 2:3 Ratio */}
                        <div
                            className="poster-img w-full aspect-[2/3] bg-cover bg-center border border-[#333] mb-4 transition-all duration-400 group-hover:scale-105 group-hover:border-[#FFD700]"
                            style={{
                                backgroundImage: `url('${movie.poster}')`,
                                backgroundColor: '#1a1a1a'
                            }}
                        >
                            {/* Placeholder gradient if no image */}
                            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#333] flex items-center justify-center">
                                <span className="text-6xl opacity-30">🎬</span>
                            </div>
                        </div>

                        {/* Movie Info */}
                        <div className="movie-info">
                            <h4 className="text-white text-sm font-bold uppercase tracking-wider m-0">
                                {movie.title}
                            </h4>
                            <p className="text-gray-500 text-xs italic mt-1">
                                {movie.director}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <p className="text-gray-500 mb-4">
                    Vous aussi, créez votre premier film
                </p>
                <a
                    href="/inscription"
                    className="inline-block px-10 py-4 bg-[#FFD700] text-black font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white"
                >
                    Rejoindre l'Académie
                </a>
            </div>
        </section>
    );
}
