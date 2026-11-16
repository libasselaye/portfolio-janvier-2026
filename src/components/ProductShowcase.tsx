import { useState } from "react";
import "./ProductShowcase.css";

export type Product =
  | "libfuel"
  | "leadin"
  | "librain"
  | "knowledge"
  | "libticket"
  | "openstudio"
  | "aminteu";

const base = `${import.meta.env.BASE_URL}projects/`;
const products: Record<
  Product,
  {
    name: string;
    root: string;
    cover: readonly [string, string];
    layout: "mobile" | "desktop";
    tone: "light" | "dark";
    taglineFr: string;
    taglineEn: string;
    titleFr: string;
    titleEn: string;
    screens: readonly {
      file: string;
      fr: string;
      en: string;
      textFr: string;
      textEn: string;
    }[];
  }
> = {
  libfuel: {
    name: "Libfuel",
    root: `${base}libfuel/`,
    cover: ["today", "stats"],
    layout: "mobile",
    tone: "light",
    taglineFr: "Manger, suivre, comprendre.",
    taglineEn: "Eat, track, understand.",
    titleFr: "Une journée, puis la tendance.",
    titleEn: "One day, then the trend.",
    screens: [
      { file: "today", fr: "La journée", en: "Today", textFr: "Calories restantes, macronutriments et repas se lisent sur un même écran.", textEn: "Remaining calories, macronutrients and meals come together on one screen." },
      { file: "stats", fr: "Les statistiques", en: "Statistics", textFr: "La moyenne de la semaine et la courbe de poids donnent du recul sur les habitudes.", textEn: "The weekly average and the weight curve put everyday habits into perspective." },
      { file: "manual", fr: "L’ajout", en: "Adding food", textFr: "On cherche un aliment, on règle la quantité et les valeurs nutritionnelles se calculent.", textEn: "Search for a food, set the quantity and the nutritional values are calculated." },
    ],
  },
  leadin: {
    name: "LibLeadIN",
    root: `${base}libleadin/`,
    cover: ["dashboard", "prospects"],
    layout: "desktop",
    tone: "dark",
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
    layout: "desktop",
    tone: "dark",
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
  knowledge: {
    name: "Knowledge",
    root: `${base}knowledge/`,
    cover: ["teacher", "marketplace"],
    layout: "desktop",
    tone: "light",
    taglineFr: "Enseigner, suivre, progresser.",
    taglineEn: "Teach, follow, progress.",
    titleFr: "Trois espaces, un même suivi.",
    titleEn: "Three spaces, one shared record.",
    screens: [
      { file: "teacher", fr: "Le planning", en: "Schedule", textFr: "Le professeur voit sa semaine de cours, par élève et par matière.", textEn: "The teacher sees the week of lessons, by student and by subject." },
      { file: "student", fr: "La progression", en: "Progress", textFr: "L’élève suit ses résultats par compétence et leur évolution dans le temps.", textEn: "The student follows results by skill and how they change over time." },
      { file: "marketplace", fr: "La marketplace", en: "Marketplace", textFr: "Les familles comparent les professeurs par matière, format, tarif et avis.", textEn: "Families compare teachers by subject, format, price and reviews." },
    ],
  },
  libticket: {
    name: "LibTicket",
    root: `${base}libticket/`,
    cover: ["board", "ticket"],
    layout: "desktop",
    tone: "light",
    taglineFr: "Signaler, trier, résoudre.",
    taglineEn: "Report, sort, resolve.",
    titleFr: "Du signalement à la résolution.",
    titleEn: "From report to resolution.",
    screens: [
      { file: "board", fr: "Le tableau", en: "Board", textFr: "Les tickets d’un projet avancent sur cinq colonnes, de « Nouveau » à « Terminé ».", textEn: "A project’s tickets move across five columns, from “New” to “Done”." },
      { file: "ticket", fr: "Le ticket", en: "Ticket", textFr: "Statut, priorité, description et échanges avec le client tiennent dans un même panneau.", textEn: "Status, priority, description and the conversation with the client fit in one panel." },
      { file: "client", fr: "Le client", en: "Client view", textFr: "Invité par un lien, le client suit ses demandes et en crée de nouvelles, sans mot de passe.", textEn: "Invited through a link, the client follows requests and creates new ones, with no password." },
    ],
  },
  openstudio: {
    name: "OpenStudio",
    root: `${base}openstudio/`,
    cover: ["director", "images"],
    layout: "desktop",
    tone: "light",
    taglineFr: "Écrire, générer, assembler.",
    taglineEn: "Write, generate, assemble.",
    titleFr: "Du prompt au montage.",
    titleEn: "From prompt to final cut.",
    screens: [
      { file: "images", fr: "Les images", en: "Images", textFr: "Le coût est estimé avant chaque génération, puis les prises se comparent dans la galerie.", textEn: "The cost is estimated before each generation, then takes are compared in the gallery." },
      { file: "director", fr: "Le storyboard", en: "Storyboard", textFr: "Un projet enchaîne ses plans, avec leur durée, leur état et le budget engagé.", textEn: "A project lines up its shots, with their duration, status and committed budget." },
      { file: "costs", fr: "Les coûts", en: "Costs", textFr: "Les dépenses sont suivies par modèle et par projet, avec un budget quotidien et mensuel.", textEn: "Spending is tracked by model and by project, with daily and monthly budgets." },
    ],
  },
  aminteu: {
    name: "LibMedoc (Aminteu)",
    root: `${base}aminteu/`,
    cover: ["today", "history"],
    layout: "mobile",
    tone: "light",
    taglineFr: "Donner, cocher, partager.",
    taglineEn: "Give, tick, share.",
    titleFr: "Chaque prise, vue par tous.",
    titleEn: "Every dose, seen by everyone.",
    screens: [
      { file: "today", fr: "La journée", en: "Today", textFr: "L’oxygène et les médicaments du jour, avec l’heure et le nom de la personne qui a coché.", textEn: "The day’s oxygen and medication, with the time and the name of the person who ticked." },
      { file: "history", fr: "Le journal", en: "Log", textFr: "Chaque action est signée et horodatée ; rien ne se supprime.", textEn: "Every action is signed and timestamped; nothing is deleted." },
      { file: "treatment", fr: "Le traitement", en: "Treatment", textFr: "Les médicaments, leurs doses et les horaires du matin, du midi et du soir.", textEn: "Medication, doses and the morning, midday and evening times." },
    ],
  },
};

export function ProductScreenshotCover({ product, en }: { product: Product; en: boolean }) {
  const item = products[product];
  return <div className={`product-visual screenshot-cover screenshot-cover-${product} is-${item.layout} is-${item.tone}`}>
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

  return <section className={`screenshot-gallery screenshot-gallery-${product} is-${item.layout} is-${item.tone}`} aria-label={en ? `${item.name} screenshots` : `Captures de ${item.name}`}>
    <div className="screenshot-gallery-heading">
      <p className="eyebrow">{en ? "INSIDE THE APPLICATION" : "DANS L’APPLICATION"}</p>
      <h3>{en ? item.titleEn : item.titleFr}</h3>
      <p>{en ? "The real interface, with fictional data prepared for this presentation." : "L’interface réelle, avec des données fictives préparées pour cette présentation."}</p>
    </div>
    <div className="screenshot-gallery-tabs" aria-label={en ? "Choose a screen" : "Choisir un écran"}>
      {item.screens.map((entry, index) => <button key={entry.file} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{en ? entry.en : entry.fr}</button>)}
    </div>
    <figure className={`is-${item.layout}`}>
      <a href={`${item.root}${screen.file}.png`} target="_blank" rel="noopener noreferrer" aria-label={en ? `Enlarge: ${screen.en} (new tab)` : `Agrandir : ${screen.fr} (nouvel onglet)`}>
        <img src={`${item.root}${screen.file}.png`} alt={en ? `${item.name} — ${screen.en}, demo data` : `${item.name} — ${screen.fr}, données de démonstration`} />
      </a>
      <figcaption aria-live="polite"><span>{en ? screen.textEn : screen.textFr}</span><a href={`${item.root}${screen.file}.png`} target="_blank" rel="noopener noreferrer">{en ? "View full size ↗" : "Voir en grand ↗"}</a></figcaption>
    </figure>
  </section>;
}
