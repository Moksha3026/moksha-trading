"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProductPhoto } from "@/lib/content";

export function ProductLightbox({
  title,
  photos,
  startIndex,
  onClose,
}: {
  title: string;
  photos: ProductPhoto[];
  startIndex: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(startIndex);

  const step = useCallback(
    (d: number) => setI((n) => (n + d + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    // Stop the page scrolling behind the overlay.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, step]);

  const photo = photos[i];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — photo ${i + 1} of ${photos.length}`}
      onClick={onClose}
    >
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <header className="lightbox-bar">
          <div>
            <span className="lightbox-title">{title}</span>
            <span className="lightbox-count">
              {i + 1} / {photos.length}
            </span>
          </div>
          <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>

        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            onClick={() => step(-1)}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="lightbox-image">
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 900px) 92vw, 70vw"
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-nav--next"
            onClick={() => step(1)}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>

        <p className="lightbox-caption">{photo.alt}</p>

        <div className="lightbox-thumbs">
          {photos.map((p, n) => (
            <button
              type="button"
              key={p.src}
              className={`lightbox-thumb${n === i ? " is-active" : ""}`}
              onClick={() => setI(n)}
              aria-label={`Show photo ${n + 1}`}
              aria-current={n === i}
            >
              <Image src={p.src} alt="" fill sizes="90px" style={{ objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
