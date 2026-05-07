import type { TimelineItem } from '../content/types';
import Card from './Card';

const dotClass =
  'absolute left-[-38px] top-6 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--accent)/0.15)]';

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative ml-8 space-y-6 border-l border-border pl-10">
      {items.map((item) => (
        <Card key={`${item.title}-${item.period}`} className="relative">
          <span className={dotClass} aria-hidden="true" />
          <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent/90">
            {item.period}
          </p>
          <h3 className="font-display text-2xl font-medium leading-tight">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
          {item.location ? <p className="mt-3 text-sm text-muted">{item.location}</p> : null}
        </Card>
      ))}
    </div>
  );
}
