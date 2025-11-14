"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Camera, Scissors, Video } from "lucide-react";

const programItems = [
  {
    title: "Scénario",
    description: "De l'idée à l'écriture.",
    imageSrc: "https://picsum.photos/seed/scenario/400/600",
    imageHint: "screenwriting notebook",
    icon: BookOpen,
  },
  {
    title: "Tournage",
    description: "Maîtrise de la caméra.",
    imageSrc: "https://picsum.photos/seed/tournage/400/600",
    imageHint: "film camera",
    icon: Camera,
  },
  {
    title: "Montage",
    description: "L'art de la post-production.",
    imageSrc: "https://picsum.photos/seed/montage/400/600",
    imageHint: "editing suite",
    icon: Scissors,
  },
  {
    title: "Diffusion",
    description: "Partagez votre œuvre.",
    imageSrc: "https://picsum.photos/seed/diffusion/400/600",
    imageHint: "movie premiere",
    icon: Video,
  },
];

export default function ProgramSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">Au Programme</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {programItems.map((item, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <div className="p-1">
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 group bg-neutral-800">
                  <CardContent className="relative aspect-[2/3] p-0">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      data-ai-hint={item.imageHint}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
