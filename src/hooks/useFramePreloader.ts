import { useEffect, useRef, useState } from "react";

interface FramePreloaderResult {
  images: HTMLImageElement[];
  progress: number; // 0 - 100
  loaded: boolean;
}

/**
 * Preloads a sequence of numbered frame images (e.g. ezgif-frame-001.jpg ... 240.jpg)
 * and reports load progress, mirroring the canvas scroll-scrub technique.
 */
export function useFramePreloader(
  frameCount: number,
  frameSrc: (index: number) => string
): FramePreloaderResult {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount++;
        setProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        // Count errored frames too, so a missing frame can't hang the loader forever
        loadedCount++;
        setProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameSrc]);

  return { images: imagesRef.current, progress, loaded };
}
