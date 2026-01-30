"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/galerie1.png", alt: "Formation montage vidéo" },
    { src: "/galerie2.png", alt: "Tournage en extérieur" },
    { src: "/galerie3.png", alt: "Atelier caméra" },
    { src: "/galerie4.png", alt: "Cours théorique" },
    { src: "/galerie5.png", alt: "Pratique en studio" },
    { src: "/galerie6.png", alt: "Équipe de production" },
    { src: "/galerie7.png", alt: "Réalisation documentaire" },
    { src: "/galerie8.png", alt: "Session d'étalonnage" },
    { src: "/galerie9.png", alt: "Projection finale" }
  ];

  return (
    <section className="section-container bg-white">

      {/* En-tête */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4"
        >
          Nos Tournages
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          En Immersion sur le Terrain
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Découvrez nos élèves en action pendant leurs formations pratiques.
        </motion.p>
      </div>

      {/* Grille de Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm">Voir</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Image Agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Image agrandie"
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
