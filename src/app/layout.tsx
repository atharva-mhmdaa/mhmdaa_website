import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalSiteChrome from "@/components/layout/ConditionalSiteChrome";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Michael Hill, MD & Associates",
    template: "%s | Michael Hill, MD & Associates",
  },
  description:
    "Physician-led hospital operations consulting transforming healthcare revenue cycle performance nationwide.",
  openGraph: {
    type: "website",
    siteName: "Michael Hill, MD & Associates",
    images: [{ url: "https://mhmdaa.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CKQXGG0L8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CKQXGG0L8');
          `}
        </Script>
      </head>
      <body>
        <ConditionalSiteChrome>{children}</ConditionalSiteChrome>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
