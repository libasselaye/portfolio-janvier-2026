import { useState } from "react";
import "./LibOrgaShowcase.css";

const root = `${import.meta.env.BASE_URL}projects/liborga/`;
const screens = [
  { file: "today-libasse", fr: "La journée", en: "Today", textFr: "Trois priorités, leurs créneaux et un accès au mode focus pour passer à l’action.", textEn: "Three priorities, their time slots and a focus mode to get started." },
  { file: "matrix", fr: "Les priorités", en: "Priorities", textFr: "La matrice d’Eisenhower aide à distinguer ce qui est urgent de ce qui est important.", textEn: "The Eisenhower matrix helps distinguish urgent work from important work." },
  { file: "bilan", fr: "Le bilan", en: "Review", textFr: "Le bilan hebdomadaire met en regard les tâches terminées, le temps de focus et le rythme de travail.", textEn: "The weekly review brings completed tasks, focus time and working rhythm together." },
];

export function LibOrgaCover({ en }: { en: boolean }) {
  return <div className="product-visual liborga-cover">
    <div className="liborga-cover-copy">
      <span className="eyebrow">LIBORGA / {en ? "THE APPLICATION" : "L’APPLICATION"}</span>
      <strong>{en ? "Make room for what matters." : "Faire place à l’essentiel."}</strong>
      <span>{en ? "Prioritise. Plan. Make progress." : "Prioriser. Planifier. Avancer."}</span>
      <small>{en ? "Real screenshots · Demo data" : "Captures réelles · Données de démo"}</small>
    </div>
    <div className="liborga-cover-screens" aria-hidden="true">
      <img className="liborga-screen-back" src={`${root}matrix.png`} alt="" loading="lazy" />
      <img className="liborga-screen-front" src={`${root}today-libasse.png`} alt="" loading="lazy" />
    </div>
  </div>;
}

export default function LibOrgaShowcase({ en }: { en: boolean }) {
  const [active, setActive] = useState(0);
  const screen = screens[active];
  return <section className="liborga-gallery" aria-label={en ? "LibOrga screenshots" : "Captures de LibOrga"}>
    <div className="liborga-gallery-header">
      <p className="eyebrow">{en ? "INSIDE THE APPLICATION" : "DANS L’APPLICATION"}</p>
      <h3>{en ? "From priority to progress." : "Des priorités aux progrès."}</h3>
      <p>{en ? "Real interface, shown with fictional projects and tasks." : "L’interface réelle, présentée avec des projets et des tâches fictifs."}</p>
    </div>
    <div className="liborga-gallery-controls" aria-label={en ? "Choose a screen" : "Choisir un écran"}>
      {screens.map((item, index) => <button key={item.file} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span> {en ? item.en : item.fr}</button>)}
    </div>
    <figure>
      <a className="liborga-full-screen" href={`${root}${screen.file}.png`} target="_blank" rel="noopener noreferrer" aria-label={en ? `Enlarge: ${screen.en} (new tab)` : `Agrandir : ${screen.fr} (nouvel onglet)`}>
        <img src={`${root}${screen.file}.png`} alt={en ? `LibOrga — ${screen.en}, demo account` : `LibOrga — ${screen.fr}, compte de démonstration`} />
      </a>
      <figcaption aria-live="polite"><span>{en ? screen.textEn : screen.textFr}</span><a href={`${root}${screen.file}.png`} target="_blank" rel="noopener noreferrer">{en ? "View full size ↗" : "Voir en grand ↗"}</a></figcaption>
    </figure>
  </section>;
}
