"use client";

const S = "#10b981";
const S2 = "#059669";

function AmericanCab({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {/* Hood (long American style) */}
      <path d="M 0 28 L 0 8 C 0 4 2 2 6 2 L 32 0 L 32 6 L 36 6 L 36 28" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.08" />
      {/* Grille */}
      <rect x="0" y="10" width="4" height="16" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />
      <line x1="1.5" y1="13" x2="1.5" y2="24" stroke={S} strokeWidth="0.8" strokeOpacity="0.4" />
      <line x1="3" y1="13" x2="3" y2="24" stroke={S} strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Bumper */}
      <rect x="-3" y="28" width="42" height="4" rx="1.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.1" />
      {/* Cabin */}
      <path d="M 36 6 L 36 -8 C 36 -12 38 -15 42 -16 L 58 -16 C 62 -16 64 -13 64 -10 L 64 28 L 36 28 Z" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.1" />
      {/* Windshield */}
      <path d="M 38 -4 L 42 -13 L 56 -13 L 56 -4 Z" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.2" />
      {/* Side window */}
      <rect x="44" y="-12" width="14" height="9" rx="1" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.15" />
      {/* Door line */}
      <line x1="50" y1="-2" x2="50" y2="22" stroke={S} strokeWidth="1" strokeOpacity="0.3" />
      {/* Exhaust stack */}
      <rect x="33" y="-24" width="3" height="12" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.12" />
      <ellipse cx="34.5" cy="-25" rx="2.5" ry="1.5" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.1" />
      {/* Air intake / visor */}
      <line x1="36" y1="-16" x2="64" y2="-16" stroke={S} strokeWidth="2" />
      {/* Fuel tank */}
      <rect x="40" y="16" width="18" height="10" rx="3" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.08" />
      {/* Step */}
      <rect x="36" y="24" width="10" height="4" rx="1" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.06" />
      {/* Mirrors */}
      <rect x="35" y="-12" width="2" height="5" rx="0.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.15" />
    </g>
  );
}

function CarSide({ x, y, w = 48, h = 18, flip = false }: { x: number; y: number; w?: number; h?: number; flip?: boolean }) {
  const scaleX = flip ? -1 : 1;
  const translateX = flip ? x + w : x;
  return (
    <g transform={`translate(${translateX},${y}) scale(${scaleX},1)`}>
      {/* Body */}
      <path d={`M 2 ${h} L 0 ${h * 0.65} L ${w * 0.12} ${h * 0.35} L ${w * 0.22} ${h * 0.1} C ${w * 0.25} 0 ${w * 0.3} 0 ${w * 0.35} ${h * 0.05} L ${w * 0.65} ${h * 0.05} C ${w * 0.72} 0 ${w * 0.78} ${h * 0.08} ${w * 0.82} ${h * 0.2} L ${w * 0.95} ${h * 0.5} L ${w} ${h * 0.65} L ${w - 1} ${h} Z`}
        stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.1" />
      {/* Windshield */}
      <path d={`M ${w * 0.22} ${h * 0.15} L ${w * 0.35} ${h * 0.08} L ${w * 0.42} ${h * 0.08} L ${w * 0.38} ${h * 0.38} L ${w * 0.2} ${h * 0.38} Z`}
        stroke={S} strokeWidth="1" fill={S} fillOpacity="0.2" />
      {/* Rear window */}
      <path d={`M ${w * 0.62} ${h * 0.08} L ${w * 0.72} ${h * 0.08} L ${w * 0.78} ${h * 0.25} L ${w * 0.72} ${h * 0.38} L ${w * 0.6} ${h * 0.38} Z`}
        stroke={S} strokeWidth="1" fill={S} fillOpacity="0.15" />
      {/* Side windows */}
      <rect x={w * 0.4} y={h * 0.1} width={w * 0.18} height={h * 0.26} rx="1" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.12" />
      {/* Wheel arches + wheels */}
      <circle cx={w * 0.2} cy={h} r={h * 0.22} stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />
      <circle cx={w * 0.2} cy={h} r={h * 0.1} stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.1" />
      <circle cx={w * 0.78} cy={h} r={h * 0.22} stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />
      <circle cx={w * 0.78} cy={h} r={h * 0.1} stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.1" />
      {/* Door handle */}
      <line x1={w * 0.42} y1={h * 0.45} x2={w * 0.48} y2={h * 0.45} stroke={S} strokeWidth="1" strokeOpacity="0.4" />
      {/* Headlight */}
      <ellipse cx={w * 0.04} cy={h * 0.5} rx={w * 0.025} ry={h * 0.08} stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.2" />
      {/* Tail light */}
      <rect x={w * 0.95} y={h * 0.45} width={w * 0.03} height={h * 0.15} rx="0.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.2" />
    </g>
  );
}

