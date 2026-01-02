'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowLeft, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">

      {/* Header / Navigation RAPPEL */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 md:px-12">
        <div className="font-black text-xl uppercase tracking-tighter text-black">
          CINEWORLD<span className="text-[#D4AF37]">ACADÉMIE</span>
        </div>
        <Link href="/" className="text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> RETOUR ACCUEIL
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Header de la page */}
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100/50 text-[#B8860B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Parlons de <span className="text-[#D4AF37]">Votre Projet</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Une question sur nos cursus ? Un besoin spécifique pour votre entreprise ?
              Notre équipe pédagogique vous répond sous 24h.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">

            {/* Infos de Contact (4 col) */}
            <div className="md:col-span-5 space-y-8">
              <div className="bg-white p-10 border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-black text-black uppercase mb-8 pb-4 border-b border-gray-100">
                  Coordonnées
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0 border border-yellow-100">
                      <Phone className="text-[#D4AF37] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase mb-1">Téléphone</p>
                      <p className="text-lg font-bold text-gray-900">+253 77 55 63 44</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0 border border-yellow-100">
                      <Mail className="text-[#D4AF37] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase mb-1">Email</p>
                      <p className="text-lg font-bold text-gray-900 break-all">contact@cineworld.dj</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0 border border-yellow-100">
                      <MapPin className="text-[#D4AF37] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase mb-1">Localisation</p>
                      <p className="text-lg font-bold text-gray-900">Djibouti, Centre Ville</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-12">
                  <a
                    href="https://wa.me/25377556344"
                    target="_blank"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#128C7E] transition-all shadow-lg shadow-green-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Parler sur WhatsApp
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-black text-white p-10 rounded-2xl">
                <h3 className="text-lg font-black text-yellow-500 uppercase mb-4">Horaires d'accueil</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dimanche - Jeudi</span>
                    <span className="font-bold">08h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Samedi</span>
                    <span className="font-bold">09h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-bold">Vendredi</span>
                    <span className="text-red-500 font-bold uppercase">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire (7 col) */}
            <div className="md:col-span-7">
              <div className="bg-white p-10 md:p-14 border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-black text-black mb-8 leading-tight">
                  Envoyez-nous un <span className="text-[#D4AF37]">Message</span>
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Nom Complet</label>
                      <input
                        type="text"
                        placeholder="Ex: Abdourahman Ali"
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:bg-white outline-none transition-all font-medium text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Votre Email</label>
                      <input
                        type="email"
                        placeholder="votre@email.com"
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:bg-white outline-none transition-all font-medium text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Sujet</label>
                    <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:bg-white outline-none transition-all font-medium text-gray-900 appearance-none">
                      <option>Renseignement sur une formation</option>
                      <option>Demande de partenariat entreprise</option>
                      <option>Soutien à l'association</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:bg-white outline-none transition-all font-medium text-gray-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-4 shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 grayscale opacity-50 relative overflow-hidden flex items-center justify-center">
        <MapPin className="w-20 h-20 text-gray-400 animate-bounce" />
        <p className="absolute bottom-10 font-bold text-gray-500 uppercase tracking-widest">Nous trouver au Centre Ville de Djibouti</p>
      </section>

    </div>
  );
}
