import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  index?: number;
  total?: number;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, kicker, index, total, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-28 border-t border-border/40 py-20 md:py-28"
    >
      {typeof index === 'number' && typeof total === 'number' ? (
        <span className="section-number" aria-hidden="true">
          {String(index).padStart(2, '0')}
          <span className="section-number-total">/ {String(total).padStart(2, '0')}</span>
        </span>
      ) : null}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="max-w-2xl text-muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
