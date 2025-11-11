"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

export default function PhotoGallery() {
  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-headline mb-8">Galerie</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
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
          {PlaceHolderImages.map((img, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-video w-full rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        width={800}
                        height={600}
                        data-ai-hint={img.imageHint}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
                     <Image
                        src={img.imageUrl}
                        alt={img.description}
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
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
