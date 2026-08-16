import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const title = "Moksha Trading — Garment Sourcing, Printing & Export";
const description =
  "GST-registered, IEC-licensed garment sourcing, printing and export from Ahmedabad, Gujarat. Cotton and sports T-shirts, jeans, pants and shirts — no minimum order quantity.";

export const metadata: Metadata = {
  metadataBase: new URL("https://moksha-trading.vercel.app"),
  title,
  description,
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
    google: "Bo2VFjSt5pza2lrZeMLcRduov4I6c4TkEJNcbcECZw8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
