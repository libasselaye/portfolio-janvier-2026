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
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.org}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {item.period}
            </p>
          </div>
          {item.location ? <p className="mt-3 text-sm text-muted">{item.location}</p> : null}
        </Card>
      ))}
    </div>
  );
}
