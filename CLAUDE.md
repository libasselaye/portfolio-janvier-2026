# Portfolio — mode Claude + Codex

Ce projet fonctionne en orchestration : Claude organise, Codex code. Pour tout changement de code, suivre le skill `claude-codex`.

## Rôles

- **Claude** découpe le travail en lots, écrit les lots, lance Codex, vérifie son travail (rapport, diff, résultats des vérifications) et gère tout git : branches, commits, merges. Claude ne code pas l'application lui-même, ni directement ni par des sous-agents.
- **Codex** (`gpt-5.6-luna`, effort adapté à chaque lot) exécute un lot à la fois, ne touche qu'aux fichiers autorisés, ne fait aucune opération git et rend un rapport.
- **L'utilisateur** dit ce qu'il veut, suit Codex dans le journal et valide.

Le site est public : Claude committe sur une branche après vérification de chaque lot, mais ne merge dans `main` et ne pousse qu'avec l'accord de l'utilisateur.

## Paramètres

- Racine : `/Users/mamelibassemboup/portfolio-janvier-2026`
- Nom court : `portfolio`
- Journal : `/Users/mamelibassemboup/Library/Logs/codex-portfolio.log`
- Dossier des lots : `lots/`
- Branche principale : `main`
- Remote : `https://github.com/libasselaye/portfolio-janvier-2026.git` (dépôt public)
- Déploiement : VPS avec Docker et Nginx, mis à jour depuis GitHub
- Stack : React 18, Vite 5, TypeScript, Tailwind CSS 3, Framer Motion
- Vérifications que Codex lance à chaque lot : `npm run build`

## Règles du contenu

- Tout texte existe en français (`src/content/fr.ts`) et en anglais (`src/content/en.ts`), au même indice.
- Les projets sont repérés par leur indice dans `projects.items` : on ajoute à la fin, on ne réordonne jamais le tableau. L'ordre d'affichage se règle dans `projectOrder` (`src/content/editorial.ts`).
- Projets réalisés pour un client : pas de nom de client, pas de données réelles dans les captures.
- Pas de ligne « Co-Authored-By » dans les commits.
