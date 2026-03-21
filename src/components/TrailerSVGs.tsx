"use client";

const S = "#10b981";
const S2 = "#059669";

function Wheel({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} stroke={S} strokeWidth="2" fill={S} fillOpacity="0.12" />
      <circle cx={cx} cy={cy} r={r * 0.55} stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.08" />
      <circle cx={cx} cy={cy} r={r * 0.2} stroke={S} strokeWidth="0.8" fill={S2} fillOpacity="0.2" />
      <line x1={cx} y1={cy - r * 0.5} x2={cx} y2={cy + r * 0.5} stroke={S} strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1={cx - r * 0.5} y1={cy} x2={cx + r * 0.5} y2={cy} stroke={S} strokeWidth="0.5" strokeOpacity="0.2" />
    </g>
  );
}

function CarSide({ x, y, w = 48, h = 18 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* Body */}
      <path d={`M 2 ${h} L 0 ${h * 0.65} L ${w * 0.08} ${h * 0.4} L ${w * 0.18} ${h * 0.12} C ${w * 0.22} 0 ${w * 0.28} -${h * 0.02} ${w * 0.33} ${h * 0.04} L ${w * 0.67} ${h * 0.04} C ${w * 0.74} -${h * 0.02} ${w * 0.8} ${h * 0.1} ${w * 0.84} ${h * 0.22} L ${w * 0.96} ${h * 0.5} L ${w} ${h * 0.65} L ${w - 1} ${h} Z`}
        stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.1" />
      {/* Windshield */}
      <path d={`M ${w * 0.2} ${h * 0.16} L ${w * 0.33} ${h * 0.06} L ${w * 0.43} ${h * 0.06} L ${w * 0.39} ${h * 0.36} L ${w * 0.18} ${h * 0.36} Z`}
        stroke={S} strokeWidth="1" fill={S} fillOpacity="0.2" />
      {/* Rear window */}
      <path d={`M ${w * 0.6} ${h * 0.06} L ${w * 0.73} ${h * 0.06} L ${w * 0.8} ${h * 0.24} L ${w * 0.73} ${h * 0.36} L ${w * 0.58} ${h * 0.36} Z`}
        stroke={S} strokeWidth="1" fill={S} fillOpacity="0.15" />
      {/* Side window */}
      <rect x={w * 0.42} y={h * 0.08} width={w * 0.16} height={h * 0.26} rx="1" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.12" />
      {/* Roof line */}
      <line x1={w * 0.3} y1={h * 0.04} x2={w * 0.7} y2={h * 0.04} stroke={S} strokeWidth="1.2" />
      {/* Wheel arches + wheels */}
      <circle cx={w * 0.2} cy={h} r={h * 0.24} stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />
      <circle cx={w * 0.2} cy={h} r={h * 0.11} stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.1" />
      <circle cx={w * 0.8} cy={h} r={h * 0.24} stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />
      <circle cx={w * 0.8} cy={h} r={h * 0.11} stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.1" />
      {/* Door handle */}
      <line x1={w * 0.43} y1={h * 0.44} x2={w * 0.5} y2={h * 0.44} stroke={S} strokeWidth="1" strokeOpacity="0.4" />
      {/* Headlight */}
      <ellipse cx={w * 0.03} cy={h * 0.52} rx={w * 0.025} ry={h * 0.09} stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.25" />
      {/* Tail light */}
      <rect x={w * 0.96} y={h * 0.44} width={w * 0.03} height={h * 0.16} rx="0.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.25" />
    </g>
  );
}

