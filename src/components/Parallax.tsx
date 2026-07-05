import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** How far the element drifts (px) across the scroll range. Positive = moves down slower / appears to lag. */
  amount?: number;
}

export default function Parallax({
  children,
  className = "",
  style,
  amount = 50,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -amount },
        {
          y: amount,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
