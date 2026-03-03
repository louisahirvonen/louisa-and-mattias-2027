import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const events = [
  {
    time: "3:00 PM",
    title: "Ceremony",
    location: "Stora Rytterne Kyrkoruin",
    description: "Join us as we exchange our vows below the arch of Rytterne church ruin.",
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    location: "Fiholm orangeri",
    description: "Enjoy champagne, hors d'oeuvres, and mingling. ",
  },
  {
    time: "6:00 PM",
    title: "Dinner Reception",
    location: "Fiholm orangeri",
    description: "A candlelit evening of fine dining, heartfelt toasts, and the company of loved ones.",
  },
  {
    time: "8:30 PM",
    title: "Dancing Begins",
    location: "Fiholm orangeri",
    description: "The orchestra strikes up for our first dance — and then the floor is yours for an evening of joy and celebration.",
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 px-4 bg-blush">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            The Celebration
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            Schedule of Events
          </h2>
          <div className="section-divider mt-2">
            <span className="text-taupe text-xs">—</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
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
