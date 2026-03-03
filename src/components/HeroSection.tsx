import { motion } from "framer-motion";
import Countdown from "./Countdown";
import FloralDecoration from "./FloralDecoration";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-14 pb-6 overflow-hidden bg-background"
    >
      {/* Corner florals */}
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-36 sm:w-52 opacity-70 pointer-events-none" />
      <FloralDecoration variant="corner-top-left" className="absolute top-0 left-0 w-36 sm:w-52 opacity-70 pointer-events-none" />
      <FloralDecoration variant="corner-bottom-right" className="absolute bottom-0 right-0 w-28 sm:w-44 opacity-50 pointer-events-none" />
      <FloralDecoration variant="corner-bottom-left" className="absolute bottom-0 left-0 w-28 sm:w-44 opacity-50 pointer-events-none" />

      <motion.div
        className="relative z-10 text-center w-full max-w-lg flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Names */}
        <h1 className="font-names text-4xl sm:text-6xl md:text-7xl text-foreground tracking-[0.08em] mb-1">
          Louisa
        </h1>
        <div className="flex items-center justify-center gap-4 my-1.5">
          <span className="h-px w-12 bg-border" />
          <span className="font-body text-base text-taupe">&</span>
          <span className="h-px w-12 bg-border" />
        </div>
        <h1 className="font-names text-4xl sm:text-6xl md:text-7xl text-foreground tracking-[0.08em] mb-4">
          Mattias
        </h1>

        {/* Date & Location */}
        <p className="font-display text-lg sm:text-xl text-foreground font-medium mb-0.5">
          Saturday, July 24th, 2027
        </p>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Fiholm, Västerås, Sweden
        </p>

        {/* Photo */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto mb-5">
          <div
            className="aspect-[4/5] rounded-sm flex items-center justify-center border border-border/50"
            style={{ backgroundColor: "hsl(var(--cream-dark))" }}
          >
            <p className="font-body text-xs text-muted-foreground/40 tracking-wider uppercase">
              Your photo here
            </p>
          </div>
        </div>

        {/* Countdown */}
        <Countdown />
      </motion.div>
    </section>
  );
};

export default HeroSection;
