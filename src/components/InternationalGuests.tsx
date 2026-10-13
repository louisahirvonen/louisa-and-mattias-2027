import { useState } from "react";
import { ChevronDown, Info, Plane } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Reveal from "./Reveal";

// Extra guide for guests coming from abroad. Only a few guests need it, so it sits
// folded away behind a button in "Travel & Accommodations", just above the train and
// car cards, which pick up the journey from Stockholm.
const InternationalGuests = () => {
  const { t } = useLanguage();
  const intl = t.international;
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="international-guide"
        className="w-full flex items-center justify-between gap-4 p-5 border border-border bg-card text-left hover:border-primary/30 transition-colors duration-300"
      >
        <span className="flex items-center gap-3">
          <Plane className="text-taupe flex-shrink-0" size={20} />
          <span className="font-display text-lg text-foreground font-medium">{intl.toggle}</span>
        </span>
        <ChevronDown
          size={20}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <Reveal show={open} id="international-guide" duration={0.45}>
        <div className="pt-8 pb-6">
          <p className="font-body text-base text-muted-foreground leading-relaxed text-center max-w-xl mx-auto mb-8">
            {intl.intro}
          </p>

          {/* Before you go */}
          <div className="mb-10 p-6 border border-border bg-card">
            <div className="flex items-center gap-2 mb-3">
              <Info className="text-taupe" size={18} />
              <h3 className="font-display text-lg text-foreground font-medium">{intl.beforeTitle}</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {intl.before.map((item) => (
                <li key={item} className="flex gap-2 font-body text-sm text-muted-foreground leading-relaxed">
                  <span className="text-taupe">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The journey: airport → Stockholm (the train/car cards below take over from there) */}
          <ol className="relative">
            <div
              className="absolute left-4 top-2 bottom-2 w-px"
              style={{ backgroundColor: "hsl(var(--rose-light) / 0.5)" }}
              aria-hidden
            />
            {intl.steps.map((step, i) => (
              <li key={step.title} className="relative pl-14 pb-10 last:pb-0">
                <span
                  className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-display text-sm text-foreground border border-border"
                  style={{ backgroundColor: "hsl(var(--rose-light) / 0.5)" }}
                >
                  {i + 1}
                </span>
                <h3 className="font-display text-xl text-foreground font-medium mb-2 pt-0.5">{step.title}</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">{step.text}</p>

                {step.columns && (
                  <div className="grid sm:grid-cols-2 gap-6 mt-5">
                    {step.columns.map((column) => (
                      <div key={column.title} className="p-5 border border-border bg-card">
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-3">
                          {column.title}
                        </h4>
                        <ul className="space-y-2">
                          {column.items.map((item) => (
                            <li key={item} className="flex gap-2 font-body text-sm text-muted-foreground leading-relaxed">
                              <span className="text-taupe">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </div>
  );
};

export default InternationalGuests;
