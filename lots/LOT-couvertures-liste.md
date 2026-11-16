# LOT couvertures-liste — Couvertures claires lisibles et liste compacte des autres projets

**Branche :** `feat/couvertures-liste-projets`, créée par le lead dev depuis `main` à `27a7a19`.

## Le besoin

Deux défauts de design dans la section « Projets » :

1. Sur les cartes mises en avant de Knowledge, LibTicket et OpenStudio (captures d'ordinateur sur fond clair), la deuxième capture est affichée à 48 % d'opacité par-dessus la première. Sur fond clair, cela donne un voile gris illisible. Knowledge manque en plus de contraste (beige sur beige).
2. Quand on déplie tous les projets, les 17 fiches sans capture s'affichent en grosses cartes de texte sur deux colonnes : la section devient très longue. Il faut les présenter dans une liste compacte, une ligne par projet.

## L'état actuel

- `src/components/ProductShowcase.css` : la couverture bureau est définie par `.screenshot-cover.is-desktop …` (perspective sur `.screenshot-cover-media`, `.cover-shot` en `width:92%`, `.cover-shot-2` à `opacity:.48`). Une seule surcharge pour le clair : `.screenshot-cover.is-desktop.is-light .cover-shot{border-color:#fff}`. Couleurs par produit en bas du fichier (`--product-text`, `background`, `--figure-bg`).
- `src/components/LibOrgaShowcase.css` : la couverture de LibOrga est le modèle visuel à suivre — deux captures opaques, bord blanc, l'une inclinée de −6°, l'autre de +5°, décalées (`.liborga-cover-screens img`, `.liborga-screen-back`, `.liborga-screen-front`). Ne pas modifier ce fichier.
- `src/App.tsx`, section `id="projects"` : `displayed.map((index) => …)` rend dans `.project-grid` une `article.project-card` par projet. Si `featured[index]` existe : carte avec couverture. Sinon : `article.project-card.project-card-compact` contenant `.compact-project-top`, `.project-info` et `p.compact-project-description`. Un clic sur `.project-open` appelle `setSelectedProject(index)` et ouvre la fenêtre du projet.
- `src/index.css` : styles `.project-grid` (ligne ~634), `.project-card-compact`, `.compact-project-top`, `.compact-project-description` (lignes ~750 à 780) et leurs variantes dans la media query mobile (ligne ~2788).
- `src/content/editorial.ts` : textes d'interface FR et EN (`filters`, `details`, `allProjects`…).

## Fichiers autorisés

**Modifier :**
- `src/components/ProductShowcase.css`
- `src/App.tsx` (uniquement le rendu de la liste des projets dans la section `id="projects"`)
- `src/index.css` (uniquement les styles des projets)
- `src/content/editorial.ts`

Tout autre fichier : ne pas le toucher, le signaler dans le rapport.

## Spécification

### 1. Couvertures bureau sur fond clair (`ProductShowcase.css`)

Pour `.screenshot-cover.is-desktop.is-light` uniquement (Knowledge, LibTicket, OpenStudio) — le rendu de `leadin` et `librain` (`is-dark`) ne doit pas changer :

- Pas de perspective : `.screenshot-cover-media{transform:none}`.
- Les deux captures sont opaques (`opacity:1`), avec bord blanc de 4px, rayon de 10px, `aspect-ratio:16/10`, `object-fit:cover`, `object-position:top left`, ombre `0 14px 30px #00000022`.
- Disposition inspirée de LibOrga, à ajuster pour que les deux captures restent lisibles et que la seconde ne recouvre pas plus d'un tiers de la première :
  - `.cover-shot-1` : `width:80%`, `left:-2%`, `right:auto`, `top:10px`, `transform:rotate(-4deg)`.
  - `.cover-shot-2` : `width:80%`, `right:-16%`, `top:118px`, `transform:rotate(3deg)`.
- Les captures ne doivent jamais passer sous le texte de gauche : la colonne de texte reste lisible à 1440 px, 1024 px et 375 px de large.

Contraste des fonds (couverture et galerie, même valeur) :

| Produit | Fond actuel | Nouveau fond | Nouveau `--figure-bg` |
|---|---|---|---|
| knowledge | `#f1ebe5` | `#dccfc2` | `#cfc0b1` |
| libticket | `#e6eefb` | `#d5e1f7` | `#c5d4f0` |
| openstudio | `#eee8dd` | `#e0d6c4` | `#d3c7b2` |

Les couleurs de texte ne changent pas.

### 2. Liste compacte des projets sans capture (`App.tsx`, `index.css`, `editorial.ts`)

- Dans la section projets, séparer `displayed` en deux : les indices qui ont une entrée dans `featured` et les autres.
- `.project-grid` ne contient plus que les projets mis en avant, avec le rendu actuel de la carte à couverture, inchangé. Si aucun projet mis en avant n'est affiché, ne pas rendre la grille.
- Sous la grille, si la seconde liste n'est pas vide, rendre :

```tsx
<div className="project-list-block">
  <p className="eyebrow">{t.otherProjects}</p>
  <ul className="project-list">
    {/* un <li> par projet */}
    <li key={index}>
      <button className="project-row" onClick={() => setSelectedProject(index)} aria-label={`${t.details} : ${item.title}`}>
        <span className="project-row-index">01</span>
        <span className="project-row-title">{item.title}</span>
        <span className="project-row-tags">{item.tags.slice(0, 3).join(" / ")}</span>
        <span className="project-row-category">{/* libellé du filtre de la catégorie */}</span>
        <Arrow diagonal />
      </button>
    </li>
  </ul>
</div>
```

  - `project-row-index` : la position dans cette liste, sur deux chiffres (`01`, `02`…), pas l'indice source.
  - `project-row-category` : le même libellé que l'ancienne carte compacte (`t.filters[categories.indexOf(projectCategory(index))]`).
- `editorial.ts` : ajouter `otherProjects` — FR `Autres projets`, EN `Other projects`.
- Styles dans `src/index.css` :
  - `.project-list-block` : `margin-top:56px` ; son `.eyebrow` a `margin-bottom:14px`.
  - `.project-list` : liste sans puce ni marge, trait supérieur `1px solid var(--line)`.
  - `.project-row` : pleine largeur, texte à gauche, grille `40px minmax(0,1.4fr) minmax(0,1fr) 150px 20px`, `gap:20px`, `align-items:center`, `padding:17px 4px`, trait inférieur `1px solid var(--line)`.
  - `.project-row-index` : 10px, `var(--muted)`, `letter-spacing:.08em`.
  - `.project-row-title` : 16px, `letter-spacing:-0.2px`, une seule ligne avec points de suspension si trop long.
  - `.project-row-tags` et `.project-row-category` : 11px, `var(--muted)`, une seule ligne avec points de suspension.
  - Survol et focus clavier (`:hover`, `:focus-visible`) : le titre et la flèche passent en `var(--copper)` ; transition de couleur de 0,2 s. Garder un contour de focus visible.
  - Mobile (dans la media query mobile existante qui contient déjà les règles des projets) : grille `28px minmax(0,1fr) 18px` ; le titre peut passer sur deux lignes ; `.project-row-tags` passe sous le titre (deuxième ligne de la grille, colonne du titre) ; `.project-row-category` est masqué.
- Supprimer de `index.css` les règles devenues inutiles : `.project-card-compact`, `.compact-project-top`, `.compact-project-description` et leurs variantes dans les media queries. Vérifier d'abord par `grep` qu'aucun autre composant ne les utilise.
- Le compteur `04 / 26`, les filtres et le bouton « Voir les 26 projets » gardent leur comportement.

## Hors périmètre

- Ne pas toucher à `LibOrgaShowcase.*`, `ProductShowcase.tsx`, aux contenus `fr.ts` / `en.ts`, ni aux images.
- Ne pas modifier `projectOrder`, `projectCategory` ni `featured`.
- Ne pas changer la fenêtre du projet.

## Critères d'acceptation

- [ ] Sur Knowledge, LibTicket et OpenStudio, les deux captures de couverture sont opaques et lisibles, sans voile gris, et ne recouvrent pas le texte.
- [ ] Les couvertures de LibLeadIN et LiBrain ont les mêmes valeurs CSS calculées qu'avant.
- [ ] Liste dépliée : 9 cartes à couverture dans la grille, puis 17 lignes sous « Autres projets ».
- [ ] Un clic ou la touche Entrée sur une ligne ouvre la fenêtre du projet.
- [ ] Plus aucune occurrence de `project-card-compact` ni de `compact-project` dans `src/`.
- [ ] `npm run build` passe.

## Vérifications à lancer

- `npm run build`
- `grep -rn "project-card-compact\|compact-project" src/` ne renvoie rien.

## Rapport attendu

~~~
## Lot couvertures-liste — Couvertures claires lisibles et liste compacte des autres projets

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
