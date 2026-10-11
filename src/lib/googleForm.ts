// RSVP answers are sent to a Google Form, so no backend is needed.
// Responses show up in the form's "Responses" tab (and can be linked to a Google Sheet).
//
// To fill this in: open the form in Google Forms → ⋮ menu → "Get pre-filled link",
// type something in every field, click "Get link", and copy the "entry.123456789"
// IDs from that link into the matching fields below.
export const GOOGLE_FORM = {
  // https://docs.google.com/forms/d/e/<FORM_ID>/formResponse
  actionUrl: "https://docs.google.com/forms/d/e/REPLACE_WITH_FORM_ID/formResponse",
  fields: {
    guestNames: "entry.REPLACE_ME",
    guestCount: "entry.REPLACE_ME",
    email: "entry.REPLACE_ME",
    attending: "entry.REPLACE_ME",
    dietaryRestrictions: "entry.REPLACE_ME",
    stationPickup: "entry.REPLACE_ME",
    message: "entry.REPLACE_ME",
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
