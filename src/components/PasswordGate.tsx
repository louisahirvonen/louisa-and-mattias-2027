import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { checkPassword, rememberUnlock } from "@/lib/sitePassword";
import LanguageSwitcher from "./LanguageSwitcher";
import waxSeal from "@/assets/wax-seal.png";

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate = ({ onUnlock }: PasswordGateProps) => {
  const { t } = useLanguage();
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const [checking, setChecking] = useState(false);

  const unlock = () => {
    rememberUnlock();
    onUnlock();
  };

  // A link like ...?key=<password> opens the site straight away.
  // The key is removed from the address bar so it isn't shared further by accident.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    if (!key) return;
    params.delete("key");
    const query = params.toString();
    window.history.replaceState(null, "", window.location.pathname + (query ? `?${query}` : "") + window.location.hash);
    checkPassword(key).then((ok) => ok && unlock());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setChecking(true);
    const ok = await checkPassword(password);
    setChecking(false);
    if (ok) unlock();
    else setWrong(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "linear-gradient(160deg, hsl(var(--lavender)), hsl(var(--cream)), hsl(var(--rose-light) / 0.3))" }}
    >
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm px-8 pt-12 pb-8 text-center rounded-sm"
        style={{
          background: "linear-gradient(170deg, hsl(var(--cream)), hsl(var(--warm-white)))",
          border: "1px solid hsl(var(--rose-light) / 0.4)",
          boxShadow: "0 8px 32px hsl(var(--rose-light) / 0.3), 0 2px 8px hsl(var(--sage) / 0.1)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={waxSeal}
          alt=""
          className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full drop-shadow-md"
        />
        <p className="font-body text-muted-foreground text-xs tracking-[0.2em] uppercase mb-2">
          {t.envelope.invited}
        </p>
        <p className="font-names text-foreground text-3xl tracking-[0.08em]">Louisa & Mattias</p>
        <div className="flex items-center justify-center gap-3 mt-2 mb-6">
          <span className="h-px w-8 bg-rose-light" />
          <span className="text-taupe text-xs">♥</span>
          <span className="h-px w-8 bg-rose-light" />
        </div>

        <label htmlFor="site-password" className="font-body text-sm text-muted-foreground block mb-3">
          {t.gate.prompt}
        </label>
        <input
          id="site-password"
          type="password"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setWrong(false);
          }}
          placeholder={t.gate.placeholder}
          className="w-full px-4 py-3 font-body text-base text-center bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary/40 text-foreground placeholder:text-muted-foreground/60"
        />
        {wrong && (
          <p role="alert" className="font-body text-sm text-destructive mt-2">
            {t.gate.wrong}
          </p>
        )}
        <button
          type="submit"
          disabled={checking || !password.trim()}
          className="w-full mt-4 py-3.5 font-body text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {t.gate.open}
        </button>
      </motion.form>
    </div>
  );
};

export default PasswordGate;
