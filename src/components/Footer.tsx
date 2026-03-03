const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <p className="font-script text-4xl text-primary mb-4">Louisa & Mattias</p>
        <p className="font-body text-sm text-muted-foreground tracking-[0.2em] uppercase">JULY 24TH, 2027 · FIHOLM, VÄSTERÅS

        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-12 bg-primary/20" />
          <span className="text-gold text-xs">✦</span>
          <span className="h-px w-12 bg-primary/20" />
        </div>
        <p className="font-body text-xs text-muted-foreground/60 mt-6">
          Made with love for the most anticipated day
        </p>
      </div>
    </footer>);

};

export default Footer;