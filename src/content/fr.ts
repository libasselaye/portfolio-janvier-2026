import type { Content } from "./types";

export const contentFr: Content = {
  lang: "fr",
  seo: {
    title: "Mame Libasse Mboup | Data Scientist & ML Engineer",
    description:
      "Mame Libasse Mboup, data scientist chez BPCE-SI à Aix-en-Provence. Parcours, projets et compétences en analyse de données, développement web et IA.",
  },
  nav: [
    {
      id: "hero",
      label: "Accueil",
    },
    {
      id: "about",
      label: "À propos",
    },
    {
      id: "experience",
      label: "Expériences",
    },
    {
      id: "curriculum",
      label: "Formation",
    },
    {
      id: "expertise",
      label: "Expertise",
    },
    {
      id: "projects",
      label: "Projets",
    },
    {
      id: "contact",
      label: "Contact",
    },
    {
      id: "assistant",
      label: "LibasseAI",
    },
  ],
  identity: {
    name: "Mame Libasse Mboup",
    role: "Ingénieur data & IA appliquée",
    company: "BPCE-SI (Groupe BPCE)",
    location: "Région PACA, France",
    email: "libasselaye01@gmail.com",
    phone: "+33 6 51 98 36 14",
  },
  hero: {
    headline:
      "Chez BPCE-SI, à Aix-en-Provence, je travaille sur la plateforme data du Groupe avec GCP, BigQuery et dbt, et je conçois des rapports Power BI.\n\nJe participe aussi à des projets d’IA appliquée aux métiers bancaires dans un contexte international. En parallèle, je développe mes propres applications web et assistants IA.",
    subheadline: "",
    ctaProjects: "Voir mes projets",
    ctaCv: "Consulter mon CV",
    assistantCta: "Essayez LibasseAI",
    scrollHint: "Voir mon parcours",
    cvUrl: "CV_Mame_Libasse_Mboup.pdf",
    status: "Ouvert aux collaborations",
    ticker: [
      "DISPONIBLE POUR COLLABORATIONS",
      "INGÉNIEUR DATA & IA",
      "RÉGION PACA · FRANCE",
    ],
  },
  about: {
    title: "À propos de moi",
    subtitle:
      "J’ai commencé mes études en mathématiques et informatique à Thiès, avant de les poursuivre en France. J’ai obtenu mon master en machine learning à Lyon II en 2022.",
    paragraphs: [
      "J’ai commencé mes études en mathématiques et informatique à Thiès, avant de les poursuivre en France. J’ai obtenu mon master en machine learning à Lyon II en 2022.",
      "Depuis 2021, je travaille dans la data. J’ai développé des outils de suivi pour l’énergie, les télécoms et la santé publique, avant de rejoindre le secteur bancaire. Mes projets personnels me permettent aussi de travailler sur les interfaces web et les agents IA.",
      "Je m’intéresse aussi aux statistiques appliquées au sport. En dehors du travail, je suis supporter du Paris Saint-Germain et je pratique la musculation.",
    ],
    highlights: [
      "Analyse statistique",
      "Traitement des données",
      "Développement web",
      "Automatisation avec des agents IA",
    ],
  },
  curriculum: {
    title: "Formation",
    subtitle: "Mes études en mathématiques, informatique et machine learning.",
    items: [
      {
        title: "Master 2 Machine Learning for Artificial Intelligence",
        org: "Université Lumière Lyon II, France",
        period: "2021–2022",
      },
      {
        title: "Master 1 Informatique et Statistique",
        org: "Université Lumière Lyon II, France",
        period: "2020–2021",
      },
      {
        title: "Licence Informatique",
        org: "Université du Littoral Côte d'Opale, France",
        period: "2018–2020",
      },
      {
        title: "Licence Mathématiques et Informatique",
        org: "Université de Thiès, Sénégal",
        period: "2015–2018",
      },
    ],
  },
  experience: {
    title: "Expériences professionnelles",
    subtitle:
      "J’ai commencé chez Enedis en 2021, puis travaillé chez Orange et Innovation e-Santé Sud. J’ai rejoint BPCE-SI en juillet 2026.",
    items: [
      {
        role: "Data Scientist – Squad Data Lab & Nouveaux Usages",
        company: "BPCE-SI (Groupe BPCE)",
        period: "Juil. 2026 – Présent",
        location: "Aix-en-Provence, France",
        highlights: [
          "Mon travail concerne les métiers bancaires du Groupe, dans un contexte international. J’échange avec les équipes métier pour comprendre leurs besoins et les traduire en évolutions des outils data et IA.",
          "Je développe des pipelines sur GCP avec BigQuery, Cloud Composer et Cloud Storage pour la Cloud Data Platform du Groupe, de l’intégration des données à leur mise à disposition pour l’analyse.",
          "Avec dbt, je modélise les données depuis les premières transformations jusqu’aux tables d’analyse. Je mets en place les tests de qualité, la documentation et le suivi des dépendances entre modèles.",
          "Au Data Lab, j’intègre des modèles de langage aux données du Groupe pour des assistants d’analyse et des traitements documentaires, en tenant compte de la confidentialité et des contraintes bancaires.",
          "Je crée aussi des rapports Power BI à partir de BigQuery : modèles de données, calculs DAX et sécurité des accès pour que chaque équipe retrouve les indicateurs qui la concernent.",
          "Dans l’équipe Performance & Run, je prends en charge les incidents et les évolutions des systèmes data existants. Le travail porte aussi sur leur stabilité au quotidien et le suivi avec les équipes métier.",
          "J’utilise des agents IA pour le développement et la compréhension des applications existantes. Je documente le contexte des dépôts de code pour encadrer leur utilisation dans un environnement bancaire régulé.",
        ],
      },
      {
        role: "Data Scientist – Santé Publique",
        company: "Innovation e-Santé Sud (GRADeS PACA)",
        period: "Oct. 2022 – Juil. 2026",
        location: "Hyères, France",
        highlights: [
          "J’ai développé une cartographie des lits hospitaliers disponibles pour l’ARS PACA. Alimentée automatiquement, elle sert au suivi des capacités en période de tension ou de crise.",
          "Avec CONTESS, j’ai réuni dans un tableau de bord le suivi du Ségur numérique dans six secteurs. Les traitements SAS Viya croisent les usages du DMP, de la messagerie sécurisée, de l’identité nationale de santé et de Pro Santé Connect.",
          "J’ai créé des tableaux de bord régionaux sur les urgences, le SAMU/SMUR et les parcours de soins, notamment pour OKAPI, l’ETP, le ROR et E-parcours.",
          "Pour le projet TRU, j’ai étudié les facteurs associés au recours évitable aux urgences à l’échelle des communes : démographie, accès aux soins et situation socio-économique. Ces analyses aident à orienter l’offre de soins non programmés.",
          "J’ai migré des rapports de Jaspersoft vers SAS Viya et automatisé des traitements en Python et SQL. J’administrais également les accès, les espaces de données et les flux de la plateforme régionale.",
          "Avec Gemini et n8n, j’ai automatisé l’extraction d’informations depuis des documents médicaux en PDF ou en image vers des tableaux structurés.",
          "J’ai développé un contrôle des adresses de professionnels de santé en croisant Google Maps et PagesJaunes pour repérer et corriger les incohérences.",
          "J’ai aussi mis en place le classement et l’affectation de tickets Redmine à partir de leur contenu, avec un modèle de langage.",
        ],
      },
      {
        role: "Data Scientist",
        company: "Orange",
        period: "Sept. 2021 – Sept. 2022",
        location: "Lyon, France",
        highlights: [
          "J’ai analysé le parcours de raccordement à la fibre, de la commande à l’installation, pour suivre les délais et repérer les étapes qui bloquent.",
          "J’ai automatisé des tâches avec UiPath et créé des tableaux de bord dans Kibana et Power BI pour les équipes opérationnelles.",
          "J’ai travaillé sur des modèles statistiques appliqués aux données de supervision du réseau.",
        ],
      },
      {
        role: "Data Engineer",
        company: "Enedis",
        period: "Avr. 2021 – Sept. 2021",
        location: "Toulon, France",
        highlights: [
          "J’ai développé une application de suivi de la consommation énergétique régionale avec CodeIgniter, PHP et MySQL.",
          "J’ai intégré plusieurs sources de données avec Denodo et préparé des rapports d’analyse pour la direction régionale.",
        ],
      },
    ],
  },
  expertise: {
    title: "Compétences",
    subtitle:
      "Mon travail couvre la data science, l’ingénierie sur GCP et dbt, la BI et l’IA appliquée. Chez BPCE-SI, ces sujets s’inscrivent dans un contexte bancaire international, avec des besoins métier et des exigences de fiabilité et de confidentialité.",
    categories: [
      {
        title: "Data Science & ML",
        items: [
          "Python",
          "SQL",
          "Statistiques",
          "Supervision",
          "Clustering",
          "NLP",
        ],
      },
      {
        title: "Data Engineering",
        items: [
          "ETL",
          "Pipelines",
          "Qualité des données",
          "PostgreSQL",
          "MongoDB",
          "GCP",
          "BigQuery",
          "Cloud Composer",
          "dbt",
        ],
      },
      {
        title: "BI & Visualisation",
        items: [
          "Power BI",
          "Data storytelling",
          "Dashboards décisionnels",
          "DAX",
          "RLS",
        ],
      },
      {
        title: "IA & automatisation",
        items: [
          "Docker",
          "n8n",
          "CI/CD",
          "Automatisation ML Ops",
          "LLM",
          "IA Générative",
          "Agents IA",
        ],
      },
    ],
  },
  projects: {
    title: "Projets",
    subtitle:
      "Des applications personnelles, des automatisations et des travaux d’analyse. Chaque fiche présente le fonctionnement du projet et les outils utilisés.",
    items: [
      {
        title: "LibOrga — Organisation des tâches",
        description:
          "J’ai développé LibOrga pour organiser les tâches selon leur urgence et leur importance, avec la matrice d’Eisenhower. On peut noter une tâche, la déplacer d’un quadrant à l’autre et retrouver sa journée dans une vue dédiée. Un calendrier, un minuteur de concentration et un bilan hebdomadaire complètent l’application.\n\nLa saisie reconnaît une date ou une priorité dans une phrase. On peut aussi scanner une liste papier pour la convertir en tâches. L’application repose sur Next.js et Supabase, et s’installe sur mobile comme une PWA.",
        tags: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Supabase",
          "PostgreSQL",
          "RLS",
          "tesseract.js",
          "PWA",
          "Vercel",
        ],
        repo: "https://github.com/libasselaye/LibOrga",
        demo: "https://liborga.vercel.app",
      },
      {
        title: "LibCalPilot — Suivi alimentaire",
        description:
          "LibCalPilot permet de noter ses repas et de suivre ses calories, ses macronutriments et son poids. On peut chercher un aliment dans les bases CIQUAL et Open Food Facts, scanner son code-barres ou utiliser une photo pour obtenir une estimation des aliments et des quantités.\n\nJ’ai développé le suivi quotidien, les recettes réutilisables et les statistiques hebdomadaires avec React et Supabase. Gemini Vision intervient pour l’analyse des photos. Les besoins caloriques sont calculés à partir du profil et actualisés à chaque pesée.",
        tags: [
          "React 19",
          "Vite",
          "TypeScript",
          "Tailwind CSS",
          "TanStack Query",
          "Supabase",
          "Gemini Vision",
          "PWA",
          "Vitest",
          "Edge Functions",
        ],
        repo: "https://github.com/libasselaye/LibCalPilot",
        demo: "https://lib-cal-pilot.vercel.app",
      },
      {
        title: "LibLeadIN — Prospection B2B",
        description:
          "LibLeadIN rassemble la recherche de prospects, leurs coordonnées et le suivi des prises de contact. L’application prépare des messages personnalisés à partir des informations recueillies et permet de les prévisualiser avant l’envoi.\n\nJ’ai relié l’interface Next.js à quatre workflows n8n pour la recherche, la préparation des emails, l’envoi et la lecture des contacts. Les données sont enregistrées dans Google Sheets et un tableau de bord affiche les statuts et l’activité récente.",
        tags: [
          "Next.js",
          "n8n",
          "OpenAI",
          "DeepSeek",
          "Apify",
          "Hunter",
          "Gmail OAuth2",
          "Google Sheets",
          "JWT",
          "Tailwind CSS",
        ],
        repo: "https://github.com/libasselaye/libleadin",
        demo: "https://libleadin.duckdns.org",
      },
      {
        title: "LibJobPilot — Recherche d’emploi",
        description:
          "J’ai développé LibJobPilot autour de la recherche de postes en data et en IA. Il rassemble des offres de LinkedIn, Indeed et Glassdoor, puis les compare au profil du candidat. Un tableau Kanban permet de suivre les candidatures et les relances.\n\nCinq workflows n8n prennent en charge la collecte des offres, leur évaluation et le suivi. Playwright sert à automatiser des étapes de candidature sur Indeed et Glassdoor. L’interface est en React et les données sont stockées dans Supabase.",
        tags: [
          "React 19",
          "Vite 6",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Zustand",
          "n8n",
          "Supabase",
          "LiteLLM",
          "Groq",
          "Playwright",
          "Browserless",
          "Docker",
          "Traefik",
        ],
        repo: "#",
        demo: "#",
      },
      {
        title: "LiBrain — Assistant IA personnel",
        description:
          "LiBrain est un assistant avec lequel on peut gérer ses emails, son agenda, ses contacts et ses finances en écrivant une demande. J’ai connecté quatre agents spécialisés à Gmail, Google Calendar et Airtable, avec n8n pour répartir les tâches.\n\nL’interface est développée en React. LiteLLM centralise les appels aux modèles, suit leur coût et permet de basculer vers un autre fournisseur lorsqu’un service est indisponible. L’ensemble est déployé avec Docker et Traefik.",
        tags: [
          "React 19",
          "Vite 7",
          "TypeScript",
          "React Router",
          "Tailwind CSS v4",
          "Supabase Auth",
          "n8n",
          "LiteLLM",
          "Docker Compose",
          "Traefik",
          "Groq",
          "DeepSeek",
        ],
        repo: "https://github.com/libasselaye/librain",
        demo: "http://72.62.186.157:8084/",
      },
      {
        title: "Portfolio — Site web et assistant IA",
        description:
          "Ce site présente mon parcours et mes projets en français et en anglais. Je l’ai développé avec React, Vite et Tailwind. Le formulaire de contact et l’assistant IA sont reliés à des workflows n8n.\n\nJ’ai également configuré l’envoi des messages par email, le déploiement sur un VPS avec Docker et Nginx, ainsi que les mises à jour depuis GitHub.",
        tags: ["React", "Vite", "Tailwind", "n8n", "Docker", "Nginx", "CI/CD"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Extraction de données avec n8n et DeepSeek",
        description:
          "J’ai créé des workflows qui lisent des PDF et des emails, en extraient les informations demandées et les enregistrent dans Google Sheets. DeepSeek traite le contenu ; n8n enchaîne les étapes et envoie les notifications. J’ai aussi prévu la gestion des erreurs pour repérer les traitements qui échouent.",
        tags: ["n8n", "DeepSeek", "Agentic AI", "PDF", "Google Sheets"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Import de données de santé vers MariaDB",
        description:
          "Ce script Python importe les archives CSV de ViaTrajectoire / TND dans MariaDB. Il adapte les fichiers au modèle de la base, nettoie les valeurs et traite les doublons et les incohérences avant l’import. Je l’ai préparé pour une exécution sur un serveur Linux.",
        tags: ["Python", "MariaDB", "CSV", "ETL", "Linux"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Génération de vidéos publicitaires",
        description:
          "J’ai relié fal.ai à n8n pour générer des vidéos et l’API OpenAI pour préparer leurs titres. Le workflow attend la fin de chaque génération, dépose la vidéo dans Google Drive et inscrit le résultat dans Google Sheets. Il permet de suivre les traitements sans vérifier chaque appel API manuellement.",
        tags: [
          "fal.ai",
          "ChatGPT",
          "OpenAI API",
          "n8n",
          "Google Drive",
          "Google Sheets",
        ],
        repo: "#",
        demo: "#",
      },
      {
        title: "Création de visuels pour des produits e-commerce",
        description:
          "Ce workflow part des informations d’un produit dans Google Sheets pour générer un visuel avec Gemini Imagen. n8n transmet les données, attend le résultat, puis enregistre l’image dans Google Drive et son lien dans le tableau. J’ai développé l’enchaînement des appels et le suivi des générations.",
        tags: [
          "Google AI Studio",
          "Gemini Imagen",
          "n8n",
          "Google Sheets",
          "Google Drive",
          "E-commerce",
        ],
        repo: "#",
        demo: "#",
      },
      {
        title: "Génération et retouche d’images avec n8n",
        description:
          "J’ai créé un formulaire pour envoyer une image et une consigne de retouche à un modèle de Google AI Studio. Le workflow n8n prépare les fichiers, appelle l’API et renvoie les images produites. Il prend aussi en charge plusieurs images dans une même demande.",
        tags: [
          "n8n",
          "Google AI Studio",
          "Nano Banana Pro",
          "API REST",
          "Base64",
          "Image IA",
        ],
        repo: "#",
        demo: "#",
      },
      {
        title: "Aide-moi — Application d’assistance",
        description:
          "Dans Aide-moi, l’utilisateur décrit un problème et reçoit une réponse de DeepSeek. J’ai développé l’interface en React et TypeScript, puis relié le formulaire à un workflow n8n.\n\nLe projet m’a notamment fait travailler sur les échanges entre le navigateur et le serveur : webhooks, réponses HTTP, configuration CORS et accès au service local avec Cloudflare Tunnel.",
        tags: ["React", "TypeScript", "n8n", "Cloudflare Tunnel", "DeepSeek"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Assistant IA sur Telegram",
        description:
          "J’ai développé un assistant Telegram qui peut consulter les données d’un ERP et déclencher des actions via des API Google. Les messages passent par n8n ; le modèle Grok interprète la demande et le workflow appelle les outils correspondants avant de répondre dans Telegram.",
        tags: ["Telegram", "n8n", "Grok API", "Webhooks", "Automatisation"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Arbres de décision et forêts aléatoires",
        description:
          "Dans ce projet d’apprentissage supervisé, j’ai implémenté des arbres de décision et des forêts aléatoires en Python. J’ai ensuite comparé leurs résultats avec des métriques de validation pour étudier les différences entre les modèles.",
        tags: ["Python", "ML", "Decision Trees", "Random Forests"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Communautés de chercheurs dans DBLP",
        description:
          "J’ai analysé un graphe de relations entre chercheurs à partir de DBLP pour identifier des communautés. Des visualisations en Python permettent d’examiner les groupes obtenus et les liens qui les relient.",
        tags: ["Graphes", "Visualisation", "Python"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Analyse et regroupement de données automobiles",
        description:
          "J’ai utilisé l’analyse en composantes principales et le clustering pour étudier un jeu de données automobiles. Le travail consiste à réduire le nombre de dimensions, puis à identifier des groupes de véhicules aux caractéristiques proches.",
        tags: ["ACP", "Clustering", "Analyse multivariée"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Analyse du World Happiness Report avec SAS",
        description:
          "J’ai exploré les données du World Happiness Report avec SAS. Le projet comprend des analyses statistiques et un rapport qui présente les résultats dans leur contexte.",
        tags: ["SAS", "Statistiques", "BI"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Analyse exploratoire avec Python",
        description:
          "Ce projet porte sur l’exploration de jeux de données à plusieurs variables avec Python et Pandas. J’y examine les distributions et les relations entre variables, puis je prépare une synthèse des résultats.",
        tags: ["EDA", "Python", "Pandas"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Projet de licence — Application de quiz",
        description:
          "Pour mon projet de fin de licence, j’ai développé une application de quiz avec une base de questions, un calcul des scores et un affichage des résultats. Le projet associe l’interface utilisateur à la gestion des données.",
        tags: ["Fullstack", "UX", "Data"],
        repo: "#",
        demo: "#",
      },
    ],
  },
  research: {
    title: "Recherche",
    subtitle:
      "Mes travaux sur la classification de documents et les données spatio-temporelles.",
    items: [
      {
        title:
          "Catégorisation d’articles scientifiques par relations sémantiques",
        description:
          "J’ai étudié comment les relations sémantiques entre articles scientifiques peuvent servir à les regrouper par thème et à organiser un corpus.",
        paper: "#",
        repo: "#",
      },
      {
        title: "Co-clustering de données spatio-temporelles",
        description:
          "J’ai étudié le co-clustering pour regrouper des données en tenant compte à la fois de leur dimension spatiale et de leur évolution dans le temps.",
        paper: "#",
        repo: "#",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "Pour me parler d’un poste, d’un projet ou me poser une question sur mon travail, vous pouvez m’écrire par email ou sur LinkedIn.",
    cards: [
      {
        label: "Email",
        value: "libasselaye01@gmail.com",
        href: "mailto:libasselaye01@gmail.com",
      },
      {
        label: "Téléphone",
        value: "+33 6 51 98 36 14",
        href: "tel:+33651983614",
      },
      {
        label: "Localisation",
        value: "Région PACA, France",
      },
    ],
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mame-libasse-mboup-3a26871a0/",
      },
      {
        label: "GitHub",
        href: "https://github.com/libasselaye",
      },
    ],
  },
  write: {
    title: "Écrivez-moi",
    subtitle: "Présentez-moi votre demande en quelques lignes.",
    fields: {
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
    },
    subject: "Contact via portfolio",
    submit: "Envoyer le message",
    helper: "Vous pouvez aussi m’écrire directement par email.",
  },
  footer: {
    text: "© 2026 Mame Libasse Mboup. Tous droits réservés.",
    marquee: "Me contacter",
  },
  ui: {
    themeToggle: "Changer le thème",
    themeOptions: {
      light: "Clair",
      dark: "Sombre",
    },
    menuToggle: "Afficher le menu",
    heroProfile: {
      kicker: "Profil",
      title: "Ingénierie data appliquée",
      labels: {
        company: "Entreprise",
        location: "Localisation",
        email: "Email",
        phone: "Téléphone",
      },
      tags: [
        "Data Science",
        "Machine Learning",
        "Data Engineering",
        "AI Automation",
        "Agentic AI",
      ],
    },
    sectionKickers: {
      profile: "Profil",
      experience: "Expériences",
      timeline: "Parcours",
      skills: "Compétences",
      work: "Travaux",
      papers: "Publications",
      details: "Coordonnées",
      message: "Message",
    },
    strengthsTitle: "Domaines de travail",
    writeCardTitle: "M’écrire",
    buttons: {
      repo: "Repo",
      demo: "Démo",
      paper: "Paper",
    },
  },
};
