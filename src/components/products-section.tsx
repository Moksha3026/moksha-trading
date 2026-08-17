"use client";

import Image from "next/image";
import { useState } from "react";
import { PRODUCTS } from "@/lib/content";
import { BLUR_DATA } from "@/lib/blur-data";
import { Reveal } from "@/components/reveal";
import { ProductLightbox } from "@/components/product-lightbox";

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
            const count = product.gallery?.length ?? 0;
            const card = (
              <>
                <div className="photo-frame">
                  <Image
                    src={product.photoSrc}
                    alt={product.photoAlt}
                    fill
                    sizes="(max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    placeholder={BLUR_DATA[product.photoSrc] ? "blur" : "empty"}
                    blurDataURL={BLUR_DATA[product.photoSrc]}
                  />
                </div>
                <div className="body">
                  <div className="title">{product.title}</div>
                  <div className="meta">{product.meta.join(" · ")}</div>
                </div>
                {count > 0 && <span className="photo-badge">{count} photos</span>}
              </>
            );

            return (
              <Reveal key={product.title} delay={i * 70}>
                {count > 0 ? (
                  <button
                    type="button"
                    className="product-card product-card--clickable"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`${product.title} — view ${count} photos`}
                  >
                    {card}
                  </button>
                ) : (
                  <div className="product-card">{card}</div>
                )}
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
