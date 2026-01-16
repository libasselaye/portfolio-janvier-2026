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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 pb-8 text-sm text-muted">
        <p>{text}</p>
      </div>
    </footer>
  );
}
