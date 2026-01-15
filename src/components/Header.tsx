'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Briefcase, Moon, Sun } from 'lucide-react';

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine active theme: use explicit theme if set, otherwise use resolvedTheme
  const activeTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <header className="header-container">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center gap-2">
          <div className="logo-container">
            <Briefcase size={24} />
          </div>
          <h1 className="gradient-text text-2xl font-bold hidden sm:block">
            Elad Ariel Portfolio
          </h1>
          <h1 className="gradient-text text-xl font-bold sm:hidden">
            Portfolio
          </h1>
        </div>

        {/* Theme Toggle - Two Button Style */}
        {mounted && (
          <div className="theme-toggle-container">
            <button
              onClick={() => setTheme('light')}
              className={`theme-button ${activeTheme === 'light' ? 'theme-button-active' : ''}`}
              title="Light Mode"
              aria-label="Light Mode"
            >
              <Sun size={18} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`theme-button ${activeTheme === 'dark' ? 'theme-button-active' : ''}`}
              title="Dark Mode"
              aria-label="Dark Mode"
            >
              <Moon size={18} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
