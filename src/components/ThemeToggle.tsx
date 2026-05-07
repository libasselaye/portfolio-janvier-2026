export type Theme = 'light' | 'dark';

type ThemeToggleProps = {
  theme: Theme;
  onChange: (theme: Theme) => void;
  label: string;
  options: {
    light: string;
    dark: string;
  };
};

const buttonBase =
  'px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200';

export default function ThemeToggle({ theme, onChange, label, options }: ThemeToggleProps) {
  return (
    <div
      aria-label={label}
      role="group"
      className="inline-flex items-center divide-x divide-border/60 rounded-sm border border-border"
    >
      <button
        type="button"
        onClick={() => onChange('light')}
        aria-pressed={theme === 'light'}
        className={`${buttonBase} ${
          theme === 'light' ? 'text-accent' : 'text-muted hover:text-text'
        }`}
      >
        {options.light}
      </button>
      <button
        type="button"
        onClick={() => onChange('dark')}
        aria-pressed={theme === 'dark'}
        className={`${buttonBase} ${
          theme === 'dark' ? 'text-accent' : 'text-muted hover:text-text'
        }`}
      >
        {options.dark}
      </button>
    </div>
  );
}
