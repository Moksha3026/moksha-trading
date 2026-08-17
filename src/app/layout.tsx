import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import { CONTACT, SITE_URL } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

// Display face for headlines — the contrast against Archivo is what gives
// the page a voice rather than a single flat weight everywhere.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
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
    <html lang="en" className={`${archivo.variable} ${fraunces.variable}`}>
      <body>
        {/* Maps every photo's shadows to indigo and highlights to brass, so
            the stock imagery reads as one owned set rather than four sources. */}
        <svg aria-hidden="true" focusable="false" className="filter-defs">
          <filter id="duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.34 0.5 0.16 0 0
                      0.34 0.5 0.16 0 0
                      0.34 0.5 0.16 0 0
                      0    0   0    1 0"
            />
            {/* Shadows to indigo, highlights to a warm off-white rather than
                full brass — a heavier grade buries the garment detail buyers
                are here to inspect. */}
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.08 0.96" />
              <feFuncG type="table" tableValues="0.10 0.89" />
              <feFuncB type="table" tableValues="0.21 0.75" />
            </feComponentTransfer>
          </filter>
        </svg>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
