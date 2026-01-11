import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Image
        src="/galerie1.png"
        alt="Cineworld Académie"
        fill
        className="object-cover"
        priority
        quality={100}
      />
    </main>
  );
}
