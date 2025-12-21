'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Clock, Smartphone, Laptop, Camera, Clapperboard, CheckCircle, Star } from 'lucide-react';
import { Divider } from '@/components/ui/divider';

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // --- LOGIQUE COMPTE À REBOURS ---
  const [timeLeft, setTimeLeft] = useState({ days: 21, hours: 5, minutes: 46, seconds: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- LOGIQUE ENVOI WHATSAPP ---
  const onSubmit = (data: any) => {
    const message = `Bonjour Ali, je veux m'inscrire !\n\n👤 ${data.nom} ${data.prenom}\n📧 ${data.email}\n📱 ${data.telephone}\n🎬 Niveau: ${data.niveau}\n💡 Attentes: ${data.attentes || 'Non précisé'}`;
    const url = `https://wa.me/25377722004?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Oswald:wght@400;700&display=swap');
        
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        
        .glass-panel {
            background: rgba(20, 20, 20, 0.85);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px rgba(0,0,0,0.6);
        }
      `}</style>

      <div className="min-h-screen w-full relative flex items-center justify-center font-montserrat bg-[#050505] text-white overflow-x-hidden">

        {/* BACKGROUND IMAGE & OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mentor.jpg"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.95)_80%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl">

          {/* --- GAUCHE : TEXTE & PRIX --- */}
          <div className="text-left space-y-6">
            <div>
              <span className="font-oswald text-[#FFD700] uppercase tracking-[3px] text-base border-b-2 border-[#FFD700] mb-2 inline-block">
                Masterclass Cinéma & Montage
              </span>
              <h1 className="font-oswald text-6xl lg:text-7xl uppercase leading-none text-white drop-shadow-2xl">
                Ali William
              </h1>
              <p className="text-xl text-gray-300 font-light mt-2">
                Réalisateur & Expert Visionnaire
              </p>
            </div>

            {/* PROMO BOX */}
            <div className="bg-white/5 backdrop-blur-md border-l-4 border-[#FFD700] p-6 rounded-r-xl max-w-lg">
              <div className="flex items-baseline gap-4">
                <span className="font-oswald text-4xl font-bold text-white">5.000 FDJ</span>
                <span className="text-gray-500 line-through text-lg">10.000 FDJ</span>
                <span className="bg-[#D32F2F] text-white text-xs font-bold px-2 py-1 rounded uppercase">
                  -50% OFF
                </span>
              </div>

              {/* TIMER */}
              <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                {[
                  { val: timeLeft.days, label: 'JRS' },
                  { val: timeLeft.hours, label: 'HRS' },
                  { val: timeLeft.minutes, label: 'MIN' },
                  { val: timeLeft.seconds, label: 'SEC' }
                ].map((item, i) => (
                  <div key={i} className="bg-black/40 rounded p-1 border border-white/5">
                    <span className="block text-lg font-bold text-[#FFD700] font-mono">{item.val}</span>
                    <span className="text-[8px] text-gray-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Divider variant="gold" className="my-8" />

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Star className="w-5 h-5 text-[#FFD700]" />
              <p>Formation intensive • Support personnalisé • Certificat reconnu</p>
            </div>
          </div>

          {/* --- DROITE : FORMULAIRE --- */}
          <div className="glass-panel rounded-2xl p-8 lg:p-10 w-full max-w-md mx-auto lg:ml-auto">
            <h2 className="font-oswald text-3xl text-white mb-1">INSCRIPTION 2025</h2>
            <p className="text-gray-400 text-sm mb-6">Réservez votre place et lancez votre carrière.</p>

            <Divider width="full" className="my-6" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* NOM & PRENOM */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Nom</label>
                  <input
                    {...register("nom", { required: true })}
                    placeholder="Votre Nom"
                    className="w-full bg-black/30 border border-[#333] text-white p-3 rounded focus:border-[#FFD700] outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Prénom</label>
                  <input
                    {...register("prenom", { required: true })}
                    placeholder="Votre Prénom"
                    className="w-full bg-black/30 border border-[#333] text-white p-3 rounded focus:border-[#FFD700] outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-1">
                <label className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="contact@email.com"
                  className="w-full bg-black/30 border border-[#333] text-white p-3 rounded focus:border-[#FFD700] outline-none transition-colors text-sm"
                />
              </div>

              {/* TELEPHONE */}
              <div className="space-y-1">
                <label className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">WhatsApp</label>
                <input
                  {...register("telephone", { required: true })}
                  type="tel"
                  placeholder="+253 ..."
                  className="w-full bg-black/30 border border-[#333] text-white p-3 rounded focus:border-[#FFD700] outline-none transition-colors text-sm"
                />
              </div>

              {/* NIVEAU */}
              <div className="space-y-1">
                <label className="text-[10px] text-[#FFD700] uppercase tracking-wider font-bold">Niveau Actuel</label>
                <select
                  {...register("niveau")}
                  className="w-full bg-black/30 border border-[#333] text-white p-3 rounded focus:border-[#FFD700] outline-none transition-colors text-sm appearance-none"
                >
                  <option value="debutant">Débutant (Je pars de zéro)</option>
                  <option value="intermediaire">Intermédiaire (Je monte un peu)</option>
                  <option value="avance">Avancé (Je veux me perfectionner)</option>
                </select>
              </div>

              {/* BOUTON */}
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-[#FFD700] to-[#dbb700] text-black font-oswald font-bold text-lg uppercase py-4 rounded shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-0.5 transition-all"
              >
                Je Valide Ma Place
              </button>

              <p className="text-center text-[10px] text-gray-500 mt-4">
                Places limitées. Paiement sécurisé à l'étape suivante.
              </p>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
