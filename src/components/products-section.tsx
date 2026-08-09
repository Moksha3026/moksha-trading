import Image from "next/image";
import { PRODUCTS } from "@/lib/content";

export function ProductsSection() {
  return (
    <section id="products" className="section">
      <div className="section-head">
        <h2>02 / PRODUCT RANGE</h2>
        <span className="section-head-note">
          YOUR SPEC · YOUR LABEL · YOUR PACKAGING
        </span>
      </div>
      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <div className="product-card" key={product.title}>
            <div className="photo-frame">
              <Image
                src={product.photoSrc}
                alt={product.photoAlt}
                fill
                sizes="(max-width: 900px) 50vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="body">
              <div className="title">{product.title}</div>
              <div className="meta">
                {product.meta.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < product.meta.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
