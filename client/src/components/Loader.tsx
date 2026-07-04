interface LoaderProps {
  progress: number;
  visible: boolean;
}

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
      <svg
        className="loader-bloom"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2c4 3 6 7 6 10a6 6 0 1 1-12 0c0-3 2-7 6-10z"
          fill="var(--color-rose-primary)"
          opacity="0.9"
        />
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
