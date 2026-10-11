import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <p className="font-names text-3xl text-foreground tracking-[0.08em] mb-4">
          Louisa & Mattias
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-[0.25em] uppercase">
          {t.footer.date}
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-12 bg-border" />
          <span className="text-taupe text-xs">—</span>
          <span className="h-px w-12 bg-border" />
        </div>
        <div className="mt-6 font-body text-sm text-muted-foreground space-y-1">
          <p className="text-xs tracking-[0.2em] uppercase">{t.footer.contact}</p>
          <p>
            <a href="mailto:louisa.hirvonen@gmail.com" className="hover:text-foreground underline underline-offset-4">
              louisa.hirvonen@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+46761396460" className="hover:text-foreground underline underline-offset-4">
              076-139 64 60
            </a>
          </p>
        </div>
        <p className="font-body text-xs text-muted-foreground/50 mt-6">
          {t.footer.madeWith}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
