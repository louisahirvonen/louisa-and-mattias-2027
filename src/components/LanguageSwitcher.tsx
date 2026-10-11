import { useLanguage } from "@/i18n/LanguageContext";
import { languageNames, type Language } from "@/i18n/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language / Språk / Idioma">
      {(Object.keys(languageNames) as Language[]).map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-border text-xs">·</span>}
          <button
            onClick={() => setLanguage(code)}
            lang={code}
            aria-label={languageNames[code]}
            aria-pressed={language === code}
            className={`font-body text-xs tracking-[0.15em] uppercase px-1 py-1 transition-colors ${
              language === code
                ? "text-foreground border-b border-foreground/40"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
