import { describe, expect, it } from "vitest";
import { detectCalendarPlatform } from "./calendarPlatform";

describe("detectCalendarPlatform", () => {
  it("sends iPhones to Apple Calendar", () => {
    expect(
      detectCalendarPlatform({
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
        platform: "iPhone",
        maxTouchPoints: 5,
      }),
    ).toBe("apple");
  });

  it("recognises iPads that ask for the desktop site", () => {
    expect(
      detectCalendarPlatform({
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15",
        platform: "MacIntel",
        maxTouchPoints: 5,
      }),
    ).toBe("apple");
  });

  it("sends Macs to Apple Calendar", () => {
    expect(
      detectCalendarPlatform({
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        platform: "MacIntel",
        maxTouchPoints: 0,
      }),
    ).toBe("apple");
  });

  it("sends Android phones to Google Calendar", () => {
    expect(
      detectCalendarPlatform({
        userAgent:
          "Mozilla/5.0 (Linux; Android 15; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
        platform: "Linux armv81",
        maxTouchPoints: 5,
      }),
    ).toBe("google");
  });

  it("gives Windows computers the calendar file", () => {
    expect(
      detectCalendarPlatform({
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0",
        platform: "Win32",
      }),
    ).toBe("file");
  });

  it("falls back to the calendar file for anything unknown", () => {
    expect(detectCalendarPlatform({ userAgent: "" })).toBe("file");
  });
});
