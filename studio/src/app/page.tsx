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

      {/* Titre centré sans feuilles */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            CINEWORLD ACADÉMIE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
            Première Académie Audiovisuelle de Djibouti
          </p>
        </div>
      </div>
    </main>
  );
}
