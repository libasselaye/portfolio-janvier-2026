import type { Content } from './types';

export const contentFr: Content = {
  lang: 'fr',
  seo: {
    title: 'Mame Libasse Mboup | Data Scientist & ML Engineer',
    description:
      "Portfolio de Mame Libasse Mboup, Data Scientist et Machine Learning Engineer spécialisé en IA appliquée, data engineering et visualisation."
  },
  nav: [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expériences' },
    { id: 'curriculum', label: 'Formation' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ],
  identity: {
    name: 'Mame Libasse Mboup',
    role: 'Ingénieur data & IA appliquée',
    company: 'Innovation e-Santé Sud',
    location: 'Toulon, France',
    email: 'libasselaye01@gmail.com',
    phone: '+33 6 51 98 36 14'
  },
  hero: {
    headline: 'J’accompagne les organisations dans la transformation de la donnée brute en décisions intelligentes, fiables et mesurables, via la conception et le déploiement de solutions data et IA à fort impact métier.',
    subheadline: '',
    ctaProjects: 'Découvrir mes projets',
    ctaCv: 'En savoir plus avec mon CV',
    scrollHint: 'Explorer mon parcours',
    cvUrl: 'CV_Mame_Libasse_Mboup.pdf',
    status: 'Disponible pour collaborations en data & IA appliquée'
  },
  about: {
    title: 'À propos de moi',
    subtitle: "Une culture data complète, entre recherche, ingénierie et impact terrain.",
    paragraphs: [
      "Passionné par les mathématiques et la data, je combine modélisation statistique, Machine Learning et ingénierie pour faire émerger des solutions robustes et exploitables.",
      "Je travaille sur des algorithmes, des pipelines ETL, la visualisation et le data storytelling afin de créer des produits data clairs, actionnables et alignés aux enjeux métier.",
      "J'aime partager mes connaissances, notamment autour des statistiques appliquées et de l'analyse sportive. Le football et le fitness nourrissent mon esprit de compétition et ma discipline."
    ],
    highlights: [
      'Rigueur scientifique et esprit d’optimisation',
      'Data storytelling orienté impact',
      'Ouverture d’esprit et apprentissage continu',
      'Culture sport & performance'
    ]
  },
  curriculum: {
    title: 'Formation',
    subtitle: 'Un parcours solide en mathématiques, informatique et IA.',
    items: [
      {
        title: 'Master 2 Machine Learning for Artificial Intelligence',
        org: 'Université Lumière Lyon II, France',
        period: '2021–2022'
      },
      {
        title: 'Master 1 Informatique et Statistique',
        org: 'Université Lumière Lyon II, France',
        period: '2020–2021'
      },
      {
        title: 'Licence Informatique',
        org: "Université du Littoral Côte d'Opale, France",
        period: '2018–2020'
      },
      {
        title: 'Licence Mathématiques et Informatique',
        org: 'Université de Thiès, Sénégal',
        period: '2015–2018'
      }
    ]
  },
  experience: {
    title: 'Expériences professionnelles',
    subtitle: 'Contributions data et IA au service de la santé, des télécoms et de l’énergie.',
    items: [
      {
        role: 'Data Scientist',
        company: 'Innovation e-Santé Sud',
        period: 'Oct. 2022 – Actuellement',
        location: 'Hyères, France',
        highlights: [
          'Analyse et modélisation de données de santé pour appuyer le pilotage régional (Ségur, ROR, e-parcours) et améliorer la coordination des soins.',
          'Développement de tableaux de bord stratégiques (CONTESS, OKAPI, ETP, Urgences, Samu/Smur, capacités hospitalières).',
          'Migration de rapports BI de Jaspersoft vers SAS Viya, automatisation de traitements avec Python/SQL, et conception de la cartographie régionale des lits disponibles.',
          'Administration des accès, intégration de flux multisources, et participation active aux projets numériques de santé publique en région PACA.',
          "Modélisation TRU (ARS PACA) : Développement d’un outil permettant d’identifier, à l’échelle communale, les facteurs influençant le recours évitable aux urgences, à partir de variables démographiques, sanitaires, d’accès aux soins et socio-économiques, afin d’orienter le déploiement des soins non programmés.",
          'Support technique et accompagnement de la transition numérique des structures régionales de santé.'
        ]
      },
      {
        role: 'Data Scientist',
        company: 'Orange',
        period: 'Sept. 2021 – Sept. 2022',
        location: 'Lyon, France',
        highlights: [
          'Développement de modèles statistiques sur des flux de données hétérogènes.',
          'Traitement de données textuelles pour l’automatisation et la supervision.',
          'Mise en œuvre d’automatisations via UI Path et visualisations avancées (Kibana, Power BI).'
        ]
      },
      {
        role: 'Data Engineer - Développeur',
        company: 'Enedis',
        period: 'Avr. 2021 – Sept. 2021',
        location: 'Toulon, France',
        highlights: [
          'Développement d’applications de suivi énergétique (CodeIgniter).',
          'Intégration de données via Denodo (VQL) et reporting analytique.'
        ]
      }
    ]
  },
  expertise: {
    title: 'Expertise',
    subtitle: "Un éventail de compétences data, IA et engineering pour livrer des solutions complètes.",
    categories: [
      {
        title: 'Data Science & ML',
        items: ['Python', 'SQL', 'Statistiques', 'Supervision', 'Clustering', 'NLP']
      },
      {
        title: 'Data Engineering',
        items: ['ETL', 'Pipelines', 'Qualité des données', 'PostgreSQL', 'MongoDB']
      },
      {
        title: 'BI & Visualisation',
        items: ['Power BI', 'Data storytelling', 'Dashboards décisionnels']
      },
      {
        title: 'AI / Engineering',
        items: ['Docker', 'n8n', 'CI/CD', 'Automatisation ML Ops']
      }
    ]
  },
  projects: {
    title: 'Projets',
    subtitle: 'Sélection de projets académiques et personnels en IA, data et analytics.',
    items: [
      {
        title: 'Création d’un portfolio web full-stack avec automatisation back-end et chatbot en production',
        description:
          'Développement d’un portfolio web moderne et évolutif (React, Vite, Tailwind) intégrant un système de contact temps réel ainsi qu’un chatbot interactif permettant d’échanger avec les visiteurs et de faciliter la prise de contact. Conception d’une architecture back-end événementielle basée sur n8n (webhooks, workflows automatisés) permettant la réception, le traitement et la notification des messages utilisateurs par email (Gmail API, OAuth 2.0). Déploiement sur VPS avec Docker et Nginx, configuration réseau avancée (CORS, reverse proxy, ports, environnements), et intégration CI/CD via GitHub.',
        tags: ['React', 'Vite', 'Tailwind', 'n8n', 'Docker', 'Nginx', 'CI/CD'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Automatisation de workflows IA no-code avec n8n et DeepSeek',
        description:
          'Conception d’agents intelligents capables d’extraire des informations depuis des PDF et emails, de les structurer et de les exploiter (Google Sheets, notifications). Mise en production de flux robustes avec gestion des erreurs, tests et débogage.',
        tags: ['n8n', 'DeepSeek', 'Agentic AI', 'PDF', 'Google Sheets'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Pipeline d’import de données de santé (ViaTrajectoire / TND) vers MariaDB',
        description:
          'Conception et industrialisation d’un pipeline en Python : automatisation de l’ingestion d’archives CSV, alignement des fichiers avec le modèle de données, nettoyage des données et gestion des doublons et incohérences. Mise en œuvre et exécution sur serveur Linux, avec préparation de l’environnement et livraison d’un script Python prêt à l’utilisation en production.',
        tags: ['Python', 'MariaDB', 'CSV', 'ETL', 'Linux'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Pipeline automatisé de génération de vidéos publicitaires par IA',
        description:
          'Combinaison d’appels API à fal.ai pour la création vidéo et à ChatGPT (OpenAI API) pour la génération automatique de titres marketing. Workflow orchestré avec n8n : exécution asynchrone, dépôt des vidéos sur Google Drive et mise à jour des résultats dans Google Sheets, avec une attention particulière portée à la scalabilité et à l’optimisation des coûts.',
        tags: ['fal.ai', 'ChatGPT', 'OpenAI API', 'n8n', 'Google Drive', 'Google Sheets'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Automatisation de la production de visuels e-commerce par IA',
        description:
          'Workflow automatisé de génération de visuels marketing à partir de données produits, basé sur des API d’IA générative (Google AI Studio – Gemini Imagen). Orchestration complète avec n8n : ingestion des données via Google Sheets, appels API, gestion asynchrone des traitements, stockage des images sur Google Drive et mise à jour automatique des résultats. Objectif : produire des rendus produits réalistes à grande échelle pour optimiser la qualité visuelle et la performance marketing.',
        tags: ['Google AI Studio', 'Gemini Imagen', 'n8n', 'Google Sheets', 'Google Drive', 'E-commerce'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Automatisation de pipelines IA pour la génération et l’édition d’images',
        description:
          'Workflows automatisés avec n8n intégrant des appels API REST sécurisés (POST) vers Google AI Studio pour exploiter le modèle Nano Banana Pro avec gestion des clés API. Création d’un formulaire web permettant de capturer l’image source et le prompt utilisateur, de convertir les fichiers en Base64 et de gérer le traitement de multiples images dans un même flux. Orchestration complète de la génération, de l’édition et de la restitution de fichiers images exploitables, optimisant la production d’assets IA dans des workflows structurés.',
        tags: ['n8n', 'Google AI Studio', 'Nano Banana Pro', 'API REST', 'Base64', 'Image IA'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Application web “Aide-moi” + Agentic AI',
        description:
          'Application d’assistance intelligente basée sur la description des problèmes. Le frontend (React, Vite, TypeScript) déclenche des requêtes POST vers des webhooks n8n locaux, exposés de manière sécurisée via Cloudflare Tunnel. Les données sont traitées par un workflow n8n orchestrant un Agentic AI (DeepSeek Chat Model), avant restitution synchronisée via le mécanisme “Respond to Webhook”. Le projet couvre l’UX, l’intégration HTTP, l’exposition contrôlée de services locaux et les problématiques réseau (CORS, méthodes HTTP, tunnels).',
        tags: ['React', 'TypeScript', 'n8n', 'Cloudflare Tunnel', 'DeepSeek'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Agentic AI conversationnel sur Telegram',
        description:
          'Conception et déploiement d’un Agentic AI sur Telegram, orchestré via n8n, capable de comprendre des requêtes complexes, de rechercher des informations en temps réel (ERP API) et d’exécuter des actions via des outils externes (APIs Google, automatisations). Architecture basée sur webhooks, intégration de LLM (Grok API) et workflows décisionnels, démontrant la différence entre chatbot passif et agent intelligent orienté action.',
        tags: ['Telegram', 'n8n', 'Grok API', 'Webhooks', 'Automatisation'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Advanced Supervised Learning',
        description:
          'Implémentation from scratch d’arbres de décision et de forêts aléatoires, avec validation, métriques et comparaisons.',
        tags: ['Python', 'ML', 'Decision Trees', 'Random Forests'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Détection de Communauté DBLP',
        description:
          'Analyse de graphes et visualisation pour identifier des communautés de chercheurs et leurs interactions.',
        tags: ['Graphes', 'Visualisation', 'Python'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Clustering & Analyse multidimensionnelle',
        description:
          'ACP et classification non supervisée sur des données automobiles pour identifier des segments.',
        tags: ['ACP', 'Clustering', 'Analyse multivariée'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Projet SAS – World Happiness Report',
        description:
          'Exploration statistique et reporting sur les données de bonheur mondial avec mise en contexte des résultats.',
        tags: ['SAS', 'Statistiques', 'BI'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Simple Data Analysis Project',
        description:
          'Pipeline d’analyse exploratoire et synthèse de résultats pour des jeux de données multi-variables.',
        tags: ['EDA', 'Python', 'Pandas'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Projet Fin d’Études Licence – Jeu de Quiz',
        description:
          'Application interactive de quiz, intégrant logique de score, base de questions et reporting basique.',
        tags: ['Fullstack', 'UX', 'Data'],
        repo: '#',
        demo: '#'
      }
    ]
  },
  research: {
    title: 'Recherche',
    subtitle: 'Travaux axés sur l’analyse sémantique et la structuration de données complexes.',
    items: [
      {
        title: 'Catégorisation d’articles scientifiques par relations sémantiques',
        description: 'Méthodes d’analyse sémantique pour structurer des corpus scientifiques et faciliter la recherche thématique.',
        paper: '#',
        repo: '#'
      },
      {
        title: 'Co-clustering de données spatio-temporelles',
        description: 'Approche de co-clustering pour comprendre des dynamiques temporelles et spatiales complexes.',
        paper: '#',
        repo: '#'
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle: 'Échangeons sur un projet IA, data produit ou collaboration.',
    cards: [
      {
        label: 'Email',
        value: 'libasselaye01@gmail.com',
        href: 'mailto:libasselaye01@gmail.com'
      },
      {
        label: 'Téléphone',
        value: '+33 6 51 98 36 14',
        href: 'tel:+33651983614'
      },
      {
        label: 'Localisation',
        value: 'Toulon, France'
      }
    ],
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mame-libasse-mboup-3a26871a0/' },
      { label: 'GitHub', href: 'https://github.com/libasselaye' }
    ]
  },
  write: {
    title: 'Écrivez-moi',
    subtitle: 'Un message suffit pour démarrer une conversation.',
    fields: {
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message'
    },
    subject: 'Contact via portfolio',
    submit: 'Envoyer le message',
    helper: "Le formulaire ouvre votre client email par défaut. L'intégration n8n peut être activée plus tard."
  },
  footer: {
    text: '© 2026 Mame Libasse Mboup. Tous droits réservés.',
    marquee: "Let's build Together"
  },
  ui: {
    themeToggle: 'Changer le thème',
    menuToggle: 'Afficher le menu',
    heroProfile: {
      kicker: 'Profil',
      title: 'Ingénierie data appliquée',
      labels: {
        company: 'Entreprise',
        location: 'Localisation',
        email: 'Email',
        phone: 'Téléphone'
      },
      tags: ['Data Science', 'Machine Learning', 'Data Engineering', 'AI Automation', 'Agentic AI']
    },
    sectionKickers: {
      profile: 'Profil',
      experience: 'Expériences',
      timeline: 'Parcours',
      skills: 'Compétences',
      work: 'Travaux',
      papers: 'Publications',
      details: 'Coordonnées',
      message: 'Message'
    },
    strengthsTitle: 'Axes forts',
    writeCardTitle: 'Discutons de votre projet',
    buttons: {
      repo: 'Repo',
      demo: 'Démo',
      paper: 'Paper'
    }
  }
};
