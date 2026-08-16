"use client";

import { useEffect, useState } from "react";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enquiry = document.getElementById("enquiry");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const enquiryRect = enquiry?.getBoundingClientRect();
      const inEnquiry = enquiryRect
        ? enquiryRect.top < window.innerHeight && enquiryRect.bottom > 0
        : false;
      setVisible(pastHero && !inEnquiry);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#enquiry"
      className={`mobile-cta-bar ${visible ? "visible" : ""}`}
    >
      Get a quote →
    </a>
  );
}
