"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, METHOD_OPTIONS, PRODUCT_OPTIONS } from "@/lib/content";

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
    <section id="enquiry" className="enquiry-section">
      <div className="enquiry-copy">
        <h2>Send us your spec</h2>
        <p>
          Garment, quantity, print method and delivery country — we&apos;ll
          come back with a quote and the right supplier lined up. You order,
          we deliver.
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
              className="contact-phone"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="enquiry-form-col">
        {status === "sent" && (
          <div className="enquiry-sent">
            Thanks — your enquiry has been sent. We&apos;ll get back to you
            shortly.
          </div>
        )}
        {status === "error" && (
          <div className="enquiry-sent enquiry-sent--error">
            Something went wrong sending that. Please try again, or email{" "}
            <strong>{CONTACT.email}</strong> directly.
          </div>
        )}
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="enquiry-form-row">
            <input
              value={form.name}
              onChange={field("name")}
              placeholder="Name"
              required
            />
            <input
              value={form.company}
              onChange={field("company")}
              placeholder="Company"
            />
          </div>
          <div className="enquiry-form-row">
            <input
              value={form.email}
              onChange={field("email")}
              placeholder="Email"
              type="email"
              required
            />
            <input
              value={form.phone}
              onChange={field("phone")}
              placeholder="WhatsApp number"
            />
          </div>
          <div className="enquiry-form-row">
            <select value={form.product} onChange={field("product")}>
              {PRODUCT_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <select value={form.method} onChange={field("method")}>
              {METHOD_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="enquiry-form-row">
            <input
              value={form.qty}
              onChange={field("qty")}
              placeholder="Quantity (pcs)"
            />
            <input
              value={form.country}
              onChange={field("country")}
              placeholder="Delivery country"
            />
          </div>
          <textarea
            value={form.notes}
            onChange={field("notes")}
            placeholder="Artwork notes, fabric, deadline"
          />
          <button
            type="submit"
            className="enquiry-submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "SENDING…" : "SEND ENQUIRY"}
          </button>
          <div className="enquiry-note">
            ARTWORK KEPT CONFIDENTIAL · NDA ON REQUEST
          </div>
        </form>
      </div>
    </section>
  );
}
