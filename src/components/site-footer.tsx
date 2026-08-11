import { CONTACT } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="brand">Moksha Trading · Ahmedabad, Gujarat, India</span>
      <span>IEC licensed · Garment sourcing &amp; export</span>
      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
    </footer>
  );
}
