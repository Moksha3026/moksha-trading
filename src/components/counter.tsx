"use client";

import { useEffect, useRef, useState } from "react";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function Counter({ value }: { value: string }) {
  const match = value.match(/[\d,]+/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? value.replace(/[\d,]+/, "0") : value);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const target = parseInt(match[0].replace(/,/g, ""), 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.round(target * easeOutExpo(progress));
          setDisplay(prefix + current.toLocaleString("en-IN") + suffix);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}>{display}</span>;
}
