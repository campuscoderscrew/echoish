import { useId } from "react";

/**
 * A vinyl record, drawn in SVG. The disc spins; the sheen and tonearm stay
 * still, which is what sells the spin. The label is the Echoish waveform with
 * "music · service · community" running around it (from the club logo).
 */
export default function Record({
  className = "",
  spinning = true,
  tonearm = false,
}: {
  className?: string;
  spinning?: boolean;
  tonearm?: boolean;
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const grooves = Array.from({ length: 15 }, (_, i) => 98 + i * 6.4);
  const bars = [10, 22, 36, 50, 30, 44, 24, 14];

  return (
    <svg
      viewBox={tonearm ? "0 0 470 410" : "0 0 400 400"}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-disc`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2622" />
          <stop offset="70%" stopColor="#171513" />
          <stop offset="100%" stopColor="#0d0c0b" />
        </radialGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.28" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.42" stopColor="#fff" stopOpacity="0.13" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.72" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="0.82" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <path
          id={`${id}-ring`}
          d="M200,200 m-67,0 a67,67 0 1,1 134,0 a67,67 0 1,1 -134,0"
        />
      </defs>

      <g className={spinning ? "record-spin" : ""}>
        <circle cx="200" cy="200" r="198" fill={`url(#${id}-disc)`} />
        {grooves.map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#fff"
            strokeOpacity={r % 3 < 1.5 ? 0.07 : 0.035}
          />
        ))}

        {/* Label */}
        <circle cx="200" cy="200" r="86" fill="var(--color-turtle)" />
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="var(--color-paper)"
          strokeOpacity=".35"
          strokeDasharray="2 5"
        />
        <text
          fill="var(--color-paper)"
          fontFamily="DM Mono, ui-monospace, monospace"
          fontSize="12.5"
          fontWeight="500"
          letterSpacing="2"
        >
          <textPath
            href={`#${id}-ring`}
            textLength="415"
            lengthAdjust="spacing"
          >
            MUSIC • SERVICE • COMMUNITY • ECHOISH •
          </textPath>
        </text>
        <circle cx="200" cy="200" r="40" fill="var(--color-paper)" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={200 - (bars.length * 7.5) / 2 + i * 7.5 + 1}
            y={200 - h * 0.45}
            width="4.5"
            height={h * 0.9}
            rx="2.25"
            fill="var(--color-ink)"
          />
        ))}
      </g>

      {/* Static light reflection: stays put while the disc turns underneath. */}
      <circle cx="200" cy="200" r="198" fill={`url(#${id}-sheen)`} />

      {tonearm && (
        <g>
          <circle cx="425" cy="52" r="26" fill="#cfc4ae" />
          <circle cx="425" cy="52" r="14" fill="#9e937d" />
          <path
            d="M425 52 L 420 170 L 330 262"
            fill="none"
            stroke="#d9cfbb"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="306"
            y="252"
            width="36"
            height="20"
            rx="4"
            transform="rotate(-45 324 262)"
            fill="#8f846f"
          />
        </g>
      )}
    </svg>
  );
}
