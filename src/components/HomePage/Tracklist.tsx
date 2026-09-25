import Reveal from "../Reveal";
import TornEdge from "../TornEdge";
import { Cassette, Guitar, HomeHeart } from "../Doodles";
import { TRACKS } from "../../data/tracks";
import type { Track } from "../../data/types";

const TONE: Record<Track["tone"], string> = {
  turtle: "bg-turtle-deep",
  plum: "bg-plum",
  rust: "bg-rust-deep",
};

const DOODLE: Record<Track["doodle"], typeof Cassette> = {
  cassette: Cassette,
  guitar: Guitar,
  home: HomeHeart,
};

// Slightly different angles so the cards look pinned up by hand.
const TILT = ["-rotate-2", "rotate-1", "-rotate-1"];

/** "What we do", laid out like the tracklist on the back of an album. */
export default function Tracklist() {
  return (
    <section id="what-we-do" className="relative bg-paper-deep py-24 sm:py-28">
      <TornEdge
        seed={11}
        className="absolute top-0 left-0 -translate-y-[calc(100%-1px)] text-paper-deep"
      />

      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Tracklist · What we do</p>
            <h2 className="display mt-4 text-[clamp(2.3rem,5.5vw,3.75rem)] leading-[1.02] font-semibold">
              Three ways to <span className="italic">tune in</span>
            </h2>
          </div>
          <p className="hand max-w-xs -rotate-2 text-2xl text-rust-deep">
            pick one, pick all three ♪
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {TRACKS.map((track, i) => {
            const Doodle = DOODLE[track.doodle];
            return (
              <li key={track.number}>
                <Reveal delay={i * 120} className="h-full">
                  <article
                    className={`lift relative flex h-full flex-col overflow-hidden rounded-sm p-7 text-paper shadow-[0_18px_30px_-18px_rgb(31_27_22/0.7)] ${TONE[track.tone]} ${TILT[i % TILT.length]}`}
                  >
                    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-paper/35 pb-4">
                      <span className="font-mono text-sm tracking-[0.2em]">
                        TRACK {track.number}
                      </span>
                      <span className="hand text-2xl text-marigold">
                        {track.when}
                      </span>
                    </div>
                    <h3 className="display mt-5 text-3xl leading-tight font-semibold">
                      {track.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-paper/90">
                      {track.description}
                    </p>
                    <Doodle className="mt-auto h-20 w-auto self-end pt-6 text-paper/70" />
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-16 text-center">
          <p className="display mx-auto max-w-3xl text-[clamp(1.5rem,3.4vw,2.2rem)] leading-snug">
            Anyone, whether you like to play, compose, or listen to music, or
            just want a fun place to hang out,{" "}
            <span className="italic text-turtle-deep">is welcome!</span>
          </p>
        </Reveal>
      </div>

      <TornEdge
        seed={23}
        flip
        className="absolute bottom-0 left-0 translate-y-[calc(100%-1px)] text-paper-deep"
      />
    </section>
  );
}
