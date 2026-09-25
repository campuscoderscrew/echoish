import Reveal from "../Reveal";
import { Sparkle } from "../Doodles";

/** "Liner notes": who Echoish is, in the club's own words. */
export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal>
          <p className="kicker">Liner notes · About us</p>
          <h2 className="display mt-4 text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.02] font-semibold">
            Connecting students through{" "}
            <span className="relative whitespace-nowrap italic">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-4px] bottom-[0.08em] -z-10 h-[0.42em] -rotate-1 bg-marigold/60"
              />
              service &amp; music
            </span>
            .
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              We strive to make music more accessible to students in the midst
              of a busy college life, and hope to create opportunities for
              students to explore and present their talents.
            </p>
            <p>
              Echoish is a music and community-based club: a place for anyone
              who loves music to gather, share what they make, and give back.
            </p>
          </div>
        </Reveal>

        {/* Index card */}
        <Reveal delay={150} className="self-center">
          <div className="paper-card tape lift mx-auto max-w-sm rotate-2 px-7 pt-10 pb-8 [--tape:rgb(242_189_184/0.8)]">
            {/* Ruled lines */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_2.2rem,rgb(169_199_216/0.5)_2.2rem,rgb(169_199_216/0.5)_calc(2.2rem+1px))] bg-[position:0_3.2rem]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-10 w-px bg-rust/40"
            />
            <div className="relative pl-6">
              <p className="hand text-[2.1rem] leading-[1.06] text-ink">
                Can't sing or play an instrument?
              </p>
              <p className="hand mt-3 text-[2.1rem] leading-[1.06] text-turtle-deep">
                That's ok! Echoish has a place for you.
              </p>
              <p className="kicker mt-6 !text-[0.7rem]">
                From our welcome flyer
              </p>
            </div>
            <Sparkle className="absolute -right-3 -bottom-3 size-9 text-marigold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
