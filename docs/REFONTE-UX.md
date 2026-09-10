# Portfolio — direction éditoriale, septembre 2026

## Diagnostic

La version précédente présentait un contenu riche, mais la promesse d’accueil était longue, les projets arrivaient après plusieurs sections de CV et 19 cartes denses se succédaient sans distinction. Les photos du dossier public n’étaient pas intégrées. Plusieurs boutons de démonstration et de dépôt pointaient sur `#`. L’entreprise de l’identité était encore e-Santé Sud alors que le parcours indiquait BPCE-SI depuis juillet 2026.

## Direction proposée

Une identité éditoriale ivoire, encre et cuivre, tirée du portrait fourni. La signature « libasse. » et un monogramme LM remplacent les astérisques initiaux ; les pictogrammes du chat et des agents utilisent des bulles et des connexions. Instrument Serif apporte la personnalité aux titres ; DM Sans organise la lecture. Les filets fins, les espacements et les compositions de photos remplacent les effets de verre et les aplats génériques.

Le parcours de lecture devient : nom, activité actuelle et portrait → références professionnelles → expériences et formation → compétences → sélection de produits → présentation personnelle → carnet PSG et musculation → contact.

Le métier « Data Scientist & Ingénieur IA » est renforcé dès l’accueil. L’introduction se lit en deux paragraphes : plateforme data et rapports Power BI, puis IA, contexte international et projets personnels. Les boutons « Voir mes projets » et « Télécharger mon CV » restent accessibles dans le premier écran. Le menu et la numérotation suivent cet ordre. Le lien de défilement en bas de l’accueil mène au parcours. Le carnet personnel forme une section autonome après « À propos », avant le contact.

Quatre projets sont mis en avant (LibOrga, LiBrain, LibCalPilot et LibLeadIN). Le catalogue complet reste accessible par filtres et par expansion. Chaque fiche décrit le fonctionnement du projet et le travail réalisé, avec ses technologies et uniquement les liens renseignés. Les visuels sont des interprétations réalisées en HTML/CSS/SVG, et non des captures des applications ni des mesures de leurs performances.

La galerie présente trois facettes du parcours. Les quatre photos utilisées disposent de copies adaptées au web dans `public/photos/optimized`. Les originaux restent disponibles dans `assets-sources/photos`, hors du dossier servi. Le portrait d’accueil provient du fichier fourni `ChatGPT Image 30 avr. 2026, 11_25_57.png` ; il pourra être remplacé par un portrait photographique choisi ensemble.

## Révision des textes — 6 septembre 2026

Les textes français et anglais ont été repris à partir des informations du portfolio. L’accueil présente le nom et le poste actuel. Les titres annoncent simplement le contenu des sections. Les expériences et les 19 projets décrivent les tâches réalisées, les applications et leurs outils, sans slogans ni résultats chiffrés ajoutés.

Les descriptions longues sont réparties en paragraphes. Les légendes des photos et des illustrations sont descriptives. Le repère « curiosité infinie » est remplacé par l’année d’obtention du master. La présentation de LibasseAI reste explicite sur sa nature d’assistant IA. Les métadonnées de partage reprennent ce même ton.

Les dates, formations, coordonnées, technologies et liens existants sont conservés. La taille des textes de parcours et de compétences a été augmentée pour faciliter la lecture.

À la demande de Libasse, la présentation de BPCE-SI précise aussi le travail sur GCP et dbt, l’IA appliquée et la dimension métier internationale. Ces sujets figurent dans l’accueil, les missions et les compétences, dans les deux langues. Le badge du portrait porte à nouveau « Data, IA & Humain ».

## Comportements

- Français et anglais, avec CV dans la langue choisie.
- Thèmes clair et sombre persistants ; la nouvelle direction s’ouvre en clair par défaut.
- Menu mobile, navigation par sections et progression de lecture.
- Filtres de projets, catalogue complet, fiches en dialogue natif, fermeture et restitution du focus.
- Expériences et travaux de recherche dépliables. Formation toujours visible, master mis en avant et lien d’accès direct depuis l’introduction du parcours.
- Galerie de photos contrôlée par le visiteur, sans défilement automatique.
- Carnet personnel PSG/musculation : cinq nouvelles photos, une vidéo au clic et accès à LibCalPilot. Détails dans `docs/CARNET-PERSONNEL.md`.
- Contact par email, copie d’adresse, réseaux et formulaire avec validation, état d’envoi, réussite, erreur et solution de repli.
- Interface LibasseAI intégrée à la nouvelle identité. Aucun chargement de widget ni appel au webhook au simple affichage du site. Les requêtes n8n sont déclenchées à l’envoi, avec les variables d’environnement existantes.
- Respect de la préférence de réduction des animations, liens de contournement, libellés et dialogues accessibles au clavier.

Les références professionnelles utilisent les fichiers officiels de BPCE, Innovation e-Santé Sud, Orange et Enedis, conservés en couleur sur un fond clair. Les sources sont documentées dans `public/logos/SOURCES.md`.

## Organisation

- `src/App.tsx` : composition de la page et interactions.
- `src/components/EditorialUI.tsx` : primitives graphiques, dialogues et visuels de projets.
- `src/content/editorial.ts` : nouveaux textes FR/EN, catégories et sélection de projets.
- `src/content/fr.ts` et `src/content/en.ts` : catalogue complet, parcours et coordonnées existants.
- `src/index.css` : direction artistique, thèmes et adaptations aux écrans.

Les anciens composants restent dans le dépôt mais ne sont plus importés par la nouvelle page. Aucun paquet n’a été ajouté au projet.

## Validation

Compilation TypeScript et build Vite. Vérifications dans le navigateur des versions ordinateur, tablette et mobile, des deux langues, des thèmes, des filtres, des fiches, de la galerie et des liens CV. Vérification de l’absence de liens `#` sans destination.

Le formulaire et le chat ont été testés contre un serveur HTTP local simulant n8n : validation des champs, structure des requêtes, réponses réussies et erreurs HTTP. Aucune soumission n’a été envoyée aux services de production pendant ces essais. Leur disponibilité réelle reste donc à vérifier avant publication.

## Présentation des prestations et de l’enseignement

« À propos » présente les applications et agents IA, les sites et applications web, et l’ingénierie data en entreprise. Le parcours professionnel apporte le contexte de ces compétences sans présenter les employeurs comme des clients. Un bloc distinct décrit l’enseignement en mathématiques, statistiques et programmation (notamment Python et SQL), pour les professionnels, les organismes de formation, les élèves et les étudiants. Le nom de la plateforme IT reste privé à la demande de Libasse ; aucun nom ni lien n’est ajouté. Deux liens vers le contact permettent de parler d’un projet ou d’une formation. Les contenus existent en français et en anglais.

## Pour la prochaine itération

Révision du 10 septembre : descriptions des compétences enrichies à partir des missions existantes (cadrage métier, modélisation, qualité, exploitation et intégration IA). La galerie « À propos » s’ouvre sur « 01 — Au quotidien », puis « 02 — Au bureau » et « 03 — Remise de diplôme », dans les deux langues. La vidéo des vestiaires utilise une copie sans piste audio.

Choisir ensemble le portrait définitif, ajouter de vraies captures des quatre applications et enrichir les études de cas avec contexte, décisions et résultats vérifiables. Ces éléments permettront de rendre la présentation plus personnelle et d’étayer les réalisations, sans inventer de chiffres.
