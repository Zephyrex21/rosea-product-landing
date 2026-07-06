import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the element travels in from. Defaults to "up". */
  direction?: "up" | "left" | "right" | "none";
  /** Pixel distance traveled during the reveal. */
  distance?: number;
  delay?: number;
  duration?: number;
  /** ScrollTrigger "start" value */
  start?: string;
  /** Adds a subtle 3D perspective tilt as the element settles into place. */
  tilt3d?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.9,
  start = "top 85%",
  tilt3d = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    if (direction === "left") from.x = -distance;
    if (direction === "right") from.x = distance;
    if (tilt3d) {
      from.rotationX = -18;
      from.transformPerspective = 800;
      from.transformOrigin = "top center";
    }

    const to: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    };
    if (tilt3d) to.rotationX = 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, to);
    });

    return () => ctx.revert();
  }, [direction, distance, delay, duration, start, tilt3d]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
