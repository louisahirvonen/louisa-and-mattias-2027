// Small line drawings for the "Where to stay" and "What to do" lists in the guide for
// guests from abroad. Same style as the schedule drawings: thin warm-grey lines with
// soft sage, rose, gold and lavender accents.
import type { ReactNode } from "react";

const line = "hsl(var(--muted-foreground))";
const paper = "hsl(var(--cream))";
const moss = "hsl(155 18% 58%)";
const rose = "hsl(var(--rose-light))";
const gold = "hsl(var(--gold-light))";
const lavender = "hsl(var(--lavender))";

const Icon = ({ className, children }: { className?: string; children: ReactNode }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <g fill="none" stroke={line} strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  </svg>
);

type IconProps = { className?: string };

/** Norrmalm: a train at Central Station */
const Station = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect x={14} y={8} width={20} height={25} rx={5} fill={paper} />
    <rect x={17.5} y={12} width={13} height={8} rx={1.5} fill={lavender} />
    <circle cx={19} cy={27} r={1.6} fill={gold} />
    <circle cx={29} cy={27} r={1.6} fill={gold} />
    <path d="M17 33 L12 42 M31 33 L36 42 M15 37.5 H33 M13.5 41 H34.5" />
  </Icon>
);

/** Gamla Stan (stay): an old street lantern */
const Lantern = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M17 13 L24 7 L31 13 Z" fill={paper} />
    <path d="M18 13 H30 L28 24 H20 Z" fill={gold} />
    <path d="M24 13 V24" strokeWidth={0.9} />
    <path d="M24 24 V41 M19 41 H29" />
    <path d="M14 45 h4 M21 45 h6 M30 45 h4" strokeWidth={0.9} />
  </Icon>
);

/** Södermalm: a vinyl record (vintage shops and cafés) */
const Vinyl = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx={24} cy={24} r={15} fill={paper} />
    <circle cx={24} cy={24} r={11.5} strokeWidth={0.7} />
    <circle cx={24} cy={24} r={8.5} strokeWidth={0.7} />
    <circle cx={24} cy={24} r={5} fill={rose} />
    <circle cx={24} cy={24} r={1} fill={line} stroke="none" />
    <path d="M33 13 q3 -3 6 -1" strokeWidth={0.9} />
  </Icon>
);

/** Östermalm: a boutique shopping bag */
const Bag = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 17 H36 L34 41 H14 Z" fill={paper} />
    <path d="M13 24 H35" stroke={rose} strokeWidth={3} />
    <path d="M19 17 V14 a5 5 0 0 1 10 0 V17" />
    <circle cx={19} cy={17} r={0.9} fill={line} stroke="none" />
    <circle cx={29} cy={17} r={0.9} fill={line} stroke="none" />
  </Icon>
);

/** Gamla Stan's colourful gabled houses on Stortorget */
const Houses = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M6 42 V22 L11 16 L16 22 V42 Z" fill={gold} />
    <path d="M16 42 V18 H18 V15 H20 V12 H26 V15 H28 V18 H30 V42 Z" fill={rose} />
    <path d="M30 42 V24 L35 18 L40 24 V42 Z" fill="hsl(155 18% 80%)" />
    <path d="M9.5 26 h3 v4 h-3 Z M9.5 33 h3 v4 h-3 Z M20 20 h2.5 v4 h-2.5 Z M23.5 20 h2.5 v4 h-2.5 Z M20 28 h2.5 v4 h-2.5 Z M23.5 28 h2.5 v4 h-2.5 Z M33.5 28 h3 v4 h-3 Z" strokeWidth={0.9} />
    <path d="M21.5 42 v-5 a1.5 1.5 0 0 1 3 0 v5" strokeWidth={0.9} />
    <path d="M3 42 H43" />
  </Icon>
);

/** Fika: coffee and a cinnamon bun */
const Fika = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M7 24 H27 V30 a8 8 0 0 1 -8 8 h-4 a8 8 0 0 1 -8 -8 Z" fill={paper} />
    <path d="M27 26 a4 4 0 0 1 0 8" />
    <path d="M5 41 H29" />
    <path d="M13 20 q-2 -3 0 -6 M18 20 q-2 -3 0 -6 M23 20 q-2 -3 0 -6" strokeWidth={0.9} />
    <circle cx={37} cy={35} r={7} fill={gold} />
    <path d="M37 35 m0 -1.5 a1.5 1.5 0 1 1 -1.5 1.5 a3 3 0 1 1 3 3 a4.5 4.5 0 1 1 -4.5 -4.5" strokeWidth={0.9} />
  </Icon>
);

