import { useState } from 'react';
import type { NavItem } from '../content/types';
import LanguageToggle from './LanguageToggle';
import ThemeToggle, { type Theme } from './ThemeToggle';

type NavbarProps = {
  navItems: NavItem[];
  activeId: string;
  onAssistantOpen: () => void;
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  themeLabel: string;
  themeOptions: {
    light: string;
    dark: string;
  };
  menuLabel: string;
};

const linkBase =
  'relative whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200';

export default function Navbar({
  navItems,
  activeId,
  onAssistantOpen,
  language,
  onLanguageChange,
  theme,
  onThemeChange,
  themeLabel,
  themeOptions,
  menuLabel
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-6 md:py-5">
        <a
          href="#hero"
          className="whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-text transition-colors hover:text-accent"
        >
          ML—Mboup
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex lg:gap-6">
          {navItems.map((item) =>
            item.id === 'assistant' ? (
              <button
                key={item.id}
                type="button"
                onClick={onAssistantOpen}
                className={`${linkBase} text-muted hover:text-accent`}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={`${linkBase} ${
                  activeId === item.id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {item.label}
                {activeId === item.id ? (
                  <span className="absolute -bottom-1.5 left-1/2 h-px w-4 -translate-x-1/2 bg-accent" />
                ) : null}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <div className="hidden sm:block">
            <ThemeToggle
              theme={theme}
              onChange={onThemeChange}
              label={themeLabel}
              options={themeOptions}
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-text transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            aria-label={menuLabel}
            aria-expanded={open}
          >
            <span className="sr-only">{menuLabel}</span>
            <div className="space-y-1">
              <span
                className={`block h-px w-4 bg-current transition ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px w-4 bg-current transition ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      <nav className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-5">
          {navItems.map((item) =>
            item.id === 'assistant' ? (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onAssistantOpen();
                  setOpen(false);
                }}
                className={`${linkBase} py-2 text-left text-muted hover:text-accent`}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={`${linkBase} py-2 ${
                  activeId === item.id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
