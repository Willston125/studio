# Configuration de l'envoi d'emails avec Resend

## Étapes de configuration :

### 1. Créer un compte Resend (gratuit)

1. Allez sur **https://resend.com**
2. Créez un compte gratuit (3000 emails/mois inclus)
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à votre dashboard Resend
2. Allez dans **API Keys** (https://resend.com/api-keys)
3. Cliquez sur **"Create API Key"**
4. Donnez un nom (ex: "Cineworld Production")
5. Copiez la clé API (elle commence par `re_...`)

### 3. Configurer le domaine d'envoi

**IMPORTANT** : Pour envoyer depuis `noreply@cineworldacademie.com`, vous devez vérifier votre domaine :

1. Dans le dashboard Resend, allez dans **Domains**
2. Cliquez sur **"Add Domain"**
3. Entrez : `cineworldacademie.com`
4. Ajoutez les enregistrements DNS fournis chez votre hébergeur
5. Attendez la vérification (quelques minutes à quelques heures)

**Alternative temporaire** : Utilisez le domaine de test Resend : `onboarding@resend.dev`

### 4. Ajouter la clé dans .env.local

```bash
# Dans le fichier .env.local
RESEND_API_KEY=re_votre_cle_api_ici
```

### 5. Redémarrer le serveur de développement

```bash
# Arrêter le serveur avec Ctrl+C puis :
npm run dev
```

### 6. Tester l'envoi

1. Allez sur http://localhost:3000/contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer le message"
4. Vérifiez votre boîte `cineworld@cineworldacademie.com`

---

## Modification de l'email de destination

Pour changer l'adresse qui reçoit les emails, modifiez le fichier :
`src/app/api/contact/route.ts`

Ligne 19 :
```typescript
to: ['cineworld@cineworldacademie.com'],
```

---

## En cas de problème

- **Email non reçu** : Vérifiez que le domaine est vérifié dans Resend
- **Erreur 401** : La clé API est incorrecte ou manquante
- **Erreur 500** : Regardez les logs du serveur dans le terminal

---

## Production (Vercel)

Ajoutez la variable d'environnement dans votre projet Vercel :

1. Dashboard Vercel → Votre projet → Settings → Environment Variables
2. Ajoutez : `RESEND_API_KEY` = `re_...`
3. Redéployez l'application
