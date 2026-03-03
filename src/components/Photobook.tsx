import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder photos - replace with real couple photos
const pages = [
  {
    left: { type: "text" as const, content: "Our Memories", subtitle: "A collection of moments that led us here" },
    right: { type: "photo" as const, caption: "Summer 2019 — The garden party where it all began" },
  },
  {
    left: { type: "photo" as const, caption: "Autumn 2020 — A quiet afternoon in the park" },
    right: { type: "photo" as const, caption: "Christmas 2020 — Our first holiday together" },
  },
  {
    left: { type: "photo" as const, caption: "Spring 2022 — The promenade through Hyde Park" },
    right: { type: "photo" as const, caption: "Summer 2022 — A weekend in the Cotswolds" },
  },
  {
    left: { type: "photo" as const, caption: "Winter 2023 — Dancing at the New Year's ball" },
    right: { type: "photo" as const, caption: "Spring 2024 — Tea at the manor" },
  },
  {
    left: { type: "photo" as const, caption: "Autumn 2025 — The night he proposed" },
    right: { type: "text" as const, content: "To Be Continued...", subtitle: "July 24th, 2027" },
  },
];

const placeholderColors = [
  "hsl(340, 30%, 80%)",
  "hsl(150, 18%, 80%)",
  "hsl(270, 15%, 85%)",
  "hsl(42, 50%, 82%)",
  "hsl(350, 40%, 85%)",
  "hsl(200, 20%, 82%)",
  "hsl(30, 30%, 80%)",
  "hsl(160, 20%, 78%)",
];

const Photobook = () => {
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
    if (side.type === "text") {
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <p className="font-script text-3xl sm:text-4xl text-primary mb-3">{side.content}</p>
          {"subtitle" in side && (
            <p className="font-body text-sm text-muted-foreground">{side.subtitle}</p>
          )}
        </div>
      );
    }
    return (
      <div className="h-full flex flex-col">
        <div
          className="flex-1 rounded-sm m-3 mb-2 flex items-center justify-center"
          style={{ backgroundColor: placeholderColors[colorIndex % placeholderColors.length] }}
        >
          <p className="font-body text-xs text-foreground/40 px-4 text-center">Photo placeholder</p>
        </div>
        <p className="font-body text-xs text-muted-foreground text-center px-4 pb-3 italic">
          {side.caption}
        </p>
      </div>
    );
  };

  return (
    <section id="photobook" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-script text-3xl text-primary mb-2">Through the Years</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground font-semibold tracking-wide">
            Our Photobook
          </h2>
          <div className="section-divider mt-4">
            <span className="text-gold text-sm">✦</span>
          </div>
        </motion.div>

        {/* Book */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            className="p-2 text-primary disabled:text-muted-foreground/30 transition-colors"
          >
            <ChevronLeft size={32} />
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
                className="bg-card border border-border rounded-sm shadow-lg overflow-hidden"
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
            className="p-2 text-primary disabled:text-muted-foreground/30 transition-colors"
          >
            <ChevronRight size={32} />
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
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentPage ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photobook;
