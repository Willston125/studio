// ============================================================
// CINEWORLD ACADÉMIE — Google Sheets Integration
// Fichier à créer : src/lib/googleSheets.ts
// ============================================================

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxQ9Cqz76Lxf4fzuxQu5fVPuoRE-H-iYxyWcy-179GNMiEGNDNY2UnTyyjNEgADONzXrQ/exec";

interface InscriptionData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  module: string;
  duree: string;
  tarif: string;
  niveau: string;
  attentes?: string;
}

/**
 * Envoie les données d'inscription vers Google Sheets.
 * Non bloquant — WhatsApp s'ouvre même si ça échoue.
 */
export async function saveInscriptionToSheets(
  data: InscriptionData
): Promise<void> {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    // Silencieux côté utilisateur
    console.error("[Cineworld] Erreur Google Sheets (non bloquante):", error);
  }
}
