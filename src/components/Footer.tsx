import HeroSigil from './HeroSigil';

type FooterProps = {
  text: string;
  marquee: string;
};

export default function Footer({ text, marquee }: FooterProps) {
  const items = Array.from({ length: 8 }, (_, index) => (
    <span key={`${marquee}-${index}`} className="marquee-text">
      {marquee}
    </span>
  ));

  return (
    <footer className="border-t border-border/70 pt-8">
      <div className="marquee">
        <div className="marquee-track">{items}</div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 pb-10 pt-2 text-sm text-muted">
        <div className="footer-sigil" aria-hidden="true">
          <HeroSigil className="footer-sigil-svg" />
        </div>
        <p>{text}</p>
      </div>
    </footer>
  );
}
