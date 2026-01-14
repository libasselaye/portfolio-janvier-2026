import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export default function ActionLink({ href, children, className, ...rest }: ActionLinkProps) {
  const isPlaceholder = href === '#';

  return (
    <a
      href={href}
      className={`btn-secondary ${isPlaceholder ? 'pointer-events-none opacity-60' : ''} ${
        className ?? ''
      }`}
      aria-disabled={isPlaceholder}
      tabIndex={isPlaceholder ? -1 : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
