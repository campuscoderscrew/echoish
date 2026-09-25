import { Star } from "../Doodles";

const ITEMS = [
  "open mic nights",
  "jam evenings",
  "game nights",
  "senior home concerts",
  "movie nights",
  "show off your talents",
  "come as you are",
];

/**
 * A strip of "now playing" text that scrolls sideways. The list is rendered
 * twice so translating by -50% loops seamlessly. Hidden from screen readers:
 * it repeats things said elsewhere on the page.
 */
export default function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="display px-6 text-2xl whitespace-nowrap italic sm:text-3xl">
            {item}
          </span>
          <Star className="size-4 shrink-0 text-marigold" />
        </li>
      ))}
    </ul>
  );

  return (
    // The outer wrapper clips the tilted band's corners so they can't widen
    // the page.
    <div aria-hidden="true" className="overflow-x-clip py-3">
      <div className="relative -rotate-1 overflow-hidden border-y-2 border-ink bg-vinyl py-4 text-paper">
        <div className="marquee-track flex w-max">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
