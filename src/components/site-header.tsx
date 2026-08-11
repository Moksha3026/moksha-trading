"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="logo">
        MOKSHA<span>TRADING</span>
      </a>
      <nav className="site-nav">
        <div className="site-nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#enquiry" className="header-cta">
          Get a quote
        </a>
      </nav>
    </header>
  );
}
