import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { nom, email, telephone, sujet, message } = await req.json();

        // Validation basique
        if (!nom || !email || !sujet || !message) {
            return NextResponse.json(
                { error: 'Tous les champs requis doivent être remplis' },
                { status: 400 }
            );
        }

        // Envoi de l'email
        const { data, error } = await resend.emails.send({
            from: 'Cineworld Académie <noreply@cineworldacademie.com>',
            to: ['cineworld@cineworldacademie.com'],
            replyTo: email,
            subject: `[Contact Site] ${sujet}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6e1615 0%, #8b1c1b 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #6e1615; margin-bottom: 5px; }
              .field-value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #6e1615; }
              .message-box { background: white; padding: 20px; border-radius: 6px; margin-top: 20px; border: 1px solid #e5e7eb; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">🎬 Nouveau Message</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulaire de Contact - Site Web</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">👤 Nom complet</div>
                  <div class="field-value">${nom}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">✉️ Email</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #6e1615;">${email}</a></div>
                </div>
                
                ${telephone ? `
                  <div class="field">
                    <div class="field-label">📞 Téléphone</div>
                    <div class="field-value">${telephone}</div>
                  </div>
                ` : ''}
                
                <div class="field">
                  <div class="field-label">📋 Sujet</div>
                  <div class="field-value"><strong>${getSujetLabel(sujet)}</strong></div>
                </div>
                
                <div class="field">
                  <div class="field-label">💬 Message</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                  <p>Envoyé depuis le formulaire de contact de cineworldacademie.com<br>
                  ${new Date().toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            console.error('Erreur Resend:', error);
            return NextResponse.json(
                { error: 'Erreur lors de l\'envoi de l\'email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, data },
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

// Helper pour les labels des sujets
function getSujetLabel(sujet: string): string {
    const labels: { [key: string]: string } = {
        'inscription': 'Question sur l\'inscription',
        'formation': 'Renseignement formation',
        'entreprise': 'Partenariat entreprise',
        'urgence': 'Demande urgente',
        'autre': 'Autre demande'
    };
    return labels[sujet] || sujet;
}
