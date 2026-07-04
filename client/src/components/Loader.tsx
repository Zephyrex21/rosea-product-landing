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
      <h2 id="loader-text">PREPARING EXPERIENCE {progress}%</h2>
      <div className="loader-bar">
        <div className="loader-progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
