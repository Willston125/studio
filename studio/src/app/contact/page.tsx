'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erreur');

      setIsSubmitting(false);
      setShowSuccess(true);

      if (formState.sujet === 'urgence') {
        setTimeout(() => {
          const msg = `*DEMANDE URGENTE - ${formState.nom}*\n\nTel: ${formState.telephone}\nEmail: ${formState.email}\n\n${formState.message}`;
          window.open(`https://wa.me/25377145306?text=${encodeURIComponent(msg)}`, '_blank');
        }, 500);
      }

      setTimeout(() => {
        setFormState({ nom: '', email: '', telephone: '', sujet: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Erreur:', error);
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter sur WhatsApp.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ══════════════════════════════════════════════════════════ */}
      {/* HERO — Plein écran cinématique                           */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <Image
          src="/willformateur.png"
          alt="Ali William - Cineworld Académie"
          fill
          className="object-cover object-top"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Bande dorée bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent" />

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4">
          <p className="text-[#C5A572] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Cineworld Académie
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
            CONTACT
          </h1>
          <div className="w-20 h-1 bg-[#C5A572] mx-auto mt-6" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION PRINCIPALE — Infos + Photo fondateur             */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Titre section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Nous Contacter
            </h2>
            <p className="text-[#8B2635] font-bold uppercase tracking-[0.2em] text-sm mt-2">
              CINEWORLD ACADÉMIE
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Colonne gauche — Coordonnées */}
            <div>
              <div className="space-y-8">
                {/* Adresse */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B2635] mb-2">
                    CAMPUS
                  </p>
                  <p className="font-bold text-lg">Saalam Tower</p>
                  <p className="text-gray-600">Djibouti-ville</p>
                </div>

                {/* Contact */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B2635] mb-2">
                    CONTACT DIRECT
                  </p>
                  <Link
                    href="mailto:cineworld@cineworldacademie.com"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#8B2635] transition-colors font-medium"
                  >
                    <Mail size={16} />
                    cineworld@cineworldacademie.com
                  </Link>
                  <Link
                    href="tel:+25377145306"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#8B2635] transition-colors font-medium mt-2"
                  >
                    <Phone size={16} />
                    +253 77 14 53 06
                  </Link>
                </div>

                {/* Horaires */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B2635] mb-2">
                    HORAIRES
                  </p>
                  <div className="space-y-1 text-gray-600">
                    <p className="flex justify-between max-w-xs">
                      <span>Dimanche – Jeudi</span>
                      <span className="font-medium text-black">8h – 18h</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>Vendredi</span>
                      <span className="font-medium text-black">8h – 12h</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>Samedi</span>
                      <span className="font-medium text-black">Sur RDV</span>
                    </p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex items-center gap-4 pt-2">
                  <Link href="https://facebook.com/cineworldacademie" target="_blank" className="w-10 h-10 bg-gray-100 hover:bg-[#8B2635] hover:text-white rounded-full flex items-center justify-center transition-all">
                    <Facebook size={18} />
                  </Link>
                  <Link href="https://instagram.com/cineworldacademie" target="_blank" className="w-10 h-10 bg-gray-100 hover:bg-[#8B2635] hover:text-white rounded-full flex items-center justify-center transition-all">
                    <Instagram size={18} />
                  </Link>
                  <Link href="https://youtube.com/@cineworldacademie" target="_blank" className="w-10 h-10 bg-gray-100 hover:bg-[#8B2635] hover:text-white rounded-full flex items-center justify-center transition-all">
                    <Youtube size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Colonne droite — Photo fondateur */}
            <div>
              <div className="relative group overflow-hidden rounded-sm" style={{ height: '520px' }}>
                <Image
                  src="/willformateur.png"
                  alt="Ali William, Fondateur de Cineworld Académie"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center 10%' }}
                />
                {/* Overlay dégradé bas */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Nom superposé */}
                <div className="absolute bottom-4 left-6 text-white z-10">
                  <p className="font-black text-xl leading-tight">Ali William</p>
                  <p className="text-[#C5A572] text-xs font-bold uppercase tracking-[0.2em]">Fondateur & Directeur</p>
                  <Link
                    href="https://wa.me/25377145306"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-green-400 transition-colors mt-1"
                  >
                    <MessageCircle size={12} />
                    Contacter sur WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* FORMULAIRE DE CONTACT                                    */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {/* Titre */}
          <div className="text-center mb-12">
            <p className="text-[#C5A572] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Écrivez-nous
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Envoyez un Message
            </h2>
            <div className="w-16 h-1 bg-[#8B2635] mx-auto mt-4" />
          </div>

          {showSuccess ? (
            <div className="bg-green-900/30 border border-green-700 rounded-sm p-10 text-center">
              <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-300 mb-2">Message envoyé !</h3>
              <p className="text-green-400/80 mb-6">Nous vous répondrons sous 24h.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-[#C5A572] font-bold hover:underline text-sm uppercase tracking-wider"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A572] mb-2">
                    Nom complet *
                  </label>
                  <input
                    required
                    type="text"
                    value={formState.nom}
                    onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/20 text-white py-3 focus:border-[#C5A572] outline-none transition-colors placeholder:text-gray-600"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A572] mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/20 text-white py-3 focus:border-[#C5A572] outline-none transition-colors placeholder:text-gray-600"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A572] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formState.telephone}
                    onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/20 text-white py-3 focus:border-[#C5A572] outline-none transition-colors placeholder:text-gray-600"
                    placeholder="+253 77 XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A572] mb-2">
                    Sujet *
                  </label>
                  <select
                    required
                    value={formState.sujet}
                    onChange={(e) => setFormState({ ...formState, sujet: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-white/20 text-white py-3 focus:border-[#C5A572] outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0a]">Sélectionnez un sujet</option>
                    <option value="inscription" className="bg-[#0a0a0a]">Question sur l&apos;inscription</option>
                    <option value="formation" className="bg-[#0a0a0a]">Renseignement formation</option>
                    <option value="entreprise" className="bg-[#0a0a0a]">Partenariat entreprise</option>
                    <option value="urgence" className="bg-[#0a0a0a]">Demande urgente (WhatsApp)</option>
                    <option value="autre" className="bg-[#0a0a0a]">Autre demande</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A572] mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-white/20 text-white py-3 focus:border-[#C5A572] outline-none transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Votre message..."
                />
              </div>

              {/* Notice WhatsApp */}
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-sm">
                <AlertCircle size={18} className="text-[#C5A572] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  Pour une réponse immédiate,{' '}
                  <Link href="https://wa.me/25377145306" target="_blank" className="text-green-400 font-bold hover:underline">
                    contactez-nous sur WhatsApp
                  </Link>.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B2635] text-white py-4 font-black uppercase tracking-widest text-sm hover:bg-[#6e1c29] transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* CARTE — Pleine largeur                                   */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="relative">
        {/* Banner au-dessus de la carte */}
        <div className="bg-[#8B2635] py-3 px-4 text-center">
          <p className="text-white/80 text-xs font-medium">
            📍 Retrouvez-nous à Saalam Tower, Djibouti-ville
          </p>
        </div>

        {/* Carte Google Maps embed */}
        <div className="w-full h-[400px] md:h-[450px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.676!2d43.145!3d11.594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaalam+Tower+Djibouti!5e0!3m2!1sfr!2sdj!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Cineworld Académie"
          />
          {/* Overlay bouton */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <Link
              href="https://maps.google.com/?q=Saalam+Tower+Djibouti"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-wider shadow-xl hover:bg-[#C5A572] hover:text-white transition-all"
            >
              <MapPin size={16} />
              Ouvrir dans Google Maps
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* CTA FINAL                                                */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Inscrivez-vous dès maintenant et lancez votre carrière dans l&apos;audiovisuel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formations"
              className="px-8 py-4 bg-white text-black font-black uppercase text-sm tracking-widest hover:bg-[#C5A572] hover:text-white transition-all"
            >
              Voir les formations
            </Link>
            <Link
              href="/inscription"
              className="px-8 py-4 bg-[#8B2635] text-white font-black uppercase text-sm tracking-widest hover:bg-[#6e1c29] transition-all"
            >
              S&apos;inscrire maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
