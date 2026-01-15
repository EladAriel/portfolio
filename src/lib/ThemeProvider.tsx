'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Force dark theme by clearing any existing localStorage preference on mount
  useEffect(() => {
    const storageKey = 'portfolio-theme';
    const current = localStorage.getItem(storageKey);
    // If anything other than 'dark' is stored, override it
    if (current !== 'dark') {
      localStorage.setItem(storageKey, 'dark');
      // Force page refresh to apply theme
      if (current !== null) {
        window.location.reload();
      }
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="portfolio-theme"
      enableColorScheme={false}
      disableTransitionOnChange={false}
      forcedTheme="dark"
    >
      {children}
    </NextThemesProvider>
  );
}
