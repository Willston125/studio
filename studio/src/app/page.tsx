import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      {/* Image de fond */}
      <Image
        src="/galerie1.png"
        alt="Cineworld Académie"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Titre centré avec encadrement lauriers */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">

          {/* Ligne supérieure avec lauriers */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-4xl md:text-5xl">🏆</span>
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <span className="text-4xl md:text-5xl">🏆</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            CINEWORLD ACADÉMIE
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8">
            Première Académie Audiovisuelle de Djibouti
          </p>

          {/* Ligne inférieure avec lauriers */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl md:text-5xl">🏆</span>
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <span className="text-4xl md:text-5xl">🏆</span>
          </div>

        </div>
      </div>
    </main>
  );
}
