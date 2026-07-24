import type { Metadata } from "next";

const siteUrl = "https://digitalgrowthstudio.com";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
}: SEOOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Digital Growth Studio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}