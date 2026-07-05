import { useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
}

export default function TiltCard({ children, className = "", max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);
  const quickScale = useRef<gsap.QuickToFunc | null>(null);

  const ensureQuickSetters = () => {
    if (!ref.current) return;
    if (!quickX.current) {
      quickX.current = gsap.quickTo(ref.current, "rotateX", {
        duration: 0.4,
        ease: "power3.out",
      });
      quickY.current = gsap.quickTo(ref.current, "rotateY", {
        duration: 0.4,
        ease: "power3.out",
      });
      quickScale.current = gsap.quickTo(ref.current, "scale", {
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    ensureQuickSetters();
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    quickY.current?.(px * max * 2);
    quickX.current?.(-py * max * 2);
    quickScale.current?.(1.02);
  };

  const handleMouseLeave = () => {
    ensureQuickSetters();
    quickX.current?.(0);
    quickY.current?.(0);
    quickScale.current?.(1);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
