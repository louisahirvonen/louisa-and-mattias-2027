import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import FloralDecoration from "./FloralDecoration";

const InternationalGuests = () => {
  const { t } = useLanguage();
  const intl = t.international;

  return (
    <section id="international" className="relative py-16 sm:py-20 px-4 bg-warm-white overflow-hidden">
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-28 sm:w-40 opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {intl.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {intl.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            {intl.intro}
          </p>
        </motion.div>

        {/* Before you go */}
        <motion.div
          className="mb-12 p-6 border border-border bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Info className="text-taupe" size={18} />
            <h3 className="font-display text-lg text-foreground font-medium">{intl.beforeTitle}</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {intl.before.map((item) => (
              <li key={item} className="flex gap-2 font-body text-sm text-muted-foreground leading-relaxed">
                <span className="text-taupe">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* The journey, step by step: airport → Stockholm → Västerås → the wedding */}
        <ol className="relative">
          <div
            className="absolute left-4 top-2 bottom-2 w-px"
            style={{ backgroundColor: "hsl(var(--rose-light) / 0.5)" }}
            aria-hidden
          />
          {intl.steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative pl-14 pb-10 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-display text-sm text-foreground border border-border"
                style={{ backgroundColor: "hsl(var(--rose-light) / 0.5)" }}
              >
                {i + 1}
              </span>
              <h3 className="font-display text-xl text-foreground font-medium mb-2 pt-0.5">{step.title}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{step.text}</p>

              {step.columns && (
                <div className="grid sm:grid-cols-2 gap-6 mt-5">
                  {step.columns.map((column) => (
                    <div key={column.title} className="p-5 border border-border bg-card">
                      <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-3">
                        {column.title}
                      </h4>
                      <ul className="space-y-2">
                        {column.items.map((item) => (
                          <li key={item} className="flex gap-2 font-body text-sm text-muted-foreground leading-relaxed">
                            <span className="text-taupe">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default InternationalGuests;
