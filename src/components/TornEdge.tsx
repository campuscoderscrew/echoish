/**
 * A torn-paper edge. Sits on the boundary between two sections; its color
 * (set with `text-*`) should match the section it belongs to.
 *
 * Put it at the top of a section with `absolute top-0 -translate-y-full`, or
 * pass `flip` and put it at the bottom with `bottom-0 translate-y-full`.
 */

// Deterministic "random" so the tear looks the same every render/build.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function tornPath(seed: number) {
  const rand = mulberry32(seed);
  const W = 1200;
  const H = 28;
  let d = `M0,${H} L0,${10 + rand() * 10}`;
  for (let x = 0; x < W;) {
    x = Math.min(W, x + 10 + rand() * 26);
    d += ` L${x.toFixed(1)},${(3 + rand() * 20).toFixed(1)}`;
  }
  return `${d} L${W},${H} Z`;
}

export default function TornEdge({
  seed = 7,
  flip = false,
  className = "",
}: {
  seed?: number;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 28"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-4 w-full sm:h-6 ${
        flip ? "-scale-y-100" : ""
      } ${className}`}
    >
      <path d={tornPath(seed)} fill="currentColor" />
    </svg>
  );
}
