import type { Metadata } from "next";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "MacroKinetic | Self-Service Kiosks, Hotel Check-in & AI",
    template: "%s | MacroKinetic",
  },
  description: company.positioning,
  metadataBase: new URL(company.siteUrl),
  openGraph: {
    title: "MacroKinetic | Self-Service Kiosks, Hotel Check-in & AI",
    description: company.positioning,
    type: "website",
    siteName: "MacroKinetic",
    locale: "en_GB",
    url: company.siteUrl,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "MacroKinetic intelligent customer service counter" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.jpg"],
    title: "MacroKinetic | Self-Service Kiosks, Hotel Check-in & AI",
    description: company.positioning,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="bg-canvas text-ink antialiased">
        <FloatingNav />
        <main>{children}</main>
        <ContactSection />
        <Footer />
        <Analytics />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
