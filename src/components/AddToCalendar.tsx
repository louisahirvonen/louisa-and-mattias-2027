import { useState } from "react";
import { CalendarCheck, CalendarPlus, ChevronDown, Smartphone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import events from "@/lib/calendarEvents.json";
import { currentCalendarPlatform } from "@/lib/calendarPlatform";
import Reveal from "./Reveal";

const googleLink = (title: string, dates: string, details: string, location?: string) => {
  const params = new URLSearchParams({ action: "TEMPLATE", text: title, dates, details });
  if (location) params.set("location", location);
  return `https://calendar.google.com/calendar/render?${params}`;
};

// Everything needed to add the two events in the current language
const useCalendarLinks = () => {
  const { language } = useLanguage();
  const text = events.text[language];
  const fill = (s: string) => s.replace("{url}", `${events.siteUrl}?lang=${language}`);
  return {
    // Calendar file with both events (served from public/calendar)
    file: `${import.meta.env.BASE_URL}calendar/${language}.ics`,
    googleWedding: googleLink(
      text.weddingTitle,
      `${events.wedding.start}/${events.wedding.end}`,
      fill(text.weddingDetails),
      events.wedding.location,
    ),
    googleRsvp: googleLink(
      text.rsvpTitle,
      `${events.rsvpDeadline.date}/${events.rsvpDeadline.dayAfter}`,
      fill(text.rsvpDetails),
    ),
  };
};

const buttonClasses =
  "flex items-center justify-center gap-2 px-4 py-3.5 font-body text-sm tracking-[0.15em] uppercase whitespace-nowrap text-primary border border-primary bg-background hover:bg-primary/5 transition-colors duration-300";

/**
 * One button that adds the wedding and the RSVP deadline the right way for the guest's device.
 * iPhone/iPad/Mac and computers get the calendar file (both events in one tap). Android gets
 * Google Calendar links, one event per tap: the button walks the guest through both.
 */
export const AddToCalendarButton = ({ className = "" }: { className?: string }) => {
  const { t } = useLanguage();
  const links = useCalendarLinks();
  const [platform] = useState(currentCalendarPlatform);
  const [googleStep, setGoogleStep] = useState(0); // 0: wedding next, 1: RSVP date next, 2: both added

  if (platform !== "google") {
    return (
      <a href={links.file} className={`${buttonClasses} ${className}`}>
        <CalendarPlus size={18} className="flex-shrink-0" />
        {t.hero.calendarButton}
      </a>
    );
  }

  const steps = [
    { href: links.googleWedding, label: t.hero.calendarButton, Icon: CalendarPlus },
    { href: links.googleRsvp, label: t.hero.calendarAndroidNext, Icon: CalendarPlus },
    { href: links.googleWedding, label: t.hero.calendarDone, Icon: CalendarCheck },
  ];
  const { href, label, Icon } = steps[googleStep];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // The link opens first; then the button moves on to the next event (and starts over after both)
      onClick={() => setGoogleStep((googleStep + 1) % 3)}
      className={`${buttonClasses} ${className}`}
    >
      <Icon size={18} className="flex-shrink-0" />
      {label}
    </a>
  );
};

/** Small "Using another calendar?" link that folds open every option, in case the device guess is wrong */
export const OtherCalendarOptions = () => {
  const { t } = useLanguage();
  const links = useCalendarLinks();
  const [open, setOpen] = useState(false);

  const optionClasses =
    "flex items-center justify-center gap-2 w-full px-4 py-3 font-body text-base text-center text-foreground bg-background border border-border hover:border-primary/40 transition-colors duration-300";

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="other-calendars"
        className="mt-3 inline-flex items-center gap-1 font-body text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        {t.hero.calendarOther}
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <Reveal show={open} id="other-calendars">
        <div className="pt-3">
          <div className="p-4 border border-border bg-card text-left space-y-4">
            <p className="font-body text-sm text-muted-foreground text-center">{t.hero.calendarIntro}</p>
            <a href={links.file} className={optionClasses}>
              <Smartphone size={18} className="text-taupe flex-shrink-0" />
              {t.hero.calendarApple}
            </a>
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground text-center mb-2">
                {t.hero.calendarGoogle}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a href={links.googleWedding} target="_blank" rel="noopener noreferrer" className={optionClasses}>
                  {t.hero.calendarGoogleWedding}
                </a>
                <a href={links.googleRsvp} target="_blank" rel="noopener noreferrer" className={optionClasses}>
                  {t.hero.calendarGoogleRsvp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
