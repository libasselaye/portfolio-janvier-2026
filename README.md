# Portfolio 2026 — Mame Libasse Mboup

Ce dépôt contient la version actuelle de mon portfolio Data / IA.
L'objectif est simple: montrer un niveau d'exécution senior, avec un site propre, rapide, bilingue et facile à maintenir.

## Ce que j'ai construit

- Portfolio one-page avec sections ancrées: Accueil, À propos, Expériences, Formation, Expertise, Projets, Contact.
- Bilingue FR/EN avec changement instantané sans rechargement.
- Thème dark/light avec persistance en localStorage.
- Hero orienté valeur métier, CTA clairs et carte profil synthétique.
- Section Projets enrichie avec projets data/IA/automatisation + cartes agents.
- CV contextuel par langue:
- en FR: `CV_Mame_Libasse_Mboup.pdf`
- en EN: `CV_Mame_Libasse_Mboup_EN.pdf`
- Formulaire "Écrivez-moi" connecté à un webhook n8n (POST JSON).
- Chatbot LibasseAI intégré (widget n8n chat), localisé FR/EN, custom UI.
- Design premium sobre (glass/light touch), responsive desktop/mobile.

## Stack technique

- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3
- Framer Motion (animations discrètes)
- n8n Webhooks (contact + chatbot)

## Architecture du contenu

Tout le contenu éditorial est centralisé dans `src/content`.

- `src/content/fr.ts`: version française complète
- `src/content/en.ts`: version anglaise complète
- `src/content/types.ts`: schéma TypeScript partagé

Principe: toute nouvelle info doit être ajoutée en FR et EN pour garder une expérience cohérente.

## Arborescence utile

```txt
src/
  App.tsx
  index.css
  components/
  content/
    fr.ts
    en.ts
    types.ts
public/
  CV_Mame_Libasse_Mboup.pdf
  CV_Mame_Libasse_Mboup_EN.pdf
  favicon.ico
```

## Variables d'environnement

Créer un fichier `.env` à la racine:

```env
VITE_WEBHOOK_URL=https://.../webhook/... 
VITE_CHAT_WEBHOOK_URL=https://.../webhook/.../chat
```

Important:
- les variables `VITE_...` sont injectées côté client au build
- ne jamais y mettre de secrets sensibles (mot de passe, clé privée)

## Lancer le projet en local

```bash
npm install
npm run dev
```

Build de production:

```bash
npm run build
npm run preview
```

## Logique du formulaire de contact

Le formulaire envoie un POST JSON vers `VITE_WEBHOOK_URL` avec ce payload:

```json
{
  "name": "...",
  "email": "...",
  "message": "..."
}
```

Comportement:
- `Message envoyé` si `response.ok === true`
- `Erreur lors de l'envoi, veuillez réessayer` sinon

## Chatbot LibasseAI

Le chatbot est injecté dans `index.html` via le bundle `@n8n/chat`.

Fonctionnalités en place:
- webhook configurable via `VITE_CHAT_WEBHOOK_URL`
- messages d'accueil FR/EN selon la langue active du site
- re-init automatique du chat lors du switch de langue
- bouton de fermeture custom branché sur le toggle du widget
- thème visuel harmonisé avec la charte du portfolio

## Déploiement GitHub

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

## Déploiement VPS (Nginx)

Depuis le serveur:

```bash
cd /var/www/portfolio-janvier-2026
git pull origin main
npm ci
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

Vérification rapide:

```bash
curl -I http://127.0.0.1:8081
ls -la dist
```

## Mise à jour du CV

1. Remplacer les fichiers dans `public/`:
- `CV_Mame_Libasse_Mboup.pdf`
- `CV_Mame_Libasse_Mboup_EN.pdf`

2. Rebuild + reload nginx sur VPS:

```bash
npm run build
sudo systemctl reload nginx
```

3. Hard refresh navigateur (`Cmd+Shift+R`).

## Points d'attention en production

- Si le webhook reçoit les données mais que le front affiche une erreur, vérifier le code HTTP de réponse et les en-têtes CORS.
- Si une app en `:808x` ne répond pas mais fonctionne en local VPS, vérifier le firewall cloud/provider (pas seulement UFW).
- `ERR_NAME_NOT_RESOLVED` indique un problème DNS (pas un problème applicatif).
- Pour éviter les blocages réseau entreprise, privilégier les domaines en HTTPS 443 plutôt que des ports élevés.

## État actuel du portfolio

- Contenu FR/EN synchronisé
- Projets d'automatisation en tête de section
- Projet LiBrain ajouté
- Projet LibLeadIN + cartes agents ajoutés
- CV multi-langue opérationnel
- Chatbot LibasseAI actif

## Licence

Projet personnel — usage vitrine.
