import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, kicker, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-3">
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="max-w-3xl text-muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
