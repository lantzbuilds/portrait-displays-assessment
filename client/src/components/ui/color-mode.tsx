"use client";

import * as React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import { IconButton, Skeleton, ClientOnly } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

// Public API matching Chakra v3 docs
// ---------------------------------
export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  // attribute="class" applies `light` / `dark` class to <html> for Chakra v3 tokens
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export function useColorMode() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const mode = (resolvedTheme ?? theme) as "light" | "dark" | undefined;
  const colorMode: "light" | "dark" = mode === "dark" ? "dark" : "light";

  return {
    colorMode,
    setColorMode: (value: "light" | "dark") => setTheme(value),
    toggleColorMode: () => setTheme(colorMode === "light" ? "dark" : "light"),
  };
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}

export function LightMode({ children }: { children: React.ReactNode }) {
  return <div className="light">{children}</div>;
}

export function DarkMode({ children }: { children: React.ReactNode }) {
  return <div className="dark">{children}</div>;
}

export function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        aria-label={colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
        onClick={toggleColorMode}
        size="sm"
        variant="outline"
      >
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  );
}

// Optional: single Provider that includes Chakra + ColorMode
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}