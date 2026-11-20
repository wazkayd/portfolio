import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteShell } from "@/components/layout/SiteShell";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "Wazka — Product-minded Software Engineer", template: "%s | Wazka" },
  description: "Software engineering and product development portfolio. I build digital products that solve real business problems.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7f6f2" }, { media: "(prefers-color-scheme: dark)", color: "#141a19" }] };

const themeInit = `(()=>{try{const s=localStorage.getItem('portfolio-theme');const d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;const r=document.documentElement;r.dataset.theme=d?'dark':'light';r.style.colorScheme=d?'dark':'light'}catch{document.documentElement.dataset.theme='light'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><Script id="theme-init" strategy="beforeInteractive">{themeInit}</Script></head><body><a className="skipLink" href="#main-content">Skip to content</a><SiteShell>{children}</SiteShell></body></html>;
}
