# LOT fiches-projets — Sept nouvelles fiches projet et renommage de LibCalPilot en Libfuel

**Branche :** `feat/projets-novembre-2026`, créée par le lead dev depuis `main` à `b1c7f2a`.

## Le besoin

L'utilisateur a développé plusieurs applications ces dernières semaines. Il faut les ajouter à la section « Projets » du portfolio, en français et en anglais, et les placer en tête de liste. L'application LibCalPilot a été renommée Libfuel : sa fiche doit suivre.

## L'état actuel

- `src/content/fr.ts` et `src/content/en.ts` : `projects.items` contient 19 fiches (indices 0 à 18), dans le même ordre dans les deux langues. Type `Project` dans `src/content/types.ts` : `title`, `description`, `tags`, `repo`, `demo`. Un lien absent vaut `"#"`. Deux paragraphes de description sont séparés par `\n\n`.
- `src/content/editorial.ts` :
  - `projectOrder` (ligne 3) : ordre d'affichage, par indice.
  - `projectCategory` (ligne 6) : `product` pour `[0, 1, 5, 18]`, `data` pour `[7, 13, 14, 15, 16, 17]`, `ai` sinon.
  - `featured` (ligne 12) : cartes mises en avant, clé = indice. L'entrée `"1"` s'appelle `LibCalPilot`.
  - `allProjects` : « Voir les 19 projets » (ligne 71) et « View all 19 projects » (ligne 209).
- La fiche d'indice 1 (LibCalPilot) existe dans `fr.ts` et `en.ts`.

## Fichiers autorisés

**Modifier :**
- `src/content/fr.ts`
- `src/content/en.ts`
- `src/content/editorial.ts`

Tout autre fichier : ne pas le toucher, le signaler dans le rapport.

## Spécification

### 1. Ajouter sept fiches à la fin de `projects.items`

Les ajouter après la fiche d'indice 18, dans cet ordre, pour obtenir les indices 19 à 25. Même ordre dans `fr.ts` et `en.ts`. Recopier les textes ci-dessous à la lettre (apostrophes typographiques `’` comprises), sans les reformuler. `tags`, `repo` et `demo` sont identiques dans les deux langues, sauf mention contraire.

#### Indice 19 — Knowledge

- FR `title` : `Knowledge — Cours particuliers`
- EN `title` : `Knowledge — Private tutoring`
- FR `description` :
  - § 1 : Knowledge réunit le suivi pédagogique et la mise en relation pour les cours particuliers. Le professeur planifie ses cours, partage des ressources, donne des devoirs et suit la progression de chaque élève par compétence. Élèves, parents et professeurs ont chacun leur espace et leurs identifiants ; un parent crée et administre le compte de son enfant mineur. Une marketplace publique permet de chercher un professeur, de consulter sa fiche et de lui envoyer une demande.
  - § 2 : L’API est en NestJS avec Prisma et PostgreSQL, le site en Next.js. Les fichiers déposés sont stockés sur Cloudflare R2. J’ai aussi développé un back-office avec un journal des actions, et des sessions que l’on peut consulter et révoquer une par une. L’ensemble tourne sur un VPS avec Docker et Traefik.
- EN `description` :
  - § 1 : Knowledge brings learning follow-up and tutor matching together for private tutoring. Teachers schedule lessons, share resources, set homework and track each student’s progress by skill. Students, parents and teachers each have their own space and credentials; a parent creates and manages the account of a child under 18. A public marketplace lets families search for a teacher, read their profile and send a request.
  - § 2 : The API uses NestJS with Prisma and PostgreSQL, and the website uses Next.js. Uploaded files are stored on Cloudflare R2. I also built a back office with an activity log, and sessions that can be reviewed and revoked one by one. Everything runs on a VPS with Docker and Traefik.
- `tags` : `NestJS`, `Prisma`, `PostgreSQL`, `Next.js 16`, `React 19`, `TypeScript`, `Cloudflare R2`, `Vitest`, `Docker`, `Traefik`
- `repo` : `#` · `demo` : `https://knowledge.libasse.tech`

#### Indice 20 — LibTicket

