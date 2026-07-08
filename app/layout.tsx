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
import { getOrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { getDefaultSiteMetadata } from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = getDefaultSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableAnalytics =
    process.env.NODE_ENV === "production" && !!GA_MEASUREMENT_ID;

  return (
    <html lang="en-NG" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd()),
          }}
        />
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
            <Suspense fallback={null}>
              <GoogleAnalytics gaId="G-CMXBY1MG8B"  />
            </Suspense>
          </>
        ) : null}
      </body>
    </html>
  );
}
