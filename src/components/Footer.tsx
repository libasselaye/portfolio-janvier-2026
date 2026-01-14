type FooterProps = {
  text: string;
};

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-sm text-muted">
        <p>{text}</p>
      </div>
    </footer>
  );
}
