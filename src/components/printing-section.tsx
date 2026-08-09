import Image from "next/image";
import { PRINTING_METHODS } from "@/lib/content";

export function PrintingSection() {
  return (
    <section id="printing" className="section">
      <div className="section-head">
        <h2>01 / PRINTING WE ARRANGE</h2>
        <span className="section-head-gu">પ્રિન્ટિંગ સુવિધાઓ</span>
      </div>
      <div className="printing-grid">
        {PRINTING_METHODS.map((method) => (
          <div className="printing-card" key={method.name}>
            <div className="name">{method.name}</div>
            <div className="desc">{method.desc}</div>
          </div>
        ))}
      </div>
      <div className="printing-photos">
        {PRINTING_METHODS.map((method) => (
          <div className="photo-frame" key={method.name}>
            <Image
              src={method.photoSrc}
              alt={method.photoAlt}
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
