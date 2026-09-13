import { useState } from "react";
import { editorial } from "../content/editorial";

const base = import.meta.env.BASE_URL;
const photos = ["quotidien.jpg", "atelier.jpg", "diplome.jpg"];

export default function AboutGallery({ en }: { en: boolean }) {
  const [selected, setSelected] = useState(0);
  const copy = editorial[en ? "en" : "fr"];
  const isVideo = selected === photos.length;
  const labels = [...copy.galleryLabels, en ? "Coding" : "En train de coder"];
  return <div className="about-photo-column">
    <div className="about-image">
      {isVideo ? <video
        key="workspace-video"
        className="gallery-photo about-work-video"
        controls muted playsInline preload="none"
        poster={`${base}videos/about/workspace-poster.jpg`}
        aria-label={en ? "Libasse working at his desk — silent video" : "Libasse à son poste de travail — vidéo sans son"}
      ><source src={`${base}videos/about/workspace.mp4`} type="video/mp4" />
        {en ? "Your browser cannot play this video." : "Votre navigateur ne peut pas lire cette vidéo."}
      </video> : <img
        key={selected} src={`${base}photos/optimized/${photos[selected]}`}
        alt={copy.galleryAlt[selected]} width="900" height="1200"
        loading="lazy" decoding="async" className={`gallery-photo gallery-photo-${selected}`}
      />}
      {!isVideo && <span className="photo-corner">MAME LIBASSE MBOUP</span>}
    </div>
    <div className="gallery-controls about-media-controls" aria-label={en ? "Photos and video" : "Photos et vidéo"}>
      {labels.map((label, i) => <button key={label} aria-pressed={selected === i} onClick={() => setSelected(i)}><span>0{i + 1}</span>{label}{i === 3 && <span className="about-video-label"> ▷ 0:08</span>}</button>)}
    </div>
    <p className="photo-caption" aria-live="polite">{isVideo ? (en ? "04 — Coding." : "04 — En train de coder.") : copy.galleryCaptions[selected]}</p>
  </div>;
}
