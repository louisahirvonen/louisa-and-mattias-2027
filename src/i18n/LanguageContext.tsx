import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type Translations } from "./translations";

const STORAGE_KEY = "language";

const isLanguage = (value: string | null | undefined): value is Language =>
  !!value && value in translations;

function saveLanguage(language: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Storage can be blocked (e.g. private browsing) — then it just isn't remembered
  }
}

// Order of preference:
// 1. ?lang=sv|en|es in the link (e.g. a link sent to Spanish-speaking guests)
// 2. The language the guest picked (or was linked to) last time they visited
// 3. The phone's/browser's language settings
// 4. English
function detectLanguage(): Language {
  const fromUrl = new URLSearchParams(window.location.search).get("lang")?.toLowerCase();
  if (isLanguage(fromUrl)) {
    saveLanguage(fromUrl);
    return fromUrl;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be blocked (e.g. private browsing) — fall through
  }

  for (const preferred of navigator.languages ?? [navigator.language]) {
    const code = preferred.slice(0, 2).toLowerCase();
    if (isLanguage(code)) return code;
  }

  return "en";
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    saveLanguage(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].pageTitle;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