/** Archipelago boat trip: a little white steamboat */
const Boat = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M30 28 q4 -7 9 -4 q3 1 4 4" fill="hsl(155 18% 80%)" />
    <path d="M6 30 H38 L34 37 H11 Z" fill={paper} />
    <rect x={14} y={23} width={15} height={7} fill={paper} />
    <path d="M17 26 h2 M21 26 h2 M25 26 h2" strokeWidth={0.9} />
    <rect x={20} y={16} width={3.5} height={7} fill={rose} />
    <path d="M4 41 q3 -2 6 0 t6 0 t6 0 t6 0 t6 0 t6 0" stroke={moss} />
  </Icon>
);

/** Sunset at Monteliusvägen: the sun going down over the water and a church spire */
const Sunset = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M13 32 a11 11 0 0 1 22 0 Z" fill={gold} />
    <path d="M24 13 v3 M12 19 l2 2 M36 19 l-2 2 M7 28 h3 M38 28 h3" />
    <path d="M38 32 V22 L40 15 L42 22 V32" fill={paper} />
    <path d="M4 32 H44" />
    <path d="M10 37 h10 M26 37 h12 M15 41 h18" stroke={moss} />
  </Icon>
);

/** Subway art: a painted cave-like metro station with a train */
const Metro = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M5 42 V24 a19 17 0 0 1 38 0 V42" fill={lavender} />
    <path d="M10 18 q4 3 8 0 M30 15 q4 -2 7 2 M21 11 q2 3 5 1" stroke={moss} strokeWidth={1} />
    <rect x={16} y={24} width={16} height={14} rx={3.5} fill={paper} />
    <rect x={19} y={27} width={10} height={5} rx={1} fill={rose} />
    <path d="M12 42 H36 M17 38 l-2 4 M31 38 l2 4" />
  </Icon>
);

/** Djurgården: a Ferris wheel at the amusement park */
const Ferris = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx={24} cy={20} r={13} fill={paper} />
    <path d="M24 7 V33 M11 20 H37 M14.8 10.8 L33.2 29.2 M33.2 10.8 L14.8 29.2" strokeWidth={0.8} />
    <circle cx={24} cy={20} r={2} fill={gold} />
    <g fill={rose}>
      <circle cx={24} cy={7} r={2} /><circle cx={37} cy={20} r={2} /><circle cx={24} cy={33} r={2} /><circle cx={11} cy={20} r={2} />
    </g>
    <g fill="hsl(155 18% 80%)">
      <circle cx={33.2} cy={10.8} r={2} /><circle cx={33.2} cy={29.2} r={2} /><circle cx={14.8} cy={29.2} r={2} /><circle cx={14.8} cy={10.8} r={2} />
    </g>
    <path d="M24 20 L16 42 M24 20 L32 42 M10 42 H38" />
  </Icon>
);

/** The Vasa Museum: a 17th-century sailing warship */
const Ship = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M6 31 Q24 36 42 29 L37 38 H12 Z" fill={paper} />
    <path d="M38 29 V23 H43" />
    <path d="M17 31 V9 M29 31 V11" />
    <path d="M17 12 q6 4 0 8 Z M17 21 q7 4 0 8 Z M29 14 q6 4 0 8 Z M29 23 q6 3 0 6 Z" fill={paper} />
    <path d="M17 9 l5 1.5 l-5 1.5" fill={rose} />
    <path d="M14 34.5 h2 M19 35 h2 M24 35 h2 M29 34 h2" strokeWidth={0.9} />
    <path d="M4 42 q3 -2 6 0 t6 0 t6 0 t6 0 t6 0 t6 0" stroke={moss} />
  </Icon>
);

/** Fotografiska: a camera */
const Camera = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect x={8} y={15} width={32} height={23} rx={4} fill={paper} />
    <path d="M18 15 L20 10 H28 L30 15" fill={paper} />
    <circle cx={24} cy={26.5} r={7.5} fill={lavender} />
    <circle cx={24} cy={26.5} r={4} />
    <circle cx={22.5} cy={25} r={1} fill={paper} stroke="none" />
    <rect x={32} y={19} width={4} height={2.5} rx={0.8} fill={rose} />
  </Icon>
);

// Keys used by t.international steps → columns → items → icon
export const stockholmIcons: Record<string, (props: IconProps) => JSX.Element> = {
  station: Station,
  lantern: Lantern,
  vinyl: Vinyl,
  bag: Bag,
  houses: Houses,
  fika: Fika,
  boat: Boat,
  sunset: Sunset,
  metro: Metro,
  ferris: Ferris,
  ship: Ship,
  camera: Camera,
};
