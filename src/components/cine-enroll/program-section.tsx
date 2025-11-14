
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const programItems = [
  {
    title: "Scénario",
    imageSrc: "https://picsum.photos/seed/scenario/400/600",
    imageHint: "screenwriting notebook",
  },
  {
    title: "Tournage",
    imageSrc: "https://picsum.photos/seed/tournage/400/600",
    imageHint: "film camera",
  },
  {
    title: "Montage",
    imageSrc: "https://picsum.photos/seed/montage/400/600",
    imageHint: "editing suite",
  },
  {
    title: "Diffusion",
    imageSrc: "https://picsum.photos/seed/diffusion/400/600",
    imageHint: "movie premiere",
  },
];

export default function ProgramSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white sr-only">Au Programme</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {programItems.map((item, index) => (
            <CarouselItem key={index} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <Card className="overflow-hidden border-2 border-neutral-700 hover:border-primary transition-all duration-300 group bg-neutral-900/50 backdrop-blur-sm">
                  <CardContent className="relative aspect-[2/3] p-0">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      data-ai-hint={item.imageHint}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <h3 className="text-md font-bold text-white leading-tight">{item.title}</h3>
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
