import { useEffect, useMemo, useState } from 'react';
import ActionLink from './components/ActionLink';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import Section from './components/Section';
import Tag from './components/Tag';
import Timeline from './components/Timeline';
import { contentEn } from './content/en';
import { contentFr } from './content/fr';
import type { Content } from './content/types';
import useActiveSection from './hooks/useActiveSection';
import type { Theme } from './components/ThemeToggle';

const contentByLang: Record<'fr' | 'en', Content> = {
  fr: contentFr,
  en: contentEn
};

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

const defaultTheme: Theme = 'dark';

export default function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>(() => {
    if (typeof window === 'undefined') return 'fr';
    const stored = window.localStorage.getItem('language');
    return stored === 'en' ? 'en' : 'fr';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    const stored = window.localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : defaultTheme;
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const content = useMemo(() => contentByLang[language], [language]);
  const activeId = useActiveSection(content.nav.map((item) => item.id));

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', content.seo.description);
    }
  }, [language, content.seo.description, content.seo.title]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('language', language);
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: language }));
  }, [language]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    setSubmitStatus('loading');

    if (!WEBHOOK_URL) {
      setSubmitStatus('error');
      return;
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const cvHref = `${import.meta.env.BASE_URL}${content.hero.cvUrl.replace(/^\//, '')}`;

  return (
    <div className="relative min-h-screen bg-canvas text-text">
      <div className="gradient-mesh" />
      <div className="noise-layer" />

      <Navbar
        navItems={content.nav}
        activeId={activeId}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        themeLabel={content.ui.themeToggle}
        menuLabel={content.ui.menuToggle}
      />

      <main className="relative z-10">
        <section id="hero" className="scroll-mt-28">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 lg:items-start lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="space-y-8">
                <span className="badge">{content.hero.status}</span>
                <div className="space-y-3">
                  <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                    {content.identity.name}
                  </h1>
                  <p className="text-base font-medium text-muted">{content.identity.role}</p>
                </div>
                <p className="max-w-xl text-base text-muted">
                  {content.hero.headline}
                </p>
                {content.hero.subheadline ? (
                  <p className="max-w-xl text-sm text-muted">{content.hero.subheadline}</p>
                ) : null}
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="btn-primary">
                    {content.hero.ctaProjects}
                  </a>
                  <a
                    href={encodeURI(cvHref)}
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {content.hero.ctaCv}
                  </a>
                </div>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-text"
                >
                  <span className="text-base">↓</span>
                  {content.hero.scrollHint}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Card className="glass space-y-5 lg:mt-14 lg:self-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{content.ui.heroProfile.kicker}</p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold">
                    {content.ui.heroProfile.title}
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-muted">
                  <div className="flex items-center justify-between gap-3">
                    <span>{content.ui.heroProfile.labels.company}</span>
                    <span className="text-text">{content.identity.company}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>{content.ui.heroProfile.labels.location}</span>
                    <span className="text-text">{content.identity.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.ui.heroProfile.tags.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <Section
          id="about"
          title={content.about.title}
          subtitle={content.about.subtitle}
          kicker={content.ui.sectionKickers.profile}
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {content.about.paragraphs.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p className="text-base text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Card className="glass">
              <h3 className="font-heading text-xl font-semibold">{content.ui.strengthsTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {content.about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section
          id="experience"
          title={content.experience.title}
          subtitle={content.experience.subtitle}
          kicker={content.ui.sectionKickers.experience}
        >
          <div className="space-y-6">
            {content.experience.items.map((item, index) => (
              <Reveal key={`${item.role}-${item.company}`} delay={index * 0.05}>
                <Card className="glass">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.company}</p>
                      <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-muted">{item.location}</p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="curriculum"
          title={content.curriculum.title}
          subtitle={content.curriculum.subtitle}
          kicker={content.ui.sectionKickers.timeline}
        >
          <Reveal>
            <Timeline items={content.curriculum.items} />
          </Reveal>
        </Section>

        <Section
          id="expertise"
          title={content.expertise.title}
          subtitle={content.expertise.subtitle}
          kicker={content.ui.sectionKickers.skills}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {content.expertise.categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.05}>
                <Card className="glass flex h-full flex-col space-y-4">
                  <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title={content.projects.title}
          subtitle={content.projects.subtitle}
          kicker={content.ui.sectionKickers.work}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {content.projects.items.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <Card className="glass flex h-full flex-col">
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted">{project.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <ActionLink href={project.repo} target="_blank" rel="noreferrer">
                      {content.ui.buttons.repo}
                    </ActionLink>
                    <ActionLink href={project.demo} target="_blank" rel="noreferrer">
                      {content.ui.buttons.demo}
                    </ActionLink>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div id="research" className="scroll-mt-28 pt-14">
            <Reveal>
              <div className="space-y-3">
                <p className="section-kicker">{content.ui.sectionKickers.papers}</p>
                <h3 className="font-heading text-2xl font-semibold">{content.research.title}</h3>
                <p className="max-w-3xl text-muted">{content.research.subtitle}</p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {content.research.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <Card className="glass flex h-full flex-col">
                    <div className="space-y-3">
                      <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <ActionLink href={item.paper} target="_blank" rel="noreferrer">
                        {content.ui.buttons.paper}
                      </ActionLink>
                      <ActionLink href={item.repo} target="_blank" rel="noreferrer">
                        {content.ui.buttons.repo}
                      </ActionLink>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          title={content.contact.title}
          subtitle={content.contact.subtitle}
          kicker={content.ui.sectionKickers.details}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {content.contact.cards.map((card, index) => (
                  <Reveal key={card.label} delay={index * 0.05}>
                    <Card className="glass">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">{card.label}</p>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="mt-3 block text-base font-semibold text-text"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="mt-3 text-base font-semibold text-text">{card.value}</p>
                      )}
                    </Card>
                  </Reveal>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {content.contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div id="write" className="scroll-mt-28">
              <Card className="glass space-y-6">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-semibold">{content.write.title}</h3>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <label className="sr-only" htmlFor="name">
                    {content.write.fields.name}
                  </label>
                  <input
                    className="input-field"
                    id="name"
                    name="name"
                    placeholder={content.write.fields.name}
                    required
                  />
                  <label className="sr-only" htmlFor="email">
                    {content.write.fields.email}
                  </label>
                  <input
                    className="input-field"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={content.write.fields.email}
                    required
                  />
                  <label className="sr-only" htmlFor="message">
                    {content.write.fields.message}
                  </label>
                  <textarea
                    className="input-field min-h-[160px]"
                    id="message"
                    name="message"
                    placeholder={content.write.fields.message}
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={submitStatus === 'loading'}
                  >
                    {content.write.submit}
                  </button>
                </form>
                {submitStatus === 'success' ? (
                  <p className="text-sm text-accent">Message envoyé</p>
                ) : null}
                {submitStatus === 'error' ? (
                  <p className="text-sm text-red-400">
                    Erreur lors de l’envoi, veuillez réessayer
                  </p>
                ) : null}
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer text={content.footer.text} marquee={content.footer.marquee} />
    </div>
  );
}
