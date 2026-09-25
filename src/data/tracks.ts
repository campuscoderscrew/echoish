import type { Track } from "./types";

/** "What we do", written as the tracklist on the back of an album. */
export const TRACKS: Track[] = [
  {
    number: "01",
    title: "General Body Meetings",
    when: "every other week",
    description:
      "Hang out, play games, and show off your musical talents. GBMs are where the whole club comes together, whether you perform or just cheer.",
    doodle: "cassette",
    tone: "turtle",
  },
  {
    number: "02",
    title: "Weeknight music evenings",
    when: "throughout the week",
    description:
      "Low-key evenings for flexible musical engagement. Drop in when your schedule allows, bring an instrument or just your ears.",
    doodle: "guitar",
    tone: "plum",
  },
  {
    number: "03",
    title: "Service performances",
    when: "out in the community",
    description:
      "We visit nursing homes and assisted living facilities to bring joy to their residents by performing music. Sign up to perform or to help out.",
    doodle: "home",
    tone: "rust",
  },
];
