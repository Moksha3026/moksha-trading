import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSansGujarati = Noto_Sans_Gujarati({
  variable: "--font-noto-gujarati",
  subsets: ["gujarati"],
});

export const metadata: Metadata = {
  title: "Moksha Trading — Garment Sourcing, Printing & Export",
  description:
    "GST-registered, IEC-licensed garment sourcing, printing and export from Ahmedabad, Gujarat. Cotton and sports T-shirts, jeans, pants and shirts — no minimum order quantity.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexMono.variable} ${notoSansGujarati.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
