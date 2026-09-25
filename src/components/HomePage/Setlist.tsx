import { FaInstagram } from "react-icons/fa";

import Reveal from "../Reveal";
import { SETLIST } from "../../data/setlist";
import { LINKS } from "../../data/links";
import type { EventKind } from "../../data/types";

const KIND: Record<EventKind, { label: string; stub: string; chip: string }> = {
  "open-mic": {
    label: "Open mic",
    stub: "bg-plum text-paper",
    chip: "bg-plum/12 text-plum",
  },
  service: {
    label: "Service",
    stub: "bg-rust-deep text-paper",
    chip: "bg-rust/12 text-rust-deep",
  },
  gbm: {
    label: "GBM",
    stub: "bg-turtle-deep text-paper",
    chip: "bg-turtle/12 text-turtle-deep",
  },
  social: {
    label: "Social",
    stub: "bg-marigold text-ink",
    chip: "bg-marigold/25 text-ink",
  },
  concert: {
    label: "Concert",
    stub: "bg-vinyl text-paper",
    chip: "bg-ink/10 text-ink",
  },
};

function parts(iso: string) {
  // Build the date from its parts so it doesn't shift a day in US time zones.
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return {
    month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: String(d).padStart(2, "0"),
    year: String(y),
  };
}

/** Past events as ticket stubs. Data lives in src/data/setlist.ts. */
export default function Setlist() {
  return (
    <section id="setlist" className="relative py-24 sm:py-32">
      <div className="shell">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="kicker">B-side · Recently played</p>
            <h2 className="display mt-4 text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.02] font-semibold">
              Our setlist so far
            </h2>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">
              Open mics, jam nights, cozy socials, and performances for local
              senior communities. Here's a taste of what we've been up to.
            </p>
          </div>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary self-start lg:self-end"
          >
            <FaInstagram aria-hidden="true" className="size-5" />
            More on {LINKS.instagramHandle}
          </a>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {SETLIST.map((event, i) => {
            const k = KIND[event.kind];
            const { month, day, year } = parts(event.date);
            return (
              <li key={event.date + event.title}>
                <Reveal delay={(i % 2) * 90} className="h-full">
                  <article
                    className={`lift flex h-full overflow-hidden rounded-md bg-paper-light shadow-[0_10px_24px_-16px_rgb(31_27_22/0.6)] ${
                      i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
                    }`}
                  >
                    {/* Stub */}
                    <div
                      className={`relative flex w-24 shrink-0 flex-col items-center justify-center py-5 font-mono sm:w-28 ${k.stub}`}
                    >
                      <span className="text-xs tracking-[0.25em]">{month}</span>
                      <span className="display text-4xl leading-none font-semibold not-italic">
                        {day}
                      </span>
                      <span className="text-xs tracking-[0.2em] opacity-80">
                        {year}
                      </span>
                      {/* Perforation: punched notches + dashed tear line */}
                      <span
                        aria-hidden="true"
                        className="absolute -top-2 -right-2 size-4 rounded-full bg-paper"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -right-2 -bottom-2 size-4 rounded-full bg-paper"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col border-l-2 border-dashed border-ink/20 px-5 py-4">
                      <span
                        className={`w-fit rounded-full px-2.5 py-0.5 font-mono text-[0.7rem] tracking-[0.14em] uppercase ${k.chip}`}
                      >
                        {k.label}
                      </span>
                      <h3 className="display mt-2 text-xl leading-snug font-semibold text-balance">
                        {event.title}
                      </h3>
                      {event.note && (
                        <p className="mt-1 text-[0.95rem] leading-snug text-ink-soft">
                          {event.note}
                        </p>
                      )}
                      {event.place && (
                        <p className="mt-auto pt-2 font-mono text-xs tracking-wide text-ink-soft">
                          {event.place}
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
