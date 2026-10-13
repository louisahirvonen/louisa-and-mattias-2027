import { CalendarPlus, ChevronDown, Smartphone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import events from "@/lib/calendarEvents.json";
import Reveal from "./Reveal";

const googleLink = (title: string, dates: string, details: string, location?: string) => {
  const params = new URLSearchParams({ action: "TEMPLATE", text: title, dates, details });
  if (location) params.set("location", location);
  return `https://calendar.google.com/calendar/render?${params}`;
};

interface AddToCalendarPanelProps {
  open: boolean;
}

// The choices shown under the hero buttons: one calendar file with both events
// (iPhone/Mac/Outlook open it directly), or one Google Calendar link per event
// (Google Calendar on Android can't open calendar files).
export const AddToCalendarPanel = ({ open }: AddToCalendarPanelProps) => {
  const { language, t } = useLanguage();
  const text = events.text[language];
  const url = `${events.siteUrl}?lang=${language}`;
  const fill = (s: string) => s.replace("{url}", url);

  const weddingLink = googleLink(
    text.weddingTitle,
    `${events.wedding.start}/${events.wedding.end}`,
    fill(text.weddingDetails),
    events.wedding.location,
  );
  const rsvpLink = googleLink(
    text.rsvpTitle,
    `${events.rsvpDeadline.date}/${events.rsvpDeadline.dayAfter}`,
    fill(text.rsvpDetails),
  );

  const optionClasses =
    "flex items-center justify-center gap-2 w-full px-4 py-3 font-body text-base text-center text-foreground bg-background border border-border hover:border-primary/40 transition-colors duration-300";

  return (
    <Reveal show={open} id="add-to-calendar">
      <div className="pt-3">
        <div className="p-4 border border-border bg-card text-left space-y-4">
          <p className="font-body text-sm text-muted-foreground text-center">{t.hero.calendarIntro}</p>

          {/* Calendar file with both events (served from public/calendar) */}
          <a href={`${import.meta.env.BASE_URL}calendar/${language}.ics`} className={optionClasses}>
            <Smartphone size={18} className="text-taupe flex-shrink-0" />
            {t.hero.calendarApple}
          </a>

          <div>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground text-center mb-2">
              {t.hero.calendarGoogle}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a href={weddingLink} target="_blank" rel="noopener noreferrer" className={optionClasses}>
                {t.hero.calendarGoogleWedding}
              </a>
              <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className={optionClasses}>
                {t.hero.calendarGoogleRsvp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

interface AddToCalendarButtonProps {
  open: boolean;
  onToggle: () => void;
  className?: string;
}

export const AddToCalendarButton = ({ open, onToggle, className = "" }: AddToCalendarButtonProps) => {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="add-to-calendar"
      className={`flex items-center justify-center gap-2 px-4 py-3.5 font-body text-sm tracking-[0.15em] uppercase whitespace-nowrap text-primary border border-primary bg-background hover:bg-primary/5 transition-colors duration-300 ${className}`}
    >
      <CalendarPlus size={18} className="flex-shrink-0" />
      {t.hero.calendarButton}
      <ChevronDown
        size={16}
        className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
};
