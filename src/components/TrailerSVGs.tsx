"use client";

export function EnclosedSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Truck cab */}
      <rect x="8" y="52" width="40" height="32" rx="3" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.1" />
      <rect x="10" y="56" width="16" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.2" />
      <line x1="8" y1="74" x2="48" y2="74" stroke="#10b981" strokeWidth="1.5" />
      <rect x="38" y="56" width="8" height="10" rx="1" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.15" />
      {/* Enclosed trailer body */}
      <rect x="52" y="30" width="130" height="54" rx="4" stroke="#10b981" strokeWidth="2.5" fill="#10b981" fillOpacity="0.08" />
      <line x1="52" y1="78" x2="182" y2="78" stroke="#10b981" strokeWidth="2" />
      {/* Trailer ribs */}
      <line x1="75" y1="32" x2="75" y2="78" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="98" y1="32" x2="98" y2="78" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="121" y1="32" x2="121" y2="78" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="144" y1="32" x2="144" y2="78" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="167" y1="32" x2="167" y2="78" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      {/* Rear door */}
      <rect x="172" y="36" width="8" height="40" rx="1" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.15" />
      {/* Car silhouette inside (visible through side) */}
      <path d="M 70 60 Q 75 50 85 50 L 105 50 Q 110 50 112 55 L 115 60 Z" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" fill="#10b981" fillOpacity="0.1" />
      <circle cx="78" cy="65" r="3" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="108" cy="65" r="3" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
      {/* Chassis line */}
      <line x1="8" y1="84" x2="182" y2="84" stroke="#10b981" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="22" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="22" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="42" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="42" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="140" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="140" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="160" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="160" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="175" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="175" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
    </svg>
  );
}

export function Open36SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Truck cab */}
      <rect x="5" y="48" width="38" height="30" rx="3" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.1" />
      <rect x="8" y="52" width="14" height="12" rx="2" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.2" />
      <rect x="34" y="52" width="7" height="10" rx="1" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.15" />
      {/* Frame */}
      <line x1="43" y1="72" x2="185" y2="72" stroke="#10b981" strokeWidth="2" />
      {/* Ramps / open structure */}
      <line x1="50" y1="40" x2="50" y2="72" stroke="#10b981" strokeWidth="2" />
      <line x1="185" y1="40" x2="185" y2="72" stroke="#10b981" strokeWidth="2" />
      <line x1="50" y1="40" x2="185" y2="40" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Upper ramp */}
      <line x1="55" y1="46" x2="180" y2="46" stroke="#10b981" strokeWidth="1.5" />
      {/* Ramp supports */}
      <line x1="80" y1="40" x2="80" y2="72" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="117" y1="40" x2="117" y2="72" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="155" y1="40" x2="155" y2="72" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      {/* Bottom car */}
      <path d="M 65 58 Q 70 50 80 50 L 105 50 Q 112 50 115 55 L 118 58 L 120 62 L 60 62 L 62 60 Z" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.12" />
      <circle cx="72" cy="66" r="4" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      <circle cx="112" cy="66" r="4" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      {/* Top car */}
      <path d="M 100 34 Q 105 26 115 26 L 140 26 Q 147 26 150 31 L 153 34 L 155 38 L 95 38 L 97 36 Z" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.12" />
      <circle cx="107" cy="42" r="3.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      <circle cx="147" cy="42" r="3.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      {/* Chassis */}
      <line x1="5" y1="78" x2="185" y2="78" stroke="#10b981" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="18" cy="84" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="18" cy="84" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="38" cy="84" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="38" cy="84" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="150" cy="84" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="150" cy="84" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="172" cy="84" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="172" cy="84" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
    </svg>
  );
}

export function Open50SVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Truck cab */}
      <rect x="5" y="52" width="36" height="28" rx="3" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.1" />
      <rect x="8" y="55" width="13" height="11" rx="2" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.2" />
      <rect x="32" y="56" width="7" height="9" rx="1" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.15" />
      {/* Main frame */}
      <line x1="41" y1="74" x2="205" y2="74" stroke="#10b981" strokeWidth="2" />
      {/* Uprights */}
      <line x1="48" y1="30" x2="48" y2="74" stroke="#10b981" strokeWidth="2" />
      <line x1="205" y1="30" x2="205" y2="74" stroke="#10b981" strokeWidth="2" />
      {/* Upper deck rail */}
      <line x1="48" y1="30" x2="205" y2="30" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="53" y1="36" x2="200" y2="36" stroke="#10b981" strokeWidth="1.5" />
      {/* Middle supports */}
      <line x1="90" y1="30" x2="90" y2="74" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="130" y1="30" x2="130" y2="74" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="170" y1="30" x2="170" y2="74" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
      {/* Bottom car 1 */}
      <path d="M 55 60 Q 59 53 67 53 L 85 53 Q 90 53 93 57 L 95 60 L 97 64 L 52 64 L 54 62 Z" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.12" />
      <circle cx="62" cy="68" r="3.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      <circle cx="90" cy="68" r="3.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      {/* Bottom car 2 */}
      <path d="M 110 60 Q 114 53 122 53 L 140 53 Q 145 53 148 57 L 150 60 L 152 64 L 107 64 L 109 62 Z" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.12" />
      <circle cx="117" cy="68" r="3.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      <circle cx="145" cy="68" r="3.5" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      {/* Top car */}
      <path d="M 80 24 Q 84 17 92 17 L 115 17 Q 121 17 124 22 L 126 24 L 128 28 L 76 28 L 78 26 Z" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.12" />
      <circle cx="87" cy="32" r="3" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      <circle cx="120" cy="32" r="3" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.1" />
      {/* Chassis */}
      <line x1="5" y1="80" x2="205" y2="80" stroke="#10b981" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="18" cy="87" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="18" cy="87" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="36" cy="87" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="36" cy="87" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="160" cy="87" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="160" cy="87" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="180" cy="87" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="180" cy="87" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
      <circle cx="197" cy="87" r="6.5" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="197" cy="87" r="2.5" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.1" />
    </svg>
  );
}

