
'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col relative font-sans text-white overflow-x-hidden">

      {/* --- FOND D'ÉCRAN --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/background-clap.jpg')] bg-cover bg-bottom bg-no-repeat bg-fixed"></div>
        {/* Voile noir (Overlay) */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="relative z-10 flex-grow flex items-center justify-center p-5 md:p-10 pt-32 md:pt-40">
        <div className="w-full max-w-5xl flex flex-col md:flex-row bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

          {/* --- CÔTÉ GAUCHE (INFOS) --- */}
          <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <h1 className="font-oswald text-5xl md:text-6xl uppercase leading-[1.1] mb-6 text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Prenez<br />Contact
            </h1>
            <p className="text-[#ccc] text-base leading-relaxed mb-10">
              Une question sur nos formations ? Un projet de film ? Nous sommes à votre écoute pour réaliser vos ambitions cinématographiques.
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <Phone className="text-[#D4AF37] w-6 h-6 shrink-0" />
                <span>+253 77 55 63 44</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#D4AF37] w-6 h-6 shrink-0" />
                <span>cineworld@cineworldacademie.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#D4AF37] w-6 h-6 shrink-0" />
                <span>Djibouti, Centre Ville</span>
              </div>
            </div>
          </div>

          {/* --- CÔTÉ DROIT (FORMULAIRE) --- */}
          <div className="w-full md:w-[55%] p-8 md:p-14 bg-black/20">
            <form action="mailto:cineworld@cineworldacademie.com" method="post" encType="text/plain" className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs uppercase text-[#ccc] tracking-wider">Votre Nom</label>
                <input
                  type="text"
                  placeholder="Ex: Arnaud Dupont"
                  required
                  className="w-full bg-black/50 border border-white/20 text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/80 focus:shadow-[0_0_15px_rgba(212,175,55,0.4)] outline-none transition-all font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase text-[#ccc] tracking-wider">Votre Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  required
                  className="w-full bg-black/50 border border-white/20 text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/80 focus:shadow-[0_0_15px_rgba(212,175,55,0.4)] outline-none transition-all font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase text-[#ccc] tracking-wider">Votre Message</label>
                <textarea
                  rows={4}
                  placeholder="Écrivez votre message ici..."
                  required
                  className="w-full bg-black/50 border border-white/20 text-white p-4 rounded-md focus:border-[#D4AF37] focus:bg-black/80 focus:shadow-[0_0_15px_rgba(212,175,55,0.4)] outline-none transition-all font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4CF57] text-black font-bold font-oswald text-lg uppercase py-4 rounded-md hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.5)] transition-all cursor-pointer"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

