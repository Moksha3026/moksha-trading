"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { BLUR_DATA } from "@/lib/blur-data";
import type { ProductPhoto } from "@/lib/content";

const INTERVAL = 3800;

/**
 * Cross-fades through a product's photos on its own. Hovering or focusing
 * the card pauses the rotation and reveals the manual controls.
 */
export function ProductCarousel({
  photos,
  sizes,
}: {
  photos: ProductPhoto[];
  sizes: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  /* Listen on the card, not on the carousel: the card's ::after gradient and
     its caption both paint above the slides, so a pointer over either of them
     never reaches this element. Keying off the card also matches the CSS that
     reveals the arrows, so pausing and the controls appear together. */
  useEffect(() => {
    const card = rootRef.current?.closest(".product-card");
    if (!card) return;

    const on = () => setPaused(true);
    const off = () => setPaused(false);

    card.addEventListener("pointerenter", on);
    card.addEventListener("pointerleave", off);
    card.addEventListener("focusin", on);
    card.addEventListener("focusout", off);
    return () => {
      card.removeEventListener("pointerenter", on);
      card.removeEventListener("pointerleave", off);
      card.removeEventListener("focusin", on);
      card.removeEventListener("focusout", off);
    };
  }, []);

  const step = useCallback(
    (d: number) => setI((n) => (n + d + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    if (paused || reduced.current || photos.length < 2) return;
    const id = window.setInterval(() => step(1), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, step, photos.length]);

  const multiple = photos.length > 1;

  return (
    <div className="carousel" ref={rootRef}>
      {photos.map((p, n) => (
        <div
          key={p.src}
          className={`carousel-slide${n === i ? " is-active" : ""}`}
          aria-hidden={n !== i}
        >
          <Image
            src={p.src}
            alt={n === i ? p.alt : ""}
            fill
            sizes={sizes}
            style={{ objectFit: "cover" }}
            placeholder={BLUR_DATA[p.src] ? "blur" : "empty"}
            blurDataURL={BLUR_DATA[p.src]}
            priority={n === 0}
          />
        </div>
      ))}

      {multiple && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            onClick={() => step(-1)}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            onClick={() => step(1)}
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="carousel-dots" aria-hidden="true">
            {photos.map((p, n) => (
              <span key={p.src} className={`carousel-dot${n === i ? " is-active" : ""}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
