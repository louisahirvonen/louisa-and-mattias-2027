import { motion } from "framer-motion";
import { Plane, TrainFront, Hotel, Camera, MapPin, Info } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import FloralDecoration from "./FloralDecoration";

// Icons for the cards in t.international.cards, in the same order
const cardIcons = [Plane, TrainFront, Hotel, Camera, MapPin, Info];

const InternationalGuests = () => {
  const { t } = useLanguage();

  return (
    <section id="international" className="relative py-24 px-4 bg-warm-white overflow-hidden">
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-28 sm:w-40 opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.international.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.international.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            {t.international.intro}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.international.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Info;
            return (
              <motion.div
                key={i}
                className="p-6 border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-taupe flex-shrink-0" size={20} />
                  <h3 className="font-display text-lg text-foreground font-medium">{card.title}</h3>
                </div>
                {card.text && (
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                )}
                {card.items && (
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2 font-body text-sm text-muted-foreground leading-relaxed">
                        <span className="text-taupe">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternationalGuests;
