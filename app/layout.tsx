import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Digital Growth Studio | Digital Growth for Small Businesses",
    template: "%s | Digital Growth Studio",
  },

  description:
    "Professional websites, SEO, AI automation, branding, analytics, and digital solutions that help small businesses attract customers and grow.",

  applicationName: "Digital Growth Studio",

  category: "Business",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Digital Growth Studio",
    "Website Development",
    "Small Business Websites",
    "SEO Services",
    "AI Automation",
    "Business Automation",
    "Web Design",
    "Digital Marketing",
    "Branding",
    "Analytics",
    "Business Growth",
  ],

  authors: [
    {
      name: "Digital Growth Studio",
    },
  ],

  creator: "Digital Growth Studio",

  publisher: "Digital Growth Studio",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Digital Growth Studio",

    description:
      "Helping small businesses grow through websites, SEO, AI automation, and digital technology.",

    url: siteUrl,

    siteName: "Digital Growth Studio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Growth Studio",

    description:
      "Helping small businesses grow through websites, SEO, AI automation, and digital technology.",

    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",

    "@type": ["Organization", "ProfessionalService"],

    "@id": `${siteUrl}/#organization`,

    name: "Digital Growth Studio",

    url: siteUrl,

    description:
      "Professional websites, SEO, branding, AI automation, analytics, and digital growth solutions for small businesses.",

    logo: `${siteUrl}/logo.png`,

    image: `${siteUrl}/images/og-image.jpg`,

    email: "Akash.yerehalli.satish@gmail.com",

    areaServed: "United States",

    serviceType: [
      "Website Development",
      "SEO",
      "Branding",
      "AI Automation",
      "Analytics",
    ],

    foundingDate: "2026",

    priceRange: "$$",

    sameAs: [],
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <a className="skip" href="#main">
          Skip to content
        </a>

        <Header />

        <main id="main">
          {children}
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}