
"use client";

import Image from "next/image";
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const programItems = [
  {
    title: "Mbayé Trambwé",
    imageSrc: "/affiche2.png",
    imageHint: "screenwriting notebook",
    youtubeUrl: "https://www.youtube.com/watch?v=1bep0NEFvZ0&t=103s",
  },
  {
    title: "L'aube des aveugles",
    imageSrc: "/affiche4.png",
    imageHint: "film camera",
    youtubeUrl: "https://www.youtube.com/watch?v=SjcPxIWgRTI&t=401s",
  },
  {
    title: "Code 1",
    imageSrc: "/affiche3.png",
    imageHint: "editing suite",
    youtubeUrl: "https://www.youtube.com/watch?v=cuMDhl0xyxA&t=95s",
  },
  {
    title: "Code 2",
    imageSrc: "/affiche1.png",
    imageHint: "movie premiere",
    youtubeUrl: "https://www.youtube.com/watch?v=h-zKt_xyzrs&t=744s",
  },
    {
    title: "La boussole digital",
    imageSrc: "/affiche5.png",
    imageHint: "director actor",
    youtubeUrl: "/contact", // Fallback to contact page if no URL
  },
];

export default function ProgramSection() {
  return (
    <section className="container mx-auto px-4 py-6 md:py-8 rounded-xl bg-black/20 backdrop-blur-sm">
      <h2 className="text-xl md:text-2xl font-headline font-bold tracking-wide mb-4 text-white">Nos projets réalisé</h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {programItems.map((item, index) => (
            <CarouselItem key={index} className="pl-4 md:pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4">
              <div className="p-1">
                <Link href={item.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="overflow-hidden border-2 border-transparent hover:border-amber-500 transition-all duration-300 bg-neutral-900/50 rounded-lg">
                    <CardContent className="relative aspect-[2/3] p-0">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        data-ai-hint={item.imageHint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-2 md:p-3 w-full">
                        <h3 className="text-sm md:text-base font-bold text-white leading-tight truncate">{item.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
