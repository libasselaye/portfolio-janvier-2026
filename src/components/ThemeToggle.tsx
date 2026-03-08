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

export default function ThemeToggle({ theme, onChange, label, options }: ThemeToggleProps) {
  return (
    <div
      aria-label={label}
      role="group"
      className="inline-flex items-center rounded-full border border-border bg-surface/80 p-1 text-xs font-semibold"
    >
      <button
        type="button"
        onClick={() => onChange('light')}
        aria-pressed={theme === 'light'}
        className={`inline-flex items-center rounded-full px-3 py-1 transition ${
          theme === 'light' ? 'bg-accent text-white' : 'text-muted hover:text-text'
        }`}
      >
        <span>{options.light}</span>
      </button>
      <button
        type="button"
        onClick={() => onChange('dark')}
        aria-pressed={theme === 'dark'}
        className={`inline-flex items-center rounded-full px-3 py-1 transition ${
          theme === 'dark' ? 'bg-accent text-white' : 'text-muted hover:text-text'
        }`}
      >
        <span>{options.dark}</span>
      </button>
    </div>
  );
}
