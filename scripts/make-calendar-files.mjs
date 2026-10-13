// Writes public/calendar/<language>.ics: one calendar file per language with the
// wedding and the RSVP deadline, each with a reminder. Run after changing
// src/lib/calendarEvents.json:  node scripts/make-calendar-files.mjs
//
// They're static files (not generated in the browser) because iPhones only offer
// "Add to Calendar" for a real .ics file served from the website.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const events = JSON.parse(readFileSync(new URL("../src/lib/calendarEvents.json", import.meta.url), "utf8"));

// iCalendar text escaping and line folding (lines over 75 bytes continue on a new line starting with a space)
const escape = (s) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
const fold = (line) => {
  const out = [];
  let current = "";
  for (const ch of line) {
    if (Buffer.byteLength(current + ch) > (out.length ? 74 : 75)) {
      out.push(current);
      current = "";
    }
    current += ch;
  }
  out.push(current);
  return out.join("\r\n ");
};

const stamp = "20261013T000000Z";
mkdirSync(new URL("../public/calendar/", import.meta.url), { recursive: true });

for (const [lang, t] of Object.entries(events.text)) {
  const fill = (s) => s.replace("{url}", `${events.siteUrl}?lang=${lang}`);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//Louisa & Mattias//Wedding//${lang.toUpperCase()}`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    // The wedding, with an alert the day before
    "BEGIN:VEVENT",
    "UID:wedding-20270724@louisa-and-mattias-2027",
    `DTSTAMP:${stamp}`,
    `DTSTART:${events.wedding.start}`,
    `DTEND:${events.wedding.end}`,
    `SUMMARY:${escape(t.weddingTitle)}`,
    `LOCATION:${escape(events.wedding.location)}`,
    `DESCRIPTION:${escape(fill(t.weddingDetails))}`,
    `URL:${events.siteUrl}?lang=${lang}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escape(t.weddingTitle)}`,
    "TRIGGER:-P1D",
    "END:VALARM",
    "END:VEVENT",
    // The RSVP deadline as an all-day event, with an alert at 09:00 the day before
    "BEGIN:VEVENT",
    "UID:rsvp-deadline-20270601@louisa-and-mattias-2027",
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${events.rsvpDeadline.date}`,
    `DTEND;VALUE=DATE:${events.rsvpDeadline.dayAfter}`,
    `SUMMARY:${escape(t.rsvpTitle)}`,
    `DESCRIPTION:${escape(fill(t.rsvpDetails))}`,
    `URL:${events.siteUrl}?lang=${lang}`,
    "TRANSP:TRANSPARENT",
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escape(t.rsvpTitle)}`,
    "TRIGGER:-PT15H",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  writeFileSync(new URL(`../public/calendar/${lang}.ics`, import.meta.url), lines.map(fold).join("\r\n") + "\r\n");
  console.log(`public/calendar/${lang}.ics`);
}
