import React from 'react'
import Image from 'next/image'

export default function ComingSoon() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
            <div className="max-w-xl text-center space-y-8 flex flex-col items-center">

                {/* LOGO ADDITION */}
                <div className="relative w-64 h-32 md:w-80 md:h-40">
                    <Image
                        src="/logo_cineworld.png"
                        alt="Cineworld Académie"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter animate-pulse">
                    Bientôt Disponible
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl">
                    Nous préparons quelque chose d'exceptionnel. Le site est actuellement en maintenance pour vous offrir une meilleure expérience.
                </p>
                <div className="pt-4">
                    <div className="h-1 w-24 bg-red-600 mx-auto rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
