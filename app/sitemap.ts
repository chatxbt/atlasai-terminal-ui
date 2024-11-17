import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://atlasai.io",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["/og-image.png"],
    },
  ];
}