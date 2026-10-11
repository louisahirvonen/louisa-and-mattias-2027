import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Placeholder photos - replace with real couple photos.
// "caption" is an index into t.photobook.captions.
const pages = [
  { left: { type: "cover" as const }, right: { type: "photo" as const, caption: 0 } },
  { left: { type: "photo" as const, caption: 1 }, right: { type: "photo" as const, caption: 2 } },
  { left: { type: "photo" as const, caption: 3 }, right: { type: "photo" as const, caption: 4 } },
  { left: { type: "photo" as const, caption: 5 }, right: { type: "photo" as const, caption: 6 } },
  { left: { type: "photo" as const, caption: 7 }, right: { type: "end" as const } },
];

const placeholderColors = [
  "hsl(35, 15%, 90%)",
  "hsl(155, 12%, 88%)",
  "hsl(260, 10%, 91%)",
  "hsl(38, 18%, 89%)",
  "hsl(350, 15%, 91%)",
  "hsl(200, 10%, 90%)",
  "hsl(30, 12%, 89%)",
  "hsl(160, 10%, 88%)",
];

const Photobook = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  const page = pages[currentPage];

  const variants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? -90 : 90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? 90 : -90,
      opacity: 0,
    }),
  };

  const renderSide = (side: typeof page.left | typeof page.right, colorIndex: number) => {
    if (side.type !== "photo") {
      const title = side.type === "cover" ? t.photobook.coverTitle : t.photobook.endTitle;
      const subtitle = side.type === "cover" ? t.photobook.coverSubtitle : t.photobook.endSubtitle;
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <p className="font-names text-3xl sm:text-4xl text-foreground mb-3">{title}</p>
          <p className="font-body text-sm text-muted-foreground">{subtitle}</p>
        </div>
      );
    }
    return (
      <div className="h-full flex flex-col">
        <div
          className="flex-1 m-3 mb-2 flex items-center justify-center"
          style={{ backgroundColor: placeholderColors[colorIndex % placeholderColors.length] }}
        >
          <p className="font-body text-xs text-muted-foreground/30 px-4 text-center tracking-wider uppercase">
            {t.photobook.photo}
          </p>
        </div>
        <p className="font-body text-xs text-muted-foreground text-center px-4 pb-3 italic">
          {t.photobook.captions[side.caption]}
        </p>
      </div>
    );
  };

  return (
    <section id="photobook" className="py-24 px-4 bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.photobook.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-medium tracking-wide">
            {t.photobook.title}
          </h2>
          <div className="section-divider mt-2">
            <span className="text-taupe text-xs">—</span>
          </div>
        </motion.div>

        {/* Book */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            aria-label={t.photobook.previous}
            className="p-2 text-muted-foreground disabled:text-muted-foreground/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative w-full max-w-2xl"
            style={{ perspective: "1200px" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-card border border-border shadow-sm overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[320px] sm:min-h-[400px]">
                  {/* Left page */}
                  <div className="border-b sm:border-b-0 sm:border-r border-border">
                    {renderSide(page.left, currentPage * 2)}
                  </div>
                  {/* Right page */}
                  <div>{renderSide(page.right, currentPage * 2 + 1)}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goNext}
            disabled={currentPage === pages.length - 1}
            aria-label={t.photobook.next}
            className="p-2 text-muted-foreground disabled:text-muted-foreground/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Page indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1);
                setCurrentPage(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentPage ? "bg-foreground/50" : "bg-foreground/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photobook;
