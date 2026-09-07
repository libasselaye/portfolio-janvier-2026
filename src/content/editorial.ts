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
      "J’ai commencé mes études en mathématiques et informatique à Thiès, avant de les poursuivre en France. J’ai obtenu mon master en machine learning à Lyon II en 2022.",
    aboutText:
      "Depuis 2021, je travaille dans la data. J’ai développé des outils de suivi pour l’énergie, les télécoms et la santé publique, avant de rejoindre le secteur bancaire. Mes projets personnels me permettent aussi de travailler sur les interfaces web et les agents IA.",
    aboutPersonal:
      "Je m’intéresse aussi aux statistiques appliquées au sport. En dehors du travail, je suis supporter du Paris Saint-Germain et je pratique la musculation.",
    galleryLabels: ["Au bureau", "Remise de diplôme", "Au quotidien"],
    galleryAlt: [
      "Mame Libasse Mboup à son bureau, travaillant sur ses ordinateurs",
      "Mame Libasse Mboup lors de sa remise de diplôme",
      "Mame Libasse Mboup travaillant sur sa tablette en extérieur",
    ],
    galleryCaptions: [
      "01 — Au bureau.",
      "02 — Remise de diplôme.",
      "03 — Au quotidien.",
    ],
    cv: "Consulter mon CV",
    downloadCv: "Télécharger mon CV",
    careerKicker: "EXPÉRIENCE PROFESSIONNELLE",
    careerTitle: "Mon",
    careerItalic: "parcours.",
    current: "Aujourd’hui",
    education: "Formation",
    educationHint: "Diplômes & universités",
    expertiseKicker: "OUTILS & MÉTHODES",
    expertiseTitle: "Mes",
    expertiseItalic: "compétences.",
    expertiseText:
      "Mon travail couvre la data science, l’ingénierie sur GCP et dbt, la BI et l’IA appliquée. Chez BPCE-SI, ces sujets s’inscrivent dans un contexte bancaire international, avec des besoins métier et des exigences de fiabilité et de confidentialité.",
    expertiseDescriptions: [
      "J’analyse les données et je construis des modèles statistiques ou de machine learning pour étudier un problème précis.",
      "Je construis des pipelines sur GCP avec BigQuery, Cloud Composer et Cloud Storage. Avec dbt, je modélise les données, teste leur qualité et documente les transformations jusqu’aux tables utilisées pour l’analyse.",
      "Je crée des tableaux de bord pour suivre une activité : disponibilité des lits hospitaliers, raccordements fibre ou indicateurs bancaires.",
      "Je travaille sur des assistants d’analyse, l’extraction d’informations dans les documents et des agents connectés à des outils. Cela comprend l’intégration des modèles de langage, leur orchestration avec n8n et le développement assisté par IA.",
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
      "I began studying mathematics and computer science in Thiès, then continued my studies in France. I completed my master’s in machine learning at Lyon II in 2022.",
    aboutText:
      "I’ve worked in data since 2021. Before joining the banking sector, I built reporting tools for energy, telecoms and public healthcare. My personal projects also give me a chance to work on web interfaces and AI agents.",
    aboutPersonal:
      "I’m also interested in sports statistics. Outside work, I’m a Paris Saint-Germain supporter and I practise weight training.",
    galleryLabels: ["At my desk", "Graduation", "Day to day"],
    galleryAlt: [
      "Mame Libasse Mboup at his desk, working on his computers",
      "Mame Libasse Mboup at his graduation ceremony",
      "Mame Libasse Mboup working on a tablet outdoors",
    ],
    galleryCaptions: [
      "01 — At my desk.",
      "02 — Graduation.",
      "03 — Day to day.",
    ],
    cv: "Read my résumé",
    downloadCv: "Download my CV",
    careerKicker: "PROFESSIONAL EXPERIENCE",
    careerTitle: "Work",
    careerItalic: "experience.",
    current: "Currently",
    education: "Education",
    educationHint: "Degrees & universities",
    expertiseKicker: "TOOLS & METHODS",
    expertiseTitle: "My",
    expertiseItalic: "skills.",
    expertiseText:
      "My work covers data science, engineering with GCP and dbt, BI and applied AI. At BPCE-SI, this involves an international banking context, business requirements, and expectations around reliability and confidentiality.",
    expertiseDescriptions: [
      "I analyse data and build statistical or machine learning models to investigate a specific problem.",
      "I build GCP pipelines with BigQuery, Cloud Composer and Cloud Storage. With dbt, I model data, test its quality and document transformations through to the tables used for analysis.",
      "I create dashboards to track hospital bed availability, fibre connections and banking indicators.",
      "I work on analytical assistants, document extraction and agents connected to external tools. This includes integrating language models, orchestrating them with n8n and using AI-assisted development.",
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
