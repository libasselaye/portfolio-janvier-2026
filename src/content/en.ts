import type { Content } from './types';

export const contentEn: Content = {
  lang: 'en',
  seo: {
    title: 'Mame Libasse Mboup | Data Scientist & ML Engineer',
    description:
      'Portfolio of Mame Libasse Mboup, Data Scientist and Machine Learning Engineer focused on applied AI, data engineering, and visual analytics.'
  },
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'curriculum', label: 'Education' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ],
  identity: {
    name: 'Mame Libasse Mboup',
    role: 'Applied Data & AI Engineer',
    company: 'Innovation e-Santé Sud',
    location: 'Toulon, France',
    email: 'libasselaye01@gmail.com',
    phone: '+33 6 51 98 36 14'
  },
  hero: {
    headline:
      'I help organizations transform raw data into intelligent, reliable, measurable decisions by designing and deploying data & AI solutions with strong business impact.',
    subheadline: '',
    ctaProjects: 'Discover my projects',
    ctaCv: 'Learn more with my CV',
    scrollHint: 'Explore my journey',
    cvUrl: 'CV_Mame_Libasse_Mboup_EN.pdf',
    status: 'Available for applied data & AI collaborations'
  },
  about: {
    title: 'About me',
    subtitle: 'A complete data culture blending research, engineering, and real-world impact.',
    paragraphs: [
      'Driven by mathematics and data, I combine statistical modeling, Machine Learning, and engineering to deliver robust, production-ready solutions.',
      'I work on algorithms, ETL pipelines, visualization, and data storytelling to build data products that are clear, actionable, and aligned with business goals.',
      'I enjoy sharing knowledge around applied statistics and sports analytics. Football and fitness cultivate my discipline and competitive mindset.'
    ],
    highlights: [
      'Scientific rigor and optimization mindset',
      'Impact-driven data storytelling',
      'Open-minded, continuous learning',
      'Sports and performance culture'
    ]
  },
  curriculum: {
    title: 'Education',
    subtitle: 'Strong foundations in mathematics, computer science, and AI.',
    items: [
      {
        title: 'Master 2 Machine Learning for Artificial Intelligence',
        org: 'Université Lumière Lyon II, France',
        period: '2021–2022'
      },
      {
        title: 'Master 1 Computer Science and Statistics',
        org: 'Université Lumière Lyon II, France',
        period: '2020–2021'
      },
      {
        title: 'BSc in Computer Science',
        org: "Université du Littoral Côte d'Opale, France",
        period: '2018–2020'
      },
      {
        title: 'BSc Mathematics & Computer Science',
        org: 'Université de Thiès, Senegal',
        period: '2015–2018'
      }
    ]
  },
  experience: {
    title: 'Professional Experience',
    subtitle: 'Data and AI contributions across healthcare, telecom, and energy.',
    items: [
      {
        role: 'Data Scientist',
        company: 'Innovation e-Santé Sud',
        period: 'Oct. 2022 – Present',
        location: 'Hyères, France',
        highlights: [
          'Health data analysis and modeling to support regional steering (Ségur, ROR, e-parcours) and improve care coordination.',
          'Development of strategic dashboards (CONTESS, OKAPI, ETP, emergency services, Samu/Smur, hospital capacity).',
          'Migration of BI reports from Jaspersoft to SAS Viya, automation with Python/SQL, and design of regional mapping of available beds.',
          'Access administration, multi-source data integration, and active participation in public health digital projects in the PACA region.',
          'TRU modeling (ARS PACA): development of a tool to identify, at municipal level, factors influencing avoidable emergency visits based on demographic, health, care access, and socioeconomic variables to guide deployment of unscheduled care.',
          'Technical support and guidance for the digital transition of regional health structures.'
        ]
      },
      {
        role: 'Data Scientist',
        company: 'Orange',
        period: 'Sept. 2021 – Sept. 2022',
        location: 'Lyon, France',
        highlights: [
          'Development of statistical models on heterogeneous data streams.',
          'Processing textual data for automation and monitoring.',
          'Automation via UiPath and advanced visualizations (Kibana, Power BI).'
        ]
      },
      {
        role: 'Data Engineer - Developer',
        company: 'Enedis',
        period: 'Apr. 2021 – Sept. 2021',
        location: 'Toulon, France',
        highlights: [
          'Development of energy monitoring applications (CodeIgniter).',
          'Data integration via Denodo (VQL) and analytical reporting.'
        ]
      }
    ]
  },
  expertise: {
    title: 'Expertise',
    subtitle: 'A broad data, AI, and engineering toolkit to deliver end-to-end solutions.',
    categories: [
      {
        title: 'Data Science & ML',
        items: ['Python', 'SQL', 'Statistics', 'Supervised Learning', 'Clustering', 'NLP']
      },
      {
        title: 'Data Engineering',
        items: ['ETL', 'Pipelines', 'Data quality', 'PostgreSQL', 'MongoDB']
      },
      {
        title: 'BI & Visualization',
        items: ['Power BI', 'Data storytelling', 'Decision dashboards']
      },
      {
        title: 'AI / Engineering',
        items: ['Docker', 'n8n', 'CI/CD', 'ML Ops automation']
      }
    ]
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of academic and personal projects in AI, data, and analytics.',
    items: [
      {
        title: 'Full-stack web portfolio with backend automation and chatbot in production',
        description:
          'Built a modern, scalable portfolio (React, Vite, Tailwind) with a real-time contact system and an interactive chatbot to engage visitors and streamline contact. Designed an event-driven backend architecture with n8n (webhooks, automated workflows) to receive, process, and notify user messages by email (Gmail API, OAuth 2.0). Deployed on VPS with Docker and Nginx, advanced network configuration (CORS, reverse proxy, ports, environments), and CI/CD integration via GitHub.',
        tags: ['React', 'Vite', 'Tailwind', 'n8n', 'Docker', 'Nginx', 'CI/CD'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'No-code AI workflow automation with n8n and DeepSeek',
        description:
          'Designed intelligent agents to extract information from PDFs and emails, structure it, and leverage it (Google Sheets, notifications). Production-ready flows with error handling, testing, and debugging.',
        tags: ['n8n', 'DeepSeek', 'Agentic AI', 'PDF', 'Google Sheets'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Healthcare data import pipeline (ViaTrajectoire / TND) to MariaDB',
        description:
          'Designed and industrialized a Python pipeline: automated CSV archive ingestion, schema alignment, data cleaning, and handling duplicates and inconsistencies. Deployed and executed on a Linux server, with environment preparation and delivery of a production-ready Python script.',
        tags: ['Python', 'MariaDB', 'CSV', 'ETL', 'Linux'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Automated AI advertising video generation pipeline',
        description:
          'Combined API calls to fal.ai for video creation and ChatGPT (OpenAI API) for automatic marketing titles. n8n-orchestrated workflow: async execution, video delivery to Google Drive, and results updates in Google Sheets, with a focus on scalability and cost optimization.',
        tags: ['fal.ai', 'ChatGPT', 'OpenAI API', 'n8n', 'Google Drive', 'Google Sheets'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'AI automation for e-commerce visual production',
        description:
          'Automated workflow to generate marketing visuals from product data using generative AI APIs (Google AI Studio - Gemini Imagen). Full orchestration with n8n: data ingestion via Google Sheets, API calls, async processing, image storage in Google Drive, and automatic result updates. Goal: produce realistic product renders at scale to optimize visual quality and marketing performance.',
        tags: ['Google AI Studio', 'Gemini Imagen', 'n8n', 'Google Sheets', 'Google Drive', 'E-commerce'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'AI pipeline automation for image generation and editing',
        description:
          'Automated workflows with n8n integrating secure REST API calls (POST) to Google AI Studio to use the Nano Banana Pro model with API key management. Built a web form to capture the source image and user prompt, convert files to Base64, and handle multiple images in a single flow. End-to-end orchestration of generation, editing, and delivery of usable image files, optimizing AI asset production in structured workflows.',
        tags: ['n8n', 'Google AI Studio', 'Nano Banana Pro', 'REST API', 'Base64', 'AI Images'],
        repo: '#',
        demo: '#'
      },
      {
        title: '"Aide-moi" web app + Agentic AI',
        description:
          'Smart assistance web app based on problem descriptions. The frontend (React, Vite, TypeScript) triggers POST requests to local n8n webhooks, securely exposed via Cloudflare Tunnel. Data is processed by an n8n workflow orchestrating an Agentic AI (DeepSeek Chat Model), then returned synchronously via the "Respond to Webhook" mechanism. The project covers UX, HTTP integration, controlled exposure of local services, and network issues (CORS, HTTP methods, tunnels).',
        tags: ['React', 'TypeScript', 'n8n', 'Cloudflare Tunnel', 'DeepSeek'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Conversational Agentic AI on Telegram',
        description:
          'Designed and deployed an Agentic AI on Telegram, orchestrated via n8n, capable of understanding complex requests, retrieving real-time information (ERP API), and executing actions via external tools (Google APIs, automations). Webhook-based architecture with LLM integration (Grok API) and decision workflows, demonstrating the difference between a passive chatbot and an action-oriented intelligent agent.',
        tags: ['Telegram', 'n8n', 'Grok API', 'Webhooks', 'Automation'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Advanced Supervised Learning',
        description: 'From-scratch implementation of decision trees and random forests, including evaluation and benchmarking.',
        tags: ['Python', 'ML', 'Decision Trees', 'Random Forests'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'DBLP Community Detection',
        description: 'Graph analysis and visualization to uncover researcher communities and interactions.',
        tags: ['Graphs', 'Visualization', 'Python'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Clustering & Multidimensional Analysis',
        description: 'PCA and unsupervised clustering on automotive data to identify segments.',
        tags: ['PCA', 'Clustering', 'Multivariate Analysis'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'SAS Project – World Happiness Report',
        description: 'Statistical exploration and reporting on global happiness data with contextual insights.',
        tags: ['SAS', 'Statistics', 'BI'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Simple Data Analysis Project',
        description: 'Exploratory analysis pipeline with summary insights for multivariate datasets.',
        tags: ['EDA', 'Python', 'Pandas'],
        repo: '#',
        demo: '#'
      },
      {
        title: 'Bachelor Capstone – Quiz Game',
        description: 'Interactive quiz application with scoring logic, question bank, and simple analytics.',
        tags: ['Fullstack', 'UX', 'Data'],
        repo: '#',
        demo: '#'
      }
    ]
  },
  research: {
    title: 'Research',
    subtitle: 'Focus on semantic analysis and structuring complex data.',
    items: [
      {
        title: 'Semantic-based categorization of scientific papers',
        description: 'Semantic analysis methods to structure scientific corpora and support thematic discovery.',
        paper: '#',
        repo: '#'
      },
      {
        title: 'Co-clustering of spatio-temporal data',
        description: 'Co-clustering approach to understand complex spatial and temporal dynamics.',
        paper: '#',
        repo: '#'
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let’s talk about AI projects, data products, or collaborations.',
    cards: [
      {
        label: 'Email',
        value: 'libasselaye01@gmail.com',
        href: 'mailto:libasselaye01@gmail.com'
      },
      {
        label: 'Phone',
        value: '+33 6 51 98 36 14',
        href: 'tel:+33651983614'
      },
      {
        label: 'Location',
        value: 'Toulon, France'
      }
    ],
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mame-libasse-mboup-3a26871a0/' },
      { label: 'GitHub', href: 'https://github.com/libasselaye' }
    ]
  },
  write: {
    title: 'Write me',
    subtitle: 'A message is enough to start the conversation.',
    fields: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message'
    },
    subject: 'Portfolio contact',
    submit: 'Send message',
    helper: 'The form opens your default email client. n8n integration can be enabled later.'
  },
  footer: {
    text: '© 2026 Mame Libasse Mboup. All rights reserved.',
    marquee: "Let's build Together"
  },
  ui: {
    themeToggle: 'Toggle theme',
    menuToggle: 'Toggle menu',
    heroProfile: {
      kicker: 'Profile',
      title: 'Applied data engineering',
      labels: {
        company: 'Company',
        location: 'Location',
        email: 'Email',
        phone: 'Phone'
      },
      tags: ['Data Science', 'Machine Learning', 'Data Engineering', 'AI Automation', 'Agentic AI']
    },
    sectionKickers: {
      profile: 'Profile',
      experience: 'Experience',
      timeline: 'Timeline',
      skills: 'Skills',
      work: 'Work',
      papers: 'Papers',
      details: 'Details',
      message: 'Message'
    },
    strengthsTitle: 'Key strengths',
    writeCardTitle: 'Let’s talk about your project',
    buttons: {
      repo: 'Repo',
      demo: 'Demo',
      paper: 'Paper'
    }
  }
};
