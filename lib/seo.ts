import type { Metadata } from "next";
import { shareImageAlt, shareImageContentType, shareImageSize } from "@/lib/share-image";

function httpsOrigin(value: string | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const deploymentOrigin = process.env.VERCEL_ENV === "production" ? process.env.VERCEL_URL : undefined;

const configuredOrigin = httpsOrigin(process.env.NEXT_PUBLIC_SITE_URL)
  ?? httpsOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  ?? httpsOrigin(deploymentOrigin);

export const siteOrigin = (() => {
  if (!configuredOrigin) return undefined;

  try {
    const url = new URL(configuredOrigin);
    return url.protocol === "https:" ? url : undefined;
  } catch {
    return undefined;
  }
})();

const shareImage = {
  alt: shareImageAlt,
  type: shareImageContentType,
  width: shareImageSize.width,
  height: shareImageSize.height,
} as const;

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = siteOrigin ? new URL(path, siteOrigin).toString() : undefined;
  const shareTitle = title === "Home" ? "Wazka — Product-minded Software Engineer" : `${title} | Wazka`;

  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: shareTitle,
      description,
      type: "website",
      siteName: "Wazka",
      locale: "en_US",
      ...(canonical ? { url: canonical } : {}),
      // A nested openGraph object replaces the root file image, so each route names it explicitly.
      images: [{ url: "/opengraph-image", ...shareImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [{ url: "/twitter-image", ...shareImage }],
    },
  };
}
