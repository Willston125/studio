'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Navigation
} from 'lucide-react';
import { motion } from 'framer-motion';

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
      // Appel à l'API pour envoyer l'email via Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setIsSubmitting(false);
      setShowSuccess(true);

      // Si sujet = urgence, ouvrir aussi WhatsApp pour une réponse immédiate
      if (formState.sujet === 'urgence') {
        setTimeout(() => {
          const msg = `*DEMANDE URGENTE - ${formState.nom}*\n\nTel: ${formState.telephone}\nEmail: ${formState.email}\n\n${formState.message}`;
          window.open(`https://wa.me/25377145306?text=${encodeURIComponent(msg)}`, '_blank');
        }, 500);
      }

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormState({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Erreur:', error);
      setIsSubmitting(false);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter sur WhatsApp.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Campus Aviation",
      subContent: "Institut DHIM, Djibouti",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      action: "Voir sur la carte",
      href: "#map",
      isWhatsApp: false
    },
    {
      icon: Phone,
      title: "Téléphone & WhatsApp",
      content: "+253 77 14 53 06",
      subContent: "Disponible 6j/7",
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      action: "Appeler maintenant",
      href: "tel:+25377145306",
      isWhatsApp: true
    },
    {
      icon: Mail,
      title: "Email",
      content: "cineworld@cineworldacademie.com",
      subContent: "Réponse sous 24h",
      color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      action: "Envoyer un email",
      href: "mailto:cineworld@cineworldacademie.com",
      isWhatsApp: false
    }
  ];

  const horaires = [
    { jour: "Dimanche - Jeudi", heures: "8h00 - 18h00" },
    { jour: "Vendredi", heures: "8h00 - 12h00" },
    { jour: "Samedi", heures: "Fermé (Ateliers sur RDV)" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6e1615]/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 dark:text-slate-400 text-lg"
          >
            Une question sur nos formations ? Nous sommes là pour vous guider.
          </motion.p>
        </div>
      </section>

      {/* Cartes Contact */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-900 dark:text-white font-medium mb-1">{item.content}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{item.subContent}</p>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-sm font-bold ${item.isWhatsApp ? 'text-green-600 dark:text-green-400 hover:text-green-700' : 'text-[#6e1615] dark:text-[#C5A572] hover:text-[#8b1c1b]'
                    } transition-colors`}
                >
                  {item.isWhatsApp && <MessageCircle size={16} />}
                  {item.action}
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Principale : Formulaire + Infos */}
      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Envoyez-nous un message</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Remplissez le formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais.</p>

                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
                  >
                    <CheckCircle2 size={48} className="text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">Message envoyé !</h3>
                    <p className="text-green-700 dark:text-green-400 mb-4">Nous avons bien reçu votre demande et vous répondrons sous 24h.</p>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="text-green-700 dark:text-green-300 font-bold hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nom complet *</label>
                        <input
                          required
                          type="text"
                          value={formState.nom}
                          onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-2 focus:ring-[#6e1615]/20 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                        <input
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-2 focus:ring-[#6e1615]/20 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Téléphone</label>
                        <input
                          type="tel"
                          value={formState.telephone}
                          onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-2 focus:ring-[#6e1615]/20 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                          placeholder="+253 77 XX XX XX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Sujet *</label>
                        <select
                          required
                          value={formState.sujet}
                          onChange={(e) => setFormState({ ...formState, sujet: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-2 focus:ring-[#6e1615]/20 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="inscription">Question sur l'inscription</option>
                          <option value="formation">Renseignement formation</option>
                          <option value="entreprise">Partenariat entreprise</option>
                          <option value="urgence">Demande urgente (WhatsApp)</option>
                          <option value="autre">Autre demande</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-[#6e1615] focus:ring-2 focus:ring-[#6e1615]/20 outline-none transition-all resize-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800 dark:text-amber-300">
                        Pour une réponse immédiate concernant les inscriptions, utilisez directement
                        <Link href="https://wa.me/25377145306" className="font-bold underline ml-1">notre WhatsApp</Link>.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#6e1615] text-white py-4 rounded-xl font-bold hover:bg-[#8b1c1b] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Infos */}
            <div className="lg:col-span-2 space-y-6">
              {/* Horaires */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Clock size={20} className="text-[#6e1615] dark:text-[#C5A572]" />
                  Horaires d'ouverture
                </h3>
                <div className="space-y-4">
                  {horaires.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0">
                      <span className="text-slate-600 dark:text-slate-400">{item.jour}</span>
                      <span className="font-medium text-slate-900 dark:text-white">{item.heures}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux Sociaux */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Suivez-nous</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Restez informé des actualités, événements et nouvelles formations.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", href: "https://facebook.com/cineworldacademie" },
                    { icon: Instagram, label: "Instagram", href: "https://instagram.com/cineworldacademie" },
                    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@cineworldacademie" }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="flex flex-col items-center gap-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                    >
                      <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs opacity-70">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Carte stylisée */}
              <div id="map" className="bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden h-64 relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300 dark:bg-slate-700">
                  <div className="text-center">
                    <Navigation size={48} className="text-[#6e1615] dark:text-[#C5A572] mx-auto mb-2" />
                    <p className="font-bold text-slate-700 dark:text-white">Campus Aviation</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Institut DHIM</p>
                    <Link
                      href="https://maps.google.com/?q=Institut+DHIM+Aviation+Djibouti"
                      target="_blank"
                      className="mt-4 inline-block px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm font-bold text-[#6e1615] dark:text-[#C5A572] shadow-lg hover:shadow-xl transition-all"
                    >
                      Ouvrir Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#6e1615] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-white/80 mb-8">
            Ne perdez pas de temps. Inscrivez-vous dès maintenant à l'une de nos formations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formations"
              className="btn-animated btn-animated-white"
            >
              <span className="btn-circle"></span>
              <span className="btn-text">Voir les formations</span>
            </Link>
            <Link
              href="/inscription"
              className="btn-animated btn-animated-bordeaux"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', boxShadow: '0 0 0 2px rgba(255,255,255,0.3)' }}
            >
              <span className="btn-circle"></span>
              <span className="btn-text">S'inscrire maintenant</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
