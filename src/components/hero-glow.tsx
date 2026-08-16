"use client";

import { useEffect, useRef } from "react";

export function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      el.style.opacity = "1";
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="hero-glow" aria-hidden="true" />;
}
