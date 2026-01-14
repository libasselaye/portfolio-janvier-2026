export type NavItem = {
  id: string;
  label: string;
};

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  location?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export type ExpertiseCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo: string;
};

export type ResearchItem = {
  title: string;
  description: string;
  paper: string;
  repo: string;
};

export type ContactCard = {
  label: string;
  value: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Content = {
  lang: 'fr' | 'en';
  seo: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  identity: {
    name: string;
    role: string;
    company: string;
    location: string;
    email: string;
    phone: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaCv: string;
    cvUrl: string;
    status: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    highlights: string[];
  };
  curriculum: {
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  expertise: {
    title: string;
    subtitle: string;
    categories: ExpertiseCategory[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  research: {
    title: string;
    subtitle: string;
    items: ResearchItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    cards: ContactCard[];
    socials: SocialLink[];
  };
  write: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    subject: string;
    submit: string;
    helper: string;
  };
  footer: {
    text: string;
  };
  ui: {
    themeToggle: string;
    menuToggle: string;
    heroProfile: {
      kicker: string;
      title: string;
      labels: {
        company: string;
        location: string;
        email: string;
        phone: string;
      };
      tags: string[];
    };
    sectionKickers: {
      profile: string;
      experience: string;
      timeline: string;
      skills: string;
      work: string;
      papers: string;
      details: string;
      message: string;
    };
    strengthsTitle: string;
    writeCardTitle: string;
    buttons: {
      repo: string;
      demo: string;
      paper: string;
    };
  };
};
