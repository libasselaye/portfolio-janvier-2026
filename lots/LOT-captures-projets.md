# LOT captures-projets — Mettre en avant quatre nouvelles applications avec leurs captures, et passer LibCalPilot à Libfuel

**Branche :** `feat/projets-novembre-2026`, à `7cb096a`.

## Le besoin

Les fiches Knowledge (indice 19), LibTicket (20), OpenStudio (21) et Aminteu (22) s'affichent aujourd'hui en carte compacte, sans image. L'utilisateur veut qu'elles soient mises en avant comme LibLeadIN ou LiBrain : une couverture avec deux captures dans la grille, et une galerie de trois captures dans la fenêtre du projet. La fiche Libfuel (indice 1) doit utiliser ses nouvelles captures et ses nouvelles couleurs.

## L'état actuel

- `src/components/ProductShowcase.tsx` : type `Product = "calpilot" | "leadin" | "librain"`, objet `products` (nom, dossier, deux captures de couverture, accroches FR/EN, trois écrans avec légendes). Deux composants : `ProductScreenshotCover` (couverture) et `ProductShowcase` (galerie). La galerie décide du format avec `const mobile = product === "calpilot"`.
- `src/components/ProductShowcase.css` : toutes les règles sont écrites par produit (`.screenshot-cover-calpilot`, `.screenshot-cover-leadin`, `.screenshot-gallery-librain`…). `calpilot` est le seul produit mobile et clair ; `leadin` et `librain` sont bureau et sombres.
- `src/App.tsx`, lignes 33 à 60 : `FeaturedProjectCover` et `FeaturedProjectShowcase` associent en dur les indices 1, 2 et 4 aux produits `calpilot`, `leadin`, `librain` ; l'indice 0 utilise `LibOrgaCover` / `LibOrgaShowcase` ; sinon repli sur `ProductVisual` avec `featured[index].kind`.
- `src/content/editorial.ts` : `featured` (type avec `kind` obligatoire) contient les indices 0, 1, 2, 4. Les deux chaînes `illustration` (FR ligne ~75, EN ligne ~213) citent « LibOrga, LiBrain, LibCalPilot et LibLeadIN ».
- Images déjà en place (déposées par le lead dev, ne pas les modifier) :
  - `public/projects/libfuel/` : `today.png`, `stats.png`, `manual.png` — mobile, 780×1430.
  - `public/projects/aminteu/` : `today.png`, `history.png`, `treatment.png` — mobile, 780×1430.
  - `public/projects/knowledge/` : `teacher.png`, `student.png`, `marketplace.png` — bureau, 2560×1600.
  - `public/projects/libticket/` : `board.png`, `ticket.png`, `client.png` — bureau, 2560×1600.
  - `public/projects/openstudio/` : `images.png`, `director.png`, `costs.png` — bureau, 2560×1600.
  - Le dossier `public/projects/libcalpilot/` a été supprimé.

## Fichiers autorisés

**Modifier :**
- `src/components/ProductShowcase.tsx`
- `src/components/ProductShowcase.css`
- `src/App.tsx` (uniquement les imports concernés et les fonctions `FeaturedProjectCover` et `FeaturedProjectShowcase`)
- `src/content/editorial.ts`

Tout autre fichier : ne pas le toucher, le signaler dans le rapport.

## Spécification

### 1. `ProductShowcase.tsx` : sept produits, format et ton portés par les données

- Type `Product = "libfuel" | "leadin" | "librain" | "knowledge" | "libticket" | "openstudio" | "aminteu"`. Exporter ce type.
- La clé `calpilot` devient `libfuel`.
- Chaque produit reçoit deux champs : `layout: "mobile" | "desktop"` et `tone: "light" | "dark"`.
  - `libfuel` : mobile, light · `aminteu` : mobile, light
  - `leadin` : desktop, dark · `librain` : desktop, dark
  - `knowledge` : desktop, light · `libticket` : desktop, light · `openstudio` : desktop, light
