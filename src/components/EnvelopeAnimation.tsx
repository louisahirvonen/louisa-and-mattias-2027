import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import waxSeal from "@/assets/wax-seal.png";

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [stage, setStage] = useState<"sealed" | "opening" | "sliding" | "zooming" | "done">("sealed");

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("opening"), 1200);
    const timer2 = setTimeout(() => setStage("sliding"), 2200);
    const timer3 = setTimeout(() => setStage("zooming"), 3500);
    const timer4 = setTimeout(() => {
      setStage("done");
      onComplete();
    }, 5000);
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Envelope body */}
            <motion.div
              className="relative w-[340px] h-[220px] sm:w-[440px] sm:h-[280px] rounded-sm overflow-visible"
              style={{
                backgroundColor: "hsl(var(--envelope-outer))",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
              animate={
                stage === "zooming"
                  ? { scale: 0.8, opacity: 0.5, y: 100 }
                  : {}
              }
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {/* Envelope inner (V shape) */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, transparent 38%, hsl(var(--envelope-inner)) 38%, hsl(var(--envelope-inner)) 62%, transparent 62%)`,
                }}
              />

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
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundColor: "hsl(var(--envelope-outer))",
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute z-10"
                style={{
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                animate={
                  stage === "sealed"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.4 }}
              >
                <img src={waxSeal} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
              </motion.div>

              {/* Card sliding out */}
              <motion.div
                className="absolute left-3 right-3 sm:left-4 sm:right-4 rounded-sm"
                style={{
                  height: "85%",
                  bottom: "8%",
                  backgroundColor: "hsl(var(--cream))",
                  border: "1px solid hsl(var(--rose-light))",
                  boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
                }}
                animate={
                  stage === "sliding" || stage === "zooming"
                    ? { y: -180 }
                    : { y: 0 }
                }
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Card content preview */}
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <p className="font-script text-primary text-lg sm:text-xl mb-1">You are invited to</p>
                  <p className="font-display text-foreground text-xl sm:text-2xl font-semibold tracking-wide">
                    The Wedding of
                  </p>
                  <p className="font-script text-primary text-2xl sm:text-3xl mt-1">
                    Eleanor & Benedict
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="h-px w-8 bg-primary/30" />
                    <span className="text-gold text-xs">✦</span>
                    <span className="h-px w-8 bg-primary/30" />
                  </div>
                  <p className="font-body text-muted-foreground text-sm mt-2">
                    July 24th, 2027
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
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    className="bg-background rounded-sm"
                    initial={{ width: "320px", height: "200px", opacity: 0 }}
                    animate={{ width: "100vw", height: "100vh", opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tap to open text */}
          {stage === "sealed" && (
            <motion.p
              className="absolute bottom-16 font-body text-muted-foreground text-sm tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Opening your invitation...
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeAnimation;
