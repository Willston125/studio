import Link from 'next/link';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 border-t-4 border-[#6e1615]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Formations */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Formations</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/formations" className="hover:text-white transition-colors">Site Web avec l'IA</Link></li>
                            <li><Link href="/formations" className="hover:text-white transition-colors">Design Graphique</Link></li>
                            <li><Link href="/formations" className="hover:text-white transition-colors">Réalisation Vidéo</Link></li>
                            <li><Link href="/formations" className="hover:text-white transition-colors">Marketing Digital</Link></li>
                            <li><Link href="/formations" className="hover:text-white transition-colors">Pack Creator 360°</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>Djibouti, Saalam Tower</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <a href="mailto:cineworld@cineworldacademie.com" className="hover:text-white transition-colors">
                                    cineworld@cineworldacademie.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <a href="https://wa.me/25377145306" className="hover:text-white transition-colors">
                                    +253 77 14 53 06
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Réseaux sociaux */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-yellow-500">Réseaux Sociaux</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com/cineworldacademie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors group"
                            >
                                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://instagram.com/cineworldacademie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors group"
                            >
                                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://youtube.com/@cineworldacademie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6e1615] transition-colors group"
                            >
                                <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    © 2026 Cineworld Académie - Tous droits réservés
                </div>
            </div>
        </footer>
    );
}
