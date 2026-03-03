import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019",
    title: "A Chance Encounter",
    description:
      "They first met at a summer garden party in the Cotswolds, exchanging glances across a sea of peonies and parasols. Neither could have known that evening would change their lives forever.",
  },
  {
    year: "2020",
    title: "Letters & Longing",
    description:
      "Separated by circumstance, they exchanged letters that grew ever more tender. Every word written was a step closer to the life they would build together.",
  },
  {
    year: "2022",
    title: "A Promenade to Remember",
    description:
      "A walk through Hyde Park on an autumn afternoon sealed their devotion. Beneath golden leaves, they promised to never let go of each other's hand.",
  },
  {
    year: "2025",
    title: "The Proposal",
    description:
      "On a moonlit terrace overlooking the Thames, Benedict knelt and asked the question that Eleanor had been hoping to hear. Through happy tears, she whispered 'Yes.'",
  },
];

const OurStory = () => {
  return (
    <section id="story" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-3xl text-primary mb-2">How It All Began</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-semibold tracking-wide">
            Our Story
          </h2>
          <div className="section-divider mt-4">
            <span className="text-gold text-sm">✦</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-px" />

          {milestones.map((milestone, i) => (
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
              {/* Dot */}
              <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                <span className="font-display text-sm text-gold tracking-[0.2em] uppercase">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl text-foreground font-semibold mt-1 mb-2">
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
