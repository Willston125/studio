import React from 'react'

export default function ComingSoon() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
            <div className="max-w-2xl text-center space-y-8">

                {/* Logo Cineworld */}
                <div className="flex justify-center mb-8">
                    <img
                        src="/logo_cineworld.png"
                        alt="Cineworld Académie"
                        className="h-24 md:h-32 w-auto"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter animate-pulse">
                    Bientôt Disponible
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl max-w-lg mx-auto">
                    Nous préparons quelque chose d'exceptionnel. Le site est actuellement en maintenance pour vous offrir une meilleure expérience.
                </p>

                <div className="pt-4">
                    <div className="h-1 w-24 bg-red-600 mx-auto rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