function HotshotTruck({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* Pickup body - F350/Ram 5500 dually style */}
      <path d="M 0 30 L 0 14 L 4 8 L 10 2 C 12 0 16 -1 20 -1 L 34 -1 C 38 -1 40 0 42 3 L 48 10 L 48 14 L 60 14 L 60 -4 C 60 -7 62 -9 65 -9 L 75 -9 L 78 -6 L 78 30" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.08" />
      {/* Windshield */}
      <path d="M 10 4 L 18 -1 L 34 -1 L 38 4 Z" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.18" />
      {/* Side windows */}
      <rect x="14" y="0" width="20" height="8" rx="1" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.12" />
      {/* Door */}
      <line x1="36" y1="2" x2="36" y2="24" stroke={S} strokeWidth="1" strokeOpacity="0.3" />
      {/* Grille */}
      <rect x="-2" y="14" width="4" height="12" rx="1" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.12" />
      {/* Headlight */}
      <ellipse cx="0" cy="12" rx="1.5" ry="2.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.2" />
      {/* Bed */}
      <rect x="48" y="8" width="28" height="22" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.05" />
      {/* Bumper */}
      <rect x="-4" y="30" width="86" height="3" rx="1" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.1" />
      {/* Dually rear fender */}
      <path d="M 60 20 L 60 30 L 78 30 L 78 20 Q 74 14 69 14 Q 64 14 60 20 Z" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.06" />
      {/* Mirror */}
      <rect x="8" y="-2" width="2" height="5" rx="0.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.15" />
      {/* Wheels */}
      <circle cx="16" cy="33" r="7" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.15" />
      <circle cx="16" cy="33" r="3" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.1" />
      <circle cx="66" cy="33" r="7" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.15" />
      <circle cx="66" cy="33" r="3" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.1" />
      <circle cx="74" cy="33" r="5.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.12" />
      <circle cx="74" cy="33" r="2.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.08" />
    </g>
  );
}

function Wheel({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} stroke={S} strokeWidth="2" fill={S} fillOpacity="0.12" />
      <circle cx={cx} cy={cy} r={r * 0.55} stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.08" />
      <circle cx={cx} cy={cy} r={r * 0.2} stroke={S} strokeWidth="0.8" fill={S2} fillOpacity="0.2" />
      {/* Spokes hint */}
      <line x1={cx} y1={cy - r * 0.5} x2={cx} y2={cy + r * 0.5} stroke={S} strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1={cx - r * 0.5} y1={cy} x2={cx + r * 0.5} y2={cy} stroke={S} strokeWidth="0.5" strokeOpacity="0.2" />
    </g>
  );
}

export function EnclosedSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <AmericanCab x={5} y={62} scale={0.95} />

      {/* Enclosed trailer body */}
      <rect x="72" y="28" width="250" height="62" rx="3" stroke={S} strokeWidth="2.5" fill={S} fillOpacity="0.06" />
      {/* Roof line */}
      <path d="M 72 28 Q 75 24 80 24 L 318 24 Q 322 24 322 28" stroke={S} strokeWidth="1.5" fill="none" />
      {/* Bottom rail */}
      <line x1="72" y1="90" x2="322" y2="90" stroke={S} strokeWidth="2.5" />
      {/* Side ribs */}
      {[95, 120, 145, 170, 195, 220, 245, 270, 295].map((xp) => (
        <line key={xp} x1={xp} y1="28" x2={xp} y2="90" stroke={S} strokeWidth="0.8" strokeOpacity="0.2" />
      ))}
      {/* Rear door */}
      <rect x="310" y="32" width="10" height="56" rx="1.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.1" />
      <circle cx="312" cy="60" r="1.5" fill={S} fillOpacity="0.3" />
      {/* Door hinges */}
      <rect x="308" y="40" width="2" height="5" rx="0.5" fill={S} fillOpacity="0.2" />
      <rect x="308" y="68" width="2" height="5" rx="0.5" fill={S} fillOpacity="0.2" />
      {/* Ghost car silhouette inside */}
      <CarSide x={100} y={48} w={56} h={22} />
      <CarSide x={180} y={48} w={56} h={22} />

      {/* Chassis */}
      <line x1="5" y1="96" x2="322" y2="96" stroke={S} strokeWidth="2" />
      {/* Fifth wheel coupling */}
      <path d="M 68 90 L 68 96 L 76 96 L 76 90" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.08" />

      {/* Cab wheels */}
      <Wheel cx={22} cy={103} r={8} />
      <Wheel cx={44} cy={103} r={8} />
      {/* Trailer wheels */}
      <Wheel cx={262} cy={103} r={8} />
      <Wheel cx={282} cy={103} r={8} />
      <Wheel cx={302} cy={103} r={8} />
    </svg>
  );
}

