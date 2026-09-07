export type PersonalChapter = "psg" | "training";
type LocalizedText = { fr: string; en: string };
export type PersonalMedia = {
  id: string;
  chapter: PersonalChapter;
  type: "photo" | "video";
  file: string;
  preview: string;
  label: LocalizedText;
  description: LocalizedText;
  position?: string;
  duration?: string;
};

export const personalMedia: PersonalMedia[] = [
  {
    id: "tribunes",
    chapter: "psg",
    type: "photo",
    file: "parc-tribunes.jpg",
    preview: "parc-tribunes-small.jpg",
    label: { fr: "Dans les tribunes", en: "In the stands" },
    description: {
      fr: "Mame Libasse Mboup dans les tribunes du Parc des Princes, en maillot du Paris Saint-Germain, face à la pelouse.",
      en: "Mame Libasse Mboup in the stands at the Parc des Princes, wearing a Paris Saint-Germain shirt and looking towards the pitch.",
    },
    position: "62% 52%",
  },
  {
    id: "vestiaire",
    chapter: "psg",
    type: "photo",
    file: "parc-vestiaire.jpg",
    preview: "parc-vestiaire-small.jpg",
    label: { fr: "Côté vestiaires", en: "The dressing room" },
    description: {
      fr: "Mame Libasse Mboup assis dans le vestiaire du PSG, devant les maillots des joueurs.",
      en: "Mame Libasse Mboup seated in the PSG dressing room, in front of the players’ shirts.",
    },
    position: "50% 64%",
  },
  {
    id: "embleme",
    chapter: "psg",
    type: "photo",
    file: "parc-embleme.jpg",
    preview: "parc-embleme-small.jpg",
    label: { fr: "Les couleurs du club", en: "The club colours" },
    description: {
      fr: "Mame Libasse Mboup en maillot du PSG, à côté du grand écusson du club pendant sa visite.",
      en: "Mame Libasse Mboup wearing a PSG shirt beside the large club crest during his visit.",
    },
    position: "50% 58%",
  },
  {
    id: "video-vestiaire",
    chapter: "psg",
    type: "video",
    file: "parc-video-1.mp4",
    preview: "parc-vestiaire-poster.jpg",
    duration: "0:07",
    label: {
      fr: "Dans le vestiaire du PSG",
      en: "Inside the PSG dressing room",
    },
    description: {
      fr: "Pendant la visite, je traverse le vestiaire et m’arrête devant les maillots des joueurs.",
      en: "During the visit, I walk through the dressing room and stop in front of the players’ shirts.",
    },
  },
  {
    id: "musculation",
    chapter: "training",
    type: "photo",
    file: "musculation.jpg",
    preview: "musculation-small.jpg",
    label: { fr: "À la salle", en: "At the gym" },
    description: {
      fr: "Mame Libasse Mboup à la salle de musculation, devant le miroir et les haltères.",
      en: "Mame Libasse Mboup at the gym, in front of the mirror and dumbbells.",
    },
    position: "50% 52%",
  },
  {
    id: "entrainement",
    chapter: "training",
    type: "photo",
    file: "entrainement.jpg",
    preview: "entrainement-small.jpg",
    label: { fr: "Une autre séance", en: "Another session" },
    description: {
      fr: "Mame Libasse Mboup à la salle de musculation, près des appareils d’entraînement.",
      en: "Mame Libasse Mboup at the gym, beside the training equipment.",
    },
    position: "50% 48%",
  },
];

export const personalCopy = {
  fr: {
    kicker: "QUELQUES IMAGES PERSONNELLES",
    title: "En dehors",
    italic: "du travail.",
    intro:
      "Le PSG et la musculation font aussi partie de ma vie. Voici quelques moments que j’avais envie de partager.",
    chapterLabel: "Choisir un chapitre",
    otherChapter: "Voir aussi",
    professionalExperience: "Mon parcours professionnel",
    chapters: {
      psg: {
        label: "Paris Saint-Germain",
        place: "PARIS · PARC DES PRINCES",
        title: "Une visite au Parc.",
        text: "Je suis supporter du Paris Saint-Germain. Lors de cette visite au Parc, j’ai pu découvrir les vestiaires, emprunter le tunnel des joueurs et retrouver le stade depuis les tribunes.",
        note: "3 photos & 1 vidéo de la visite",
      },
      training: {
        label: "Musculation",
        place: "À LA SALLE",
        title: "La musculation, aussi.",
        text: "La musculation fait partie de mon quotidien. Cette passion croise aussi l’un de mes projets : LibCalPilot, une application de suivi alimentaire pour sportifs que j’ai développée.",
        note: "2 photos personnelles à l’entraînement",
      },
    },
    nutritionProject: {
      label: "UN PROJET À DÉCOUVRIR",
      description: "Suivi des repas, des apports nutritionnels et du poids.",
      open: "Découvrir le projet LibCalPilot",
    },
    videos: "La visite en vidéo",
    watch: "Regarder",
    enlarge: "Agrandir",
    close: "Fermer",
    previous: "Média précédent",
    next: "Média suivant",
    photo: "Photo",
    video: "Vidéo",
    error: "La vidéo ne peut pas être lue dans ce navigateur.",
    openVideo: "Ouvrir la vidéo",
  },
  en: {
    kicker: "A FEW PERSONAL PHOTOS",
    title: "Outside",
    italic: "work.",
    intro:
      "PSG and weight training are part of my life too. Here are a few moments I wanted to share.",
    chapterLabel: "Choose a chapter",
    otherChapter: "Also see",
    professionalExperience: "My work experience",
    chapters: {
      psg: {
        label: "Paris Saint-Germain",
        place: "PARIS · PARC DES PRINCES",
        title: "A visit to the Parc.",
        text: "I’m a Paris Saint-Germain supporter. On this visit to the Parc, I got to see the dressing room, walk through the players’ tunnel and look out over the stadium from the stands.",
        note: "3 photos & 1 video from the visit",
      },
      training: {
        label: "Weight training",
        place: "AT THE GYM",
        title: "Time at the gym.",
        text: "Weight training is part of my daily life. This interest also connects with one of my projects: LibCalPilot, a food-tracking application I built for people who train.",
        note: "2 personal training photos",
      },
    },
    nutritionProject: {
      label: "A RELATED PROJECT",
      description: "Tracking meals, nutritional intake and weight.",
      open: "Explore the LibCalPilot project",
    },
    videos: "Watch the visit",
    watch: "Watch",
    enlarge: "Enlarge",
    close: "Close",
    previous: "Previous photo or video",
    next: "Next photo or video",
    photo: "Photo",
    video: "Video",
    error: "This video cannot be played in your browser.",
    openVideo: "Open video",
  },
};
