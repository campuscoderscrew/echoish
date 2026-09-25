import type { SetlistEntry } from "./types";

/**
 * Past events, newest first. Taken from the @echoish.umd Instagram flyers.
 * Add new ones at the TOP. Keep `note` short; it's one line on a ticket stub.
 */
export const SETLIST: SetlistEntry[] = [
  {
    date: "2026-09-17",
    title: "First GBM & Speed Dating",
    kind: "gbm",
    note: "Get to know your peers and hear what the year will look like.",
  },
  {
    date: "2026-05-06",
    title: "Movie Night",
    kind: "social",
    place: "Tawes Hall 0310",
    note: "Our last GBM of the spring. Whiplash and popcorn.",
  },
  {
    date: "2026-04-26",
    title: "Independence Court of Hyattsville",
    kind: "service",
    note: "A performance for the residents. Members signed up to play or help.",
  },
  {
    date: "2026-04-01",
    title: "Candlelight Concert",
    kind: "concert",
    note: "Open invite: live music and a spring breeze.",
  },
  {
    date: "2026-03-04",
    title: "Open Mic Night GBM",
    kind: "open-mic",
    place: "Tawes Hall 0310",
  },
  {
    date: "2025-12-04",
    title: "Cookie Decorating & Movie Night",
    kind: "social",
    place: "Tawes Hall 0320",
    note: "Hot cocoa and cookies to destress before finals.",
  },
  {
    date: "2025-11-22",
    title: "Autumn Lake Senior Home",
    kind: "service",
    note: "An afternoon performance for the residents.",
  },
  {
    date: "2025-10-30",
    title: "Halloween Open Mic",
    kind: "open-mic",
    place: "Tawes Hall 0320",
    note: "Music, poetry, and vibes. Costumes encouraged.",
  },
  {
    date: "2025-10-16",
    title: "Echo Beats",
    kind: "gbm",
    place: "Tawes Hall 0320",
    note: "Bring your instruments!",
  },
  {
    date: "2025-10-02",
    title: "Open Mic Night",
    kind: "open-mic",
    place: "Tawes Hall 0320",
    note: "Music, poetry, or any performance you love.",
  },
];
