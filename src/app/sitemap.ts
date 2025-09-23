import type { MetadataRoute } from "next";
import { servers } from "@/data/servers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL("https://a2a-hub.example.com");
  const pages: MetadataRoute.Sitemap = [
    { url: new URL("/", base).toString(), priority: 1.0, changeFrequency: "daily" },
    { url: new URL("/about", base).toString(), priority: 0.6, changeFrequency: "monthly" },
  ];

  const serverPages: MetadataRoute.Sitemap = servers.map((s) => ({
    url: new URL(`/servers/${s.slug}`, base).toString(),
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  return [...pages, ...serverPages];
}