function Pickup({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {/* Front bumper */}
      <rect x="-3" y="32" width="84" height="4" rx="1.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.08" />
      {/* Hood */}
      <path d="M 0 32 L 0 16 L 4 10 C 6 6 10 4 16 3 L 34 3 C 38 3 42 6 44 10 L 48 16 L 48 32" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.06" />
      {/* Grille */}
      <rect x="-1" y="16" width="4" height="14" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.12" />
      <line x1="0.5" y1="19" x2="0.5" y2="28" stroke={S} strokeWidth="0.7" strokeOpacity="0.35" />
      <line x1="2" y1="19" x2="2" y2="28" stroke={S} strokeWidth="0.7" strokeOpacity="0.35" />
      {/* Headlights */}
      <ellipse cx="2" cy="13" rx="2" ry="3" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.2" />
      {/* Windshield */}
      <path d="M 10 6 L 20 3 L 36 3 L 40 6 Z" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.2" />
      {/* Cabin */}
      <path d="M 48 16 L 48 -2 C 48 -6 50 -8 54 -8 L 70 -8 C 74 -8 76 -6 76 -2 L 76 32 L 48 32 Z" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.08" />
      {/* Cabin windshield */}
      <path d="M 50 2 L 54 -6 L 68 -6 L 68 2 Z" stroke={S} strokeWidth="1.2" fill={S} fillOpacity="0.18" />
      {/* Side window */}
      <rect x="54" y="-5" width="16" height="8" rx="1" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.12" />
      {/* Door */}
      <line x1="62" y1="4" x2="62" y2="26" stroke={S} strokeWidth="0.8" strokeOpacity="0.25" />
      {/* Mirror */}
      <rect x="46" y="-3" width="2" height="5" rx="0.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.15" />
      {/* Bed */}
      <path d="M 76 6 L 76 32 L 104 32 L 104 6 Z" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.04" />
      <line x1="76" y1="6" x2="104" y2="6" stroke={S} strokeWidth="1.5" />
      {/* Rear fender (dually) */}
      <path d="M 82 22 Q 82 16 90 16 Q 98 16 98 22 L 98 32 L 82 32 Z" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.04" />
      {/* Wheels */}
      <Wheel cx={18} cy={36} r={7.5} />
      <Wheel cx={88} cy={36} r={7.5} />
      <Wheel cx={100} cy={36} r={6} />
    </g>
  );
}

function AmericanSemiCab({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {/* Hood (long) */}
      <path d="M 0 32 L 0 10 C 0 6 2 3 6 2 L 34 0 L 34 8 L 38 8 L 38 32" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.07" />
      {/* Grille */}
      <rect x="-1" y="12" width="4" height="18" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.12" />
      <line x1="0.5" y1="15" x2="0.5" y2="28" stroke={S} strokeWidth="0.7" strokeOpacity="0.35" />
      <line x1="2" y1="15" x2="2" y2="28" stroke={S} strokeWidth="0.7" strokeOpacity="0.35" />
      {/* Headlights */}
      <ellipse cx="1.5" cy="10" rx="2" ry="2.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.2" />
      {/* Bumper */}
      <rect x="-3" y="32" width="46" height="4" rx="1.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.08" />
      {/* Cabin */}
      <path d="M 38 8 L 38 -10 C 38 -14 40 -17 44 -18 L 62 -18 C 66 -17 68 -14 68 -10 L 68 32 L 38 32 Z" stroke={S} strokeWidth="2" fill={S} fillOpacity="0.08" />
      {/* Windshield */}
      <path d="M 40 -2 L 44 -14 L 60 -14 L 60 -2 Z" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.2" />
      {/* Side window */}
      <rect x="48" y="-13" width="14" height="10" rx="1" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.12" />
      {/* Air visor */}
      <line x1="38" y1="-18" x2="68" y2="-18" stroke={S} strokeWidth="2.5" />
      {/* Exhaust stack */}
      <rect x="35" y="-28" width="3" height="14" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.1" />
      <ellipse cx="36.5" cy="-29" rx="2.5" ry="1.5" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.08" />
      {/* Door */}
      <line x1="54" y1="0" x2="54" y2="26" stroke={S} strokeWidth="0.8" strokeOpacity="0.25" />
      {/* Step */}
      <rect x="38" y="26" width="12" height="4" rx="1" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.05" />
      {/* Fuel tank */}
      <rect x="42" y="18" width="20" height="12" rx="3" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.06" />
      {/* Mirror */}
      <rect x="37" y="-12" width="2" height="6" rx="0.5" stroke={S} strokeWidth="0.8" fill={S} fillOpacity="0.12" />
      {/* Wheels */}
      <Wheel cx={18} cy={40} r={8} />
      <Wheel cx={50} cy={40} r={8} />
      <Wheel cx={64} cy={40} r={7} />
    </g>
  );
}

