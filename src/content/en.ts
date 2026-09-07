import type { Content } from "./types";

export const contentEn: Content = {
  lang: "en",
  seo: {
    title: "Mame Libasse Mboup | Data Scientist & ML Engineer",
    description:
      "Mame Libasse Mboup, data scientist at BPCE-SI in Aix-en-Provence. Work experience, projects and skills in data analysis, web development and AI.",
  },
  nav: [
    {
      id: "hero",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "curriculum",
      label: "Education",
    },
    {
      id: "expertise",
      label: "Expertise",
    },
    {
      id: "projects",
      label: "Projects",
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
    role: "Applied Data & AI Engineer",
    company: "BPCE-SI (Groupe BPCE)",
    location: "PACA Region, France",
    email: "libasselaye01@gmail.com",
    phone: "+33 6 51 98 36 14",
  },
  hero: {
    headline:
      "At BPCE-SI in Aix-en-Provence, I work on the Group’s data platform with GCP, BigQuery and dbt, and I build Power BI reports.\n\nI also contribute to AI projects for banking teams in an international context. Alongside this work, I develop my own web applications and AI assistants.",
    subheadline: "",
    ctaProjects: "View my projects",
    ctaCv: "Read my résumé",
    assistantCta: "Try LibasseAI",
    scrollHint: "View my experience",
    cvUrl: "CV_Mame_Libasse_Mboup_EN.pdf",
    status: "Open to collaborations",
    ticker: [
      "AVAILABLE FOR COLLABORATIONS",
      "DATA & AI ENGINEER",
      "PACA REGION · FRANCE",
    ],
  },
  about: {
    title: "About me",
    subtitle:
      "I began studying mathematics and computer science in Thiès, then continued my studies in France. I completed my master’s in machine learning at Lyon II in 2022.",
    paragraphs: [
      "I began studying mathematics and computer science in Thiès, then continued my studies in France. I completed my master’s in machine learning at Lyon II in 2022.",
      "I’ve worked in data since 2021. Before joining the banking sector, I built reporting tools for energy, telecoms and public healthcare. My personal projects also give me a chance to work on web interfaces and AI agents.",
      "I’m also interested in sports statistics. Outside work, I’m a Paris Saint-Germain supporter and I practise weight training.",
    ],
    highlights: [
      "Statistical analysis",
      "Data processing",
      "Web development",
      "Automation with AI agents",
    ],
  },
  curriculum: {
    title: "Education",
    subtitle:
      "My studies in mathematics, computer science and machine learning.",
    items: [
      {
        title: "Master 2 Machine Learning for Artificial Intelligence",
        org: "Université Lumière Lyon II, France",
        period: "2021–2022",
      },
      {
        title: "Master 1 Computer Science and Statistics",
        org: "Université Lumière Lyon II, France",
        period: "2020–2021",
      },
      {
        title: "BSc in Computer Science",
        org: "Université du Littoral Côte d'Opale, France",
        period: "2018–2020",
      },
      {
        title: "BSc Mathematics & Computer Science",
        org: "Université de Thiès, Senegal",
        period: "2015–2018",
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    subtitle:
      "I started at Enedis in 2021, then worked at Orange and Innovation e-Santé Sud. I joined BPCE-SI in July 2026.",
    items: [
      {
        role: "Data Scientist – Data Lab & New Use Cases Squad",
        company: "BPCE-SI (BPCE Group)",
        period: "Jul. 2026 – Present",
        location: "Aix-en-Provence, France",
        highlights: [
          "My work supports the Group’s banking activities in an international context. I work with business teams to understand their needs and translate them into changes to data and AI tools.",
          "I build GCP pipelines with BigQuery, Cloud Composer and Cloud Storage for the Group’s Cloud Data Platform, from data integration through to making it available for analysis.",
          "With dbt, I model data from the initial transformations to analytical tables. I set up quality tests, documentation and dependency tracking between models.",
          "In the Data Lab, I integrate language models with the Group’s data for analytical assistants and document processing, taking confidentiality and banking requirements into account.",
          "I also create Power BI reports from BigQuery data, including data models, DAX calculations and access security so each team can use the indicators relevant to its work.",
          "In the Performance & Run team, I handle incidents and changes to existing data systems. This also involves keeping them stable day to day and following up with business teams.",
          "I use AI agents for development and to understand existing applications. I document repository context to guide their use in a regulated banking environment.",
        ],
      },
      {
        role: "Data Scientist – Public Health",
        company: "Innovation e-Santé Sud (GRADeS PACA)",
        period: "Oct. 2022 – Jul. 2026",
        location: "Hyères, France",
        highlights: [
          "I developed a map of available hospital beds for the PACA regional health agency. Automated data feeds keep it updated to help monitor capacity during periods of pressure or crisis.",
          "For CONTESS, I brought together digital healthcare programme indicators across six sectors in one dashboard. SAS Viya processes combined data on shared medical records, secure messaging, national health identifiers and Pro Santé Connect.",
          "I created regional dashboards covering emergency departments, ambulance services and care pathways, including OKAPI, ETP, ROR and E-parcours.",
          "For the TRU project, I studied factors associated with avoidable emergency visits at municipality level, including demographics, access to care and socioeconomic conditions. The analyses support planning for unscheduled care.",
          "I migrated reports from Jaspersoft to SAS Viya and automated Python and SQL processing. I also administered access, data spaces and feeds on the regional platform.",
          "Using Gemini and n8n, I automated extraction from medical PDFs and images into structured tables.",
          "I built address checks for healthcare professionals, comparing Google Maps and PagesJaunes to identify and correct inconsistencies.",
          "I also set up Redmine ticket classification and assignment based on ticket content, using a language model.",
        ],
      },
      {
        role: "Data Scientist",
        company: "Orange",
        period: "Sept. 2021 – Sept. 2022",
        location: "Lyon, France",
        highlights: [
          "I analysed the fibre connection journey from order to installation to track delays and identify bottlenecks.",
          "I automated tasks with UiPath and created Kibana and Power BI dashboards for operational teams.",
          "I worked on statistical models applied to network monitoring data.",
        ],
      },
      {
        role: "Data Engineer",
        company: "Enedis",
        period: "Apr. 2021 – Sept. 2021",
        location: "Toulon, France",
        highlights: [
          "I developed a regional energy consumption tracking application with CodeIgniter, PHP and MySQL.",
          "I integrated several data sources with Denodo and prepared analytical reports for regional management.",
        ],
      },
    ],
  },
  expertise: {
    title: "Skills",
    subtitle:
      "My work covers data science, engineering with GCP and dbt, BI and applied AI. At BPCE-SI, this involves an international banking context, business requirements, and expectations around reliability and confidentiality.",
    categories: [
      {
        title: "Data Science & ML",
        items: [
          "Python",
          "SQL",
          "Statistics",
          "Supervised Learning",
          "Clustering",
          "NLP",
        ],
      },
      {
        title: "Data Engineering",
        items: [
          "ETL",
          "Pipelines",
          "Data quality",
          "PostgreSQL",
          "MongoDB",
          "GCP",
          "BigQuery",
          "Cloud Composer",
          "dbt",
        ],
      },
      {
        title: "BI & Visualization",
        items: [
          "Power BI",
          "Data storytelling",
          "Decision dashboards",
          "DAX",
          "RLS",
        ],
      },
      {
        title: "AI & automation",
        items: [
          "Docker",
          "n8n",
          "CI/CD",
          "ML Ops automation",
          "LLM",
          "Generative AI",
          "AI Agents",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle:
      "Personal applications, automation workflows and data analysis projects. Each overview explains what the project does and which tools I used.",
    items: [
      {
        title: "LibOrga — Task organisation",
        description:
          "I built LibOrga to organise tasks by urgency and importance using the Eisenhower matrix. You can capture a task, move it between quadrants and see your day in a dedicated view. The application also includes a calendar, a focus timer and a weekly review.\n\nTask entry can recognise a date or priority in a sentence. You can also scan a paper list to turn it into tasks. The application uses Next.js and Supabase and can be installed on mobile as a PWA.",
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
        title: "LibCalPilot — Food tracking",
        description:
          "LibCalPilot lets you log meals and track calories, macronutrients and weight. You can search the CIQUAL and Open Food Facts databases, scan a barcode or use a photo to estimate foods and quantities.\n\nI built the daily log, reusable recipes and weekly statistics with React and Supabase. Gemini Vision handles photo analysis. Calorie needs are calculated from the user’s profile and updated after each weigh-in.",
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
        title: "LibLeadIN — B2B prospecting",
        description:
          "LibLeadIN brings prospect research, contact details and outreach tracking into one application. It drafts personalised messages from the information collected and lets users preview them before sending.\n\nI connected the Next.js interface to four n8n workflows for research, email preparation, sending and retrieving contacts. Data is stored in Google Sheets, and a dashboard displays statuses and recent activity.",
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
        title: "LibJobPilot — Job search",
        description:
          "I built LibJobPilot around the search for data and AI roles. It collects vacancies from LinkedIn, Indeed and Glassdoor, then compares them with a candidate’s profile. A Kanban board tracks applications and follow-ups.\n\nFive n8n workflows handle job collection, evaluation and tracking. Playwright automates application steps on Indeed and Glassdoor. The interface uses React, with data stored in Supabase.",
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
        title: "LiBrain — Personal AI assistant",
        description:
          "LiBrain is an assistant for managing email, calendars, contacts and finances through written requests. I connected four specialised agents to Gmail, Google Calendar and Airtable, using n8n to assign tasks.\n\nThe interface is built with React. LiteLLM centralises model calls, tracks their cost and switches providers when a service is unavailable. The application is deployed with Docker and Traefik.",
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
        title: "Portfolio — Website and AI assistant",
        description:
          "This website presents my background and projects in French and English. I built it with React, Vite and Tailwind. The contact form and AI assistant connect to n8n workflows.\n\nI also set up email delivery, deployment on a VPS with Docker and Nginx, and updates from GitHub.",
        tags: ["React", "Vite", "Tailwind", "n8n", "Docker", "Nginx", "CI/CD"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Data extraction with n8n and DeepSeek",
        description:
          "I created workflows that read PDFs and emails, extract the requested information and save it in Google Sheets. DeepSeek processes the content; n8n runs the steps and sends notifications. I also added error handling to identify failed operations.",
        tags: ["n8n", "DeepSeek", "Agentic AI", "PDF", "Google Sheets"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Importing healthcare data into MariaDB",
        description:
          "This Python script imports ViaTrajectoire / TND CSV archives into MariaDB. It maps files to the database schema, cleans values and handles duplicates and inconsistencies before import. I prepared it to run on a Linux server.",
        tags: ["Python", "MariaDB", "CSV", "ETL", "Linux"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Generating advertising videos",
        description:
          "I connected fal.ai to n8n to generate videos, and the OpenAI API to prepare their titles. The workflow waits for each generation to finish, saves the video in Google Drive and records the result in Google Sheets. This keeps track of processing without checking every API call manually.",
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
        title: "Creating e-commerce product images",
        description:
          "This workflow uses product information from Google Sheets to generate an image with Gemini Imagen. n8n sends the data, waits for the result, then saves the image in Google Drive and its link in the spreadsheet. I built the sequence of calls and generation tracking.",
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
        title: "Image generation and editing with n8n",
        description:
          "I created a form for sending an image and an editing instruction to a Google AI Studio model. The n8n workflow prepares the files, calls the API and returns the generated images. It also supports several images in one request.",
        tags: [
          "n8n",
          "Google AI Studio",
          "Nano Banana Pro",
          "REST API",
          "Base64",
          "AI Images",
        ],
        repo: "#",
        demo: "#",
      },
      {
        title: "Aide-moi — Assistance application",
        description:
          "In Aide-moi, users describe a problem and receive a response from DeepSeek. I built the interface with React and TypeScript and connected the form to an n8n workflow.\n\nThe project involved working through browser-to-server communication: webhooks, HTTP responses, CORS configuration and access to the local service through Cloudflare Tunnel.",
        tags: ["React", "TypeScript", "n8n", "Cloudflare Tunnel", "DeepSeek"],
        repo: "#",
        demo: "#",
      },
      {
        title: "AI assistant on Telegram",
        description:
          "I built a Telegram assistant that can retrieve ERP data and trigger actions through Google APIs. Messages go through n8n; the Grok model interprets the request and the workflow calls the relevant tools before responding in Telegram.",
        tags: ["Telegram", "n8n", "Grok API", "Webhooks", "Automation"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Decision trees and random forests",
        description:
          "For this supervised learning project, I implemented decision trees and random forests in Python. I then compared their results using validation metrics to study the differences between the models.",
        tags: ["Python", "ML", "Decision Trees", "Random Forests"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Research communities in DBLP",
        description:
          "I analysed a graph of relationships between researchers using DBLP data to identify communities. Python visualisations show the resulting groups and the connections between them.",
        tags: ["Graphs", "Visualization", "Python"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Clustering automotive data",
        description:
          "I used principal component analysis and clustering to study an automotive dataset. The work involved reducing the number of dimensions and identifying groups of vehicles with similar characteristics.",
        tags: ["PCA", "Clustering", "Multivariate Analysis"],
        repo: "#",
        demo: "#",
      },
      {
        title: "World Happiness Report analysis with SAS",
        description:
          "I explored World Happiness Report data with SAS. The project includes statistical analyses and a report that presents the results in context.",
        tags: ["SAS", "Statistics", "BI"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Exploratory analysis with Python",
        description:
          "This project explores datasets with several variables using Python and Pandas. I examine distributions and relationships between variables, then prepare a summary of the findings.",
        tags: ["EDA", "Python", "Pandas"],
        repo: "#",
        demo: "#",
      },
      {
        title: "Undergraduate project — Quiz application",
        description:
          "For my final undergraduate project, I developed a quiz application with a question database, scoring logic and a results view. The project combines the user interface with data management.",
        tags: ["Fullstack", "UX", "Data"],
        repo: "#",
        demo: "#",
      },
    ],
  },
  research: {
    title: "Research",
    subtitle: "My work on document classification and spatiotemporal data.",
    items: [
      {
        title: "Semantic-based categorization of scientific papers",
        description:
          "I studied how semantic relationships between scientific articles can be used to group them by topic and organise a corpus.",
        paper: "#",
        repo: "#",
      },
      {
        title: "Co-clustering of spatio-temporal data",
        description:
          "I studied co-clustering to group data while taking both location and change over time into account.",
        paper: "#",
        repo: "#",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "For a role, a project or a question about my work, you can reach me by email or on LinkedIn.",
    cards: [
      {
        label: "Email",
        value: "libasselaye01@gmail.com",
        href: "mailto:libasselaye01@gmail.com",
      },
      {
        label: "Phone",
        value: "+33 6 51 98 36 14",
        href: "tel:+33651983614",
      },
      {
        label: "Location",
        value: "PACA Region, France",
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
    title: "Write me",
    subtitle: "Tell me a little about your request.",
    fields: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
    },
    subject: "Portfolio contact",
    submit: "Send message",
    helper: "You can also email me directly.",
  },
  footer: {
    text: "© 2026 Mame Libasse Mboup. All rights reserved.",
    marquee: "Contact me",
  },
  ui: {
    themeToggle: "Toggle theme",
    themeOptions: {
      light: "Light",
      dark: "Dark",
    },
    menuToggle: "Toggle menu",
    heroProfile: {
      kicker: "Profile",
      title: "Applied data engineering",
      labels: {
        company: "Company",
        location: "Location",
        email: "Email",
        phone: "Phone",
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
      profile: "Profile",
      experience: "Experience",
      timeline: "Timeline",
      skills: "Skills",
      work: "Work",
      papers: "Papers",
      details: "Details",
      message: "Message",
    },
    strengthsTitle: "Areas of work",
    writeCardTitle: "Write to me",
    buttons: {
      repo: "Repo",
      demo: "Demo",
      paper: "Paper",
    },
  },
};