- FR `title` : `LibTicket — Suivi de tickets`
- EN `title` : `LibTicket — Ticket tracking`
- FR `description` :
  - § 1 : J’ai développé LibTicket pour suivre les demandes des clients dont je gère les projets. Je crée un projet et j’envoie un lien d’invitation : le client l’ouvre, donne son nom, sans mot de passe, puis signale un bug ou une demande avec des captures d’écran. De mon côté, je trie, j’assigne et je fais avancer les tickets sur un tableau à cinq colonnes.
  - § 2 : L’application repose sur Next.js et PostgreSQL, avec seulement quatre dépendances à l’exécution. Les sessions sont limitées à 90 jours et seule l’empreinte des jetons est stockée. Chaque nuit, la base et les captures sont sauvegardées sur le serveur et sur Cloudflare R2.
- EN `description` :
  - § 1 : I built LibTicket to track requests from the clients whose projects I manage. I create a project and send an invitation link: the client opens it, gives their name, with no password, then reports a bug or a request with screenshots. On my side, I sort, assign and move tickets across a five-column board.
  - § 2 : The application uses Next.js and PostgreSQL, with only four runtime dependencies. Sessions are limited to 90 days and only a hash of each token is stored. Every night, the database and the screenshots are backed up on the server and on Cloudflare R2.
- `tags` : `Next.js 16`, `React 19`, `TypeScript`, `PostgreSQL`, `Docker`, `Traefik`, `Cloudflare R2`
- `repo` : `#` · `demo` : `https://libticket.libasse.tech`

#### Indice 21 — OpenStudio

- FR `title` : `OpenStudio — Studio image et vidéo`
- EN `title` : `OpenStudio — Image and video studio`
- FR `description` :
  - § 1 : OpenStudio est un studio de génération d’images et de vidéos que l’on héberge soi-même. Un même routeur donne accès aux modèles de Gemini, d’OpenAI, d’Anthropic et de Kling. On y compose un prompt à partir de préréglages, on compare les prises sur une planche-contact, on garde des personnages d’une image à l’autre et on assemble les plans d’un storyboard.
  - § 2 : Le coût de chaque génération est estimé avant le lancement et un plafond de budget bloque les dépenses imprévues. Par défaut, l’application tourne avec un fournisseur simulé, ce qui permet de la développer et de la tester sans rien dépenser. Elle repose sur Next.js, SQLite avec Drizzle, une file de tâches avec reprise et ffmpeg pour le montage.
- EN `description` :
  - § 1 : OpenStudio is a self-hosted studio for generating images and videos. A single router gives access to models from Gemini, OpenAI, Anthropic and Kling. You build a prompt from presets, compare takes on a contact sheet, keep characters consistent from one image to the next and assemble the shots of a storyboard.
  - § 2 : The cost of each generation is estimated before it starts, and a budget cap blocks unexpected spending. By default, the application runs with a mock provider, so it can be developed and tested without spending anything. It uses Next.js, SQLite with Drizzle, a job queue that can resume, and ffmpeg for editing.
- `tags` : `Next.js 16`, `TypeScript`, `SQLite`, `Drizzle`, `Gemini`, `OpenAI`, `Claude`, `Kling`, `ffmpeg`, `Playwright`, `Vitest`
- `repo` : `#` · `demo` : `#`

#### Indice 22 — Aminteu

- FR `title` : `Aminteu — Suivi des médicaments`
- EN `title` : `Aminteu — Medication tracking`
- FR `description` :
  - § 1 : Aminteu permet à une famille de suivre ensemble les prises de médicaments et les séances d’oxygène d’un proche. Chacun se connecte avec son code personnel et coche une prise ; tous les écrans ouverts se mettent à jour en direct. Des rappels et des alertes arrivent par notification quand une prise est en retard.
  - § 2 : Les règles sont garanties par PostgreSQL : une prise ne s’enregistre qu’une fois, deux séances d’oxygène ne peuvent pas se chevaucher et rien n’est supprimé, seulement annulé avec un motif. Le serveur est en Node.js avec Fastify et l’interface est une PWA sans framework. Un workflow n8n recopie le journal dans un Google Sheet, et les mises en ligne se font sans coupure.
- EN `description` :
  - § 1 : Aminteu lets a family track a relative’s medication and oxygen sessions together. Each person signs in with a personal code and ticks off a dose; every open screen updates live. Reminders and alerts arrive as notifications when a dose is late.
  - § 2 : The rules are enforced by PostgreSQL: a dose can only be recorded once, two oxygen sessions cannot overlap, and nothing is deleted, only cancelled with a reason. The server uses Node.js with Fastify and the interface is a PWA built without a framework. An n8n workflow copies the log to a Google Sheet, and releases go live without downtime.
