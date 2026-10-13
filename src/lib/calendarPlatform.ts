// Which way of adding events to a calendar suits the guest's device:
// - "apple": iPhone, iPad and Mac open a calendar file straight into Apple Calendar
// - "google": Android phones use Google Calendar, which can't open calendar files,
//   so events are added through Google Calendar links (one event per link)
// - "file": everything else (Windows, Linux, unknown) gets the calendar file,
//   which opens in Outlook or the computer's calendar app
export type CalendarPlatform = "apple" | "google" | "file";

interface DeviceInfo {
  userAgent: string;
  platform?: string;
  maxTouchPoints?: number;
}

export function detectCalendarPlatform({ userAgent, platform = "", maxTouchPoints = 0 }: DeviceInfo): CalendarPlatform {
  if (/Android/i.test(userAgent)) return "google";
  if (/iPhone|iPad|iPod/.test(userAgent)) return "apple";
  // iPads ask for the desktop site and report themselves as a Mac, but have a touch screen
  if (/Macintosh|MacIntel/.test(userAgent + platform)) return "apple";
  if (platform === "MacIntel" && maxTouchPoints > 1) return "apple";
  return "file";
}

export const currentCalendarPlatform = (): CalendarPlatform =>
  typeof navigator === "undefined"
    ? "file"
    : detectCalendarPlatform({
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints,
      });