export function SemiSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Truck cab (larger semi) */}
      <rect x="5" y="48" width="42" height="34" rx="4" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.1" />
      <rect x="8" y="52" width="16" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.2" />
      <line x1="5" y1="72" x2="47" y2="72" stroke="#10b981" strokeWidth="1.5" />
      <rect x="36" y="54" width="8" height="12" rx="1" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.15" />
      {/* Exhaust stack */}
      <line x1="12" y1="38" x2="12" y2="48" stroke="#10b981" strokeWidth="2" />
      <circle cx="12" cy="36" r="2" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.2" />
      {/* Main double-deck frame */}
      <line x1="50" y1="76" x2="225" y2="76" stroke="#10b981" strokeWidth="2" />
      {/* Uprights */}
      <line x1="55" y1="18" x2="55" y2="76" stroke="#10b981" strokeWidth="2" />
      <line x1="225" y1="18" x2="225" y2="76" stroke="#10b981" strokeWidth="2" />
      {/* Top rail */}
      <line x1="55" y1="18" x2="225" y2="18" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" />
      {/* Upper deck platform */}
      <line x1="60" y1="25" x2="220" y2="25" stroke="#10b981" strokeWidth="2" />
      {/* Middle ramp (angled) */}
      <line x1="60" y1="50" x2="220" y2="50" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Vertical supports */}
      <line x1="95" y1="18" x2="95" y2="76" stroke="#10b981" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="135" y1="18" x2="135" y2="76" stroke="#10b981" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="175" y1="18" x2="175" y2="76" stroke="#10b981" strokeWidth="1" strokeOpacity="0.25" />
      {/* Top deck cars (3) */}
      <path d="M 65 14 Q 68 8 74 8 L 88 8 Q 93 8 95 12 L 96 14 L 98 18 L 62 18 Z" stroke="#10b981" strokeWidth="1.3" fill="#10b981" fillOpacity="0.1" />
      <circle cx="70" cy="22" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />
      <circle cx="92" cy="22" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />

      <path d="M 108 14 Q 111 8 117 8 L 131 8 Q 136 8 138 12 L 139 14 L 141 18 L 105 18 Z" stroke="#10b981" strokeWidth="1.3" fill="#10b981" fillOpacity="0.1" />
      <circle cx="113" cy="22" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />
      <circle cx="135" cy="22" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />

      <path d="M 150 14 Q 153 8 159 8 L 173 8 Q 178 8 180 12 L 181 14 L 183 18 L 147 18 Z" stroke="#10b981" strokeWidth="1.3" fill="#10b981" fillOpacity="0.1" />
      <circle cx="155" cy="22" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />
      <circle cx="177" cy="22" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />

      {/* Bottom deck cars (3) */}
      <path d="M 65 60 Q 68 54 74 54 L 88 54 Q 93 54 95 58 L 96 60 L 98 64 L 62 64 Z" stroke="#10b981" strokeWidth="1.3" fill="#10b981" fillOpacity="0.1" />
      <circle cx="70" cy="68" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />
      <circle cx="92" cy="68" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />

      <path d="M 108 60 Q 111 54 117 54 L 131 54 Q 136 54 138 58 L 139 60 L 141 64 L 105 64 Z" stroke="#10b981" strokeWidth="1.3" fill="#10b981" fillOpacity="0.1" />
      <circle cx="113" cy="68" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />
      <circle cx="135" cy="68" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />

      <path d="M 150 60 Q 153 54 159 54 L 173 54 Q 178 54 180 58 L 181 60 L 183 64 L 147 64 Z" stroke="#10b981" strokeWidth="1.3" fill="#10b981" fillOpacity="0.1" />
      <circle cx="155" cy="68" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />
      <circle cx="177" cy="68" r="2.5" stroke="#10b981" strokeWidth="1.2" fill="#10b981" fillOpacity="0.08" />

      {/* Rear ramp */}
      <line x1="220" y1="76" x2="232" y2="88" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Chassis */}
      <line x1="5" y1="82" x2="225" y2="82" stroke="#10b981" strokeWidth="2" />
      {/* Wheels */}
      <circle cx="18" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="18" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.08" />
      <circle cx="40" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="40" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.08" />
      <circle cx="170" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="170" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.08" />
      <circle cx="190" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="190" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.08" />
      <circle cx="210" cy="90" r="7" stroke="#10b981" strokeWidth="2" fill="#10b981" fillOpacity="0.15" />
      <circle cx="210" cy="90" r="3" stroke="#10b981" strokeWidth="1" fill="#10b981" fillOpacity="0.08" />
    </svg>
  );
}
