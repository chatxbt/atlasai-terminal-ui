import { Metadata } from "next";

export const seoMetadata: Metadata = {
  metadataBase: new URL("https://atlasai.io"),
  title: "AtlasAi - Interactive Documentation Shell by ChatXBT",
  description:
    "Transform your documentation into an interactive experience with AtlasAi. A powerful documentation shell that provides real-time command execution, custom integration, and seamless API management for enhanced user understanding.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#000000" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atlasai.io",
    siteName: "AtlasAi Documentation Platform",
    title: "AtlasAi - Transform Documentation Into Interactive Experiences",
    description:
      "AtlasAi revolutionizes documentation with an interactive shell, real-time command execution, and seamless API integration. Built by ChatXBT to enhance developer experience and product understanding.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AtlasAi - Interactive Documentation Platform",
        type: "image/png",
        secureUrl: "https://atlasai.io/og-image.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ChatXBT_AI",
    creator: "@ChatXBT_AI",
    title: "AtlasAi - Interactive Documentation Shell",
    description:
      "Transform documentation into interactive experiences. Real-time command execution, custom integration, and API management for enhanced user understanding.",
    images: ["https://atlasai.io/og-image.png"],
  },

  keywords: [
    "documentation shell",
    "interactive docs",
    "API documentation",
    "developer tools",
    "documentation platform",
    "AtlasAi",
    "ChatXBT",
    "real-time documentation",
    "command execution",
    "API integration",
    "developer experience",
    "documentation management",
  ],

  authors: [{ name: "ChatXBT Team", url: "https://chatxbt.com" }],

  category: "Developer Tools",

  applicationName: "AtlasAi",
  generator: "Next.js",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://atlasai.io",
    languages: {
      "en-US": "https://atlasai.io",
    },
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};
