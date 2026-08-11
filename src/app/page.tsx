import { AboutSection } from "@/components/about-section";
import { CredentialStrip } from "@/components/credential-strip";
import { EnquirySection } from "@/components/enquiry-section";
import { ExportsFaqSection } from "@/components/exports-faq-section";
import { Hero } from "@/components/hero";
import { PrintingSection } from "@/components/printing-section";
import { ProcessSection } from "@/components/process-section";
import { ProductsSection } from "@/components/products-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <CredentialStrip />
      <PrintingSection />
      <ProductsSection />
      <ProcessSection />
      <AboutSection />
      <ExportsFaqSection />
      <EnquirySection />
      <SiteFooter />
    </>
  );
}
