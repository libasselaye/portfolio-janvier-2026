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
    role: 'Data Scientist / Machine Learning Engineer',
    company: 'Innovation e-Santé Sud',
    location: 'Toulon, France',
    email: 'libasselaye01@gmail.com',
    phone: '+33 6 51 98 36 14'
  },
  hero: {
    headline: 'Turning data into reliable, useful, and measurable AI decisions.',
    subheadline:
      'Data Scientist & ML Engineer at Innovation e-Santé Sud. I design pipelines and models that connect scientific rigor, business impact, and clear storytelling.',
    ctaProjects: 'View my projects',
    ctaCv: 'View my CV',
    cvUrl: 'cv_libasse.pdf',
    status: 'Open to data product and applied AI collaborations'
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
        org: 'Université Lyon Lumière',
        period: '2021–2022'
      },
      {
        title: 'Master 1 Computer Science',
        org: 'Université Lyon Lumière',
        period: '2020–2021'
      },
      {
        title: 'Bachelor in Computer Science',
        org: 'ULCO',
        period: '2018–2020'
      },
      {
        title: 'BSc Mathematics & Computer Science',
        org: 'Université de Thiès (UT), Senegal',
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
        title: 'Advanced Supervised Learning',
        description: 'From-scratch implementation of decision trees and random forests, including evaluation and benchmarking.',
        tags: ['Python', 'ML', 'Decision Trees', 'Random Forests'],
        repo: '#',
        demo: '#'
      },
      {
        title: "Bachelor Capstone – Quiz Game",
        description: 'Interactive quiz application with scoring logic, question bank, and simple analytics.',
        tags: ['Fullstack', 'UX', 'Data'],
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
        title: 'Clustering & Multidimensional Analysis',
        description: 'PCA and unsupervised clustering on automotive data to identify segments.',
        tags: ['PCA', 'Clustering', 'Multivariate Analysis'],
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
    text: '© 2026 Mame Libasse Mboup. All rights reserved.'
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
      tags: ['Data Science', 'Machine Learning', 'Data Engineering', 'Analytics', 'AI Automation']
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