export function EnclosedSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Pickup truck */}
      <Pickup x={5} y={30} scale={0.82} />

      {/* Hitch */}
      <line x1="90" y1="58" x2="108" y2="58" stroke={S} strokeWidth="2" />
      <circle cx="93" cy="58" r="2.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />

      {/* Enclosed trailer box */}
      <rect x="108" y="14" width="230" height="50" rx="3" stroke={S} strokeWidth="2.5" fill={S} fillOpacity="0.05" />
      {/* Roof arch */}
      <path d="M 108 14 Q 112 10 118 10 L 332 10 Q 338 10 338 14" stroke={S} strokeWidth="1.5" fill="none" />
      {/* Bottom rail */}
      <line x1="108" y1="64" x2="338" y2="64" stroke={S} strokeWidth="2.5" />
      {/* Side ribs */}
      {[132, 156, 180, 204, 228, 252, 276, 300, 324].map((xp) => (
        <line key={xp} x1={xp} y1="14" x2={xp} y2="64" stroke={S} strokeWidth="0.7" strokeOpacity="0.18" />
      ))}
      {/* Rear door */}
      <rect x="328" y="18" width="8" height="44" rx="1" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.08" />
      <circle cx="330" cy="40" r="1.5" fill={S} fillOpacity="0.3" />
      {/* Door hinges */}
      <rect x="326" y="24" width="2" height="4" rx="0.5" fill={S} fillOpacity="0.2" />
      <rect x="326" y="52" width="2" height="4" rx="0.5" fill={S} fillOpacity="0.2" />

      {/* Cars inside — large, filling trailer space */}
      <CarSide x={118} y={22} w={90} h={30} />
      <CarSide x={225} y={22} w={90} h={30} />

      {/* Chassis */}
      <line x1="108" y1="70" x2="338" y2="70" stroke={S} strokeWidth="1.5" />
      {/* Trailer wheels */}
      <Wheel cx={280} cy={78} r={8} />
      <Wheel cx={302} cy={78} r={8} />
      <Wheel cx={324} cy={78} r={8} />
    </svg>
  );
}

export function Open36SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 105" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Pickup truck */}
      <Pickup x={5} y={28} scale={0.8} />

      {/* Hitch */}
      <line x1="88" y1="56" x2="108" y2="56" stroke={S} strokeWidth="2" />
      <circle cx="91" cy="56" r="2.5" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.15" />

      {/* Open trailer frame */}
      <line x1="108" y1="62" x2="320" y2="62" stroke={S} strokeWidth="2.5" />
      {/* Side rails */}
      <line x1="108" y1="24" x2="108" y2="62" stroke={S} strokeWidth="2" />
      <line x1="320" y1="24" x2="320" y2="62" stroke={S} strokeWidth="2" />
      {/* Top rail */}
      <line x1="108" y1="24" x2="320" y2="24" stroke={S} strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Cross members */}
      {[150, 192, 234, 276].map((xp) => (
        <line key={xp} x1={xp} y1="24" x2={xp} y2="62" stroke={S} strokeWidth="0.7" strokeOpacity="0.18" />
      ))}
      {/* Tie-down rail */}
      <line x1="112" y1="55" x2="316" y2="55" stroke={S} strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="3 5" />

      {/* Two cars on trailer — large, filling space */}
      <CarSide x={114} y={30} w={90} h={24} />
      <CarSide x={218} y={30} w={90} h={24} />

      {/* Rear ramp hint */}
      <line x1="320" y1="28" x2="328" y2="62" stroke={S} strokeWidth="1.2" strokeOpacity="0.3" />

      {/* Fenders */}
      <path d="M 244 62 Q 244 55 254 55 Q 264 55 264 62" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.04" />
      <path d="M 292 62 Q 292 55 302 55 Q 312 55 312 62" stroke={S} strokeWidth="1" fill={S} fillOpacity="0.04" />
      {/* Chassis */}
      <line x1="108" y1="68" x2="320" y2="68" stroke={S} strokeWidth="1.5" />
      {/* Trailer wheels */}
      <Wheel cx={254} cy={76} r={7.5} />
      <Wheel cx={302} cy={76} r={7.5} />
    </svg>
  );
}

