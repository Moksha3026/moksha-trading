import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          GARMENT SOURCING · PRINTING · EXPORT / AHMEDABAD, GUJARAT, INDIA
        </div>
        <h1>
          Your spec.
          <br />
          Our network.
          <br />
          <span>Shipped.</span>
        </h1>
        <p className="hero-lede">
          You place one order. We source it, print it, check it and deliver
          it to your door. Direct relationships with vetted manufacturers
          across cotton and sports T-shirts, jeans, pants and shirts —
          GST-registered, IEC-licensed, no minimum order quantity.
        </p>
        <p className="hero-gu">
          તમે ઓર્ડર આપો — સોર્સિંગથી ડિલિવરી સુધીનું બધું અમે સંભાળીએ છીએ.
        </p>
        <div className="hero-actions">
          <a href="#enquiry">REQUEST QUOTE</a>
          <a href="#products">VIEW RANGE</a>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src="/images/hero-finished-garments.jpg"
          alt="Neatly folded finished garments ready for dispatch"
          fill
          sizes="(max-width: 900px) 100vw, 440px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
}
