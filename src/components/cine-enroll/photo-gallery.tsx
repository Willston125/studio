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
        src: "https://images.unsplash.com/photo-1578644463322-97814c457d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwdHJhaW5pbmd8ZW58MHx8fHwxNzYyODY1MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Formation pratique caméra",
        hint: "camera training"
    },
    {
        src: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmaWxtJTIwZWRpdGluZ3xlbnwwfHx8fDE3NjI4NjUzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Session de montage",
        hint: "film editing"
    },
    {
      "src": "https://images.unsplash.com/photo-1512390225428-a9d51c817f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx2aW50YWdlJTIwY2FtZXJhfGVufDB8fHx8MTc2MjgzODc0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "alt": "A close-up shot of a vintage film camera.",
      "hint": "vintage camera"
    },
    {
      "src": "https://images.unsplash.com/photo-1580746353679-aa5dee1ac3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmaWxtJTIwc2V0fGVufDB8fHx8MTc2Mjg1Njc5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "alt": "A bustling film set with crew and equipment.",
      "hint": "film set"
    },
    {
      "src": "https://images.unsplash.com/photo-1598620616655-7fce1a6fdf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzY3JlZW53cml0aW5nJTIwbm90ZWJvb2t8ZW58MHx8fHwxNzYyODY0MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "alt": "A person writing a screenplay in a notebook.",
      "hint": "screenwriting notebook"
    },
    {
      "src": "https://images.unsplash.com/photo-1542204165-65bf26472b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZmlsbSUyMHJlZWx8ZW58MHx8fHwxNzYyODM4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "alt": "A classic film reel on a white background.",
      "hint": "film reel"
    }
]

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
                        data-ai-hint={img.hint}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
                    <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                     <Image
                        src={img.src}
                        alt={img.alt}
                        width={1200}
                        height={800}
                        data-ai-hint={img.hint}
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
