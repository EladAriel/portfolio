'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Migrate from old forced-dark storage key to new versioned key
  useEffect(() => {
    const oldKey = 'portfolio-theme';
    const newKey = 'portfolio-theme-v2';

    try {
      const oldValue = localStorage.getItem(oldKey);

      // If old key exists, migrate it (preserve forced-dark users to light mode)
      if (oldValue !== null && oldValue === 'dark') {
        // User was forced to dark mode, preserve their preference
        localStorage.setItem(newKey, 'dark');
        localStorage.removeItem(oldKey);
      } else if (oldValue !== null) {
        // Any other value, use new system
        localStorage.setItem(newKey, oldValue);
        localStorage.removeItem(oldKey);
      }
    } catch (error) {
      // localStorage unavailable, silently continue (system preference will be used)
      console.debug('Theme storage migration skipped:', error instanceof Error ? error.message : 'Unknown error');
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="portfolio-theme-v2"
      enableColorScheme={true}
      disableTransitionOnChange={false}
      forcedTheme={undefined}
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  );
}
