"use client";

import Image from "next/image";
import { useState } from "react";
import { PRODUCTS } from "@/lib/content";
import { BLUR_DATA } from "@/lib/blur-data";
import { Reveal } from "@/components/reveal";
import { ProductCarousel } from "@/components/product-carousel";
import { ProductLightbox } from "@/components/product-lightbox";

const SIZES = "(max-width: 900px) 50vw, 33vw";

export function ProductsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : PRODUCTS[openIndex];

  return (
    <section id="products" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Product range</span>
            <div className="section-title-row">
              <h2 className="section-title">Your specification. Your label.</h2>
              <p className="section-note">
                Cotton and sports T-shirts, jeans, pants and shirts — sample
                or bulk, no minimum order quantity.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="products-grid">
          {PRODUCTS.map((product, i) => {
            const photos = product.gallery ?? [];
            const count = photos.length;

            return (
              <Reveal key={product.title} delay={i * 70}>
                <div className="product-card">
                  <div className="photo-frame">
                    {count > 1 ? (
                      <ProductCarousel photos={photos} sizes={SIZES} />
                    ) : (
                      <Image
                        src={product.photoSrc}
                        alt={product.photoAlt}
                        fill
                        sizes={SIZES}
                        style={{ objectFit: "cover" }}
                        placeholder={BLUR_DATA[product.photoSrc] ? "blur" : "empty"}
                        blurDataURL={BLUR_DATA[product.photoSrc]}
                      />
                    )}
                  </div>

                  <div className="body">
                    <div className="title">{product.title}</div>
                    <div className="meta">{product.meta.join(" · ")}</div>
                  </div>

                  {count > 1 && (
                    <button
                      type="button"
                      className="photo-badge"
                      onClick={() => setOpenIndex(i)}
                      aria-label={`${product.title} — view all ${count} photos`}
                    >
                      {count} photos
                    </button>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active?.gallery && (
        <ProductLightbox
          title={active.title}
          photos={active.gallery}
          startIndex={0}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
