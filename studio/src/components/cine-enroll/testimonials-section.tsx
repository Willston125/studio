
"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ClapperIcon } from "@/components/ui/clapper-board";

const testimonials = [
  {
    rating: 5,
    text: "Une formation qui a dépassé toutes mes attentes. J'ai appris plus en 2 semaines qu'en 2 ans en autodidacte.",
    author: "Fatouma A.",
  },
  {
    rating: 5,
    text: "L'ambiance, le professionnalisme des formateurs et la qualité des cours sont incroyables. J'ai enfin pu réaliser le court-métrage dont je rêvais.",
    author: "Karim S.",
  },
  {
    rating: 5,
    text: "Cineworld n'est pas juste une école, c'est une famille. J'ai rencontré des gens passionnés et j'ai développé un vrai réseau. Je recommande à 1000%.",
    author: "David M.",
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center justify-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`}
      />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal width="100%">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ClapperIcon size={28} />
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-amber-500 uppercase">
                Ils parlent de nous
              </h2>
              <ClapperIcon size={28} />
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} width="100%" delay={index * 0.2}>
              <div
                className={cn(
                  "flex flex-col items-center text-center p-[30px] rounded-[15px]",
                  "bg-white/5 backdrop-blur-[10px] border border-white/10 shadow-2xl",
                  "transition-all duration-300 ease-in-out hover:-translate-y-[10px] hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                )}
              >
                <Rating rating={testimonial.rating} />
                <p className="font-body text-gray-300 my-6 flex-grow">
                  "{testimonial.text}"
                </p>
                <cite className="font-headline text-xl text-amber-500 not-italic">
                  - {testimonial.author} -
                </cite>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
