import { CONTACT } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="brand">MOKSHA TRADING · AHMEDABAD, GUJARAT, INDIA</span>
      <span>IEC LICENSED · GARMENT SOURCING &amp; EXPORT</span>
      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email.toUpperCase()}</a>
    </footer>
  );
}