- Les deux composants ajoutent à leur élément racine, en plus de la classe par produit existante (`screenshot-cover-<produit>`, `screenshot-gallery-<produit>`), les classes `is-<layout>` et `is-<tone>`. Dans la galerie, `figure` garde sa classe `is-mobile` / `is-desktop`, désormais tirée de `layout` (plus de test sur le nom du produit).
- `leadin` et `librain` : contenu inchangé.

Contenu des produits (recopier les textes à la lettre) :

**libfuel** — `name` : `Libfuel` · `root` : `projects/libfuel/` · `cover` : `["today", "stats"]`
- accroche FR : `Manger, suivre, comprendre.` · EN : `Eat, track, understand.`
- titre FR : `Une journée, puis la tendance.` · EN : `One day, then the trend.`
- écrans :
  1. `today` — FR `La journée` / EN `Today` — FR : `Calories restantes, macronutriments et repas se lisent sur un même écran.` — EN : `Remaining calories, macronutrients and meals come together on one screen.`
  2. `stats` — FR `Les statistiques` / EN `Statistics` — FR : `La moyenne de la semaine et la courbe de poids donnent du recul sur les habitudes.` — EN : `The weekly average and the weight curve put everyday habits into perspective.`
  3. `manual` — FR `L’ajout` / EN `Adding food` — FR : `On cherche un aliment, on règle la quantité et les valeurs nutritionnelles se calculent.` — EN : `Search for a food, set the quantity and the nutritional values are calculated.`

**knowledge** — `name` : `Knowledge` · `root` : `projects/knowledge/` · `cover` : `["teacher", "marketplace"]`
- accroche FR : `Enseigner, suivre, progresser.` · EN : `Teach, follow, progress.`
- titre FR : `Trois espaces, un même suivi.` · EN : `Three spaces, one shared record.`
- écrans :
  1. `teacher` — FR `Le planning` / EN `Schedule` — FR : `Le professeur voit sa semaine de cours, par élève et par matière.` — EN : `The teacher sees the week of lessons, by student and by subject.`
  2. `student` — FR `La progression` / EN `Progress` — FR : `L’élève suit ses résultats par compétence et leur évolution dans le temps.` — EN : `The student follows results by skill and how they change over time.`
  3. `marketplace` — FR `La marketplace` / EN `Marketplace` — FR : `Les familles comparent les professeurs par matière, format, tarif et avis.` — EN : `Families compare teachers by subject, format, price and reviews.`

**libticket** — `name` : `LibTicket` · `root` : `projects/libticket/` · `cover` : `["board", "ticket"]`
- accroche FR : `Signaler, trier, résoudre.` · EN : `Report, sort, resolve.`
- titre FR : `Du signalement à la résolution.` · EN : `From report to resolution.`
- écrans :
  1. `board` — FR `Le tableau` / EN `Board` — FR : `Les tickets d’un projet avancent sur cinq colonnes, de « Nouveau » à « Terminé ».` — EN : `A project’s tickets move across five columns, from “New” to “Done”.`
  2. `ticket` — FR `Le ticket` / EN `Ticket` — FR : `Statut, priorité, description et échanges avec le client tiennent dans un même panneau.` — EN : `Status, priority, description and the conversation with the client fit in one panel.`
  3. `client` — FR `Le client` / EN `Client view` — FR : `Invité par un lien, le client suit ses demandes et en crée de nouvelles, sans mot de passe.` — EN : `Invited through a link, the client follows requests and creates new ones, with no password.`

**openstudio** — `name` : `OpenStudio` · `root` : `projects/openstudio/` · `cover` : `["director", "images"]`
- accroche FR : `Écrire, générer, assembler.` · EN : `Write, generate, assemble.`
- titre FR : `Du prompt au montage.` · EN : `From prompt to final cut.`
- écrans :
  1. `images` — FR `Les images` / EN `Images` — FR : `Le coût est estimé avant chaque génération, puis les prises se comparent dans la galerie.` — EN : `The cost is estimated before each generation, then takes are compared in the gallery.`
  2. `director` — FR `Le storyboard` / EN `Storyboard` — FR : `Un projet enchaîne ses plans, avec leur durée, leur état et le budget engagé.` — EN : `A project lines up its shots, with their duration, status and committed budget.`
  3. `costs` — FR `Les coûts` / EN `Costs` — FR : `Les dépenses sont suivies par modèle et par projet, avec un budget quotidien et mensuel.` — EN : `Spending is tracked by model and by project, with daily and monthly budgets.`

