"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const images = [
  {
    src: "/galerie1.png",
    alt: "Formation pratique caméra",
    description: "Formation pratique caméra",
    imageHint: "film training"
  },
  {
    src: "/galerie2.png",
    alt: "Session de montage",
    description: "Session de montage",
    imageHint: "editing session"
  },
  {
    src: "/galerie3.png",
    alt: "Équipe de tournage en action",
    description: "Équipe de tournage en action",
    imageHint: "film crew"
  },
  {
    src: "/galerie4.png",
    alt: "Réalisateur donnant des instructions",
    description: "Réalisateur donnant des instructions",
    imageHint: "director instructions"
  },
  {
    src: "/galerie5.png",
    alt: "Clap de cinéma",
    description: "Clap de cinéma",
    imageHint: "movie clapper"
  }
];

export default function PhotoGallery() {
  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-headline mb-8">Galerie</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-video w-full rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={600}
                        data-ai-hint={img.imageHint}
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
                    <DialogTitle className="sr-only">{img.description}</DialogTitle>
                     <Image
                        src={img.src}
                        alt={img.alt}
                        width={1200}
                        height={800}
                        data-ai-hint={img.imageHint}
                        className="object-contain w-full h-full rounded-lg"
                      />
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" type="button" />
        <CarouselNext className="hidden sm:flex" type="button" />
      </Carousel>
    </section>
  );
}

    