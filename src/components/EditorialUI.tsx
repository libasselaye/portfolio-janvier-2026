import { useEffect, useRef, type ReactNode } from "react";
export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path d="M12 12v40h16M31 52V14l10 14 11-14v38" />
    </svg>
  );
}
export function NetworkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="40" r="5" />
      <path d="M17 40h42M29 40c13 0 9-22 25-22h5M29 40c13 0 9 22 25 22h5" />
      <rect x="59" y="12" width="12" height="12" rx="2" />
      <rect x="59" y="34" width="12" height="12" rx="2" />
      <rect x="59" y="56" width="12" height="12" rx="2" />
    </svg>
  );
}
export function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 14a3 3 0 0 1-3 3H9l-5 4V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" />
      <path d="M8 8h8M8 12h5" />
    </svg>
  );
}
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <p className="eyebrow section-label">
      <span>{number} /</span> {children}
    </p>
  );
}
export function Modal({
  title,
  closeLabel,
  onClose,
  children,
  className = "",
}: {
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className={`editorial-modal ${className}`}
      aria-label={title}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="icon-button modal-close"
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
      >
        ×
      </button>
      {children}
    </dialog>
  );
}
export function ProductVisual({
  kind,
  en = false,
}: {
  kind: "organizer" | "brain" | "nutrition" | "leads";
  en?: boolean;
}) {
  if (kind === "brain")
    return (
      <div className="product-visual brain-visual" aria-hidden="true">
        <span className="visual-index">
          02 / {en ? "AI ASSISTANT" : "ASSISTANT IA"}
        </span>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <svg className="brain-connectors" viewBox="0 0 540 330">
          <path d="M270 165 128 95M270 165 410 95M270 165 128 243M270 165 410 243" />
        </svg>
        <div className="brain-core">
          <NetworkIcon />
          <span>LiBrain</span>
        </div>
        {[
          ["✉", "Emails"],
          ["◷", en ? "Calendar" : "Agenda"],
          ["⌘", "Contacts"],
          ["↗", "Finances"],
        ].map(([icon, label], i) => (
          <div key={label} className={`agent-node node-${i}`}>
            <span>{icon}</span>
            {label}
            <i />
          </div>
        ))}
        <span className="visual-caption">
          {en
            ? "Four specialised agents connected with n8n"
            : "Quatre agents spécialisés reliés par n8n"}
        </span>
      </div>
    );
  if (kind === "nutrition")
    return (
      <div className="product-visual nutrition-visual" aria-hidden="true">
        <span className="visual-index">
          03 / {en ? "FOOD TRACKING" : "SUIVI ALIMENTAIRE"}
        </span>
        <div className="nutrition-ring">
          <div>
            <span>{en ? "Daily food log" : "Journal alimentaire"}</span>
            <strong>
              LibCalPilot<span>↗</span>
            </strong>
            <small>
              {en
                ? "Calories and macronutrients"
                : "Calories et macronutriments"}
            </small>
          </div>
        </div>
        <div className="nutrition-labels">
          <span>{en ? "Meals" : "Repas"}</span>
          <span>Gemini Vision</span>
          <span>{en ? "Weight tracking" : "Suivi du poids"}</span>
        </div>
      </div>
    );
  if (kind === "leads")
    return (
      <div className="product-visual leads-visual" aria-hidden="true">
        <span className="visual-index">
          04 / {en ? "B2B PROSPECTING" : "PROSPECTION B2B"}
        </span>
        <div className="lead-workflow">
          {[
            "Prospects",
            en ? "Enrichment" : "Enrichissement",
            en ? "AI messages" : "Messages IA",
          ].map((s, i) => (
            <div key={s}>
              <small>0{i + 1}</small>
              <span>{s}</span>
              <Arrow />
            </div>
          ))}
        </div>
        <span className="visual-caption">
          LibLeadIN —{" "}
          {en
            ? "Prospect research and outreach tracking"
            : "Recherche et suivi des prospects"}
        </span>
      </div>
    );
  return (
    <div className="product-visual organizer-visual" aria-hidden="true">
      <span className="visual-index">
        01 / {en ? "TASK MANAGEMENT" : "GESTION DES TÂCHES"}
      </span>
      <div className="organizer-window">
        <div className="window-bar">
          <span className="window-dots">● ● ●</span>
          <span>LibOrga</span>
          <span>↗</span>
        </div>
        <div className="organizer-body">
          <div className="organizer-sidebar">
            <b>
              lo<span>●</span>
            </b>
            <span>◷</span>
            <span>▦</span>
            <span>▤</span>
          </div>
          <div className="organizer-content">
            <div className="mock-eyebrow">
              {en ? "EISENHOWER MATRIX" : "MATRICE D’EISENHOWER"}
            </div>
            <h4>{en ? "My tasks" : "Mes tâches"}</h4>
            <div className="quadrants">
              {(en
                ? ["Do", "Schedule", "Delegate", "Delete"]
                : ["Faire", "Planifier", "Déléguer", "Éliminer"]
              ).map((label, i) => (
                <div key={label} className={`quadrant q-${i}`}>
                  <b>
                    <i />
                    {label}
                    <span>0{i + 1}</span>
                  </b>
                  <div className="mock-task">
                    {
                      (en
                        ? [
                            "Send the proposal",
                            "Plan next week",
                            "Prepare the workshop",
                            "Clear the inbox",
                          ]
                        : [
                            "Envoyer le devis",
                            "Préparer la semaine",
                            "Préparer l’atelier",
                            "Vider sa boîte de réception",
                          ])[i]
                    }
                  </div>
                  <div className="mock-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="visual-caption">
        {en
          ? "Tasks organised by urgency and importance"
          : "Des tâches classées par urgence et importance"}
      </span>
    </div>
  );
}
