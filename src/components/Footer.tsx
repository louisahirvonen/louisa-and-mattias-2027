const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <p className="font-names text-3xl text-foreground tracking-[0.08em] mb-4">
          Louisa & Mattias
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-[0.25em] uppercase">
          July 24th, 2027 · Fiholm, Västerås
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-12 bg-border" />
          <span className="text-taupe text-xs">—</span>
          <span className="h-px w-12 bg-border" />
        </div>
        <p className="font-body text-xs text-muted-foreground/50 mt-6">
          Made with love for the most anticipated day
        </p>
      </div>
    </footer>
  );
};

export default Footer;
