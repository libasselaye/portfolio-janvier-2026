type HeroSigilProps = {
  className?: string;
};

export default function HeroSigil({ className }: HeroSigilProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle
        cx="200"
        cy="200"
        r="196"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.35"
      />
      {/* Inner ring */}
      <circle
        cx="200"
        cy="200"
        r="182"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.16"
      />

      {/* Cardinal tick marks */}
      <line x1="200" y1="0" x2="200" y2="8" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="200" y1="392" x2="200" y2="400" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="0" y1="200" x2="8" y2="200" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <line x1="392" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />

      {/* Top arc text (curved) */}
      <defs>
        <path id="hero-sigil-arc-top" d="M 60 200 A 140 140 0 0 1 340 200" fill="none" />
        <path id="hero-sigil-arc-bottom" d="M 60 200 A 140 140 0 0 0 340 200" fill="none" />
      </defs>
      <text
        fontFamily="IBM Plex Mono, monospace"
        fontSize="11"
        letterSpacing="6"
        fill="currentColor"
        opacity="0.55"
      >
        <textPath href="#hero-sigil-arc-top" startOffset="50%" textAnchor="middle">
          MAME · LIBASSE · MBOUP
        </textPath>
      </text>
      <text
        fontFamily="IBM Plex Mono, monospace"
        fontSize="11"
        letterSpacing="6"
        fill="currentColor"
        opacity="0.45"
      >
        <textPath href="#hero-sigil-arc-bottom" startOffset="50%" textAnchor="middle">
          DATA · IA · 2026
        </textPath>
      </text>

      {/* Monogram M */}
      <text
        x="200"
        y="280"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="280"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        M
      </text>

      {/* Monogram L overlapping bottom-right */}
      <text
        x="252"
        y="310"
        fontFamily="Playfair Display, Georgia, serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="170"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.9"
      >
        L
      </text>

      {/* Center accent dot */}
      <circle cx="200" cy="200" r="2.4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
