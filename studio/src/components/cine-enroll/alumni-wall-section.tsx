"use client";

export default function AlumniWallSection() {
    const movies = [
        {
            title: "L'ESPOIR (2024)",
            director: "Réal. Sarah M. (Promo 2)",
            poster: "/affiche-film-1.jpg"
        },
        {
            title: "DJIBOUTI VIBES",
            director: "Clip - Ahmed K. (Promo 1)",
            poster: "/affiche-film-2.jpg"
        },
        {
            title: "LE SILENCE",
            director: "Docu - Fatima A. (Masterclass)",
            poster: "/affiche-film-3.jpg"
        },
        {
            title: "URBAN LEGEND",
            director: "Fiction - Youssouf D.",
            poster: "/affiche-film-4.jpg"
        }
    ];

    return (
        <section className="alumni-wall bg-[#050505] py-20 px-4">
            {/* Header */}
            <div className="wall-header text-center mb-16">
                <span className="sub-tag block text-[#666] text-sm uppercase tracking-[3px] mb-4">
                    NOS ANCIENS ÉLÈVES
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
                    ILS CRÉENT LE <span className="text-[#FFD700]">CINÉMA DE DEMAIN</span>
                </h2>
            </div>

            {/* Poster Gallery */}
            <div className="poster-gallery grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-poster group cursor-pointer">
                        {/* Poster Frame */}
                        <div className="poster-frame relative aspect-[2/3] mb-4 overflow-hidden border border-[#333]">
                            <div
                                className="poster-placeholder absolute inset-0 bg-cover bg-center bg-[#111] transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundImage: `url('${movie.poster}')` }}
                            >
                                {/* Placeholder icon if no image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-6xl opacity-20">🎬</span>
                                </div>
                            </div>
                            {/* Overlay */}
                            <div className="poster-overlay absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="icon-play text-[#FFD700] text-5xl">▶</span>
                            </div>
                        </div>

                        {/* Movie Meta */}
                        <div className="movie-meta text-center">
                            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-1">
                                {movie.title}
                            </h4>
                            <p className="text-gray-500 text-xs">
                                {movie.director}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
