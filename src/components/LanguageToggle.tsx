type LanguageToggleProps = {
  language: 'fr' | 'en';
  onChange: (lang: 'fr' | 'en') => void;
};

export default function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-surface/80 p-1 text-xs font-semibold">
      <button
        type="button"
        onClick={() => onChange('fr')}
        aria-pressed={language === 'fr'}
        className={`rounded-full px-3 py-1 transition ${
          language === 'fr' ? 'bg-accent text-white' : 'text-muted hover:text-text'
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
        className={`rounded-full px-3 py-1 transition ${
          language === 'en' ? 'bg-accent text-white' : 'text-muted hover:text-text'
        }`}
      >
        EN
      </button>
    </div>
  );
}
