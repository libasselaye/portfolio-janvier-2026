import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Arrow,
  Modal,
  ProductVisual,
  SectionLabel,
  Monogram,
  NetworkIcon,
  ChatIcon,
} from "./components/EditorialUI";
import ScrollProgress from "./components/ScrollProgress";
import PersonalStories from "./components/PersonalStories";
import { contentFr } from "./content/fr";
import { contentEn } from "./content/en";
import {
  editorial,
  featured,
  projectCategory,
  projectOrder,
  type ProjectCategory,
} from "./content/editorial";
import useActiveSection from "./hooks/useActiveSection";
const assets = `${import.meta.env.BASE_URL}photos/optimized/`;
const sectionIds = ["experience", "expertise", "projects", "about"];
const categories: ProjectCategory[] = ["all", "product", "ai", "data"];
const gallery = ["quotidien.jpg", "atelier.jpg", "diplome.jpg"];
const externalLink = (href: string) => /^https?:\/\//.test(href);
const storedPreference = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const savePreference = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Preferences are optional in private browsing. */
  }
};
export default function App() {
  const [language, setLanguage] = useState<"fr" | "en">(() =>
    storedPreference("language") === "en" ? "en" : "fr",
  );
  const [theme, setTheme] = useState(() =>
    storedPreference("editorial-theme") === "dark" ? "dark" : "light",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [photo, setPhoto] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<
    {
      role: "user" | "assistant";
      text: string;
    }[]
  >([]);
  const [chatStatus, setChatStatus] = useState<"idle" | "loading" | "error">(
    "idle",
  );
  const [sessionId] = useState(() => crypto.randomUUID());
  const chatEnd = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  const content = language === "fr" ? contentFr : contentEn;
  const t = editorial[language];
  const en = language === "en";
  const activeId = useActiveSection([
    "hero",
    ...sectionIds,
    "personal",
    "contact",
  ]);
  const cvHref = `${import.meta.env.BASE_URL}${content.hero.cvUrl}`;
  const matching = projectOrder.filter(
    (index) => filter === "all" || projectCategory(index) === filter,
  );
  const displayed =
    showAll || filter !== "all" ? matching : matching.slice(0, 4);
  const project =
    selectedProject === null ? null : content.projects.items[selectedProject];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.seo.description);
    savePreference("language", language);
  }, [language, content.seo]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.remove("dark");
    savePreference("editorial-theme", theme);
  }, [theme]);
  useEffect(() => {
    chatEnd.current?.scrollIntoView({ block: "nearest" });
  }, [messages, chatStatus, chatOpen]);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  useEffect(() => {
    const block = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("img, video")) {
        event.preventDefault();
      }
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const resize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [menuOpen]);
  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    setStatus("loading");
    try {
      if (!import.meta.env.VITE_WEBHOOK_URL)
        throw new Error("Contact unavailable");
      const response = await fetch(import.meta.env.VITE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  async function sendChat(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = chatInput.trim();
    if (!question || chatStatus === "loading") return;
    setMessages((previous) => [...previous, { role: "user", text: question }]);
    setChatInput("");
    setChatStatus("loading");
    try {
      if (!import.meta.env.VITE_CHAT_WEBHOOK_URL)
        throw new Error("Assistant unavailable");
      const response = await fetch(import.meta.env.VITE_CHAT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId,
          chatInput: question,
        }),
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error("Assistant unavailable");
      const data = await response.json();
      const result = Array.isArray(data) ? data[0] : data;
      const answer = result?.output ?? result?.text;
      if (typeof answer !== "string" || !answer.trim())
        throw new Error("Empty response");
      setMessages((previous) => [
        ...previous,
        { role: "assistant", text: answer },
      ]);
      setChatStatus("idle");
    } catch {
      setChatStatus("error");
    }
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(content.identity.email);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus("idle"), 3500);
  }
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <ScrollProgress />
      <header className="site-header">
        <div className="header-inner page-width">
          <a
            href="#hero"
            className="wordmark"
            aria-label={en ? "Libasse — home" : "Libasse — accueil"}
          >
            libasse<span aria-hidden="true">.</span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={en ? "Main navigation" : "Navigation principale"}
          >
            {sectionIds.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeId === id ? "location" : undefined}
              >
                {t.nav[i]}
                <span className="nav-dot" />
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-switch"
              aria-label={en ? "Language" : "Langue"}
            >
              {(["fr", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  aria-label={lang === "fr" ? "Français" : "English"}
                  aria-pressed={language === lang}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              className="icon-button theme-button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={t.theme}
              aria-pressed={theme === "dark"}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" />
              </svg>
            </button>
            <a href="#contact" className="header-contact">
              {t.contact} <Arrow diagonal />
            </a>
            <button
              className="menu-toggle icon-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t.close : t.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                "×"
              ) : (
                <span>
                  <i />
                  <i />
                </span>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label={en ? "Mobile navigation" : "Navigation mobile"}
          >
            {[...sectionIds, "contact"].map((id, i) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {i < 4 ? t.nav[i] : "Contact"}
                <Arrow diagonal />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="hero" className="hero page-width">
          <div className="hero-topline">
            <p className="hero-role">
              {en
                ? "Data Scientist & AI Engineer"
                : "Data Scientist & Ingénieur IA"}
            </p>
            <span className="availability">
              <i />
              {t.available}
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                {t.heroLines[0]}
                <br />
                {t.heroLines[1]}
                <br />
                <em>{t.heroLines[2]}</em>
              </h1>
              <div className="hero-intro">
                {t.intro.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="hero-cta">
                <a className="button button-dark" href="#projects">
                  {t.seeProjects}
                  <Arrow diagonal />
                </a>
                <a
                  className="button button-outline hero-cv"
                  href={cvHref}
                  download={content.hero.cvUrl}
                >
                  {t.downloadCv}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="portrait-composition">
              <div className="portrait-outline" />
              <figure className="portrait">
                <img
                  src={`${assets}portrait.jpg`}
                  width="1042"
                  height="1300"
                  alt={
                    en
                      ? "Portrait of Mame Libasse Mboup against a copper background"
                      : "Portrait de Mame Libasse Mboup sur fond cuivre"
                  }
                  fetchPriority="high"
                />
                <figcaption>
                  <span>Mame Libasse Mboup</span>
                  <small>
                    {en
                      ? "Data scientist at BPCE-SI"
                      : "Data scientist chez BPCE-SI"}
                  </small>
                  <Arrow diagonal />
                </figcaption>
              </figure>
              <span className="portrait-side">
                {t.location} <span>43° N / 05° E</span>
              </span>
              <div className="portrait-stamp">
                <Monogram />
                <span>
                  {en ? "DATA, AI" : "DATA, IA"}
                  <br />
                  {en ? "& HUMAN" : "& HUMAIN"}
                </span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#experience" className="scroll-hint">
              <span>↓</span>
              {t.scroll}
            </a>
            <p>{t.portrait}</p>
            <span className="edition">PORTFOLIO — 2026</span>
          </div>
        </section>

        <div className="experience-strip">
          <div className="page-width trust-inner">
            <p className="eyebrow">{t.experienceLabel}</p>
            <div className="company-marks">
              <a
                className="company-logo company-logo-bpce"
                href="https://www.groupebpce.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}logos/groupe-bpce.png`}
                  alt="Groupe BPCE"
                  width="1219"
                  height="178"
                  decoding="async"
                />
              </a>
              <a
                className="company-logo company-logo-iess"
                href="https://iess.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}logos/innovation-esante-sud.svg`}
                  alt="Innovation e-Santé Sud"
                  width="200"
                  height="100"
                  decoding="async"
                />
              </a>
              <a
                className="company-logo company-logo-orange"
                href="https://www.orange.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}logos/orange.svg`}
                  alt="Orange"
                  width="50"
                  height="50"
                  decoding="async"
                />
              </a>
              <a
                className="company-logo company-logo-enedis"
                href="https://www.enedis.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}logos/enedis.svg`}
                  alt="Enedis"
                  width="149"
                  height="30"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>

        <section
          id="experience"
          className="career-section section-space page-width"
        >
          <SectionLabel number="01">{t.careerKicker}</SectionLabel>
          <div className="section-heading">
            <h2>
              {t.careerTitle}
              <br />
              <em>{t.careerItalic}</em>
            </h2>
            <div className="career-overview">
              <p>{content.experience.subtitle}</p>
              <a className="text-link" href="#curriculum">
                {t.educationLink} <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="career-list">
            {content.experience.items.map((item, i) => (
              <details
                className="career-item"
                key={`${language}-${item.company}`}
                open={i === 0 ? true : undefined}
              >
                <summary>
                  <span className="career-number">0{i + 1}</span>
                  <div className="career-company">
                    <h3>{item.company.split(" (")[0]}</h3>
                    <span>{item.role}</span>
                  </div>
                  <span className="career-period">
                    {i === 0 && <i className="current-dot" />}
                    {item.period}
                  </span>
                  <span className="disclosure-symbol" />
                </summary>
                <div className="career-details">
                  <p className="eyebrow">{item.location}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <section
            id="curriculum"
            className="education"
            aria-labelledby="education-title"
          >
            <div className="education-heading">
              <div>
                <span className="eyebrow">{t.educationHint}</span>
                <h3 id="education-title">
                  {t.education}
                  <em>.</em>
                </h3>
              </div>
              <p>{content.curriculum.subtitle}</p>
            </div>
            <ol className="education-content">
              {content.curriculum.items.map((item, i) => (
                <li
                  key={item.title}
                  className={i === 0 ? "education-featured" : undefined}
                >
                  <span className="eyebrow">{item.period}</span>
                  <h4>{item.title}</h4>
                  <p>{item.org}</p>
                </li>
              ))}
            </ol>
          </section>
        </section>

        <section id="expertise" className="expertise-section section-space">
          <div className="page-width expertise-grid">
            <div className="expertise-intro">
              <SectionLabel number="02">{t.expertiseKicker}</SectionLabel>
              <h2>
                {t.expertiseTitle}
                <br />
                <em>{t.expertiseItalic}</em>
              </h2>
              <p>{t.expertiseText}</p>
              <NetworkIcon className="expertise-network" />
            </div>
            <div className="expertise-list">
              {content.expertise.categories.map((category, i) => (
                <div className="expertise-item" key={category.title}>
                  <span className="eyebrow">0{i + 1}</span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{t.expertiseDescriptions[i]}</p>
                    <div className="expertise-tags">
                      {category.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <Arrow diagonal />
                </div>
              ))}
            </div>
          </div>
          <div id="research" className="page-width research-block">
            <h3>{t.research}</h3>
            {content.research.items.map((item) => (
              <details key={item.title}>
                <summary>
                  {item.title}
                  <span className="disclosure-symbol" />
                </summary>
                <p>{item.description}</p>
                <small>{t.researchNote}</small>
                {externalLink(item.paper) && (
                  <a
                    className="text-link"
                    href={item.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {en ? "Read the paper" : "Lire le document"}
                    <Arrow diagonal />
                  </a>
                )}
              </details>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="work-section page-width section-space"
        >
          <SectionLabel number="03">{t.workKicker}</SectionLabel>
          <div className="section-heading">
            <h2>
              {t.workTitle}
              <br />
              <em>{t.workItalic}</em>
            </h2>
            <p>{t.workDescription}</p>
          </div>
          <div className="project-toolbar">
            <div
              className="project-filters"
              aria-label={en ? "Filter projects" : "Filtrer les projets"}
            >
              {categories.map((category, i) => (
                <button
                  key={category}
                  aria-pressed={filter === category}
                  onClick={() => {
                    setFilter(category);
                    setShowAll(false);
                  }}
                >
                  {t.filters[i]}
                  <sup>
                    {category === "all"
                      ? projectOrder.length
                      : projectOrder.filter(
                          (index) => projectCategory(index) === category,
                        ).length}
                  </sup>
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(displayed.length).padStart(2, "0")} /{" "}
              {String(matching.length).padStart(2, "0")}
            </span>
          </div>
          <div className="project-grid">
            {displayed.map((index) => {
              const item = content.projects.items[index];
              const design = featured[index];
              return (
                <article
                  key={index}
                  className={`project-card ${design ? "" : "project-card-compact"}`}
                >
                  <button
                    className="project-open"
                    onClick={() => setSelectedProject(index)}
                    aria-label={`${t.details} : ${design?.name ?? item.title}`}
                  >
                    {design ? (
                      <div className="project-art">
                        <ProductVisual kind={design.kind} en={en} />
                        <span className="project-hover-arrow">
                          <Arrow diagonal />
                        </span>
                      </div>
                    ) : (
                      <div className="compact-project-top">
                        <span className="eyebrow">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {
                            t.filters[
                              categories.indexOf(projectCategory(index))
                            ]
                          }
                        </span>
                        <Arrow diagonal />
                      </div>
                    )}
                    <div className="project-info">
                      <div>
                        <p className="project-discipline">
                          {design
                            ? design.tags
                                .map((tag) =>
                                  en && tag === "Agents IA" ? "AI agents" : tag,
                                )
                                .join(" / ")
                            : item.tags.slice(0, 3).join(" / ")}
                        </p>
                        <h3>{design?.name ?? item.title.split(" - ")[0]}</h3>
                        {design && (
                          <p className="project-subtitle">{design[language]}</p>
                        )}
                      </div>
                      {design && (
                        <span className="project-link-arrow">
                          <Arrow diagonal />
                        </span>
                      )}
                    </div>
                    {!design && (
                      <p className="compact-project-description">
                        {item.description}
                      </p>
                    )}
                  </button>
                </article>
              );
            })}
          </div>
          <div className="projects-bottom">
            <span>{t.illustration}</span>
            {filter === "all" && (
              <button
                className="button button-outline"
                aria-expanded={showAll}
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? t.fewerProjects : t.allProjects}
                <span aria-hidden="true">{showAll ? "−" : "+"}</span>
              </button>
            )}
          </div>
        </section>

        <section id="about" className="about-section section-space">
          <div className="page-width about-grid">
            <div className="about-photo-column">
              <div className="about-image">
                <img
                  key={photo}
                  src={`${assets}${gallery[photo]}`}
                  alt={t.galleryAlt[photo]}
                  width="900"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className={`gallery-photo gallery-photo-${photo}`}
                />
                <span className="photo-corner">MAME LIBASSE MBOUP</span>
              </div>
              <div
                className="gallery-controls"
                aria-label={en ? "Photo selection" : "Sélection de photos"}
              >
                {t.galleryLabels.map((label, i) => (
                  <button
                    key={label}
                    aria-pressed={photo === i}
                    onClick={() => setPhoto(i)}
                  >
                    <span>0{i + 1}</span>
                    {label}
                  </button>
                ))}
              </div>
              <p className="photo-caption" aria-live="polite">
                {t.galleryCaptions[photo]}
              </p>
            </div>
            <div className="about-copy">
              <SectionLabel number="04">{t.aboutKicker}</SectionLabel>
              <h2>
                {t.aboutTitle}
                <br />
                <em>{t.aboutItalic}</em>
              </h2>
              <p className="about-lead">{t.aboutLead}</p>
              <p>{t.aboutText}</p>
              <p>{t.aboutPersonal}</p>
              <a className="personal-jump" href="#personal">
                {en
                  ? "PSG & weight training in photos"
                  : "Le PSG & la musculation en images"}
                <Arrow diagonal />
              </a>
              <div className="about-facts">
                <div>
                  <strong>2021</strong>
                  <span>
                    {en ? "Started working in data" : "Début dans la data"}
                  </span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>{en ? "Industry sectors" : "Secteurs d’activité"}</span>
                </div>
                <div>
                  <strong>2022</strong>
                  <span>
                    {en
                      ? "Master’s in machine learning"
                      : "Master en machine learning"}
                  </span>
                </div>
              </div>
              <a
                className="text-link"
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cv}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="page-width about-offer">
            <div className="offer-heading">
              <div>
                <p className="eyebrow">{t.servicesKicker}</p>
                <h3>{t.servicesTitle}</h3>
              </div>
              <p>{t.servicesIntro}</p>
            </div>
            <div className="service-grid">
              {t.services.map((service, i) => (
                <article className="service-item" key={service.title}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
            <a className="button button-dark" href="#contact">
              {t.servicesCta} <Arrow diagonal />
            </a>
            <section
              className="teaching-block"
              aria-labelledby="teaching-title"
            >
              <div className="teaching-intro">
                <p className="eyebrow">{t.teachingKicker}</p>
                <h3 id="teaching-title">{t.teachingTitle}</h3>
                <p>{t.teachingIntro}</p>
                <a className="text-link" href="#contact">
                  {t.teachingCta} <Arrow diagonal />
                </a>
              </div>
              <div className="teaching-audiences">
                {t.teachingAudiences.map((audience) => (
                  <article key={audience.title}>
                    <h4>{audience.title}</h4>
                    <p>{audience.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <PersonalStories
          language={language}
          onOpenNutritionProject={() => setSelectedProject(1)}
        />

        <section
          id="contact"
          className="contact-section page-width section-space"
        >
          <SectionLabel number="06">{t.contactKicker}</SectionLabel>
          <div className="contact-grid">
            <div>
              <h2>
                {t.contactTitle}
                <br />
                <em>{t.contactItalic}</em>
              </h2>
              <p className="contact-intro">{t.contactText}</p>
              <div className="contact-email">
                <a href={`mailto:${content.identity.email}`}>
                  {content.identity.email}
                  <Arrow diagonal />
                </a>
                <button
                  className="icon-button copy-button"
                  onClick={copyEmail}
                  aria-label={t.copy}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="8" y="8" width="12" height="12" rx="2" />
                    <path d="M15 8V4H4v11h4" />
                  </svg>
                </button>
              </div>
              <p className="copy-status" role="status">
                {copyStatus === "success"
                  ? t.copied
                  : copyStatus === "error"
                    ? t.copyError
                    : "\u00a0"}
              </p>
              <div className="contact-links">
                {content.contact.socials.map((social) => (
                  <a
                    className="text-link"
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                    <Arrow diagonal />
                  </a>
                ))}
                <a className="text-link" href="tel:+33651983614">
                  {content.identity.phone}
                  <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="contact-aside">
              <Monogram className="contact-monogram" />
              <div>
                <span className="availability">
                  <i />
                  {t.available}
                </span>
                <p>{t.location}</p>
                <button
                  className="button button-dark"
                  onClick={() => setFormOpen(true)}
                >
                  {t.write}
                  <Arrow diagonal />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <a href="#hero" className="wordmark">
          libasse<span aria-hidden="true">.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Mame Libasse Mboup
          <br />
          <span>{t.footer}</span>
        </p>
        <a className="back-top" href="#hero">
          {t.backTop}
          <span>↑</span>
        </a>
      </footer>
      <button
        className="assistant-launcher"
        onClick={() => setChatOpen(true)}
        aria-haspopup="dialog"
        aria-label={t.chatLabel}
      >
        <ChatIcon />
        <span className="assistant-full-label">{t.chatLabel}</span>
        <span className="assistant-short-label" aria-hidden="true">
          LibasseAI
        </span>
        <span className="assistant-status" />
      </button>

      {project && selectedProject !== null && (
        <Modal
          title={featured[selectedProject]?.name ?? project.title}
          closeLabel={t.close}
          onClose={() => setSelectedProject(null)}
        >
          {featured[selectedProject] && (
            <ProductVisual kind={featured[selectedProject].kind} en={en} />
          )}
          <div className="modal-content">
            <p className="eyebrow">{t.projectAbout}</p>
            <h2>{featured[selectedProject]?.name ?? project.title}</h2>
            <div className="project-full-description">
              {project.description.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h3>{t.stack}</h3>
            <div className="detail-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="modal-links">
              {externalLink(project.demo) && (
                <a
                  className="button button-dark"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.demo}
                  <Arrow diagonal />
                </a>
              )}
              {externalLink(project.repo) && (
                <a
                  className="button button-outline"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.source}
                  <Arrow diagonal />
                </a>
              )}
              {!externalLink(project.demo) && !externalLink(project.repo) && (
                <>
                  <p>{t.privateProject}</p>
                  <a
                    className="button button-dark"
                    href={`mailto:${content.identity.email}?subject=${encodeURIComponent(project.title)}`}
                  >
                    {t.discuss}
                    <Arrow diagonal />
                  </a>
                </>
              )}
            </div>
          </div>
        </Modal>
      )}

      {formOpen && (
        <Modal
          title={t.write}
          closeLabel={t.close}
          onClose={() => setFormOpen(false)}
          className="contact-modal"
        >
          <div className="modal-content">
            <SectionLabel number="06">{t.contactKicker}</SectionLabel>
            <h2>
              {t.write}
              <em>.</em>
            </h2>
            <form onSubmit={submitContact} className="contact-form">
              <label htmlFor="name">{content.write.fields.name}</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={120}
              />
              <label htmlFor="email">{content.write.fields.email}</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
              />
              <label htmlFor="message">{content.write.fields.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={6000}
              />
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="button button-dark"
                disabled={status === "loading"}
              >
                {status === "loading" ? t.sending : content.write.submit}
                <Arrow diagonal />
              </button>
              <p role="status" className={`form-status status-${status}`}>
                {status === "success"
                  ? t.success
                  : status === "error"
                    ? t.error
                    : ""}
              </p>
              <a
                className="form-fallback"
                href={`mailto:${content.identity.email}`}
              >
                {t.mailFallback}
              </a>
            </form>
          </div>
        </Modal>
      )}

      {chatOpen && (
        <Modal
          title="LibasseAI"
          closeLabel={t.close}
          onClose={() => setChatOpen(false)}
          className="chat-modal"
        >
          <div className="chat-heading">
            <ChatIcon />
            <div>
              <h2>LibasseAI</h2>
              <span>
                {en
                  ? "Questions about my work and projects"
                  : "Questions sur mon parcours et mes projets"}
              </span>
            </div>
          </div>
          <div className="chat-messages" role="log" aria-live="polite">
            <p className="chat-bubble assistant">{t.chatIntro}</p>
            {messages.map((message, i) => (
              <p key={i} className={`chat-bubble ${message.role}`}>
                {message.text}
              </p>
            ))}
            {chatStatus === "loading" && (
              <p className="chat-state">{t.chatThinking}</p>
            )}
            {chatStatus === "error" && (
              <p className="chat-state">
                {t.chatError}{" "}
                <a href={`mailto:${content.identity.email}`}>Email ↗</a>
              </p>
            )}
            <div ref={chatEnd} />
          </div>
          {messages.length === 0 && (
            <div className="chat-suggestions">
              {t.chatSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setChatInput(suggestion)}
                >
                  {suggestion}
                  <Arrow />
                </button>
              ))}
            </div>
          )}
          <form onSubmit={sendChat} className="chat-form">
            <label className="sr-only" htmlFor="chat-question">
              {t.chatPlaceholder}
            </label>
            <input
              id="chat-question"
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              placeholder={t.chatPlaceholder}
              maxLength={2000}
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="icon-button"
              aria-label={t.chatSend}
              disabled={!chatInput.trim() || chatStatus === "loading"}
            >
              <Arrow />
            </button>
          </form>
          <p className="chat-note">{t.chatNote}</p>
        </Modal>
      )}
    </>
  );
}
