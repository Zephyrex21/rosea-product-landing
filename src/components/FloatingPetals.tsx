import type { CSSProperties } from "react";

const PETAL_CONFIGS = [
  { left: "8%", size: 14, duration: 9, delay: 0, driftX: 40, driftY: -160, opacity: 0.5 },
  { left: "18%", size: 10, duration: 12, delay: 2, driftX: -30, driftY: -200, opacity: 0.4 },
  { left: "78%", size: 16, duration: 10, delay: 1, driftX: -50, driftY: -180, opacity: 0.5 },
  { left: "88%", size: 11, duration: 8, delay: 3, driftX: 20, driftY: -150, opacity: 0.45 },
  { left: "35%", size: 9, duration: 11, delay: 4, driftX: 25, driftY: -190, opacity: 0.35 },
  { left: "62%", size: 13, duration: 13, delay: 1.5, driftX: -20, driftY: -170, opacity: 0.4 },
  { left: "50%", size: 8, duration: 9.5, delay: 5, driftX: 15, driftY: -160, opacity: 0.3 },
];

function Petal({ size, opacity, color }: { size: number; opacity: number; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ opacity }}>
      <path
        d="M12 2c4 3 6 7 6 10a6 6 0 1 1-12 0c0-3 2-7 6-10z"
        fill={color}
      />
    </svg>
  );
}

interface FloatingPetalsProps {
  color?: string;
}

export default function FloatingPetals({ color = "var(--color-rose-primary)" }: FloatingPetalsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
      {PETAL_CONFIGS.map((p, i) => (
        <div
          key={i}
          className="floating-petal"
          style={
            {
              left: p.left,
              bottom: "-5%",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift-x": `${p.driftX}px`,
              "--drift-y": `${p.driftY}px`,
            } as CSSProperties
          }
        >
          <Petal size={p.size} opacity={p.opacity} color={color} />
        </div>
      ))}
    </div>
  );
}
