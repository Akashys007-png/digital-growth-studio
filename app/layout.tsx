import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ThemeProvider from "@/components/providers/ThemeProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://digital-growth-studio-one.vercel.app";

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
    title: "Digital Growth Studio | Digital Growth for Small Businesses",
    description:
      "Helping small businesses grow through professional websites, SEO, AI automation, branding, analytics, and modern digital technology.",
    url: "/",
    siteName: "Digital Growth Studio",
    locale: "en_US",
    type: "website",
   images: [
  {
    url: "/images/og/home.png",
    width: 1200,
    height: 630,
    alt: "Digital Growth Studio — Helping Small Businesses Grow Through Technology",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Growth Studio | Digital Growth for Small Businesses",
    description:
      "Helping small businesses grow through professional websites, SEO, AI automation, branding, analytics, and modern digital technology.",
    images: ["/images/og/home.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: "Digital Growth Studio",
  url: siteUrl,
  description:
    "Professional websites, SEO, branding, AI automation, analytics, and digital growth solutions for small businesses.",
  logo: `${siteUrl}/images/brand/logo.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  email: "mailto:Akash.yerehalli.satish@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Website Development",
    "SEO",
    "Branding",
    "AI Automation",
    "Analytics",
  ],
  foundingDate: "2026",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ScrollProgress />

          <a className="skip" href="#main">
            Skip to content
          </a>

          <Header />

          <main id="main">
  <PageTransition>
    {children}
  </PageTransition>
</main>

          <Footer />
        </ThemeProvider>

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <GoogleAnalytics gaId="G-W7919KGR4W" />
      </body>
    </html>
  );
}