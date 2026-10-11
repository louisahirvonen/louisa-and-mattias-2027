import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import { useLanguage } from "@/i18n/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();

  return (
    <section id="schedule" className="relative py-16 sm:py-20 px-4 bg-blush overflow-hidden">
      <FloralDecoration variant="corner-top-right" className="absolute top-0 right-0 w-28 sm:w-40 opacity-35 pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
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

        {/* One card, grouped by place: the ceremony, then everything at the orangery */}
        <motion.div
          className="bg-background/70 backdrop-blur-sm border border-border divide-y divide-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.schedule.groups.map((group) => (
            <div key={group.location} className="px-6 py-5 sm:px-8">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                <MapPin size={13} className="text-taupe" />
                <span className="font-body text-xs tracking-[0.2em] uppercase">{group.location}</span>
              </div>
              <ul className="space-y-2">
                {group.events.map((event) => (
                  <li key={event.time} className="flex items-baseline gap-6">
                    <span className="font-body text-base text-muted-foreground tracking-wider w-24 flex-shrink-0 tabular-nums">
                      {event.time}
                    </span>
                    <span className="font-display text-lg text-foreground font-medium">{event.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
