import { motion } from "framer-motion";
import Countdown from "./Countdown";
import heroFloral from "@/assets/hero-floral.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      
      {/* Background floral */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroFloral})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} />
      
      <div className="absolute inset-0 bg-background/70 opacity-100" />

      <motion.div
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}>
        
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Together with their families
        </p>

        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-primary mb-2">Louisa

        </h1>
        <div className="flex items-center justify-center gap-4 my-2">
          <span className="h-px w-12 bg-primary/30" />
          <span className="font-display text-lg text-gold">&</span>
          <span className="h-px w-12 bg-primary/30" />
        </div>
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-primary mb-6">Mattias

        </h1>

        <p className="font-display text-lg sm:text-xl text-foreground tracking-wide mb-2">
          Request the pleasure of your company
        </p>
        <p className="font-display text-lg sm:text-xl text-foreground tracking-wide mb-1">
          at the celebration of their marriage
        </p>

        <div className="flex items-center justify-center gap-3 my-8">
          <span className="h-px w-16 bg-gold/40" />
          <span className="text-gold text-sm">✦ ✦ ✦</span>
          <span className="h-px w-16 bg-gold/40" />
        </div>

        <p className="font-display text-2xl sm:text-3xl text-foreground font-medium mb-2">
          Saturday, July 24th, 2027
        </p>
        <p className="font-body text-base text-muted-foreground mb-10">Fiholm, Västerås, Sweden

        </p>

        <Countdown />
      </motion.div>
    </section>);

};

export default HeroSection;