**aminteu** — `name` : `Aminteu` · `root` : `projects/aminteu/` · `cover` : `["today", "history"]`
- accroche FR : `Donner, cocher, partager.` · EN : `Give, tick, share.`
- titre FR : `Chaque prise, vue par tous.` · EN : `Every dose, seen by everyone.`
- écrans :
  1. `today` — FR `La journée` / EN `Today` — FR : `L’oxygène et les médicaments du jour, avec l’heure et le nom de la personne qui a coché.` — EN : `The day’s oxygen and medication, with the time and the name of the person who ticked.`
  2. `history` — FR `Le journal` / EN `Log` — FR : `Chaque action est signée et horodatée ; rien ne se supprime.` — EN : `Every action is signed and timestamped; nothing is deleted.`
  3. `treatment` — FR `Le traitement` / EN `Treatment` — FR : `Les médicaments, leurs doses et les horaires du matin, du midi et du soir.` — EN : `Medication, doses and the morning, midday and evening times.`

### 2. `ProductShowcase.css` : règles par format et par ton, couleurs par produit

Réorganiser pour que les règles de **mise en page** dépendent de `is-mobile` / `is-desktop` et `is-light` / `is-dark`, et que seules les **couleurs** restent par produit. Le rendu de `leadin` et `librain` ne doit pas changer.

