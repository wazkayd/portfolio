import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/seo";

export const dynamic = "force-dynamic";

const routes = ["/", "/projects", "/capabilities", "/services", "/experience", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin || process.env.VERCEL_ENV === "preview") return [];

  return routes.map((route, index) => ({
    url: new URL(route, siteOrigin).toString(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
