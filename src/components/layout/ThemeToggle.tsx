"use client";

import { useThemeToggle } from "@/hooks/useThemeToggle";

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useThemeToggle();
  const label = mounted ? (isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro") : "Cambiar tema";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={mounted ? isDark : false}
      onClick={toggleTheme}
      className="group flex size-10 items-center justify-center rounded-full border border-border bg-surface text-lg text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/60 hover:bg-muted/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <span aria-hidden="true" className="leading-none transition-transform duration-300 group-hover:rotate-12">
        {mounted ? (isDark ? "☀" : "☾") : "◌"}
      </span>
    </button>
  );
}
