import { useState } from "react";
import "./PersonalStories.css";
import { Arrow, Modal, SectionLabel } from "./EditorialUI";
import {
  personalCopy,
  personalMedia,
  type PersonalChapter,
} from "../content/personal";

const mediaRoot = `${import.meta.env.BASE_URL}photos/optimized/personal/`;
const chapters: PersonalChapter[] = ["psg", "training"];

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 5 11 7-11 7Z" fill="currentColor" />
    </svg>
  );
}

export default function PersonalStories({
  language,
  onOpenNutritionProject,
}: {
  language: "fr" | "en";
  onOpenNutritionProject: () => void;
}) {
  const [chapter, setChapter] = useState<PersonalChapter>("psg");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [videoError, setVideoError] = useState(false);
  const t = personalCopy[language];
  const story = t.chapters[chapter];
  const otherChapter = chapter === "psg" ? "training" : "psg";
  const media = personalMedia.filter((item) => item.chapter === chapter);
  const photos = media.filter((item) => item.type === "photo");
  const videos = media.filter((item) => item.type === "video");
  const selected = selectedIndex === null ? null : media[selectedIndex];
  const selectMedia = (index: number) => {
    setVideoError(false);
    setSelectedIndex(index);
  };

  return (
    <section
      id="personal"
      className="personal-section section-space"
      aria-labelledby="personal-title"
    >
      <div className="page-width">
        <div className="personal-heading">
          <div>
            <SectionLabel number="05">{t.kicker}</SectionLabel>
            <h2 id="personal-title">
              {t.title} <em>{t.italic}</em>
            </h2>
          </div>
          <p>{t.intro}</p>
        </div>

        <div
          className="personal-chapters"
          role="group"
          aria-label={t.chapterLabel}
        >
          {chapters.map((id, i) => (
            <button
              key={id}
              type="button"
              aria-pressed={chapter === id}
              aria-controls="personal-story"
              onClick={() => setChapter(id)}
            >
              <span className="chapter-number">0{i + 1}</span>
              {t.chapters[id].label}
              <Arrow diagonal />
            </button>
          ))}
        </div>

        <article
          key={chapter}
          id="personal-story"
          className={`personal-story personal-story-${chapter}`}
          aria-labelledby="personal-story-title"
        >
          <div className="personal-story-copy">
            <p className="eyebrow">{story.place}</p>
            <h3 id="personal-story-title">{story.title}</h3>
            <p className="personal-story-text">{story.text}</p>
            {chapter === "training" && (
              <button
                type="button"
                className="personal-related-project"
                onClick={onOpenNutritionProject}
                aria-label={t.nutritionProject.open}
                aria-haspopup="dialog"
              >
                <span className="eyebrow">{t.nutritionProject.label}</span>
                <strong>
                  LibCalPilot <Arrow diagonal />
                </strong>
                <span>{t.nutritionProject.description}</span>
              </button>
            )}
            {videos.length > 0 && (
              <div className="personal-videos">
                <p className="eyebrow">{t.videos}</p>
                {videos.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="personal-video-link"
                    onClick={() => selectMedia(media.indexOf(item))}
                    aria-label={`${t.watch} : ${item.label[language]}`}
                    aria-haspopup="dialog"
                  >
                    <img
                      src={`${mediaRoot}${item.preview}`}
                      alt=""
                      width="42"
                      height="56"
                      loading="lazy"
                      decoding="async"
                    />
                    <span>
                      <strong>{item.label[language]}</strong>
                      <small>
                        {t.video} · {item.duration}
                      </small>
                    </span>
                    <span className="personal-play">
                      <PlayIcon />
                    </span>
                  </button>
                ))}
              </div>
            )}
            <p className="personal-note">{story.note}</p>
          </div>
          <div className={`personal-photos personal-photos-${photos.length}`}>
            {photos.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`personal-photo personal-photo-${i}`}
                onClick={() => selectMedia(media.indexOf(item))}
                aria-label={`${t.enlarge} : ${item.label[language]}`}
                aria-haspopup="dialog"
              >
                <img
                  src={`${mediaRoot}${item.preview}`}
                  alt={item.description[language]}
                  loading="lazy"
                  decoding="async"
                  width="630"
                  height="840"
                  style={{ objectPosition: item.position }}
                />
                <span className="personal-photo-expand" aria-hidden="true">
                  <Arrow diagonal />
                </span>
                <span className="personal-photo-label">
                  <small>0{i + 1}</small>
                  {item.label[language]}
                </span>
              </button>
            ))}
          </div>
        </article>

        <div className="personal-footer">
          <a href="#personal" onClick={() => setChapter(otherChapter)}>
            {t.otherChapter} : {t.chapters[otherChapter].label}
            <Arrow />
          </a>
          <a href="#experience">
            {t.professionalExperience}
            <Arrow diagonal />
          </a>
        </div>
      </div>

      {selected && selectedIndex !== null && (
        <Modal
          title={selected.label[language]}
          closeLabel={t.close}
          onClose={() => setSelectedIndex(null)}
          className="personal-modal"
        >
          <figure>
            <div className="personal-viewer">
              {selected.type === "video" ? (
                <video
                  key={selected.id}
                  src={`${mediaRoot}${selected.file}`}
                  poster={`${mediaRoot}${selected.preview}`}
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  playsInline
                  autoPlay
                  muted
                  preload="metadata"
                  aria-label={selected.label[language]}
                  aria-describedby="personal-media-description"
                  onError={() => setVideoError(true)}
                />
              ) : (
                <img
                  key={selected.id}
                  src={`${mediaRoot}${selected.file}`}
                  alt={selected.description[language]}
                />
              )}
            </div>
            <figcaption className="personal-viewer-caption">
              <div>
                <p className="eyebrow">
                  {selected.type === "video" ? t.video : t.photo} ·{" "}
                  {story.label}
                </p>
                <h4>{selected.label[language]}</h4>
                <p id="personal-media-description">
                  {selected.description[language]}
                </p>
                {videoError && (
                  <p role="alert">
                    {t.error}{" "}
                    <a
                      href={`${mediaRoot}${selected.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.openVideo} ↗
                    </a>
                  </p>
                )}
              </div>
              <div className="personal-viewer-controls">
                <button
                  type="button"
                  className="icon-button"
                  aria-label={t.previous}
                  disabled={selectedIndex === 0}
                  onClick={() => selectMedia(selectedIndex - 1)}
                >
                  <Arrow className="previous-arrow" />
                </button>
                <span aria-live="polite">
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(media.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  className="icon-button"
                  aria-label={t.next}
                  disabled={selectedIndex === media.length - 1}
                  onClick={() => selectMedia(selectedIndex + 1)}
                >
                  <Arrow />
                </button>
              </div>
            </figcaption>
          </figure>
        </Modal>
      )}
    </section>
  );
}