- `tags` : `Node.js 22`, `Fastify`, `PostgreSQL`, `PWA`, `SSE`, `Web Push`, `n8n`, `Google Sheets`, `Docker`, `Traefik`
- `repo` : `#` · `demo` : `#`

#### Indice 23 — Praxio

- FR `title` : `Praxio — Registre de professionnels de santé`
- EN `title` : `Praxio — Healthcare professional registry`
- FR `description` :
  - § 1 : Praxio est une plateforme réalisée pour un organisme de formation qui s’adresse aux professionnels de santé. Elle constitue un registre national de praticiens en croisant plusieurs sources publiques, dont le RPPS et l’annuaire MSSanté. Pour chaque donnée, elle conserve la source, la date de vérification et un score de confiance.
  - § 2 : J’ai développé l’ingestion des sources, le rapprochement des fiches qui désignent le même praticien et un tableau de bord pour contrôler ces rapprochements. Chaque commercial dispose d’un portefeuille défini par profession et par territoire, avec des exports et un écran de pilotage. L’application est en Next.js et parle directement à PostgreSQL, sans ORM.
- EN `description` :
  - § 1 : Praxio is a platform built for a training organisation that works with healthcare professionals. It builds a national registry of practitioners by cross-referencing several public sources, including the RPPS and the MSSanté directory. For each piece of data, it keeps the source, the verification date and a confidence score.
  - § 2 : I built the ingestion of the sources, the matching of records that refer to the same practitioner and a dashboard to review those matches. Each sales representative has a portfolio defined by profession and territory, with exports and a monitoring screen. The application uses Next.js and talks directly to PostgreSQL, without an ORM.
- `tags` : `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS v4`, `PostgreSQL`, `RPPS`, `Docker`
- `repo` : `#` · `demo` : `#`

#### Indice 24 — Site vitrine, matériel médical

- FR `title` : `Site vitrine — Matériel médical`
- EN `title` : `Showcase website — Medical equipment`
- FR `description` :
  - § 1 : J’ai conçu la maquette du nouveau site d’un magasin de location et de vente de matériel médical. Le client voulait aller droit au but : un menu court, des textes sans répétition et, pour chaque produit, son utilité. Le site compte 25 pages, dont treize catégories de produits et des articles de conseils. Sur l’accueil, une maison en coupe s’affiche en 3D avec three.js.
  - § 2 : Les pages sont générées par des scripts Python à partir du contenu, puis publiées sur Netlify à chaque mise à jour du dépôt.
- EN `description` :
  - § 1 : I designed the mock-up of a new website for a shop that rents and sells medical equipment. The client wanted to get straight to the point: a short menu, copy without repetition and, for each product, what it is for. The site has 25 pages, including thirteen product categories and advice articles. On the home page, a cutaway house is rendered in 3D with three.js.
  - § 2 : The pages are generated by Python scripts from the content, then published on Netlify whenever the repository is updated.
- `tags` : `HTML`, `CSS`, `JavaScript`, `three.js`, `Python`, `Netlify`
- `repo` : `#` · `demo` : `#`

#### Indice 25 — SerenityRituals

- FR `title` : `SerenityRituals — Page de présentation`
- EN `title` : `SerenityRituals — Landing page`
- FR `description` :
  - § 1 : SerenityRituals est la page de présentation d’une pratique d’harmonisation énergétique. Elle présente la praticienne, ses accompagnements, le déroulement d’une séance, des témoignages et une FAQ, avec une prise de rendez-vous sur Calendly.
  - § 2 : Le site est statique et sans étape de build : React et Babel sont chargés depuis un CDN et les composants sont compilés dans le navigateur.
- EN `description` :
  - § 1 : SerenityRituals is the landing page of an energy healing practice. It presents the practitioner, her services, how a session works, testimonials and an FAQ, with appointment booking through Calendly.
  - § 2 : The site is static and has no build step: React and Babel are loaded from a CDN and the components are compiled in the browser.
- `tags` : `React 18`, `Babel Standalone`, `HTML`, `CSS`, `Calendly`
- `repo` : `https://github.com/libasselaye/serenityrituals` · `demo` : `#`

### 2. Renommer LibCalPilot en Libfuel (indice 1)

