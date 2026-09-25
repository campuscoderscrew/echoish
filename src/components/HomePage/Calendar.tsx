import { useEffect, useState } from "react";
import { HiOutlineCalendar, HiOutlineExternalLink } from "react-icons/hi";

import Reveal from "../Reveal";
import TornEdge from "../TornEdge";
import { LINKS } from "../../data/links";

/** Agenda view on phones (a month grid is unreadable at 360px), month on desktop. */
function useCalendarMode() {
  const query = "(min-width: 48rem)";
  const [wide, setWide] = useState(() =>
    typeof window === "undefined" ? true : window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setWide(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return wide ? "MONTH" : "AGENDA";
}

/**
 * The club's public Google Calendar, embedded. If the calendar is ever made
 * private the embed will show "no access", so the buttons below always link
 * to it directly too.
 */
export default function Calendar() {
  const mode = useCalendarMode();
  const src =
    "https://calendar.google.com/calendar/embed?" +
    new URLSearchParams({
      src: LINKS.calendarId,
      ctz: "America/New_York",
      mode,
      showTitle: "0",
      showPrint: "0",
      showTabs: "0",
      showCalendars: "0",
      showTz: "0",
      wkst: "1",
      bgcolor: "#fbf7ee",
      color: "#3e6a47",
    }).toString();

  return (
    <section id="calendar" className="relative bg-sage/45 py-24 sm:py-28">
      <TornEdge
        seed={5}
        className="absolute top-0 left-0 -translate-y-[calc(100%-1px)] text-[color-mix(in_srgb,var(--color-sage)_45%,var(--color-paper))]"
      />

      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
        <Reveal>
          <p className="kicker">On tour · Semester calendar</p>
          <h2 className="display mt-4 text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.02] font-semibold">
            What's <span className="italic">coming up</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            GBMs, weeknight music evenings, and service performances all land
            here. Add it to your own calendar so you never miss a night.
          </p>
          <p className="hand mt-5 -rotate-1 text-2xl text-turtle-deep">
            room details go out in our Discord announcements!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={LINKS.calendar}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <HiOutlineCalendar aria-hidden="true" className="size-5" />
              Add to my calendar
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Discord
              <HiOutlineExternalLink aria-hidden="true" className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="paper-card tape rotate-1 p-3 sm:p-4 [--tape:rgb(86_56_106/0.45)] [--tape-rot:2deg]">
            {/* Shows through until the embed paints (or if it can't load). */}
            <div className="absolute inset-3 grid place-items-center text-center sm:inset-4">
              <p className="hand max-w-[16rem] text-2xl text-ink-soft">
                loading the calendar… if it doesn't show up, use the button to
                open it in Google Calendar
              </p>
            </div>
            <iframe
              title="Echoish semester calendar"
              src={src}
              loading="lazy"
              className="relative block h-[30rem] w-full rounded-sm border-0 sm:h-[34rem]"
            />
          </div>
        </Reveal>
      </div>

      <TornEdge
        seed={31}
        flip
        className="absolute bottom-0 left-0 translate-y-[calc(100%-1px)] text-[color-mix(in_srgb,var(--color-sage)_45%,var(--color-paper))]"
      />
    </section>
  );
}
