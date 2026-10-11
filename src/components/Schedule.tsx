import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import { useLanguage } from "@/i18n/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();
  return (
    <section id="schedule" className="relative py-24 px-4 bg-blush overflow-hidden">
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-28 sm:w-40 opacity-35 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.schedule.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.schedule.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
        </motion.div>

        <div className="space-y-6">
          {t.schedule.events.map((event, i) => (
            <motion.div
              key={event.time}
              className="bg-background/70 backdrop-blur-sm border border-border p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-2 text-muted-foreground sm:w-32 flex-shrink-0">
                  <Clock size={14} className="text-taupe" />
                  <span className="font-body text-base tracking-wider">{event.time}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground font-medium mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                    <MapPin size={13} className="text-taupe" />
                    <span className="font-body text-sm">{event.location}</span>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
