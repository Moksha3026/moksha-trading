"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, METHOD_OPTIONS, PRODUCT_OPTIONS } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  qty: "",
  country: "",
  notes: "",
  product: PRODUCT_OPTIONS[0],
  method: METHOD_OPTIONS[0],
};

type Status = "idle" | "submitting" | "sent" | "error";

export function EnquirySection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const field =
    (key: keyof typeof initialForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="enquiry" className="section enquiry-section">
      <div className="container">
        <div className="enquiry-grid">
          <Reveal>
            <div className="enquiry-copy">
              <span className="kicker">Send us your spec</span>
              <h2 className="section-title">Let&apos;s make it real.</h2>
              <p>
                Garment, quantity, print method and delivery country —
                we&apos;ll come back with a quote and the right supplier
                lined up. You order, we deliver.
              </p>
              <div className="contact-list">
                <div>
                  <div className="contact-label">EMAIL</div>
                  <a href={`mailto:${CONTACT.email}`} className="contact-value">
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <div className="contact-label">LOCATION</div>
                  <div className="contact-value">{CONTACT.location}</div>
                </div>
                <div>
                  <div className="contact-label">PHONE / WHATSAPP</div>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value contact-phone"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              {status === "sent" && (
                <div className="enquiry-sent">
                  Thanks — your enquiry has been sent. We&apos;ll get back to
                  you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="enquiry-sent enquiry-sent--error">
                  Something went wrong sending that. Please try again, or
                  email <strong>{CONTACT.email}</strong> directly.
                </div>
              )}
              <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="enquiry-form-row">
                  <label className="field">
                    <span className="field-label">Name</span>
                    <input value={form.name} onChange={field("name")} required />
                  </label>
                  <label className="field">
                    <span className="field-label">Company</span>
                    <input value={form.company} onChange={field("company")} />
                  </label>
                </div>
                <div className="enquiry-form-row">
                  <label className="field">
                    <span className="field-label">Email</span>
                    <input
                      value={form.email}
                      onChange={field("email")}
                      type="email"
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field-label">WhatsApp number</span>
                    <input value={form.phone} onChange={field("phone")} />
                  </label>
                </div>
                <div className="enquiry-form-row">
                  <label className="field">
                    <span className="field-label">Product</span>
                    <select value={form.product} onChange={field("product")}>
                      {PRODUCT_OPTIONS.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span className="field-label">Print method</span>
                    <select value={form.method} onChange={field("method")}>
                      {METHOD_OPTIONS.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="enquiry-form-row">
                  <label className="field">
                    <span className="field-label">Quantity (pcs)</span>
                    <input value={form.qty} onChange={field("qty")} />
                  </label>
                  <label className="field">
                    <span className="field-label">Delivery country</span>
                    <input value={form.country} onChange={field("country")} />
                  </label>
                </div>
                <label className="field">
                  <span className="field-label">Artwork notes, fabric, deadline</span>
                  <textarea value={form.notes} onChange={field("notes")} />
                </label>
                <button
                  type="submit"
                  className="btn btn-primary enquiry-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                </button>
                <div className="enquiry-note">
                  Artwork kept confidential · NDA on request
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
