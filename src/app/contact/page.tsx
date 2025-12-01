
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Bonjour, j'ai une question.\n\nNom: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/25377556344?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 pt-32 md:pt-40 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-card/50 p-8 md:p-16 rounded-3xl border border-border/50">

          {/* Colonne de gauche : Infos */}
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-7xl uppercase text-amber-500">
              Prenez Contact
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Une question sur nos formations ? Un projet de film ? Nous sommes à votre écoute.
            </p>
            <div className="space-y-4 font-body">
              <a href="https://wa.me/25377556344" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-amber-500 transition-colors">
                <Phone className="w-6 h-6 text-amber-500" />
                <span>+253 77 55 63 44</span>
              </a>
              <a href="mailto:cineworld@cineworldacademie.com" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-amber-500 transition-colors">
                <Mail className="w-6 h-6 text-amber-500" />
                <span>cineworld@cineworldacademie.com</span>
              </a>
            </div>
          </div>

          {/* Colonne de droite : Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-gray-300">Votre Nom</Label>
              <Input
                id="name"
                placeholder="Ex: Arnaud Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-gray-300">Votre Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-body text-gray-300">Votre Message</Label>
              <Textarea
                id="message"
                placeholder="Écrivez votre message ici..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="btn-primary w-full"
            >
              Envoyer le Message
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
}

