import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const events = [
  {
    time: "3:00 PM",
    title: "Ceremony",
    location: "Stora Rytterne Kyrkoruin",
    description: "Join us as we exchange our vows surrounded by climbing roses and the fragrance of the English countryside.",
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    location: "Fiholm orangeri",
    description: "Enjoy champagne, hors d'oeuvres, and live string quartet music as the sun begins its golden descent.",
  },
  {
    time: "6:00 PM",
    title: "Dinner Reception",
    location: "Fiholm orangeri",
    description: "A candlelit evening of fine dining, heartfelt toasts, and the company of loved ones.",
  },
  {
    time: "8:30 PM",
    title: "Dancing & Revelry",
    location: "The Grand Ballroom",
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
          <p className="font-script text-3xl text-primary mb-2">The Celebration</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-semibold tracking-wide">
            Schedule of Events
          </h2>
          <div className="section-divider mt-4">
            <span className="text-gold text-sm">✦</span>
          </div>
        </motion.div>

        <div className="space-y-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="bg-background/60 backdrop-blur-sm rounded-sm border border-border p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-2 text-primary sm:w-32 flex-shrink-0">
                  <Clock size={16} />
                  <span className="font-display text-lg font-medium">{event.time}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground font-semibold mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                    <MapPin size={14} />
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
