import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media">
        <Image
          src="/images/hero.jpg"
          alt="Finished black T-shirt on a hanger, catching sharp window-light shadows"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          Garment sourcing · printing · export — Ahmedabad, Gujarat, India
        </div>
        <h1 className="hero-title">
          Your spec. Our network. <em>Shipped.</em>
        </h1>
        <p className="hero-lede">
          You place one order. We source it, print it, check it and deliver
          it to your door — direct relationships with vetted manufacturers
          across cotton and sports T-shirts, jeans, pants and shirts. No
          minimum order quantity.
        </p>
        <p className="hero-gu">
          તમે ઓર્ડર આપો — સોર્સિંગથી ડિલિવરી સુધીનું બધું અમે સંભાળીએ છીએ.
        </p>
        <div className="hero-actions">
          <a href="#enquiry" className="btn btn-primary">
            Request a quote
          </a>
          <a href="#products" className="btn btn-ghost">
            View the range
          </a>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span className="hero-scroll-cue-line" />
        SCROLL
      </div>
    </section>
  );
}
