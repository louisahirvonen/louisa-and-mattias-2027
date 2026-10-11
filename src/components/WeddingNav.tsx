import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "home", href: "#home" },
  { key: "story", href: "#story" },
  { key: "schedule", href: "#schedule" },
  { key: "travel", href: "#travel" },
  { key: "faq", href: "#faq" },
  { key: "photobook", href: "#photobook" },
  { key: "rsvp", href: "#rsvp" },
] as const;

const WeddingNav = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <button onClick={() => scrollTo("#home")} className="font-names text-xl text-foreground tracking-[0.15em]">
          L & M
        </button>

        {/* Wide screens */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav[item.key]}
            </button>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile: language switcher stays visible, the rest is in the menu */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button onClick={() => setOpen(!open)} className="text-foreground" aria-label={t.nav.menu}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav[item.key]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default WeddingNav;
