// RSVP answers are sent to a Google Form, so no backend is needed.
// Responses show up in the form's "Responses" tab (and can be linked to a Google Sheet).
//
// If questions are added to or changed in the form, get the new IDs: open the form in
// Google Forms → ⋮ menu → "Get pre-filled link", type something in every field,
// click "Get link", and copy the "entry.123456789" IDs from that link below.
export const GOOGLE_FORM = {
  actionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdnq6oHJuwGeYZEKsvlSehp_1b9LgtC2Hw2q3SJZAyrt8bdSw/formResponse",
  fields: {
    guestNames: "entry.406417670",
    guestCount: "entry.1071241389",
    email: "entry.845701044",
    attending: "entry.315159774", // "Yes" / "No" — must match the form's options exactly
    dietaryRestrictions: "entry.334613197",
    stationPickup: "entry.1563334781", // "Yes" / "No"
    message: "entry.653640917",
  },
};

export type RsvpAnswers = Record<keyof typeof GOOGLE_FORM.fields, string>;

export const isGoogleFormConfigured = () =>
  !JSON.stringify(GOOGLE_FORM).includes("REPLACE");

export async function submitToGoogleForm(answers: RsvpAnswers) {
  const body = new URLSearchParams();
  for (const [key, entryId] of Object.entries(GOOGLE_FORM.fields)) {
    body.append(entryId, answers[key as keyof RsvpAnswers]);
  }
  // Google Forms doesn't send CORS headers, so the response can't be read.
  // A network failure still throws, which is the error we can detect.
  await fetch(GOOGLE_FORM.actionUrl, { method: "POST", mode: "no-cors", body });
}
