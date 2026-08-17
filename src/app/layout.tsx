import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { CONTACT, SITE_URL } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

// Geometric grotesque for headlines and UI labels.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const title = "Moksha Trading — Garment Sourcing, Printing & Export";
const description =
  "GST-registered, IEC-licensed garment sourcing, printing and export from Ahmedabad, Gujarat. Cotton and sports T-shirts, jeans, pants and shirts — no minimum order quantity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Moksha Trading",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  verification: {
    google: [
      // sanjaysinh0044@gmail.com — moksha-trading.vercel.app property
      "Bo2VFjSt5pza2lrZeMLcRduov4I6c4TkEJNcbcECZw8",
      // mokshatrading30@gmail.com — www.mokshaexport.com property
      "rGKFBApI4IIrKiMZu3OiCjIHhnQi1V6FW7THXkqsKuM",
    ],
  },
};

// Ties the firm name to this domain for Google, since the two don't match.
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Moksha Trading",
  url: SITE_URL,
  description,
  email: CONTACT.email,
  telephone: "+917990302150",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body>
        {/* Ambient colour behind the whole page — the warm/cool pair is what
            keeps a near-black canvas from reading as flat grey. */}
        <div className="glow-field" aria-hidden="true">
          <span className="glow-orb glow-orb--warm" />
          <span className="glow-orb glow-orb--cool" />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
