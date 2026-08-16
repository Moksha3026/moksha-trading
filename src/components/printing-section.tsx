import Image from "next/image";
import { PRINTING_METHODS } from "@/lib/content";
import { BLUR_DATA } from "@/lib/blur-data";
import { Reveal } from "@/components/reveal";

export function PrintingSection() {
  return (
    <section id="printing" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Printing we arrange</span>
            <div className="section-title-row">
              <h2 className="section-title">
                Four ways to put your artwork on cloth.
              </h2>
              <p className="section-note">
                Our print specialists advise the method before you commit —
                so the cost, hand feel and wash life match what you&apos;re
                selling.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="printing-grid">
        {PRINTING_METHODS.map((method, i) => (
          <Reveal key={method.name} delay={i * 80}>
            <div className="printing-card">
              <div className="photo-frame">
                <Image
                  src={method.photoSrc}
                  alt={method.photoAlt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA[method.photoSrc]}
                />
              </div>
              <div className="index">0{i + 1}</div>
              <div className="name">{method.name}</div>
              <div className="desc">{method.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
