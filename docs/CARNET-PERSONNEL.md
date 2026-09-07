# Carnet personnel — PSG et musculation

Le carnet constitue une section autonome après « À propos », juste avant le contact. Un lien dans « À propos » permet aussi d’y accéder directement. Deux chapitres se consultent à la demande : la visite du Parc des Princes et la musculation. Les textes décrivent les scènes des médias fournis et les passions indiquées par Libasse. En bas de chaque chapitre, un lien mène à l’autre passion et un second au parcours professionnel. Aucun résultat sportif, souvenir d’enfance ou lien entre sport et qualités professionnelles n’est inventé.

Le chapitre PSG présente une grande photo des tribunes, deux vues complémentaires et une vidéo dans les vestiaires. La vidéo « Du tunnel à la pelouse » est temporairement retirée du carnet ; son fichier original, sa copie MP4 et son affiche restent dans le dossier pour une remise en ligne ultérieure. Le chapitre musculation présente les deux photos à la salle et un lien vers la fiche existante de LibCalPilot, application de suivi alimentaire pour sportifs.

Les cinq photos s’ouvrent en grand. Le lecteur permet de passer au média précédent ou suivant, utilise le dialogue natif du site et restitue le focus à la fermeture. Les vidéos ne sont montées ni téléchargées à l’affichage de la page ; elles démarrent après une action dans le carnet. La fermeture ou le changement de média retire le lecteur.

## Fichiers

- `src/components/PersonalStories.tsx` : chapitres, sélection des médias et lecteur.
- `src/components/PersonalStories.css` : composition du carnet et adaptations mobile/tablette.
- `src/content/personal.ts` : textes FR/EN, légendes et correspondance des médias.
- `public/photos/optimized/personal` : vignettes, photos pour l’affichage en grand et vidéos MP4.

Les originaux du dossier `public/photos` sont conservés. Les copies JPEG sont correctement orientées, redimensionnées et réencodées sans les métadonnées personnelles des fichiers sources. Les vidéos sont en H.264/AAC, 720 × 1280, avec les métadonnées de lecture en début de fichier. Les deux copies vidéo totalisent environ 7,1 Mo, contre 85,4 Mo pour les originaux. Les durées complètes de 6,8 et 21,1 secondes sont conservées.

## Sources locales

| Original | Usage |
| --- | --- |
| `IMG_0286.jpeg` | Photo principale, tribunes du Parc des Princes |
| `IMG_0241.jpeg` | Photo dans les vestiaires |
| `IMG_0194.jpeg` | Photo devant l’écusson du PSG |
| `IMG_9103.jpeg` | Première photo à la salle |
| `IMG_6877.jpeg` | Seconde photo à la salle |
| `IMG_0239.MOV` | Vidéo dans le vestiaire du PSG |
| `IMG_0260.MOV` | Vidéo du tunnel à la pelouse — temporairement retirée du carnet |

## Validation

Le build TypeScript/Vite, l’inventaire des sept médias préparés (six affichés), la présence des traductions et les formats des deux vidéos sont vérifiés. Les copies web utilisent uniquement les fichiers locaux fournis.

Vérifications dans le navigateur : composition sur ordinateur, mobile et tablette ; version française et anglaise ; thème clair et sombre ; lecture complète des deux vidéos ; arrêt du lecteur et restitution du focus à la fermeture ; navigation entre les photos ; ouverture de LibCalPilot ; passage entre les chapitres. Aucun débordement horizontal constaté sur les tailles vérifiées.
