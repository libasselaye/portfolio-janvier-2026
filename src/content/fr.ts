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
    role: 'Data Scientist / Machine Learning Engineer',
    company: 'Innovation e-Santé Sud',
    location: 'Toulon, France',
    email: 'libasselaye01@gmail.com',
    phone: '+33 6 51 98 36 14'
  },
  hero: {
    headline: "Transformer la data en décisions IA fiables, utiles et mesurables.",
    subheadline:
      "Data Scientist & ML Engineer chez Innovation e-Santé Sud. J'architecte des pipelines et des modèles qui relient rigueur scientifique, impact métier et storytelling clair.",
    ctaProjects: 'Voir mes projets',
    ctaCv: 'Voir mon CV',
    cvUrl: 'cv_libasse.pdf',
    status: 'Disponible pour collaborations data produit & IA appliquée'
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
        title: 'Advanced Supervised Learning',
        description: 'Implémentation from scratch d’arbres de décision et de forêts aléatoires, avec validation, métriques et comparaisons.',
        tags: ['Python', 'ML', 'Decision Trees', 'Random Forests'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Projet Fin d’Études Licence – Jeu de Quiz',
        description: 'Application interactive de quiz, intégrant logique de score, base de questions et reporting basique.',
        tags: ['Fullstack', 'UX', 'Data'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Détection de Communauté DBLP',
        description: 'Analyse de graphes et visualisation pour identifier des communautés de chercheurs et leurs interactions.',
        tags: ['Graphes', 'Visualisation', 'Python'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Projet SAS – World Happiness Report',
        description: 'Exploration statistique et reporting sur les données de bonheur mondial avec mise en contexte des résultats.',
        tags: ['SAS', 'Statistiques', 'BI'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Simple Data Analysis Project',
        description: 'Pipeline d’analyse exploratoire et synthèse de résultats pour des jeux de données multi-variables.',
        tags: ['EDA', 'Python', 'Pandas'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Clustering & Analyse multidimensionnelle',
        description: 'ACP et classification non supervisée sur des données automobiles pour identifier des segments.',
        tags: ['ACP', 'Clustering', 'Analyse multivariée'],
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
    text: '© 2026 Mame Libasse Mboup. Tous droits réservés.'
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
      tags: ['Data Science', 'Machine Learning', 'Data Engineering', 'Data Analytics', 'Automatisation IA', 'Agent IA']
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
