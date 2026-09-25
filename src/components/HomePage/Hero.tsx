import { FaDiscord } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";

import Record from "../Record";
import { Arrow, Notes, Sparkle, Squiggle, Star } from "../Doodles";
import { LINKS } from "../../data/links";

/**
 * The album cover. Left: the name and the pitch. Right: a record resting on
 * its sleeve, with "echo" rings pulsing out from it.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-x-clip pt-28 pb-24 sm:pt-36 lg:pb-32"
    >
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Copy */}
        <div className="relative">
          <p className="kicker flex items-baseline gap-2">
            <span className="inline-block size-2 shrink-0 rounded-full bg-turtle" />
            Student-run at the University of Maryland
          </p>

          <h1 className="display relative mt-4 w-fit text-[clamp(4.5rem,17vw,9.75rem)] leading-[0.82] font-semibold italic">
            echoish
            <Squiggle className="absolute -bottom-3 left-[4%] h-4 w-[92%] text-marigold sm:-bottom-4 sm:h-6" />
          </h1>

          <p className="display mt-9 text-[clamp(1.6rem,4.2vw,2.35rem)] leading-tight font-medium">
            is about <span className="text-turtle-deep italic">music</span> and{" "}
            <span className="text-rust-deep italic">service</span>.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            We provide a safe space for all music enjoyers, musicians, and
            anyone interested in helping their community to come together on
            campus.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaDiscord aria-hidden="true" className="size-5" />
              Join our Discord
            </a>
            <a href="#calendar" className="btn btn-secondary">
              <HiOutlineCalendar aria-hidden="true" className="size-5" />
              Semester calendar
            </a>
          </div>

          {/* Margin note */}
          <div className="mt-9 flex items-end gap-2 text-plum sm:mt-6 sm:ml-72 lg:ml-60">
            <Arrow className="hidden h-14 w-20 -scale-x-100 rotate-[200deg] sm:block" />
            <p className="hand -rotate-3 text-[1.7rem]">
              can't sing or play? <br className="hidden sm:block" />
              you're still welcome!
            </p>
          </div>
        </div>

        {/* Record on sleeve */}
        <div className="relative mx-auto aspect-[1/0.92] w-full max-w-[34rem]">
          {/* Sleeve (album cover) */}
          <div className="tape lift absolute top-[4%] left-0 aspect-square w-[74%] -rotate-[5deg] bg-rust shadow-[0_24px_40px_-18px_rgb(31_27_22/0.6)] [--tape:rgb(169_199_216/0.75)]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full text-paper opacity-25"
              aria-hidden="true"
            >
              {[18, 32, 46, 60, 74, 88, 102].map((r) => (
                <circle
                  key={r}
                  cx="0"
                  cy="100"
                  r={r}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.7"
                />
              ))}
            </svg>
            <p className="kicker absolute top-[7%] left-[8%] !text-paper/85">
              Side A
            </p>
            <p className="display absolute bottom-[8%] left-[8%] text-[clamp(1.05rem,3.6vw,1.6rem)] leading-[0.98] font-semibold text-paper">
              Music
              <br />
              <span className="italic">Service</span>
              <br />
              Community
            </p>
          </div>

          {/* Echo rings + record */}
          <div className="absolute top-[14%] right-[-3%] aspect-square w-[66%]">
            {[0, 1.4, 2.8].map((delay) => (
              <span
                key={delay}
                aria-hidden="true"
                className="echo-ring absolute inset-0 rounded-full border-2 border-turtle/60"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
            <Record className="relative size-full drop-shadow-[0_22px_24px_rgb(31_27_22/0.45)]" />
          </div>

          {/* Stickers + doodles */}
          <span className="sticker lift absolute bottom-[2%] left-[6%] rotate-[-8deg] bg-blush text-ink">
            <Star className="size-3.5 text-rust" /> biweekly GBMs
          </span>
          <span className="sticker lift absolute top-0 right-[4%] rotate-[7deg] bg-sage text-ink">
            all welcome
          </span>
          <Notes className="absolute right-[-2%] bottom-[8%] h-12 w-16 rotate-12 text-turtle" />
          <Sparkle className="absolute top-[-4%] left-[40%] size-7 text-marigold" />
          <Star className="absolute bottom-[26%] left-[-3%] size-5 text-plum" />
        </div>
      </div>
    </section>
  );
}
