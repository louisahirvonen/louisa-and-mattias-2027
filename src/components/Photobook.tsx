import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Every photo in src/assets/photobook, oldest first. Files are named by the date
// they were taken (YYYYMMDD-HHMMSS.jpg), so sorting by name sorts by date.
// All photos are cropped to 4:5 (960×1200) so every page has the same shape.
const photoModules = import.meta.glob<string>("@/assets/photobook/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
const photos = Object.keys(photoModules)
  .sort()
  .map((key) => photoModules[key]);

// Two photos per spread
const spreads: string[][] = [];
for (let i = 0; i < photos.length; i += 2) spreads.push(photos.slice(i, i + 2));

// Page turn: going forward, the old spread swings away to the left and the new one
// comes in from the right, like turning a page in a real book (and the reverse going back)
const variants = {
  enter: (dir: number) => ({ rotateY: dir > 0 ? 90 : -90, opacity: 0 }),
  center: { rotateY: 0, opacity: 1 },
  exit: (dir: number) => ({ rotateY: dir > 0 ? -90 : 90, opacity: 0 }),
};

const Photobook = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (page: number) => {
    if (page < 0 || page >= spreads.length || page === currentPage) return;
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  // Load the next and previous spreads in the background so page turns feel instant
  useEffect(() => {
    for (const page of [currentPage + 1, currentPage - 1]) {
      spreads[page]?.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [currentPage]);

  if (spreads.length === 0) return null;

  return (
    <section id="photobook" className="py-16 sm:py-20 px-4 bg-blush">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
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
        <div className="flex items-center justify-center sm:gap-4">
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label={t.photobook.previous}
            className="hidden sm:block p-2 text-muted-foreground disabled:text-muted-foreground/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative w-full max-w-2xl"
            style={{ perspective: "1200px" }}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(dx) > 40) goTo(currentPage + (dx < 0 ? 1 : -1));
              touchStartX.current = null;
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="bg-card border border-border shadow-sm overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="grid grid-cols-2">
                  {[0, 1].map((side) => (
                    <div key={side} className={`p-2 sm:p-3 ${side === 0 ? "border-r border-border" : ""}`}>
                      <div className="aspect-[4/5]">
                        {spreads[currentPage][side] && (
                          <img
                            src={spreads[currentPage][side]}
                            alt=""
                            className="w-full h-full object-cover shadow-sm"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === spreads.length - 1}
            aria-label={t.photobook.next}
            className="hidden sm:block p-2 text-muted-foreground disabled:text-muted-foreground/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Page counter (too many spreads for dots); on phones the arrows sit here so the photos get the full width */}
        <div className="flex items-center justify-center gap-6 mt-5">
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label={t.photobook.previous}
            className="sm:hidden p-1 text-muted-foreground disabled:text-muted-foreground/20"
          >
            <ChevronLeft size={24} />
          </button>
          <p className="font-body text-sm text-muted-foreground tracking-wider tabular-nums">
            {currentPage + 1} / {spreads.length}
          </p>
          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === spreads.length - 1}
            aria-label={t.photobook.next}
            className="sm:hidden p-1 text-muted-foreground disabled:text-muted-foreground/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Photobook;