export function Open36SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <HotshotTruck x={5} y={40} />

      {/* Trailer tongue / hitch */}
      <line x1="85" y1="73" x2="105" y2="73" stroke={S} strokeWidth="2" />
      <circle cx="88" cy="73" r="2" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />

      {/* Open trailer frame */}
      <rect x="105" y="36" width="200" height="40" rx="2" stroke={S} strokeWidth="2" fill="none" />
      {/* Deck */}
      <line x1="105" y1="76" x2="305" y2="76" stroke={S} strokeWidth="2.5" />
      {/* Ramp rails (sides) */}
      <line x1="105" y1="36" x2="105" y2="76" stroke={S} strokeWidth="2" />
      <line x1="305" y1="36" x2="305" y2="76" stroke={S} strokeWidth="2" />
      {/* Cross members */}
      <line x1="145" y1="36" x2="145" y2="76" stroke={S} strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="185" y1="36" x2="185" y2="76" stroke={S} strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="225" y1="36" x2="225" y2="76" stroke={S} strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="265" y1="36" x2="265" y2="76" stroke={S} strokeWidth="0.8" strokeOpacity="0.2" />
      {/* Tie-down rail */}
      <line x1="108" y1="68" x2="302" y2="68" stroke={S} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 5" />

      {/* Car on trailer */}
      <CarSide x={120} y={44} w={58} h={22} />
      {/* Second car */}
      <CarSide x={210} y={44} w={58} h={22} />

      {/* Rear ramp (folded up) */}
      <line x1="305" y1="40" x2="312" y2="76" stroke={S} strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Chassis */}
      <line x1="105" y1="82" x2="305" y2="82" stroke={S} strokeWidth="2" />
      {/* Trailer fenders */}
      <path d="M 198 76 Q 198 70 206 70 Q 214 70 214 76" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.05" />
      <path d="M 272 76 Q 272 70 280 70 Q 288 70 288 76" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.05" />
      {/* Trailer wheels */}
      <Wheel cx={206} cy={88} r={7} />
      <Wheel cx={280} cy={88} r={7} />
    </svg>
  );
}

export function Open50SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <AmericanCab x={5} y={68} scale={0.88} />

      {/* Wedge trailer frame */}
      {/* Main deck */}
      <line x1="68" y1="95" x2="340" y2="95" stroke={S} strokeWidth="2.5" />
      {/* Upper deck (wedge - angled up from front) */}
      <line x1="68" y1="50" x2="68" y2="95" stroke={S} strokeWidth="2" />
      <line x1="340" y1="32" x2="340" y2="95" stroke={S} strokeWidth="2" />
      <line x1="68" y1="50" x2="340" y2="32" stroke={S} strokeWidth="2" />
      {/* Upper platform */}
      <line x1="72" y1="52" x2="336" y2="36" stroke={S} strokeWidth="1.5" />
      {/* Vertical supports */}
      {[120, 170, 220, 270, 320].map((xp) => {
        const topY = 50 - ((xp - 68) / (340 - 68)) * 18;
        return <line key={xp} x1={xp} y1={topY} x2={xp} y2={95} stroke={S} strokeWidth="0.8" strokeOpacity="0.2" />;
      })}
      {/* Diagonal braces */}
      <line x1="68" y1="72" x2="340" y2="72" stroke={S} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" />

      {/* Bottom deck: 2 cars */}
      <CarSide x={85} y={66} w={55} h={20} />
      <CarSide x={165} y={66} w={55} h={20} />

      {/* Upper deck: 1 car (angled with the wedge) */}
      <g transform="rotate(-3.8, 260, 40)">
        <CarSide x={240} y={18} w={55} h={18} />
      </g>

      {/* Rear ramp */}
      <line x1="340" y1="95" x2="352" y2="108" stroke={S} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="340" y1="32" x2="348" y2="28" stroke={S} strokeWidth="1" strokeOpacity="0.3" />

      {/* Fifth wheel */}
      <path d="M 64 90 L 64 100 L 74 100 L 74 90" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.06" />
      {/* Chassis */}
      <line x1="5" y1="100" x2="340" y2="100" stroke={S} strokeWidth="2" />

      {/* Cab wheels */}
      <Wheel cx={20} cy={107} r={7.5} />
      <Wheel cx={42} cy={107} r={7.5} />
      {/* Trailer tandem */}
      <Wheel cx={288} cy={107} r={7.5} />
      <Wheel cx={310} cy={107} r={7.5} />
      <Wheel cx={330} cy={107} r={7.5} />
    </svg>
  );
}

