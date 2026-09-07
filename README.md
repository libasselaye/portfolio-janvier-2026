# Portfolio 2026 — Mame Libasse Mboup

Ce dépôt contient mon portfolio professionnel Data / IA.  
Je l’ai conçu comme une vitrine technique, claire et maintenable, pour présenter mon parcours, mes expériences, mes projets et ma façon de construire des solutions orientées impact métier.

---

## Ce que je montre dans ce portfolio

Le site est organisé en one-page avec navigation fluide par ancres. On y retrouve :

- un hero orienté proposition de valeur
- une section « À propos »
- mes expériences professionnelles
- ma formation
- mon expertise technique (Data, ML, Engineering, Automation, Agentic AI)
- mes projets et recherches
- une section contact avec formulaire
- un assistant conversationnel intégré (LibasseAI)

L’objectif n’est pas juste de “montrer un CV”, mais de rendre ma démarche lisible rapidement : vision, exécution, résultats.

---

## Fonctionnalités principales

- **Bilingue FR / EN** avec bascule instantanée
- **Mode clair / sombre** avec préférence persistée
- **CV contextualisé par langue** (FR ouvre le CV FR, EN ouvre le CV EN)
- **Sections animées** de manière discrète (scroll/reveal)
- **Cards projets homogènes** et faciles à enrichir
- **Formulaire de contact** connecté à un webhook externe
- **Chatbot LibasseAI** intégré à l’interface
- **Responsive** desktop / tablette / mobile

---

## Stack utilisée

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion (animations légères)
- Site statique optimisé SEO (build Vite)
- Déploiement compatible GitHub + VPS/Nginx

---

## Architecture du projet

```txt
src/
  components/        # Composants UI réutilisables
  content/           # Contenu éditorial FR/EN + typage
    fr.ts
    en.ts
    types.ts
  hooks/             # Hooks utilitaires (sections actives, etc.)
  App.tsx            # Composition globale des sections
  index.css          # Thème global + styles custom
public/                # tout ce qui est publié tel quel sur le web
  CV_Mame_Libasse_Mboup.pdf
  CV_Mame_Libasse_Mboup_EN.pdf
  favicon.ico
  photos/optimized/    # copies web des photos et vidéos
  logos/
assets-sources/        # originaux versionnés, jamais servis par le site
  photos/
```

> Les originaux pleine résolution restent hors de `public/` : tout fichier placé
> dans `public/` devient téléchargeable publiquement par URL directe.

---

## Règle de maintenance du contenu

Toute évolution de contenu doit rester **symétrique FR/EN**.

### Ajouter / modifier un projet

Je mets à jour :

- `src/content/fr.ts` → `projects.items`
- `src/content/en.ts` → `projects.items`

Chaque projet suit la même structure :

- `title`
- `description`
- `tags`
- `repo`
- `demo`

Ça permet de garder un rendu homogène automatiquement sans toucher au layout.

---

## Gestion des CV

Les deux CV sont servis depuis `public/` :

- `CV_Mame_Libasse_Mboup.pdf` (FR)
- `CV_Mame_Libasse_Mboup_EN.pdf` (EN)

Pour les mettre à jour, je remplace simplement les fichiers en conservant les mêmes noms.

---

## Variables d’environnement

Je garde toute configuration externe hors du code source via `.env`.

Exemple minimal :

```bash
VITE_WEBHOOK_URL=https://your-domain/webhook/contact
VITE_CHAT_WEBHOOK_URL=https://your-domain/webhook/chat
```

> Important : je ne versionne jamais d’identifiants, tokens ou URLs sensibles dans la documentation publique.

---

## Lancer le projet en local

Pré-requis : Node.js 18+ et npm.

```bash
npm install
npm run dev
```

Build de vérification :

```bash
npm run build
npm run preview
```

### Astuce si `ERR_CONNECTION_REFUSED`

Ce message signifie généralement que le serveur Vite n’est pas lancé (ou a été arrêté).  
Je relance simplement `npm run dev` et je garde le terminal actif.

---

## Workflow Git (simple et propre)

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

Je préfère des commits atomiques (une intention claire par commit : design, contenu, chatbot, etc.).

---

## Déploiement VPS

Le domaine est servi par Traefik, qui route vers un conteneur `nginx:alpine`
montant `dist/` en lecture seule. Le conteneur lit le montage en direct : un
nouveau build suffit, aucun redémarrage n'est nécessaire.

```txt
libasse.tech → Traefik (80/443, TLS Let's Encrypt)
  ├── /      → conteneur portfolio      → /var/www/portfolio-janvier-2026/dist
  └── /old   → conteneur portfolio-old  → /var/www/portfolio-old   (archive figée)
```

Le stack Docker est décrit dans `/docker/n8n/docker-compose.yml` sur le serveur.
Le vhost `sites-available/portfolio-janvier-2026.conf` (port 8081) est un vestige
et ne sert pas le domaine.

Mise en production depuis le serveur :

```bash
cd /var/www/portfolio-janvier-2026
git pull origin main
npm ci
npm run build
```

Checklist post-déploiement :

- hard refresh navigateur
- test formulaire contact
- test chatbot
- vérification des liens CV/Repo/Démo

### Archive `/old`

`/var/www/portfolio-old` contient une copie figée d'un build précédent, servie par
un conteneur distinct. Elle est indépendante de `dist/` : les rebuilds ne la
touchent pas. Son `index.html` a ses chemins racine préfixés par `/old/` et porte
un `noindex` pour rester hors des moteurs de recherche.

Pour figer la version en ligne comme nouvelle archive :

```bash
rm -rf /var/www/portfolio-old && mkdir -p /var/www/portfolio-old
cp -a /var/www/portfolio-janvier-2026/dist/. /var/www/portfolio-old/
sed -i 's|href="/favicon|href="/old/favicon|g; s|="/assets/|="/old/assets/|g' /var/www/portfolio-old/index.html
sed -i 's|<meta charset="UTF-8" />|<meta charset="UTF-8" />\n    <meta name="robots" content="noindex, nofollow" />|' /var/www/portfolio-old/index.html
```

Pour retirer l'archive : supprimer le service `portfolio-old` du
`docker-compose.yml`, puis `docker compose up -d --remove-orphans`.

---

## Contrôle qualité avant push

Avant chaque push, je vérifie :

- cohérence FR/EN
- cohérence des CTA et ancres
- lisibilité light/dark
- rendu mobile
- absence de liens cassés
- build OK (`npm run build`)

---

## Sécurité & confidentialité

- Aucune clé/API token ne doit être exposée dans le code front
- Toute intégration externe passe par variable d’environnement
- Les infos d’infrastructure (adresses, secrets, credentials) restent hors documentation publique

### Protection des médias

Aucune protection ne rend un média non téléchargeable : ce que le navigateur
affiche a déjà été transmis au visiteur. Le site limite donc l'exposition et la
reprise opportuniste :

- les originaux pleine résolution vivent dans `assets-sources/`, hors du web
- clic droit et glisser-déposer neutralisés sur `img` et `video` (`src/App.tsx`)
- appui long iOS et sélection désactivés (`img, video` dans `src/index.css`)
- bouton de téléchargement natif retiré du lecteur vidéo (`controlsList`)

---

## Licence

Projet personnel (usage portfolio).
