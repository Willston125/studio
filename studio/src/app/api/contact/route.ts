import { NextRequest, NextResponse } from 'next/server';

// API Contact désactivée temporairement - Redirection vers WhatsApp
// Pour réactiver l'envoi d'emails, configurez RESEND_API_KEY sur Vercel

export async function POST(req: NextRequest) {
  try {
    const { nom, sujet, message } = await req.json();

    // Validation basique
    if (!nom || !sujet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Retourne un succès avec indication d'utiliser WhatsApp
    return NextResponse.json(
      {
        success: true,
        message: 'Merci pour votre message ! Pour une réponse rapide, contactez-nous sur WhatsApp.',
        whatsapp: 'https://wa.me/25377145306'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