export function SemiSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <AmericanCab x={5} y={75} scale={1} />

      {/* Full-size car carrier double deck */}
      {/* Uprights */}
      <line x1="78" y1="14" x2="78" y2="103" stroke={S} strokeWidth="2.5" />
      <line x1="380" y1="14" x2="380" y2="103" stroke={S} strokeWidth="2.5" />
      {/* Top rail */}
      <line x1="78" y1="14" x2="380" y2="14" stroke={S} strokeWidth="2" />
      {/* Upper deck */}
      <line x1="82" y1="24" x2="376" y2="24" stroke={S} strokeWidth="2" />
      {/* Lower deck */}
      <line x1="78" y1="103" x2="380" y2="103" stroke={S} strokeWidth="2.5" />
      {/* Middle separator */}
      <line x1="82" y1="62" x2="376" y2="62" stroke={S} strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Vertical supports */}
      {[130, 180, 230, 280, 330].map((xp) => (
        <line key={xp} x1={xp} y1={14} x2={xp} y2={103} stroke={S} strokeWidth="0.8" strokeOpacity="0.18" />
      ))}
      {/* Diagonal braces (X pattern) */}
      <line x1="78" y1="14" x2="130" y2="62" stroke={S} strokeWidth="0.6" strokeOpacity="0.1" />
      <line x1="380" y1="14" x2="330" y2="62" stroke={S} strokeWidth="0.6" strokeOpacity="0.1" />

      {/* Top deck cars (3 sedans) */}
      <CarSide x={90} y={2} w={52} h={17} />
      <CarSide x={160} y={2} w={52} h={17} />
      <CarSide x={230} y={2} w={52} h={17} />

      {/* Bottom deck cars (3 sedans) */}
      <CarSide x={90} y={68} w={52} h={20} />
      <CarSide x={168} y={68} w={52} h={20} />
      <CarSide x={246} y={68} w={52} h={20} />

      {/* Rear ramp */}
      <line x1="376" y1="103" x2="394" y2="118" stroke={S} strokeWidth="1.8" strokeOpacity="0.5" />
      <line x1="380" y1="62" x2="392" y2="52" stroke={S} strokeWidth="1.2" strokeOpacity="0.3" />
      {/* Ramp surface lines */}
      <line x1="378" y1="98" x2="390" y2="112" stroke={S} strokeWidth="0.6" strokeOpacity="0.2" />
      <line x1="380" y1="98" x2="392" y2="112" stroke={S} strokeWidth="0.6" strokeOpacity="0.2" />

      {/* Fifth wheel */}
      <path d="M 73 97 L 73 108 L 84 108 L 84 97" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.06" />
      {/* Chassis */}
      <line x1="5" y1="108" x2="380" y2="108" stroke={S} strokeWidth="2" />

      {/* Cab wheels (steer + drive axles) */}
      <Wheel cx={22} cy={116} r={8} />
      <Wheel cx={48} cy={116} r={8} />
      <Wheel cx={62} cy={116} r={7} />
      {/* Trailer tandems */}
      <Wheel cx={310} cy={116} r={8} />
      <Wheel cx={332} cy={116} r={8} />
      <Wheel cx={354} cy={116} r={8} />
    </svg>
  );
}
