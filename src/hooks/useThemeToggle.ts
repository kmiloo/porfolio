"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

function subscribe() {
  return () => {};
}

export function useThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return {
    isDark,
    mounted,
    toggleTheme,
  };
}
