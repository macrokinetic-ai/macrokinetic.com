import type { Metadata } from "next";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "MacroKinetic | Global Corporate Hub",
    template: "%s | MacroKinetic",
  },
  description: company.positioning,
  metadataBase: new URL("https://macrokinetic.com"),
  openGraph: {
    title: "MacroKinetic | Global Corporate Hub",
    description: company.positioning,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink antialiased">
        <FloatingNav />
        <main>{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
