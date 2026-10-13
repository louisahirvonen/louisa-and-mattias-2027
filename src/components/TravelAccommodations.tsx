import { motion } from "framer-motion";
import { Train, Car, Hotel } from "lucide-react";
import venuePhoto from "@/assets/venue-photo.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";

// Icons for the entries in t.travel.info, in the same order
const travelIcons = [Train, Car];

const TravelAccommodations = () => {
  const { t } = useLanguage();
  return (
    <section id="travel" className="py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.travel.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.travel.title}
          </h2>
          <div className="section-divider mt-2">
            <span className="text-taupe text-xs">—</span>
          </div>
        </motion.div>

        {/* Venue Photo */}
        <motion.div
          className="mb-12 overflow-hidden rounded-sm border border-border/50 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={venuePhoto}
              alt={t.travel.venueAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-3 text-center bg-card">
            <p className="font-display text-sm text-muted-foreground tracking-wider">
              {t.travel.venueCaption}
            </p>
          </div>
        </motion.div>

        {/* Travel */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {t.travel.info.map((info, i) => {
            const Icon = travelIcons[i];
            return (
            <motion.div
              key={i}
              className="text-center p-6 border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Icon className="mx-auto text-taupe mb-3" size={24} />
              <h3 className="font-display text-lg text-foreground font-medium mb-2">{info.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{info.description}</p>
            </motion.div>
            );
          })}
        </div>

        {/* Accommodations */}
        <h3 className="font-display text-2xl text-foreground font-medium text-center mb-6">
          {t.travel.whereToStay}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.travel.accommodations.map((acc, i) => (
            <motion.div
              key={i}
              className="flex gap-3 p-5 border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Hotel className="text-taupe flex-shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-display text-lg text-foreground font-medium">{acc.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-1">{acc.description}</p>
                <p className="font-body text-sm text-primary">{acc.detail}</p>
                <a
                  href={acc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-body text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  {t.travel.bookLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelAccommodations;
