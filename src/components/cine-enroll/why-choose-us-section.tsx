"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Camera, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const WhyChooseUsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const sectionElement = sectionRef.current;
        if (!sectionElement) return;

        const spotlights = sectionElement.querySelectorAll('.spotlight');
        const featureCards = sectionElement.querySelectorAll('.feature-card');

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            spotlights.forEach(spotlight => {
                (spotlight as HTMLElement).style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMounted]);

    return (
        <>
            <div className="film-grain"></div>
            <section className="why-section" ref={sectionRef}>
                <div className="focus-lines"></div>

                <div className="spotlight spotlight-1"></div>
                <div className="spotlight spotlight-2"></div>

                <div className="section-header">
                    <ScrollReveal width="100%">
                        <span className="section-pre-title font-body block text-center">L'Excellence Cinématographique</span>
                    </ScrollReveal>
                    <ScrollReveal width="100%" delay={0.4}>
                        <h2 className="section-title font-headline text-center">POURQUOI CHOISIR CINEWORLD ?</h2>
                    </ScrollReveal>
                    <ScrollReveal width="100%" delay={0.6}>
                        <p className="section-subtitle font-body text-center">
                            Nous offrons bien plus qu'une simple formation. C'est une immersion complète
                            dans l'univers du cinéma, où la passion rencontre l'expertise technique.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="features-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{
                            y: -8,
                            borderColor: "rgba(212, 175, 55, 0.8)",
                            boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)"
                        }}
                        className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-[15px] p-[30px] transition-all duration-300 ease-in-out hover:-translate-y-[10px] hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                        <div className="bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] w-[80px] h-[80px] flex items-center justify-center rounded-full mx-auto mb-5 text-[2rem]"><Camera size={36} /></div>
                        <h3 className="feature-title font-headline">ACCOMPAGNEMENT</h3>
                        <p className="feature-description font-body">
                            Ensemble, avec notre dévouement, nous vous accompagnons pour produire vos contenus cinématographiques avec les bonnes bases de vos œuvres.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{
                            y: -8,
                            borderColor: "rgba(212, 175, 55, 0.8)",
                            boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)"
                        }}
                        className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-[15px] p-[30px] transition-all duration-300 ease-in-out hover:-translate-y-[10px] hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                        <div className="bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] w-[80px] h-[80px] flex items-center justify-center rounded-full mx-auto mb-5 text-[2rem]"><Zap size={36} /></div>
                        <h3 className="feature-title font-headline">PRATIQUE INTENSIVE</h3>
                        <p className="feature-description font-body">
                            La formation est axée à 80% sur la pratique terrain avec des projets réels
                            pour une maîtrise rapide et une expérience concrète.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{
                            y: -8,
                            borderColor: "rgba(212, 175, 55, 0.8)",
                            boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)"
                        }}
                        className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-[15px] p-[30px] transition-all duration-300 ease-in-out hover:-translate-y-[10px] hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                        <div className="bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] w-[80px] h-[80px] flex items-center justify-center rounded-full mx-auto mb-5 text-[2rem]"><Globe size={36} /></div>
                        <h3 className="feature-title font-headline">RÉSEAU PROFESSIONNEL</h3>
                        <p className="feature-description font-body">
                            Intégrez une communauté exclusive de passionnés et de professionnels
                            du cinéma à Djibouti et développez votre réseau dans l'industrie.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsSection;
