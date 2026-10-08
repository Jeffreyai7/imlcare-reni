"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const label = mounted ? `Switch to ${nextTheme} mode` : "Toggle color theme";

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-10 rounded-xl"
      aria-label={label}
      title={label}
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
    >
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
    </Button>
  );
}
