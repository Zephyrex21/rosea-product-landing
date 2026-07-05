import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  value: string; // e.g. "100%" or "0%"
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(-?\d+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2] ?? "";
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: target,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.val)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value]);

  return (
    <p ref={ref} className={className}>
      0{value.replace(/^-?\d+/, "")}
    </p>
  );
}
