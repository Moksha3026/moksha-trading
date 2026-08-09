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

export function EnquirySection() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const field =
    (key: keyof typeof initialForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      "Name: " + form.name,
      "Company: " + form.company,
      "Email: " + form.email,
      "WhatsApp: " + form.phone,
      "Product: " + form.product,
      "Print method: " + form.method,
      "Quantity: " + form.qty,
      "Delivery country: " + form.country,
      "",
      "Notes:",
      form.notes,
    ].join("\n");

    window.location.href =
      "mailto:" +
      CONTACT.email +
      "?subject=" +
      encodeURIComponent(
        "Quote enquiry — " + (form.company || form.name || "New enquiry"),
      ) +
      "&body=" +
      encodeURIComponent(body);

    setSent(true);
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
        {sent && (
          <div className="enquiry-sent">
            Your email draft is open. If nothing appeared, write to{" "}
            <strong>{CONTACT.email}</strong> directly.
          </div>
        )}
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="enquiry-form-row">
            <input
              value={form.name}
              onChange={field("name")}
              placeholder="Name"
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
          <button type="submit" className="enquiry-submit">
            SEND ENQUIRY
          </button>
          <div className="enquiry-note">
            ARTWORK KEPT CONFIDENTIAL · NDA ON REQUEST
          </div>
        </form>
      </div>
    </section>
  );
}
