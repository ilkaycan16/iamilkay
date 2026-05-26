import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { FloatingActions, Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { brand } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamilkay.co.uk"),
  title: {
    default: "IAMILKAY® | Global AI, Software & Commerce Infrastructure",
    template: "%s | IAMILKAY®"
  },
  description: "IAMILKAY® is a United Kingdom based AI, software, mobile applications, performance intelligence and global commerce operations company.",
  openGraph: {
    title: "IAMILKAY®",
    description: "United Kingdom based global AI, software and commerce infrastructure.",
    url: "https://iamilkay.co.uk",
    siteName: "IAMILKAY®",
    locale: "en_GB",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <FloatingActions />
        </LanguageProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: brand.name,
              url: "https://iamilkay.co.uk",
              address: brand.address,
              identifier: brand.companyNumber,
              sameAs: [`https://t.me/${brand.social.replace("@", "")}`]
            })
          }}
        />
      </body>
    </html>
  );
}
