import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
// import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Primquisite Real Estate";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: "Primquisite Real Estate",
  description: "Primquisite Real Estate",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Primquisite Real Estate",
    description: "Primquisite Real Estate",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/logo.svg" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" && !!GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        {enableAnalytics ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `}
            </Script>
            <Script
              id="jsonld-org"
              type="application/ld+json"
              strategy="afterInteractive"
            >
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: SITE_NAME,
                url: process.env.NEXT_PUBLIC_SITE_URL ?? undefined,
                logo: process.env.NEXT_PUBLIC_SITE_URL
                  ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/logo.svg`
                  : undefined,
              })}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalytics gaId="G-CMXBY1MG8B"  />
            </Suspense>
          </>
        ) : null}
      </body>
    </html>
  );
}
