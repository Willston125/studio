import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Clock, Smartphone, Laptop, Camera, Clapperboard, CheckCircle, Star } from 'lucide-react';

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
    const message = `Bonjour Ali, je veux m'inscrire !\n\n👤 ${data.nom} ${data.prenom}\n📧 ${data.email}\n📱 ${data.telephone}\n🎬 Niveau: ${data.niveau}\n💡 Attentes: ${data.attentes}`;
    const url = `https://wa.me/25377722004?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col lg:flex-row font-sans selection:bg-yellow-500 selection:text-black">

      {/* =========================================
          COLONNE GAUCHE : L'AFFICHE DE FILM (FIXE)
         ========================================= */}
      <div className="relative w-full lg:w-[45%] h-[60vh] lg:h-screen lg:fixed lg:left-0 lg:top-0 z-10 overflow-hidden bg-black">

        {/* IMAGE DE FOND (Remplace par ta photo) */}
        <img
          src="/mentor.jpg"
          alt="Ali William"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-[10s] hover:scale-105"
          onError={(e) => {
            // Image de secours si la tienne ne charge pas
            e.currentTarget.src = "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000";
          }}
        />

        {/* DÉGRADÉ NOIR (Pour lisibilité) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        {/* CONTENU SUR L'IMAGE (En bas) */}
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 z-20">

          {/* BADGE FORMATEUR */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 font-bold tracking-[0.3em] text-xs uppercase glow-text">Masterclass Cinéma</span>
          </div>

          {/* TITRE GEANT */}
          <h1 className="text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] mb-2 tracking-tighter">
            Ali<br />William
          </h1>
          <p className="text-gray-300 text-xl font-light tracking-widest border-l-4 border-yellow-500 pl-4 mb-8">
            Réalisateur & Visionnaire
          </p>

          {/* BLOC PRIX & COMPTEUR (Style Verre dépoli) */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Prix Lancement</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-white">20.000 <span className="text-yellow-500 text-xl">FDJ</span></span>
                  <span className="text-lg text-gray-500 line-through decoration-red-500">40.000</span>
                </div>
              </div>
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded animate-pulse">
                -50% OFF
              </div>
            </div>

            {/* TIMER */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { val: timeLeft.days, label: 'JRS' },
                { val: timeLeft.hours, label: 'HRS' },
                { val: timeLeft.minutes, label: 'MIN' },
                { val: timeLeft.seconds, label: 'SEC' }
              ].map((item, i) => (
                <div key={i} className="bg-black/40 rounded p-2 border border-white/5">
                  <span className="block text-xl font-bold text-yellow-500 font-mono">{item.val}</span>
                  <span className="text-[9px] text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          COLONNE DROITE : LE FORMULAIRE (SCROLL)
         ========================================= */}
      <div className="w-full lg:w-[55%] lg:ml-auto bg-[#0a0a0a] min-h-screen relative z-0">
        <div className="max-w-xl mx-auto px-6 py-12 lg:px-16 lg:py-20">

          <header className="mb-12">
            <h2 className="text-4xl font-bold uppercase text-white mb-2">Inscription <span className="text-yellow-500">Formation</span></h2>
            <p className="text-gray-500">Rejoignez l'élite du cinéma djiboutien.</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

            {/* ETAPE 1 : IDENTITÉ */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                <span className="text-yellow-500">01.</span> Vos Coordonnées
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Nom</label>
                  <input {...register("nom", { required: true })} className="w-full bg-[#111] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" placeholder="Votre nom" />
                </div>
                <div className="group">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Prénom</label>
                  <input {...register("prenom", { required: true })} className="w-full bg-[#111] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" placeholder="Votre prénom" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email</label>
                  <input {...register("email", { required: true })} type="email" className="w-full bg-[#111] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" placeholder="hello@gmail.com" />
                </div>
                <div className="group">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">WhatsApp</label>
                  <input {...register("telephone", { required: true })} type="tel" className="w-full bg-[#111] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700" placeholder="+253..." />
                </div>
              </div>
            </section>

            {/* ETAPE 2 : NIVEAU */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                <span className="text-yellow-500">02.</span> Votre Profil
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'debutant', label: 'Débutant', icon: <Smartphone size={20} /> },
                  { id: 'intermediaire', label: 'Intermédiaire', icon: <Camera size={20} /> },
                  { id: 'avance', label: 'Avancé', icon: <Clapperboard size={20} /> }
                ].map((level) => (
                  <label key={level.id} className="cursor-pointer relative group">
                    <input type="radio" value={level.id} {...register("niveau")} className="peer sr-only" />
                    <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#333] bg-[#111] text-gray-400 gap-2 hover:border-gray-500 peer-checked:border-yellow-500 peer-checked:bg-yellow-500/10 peer-checked:text-white transition-all h-full">
                      <div className="text-yellow-500 group-hover:scale-110 transition-transform">{level.icon}</div>
                      <span className="text-xs font-bold uppercase">{level.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* ETAPE 3 : ATTENTES */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
                <span className="text-yellow-500">03.</span> Vos Objectifs
              </h3>
              <textarea
                {...register("attentes")}
                rows={4}
                className="w-full bg-[#111] border border-[#333] text-white p-4 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-700 resize-none"
                placeholder="Qu'est-ce que vous rêvez de réaliser en vidéo ?"
              />
            </section>

            {/* BOUTON FINAL */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full group relative overflow-hidden bg-yellow-500 hover:bg-yellow-400 text-black font-black py-5 px-8 rounded-xl text-lg uppercase tracking-widest shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Confirmer mon inscription <CheckCircle size={20} />
                </span>
                {/* Effet Brillance au survol */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700" />
              </button>
              <p className="text-center text-xs text-gray-600 mt-4 flex items-center justify-center gap-1">
                <Star size={12} className="text-yellow-500 fill-yellow-500" /> Places limitées pour la session 2025
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
