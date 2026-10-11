import { motion } from "framer-motion";
import { Gift, Mic } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import FloralDecoration from "./FloralDecoration";
import swishQr from "@/assets/swish-qr.svg";

// Swish number that receives honeymoon contributions
const SWISH_NUMBER = "0761396460";
// Opens the Swish app with the number and a message filled in
const swishLink = `https://app.swish.nu/1/p/sw/?sw=${SWISH_NUMBER}&msg=${encodeURIComponent("Bröllopsresa")}&src=qr`;

const GiftsSpeeches = () => {
  const { t } = useLanguage();

  const cardClasses = "flex flex-col items-center text-center p-8 border border-border bg-card";

  return (
    <section id="gifts" className="relative py-16 sm:py-20 px-4 overflow-hidden">
      <FloralDecoration variant="corner-top-left" className="absolute top-0 left-0 w-28 sm:w-40 opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.gifts.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.gifts.title}
          </h2>
          <div className="section-divider mt-2">
            <FloralDecoration variant="divider" className="w-40" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            className={cardClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Gift className="text-taupe mb-3" size={24} />
            <h3 className="font-display text-xl text-foreground font-medium mb-3">{t.gifts.giftTitle}</h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">{t.gifts.giftText}</p>
            <a
              href={swishLink}
              className="w-full py-3.5 font-body text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t.gifts.swishButton}
            </a>
            {/* Swish QR code in the site's rose. Same content as Swish's own generator makes
                ("C<number>;;<message>;6"), just drawn in our colours. */}
            <div className="hidden sm:flex flex-col items-center mt-5">
              <img src={swishQr} alt="Swish QR code" className="w-36 h-36" />
            </div>
          </motion.div>

          <motion.div
            className={cardClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Mic className="text-taupe mb-3" size={24} />
            <h3 className="font-display text-xl text-foreground font-medium mb-3">{t.gifts.speechTitle}</h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">{t.gifts.speechText}</p>
            <p className="font-body text-sm text-muted-foreground italic">{t.gifts.speechSoon}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSpeeches;
