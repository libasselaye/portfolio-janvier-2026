export type ProjectCategory = "all" | "product" | "ai" | "data";
// Stable source indices keep the complete FR/EN project catalogue intact.
export const projectOrder = [
  0, 4, 1, 2, 3, 7, 6, 8, 9, 10, 11, 12, 5, 13, 14, 15, 16, 17, 18,
];
export const projectCategory = (index: number): ProjectCategory =>
  [0, 1, 5, 18].includes(index)
    ? "product"
    : [7, 13, 14, 15, 16, 17].includes(index)
      ? "data"
      : "ai";
export const featured: Record<
  number,
  {
    name: string;
    kind: "organizer" | "brain" | "nutrition" | "leads";
    fr: string;
    en: string;
    tags: string[];
  }
> = {
  "0": {
    name: "LibOrga",
    kind: "organizer",
    fr: "Organiser ses tâches avec la matrice d’Eisenhower.",
    en: "Organise tasks with the Eisenhower matrix.",
    tags: ["Product design", "Next.js", "Supabase"],
  },
  "1": {
    name: "LibCalPilot",
    kind: "nutrition",
    fr: "Suivre son alimentation et ses apports nutritionnels.",
    en: "Track meals and nutritional intake.",
    tags: ["PWA", "Gemini Vision", "React"],
  },
  "2": {
    name: "LibLeadIN",
    kind: "leads",
    fr: "Rechercher des prospects et préparer ses prises de contact.",
    en: "Find prospects and prepare outreach messages.",
    tags: ["Agents IA", "Next.js", "n8n"],
  },
  "4": {
    name: "LiBrain",
    kind: "brain",
    fr: "Gérer ses emails et son agenda avec un assistant IA.",
    en: "Manage email and calendar with an AI assistant.",
    tags: ["Agents IA", "n8n", "LiteLLM"],
  },
};
export const editorial = {
  fr: {
    nav: ["Parcours", "Compétences", "Projets", "À propos"],
    contact: "Me contacter",
    available: "Ouvert aux collaborations",
    heroLines: ["Mame", "Libasse", "Mboup."],
    intro:
      "Chez BPCE-SI, à Aix-en-Provence, je travaille sur la plateforme data du Groupe avec GCP, BigQuery et dbt, et je conçois des rapports Power BI.\n\nJe participe aussi à des projets d’IA appliquée aux métiers bancaires dans un contexte international. En parallèle, je développe mes propres applications web et assistants IA.",
    seeProjects: "Voir mes projets",
    meet: "À propos de moi",
    scroll: "Mon parcours",
    portrait: "Dans la data depuis 2021.",
    location: "Aix-en-Provence, France",
    experienceLabel: "EXPÉRIENCE PROFESSIONNELLE",
    workKicker: "APPLICATIONS & ANALYSE DE DONNÉES",
    workTitle: "Mes",
    workItalic: "projets.",
    workDescription:
      "Des applications personnelles, des automatisations et des travaux d’analyse. Chaque fiche présente le fonctionnement du projet et les outils utilisés.",
    filters: ["Tous les projets", "Applications web", "Agents IA", "Data & ML"],
    details: "Voir le projet",
    allProjects: "Voir les 19 projets",
    fewerProjects: "Afficher la sélection",
    illustration: "Illustration de l’interface",
    source: "Code source",
    demo: "Ouvrir le site",
    close: "Fermer",
    projectAbout: "Présentation du projet",
    stack: "Technologies utilisées",
    privateProject: "Ce projet ne dispose pas de lien public.",
    discuss: "Me poser une question",
    aboutKicker: "PRÉSENTATION",
    aboutTitle: "À propos",
    aboutItalic: "de moi.",
    aboutLead:
      "Je conçois des applications web et des agents IA, j’interviens sur des plateformes data en entreprise et je forme aux mathématiques, aux statistiques et à la programmation.",
    aboutText:
      "Diplômé d’un master en machine learning à Lyon II, je travaille dans la data depuis 2021. Mon parcours chez Enedis, Orange, Innovation e-Santé Sud et aujourd’hui BPCE-SI m’a amené à travailler avec des équipes métier et techniques, sur des systèmes utilisés au quotidien. Cette expérience nourrit aussi ma façon de concevoir des applications et d’accompagner un projet.",
    aboutPersonal:
      "Je m’intéresse aussi aux statistiques appliquées au sport. En dehors du travail, je suis supporter du Paris Saint-Germain et je pratique la musculation.",
    servicesKicker: "PROJETS & ACCOMPAGNEMENT",
    servicesTitle: "Ce que je peux vous apporter.",
    servicesIntro:
      "Créer une application, intégrer l’IA à vos outils ou renforcer votre équipe data : voici les sujets sur lesquels nous pouvons travailler ensemble.",
    services: [
      {
        title: "Applications & agents IA",
        text: "Un assistant qui exploite vos documents, un agent connecté à vos outils ou une application qui intègre l’IA. Je vous accompagne pour préciser le besoin, concevoir la solution et développer les intégrations nécessaires.",
      },
      {
        title: "Sites internet & applications web",
        text: "Un site pour présenter votre activité, une plateforme ou un outil interne. Je conçois les interfaces et développe les fonctionnalités, avec une attention portée à la clarté des parcours et à l’usage sur mobile.",
      },
      {
        title: "Ingénierie data en entreprise",
        text: "Je peux rejoindre une équipe data pour développer ses flux, structurer ses modèles et faire évoluer ses outils d’analyse. Mon expérience couvre GCP, BigQuery, dbt et Power BI, ainsi que les contraintes de qualité, d’accès et de maintenance en production.",
      },
    ],
    servicesCta: "Parlons de votre projet",
    teachingKicker: "ENSEIGNEMENT & FORMATION",
    teachingTitle: "Former et transmettre.",
    teachingIntro:
      "La transmission fait aussi partie de mon activité. J’enseigne les mathématiques, les statistiques et la programmation, notamment Python et SQL.",
    teachingAudiences: [
      {
        title: "Professionnels & organismes de formation",
        text: "Je propose des formations sur une plateforme IT et au sein d’organismes de formation. Je peux intervenir pour accompagner l’apprentissage des outils et des méthodes en data et en programmation.",
      },
      {
        title: "Élèves & étudiants",
        text: "J’accompagne les élèves et les étudiants en mathématiques, en statistiques et en programmation : comprendre les notions, les mettre en pratique et progresser sur les sujets qui leur posent difficulté.",
      },
    ],
    teachingCta: "Échanger sur une formation",
    galleryLabels: ["Au quotidien", "Au bureau", "Remise de diplôme"],
    galleryAlt: [
      "Mame Libasse Mboup travaillant sur sa tablette en extérieur",
      "Mame Libasse Mboup à son bureau, travaillant sur ses ordinateurs",
      "Mame Libasse Mboup lors de sa remise de diplôme",
    ],
    galleryCaptions: [
      "01 — Au quotidien.",
      "02 — Au bureau.",
      "03 — Remise de diplôme.",
    ],
    cv: "Consulter mon CV",
    downloadCv: "Télécharger mon CV",
    careerKicker: "EXPÉRIENCE PROFESSIONNELLE",
    careerTitle: "Mon",
    careerItalic: "parcours.",
    current: "Aujourd’hui",
    education: "Formation",
    educationHint: "Diplômes & universités",
    educationLink: "Voir ma formation",
    expertiseKicker: "OUTILS & MÉTHODES",
    expertiseTitle: "Mes",
    expertiseItalic: "compétences.",
    expertiseText:
      "J’interviens sur l’ensemble de la chaîne data : cadrage avec les métiers, préparation des données, analyse et mise à disposition des résultats. Chez BPCE-SI, ce travail associe ingénierie sur GCP, BI et IA appliquée, dans un environnement bancaire international où la fiabilité des traitements et la confidentialité des données sont essentielles.",
    expertiseDescriptions: [
      "Mes analyses portent sur des questions métier concrètes, comme les facteurs de recours aux urgences ou la supervision des réseaux. Je mobilise les statistiques et le machine learning pour étudier les relations entre variables, construire des modèles et interpréter les résultats, en tenant compte des limites des données.",
      "Sur GCP, je développe les flux qui alimentent la plateforme data et les modèles qui rendent les données exploitables. BigQuery, Cloud Composer et dbt couvrent l’intégration, l’orchestration et les transformations. Les tests de qualité, la documentation et le suivi des dépendances font partie du travail, au même titre que la maintenance des traitements en production.",
      "Je conçois des dispositifs de reporting avec les équipes métier, de la définition des indicateurs à leur restitution dans Power BI. Le travail comprend les modèles de données, les mesures DAX et la sécurité des accès, notamment à partir de BigQuery. Mes réalisations couvrent le pilotage bancaire, les capacités hospitalières et les opérations télécoms.",
      "J’intègre des modèles de langage aux données et aux outils existants : assistants d’analyse, extraction documentaire et agents capables d’exécuter des actions. Je développe les connexions, orchestre les traitements avec n8n et structure les données produites. Dans le secteur bancaire, ces usages doivent aussi respecter la confidentialité et les contraintes de l’environnement de travail.",
    ],
    research: "Travaux de recherche",
    researchNote: "Pendant mes études",
    contactKicker: "CONTACT",
    contactTitle: "Me",
    contactItalic: "contacter.",
    contactText:
      "Pour me parler d’un poste, d’un projet ou me poser une question sur mon travail, vous pouvez m’écrire par email ou sur LinkedIn.",
    write: "Écrivez-moi",
    copy: "Copier l’email",
    copied: "Email copié",
    copyError: "Copie indisponible : utilisez le lien email.",
    backTop: "Retour en haut",
    footer: "Data scientist · Aix-en-Provence, France.",
    sending: "Envoi en cours…",
    success: "Merci ! Votre message a bien été envoyé.",
    error: "L’envoi n’a pas abouti. Réessayez ou contactez-moi par email.",
    mailFallback: "Vous pouvez aussi m’écrire directement par email.",
    chatLabel: "Poser une question à LibasseAI",
    chatIntro:
      "Bonjour, je suis l’assistant IA de ce portfolio. Je peux répondre à vos questions sur le parcours, les compétences et les projets de Libasse.",
    chatPlaceholder: "Votre question…",
    chatSend: "Envoyer",
    chatThinking: "Réponse en cours…",
    chatError:
      "L’assistant est momentanément indisponible. Vous pouvez contacter Libasse directement par email.",
    chatSuggestions: [
      "Sur quoi travaille Libasse ?",
      "Quels projets IA a-t-il développés ?",
    ],
    chatNote: "Assistant IA · ses réponses peuvent contenir des erreurs.",
    skip: "Aller au contenu",
    menu: "Ouvrir le menu",
    theme: "Changer le thème",
  },
  en: {
    nav: ["Experience", "Skills", "Projects", "About"],
    contact: "Contact me",
    available: "Open to collaborations",
    heroLines: ["Mame", "Libasse", "Mboup."],
    intro:
      "At BPCE-SI in Aix-en-Provence, I work on the Group’s data platform with GCP, BigQuery and dbt, and I build Power BI reports.\n\nI also contribute to AI projects for banking teams in an international context. Alongside this work, I develop my own web applications and AI assistants.",
    seeProjects: "View my projects",
    meet: "About me",
    scroll: "My experience",
    portrait: "Working in data since 2021.",
    location: "Aix-en-Provence, France",
    experienceLabel: "PROFESSIONAL EXPERIENCE",
    workKicker: "APPLICATIONS & DATA ANALYSIS",
    workTitle: "My",
    workItalic: "projects.",
    workDescription:
      "Personal applications, automation workflows and data analysis projects. Each overview explains what the project does and which tools I used.",
    filters: ["All projects", "Web applications", "AI agents", "Data & ML"],
    details: "View project",
    allProjects: "View all 19 projects",
    fewerProjects: "Show selected projects",
    illustration: "Interface illustration",
    source: "Source code",
    demo: "Open website",
    close: "Close",
    projectAbout: "About the project",
    stack: "Technologies used",
    privateProject: "This project has no public link.",
    discuss: "Ask me about this project",
    aboutKicker: "ABOUT ME",
    aboutTitle: "A little",
    aboutItalic: "about me.",
    aboutLead:
      "I build web applications and AI agents, work on enterprise data platforms, and teach mathematics, statistics and programming.",
    aboutText:
      "With a master’s in machine learning from Lyon II, I have worked in data since 2021. My roles at Enedis, Orange, Innovation e-Santé Sud and now BPCE-SI have involved working with business and technical teams on systems used every day. This experience also informs how I design applications and approach a project.",
    aboutPersonal:
      "I’m also interested in sports statistics. Outside work, I’m a Paris Saint-Germain supporter and I practise weight training.",
    servicesKicker: "PROJECTS & SUPPORT",
    servicesTitle: "How I can help.",
    servicesIntro:
      "Building an application, integrating AI into your tools or strengthening your data team: these are the areas we can work on together.",
    services: [
      {
        title: "AI applications & agents",
        text: "An assistant that works with your documents, an agent connected to your tools or an application with AI features. I can help define the requirements, design the solution and build the integrations it needs.",
      },
      {
        title: "Websites & web applications",
        text: "A website for your business, a platform or an internal tool. I design interfaces and develop features, with attention to clear user journeys and usability on mobile.",
      },
      {
        title: "Enterprise data engineering",
        text: "I can join a data team to develop its pipelines, structure its models and improve its analytical tools. My experience covers GCP, BigQuery, dbt and Power BI, including data quality, access controls and production maintenance.",
      },
    ],
    servicesCta: "Let’s discuss your project",
    teachingKicker: "TEACHING & TRAINING",
    teachingTitle: "Teaching and sharing knowledge.",
    teachingIntro:
      "Teaching is also part of my work. I teach mathematics, statistics and programming, including Python and SQL.",
    teachingAudiences: [
      {
        title: "Professionals & training organisations",
        text: "I offer courses on an IT training platform and through training organisations. I can support learners in developing their knowledge of data and programming tools and methods.",
      },
      {
        title: "School & university students",
        text: "I support students in mathematics, statistics and programming: understanding concepts, putting them into practice and working through topics they find difficult.",
      },
    ],
    teachingCta: "Discuss a training need",
    galleryLabels: ["Day to day", "At my desk", "Graduation"],
    galleryAlt: [
      "Mame Libasse Mboup working on a tablet outdoors",
      "Mame Libasse Mboup at his desk, working on his computers",
      "Mame Libasse Mboup at his graduation ceremony",
    ],
    galleryCaptions: [
      "01 — Day to day.",
      "02 — At my desk.",
      "03 — Graduation.",
    ],
    cv: "Read my résumé",
    downloadCv: "Download my CV",
    careerKicker: "PROFESSIONAL EXPERIENCE",
    careerTitle: "Work",
    careerItalic: "experience.",
    current: "Currently",
    education: "Education",
    educationHint: "Degrees & universities",
    educationLink: "View my education",
    expertiseKicker: "TOOLS & METHODS",
    expertiseTitle: "My",
    expertiseItalic: "skills.",
    expertiseText:
      "I work across the data lifecycle: defining requirements with business teams, preparing data, analysing it and making the results available. At BPCE-SI, this combines GCP engineering, BI and applied AI in an international banking environment, where reliable processing and data confidentiality are essential.",
    expertiseDescriptions: [
      "My analyses address specific business questions, such as factors behind emergency department use or network monitoring. I use statistics and machine learning to examine relationships between variables, build models and interpret their results, taking the limitations of the data into account.",
      "On GCP, I develop the flows that feed the data platform and the models that make its data usable. BigQuery, Cloud Composer and dbt support integration, orchestration and transformation. Quality tests, documentation and dependency tracking are part of this work, alongside maintaining production data processes.",
      "I design reporting systems with business teams, from defining indicators to presenting them in Power BI. This includes data models, DAX measures and access controls, particularly with BigQuery as a source. My work covers banking reporting, hospital capacity and telecom operations.",
      "I connect language models to existing data and tools: analytical assistants, document extraction and agents that can carry out actions. I build the integrations, orchestrate processing with n8n and structure the resulting data. In banking, these applications also need to respect confidentiality and the constraints of the working environment.",
    ],
    research: "Research projects",
    researchNote: "From my studies",
    contactKicker: "CONTACT",
    contactTitle: "Get",
    contactItalic: "in touch.",
    contactText:
      "For a role, a project or a question about my work, you can reach me by email or on LinkedIn.",
    write: "Write to me",
    copy: "Copy email",
    copied: "Email copied",
    copyError: "Copy unavailable: use the email link.",
    backTop: "Back to top",
    footer: "Data scientist · Aix-en-Provence, France.",
    sending: "Sending…",
    success: "Thank you! Your message has been sent.",
    error:
      "Your message could not be sent. Please try again or contact me by email.",
    mailFallback: "You can also reach me directly by email.",
    chatLabel: "Ask LibasseAI a question",
    chatIntro:
      "Hi, I’m the AI assistant for this portfolio. I can answer questions about Libasse’s background, skills and projects.",
    chatPlaceholder: "Your question…",
    chatSend: "Send",
    chatThinking: "Preparing a response…",
    chatError:
      "The assistant is temporarily unavailable. You can contact Libasse directly by email.",
    chatSuggestions: [
      "What does Libasse work on?",
      "Which AI projects has he built?",
    ],
    chatNote: "AI assistant · responses may contain mistakes.",
    skip: "Skip to content",
    menu: "Open menu",
    theme: "Switch theme",
  },
};
