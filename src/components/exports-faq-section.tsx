"use client";

import { useState } from "react";
import { EXPORT_FACTS, FAQS } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function ExportsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="exports" className="section">
      <div className="container">
        <div className="exports-faq-grid">
          <Reveal>
            <div>
              <span className="kicker">Export &amp; compliance</span>
              <h2 className="section-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)" }}>
                Shipping globally from Ahmedabad.
              </h2>
              <div className="exports-facts">
                {EXPORT_FACTS.map((fact) => (
                  <div className="fact-row" key={fact.label}>
                    <div className="fact-label">{fact.label}</div>
                    <div className="fact-value">{fact.value}</div>
                  </div>
                ))}
              </div>
              <p className="exports-note">
                Tell us your destination country and we&apos;ll quote
                door-to-door or FOB — one invoice, one contact, no
                coordination on your side.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h2 id="faq" className="section-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", scrollMarginTop: "100px" }}>
                Frequent questions.
              </h2>
              <div className="faq-list" style={{ marginTop: 32 }}>
                {FAQS.map((faq, i) => {
                  const open = openIndex === i;
                  return (
                    <div className="faq-item" key={faq.q}>
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => setOpenIndex(open ? null : i)}
                        aria-expanded={open}
                      >
                        {faq.q}
                        <span className="sign">+</span>
                      </button>
                      {open && <p className="faq-answer">{faq.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
