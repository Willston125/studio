
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
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Vignette } from "@/components/ui/cinema-effects";

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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-8">
        <h2 className="text-center text-2xl font-headline mb-8">EN IMMERSION SUR LES TOURNAGES</h2>
        <div className="flex justify-center -ml-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 w-full">
              <div className="p-1">
                <Skeleton className="aspect-video w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }


  return (
    <section className="py-8">
      <ScrollReveal width="100%">
        {/* Title with film strip decoration */}
        <div className="film-strip-horizontal mb-8">
          <h2 className="text-center text-2xl font-headline py-4">EN IMMERSION SUR LES TOURNAGES</h2>
        </div>
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
                  <Vignette intensity="light">
                    <div className="group aspect-video w-full rounded-lg overflow-hidden cursor-pointer">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={600}
                        data-ai-hint={img.imageHint}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  </Vignette>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" type="button" />
          <CarouselNext className="hidden sm:flex" type="button" />
        </Carousel>
      </ScrollReveal>
    </section>
  );
}
