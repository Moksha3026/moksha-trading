"use client";

import { useState } from "react";
import { EXPORT_FACTS, FAQS } from "@/lib/content";

export function ExportsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="exports" className="exports-section">
      <div className="exports-copy">
        <h2>05 / EXPORT &amp; COMPLIANCE</h2>
        <div className="exports-facts">
          {EXPORT_FACTS.map((fact) => (
            <div key={fact.label}>
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
            </div>
          ))}
        </div>
        <p className="body-text">
          Shipping globally from Ahmedabad. Tell us your destination country
          and we&apos;ll quote door-to-door or FOB — one invoice, one
          contact, no coordination on your side.
        </p>
      </div>
      <div className="faq-col">
        <h2 id="faq">06 / FREQUENT QUESTIONS</h2>
        <div>
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
                  <span className="sign">{open ? "–" : "+"}</span>
                </button>
                {open && <p className="faq-answer">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
