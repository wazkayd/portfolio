import type { Metadata } from "next";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : undefined);

export const siteOrigin = (() => {
  if (!configuredOrigin) return undefined;

  try {
    const url = new URL(configuredOrigin);
    return url.protocol === "https:" ? url : undefined;
  } catch {
    return undefined;
  }
})();

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
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary",
      title: shareTitle,
      description,
    },
  };
}
