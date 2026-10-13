import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FloralDecoration from "./FloralDecoration";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  return (
    <section id="faq" className="relative py-16 sm:py-20 px-4 bg-blush overflow-hidden">
      <FloralDecoration variant="corner-top-left" className="absolute top-0 left-0 w-28 sm:w-40 opacity-35 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.faq.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="bg-background/80 border border-border px-6"
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
