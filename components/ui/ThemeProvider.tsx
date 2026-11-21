"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    const apply = (next: Theme) => {
      root.dataset.theme = next;
      root.style.colorScheme = next;
      setTheme(next);
    };
    apply(stored ?? (media.matches ? "dark" : "light"));
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("portfolio-theme")) apply(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    toggleTheme() {
      const next = theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
      localStorage.setItem("portfolio-theme", next);
      setTheme(next);
    },
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
