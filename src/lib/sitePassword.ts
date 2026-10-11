// A simple password screen in front of the site. This keeps out people who
// stumble on the link, but it isn't real security: the site is static, so the
// check runs in the visitor's browser and the site's files are public.
//
// The password itself isn't stored, only its SHA-256 hash (lowercase, trimmed).
// To change the password, run this and paste the result below:
//   node -e "console.log(require('crypto').createHash('sha256').update('new password'.trim().toLowerCase()).digest('hex'))"
export const PASSWORD_HASH = "0aa07ebfb585ca2c4fa69778d1395b2177f6cd4511a32971dd99cb0128db223b";

const STORAGE_KEY = "unlocked";

export async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password.trim().toLowerCase());
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function checkPassword(password: string) {
  return (await hashPassword(password)) === PASSWORD_HASH;
}

// Guests only need to enter the password once per device.
// Storing the hash means changing the password locks everyone out again.
export function isUnlocked() {
  try {
    return localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH;
  } catch {
    return false;
  }
}

export function rememberUnlock() {
  try {
    localStorage.setItem(STORAGE_KEY, PASSWORD_HASH);
  } catch {
    // Storage blocked (e.g. private browsing): they'll be asked again next visit
  }
}
