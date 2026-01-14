import { useState } from 'react';
import type { NavItem } from '../content/types';
import LanguageToggle from './LanguageToggle';
import ThemeToggle, { type Theme } from './ThemeToggle';

type NavbarProps = {
  navItems: NavItem[];
  activeId: string;
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
  theme: Theme;
  onThemeToggle: () => void;
  themeLabel: string;
  menuLabel: string;
};

export default function Navbar({
  navItems,
  activeId,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  themeLabel,
  menuLabel
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-semibold transition hover:text-text ${
                activeId === item.id ? 'text-text' : 'text-muted'
              }`}
              aria-current={activeId === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <ThemeToggle theme={theme} onToggle={onThemeToggle} label={themeLabel} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-text transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            aria-label={menuLabel}
            aria-expanded={open}
          >
            <span className="sr-only">{menuLabel}</span>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      <nav className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-semibold transition hover:text-text ${
                activeId === item.id ? 'text-text' : 'text-muted'
              }`}
              aria-current={activeId === item.id ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
