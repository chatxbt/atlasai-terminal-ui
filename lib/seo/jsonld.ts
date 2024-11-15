import { Organization, Product, WebApplication, WithContext } from "schema-dts";

export const organizationJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChatXBT",
  url: "https://chatxbt.com",
  logo: "https://atlasai.io/logo.png",
  sameAs: [
    "https://twitter.com/ChatXBT_AI",
    // "https://github.com/chatxbt",
  ],
  // contactPoint: {
  //   "@type": "ContactPoint",
  //   telephone: "",
  //   contactType: "customer support",
  //   email: "support@chatxbt.com",
  //   availableLanguage: ["English"],
  // },
};

export const productJsonLd: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AtlasAi",
  description:
    "An interactive documentation shell that transforms technical documentation into engaging, interactive experiences with real-time command execution capabilities.",
  brand: {
    "@type": "Brand",
    name: "ChatXBT",
  },
  manufacturer: {
    "@type": "Organization",
    name: "ChatXBT",
  },
  category: "Developer Tools/Documentation Platform",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "ChatXBT",
    },
  },
};

export const applicationJsonLd: WithContext<WebApplication> = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AtlasAi",
  url: "https://atlasai.io",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Interactive documentation shell",
    "Real-time command execution",
    "Custom documentation integration",
    "User-friendly interface",
    "API key management",
  ],
  screenshot: "https://atlasai.io/og-image.png",
  softwareVersion: "1.0.0",
  author: {
    "@type": "Organization",
    name: "ChatXBT",
  },
  provider: {
    "@type": "Organization",
    name: "ChatXBT",
  },
  requirements: "Modern web browser with JavaScript enabled",
  // installUrl: "https://atlasai.io/docs/installation",
  permissions: "API access",
};

export const getJsonLd = () => {
  return [organizationJsonLd, productJsonLd, applicationJsonLd];
};
