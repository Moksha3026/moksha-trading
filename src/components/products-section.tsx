import Image from "next/image";
import { PRODUCTS } from "@/lib/content";
import { BLUR_DATA } from "@/lib/blur-data";
import { Reveal } from "@/components/reveal";

export function ProductsSection() {
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
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.title} delay={i * 70}>
              <div className="product-card">
                <div className="photo-frame">
                  <Image
                    src={product.photoSrc}
                    alt={product.photoAlt}
                    fill
                    sizes="(max-width: 900px) 50vw, 20vw"
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA[product.photoSrc]}
                  />
                </div>
                <div className="body">
                  <div className="title">{product.title}</div>
                  <div className="meta">{product.meta.join(" · ")}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
