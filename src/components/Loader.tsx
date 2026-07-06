interface LoaderProps {
  progress: number;
  visible: boolean;
}

const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];

export default function Loader({ progress, visible }: LoaderProps) {
  return (
    <div
      id="loader"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        display: visible ? "flex" : "none",
      }}
    >
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
        {PETAL_ANGLES.map((angle, i) => (
          <g key={angle} transform={`rotate(${angle} 12 12)`}>
            <path
              className="bloom-petal"
              style={{ animationDelay: `${i * 0.15}s` }}
              d="M12,12 Q9.5,7.5 12,2 Q14.5,7.5 12,12 Z"
              fill="var(--color-rose-primary)"
              opacity="0.85"
            />
          </g>
        ))}
        <circle cx="12" cy="12" r="2" fill="var(--color-rose-gold)" />
      </svg>
      <h2 id="loader-text" style={{ marginTop: 18 }}>
        Preparing Roséa — {progress}%
      </h2>
      <div className="loader-bar">
        <div className="loader-progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
