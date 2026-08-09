import { NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="logo">
        MOKSHA<span>TRADING</span>
      </a>
      <nav className="site-nav">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label.toUpperCase()}
          </a>
        ))}
      </nav>
      <a href="#enquiry" className="header-cta">
        GET A QUOTE →
      </a>
    </header>
  );
}
