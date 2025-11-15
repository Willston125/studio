"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Camera, Zap, Globe } from 'lucide-react';

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

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });

        featureCards.forEach(card => {
            observer.observe(card);
        });

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            featureCards.forEach(card => {
                observer.unobserve(card);
            });
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
                    <span className="section-pre-title font-body">L'Excellence Cinématographique</span>
                    <h2 className="section-title font-headline">POURQUOI CHOISIR CINEWORLD ?</h2>
                    <p className="section-subtitle font-body">
                        Nous offrons bien plus qu'une simple formation. C'est une immersion complète 
                        dans l'univers du cinéma, où la passion rencontre l'expertise technique.
                    </p>
                </div>
                
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><Camera size={36} /></div>
                        <h3 className="feature-title font-headline">ACCOMPAGNEMENT</h3>
                        <p className="feature-description font-body">
                            Accès à un parc complet de caméras cinéma (Sony FX, Blackmagic, RED) 
                            et d'équipements professionnels pour un rendu qualité Hollywood.
                        </p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon"><Zap size={36} /></div>
                        <h3 className="feature-title font-headline">PRATIQUE INTENSIVE</h3>
                        <p className="feature-description font-body">
                            La formation est axée à 80% sur la pratique terrain avec des projets réels 
                            pour une maîtrise rapide et une expérience concrète.
                        </p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon"><Globe size={36} /></div>
                        <h3 className="feature-title font-headline">RÉSEAU PROFESSIONNEL</h3>
                        <p className="feature-description font-body">
                            Intégrez une communauté exclusive de passionnés et de professionnels 
                            du cinéma à Djibouti et développez votre réseau dans l'industrie.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsSection;
