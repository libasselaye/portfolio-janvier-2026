# Portfolio 2026 — Mame Libasse Mboup

Ce dépôt contient la version actuelle de mon portfolio professionnel Data / IA.
L'objectif est d'avoir un site clair, crédible et maintenable, capable de présenter mon parcours, mes expériences, mes projets et mes travaux IA de façon structurée.

## Vue d'ensemble

Le site est conçu comme une page unique fluide, avec navigation par ancres.
Il met en avant :

- mon positionnement Data Scientist / Machine Learning Engineer
- mes expériences professionnelles
- ma formation
- mon expertise technique
- mes projets (dont LiBrain et LibLeadIN)
- ma section contact avec formulaire et assistant conversationnel

## Fonctionnalités principales

- Interface bilingue FR / EN avec changement instantané.
- Mode sombre / mode clair.
- Cartes projets homogènes et faciles à enrichir.
- CV adapté à la langue sélectionnée.
- Formulaire de contact opérationnel.
- Assistant LibasseAI intégré dans l'interface.
- Design responsive (desktop et mobile).

## Organisation du contenu

Le contenu éditorial est centralisé pour simplifier les mises à jour.

- `src/content/fr.ts` pour le contenu français
- `src/content/en.ts` pour le contenu anglais
- `src/content/types.ts` pour la structure commune

Règle de maintenance : toute mise à jour doit être appliquée dans les deux langues.

## Mise à jour du CV

Les fichiers CV sont stockés dans `public/`.

- `CV_Mame_Libasse_Mboup.pdf`
- `CV_Mame_Libasse_Mboup_EN.pdf`

Pour mettre à jour le CV, remplacer ces fichiers en conservant les mêmes noms.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Build de vérification :

```bash
npm run build
npm run preview
```

## Publication

Push GitHub :

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

Déploiement VPS :

```bash
cd /var/www/portfolio-janvier-2026
git pull origin main
npm ci
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

## Bonnes pratiques d'exploitation

- Vérifier les contenus FR/EN à chaque évolution.
- Vérifier les liens Repo / Démo avant publication.
- Tester le formulaire et l'assistant après chaque déploiement.
- Utiliser un hard refresh navigateur après mise en production.

## Note sécurité

Les paramètres d'intégration et de communication externe sont gérés via la configuration d'environnement du projet.
Ils ne sont pas détaillés dans ce README pour éviter d'exposer des informations sensibles.

## Licence

Projet personnel — usage vitrine.
