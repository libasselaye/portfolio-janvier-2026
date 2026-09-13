import { useState } from "react";
import "./ProductShowcase.css";

type Product = "calpilot" | "leadin" | "librain";

const base = `${import.meta.env.BASE_URL}projects/`;
const products = {
  calpilot: {
    name: "LibCalPilot",
    root: `${base}libcalpilot/`,
    cover: ["today", "stats"],
    taglineFr: "Manger, suivre, comprendre.",
    taglineEn: "Eat, track, understand.",
    titleFr: "Une journée, puis la tendance.",
    titleEn: "One day, then the trend.",
    screens: [
      { file: "today", fr: "La journée", en: "Today", textFr: "Repas, calories et macronutriments se lisent sur un même écran.", textEn: "Meals, calories and macronutrients come together on one screen." },
      { file: "stats", fr: "Les statistiques", en: "Statistics", textFr: "La semaine et l’évolution du poids donnent du recul sur les habitudes.", textEn: "Weekly figures and weight trends put everyday habits into perspective." },
      { file: "manual", fr: "L’ajout", en: "Adding food", textFr: "La saisie manuelle permet de préciser les quantités et les valeurs nutritionnelles.", textEn: "Manual entry keeps quantities and nutritional values under control." },
    ],
  },
  leadin: {
    name: "LibLeadIN",
    root: `${base}libleadin/`,
    cover: ["dashboard", "prospects"],
    taglineFr: "Chercher, qualifier, contacter.",
    taglineEn: "Find, qualify, contact.",
    titleFr: "De la recherche au suivi.",
    titleEn: "From search to follow-up.",
    screens: [
      { file: "dashboard", fr: "Le pilotage", en: "Dashboard", textFr: "Le tableau de bord rassemble le volume de prospects, les envois et l’activité récente.", textEn: "The dashboard brings prospect volume, outreach and recent activity together." },
      { file: "prospects", fr: "Les prospects", en: "Prospects", textFr: "La liste centralise les contacts, leur secteur, leur ville et l’état de la prise de contact.", textEn: "The list centralises contacts, sector, location and outreach status." },
      { file: "search", fr: "La recherche", en: "Search", textFr: "Le ciblage se règle par activité, zone, volume, langue et ton du message.", textEn: "Targeting is set by activity, location, volume, language and message tone." },
    ],
  },
  librain: {
    name: "LiBrain",
    root: `${base}librain/`,
    cover: ["overview", "calendar"],
    taglineFr: "Un message, quatre agents.",
    taglineEn: "One message, four agents.",
    titleFr: "Une demande, le bon agent.",
    titleEn: "One request, the right agent.",
    screens: [
      { file: "overview", fr: "L’assistant", en: "Assistant", textFr: "L’accueil rassemble les demandes et donne une vue rapide des emails, rendez-vous et dépenses.", textEn: "The home screen brings requests together with a quick view of emails, meetings and expenses." },
      { file: "emails", fr: "Les emails", en: "Emails", textFr: "L’agent email repère les messages prioritaires et prépare les réponses à valider.", textEn: "The email agent identifies priority messages and prepares replies for review." },
      { file: "calendar", fr: "Le calendrier", en: "Calendar", textFr: "L’agent calendrier vérifie les disponibilités et prépare les rendez-vous depuis la conversation.", textEn: "The calendar agent checks availability and prepares meetings from the conversation." },
    ],
  },
} as const;

export function ProductScreenshotCover({ product, en }: { product: Product; en: boolean }) {
  const item = products[product];
  return <div className={`product-visual screenshot-cover screenshot-cover-${product}`}>
    <div className="screenshot-cover-copy">
      <span className="eyebrow">{item.name} / {en ? "THE APPLICATION" : "L’APPLICATION"}</span>
      <strong>{en ? item.taglineEn : item.taglineFr}</strong>
      <small>{en ? "Real screenshots · Demo data" : "Captures réelles · Données de démo"}</small>
    </div>
    <div className="screenshot-cover-media" aria-hidden="true">
      {item.cover.map((file, index) => <img key={file} className={`cover-shot cover-shot-${index + 1}`} src={`${item.root}${file}.png`} alt="" loading="lazy" />)}
    </div>
  </div>;
}

export default function ProductShowcase({ product, en }: { product: Product; en: boolean }) {
  const [active, setActive] = useState(0);
  const item = products[product];
  const screen = item.screens[active];
  const mobile = product === "calpilot";

  return <section className={`screenshot-gallery screenshot-gallery-${product}`} aria-label={en ? `${item.name} screenshots` : `Captures de ${item.name}`}>
    <div className="screenshot-gallery-heading">
      <p className="eyebrow">{en ? "INSIDE THE APPLICATION" : "DANS L’APPLICATION"}</p>
      <h3>{en ? item.titleEn : item.titleFr}</h3>
      <p>{en ? "The real interface, with fictional data prepared for this presentation." : "L’interface réelle, avec des données fictives préparées pour cette présentation."}</p>
    </div>
    <div className="screenshot-gallery-tabs" aria-label={en ? "Choose a screen" : "Choisir un écran"}>
      {item.screens.map((entry, index) => <button key={entry.file} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{en ? entry.en : entry.fr}</button>)}
    </div>
    <figure className={mobile ? "is-mobile" : "is-desktop"}>
      <a href={`${item.root}${screen.file}.png`} target="_blank" rel="noopener noreferrer" aria-label={en ? `Enlarge: ${screen.en} (new tab)` : `Agrandir : ${screen.fr} (nouvel onglet)`}>
        <img src={`${item.root}${screen.file}.png`} alt={en ? `${item.name} — ${screen.en}, demo data` : `${item.name} — ${screen.fr}, données de démonstration`} />
      </a>
      <figcaption aria-live="polite"><span>{en ? screen.textEn : screen.textFr}</span><a href={`${item.root}${screen.file}.png`} target="_blank" rel="noopener noreferrer">{en ? "View full size ↗" : "Voir en grand ↗"}</a></figcaption>
    </figure>
  </section>;
}
