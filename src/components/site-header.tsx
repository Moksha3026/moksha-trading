"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter((el): el is Element => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header ${scrolled || menuOpen ? "scrolled" : ""}`}
      >
        <a href="#top" className="logo" onClick={closeMenu}>
          MOKSHA<span>TRADING</span>
        </a>
        <nav className="site-nav">
          <div className="site-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeHref === link.href ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#enquiry" className="header-cta">
            Get a quote
          </a>
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${i * 40 + 80}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#enquiry"
          className="mobile-menu-cta"
          onClick={closeMenu}
          style={{
            transitionDelay: menuOpen
              ? `${NAV_LINKS.length * 40 + 80}ms`
              : "0ms",
          }}
        >
          Get a quote →
        </a>
      </div>
    </>
  );
}
