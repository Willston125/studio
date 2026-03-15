"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function PremiumFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Colonne 1 : À Propos */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Cineworld Academy</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            La première académie audiovisuelle de Djibouti, formant les créateurs de contenu de demain.
                        </p>
                        {/* Réseaux Sociaux */}
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 : Liens Rapides */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-yellow-500 transition-colors">Accueil</Link></li>
                            <li><Link href="/a-propos" className="hover:text-yellow-500 transition-colors">À Propos</Link></li>
                            <li><Link href="/inscription" className="hover:text-yellow-500 transition-colors">Inscription</Link></li>
                            <li><Link href="/reglement" className="hover:text-yellow-500 transition-colors">Règlement</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Programmes */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Nos Programmes</h3>
                        <ul className="space-y-3 text-sm">
                            <li><span className="hover:text-yellow-500 transition-colors cursor-pointer">Pack Initié (8j)</span></li>
                            <li><span className="hover:text-yellow-500 transition-colors cursor-pointer">Pack Maîtrise (12j)</span></li>
                            <li><span className="hover:text-yellow-500 transition-colors cursor-pointer">Pack Expert (23j)</span></li>
                        </ul>
                    </div>

                    {/* Colonne 4 : Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <span>Djibouti, Saalam Tower</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <a href="tel:+25377556344" className="hover:text-yellow-500 transition-colors">
                                    +253 77 55 63 44
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <a href="mailto:contact@cineworld.dj" className="hover:text-yellow-500 transition-colors">
                                    contact@cineworld.dj
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Barre du bas */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {currentYear} Cineworld Academy. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="/reglement" className="hover:text-yellow-500 transition-colors">
                            Conditions Générales
                        </Link>
                        <Link href="/reglement" className="hover:text-yellow-500 transition-colors">
                            Politique de Confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