export function Open50SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* American semi cab */}
      <AmericanSemiCab x={5} y={46} scale={0.82} />

      {/* Fifth wheel coupling */}
      <path d="M 62 74 L 62 82 L 72 82 L 72 74" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.06" />

      {/* Wedge trailer — upper deck angled */}
      <line x1="68" y1="78" x2="358" y2="78" stroke={S} strokeWidth="2.5" />
      {/* Uprights */}
      <line x1="68" y1="36" x2="68" y2="78" stroke={S} strokeWidth="2" />
      <line x1="358" y1="18" x2="358" y2="78" stroke={S} strokeWidth="2" />
      {/* Upper deck angled rail */}
      <line x1="68" y1="36" x2="358" y2="18" stroke={S} strokeWidth="2" />
      {/* Upper platform */}
      <line x1="72" y1="38" x2="354" y2="22" stroke={S} strokeWidth="1.5" />
      {/* Vertical supports */}
      {[120, 168, 216, 264, 312].map((xp) => {
        const topY = 36 - ((xp - 68) / (358 - 68)) * 18;
        return <line key={xp} x1={xp} y1={topY} x2={xp} y2={78} stroke={S} strokeWidth="0.7" strokeOpacity="0.18" />;
      })}

      {/* Bottom deck: 2 large cars */}
      <CarSide x={80} y={48} w={80} h={22} />
      <CarSide x={180} y={48} w={80} h={22} />

      {/* Upper deck: 1 large car on the angled part towards rear */}
      <g transform="rotate(-3.5, 290, 20)">
        <CarSide x={248} y={4} w={78} h={18} />
      </g>

      {/* Rear ramp */}
      <line x1="358" y1="78" x2="372" y2="92" stroke={S} strokeWidth="1.5" strokeOpacity="0.35" />

      {/* Chassis */}
      <line x1="5" y1="84" x2="358" y2="84" stroke={S} strokeWidth="1.5" />

      {/* Trailer tandems */}
      <Wheel cx={300} cy={92} r={7.5} />
      <Wheel cx={322} cy={92} r={7.5} />
      <Wheel cx={344} cy={92} r={7.5} />
    </svg>
  );
}

export function SemiSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* American semi cab */}
      <AmericanSemiCab x={5} y={52} scale={0.88} />

      {/* Fifth wheel */}
      <path d="M 66 80 L 66 88 L 76 88 L 76 80" stroke={S} strokeWidth="1.5" fill={S} fillOpacity="0.06" />

      {/* Full car carrier double deck frame */}
      <line x1="72" y1="84" x2="396" y2="84" stroke={S} strokeWidth="2.5" />
      {/* Uprights */}
      <line x1="72" y1="8" x2="72" y2="84" stroke={S} strokeWidth="2.5" />
      <line x1="396" y1="8" x2="396" y2="84" stroke={S} strokeWidth="2.5" />
      {/* Top rail */}
      <line x1="72" y1="8" x2="396" y2="8" stroke={S} strokeWidth="2" />
      {/* Upper deck */}
      <line x1="76" y1="18" x2="392" y2="18" stroke={S} strokeWidth="2" />
      {/* Lower deck separator line */}
      <line x1="76" y1="50" x2="392" y2="50" stroke={S} strokeWidth="1.2" strokeOpacity="0.3" />
      {/* Vertical supports */}
      {[130, 185, 240, 295, 350].map((xp) => (
        <line key={xp} x1={xp} y1={8} x2={xp} y2={84} stroke={S} strokeWidth="0.7" strokeOpacity="0.15" />
      ))}

      {/* Top deck: 3 cars */}
      <CarSide x={82} y={-2} w={72} h={16} />
      <CarSide x={170} y={-2} w={72} h={16} />
      <CarSide x={258} y={-2} w={72} h={16} />

      {/* Bottom deck: 3 cars */}
      <CarSide x={82} y={54} w={78} h={22} />
      <CarSide x={178} y={54} w={78} h={22} />
      <CarSide x={274} y={54} w={78} h={22} />

      {/* Rear loading ramp */}
      <line x1="392" y1="84" x2="410" y2="100" stroke={S} strokeWidth="1.8" strokeOpacity="0.4" />
      <line x1="396" y1="50" x2="408" y2="40" stroke={S} strokeWidth="1.2" strokeOpacity="0.25" />
      {/* Ramp surface */}
      <line x1="394" y1="80" x2="406" y2="94" stroke={S} strokeWidth="0.6" strokeOpacity="0.15" />
      <line x1="396" y1="80" x2="408" y2="94" stroke={S} strokeWidth="0.6" strokeOpacity="0.15" />

      {/* Chassis */}
      <line x1="5" y1="90" x2="396" y2="90" stroke={S} strokeWidth="1.5" />

      {/* Trailer tandems */}
      <Wheel cx={326} cy={98} r={8} />
      <Wheel cx={350} cy={98} r={8} />
      <Wheel cx={374} cy={98} r={8} />
    </svg>
  );
}
