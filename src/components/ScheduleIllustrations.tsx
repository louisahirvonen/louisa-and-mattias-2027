// Small hand-drawn-style illustrations for the schedule: thin warm-grey lines,
// sage green for moss and greenery, matching the site's floral decorations.

const line = "hsl(var(--muted-foreground))";
const moss = "hsl(155 18% 58%)";
const paper = "hsl(var(--cream))";

const common = {
  fill: "none",
  stroke: line,
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Stora Rytterne: a roofless stone church ruin with a stepped gable, pointed arch and moss */
export const ChurchRuin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 56" className={className} aria-hidden="true">
    <g {...common}>
      {/* Stepped gable with a pointed doorway and a window slit */}
      <path d="M28 50 V24 H31 V20 H34 V16 L40 10 L46 16 V20 H49 V24 H52 V50" fill={paper} />
      <path d="M35.5 50 V41 Q35.5 34 40 31.5 Q44.5 34 44.5 41 V50" />
      <path d="M40 18 V23" />
      {/* Crumbling side walls */}
      <path d="M28 37 L23 37 L20 34 L17 36.5 L14 33.5 L11 35.5 V50" fill={paper} />
      <path d="M52 39 L57 39 L60 36 L63 38.5 L66 35.5 L69 37.5 V50" fill={paper} />
      {/* A few stones */}
      <path d="M15 42 H19 M23 45 H26 M56 44 H60 M63 47 H66 M30 30 H33 M47 34 H50" strokeWidth={0.8} />
      {/* Ground */}
      <path d="M3 50 H77" />
    </g>
    {/* Moss along the broken tops and gable steps */}
    <g fill="none" stroke={moss} strokeWidth={2.4} strokeLinecap="round">
      <path d="M11.5 35 L14 33.5 L17 36" />
      <path d="M20.5 34.5 L23 36.6" />
      <path d="M57.5 38.5 L60 36 L62.5 38" />
      <path d="M66.5 35.8 L68.5 37" />
      <path d="M31.5 19.6 H33.6 M46.4 19.6 H48.6 M28.6 23.6 H30.6" />
    </g>
    {/* Grass tufts */}
    <g fill="none" stroke={moss} strokeWidth={1} strokeLinecap="round">
      <path d="M7 50 l1 -3 l1 3 M24 50 l1 -2.5 l1 2.5 M54 50 l1 -3 l1 3 M72 50 l1 -2.5 l1 2.5" />
    </g>
  </svg>
);

/** Fiholm: the white manor with a hipped roof, chimneys, centre pediment and round topiary */
export const FiholmManor = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 56" className={className} aria-hidden="true">
    <g {...common}>
      {/* Chimneys */}
      <path d="M25 15 V11 H28 V15 M34 15 V11 H37 V15 M43 15 V11 H46 V15 M52 15 V11 H55 V15" />
      {/* Roof: upper slope and lower (copper) slope */}
      <path d="M21 19 L25 15 H55 L59 19 Z" fill={paper} />
      <path d="M15 26 L21 19 H59 L65 26 Z" fill={paper} />
      {/* House */}
      <path d="M17 26 H63 V50 H17 Z" fill={paper} />
      {/* Centre pediment with the clock */}
      <path d="M32 26 L40 20.5 L48 26" />
      <circle cx={40} cy={23.6} r={1.3} />
      {/* Windows */}
      <path
        d="M20.5 30 h3 v4.5 h-3 Z M27 30 h3 v4.5 h-3 Z M33.5 30 h3 v4.5 h-3 Z M43.5 30 h3 v4.5 h-3 Z M50 30 h3 v4.5 h-3 Z M56.5 30 h3 v4.5 h-3 Z
           M20.5 39.5 h3 v4.5 h-3 Z M27 39.5 h3 v4.5 h-3 Z M50 39.5 h3 v4.5 h-3 Z M56.5 39.5 h3 v4.5 h-3 Z"
        strokeWidth={0.9}
      />
      {/* Door */}
      <path d="M37.5 50 V43.5 Q40 41 42.5 43.5 V50" />
      {/* Ground */}
      <path d="M3 50 H77" />
    </g>
    {/* Round topiary bushes in front */}
    <g fill={moss} opacity={0.85}>
      <circle cx={9} cy={46.5} r={3.6} />
      <circle cx={30} cy={47} r={3.2} />
      <circle cx={50} cy={47} r={3.2} />
      <circle cx={71} cy={46.5} r={3.6} />
    </g>
  </svg>
);
