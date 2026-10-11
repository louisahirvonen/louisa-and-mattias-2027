import { motion } from "framer-motion";
import FloralDecoration from "./FloralDecoration";
import { useLanguage } from "@/i18n/LanguageContext";

const OurStory = () => {
  const { t } = useLanguage();
  return (
    <section id="story" className="relative py-24 px-4 bg-warm-white overflow-hidden">
      <FloralDecoration variant="corner-top-left" className="absolute top-0 left-0 w-32 sm:w-44 opacity-40 pointer-events-none" />
      <FloralDecoration variant="corner-bottom-right" className="absolute bottom-0 right-0 w-28 sm:w-40 opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.story.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.story.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px -translate-x-px" style={{ backgroundColor: "hsl(var(--rose-light) / 0.4)" }} />

          {t.story.milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              className={`relative flex items-start gap-6 sm:gap-12 mb-16 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="absolute left-6 sm:left-1/2 w-2.5 h-2.5 rounded-full -translate-x-1 mt-2 z-10" style={{ backgroundColor: "hsl(var(--rose-light))" }} />

              <div className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                <span className="font-body text-xs text-taupe tracking-[0.25em] uppercase">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl text-foreground font-medium mt-1 mb-2">
                  {milestone.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
