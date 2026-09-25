/**
 * Hand-drawn style doodles, like the ones scribbled on the club's flyers.
 * All stroke `currentColor`, so color them with `text-*`.
 */
type P = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Cassette({ className }: P) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M8 10 Q7 6 12 6 L108 7 Q113 7 112 12 L111 70 Q111 74 106 74 L13 73 Q9 73 9 69 Z" />
        <path d="M24 18 L96 18 L95 44 L25 45 Z" />
        <circle cx="42" cy="31" r="7" />
        <circle cx="78" cy="31" r="7" />
        <path d="M49 31 L71 31" />
        <path d="M30 73 L36 56 L84 56 L90 73" />
        <circle cx="46" cy="65" r="2" />
        <circle cx="74" cy="65" r="2" />
      </g>
    </svg>
  );
}

export function Guitar({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M58 62 C 40 52, 18 60, 16 80 C 14 98, 30 108, 44 104 C 52 102, 54 96, 60 96 C 70 96, 76 90, 74 80 C 72 72, 66 68, 58 62 Z" />
        <circle cx="46" cy="80" r="7" />
        <path d="M52 74 L 98 22" />
        <path d="M56 78 L 101 26" />
        <path d="M95 18 L 104 11 L 110 17 L 103 26 Z" />
        <path d="M34 92 L 42 88" />
      </g>
    </svg>
  );
}

export function HomeHeart({ className }: P) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M14 52 L 60 12 L 106 51" />
        <path d="M24 44 L 25 100 L 96 99 L 95 43" />
        <path d="M84 32 L 84 16 L 94 16 L 94 40" />
        <path d="M60 86 C 44 74, 42 62, 50 58 C 55 55, 59 59, 60 63 C 61 59, 66 55, 71 58 C 79 63, 75 75, 60 86 Z" />
        <path d="M100 70 L 100 50 L 112 47 L 112 66" />
        <ellipse cx="96" cy="71" rx="4.5" ry="3.5" />
        <ellipse cx="108" cy="67" rx="4.5" ry="3.5" />
      </g>
    </svg>
  );
}

export function Star({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 3 L 23 16 L 37 20 L 23 24 L 20 37 L 17 24 L 3 20 L 17 16 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M20 4 L 20 36 M4 20 L 36 20 M9 9 L 31 31 M31 9 L 9 31" />
      </g>
    </svg>
  );
}

export function Notes({ className }: P) {
  return (
    <svg viewBox="0 0 80 60" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M18 46 L 18 12 L 52 6 L 52 38" />
        <path d="M18 18 L 52 12" />
      </g>
      <ellipse cx="12" cy="47" rx="7" ry="5.5" fill="currentColor" />
      <ellipse cx="46" cy="39" rx="7" ry="5.5" fill="currentColor" />
      <g {...stroke}>
        <path d="M68 44 L 68 22 Q 74 26 76 32" />
      </g>
      <ellipse cx="63" cy="45" rx="5" ry="4" fill="currentColor" />
    </svg>
  );
}

/** Loopy hand-drawn arrow, pointing down-left by default. */
export function Arrow({ className }: P) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M112 8 C 90 4, 70 14, 72 30 C 74 44, 94 40, 88 28 C 82 16, 50 26, 36 44 C 28 54, 22 62, 18 70" />
        <path d="M10 56 L 17 71 L 32 66" />
      </g>
    </svg>
  );
}

/** Marker squiggle, for underlining a word. */
export function Squiggle({ className }: P) {
  return (
    <svg
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 16 C 40 4, 60 22, 96 12 S 150 4, 190 14 S 250 20, 296 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
