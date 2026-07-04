import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFramePreloader } from "../hooks/useFramePreloader";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;

const frameSrc = (index: number) =>
  `/frames/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShiftX = (canvas.width - img.width * ratio) / 2;
  const centerShiftY = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShiftX,
    centerShiftY,
    img.width * ratio,
    img.height * ratio
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const frameState = useRef({ frame: 0 });

  const { images, progress, loaded } = useFramePreloader(FRAME_COUNT, frameSrc);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const img = images[frameState.current.frame];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    scaleImage(img, ctx);
  }, [images]);

  // Lock page scroll while the frame sequence is still loading
  useEffect(() => {
    document.body.style.overflow = loaded ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loaded]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !loaded) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();

    const ctx = gsap.context(() => {
      gsap.to(frameState.current, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        onUpdate: render,
      });

      gsap.to(heroTextRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });
    }, heroRef);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [loaded, render]);

  return (
    <section className="hero" ref={heroRef}>
      <Loader progress={progress} visible={!loaded} />
      <div className="canvas-container">
        <canvas ref={canvasRef} />
        <div className="hero-text" ref={heroTextRef}>
          <h1>Roséa</h1>
          <p>An Interactive Luxury Film</p>
        </div>
      </div>
    </section>
  );
}
