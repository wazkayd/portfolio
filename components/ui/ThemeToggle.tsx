"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("portfolio-theme");
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (value: boolean) => {
      root.dataset.theme = value ? "dark" : "light";
      root.style.colorScheme = value ? "dark" : "light";
      setDark(value);
    };
    apply(stored ? stored === "dark" : media.matches);
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("portfolio-theme")) apply(event.matches);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    setDark(next);
  }

  return <IconButton label={`Switch to ${dark ? "light" : "dark"} theme`} onClick={toggle}><span suppressHydrationWarning>{dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</span></IconButton>;
}
