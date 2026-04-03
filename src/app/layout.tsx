import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ConditionalSiteChrome from "@/components/layout/ConditionalSiteChrome";

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
      <body>
        <ConditionalSiteChrome>{children}</ConditionalSiteChrome>
      </body>
    </html>
  );
}
