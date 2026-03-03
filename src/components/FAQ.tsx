import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FloralDecoration from "./FloralDecoration";

const faqs = [
  {
    question: "What is the dress code?",
    answer:
      "Regency-era formal attire is encouraged! Think elegant gowns, tailcoats, cravats, and empire-waist dresses. Soft pastels and florals are especially welcome. If you prefer modern formal wear, that is perfectly acceptable as well.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Your invitation will specify if you have been allocated a plus one. If you have any questions, please do not hesitate to reach out to us directly.",
  },
  {
    question: "Are children welcome?",
    answer:
      "While we adore your little ones, we have chosen to make our wedding an adults-only celebration. We hope you understand and enjoy the evening!",
  },
  {
    question: "Will there be transportation from the hotels?",
    answer:
      "Yes! We will be arranging horse-drawn carriages (weather permitting) and shuttle buses between the recommended hotels and Thornfield Manor.",
  },
  {
    question: "What about dietary requirements?",
    answer:
      "Please let us know of any dietary requirements or allergies when you RSVP, and our chef will be delighted to accommodate you.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask that our ceremony be an unplugged event. Our photographer will capture every moment. You are welcome to take photos during the reception!",
  },
  {
    question: "Is there parking at the venue?",
    answer:
      "Yes, complimentary parking is available on the manor grounds. Please follow the signs upon arrival.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 px-4 bg-blush overflow-hidden">
      <FloralDecoration variant="corner-top-left" className="absolute top-0 left-0 w-28 sm:w-40 opacity-35 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            Frequently Asked
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="bg-background/70 backdrop-blur-sm border border-border px-6"
              >
                <AccordionTrigger className="font-display text-base text-foreground font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