Dans `fr.ts` et `en.ts`, remplacer la fiche d'indice 1 par :

- FR `title` : `Libfuel — Suivi alimentaire`
- EN `title` : `Libfuel — Food tracking`
- FR `description` :
  - § 1 : Libfuel permet de noter ses repas et de suivre ses calories, ses macronutriments et son poids. On peut chercher un aliment dans les bases CIQUAL et Open Food Facts, scanner son code-barres ou utiliser une photo pour obtenir une estimation des aliments et des quantités.
  - § 2 : J’ai développé le suivi quotidien, les recettes réutilisables et les statistiques hebdomadaires avec React et Supabase. Un modèle de vision analyse les photos depuis une Edge Function. Les besoins caloriques sont calculés à partir du profil et actualisés à chaque pesée. L’application s’appelait d’abord LibCalPilot.
- EN `description` :
  - § 1 : Libfuel lets you log meals and track calories, macronutrients and weight. You can search the CIQUAL and Open Food Facts databases, scan a barcode or use a photo to estimate foods and quantities.
  - § 2 : I built the daily log, reusable recipes and weekly statistics with React and Supabase. A vision model analyses photos from an Edge Function. Calorie needs are calculated from the user’s profile and updated after each weigh-in. The application was first called LibCalPilot.
- `tags` : `React 19`, `Vite`, `TypeScript`, `Tailwind CSS`, `TanStack Query`, `Supabase`, `DeepSeek Vision`, `PWA`, `Vitest`, `Edge Functions`
- `repo` : `https://github.com/libasselaye/Libfuel` · `demo` : `https://libfuel.vercel.app`

Dans `editorial.ts`, entrée `featured["1"]` : `name` devient `Libfuel` et `tags` devient `["PWA", "IA vision", "React"]`. Ne pas toucher à `kind`, `fr`, `en`.

### 3. Ordre, catégories et compteurs dans `editorial.ts`

- `projectOrder` devient exactement :
  `[19, 0, 20, 22, 21, 1, 23, 4, 2, 3, 24, 25, 7, 6, 8, 9, 10, 11, 12, 5, 13, 14, 15, 16, 17, 18]`
- `projectCategory` : `product` pour `[0, 1, 5, 18, 19, 20, 22, 24, 25]` ; `data` pour `[7, 13, 14, 15, 16, 17, 23]` ; `ai` sinon (donc 21 est `ai`).
- `allProjects` : « Voir les 26 projets » et « View all 26 projects ».
- Ne pas ajouter d'entrée dans `featured` pour les indices 19 à 25 : les nouvelles fiches s'affichent pour l'instant en carte compacte. Un lot suivant les mettra en avant avec des captures.

## Hors périmètre

- Aucun changement dans `src/App.tsx`, les composants, les styles ou `public/`.
- Ne pas renommer le dossier `public/projects/libcalpilot` ni la clé `calpilot` de `ProductShowcase.tsx`.
- Ne pas reformuler les fiches existantes, ne pas réordonner `projects.items`.
- Ne pas modifier `tsconfig.tsbuildinfo` volontairement (le build peut le régénérer : le signaler seulement).

## Critères d'acceptation

- [ ] `projects.items` compte 26 fiches dans `fr.ts` et dans `en.ts`, les indices 0 et 2 à 18 inchangés.
- [ ] Les textes des indices 1 et 19 à 25 correspondent à la spécification, à la lettre.
- [ ] `projectOrder` contient les 26 indices, une fois chacun, dans l'ordre demandé.
- [ ] Plus aucune occurrence de « 19 projets » ni de « 19 projects ».
- [ ] `npm run build` passe.

## Vérifications à lancer

- `npm run build`
- `grep -n "19 proj" src/content/editorial.ts` ne renvoie rien.

## Rapport attendu

~~~
## Lot fiches-projets — Sept nouvelles fiches projet et renommage de LibCalPilot en Libfuel

### Fichiers créés
- chemin — une ligne : ce qu'il contient

### Fichiers modifiés
- chemin — une ligne : ce qui a changé

### Écarts à la spécification
<Tout point non suivi à la lettre, et pourquoi. « Aucun » sinon.>

### Points d'attention pour le lead dev
<Régression possible, doute, décision prise seul. « Aucun » sinon.>

### Vérifications
- <commande> : OK / ÉCHEC (+ sortie si échec)
~~~
