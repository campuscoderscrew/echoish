/**
 * Every outside link the site uses, in one place. When the Discord invite or
 * calendar changes, update it here AND in /drive-links.json (which powers the
 * short links like <site>/discord).
 */
export const LINKS = {
  discord: "https://discord.gg/CrZQY8f3tG",
  calendar:
    "https://calendar.google.com/calendar/u/0?cid=ZDQ3N2QzMDA4N2FmZTgxZmZhZTI4ZGFlY2ZiOTUzNjJhNGE5NGM1MjZmMTA3ZTEzOGQ3OTI3YzNhNGYwYzE4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
  /** The calendar ID the `cid` above encodes (it is base64). Used for the embed. */
  calendarId:
    "d477d30087afe81ffae28daecfb95362a4a94c526f107e138d7927c3a4f0c184@group.calendar.google.com",
  instagram: "https://www.instagram.com/echoish.umd/",
  instagramHandle: "@echoish.umd",
  linktree: "https://linktr.ee/echoishumd",
  email: "echoishumd@gmail.com",
} as const;

export const ADDRESS = {
  line1: "College Park, MD 20742",
  line2: "United States",
};
