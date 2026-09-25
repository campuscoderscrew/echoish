/** What kind of event a setlist entry was. Drives the stub's color + label. */
export type EventKind = "open-mic" | "service" | "gbm" | "social" | "concert";

export interface SetlistEntry {
  /** ISO date, e.g. "2025-10-02". Displayed as a ticket stub date. */
  date: string;
  title: string;
  kind: EventKind;
  /** Where it happened. Omit if the post didn't say. */
  place?: string;
  /** One short line of flavor, taken from the event's own flyer. */
  note?: string;
}

export interface Track {
  number: string;
  title: string;
  /** How often / when, shown in handwriting. */
  when: string;
  description: string;
  /** Which doodle illustrates the card. */
  doodle: "cassette" | "guitar" | "home";
  /** Card color, one of the theme tokens. */
  tone: "turtle" | "rust" | "plum";
}