- Couverture mobile (`.screenshot-cover.is-mobile .cover-shot…`) : reprendre les règles actuelles de `calpilot` (deux téléphones inclinés, bord blanc 4px, rayon 18px).
- Couverture bureau (`.screenshot-cover.is-desktop …`) : reprendre les règles actuelles de `leadin`/`librain` (perspective, deux écrans superposés, le second à 48 % d'opacité). La couleur du bord des écrans dépend du ton : `#22283d` en `is-dark` (valeur actuelle), `#ffffff` en `is-light`. En `is-light`, l'ombre des captures est plus légère (`0 14px 30px #00000022`).
- Galerie : les règles actuelles de `calpilot` deviennent celles de `is-light` (bouton actif : texte blanc sur la couleur de texte du produit ; cadre de la figure clair), celles de `leadin`/`librain` deviennent celles de `is-dark`. Le remplissage de la figure (`padding:24px` mobile clair, `14px` bureau) suit le format.
- L'ombre de `.screenshot-gallery figure.is-mobile img` utilise une ombre neutre (`0 12px 34px #00000024`) au lieu de la teinte verte actuelle.
- Garder les règles `@media(max-width:600px)` avec le même comportement (remplacer `.screenshot-gallery-calpilot figure>a` par l'équivalent mobile).

Couleurs par produit (fond de couverture / fond de galerie / texte / fond du cadre de la figure) :

| Produit | Couverture | Galerie | Texte | Cadre de figure |
|---|---|---|---|---|
| libfuel | `#f6ece4` | `#f6ece4` | `#4a1d08` | `#eeddd0` |
| aminteu | `#e3efef` | `#e3efef` | `#0b454b` | `#d3e5e5` |
| knowledge | `#f1ebe5` | `#f1ebe5` | `#3b2d27` | `#e6ddd4` |
| libticket | `#e6eefb` | `#e6eefb` | `#0c2d5e` | `#d6e2f5` |
| openstudio | `#eee8dd` | `#eee8dd` | `#3d2500` | `#e2d9c9` |
| leadin | inchangé | inchangé | inchangé | inchangé |
| librain | inchangé | inchangé | inchangé | inchangé |

En `is-light`, la bordure du cadre de figure est la couleur de texte du produit à faible opacité (comme aujourd'hui pour calpilot : `#183d2c30` → utiliser `color-mix(in srgb, currentColor 19%, transparent)` ou une valeur hexadécimale équivalente par produit).

### 3. `App.tsx` : une table indice → produit

Remplacer les `if (index === 1) …` en dur par une table déclarée au-dessus des deux fonctions :

```ts
const productShots: Record<number, Product> = {
  1: "libfuel",
  2: "leadin",
  4: "librain",
  19: "knowledge",
  20: "libticket",
  21: "openstudio",
  22: "aminteu",
};
```

`FeaturedProjectCover` : indice 0 → `LibOrgaCover` ; indice présent dans la table → `ProductScreenshotCover` ; sinon repli actuel sur `ProductVisual` **seulement si** `featured[index]?.kind` existe, `null` sinon. Même logique pour `FeaturedProjectShowcase` avec `LibOrgaShowcase` / `ProductShowcase`. Ne rien changer d'autre dans ce fichier.

### 4. `editorial.ts`

- Dans le type de `featured`, `kind` devient optionnel.
- Ajouter quatre entrées (sans `kind`) :
  - `"19"` : `name` `Knowledge` · `fr` `Suivre les cours particuliers et trouver un professeur.` · `en` `Follow private lessons and find a teacher.` · `tags` `["NestJS", "Next.js", "PostgreSQL"]`
  - `"20"` : `name` `LibTicket` · `fr` `Suivre les demandes de ses clients sur un tableau.` · `en` `Track client requests on a board.` · `tags` `["Next.js", "PostgreSQL", "Docker"]`
  - `"21"` : `name` `OpenStudio` · `fr` `Générer des images et des vidéos en maîtrisant les coûts.` · `en` `Generate images and videos while keeping costs under control.` · `tags` `["IA générative", "Next.js", "SQLite"]`
  - `"22"` : `name` `Aminteu` · `fr` `Suivre en famille les médicaments et l’oxygène d’un proche.` · `en` `Track a relative’s medication and oxygen as a family.` · `tags` `["PWA", "Fastify", "PostgreSQL"]`
- Entrée `"1"` : `tags` devient `["PWA", "React", "Supabase"]`.
- Les deux chaînes `illustration` deviennent : FR `Interfaces réelles · Données de démonstration` ; EN `Real interfaces · Demo data`.
- Dans `src/App.tsx`, la carte traduit déjà le tag `Agents IA` en anglais ; ne pas étendre ce mécanisme. Pour `IA générative`, ajouter dans `editorial.ts` rien de plus : le tag reste tel quel dans les deux langues.

## Hors périmètre

- Ne pas toucher à `LibOrgaShowcase.tsx`, `LibOrgaShowcase.css`, `src/index.css`, `fr.ts`, `en.ts`, ni aux images de `public/`.
- Ne pas changer `projectOrder` ni `projectCategory`.
- Pas de nouvelle dépendance.

## Critères d'acceptation

- [ ] Plus aucune occurrence de `calpilot` ni de `LibCalPilot` dans `src/components/` et `src/App.tsx`.
- [ ] Les sept produits ont `layout` et `tone` ; aucune règle de mise en page ne dépend du nom d'un produit, seules les couleurs.
- [ ] Les indices 19, 20, 21 et 22 s'affichent en carte mise en avant avec leur couverture, et leur fenêtre montre la galerie à trois onglets.
- [ ] Le rendu de LibLeadIN et de LiBrain est inchangé (mêmes valeurs CSS calculées).
- [ ] Tous les fichiers d'image référencés existent dans `public/projects/`.
- [ ] `npm run build` passe.

## Vérifications à lancer

- `npm run build`
- `grep -rn -i "calpilot" src/` : seules les mentions dans `src/content/fr.ts` et `src/content/en.ts` (« s’appelait d’abord LibCalPilot ») sont admises.
- Pour chaque produit et chaque écran, vérifier que `public/projects/<dossier>/<fichier>.png` existe.

## Rapport attendu

~~~
## Lot captures-projets — Mettre en avant quatre nouvelles applications avec leurs captures

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
