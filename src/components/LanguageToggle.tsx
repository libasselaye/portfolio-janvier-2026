type LanguageToggleProps = {
  language: 'fr' | 'en';
  onChange: (lang: 'fr' | 'en') => void;
};

const buttonBase =
  'px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200';

export default function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex items-center divide-x divide-border/60 rounded-sm border border-border">
      <button
        type="button"
        onClick={() => onChange('fr')}
        aria-pressed={language === 'fr'}
        className={`${buttonBase} ${
          language === 'fr' ? 'text-accent' : 'text-muted hover:text-text'
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
        className={`${buttonBase} ${
          language === 'en' ? 'text-accent' : 'text-muted hover:text-text'
        }`}
      >
        EN
      </button>
    </div>
  );
}
