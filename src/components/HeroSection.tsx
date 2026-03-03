import { motion } from "framer-motion";
import Countdown from "./Countdown";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden bg-background"
    >
      <motion.div
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="font-body text-sm tracking-[0.35em] uppercase text-taupe mb-8">
          Together with their families
        </p>

        <h1 className="font-names text-5xl sm:text-7xl md:text-8xl text-foreground tracking-[0.08em] mb-1">
          Louisa
        </h1>
        <div className="flex items-center justify-center gap-5 my-3">
          <span className="h-px w-16 bg-border" />
          <span className="font-body text-lg text-taupe">&</span>
          <span className="h-px w-16 bg-border" />
        </div>
        <h1 className="font-names text-5xl sm:text-7xl md:text-8xl text-foreground tracking-[0.08em] mb-8">
          Mattias
        </h1>

        <p className="font-body text-lg sm:text-xl text-muted-foreground tracking-wide mb-1">
          Request the pleasure of your company
        </p>
        <p className="font-body text-lg sm:text-xl text-muted-foreground tracking-wide">
          at the celebration of their marriage
        </p>

        <div className="my-10">
          <span className="text-taupe text-xs tracking-[0.5em]">—</span>
        </div>

        <p className="font-display text-2xl sm:text-3xl text-foreground font-medium mb-2">
          Saturday, July 24th, 2027
        </p>
        <p className="font-body text-base text-muted-foreground mb-12">
          Fiholm, Västerås, Sweden
        </p>

        {/* Couple photo placeholder */}
        <div className="w-full max-w-md mx-auto mb-14">
          <div
            className="aspect-[3/4] rounded-sm flex items-center justify-center"
            style={{ backgroundColor: "hsl(var(--cream-dark))" }}
          >
            <p className="font-body text-sm text-muted-foreground/40 tracking-wider uppercase">
              Your photo here
            </p>
          </div>
        </div>

        <Countdown />
      </motion.div>
    </section>
  );
};

export default HeroSection;
