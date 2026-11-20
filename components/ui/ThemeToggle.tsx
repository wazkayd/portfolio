"use client";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { useTheme } from "@/components/ui/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return <IconButton label={`Switch to ${dark ? "light" : "dark"} theme`} onClick={toggleTheme}><span>{dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</span></IconButton>;
}
