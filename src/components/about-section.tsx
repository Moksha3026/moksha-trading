import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-copy">
        <h2>04 / ABOUT MOKSHA TRADING</h2>
        <p className="about-lede">
          We are a trading firm in Ahmedabad, Gujarat with direct contacts
          across garment manufacturers — one point of contact between you and
          the right factory for your order.
        </p>
        <p className="body-text">
          We don&apos;t run a factory, and that is the point: we are not tied
          to one machine or one capability. We match each order to the unit
          best suited to it — screen printing, DTF, digital or HD, on cotton
          and sports T-shirts, jeans, pants and shirts. Over 5,000 T-shirts
          have already been delivered to international buyers this way. We
          are GST-registered and hold an Import/Export licence for garments.
        </p>
        <p className="body-text">
          You deal with us and nobody else. Sourcing, sampling, printing,
          inspection, export paperwork and delivery are all handled on your
          behalf — you order, we deliver. Sample or bulk, there is no minimum
          order quantity.
        </p>
        <p className="about-gu">
          અમદાવાદ, ગુજરાત સ્થિત ટ્રેડિંગ પેઢી — ઉત્પાદકો સાથે સીધો સંપર્ક,
          ઓર્ડરથી ડિલિવરી સુધી બધું અમે સંભાળીએ.
        </p>
      </div>
      <div className="about-media">
        <div className="photo-frame">
          <Image
            src="/images/about-factory.jpg"
            alt="Garment factory workers operating sewing machines on the production floor"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="about-stats">
          <div>
            <div className="num">5,000+</div>
            <div className="label">
              T-SHIRTS DELIVERED
              <br />
              INTERNATIONALLY
            </div>
          </div>
          <div>
            <div className="num">Four</div>
            <div className="label">
              PRINT METHODS
              <br />
              AVAILABLE TO YOU
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
