import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import waxSeal from "@/assets/wax-seal.png";
import { useLanguage } from "@/i18n/LanguageContext";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const { t } = useLanguage();
  const [stage, setStage] = useState<"sealed" | "opening" | "sliding" | "zooming" | "done">("sealed");

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("opening"), 1800);
    const timer2 = setTimeout(() => setStage("sliding"), 3200);
    const timer3 = setTimeout(() => setStage("zooming"), 5000);
    const timer4 = setTimeout(() => {
      setStage("done");
      onComplete();
    }, 7000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "linear-gradient(160deg, hsl(var(--lavender)), hsl(var(--cream)), hsl(var(--rose-light) / 0.3))" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating petals background */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 6 + Math.random() * 8,
                height: 8 + Math.random() * 10,
                background: i % 3 === 0
                  ? "hsl(var(--rose-light))"
                  : i % 3 === 1
                  ? "hsl(var(--lavender))"
                  : "hsl(var(--sage) / 0.4)",
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                borderRadius: "50% 50% 50% 0%",
                opacity: 0.25,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, (Math.random() - 0.5) * 15, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Envelope body */}
            <motion.div
              className="relative w-[320px] h-[210px] sm:w-[420px] sm:h-[270px] overflow-visible"
              style={{
                background: "linear-gradient(145deg, hsl(var(--lavender)), hsl(var(--rose-light) / 0.5), hsl(var(--cream)))",
                borderRadius: "4px",
                boxShadow: "0 8px 32px hsl(var(--rose-light) / 0.3), 0 2px 8px hsl(var(--sage) / 0.1)",
              }}
              animate={
                stage === "zooming"
                  ? { scale: 0.7, opacity: 0.4, y: 120 }
                  : {}
              }
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Inner V pattern */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, transparent 38%, hsl(var(--cream) / 0.8) 38%, hsl(var(--cream) / 0.8) 62%, transparent 62%)`,
                }}
              />

              {/* Small floral detail on envelope */}
              <svg className="absolute bottom-2 right-3 w-12 h-12 opacity-30" viewBox="0 0 40 40" fill="none">
                <ellipse cx="20" cy="18" rx="5" ry="7" fill="hsl(var(--rose-light))" opacity="0.5" transform="rotate(-15 20 18)" />
                <ellipse cx="17" cy="20" rx="4" ry="6" fill="hsl(var(--rose-light))" opacity="0.4" transform="rotate(-40 17 20)" />
                <ellipse cx="23" cy="20" rx="4" ry="6" fill="hsl(var(--rose-light))" opacity="0.4" transform="rotate(10 23 20)" />
                <circle cx="20" cy="19" r="2" fill="hsl(var(--gold-light))" opacity="0.5" />
                <ellipse cx="28" cy="22" rx="3" ry="1.5" fill="hsl(var(--sage))" opacity="0.3" transform="rotate(20 28 22)" />
                <ellipse cx="12" cy="22" rx="3" ry="1.5" fill="hsl(var(--sage))" opacity="0.3" transform="rotate(-20 12 22)" />
              </svg>

              {/* Envelope flap */}
              <motion.div
                className="absolute -top-0 left-0 right-0 origin-top"
                style={{
                  width: "100%",
                  height: "50%",
                  transformStyle: "preserve-3d",
                }}
                animate={
                  stage === "sealed"
                    ? { rotateX: 0 }
                    : { rotateX: -180 }
                }
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--lavender)), hsl(var(--rose-light) / 0.6))",
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute z-10"
                style={{
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                animate={
                  stage === "sealed"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img src={waxSeal} alt="" className="w-14 h-14 sm:w-18 sm:h-18 rounded-full drop-shadow-md" />
              </motion.div>

              {/* Card sliding out */}
              <motion.div
                className="absolute left-3 right-3 sm:left-4 sm:right-4 rounded-sm"
                style={{
                  height: "85%",
                  bottom: "8%",
                  background: "linear-gradient(170deg, hsl(var(--cream)), hsl(var(--warm-white)))",
                  border: "1px solid hsl(var(--rose-light) / 0.4)",
                  boxShadow: "0 2px 12px hsl(var(--rose-light) / 0.15)",
                }}
                animate={
                  stage === "sliding" || stage === "zooming"
                    ? { y: -190 }
                    : { y: 0 }
                }
                transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  {/* Small floral on card */}
                  <svg className="w-16 h-10 mb-2 opacity-50" viewBox="0 0 60 30" fill="none">
                    <path d="M30 25 C20 18, 10 20, 5 18" stroke="hsl(var(--sage))" strokeWidth="0.6" opacity="0.4" />
                    <path d="M30 25 C40 18, 50 20, 55 18" stroke="hsl(var(--sage))" strokeWidth="0.6" opacity="0.4" />
                    <ellipse cx="18" cy="15" rx="4" ry="5.5" fill="hsl(var(--rose-light))" opacity="0.35" transform="rotate(-15 18 15)" />
                    <ellipse cx="42" cy="15" rx="4" ry="5.5" fill="hsl(var(--rose-light))" opacity="0.35" transform="rotate(15 42 15)" />
                    <circle cx="18" cy="15" r="1.5" fill="hsl(var(--gold-light))" opacity="0.4" />
                    <circle cx="42" cy="15" r="1.5" fill="hsl(var(--gold-light))" opacity="0.4" />
                    <ellipse cx="30" cy="12" rx="3" ry="4.5" fill="hsl(var(--lavender))" opacity="0.3" />
                  </svg>
                  <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.2em] uppercase mb-2">
                    {t.envelope.invited}
                  </p>
                  <p className="font-names text-foreground text-2xl sm:text-3xl tracking-[0.08em]">
                    Louisa & Mattias
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="h-px w-8 bg-rose-light" />
                    <span className="text-taupe text-xs">♥</span>
                    <span className="h-px w-8 bg-rose-light" />
                  </div>
                  <p className="font-body text-muted-foreground text-xs mt-2">
                    {t.envelope.date}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Zooming card overlay */}
            <AnimatePresence>
              {stage === "zooming" && (
                <motion.div
                  className="fixed inset-0 z-10 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    className="bg-background rounded-sm"
                    initial={{ width: "300px", height: "200px", opacity: 0 }}
                    animate={{ width: "100vw", height: "100vh", opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Loading text */}
          {stage === "sealed" && (
            <motion.p
              className="absolute bottom-16 font-body text-muted-foreground text-xs tracking-[0.3em] uppercase"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t.envelope.opening}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeAnimation;
